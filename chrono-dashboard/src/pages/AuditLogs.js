import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Shield, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:3000/api/v1';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatDate(dateStr) {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    return d.toLocaleString('en-PH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

function actionBadgeStyle(action) {
    const map = {
        UPDATE_USER:      { background: '#EFF6FF', color: '#1D4ED8', border: '1px solid #BFDBFE' },
        DELETE_USER:      { background: '#FEF2F2', color: '#B91C1C', border: '1px solid #FECACA' },
        DEACTIVATE_USER:  { background: '#FFF7ED', color: '#C2410C', border: '1px solid #FED7AA' },
        RESTORE_USER:     { background: '#F0FDF4', color: '#15803D', border: '1px solid #BBF7D0' },
        UPDATE_SETTINGS:  { background: '#FAF5FF', color: '#7E22CE', border: '1px solid #E9D5FF' },
        RESPOND_FEEDBACK: { background: '#F0F9FF', color: '#0369A1', border: '1px solid #BAE6FD' },
    };
    return map[action] || { background: '#F8FAFC', color: '#475569', border: '1px solid #E2E8F0' };
}

// Renders the "Changes" column content.
// Shows each changed field as: fieldName: "old" → "new"
function ChangesCell({ oldValue, newValue }) {
    if (!oldValue || !newValue || Object.keys(oldValue).length === 0) {
        return <span style={{ color: '#94A3B8', fontSize: '0.75rem' }}>No field changes recorded</span>;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {Object.keys(oldValue).map(field => (
                <div key={field} style={{ fontSize: '0.78rem', lineHeight: 1.5 }}>
                    <span style={{ fontWeight: 700, color: '#475569', textTransform: 'capitalize' }}>
                        {field}:
                    </span>{' '}
                    <span style={{
                        background: '#FEF2F2',
                        color: '#991B1B',
                        padding: '1px 5px',
                        borderRadius: '4px',
                        fontFamily: 'monospace'
                    }}>
                        "{String(oldValue[field])}"
                    </span>
                    <span style={{ margin: '0 4px', color: '#94A3B8' }}>→</span>
                    <span style={{
                        background: '#F0FDF4',
                        color: '#166534',
                        padding: '1px 5px',
                        borderRadius: '4px',
                        fontFamily: 'monospace'
                    }}>
                        "{String(newValue[field])}"
                    </span>
                </div>
            ))}
        </div>
    );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

const AuditLogs = () => {
    const [logs, setLogs]       = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError]     = useState('');
    const [limit, setLimit]     = useState(50);
    const [sortDir, setSortDir] = useState('desc'); // 'desc' = newest first

    const fetchLogs = useCallback(async () => {
        setLoading(true);
        setError('');
        try {
            const token = localStorage.getItem('teacherToken');
            const { data } = await axios.get(`${API_BASE}/admin/audit-logs?limit=${limit}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setLogs(data.logs || []);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to load audit logs.');
        } finally {
            setLoading(false);
        }
    }, [limit]);

    useEffect(() => { fetchLogs(); }, [fetchLogs]);

    const sortedLogs = [...logs].sort((a, b) => {
        const diff = new Date(b.createdAt) - new Date(a.createdAt);
        return sortDir === 'desc' ? diff : -diff;
    });

    const toggleSort = () => setSortDir(prev => prev === 'desc' ? 'asc' : 'desc');

    // --- Styles (inline, matching the existing AdminPanel aesthetic) ---
    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '0.875rem',
        fontFamily: 'Nunito, sans-serif'
    };

    const thStyle = {
        padding: '10px 14px',
        textAlign: 'left',
        fontWeight: 800,
        fontSize: '0.7rem',
        textTransform: 'uppercase',
        letterSpacing: '0.07em',
        color: '#64748B',
        borderBottom: '2px solid #E2E8F0',
        background: '#F8FAFC',
        whiteSpace: 'nowrap'
    };

    const tdStyle = {
        padding: '12px 14px',
        borderBottom: '1px solid #F1F5F9',
        verticalAlign: 'top',
        color: '#1E293B'
    };

    return (
        <div>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Shield size={20} color="#4F46E5" />
                    <div>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                            Audit Log
                        </h2>
                        <p style={{ fontSize: '0.78rem', color: '#64748B', margin: 0, marginTop: '2px' }}>
                            Permanent record of admin actions. Records cannot be edited or deleted.
                        </p>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <select
                        value={limit}
                        onChange={e => setLimit(Number(e.target.value))}
                        className="form-select"
                        style={{ width: 'auto' }}
                    >
                        <option value={25}>Last 25</option>
                        <option value={50}>Last 50</option>
                        <option value={100}>Last 100</option>
                        <option value={200}>Last 200</option>
                    </select>
                    <button
                        onClick={fetchLogs}
                        disabled={loading}
                        className="btn-outline-dark"
                        style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                        <RefreshCw size={14} className={loading ? 'spin' : ''} />
                        Refresh
                    </button>
                </div>
            </div>

            {/* Error state */}
            {error && (
                <div style={{
                    background: '#FEF2F2',
                    border: '1px solid #FECACA',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: '#B91C1C',
                    fontSize: '0.875rem',
                    marginBottom: '16px'
                }}>
                    {error}
                </div>
            )}

            {/* Table */}
            <div style={{
                background: '#ffffff',
                border: '2px solid #E2E8F0',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
                {loading ? (
                    <div style={{ padding: '48px', textAlign: 'center', color: '#94A3B8', fontWeight: 700 }}>
                        Loading audit logs…
                    </div>
                ) : sortedLogs.length === 0 ? (
                    <div style={{ padding: '48px', textAlign: 'center', color: '#94A3B8', fontWeight: 700 }}>
                        No audit log entries yet.
                    </div>
                ) : (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th style={thStyle}>
                                        <button
                                            onClick={toggleSort}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '4px',
                                                fontWeight: 800,
                                                fontSize: '0.7rem',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.07em',
                                                color: '#64748B',
                                                padding: 0,
                                                fontFamily: 'Nunito, sans-serif'
                                            }}
                                        >
                                            Timestamp
                                            {sortDir === 'desc' ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
                                        </button>
                                    </th>
                                    <th style={thStyle}>Admin</th>
                                    <th style={thStyle}>Action</th>
                                    <th style={thStyle}>Target</th>
                                    <th style={thStyle}>Changes</th>
                                    <th style={thStyle}>IP Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedLogs.map((log, i) => (
                                    <tr
                                        key={log._id}
                                        style={{ background: i % 2 === 0 ? '#ffffff' : '#FAFAFA' }}
                                    >
                                        {/* Timestamp */}
                                        <td style={{ ...tdStyle, whiteSpace: 'nowrap', color: '#475569', fontSize: '0.8rem' }}>
                                            {formatDate(log.createdAt)}
                                        </td>

                                        {/* Admin name + role */}
                                        <td style={tdStyle}>
                                            <div style={{ fontWeight: 700 }}>
                                                {log.performedBy?.name || 'Unknown'}
                                            </div>
                                            <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '2px' }}>
                                                {log.performedByRole}
                                            </div>
                                        </td>

                                        {/* Action badge */}
                                        <td style={tdStyle}>
                                            <span style={{
                                                display: 'inline-block',
                                                padding: '3px 8px',
                                                borderRadius: '6px',
                                                fontSize: '0.72rem',
                                                fontWeight: 800,
                                                letterSpacing: '0.04em',
                                                ...actionBadgeStyle(log.action)
                                            }}>
                                                {log.action}
                                            </span>
                                            {log.resource && (
                                                <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '3px' }}>
                                                    {log.resource}
                                                </div>
                                            )}
                                        </td>

                                        {/* Target user ID */}
                                        <td style={{ ...tdStyle, fontSize: '0.75rem', color: '#64748B', fontFamily: 'monospace' }}>
                                            {log.targetId
                                                ? String(log.targetId).slice(-8)
                                                : '—'
                                            }
                                        </td>

                                        {/* Changes column */}
                                        <td style={{ ...tdStyle, minWidth: '260px' }}>
                                            <ChangesCell
                                                oldValue={log.oldValue}
                                                newValue={log.newValue}
                                            />
                                        </td>

                                        {/* IP address */}
                                        <td style={{ ...tdStyle, fontSize: '0.75rem', color: '#94A3B8', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>
                                            {log.ipAddress || '—'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <p style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '10px', textAlign: 'right' }}>
                Showing {sortedLogs.length} of {sortedLogs.length} records · Read-only
            </p>
        </div>
    );
};

export default AuditLogs;