import React from 'react';
import { Trash2, Edit2, AlertCircle } from 'lucide-react';

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
    return (
        <div className="space-y-8">
            <div className="flex-between">
                <h2 className="page-title">User Management</h2>
                <input
                    type="text"
                    placeholder="Search by name, email, or class code..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-input-sm"
                    style={{ width: '280px' }}
                />
            </div>

            <div className="card">
                <h3 className="section-title" style={{ marginBottom: '24px' }}>
                    Instructors ({filteredTeachers.length}{searchTerm ? ` of ${users.teachers?.length || 0}` : ''})
                </h3>
                <div className="table-wrapper">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Classes</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTeachers.length === 0 ? (
                                <tr><td colSpan={5} style={{ textAlign: 'center', color: '#94a3b8', padding: '24px' }}>No instructors match your search</td></tr>
                            ) : filteredTeachers.map(t => (
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
            </div>

            <div className="card">
                <h3 className="section-title" style={{ marginBottom: '24px' }}>
                    Learners ({filteredStudents.length}{searchTerm ? ` of ${users.students?.length || 0}` : ''})
                </h3>
                <div className="table-wrapper">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Class Code</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStudents.length === 0 ? (
                                <tr><td colSpan={4} style={{ textAlign: 'center', color: '#94a3b8', padding: '24px' }}>No learners match your search</td></tr>
                            ) : filteredStudents.map(s => (
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
            </div>
        </div>
    );
};

export default UsersList;
