import React from 'react';
import { MessageSquare, ChevronDown, ChevronUp, CheckCircle, Clock, FileText } from 'lucide-react';

const FeedbackSection = ({
    feedbackSearch,
    setFeedbackSearch,
    filteredFeedback,
    feedback,
    expandedFeedback,
    setExpandedFeedback
}) => {
    const getPriorityColor = (priority) => {
        const colors = {
            critical: 'badge-critical',
            high: 'badge-high',
            medium: 'badge-medium',
            low: 'badge-low'
        };
        return colors[priority] || 'badge-default';
    };

    const getPriorityLabel = (priority) => {
        return priority ? priority.charAt(0).toUpperCase() + priority.slice(1) : 'Normal';
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const formatDateTime = (date) => {
        return new Date(date).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="space-y-8">
            <div className="flex-between">
                <div>
                    <h2 className="page-title">Feedback & Support</h2>
                    <p className="page-subtitle">Instructor feedback and support tickets</p>
                </div>
                <input
                    type="text"
                    placeholder="Search feedback..."
                    value={feedbackSearch}
                    onChange={(e) => setFeedbackSearch(e.target.value)}
                    className="form-input-sm"
                    style={{ width: '240px' }}
                />
            </div>

            <div className="card">
                <h3 className="section-title" style={{ marginBottom: '24px' }}>
                    Tickets ({filteredFeedback.length}{feedbackSearch ? ` of ${feedback.length}` : ''})
                </h3>
                <div className="space-y-4">
                    {filteredFeedback.length === 0 ? (
                        <div className="empty-state">
                            <MessageSquare className="empty-state-icon" size={48} />
                            <p className="empty-state-text">No feedback found</p>
                        </div>
                    ) : filteredFeedback.map(fb => {
                        const isExpanded = expandedFeedback === fb._id;
                        const hasResponse = fb.response && fb.response.respondedAt;
                        const hasAttachments = fb.attachments && fb.attachments.length > 0;

                        return (
                            <div
                                key={fb._id}
                                className="feedback-item"
                                style={{
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    transition: 'all 0.2s ease-in-out'
                                }}
                            >
                                {/* Header - Always Visible */}
                                <div
                                    style={{
                                        padding: '16px',
                                        backgroundColor: '#f8fafc',
                                        borderBottom: isExpanded ? '1px solid #e2e8f0' : 'none',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.2s ease'
                                    }}
                                    onClick={() => setExpandedFeedback(isExpanded ? null : fb._id)}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                    {fb.title}
                                                </h4>
                                                {hasResponse && (
                                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', fontWeight: 600, color: '#059669', backgroundColor: '#d1fae5', padding: '2px 8px', borderRadius: '4px', flexShrink: 0 }}>
                                                        <CheckCircle size={12} /> Responded
                                                    </span>
                                                )}
                                            </div>
                                            <p style={{ fontSize: '0.875rem', color: '#64748b', margin: '0 0 8px 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                {fb.submittedBy?.name || fb.submittedBy?.email || '—'} • {formatDate(fb.createdAt)}
                                            </p>
                                        </div>

                                        {/* Badge Section */}
                                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                                            {fb.priority && (
                                                <span className={`badge ${getPriorityColor(fb.priority)}`} style={{ fontSize: '0.75rem' }}>
                                                    {getPriorityLabel(fb.priority)}
                                                </span>
                                            )}
                                            <span className={`badge ${fb.type === 'bug_report' ? 'badge-red' : fb.type === 'feature_request' ? 'badge-blue' : 'badge-amber'}`} style={{ fontSize: '0.75rem' }}>
                                                {fb.type?.replace(/_/g, ' ').charAt(0).toUpperCase() + fb.type?.replace(/_/g, ' ').slice(1) || 'Feedback'}
                                            </span>
                                            <span className={`badge ${fb.status === 'open' ? 'badge-open' : fb.status === 'in_progress' ? 'badge-warning' : 'badge-resolved'}`} style={{ fontSize: '0.75rem' }}>
                                                {fb.status?.replace(/_/g, ' ').toUpperCase()}
                                            </span>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setExpandedFeedback(isExpanded ? null : fb._id);
                                                }}
                                                style={{
                                                    background: 'none',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    color: '#64748b',
                                                    padding: '4px',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    flexShrink: 0
                                                }}
                                            >
                                                {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                {isExpanded && (
                                    <div style={{ padding: '16px', backgroundColor: '#fafbfc' }}>
                                        {/* Full Description */}
                                        <div style={{ marginBottom: '16px' }}>
                                            <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Description:</p>
                                            <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                                                {fb.description}
                                            </p>
                                        </div>

                                        {/* Metadata Row */}
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #e2e8f0' }}>
                                            <div>
                                                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>Submitted By</p>
                                                <p style={{ fontSize: '0.875rem', color: '#1e293b', margin: 0 }}>{fb.submittedBy?.name || '—'}</p>
                                                <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '2px 0 0 0' }}>{fb.submittedBy?.email || '—'}</p>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>Created</p>
                                                <p style={{ fontSize: '0.875rem', color: '#1e293b', margin: 0 }}>{formatDate(fb.createdAt)}</p>
                                            </div>
                                            {fb.updatedAt && fb.updatedAt !== fb.createdAt && (
                                                <div>
                                                    <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>Last Updated</p>
                                                    <p style={{ fontSize: '0.875rem', color: '#1e293b', margin: 0 }}>{formatDate(fb.updatedAt)}</p>
                                                </div>
                                            )}
                                            {hasAttachments && (
                                                <div>
                                                    <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>Attachments</p>
                                                    <p style={{ fontSize: '0.875rem', color: '#1e293b', margin: 0, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                        <FileText size={14} /> {fb.attachments.length} file{fb.attachments.length !== 1 ? 's' : ''}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Admin Response */}
                                        {hasResponse ? (
                                            <div
                                                style={{
                                                    backgroundColor: '#f0fdf4',
                                                    border: '1px solid #d1fae5',
                                                    borderRadius: '6px',
                                                    padding: '12px',
                                                    marginTop: '12px'
                                                }}
                                            >
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                                    <CheckCircle size={16} style={{ color: '#059669' }} />
                                                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#059669', margin: 0 }}>
                                                        Response from {fb.response.admin?.name || 'Admin'}
                                                    </p>
                                                </div>
                                                <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '4px 0', fontStyle: 'italic' }}>
                                                    {formatDateTime(fb.response.respondedAt)}
                                                </p>
                                                <p style={{ fontSize: '0.875rem', color: '#047857', lineHeight: '1.5', marginTop: '8px', marginBottom: 0 }}>
                                                    {fb.response.message}
                                                </p>
                                            </div>
                                        ) : (
                                            <div
                                                style={{
                                                    backgroundColor: '#fef3c7',
                                                    border: '1px solid #fcd34d',
                                                    borderRadius: '6px',
                                                    padding: '12px',
                                                    marginTop: '12px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px'
                                                }}
                                            >
                                                <Clock size={16} style={{ color: '#d97706' }} />
                                                <p style={{ fontSize: '0.875rem', color: '#92400e', margin: 0 }}>
                                                    Awaiting response
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FeedbackSection;
