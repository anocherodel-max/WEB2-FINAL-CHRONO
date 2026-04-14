import React, { useState } from 'react';
import { Trash2, Edit2, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const PAGE_SIZE = 10;

const Pagination = ({ total, page, onPage }) => {
    const pages = Math.ceil(total / PAGE_SIZE);
    if (pages <= 1) return null;
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '6px', marginTop: '16px' }}>
            <button
                onClick={() => onPage(page - 1)}
                disabled={page === 1}
                style={{ padding: '4px 8px', border: '1px solid #e2e8f0', borderRadius: '8px', background: 'none', cursor: page === 1 ? 'not-allowed' : 'pointer', opacity: page === 1 ? 0.4 : 1, display: 'flex', alignItems: 'center' }}
            ><ChevronLeft size={14} /></button>
            {Array.from({ length: pages }, (_, i) => i + 1).map(p => (
                <button
                    key={p}
                    onClick={() => onPage(p)}
                    style={{
                        padding: '4px 10px', border: '1px solid', borderRadius: '8px', cursor: 'pointer',
                        fontWeight: 700, fontSize: '0.75rem',
                        borderColor: p === page ? '#0f172a' : '#e2e8f0',
                        background: p === page ? '#0f172a' : 'none',
                        color: p === page ? '#fff' : '#475569',
                    }}
                >{p}</button>
            ))}
            <button
                onClick={() => onPage(page + 1)}
                disabled={page === pages}
                style={{ padding: '4px 8px', border: '1px solid #e2e8f0', borderRadius: '8px', background: 'none', cursor: page === pages ? 'not-allowed' : 'pointer', opacity: page === pages ? 0.4 : 1, display: 'flex', alignItems: 'center' }}
            ><ChevronRight size={14} /></button>
        </div>
    );
};

const UsersList = ({
    searchTerm,
    setSearchTerm,
    users,
    filteredTeachers,
    filteredStudents,
    handleEditUser,
    handleDeactivateUser,
    handleDeleteUser
}) => {
    const [teacherPage, setTeacherPage] = useState(1);
    const [studentPage, setStudentPage] = useState(1);

    React.useEffect(() => { setTeacherPage(1); setStudentPage(1); }, [searchTerm]);

    const pagedTeachers = filteredTeachers.slice((teacherPage - 1) * PAGE_SIZE, teacherPage * PAGE_SIZE);
    const pagedStudents = filteredStudents.slice((studentPage - 1) * PAGE_SIZE, studentPage * PAGE_SIZE);

    return (
        <div className="space-y-8">
            {/* ── Section header (owns the page title for this tab) ── */}
            <div className="flex-between">
                <div>
                    <h2 className="page-title">User Management</h2>
                    <p className="page-subtitle">Manage instructors and learners across the platform</p>
                </div>
                <input
                    type="text"
                    placeholder="Search by name, email, or class code..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-input-sm"
                    style={{ width: '280px' }}
                />
            </div>

            {/* ── Instructors table ── */}
            <div className="card">
                <div className="flex-between" style={{ marginBottom: '16px' }}>
                    <h3 className="section-title">
                        Instructors ({filteredTeachers.length}{searchTerm ? ` of ${users.teachers?.length || 0}` : ''})
                    </h3>
                </div>
                <div className="table-wrapper" style={{ overflowY: 'auto', maxHeight: '440px' }}>
                    <table className="table">
                        <thead style={{ position: 'sticky', top: 0, zIndex: 1, background: '#f8fafc' }}>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Classes</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pagedTeachers.length === 0 ? (
                                <tr><td colSpan={5} style={{ textAlign: 'center', color: '#94a3b8', padding: '24px' }}>No instructors match your search</td></tr>
                            ) : pagedTeachers.map(t => (
                                <tr key={t._id}>
                                    <td className="table-cell-name">{t.name}</td>
                                    <td className="table-cell-sub">{t.email}</td>
                                    <td className="table-cell-sub">{t.totalSections}</td>
                                    <td>
                                        <span className={`badge ${t.isActive ? 'badge-active' : 'badge-inactive'}`}>
                                            {t.isActive ? 'Active' : 'Inactive'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="table-actions">
                                            <button onClick={() => handleEditUser(t, 'teacher')} className="btn-icon btn-icon-blue" title="Edit"><Edit2 size={16} /></button>
                                            <button onClick={() => handleDeactivateUser(t._id, 'teacher')} className="btn-icon btn-icon-yellow" title="Deactivate"><AlertCircle size={16} /></button>
                                            <button onClick={() => handleDeleteUser(t._id, 'teacher')} className="btn-icon btn-icon-red" title="Delete"><Trash2 size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination total={filteredTeachers.length} page={teacherPage} onPage={setTeacherPage} />
            </div>

            {/* ── Learners table ── */}
            <div className="card">
                <div className="flex-between" style={{ marginBottom: '16px' }}>
                    <h3 className="section-title">
                        Learners ({filteredStudents.length}{searchTerm ? ` of ${users.students?.length || 0}` : ''})
                    </h3>
                </div>
                <div className="table-wrapper" style={{ overflowY: 'auto', maxHeight: '440px' }}>
                    <table className="table">
                        <thead style={{ position: 'sticky', top: 0, zIndex: 1, background: '#f8fafc' }}>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Class Code</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pagedStudents.length === 0 ? (
                                <tr><td colSpan={4} style={{ textAlign: 'center', color: '#94a3b8', padding: '24px' }}>No learners match your search</td></tr>
                            ) : pagedStudents.map(s => (
                                <tr key={s._id}>
                                    <td className="table-cell-name">{s.name}</td>
                                    <td className="table-cell-sub">{s.email}</td>
                                    <td className="table-cell-mono">{s.classCode}</td>
                                    <td>
                                        <div className="table-actions">
                                            <button onClick={() => handleEditUser(s, 'student')} className="btn-icon btn-icon-blue" title="Edit"><Edit2 size={16} /></button>
                                            <button onClick={() => handleDeleteUser(s._id, 'student')} className="btn-icon btn-icon-red" title="Delete"><Trash2 size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination total={filteredStudents.length} page={studentPage} onPage={setStudentPage} />
            </div>
        </div>
    );
};

export default UsersList;