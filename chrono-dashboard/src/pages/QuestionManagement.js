import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Plus, Edit2, Trash2, X, CheckCircle, Circle } from 'lucide-react';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:3000/api/v1';

const PERIODS = [
    'Pre-colonial',
    'Spanish Colonization',
    'Revolutionary',
    'American/Japanese',
    'Post-war',
];

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

const EMPTY_FORM = {
    title: '',
    description: '',
    topic: '',
    period: '',
    difficultyLevel: 'Medium',
    options: ['', '', '', ''],
    correctAnswer: 0,
};

const getDifficultyClass = (level) => {
    switch (level) {
        case 'Easy': return 'difficulty-badge-easy';
        case 'Medium': return 'difficulty-badge-medium';
        case 'Hard': return 'difficulty-badge-hard';
        default: return 'difficulty-badge-default';
    }
};

const getPeriodClass = (period) => {
    const map = {
        'Pre-colonial': 'period-badge-precolonial',
        'Spanish Colonization': 'period-badge-spanish',
        'Revolutionary': 'period-badge-revolutionary',
        'American/Japanese': 'period-badge-american',
        'Post-war': 'period-badge-postwar',
    };
    return map[period] || 'period-badge-default';
};

const QuestionManagement = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterDifficulty, setFilterDifficulty] = useState('');
    const [filterPeriod, setFilterPeriod] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState(EMPTY_FORM);

    const fetchQuestions = useCallback(async (pageNum = 1) => {
        setLoading(true);
        setError('');
        try {
            const params = new URLSearchParams();
            if (searchTerm) params.append('topic', searchTerm);
            if (filterDifficulty) params.append('difficulty', filterDifficulty);
            if (filterPeriod) params.append('period', filterPeriod);
            params.append('page', pageNum);
            params.append('limit', 10);

            const token = localStorage.getItem('teacherToken');
            const { data } = await axios.get(
                `${API_BASE}/questions?${params.toString()}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setQuestions(data.questions);
            setTotalPages(data.pagination.pages);
            setPage(pageNum);
        } catch (err) {
            setError(err.response?.data?.message || 'Error fetching questions');
        } finally {
            setLoading(false);
        }
    }, [searchTerm, filterDifficulty, filterPeriod]);

    useEffect(() => {
        const timer = setTimeout(() => fetchQuestions(1), 300);
        return () => clearTimeout(timer);
    }, [searchTerm, filterDifficulty, filterPeriod, fetchQuestions]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleOptionChange = (index, value) => {
        setFormData(prev => {
            const options = [...prev.options];
            options[index] = value;
            return { ...prev, options };
        });
    };

    const handleCorrectAnswer = (index) => {
        setFormData(prev => ({ ...prev, correctAnswer: index }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!formData.title.trim()) return setError('Question title is required');
        if (!formData.period) return setError('Please select a historical period');
        if (formData.options.some(o => !o.trim())) return setError('All 4 answer options are required');

        try {
            const token = localStorage.getItem('teacherToken');
            const payload = { ...formData };

            if (editingId) {
                await axios.patch(`${API_BASE}/questions/${editingId}`, payload, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                toast.success('Question updated successfully');
            } else {
                await axios.post(`${API_BASE}/questions`, payload, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                toast.success('Question created successfully');
            }
            closeModal();
            fetchQuestions(page);
        } catch (err) {
            const errorMsg = err.response?.data?.message || 'Error saving question';
            toast.error(errorMsg);
            setError(errorMsg);
        }
    };

    const handleEdit = (question) => {
        setFormData({
            title: question.title || '',
            description: question.description || '',
            topic: question.topic || '',
            period: question.period || question.topic || '',
            difficultyLevel: question.difficultyLevel || 'Medium',
            options: question.options?.length === 4 ? question.options : ['', '', '', ''],
            correctAnswer: question.correctAnswer ?? 0,
        });
        setEditingId(question._id);
        setModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this question?')) return;
        try {
            const token = localStorage.getItem('teacherToken');
            await axios.delete(`${API_BASE}/questions/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            toast.success('Question deleted successfully');
            fetchQuestions(page);
        } catch (err) {
            const errorMsg = err.response?.data?.message || 'Error deleting question';
            toast.error(errorMsg);
        }
    };

    const handleNewQuestion = () => {
        setFormData(EMPTY_FORM);
        setEditingId(null);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setEditingId(null);
        setFormData(EMPTY_FORM);
        setError('');
    };

    return (
        <div className="content-area space-y-8">
            <Toaster position="top-right" />
            <header className="flex-between">
                <h2 className="page-title">Question Management</h2>
                <button onClick={handleNewQuestion} className="btn-dark" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Plus size={16} /> New Question
                </button>
            </header>

            {error && <div className="alert-error">{error}</div>}

            <div className="filter-bar">
                <input
                    type="text"
                    placeholder="Search by topic or title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-input-sm"
                    style={{ flex: 1, minWidth: '180px' }}
                />
                <select value={filterPeriod} onChange={(e) => setFilterPeriod(e.target.value)} className="form-select">
                    <option value="">All Periods</option>
                    {PERIODS.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
                <select value={filterDifficulty} onChange={(e) => setFilterDifficulty(e.target.value)} className="form-select">
                    <option value="">All Difficulties</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>

            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                {loading ? (
                    <div className="empty-state"><p className="empty-state-text">Loading...</p></div>
                ) : questions.length === 0 ? (
                    <div className="empty-state"><p className="empty-state-text">No questions found</p></div>
                ) : (
                    <div style={{ overflowX: 'auto' }}>
                        <table className="table" style={{ minWidth: 'unset', width: '100%' }}>
                            <thead>
                                <tr>
                                    <th style={{ width: '45%' }}>Question</th>
                                    <th style={{ width: '20%' }}>Period</th>
                                    <th style={{ width: '15%' }}>Difficulty</th>
                                    <th style={{ width: '12%' }}>Created By</th>
                                    <th style={{ width: '8%', textAlign: 'center' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {questions.map((question) => (
                                    <tr key={question._id}>
                                        <td>
                                            <p className="table-cell-name" style={{ fontSize: '0.875rem' }}>{question.title}</p>
                                            {question.description && (
                                                <p className="table-cell-meta" style={{ marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '320px' }}>
                                                    {question.description}
                                                </p>
                                            )}
                                        </td>
                                        <td>
                                            <span className={getPeriodClass(question.period || question.topic)}>
                                                {question.period || question.topic}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={getDifficultyClass(question.difficultyLevel)}>
                                                {question.difficultyLevel}
                                            </span>
                                        </td>
                                        <td className="table-cell-sub">{question.createdBy?.name}</td>
                                        <td>
                                            <div className="table-actions" style={{ justifyContent: 'center' }}>
                                                <button onClick={() => handleEdit(question)} className="btn-icon btn-icon-slate" title="Edit">
                                                    <Edit2 size={15} />
                                                </button>
                                                <button onClick={() => handleDelete(question._id)} className="btn-icon btn-icon-red" title="Delete">
                                                    <Trash2 size={15} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {totalPages > 1 && (
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                        <button
                            key={p}
                            onClick={() => fetchQuestions(p)}
                            className={`pagination-btn ${p === page ? 'active' : 'inactive'}`}
                        >
                            {p}
                        </button>
                    ))}
                </div>
            )}

            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal-lg">
                        <div className="modal-header">
                            <h2 className="section-title">{editingId ? 'Edit Question' : 'New Question'}</h2>
                            <button onClick={closeModal} className="btn-icon btn-icon-slate">
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="modal-body space-y-6" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
                            {error && <div className="alert-error">{error}</div>}

                            <div className="form-group">
                                <label className="form-label">
                                    Question <span style={{ color: '#f87171' }}>*</span>
                                </label>
                                <textarea
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    rows={2}
                                    className="form-textarea-sm"
                                    placeholder="Type your question here..."
                                />
                            </div>

                            <div className="grid-2">
                                <div className="form-group">
                                    <label className="form-label">
                                        Historical Period <span style={{ color: '#f87171' }}>*</span>
                                    </label>
                                    <select name="period" value={formData.period} onChange={handleInputChange} className="form-select">
                                        <option value="">Select period...</option>
                                        {PERIODS.map(p => <option key={p} value={p}>{p}</option>)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Difficulty</label>
                                    <select name="difficultyLevel" value={formData.difficultyLevel} onChange={handleInputChange} className="form-select">
                                        <option value="Easy">Easy</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Hard">Hard</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Answer Options <span style={{ color: '#f87171' }}>*</span>
                                    <span style={{ marginLeft: '8px', color: '#94a3b8', fontWeight: 600, textTransform: 'none', letterSpacing: 'normal' }}>
                                        — click the circle to mark the correct answer
                                    </span>
                                </label>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {formData.options.map((opt, i) => {
                                        const isCorrect = formData.correctAnswer === i;
                                        return (
                                            <div key={i} className={`question-answer-option ${isCorrect ? 'selected' : 'unselected'}`}>
                                                <button
                                                    type="button"
                                                    onClick={() => handleCorrectAnswer(i)}
                                                    className={`option-selector-btn ${isCorrect ? 'selected' : 'unselected'}`}
                                                    title="Mark as correct answer"
                                                >
                                                    {isCorrect ? <CheckCircle size={20} /> : <Circle size={20} />}
                                                </button>
                                                <span className={`option-prefix ${isCorrect ? 'selected' : 'unselected'}`}>
                                                    {OPTION_LABELS[i]}.
                                                </span>
                                                <input
                                                    type="text"
                                                    value={opt}
                                                    onChange={(e) => handleOptionChange(i, e.target.value)}
                                                    className="option-text-input"
                                                    placeholder={`Option ${OPTION_LABELS[i]}...`}
                                                />
                                                {isCorrect && <span className="option-correct-label">Correct</span>}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Additional Notes <span style={{ color: '#94a3b8', fontWeight: 600, textTransform: 'none', letterSpacing: 'normal' }}>(optional)</span>
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows={2}
                                    className="form-textarea-sm"
                                    placeholder="Any extra context or explanation..."
                                />
                            </div>

                            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', paddingTop: '8px' }}>
                                <button type="button" onClick={closeModal} className="btn-outline">Cancel</button>
                                <button type="submit" className="btn-dark">
                                    {editingId ? 'Update Question' : 'Create Question'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuestionManagement;