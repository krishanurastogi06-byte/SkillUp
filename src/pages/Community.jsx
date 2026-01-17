import { useState } from 'react';
import {
  Users,
  MessageCircle,
  Reply,
  Plus,
  Edit,
  Trash,
  Send,
  X
} from 'lucide-react';
import { motion } from 'framer-motion';
import RightSidebar from '../components/RightSidebar';
import './Community.css';

const initialThreads = [
  {
    id: 1,
    title: 'How do I structure a fashion portfolio?',
    user: 'Ananya Sharma',
    isOwner: false,
    replies: [
      {
        id: 101,
        text: 'Start with your strongest project and organize by theme.',
        responder: 'Aarushi Mehta',
        reReplies: []
      }
    ]
  },
  {
    id: 2,
    title: 'Any tips for converting leads in BDE?',
    user: 'You',
    isOwner: true,
    replies: [
      {
        id: 102,
        text: 'Use storytelling and case studies during client calls.',
        responder: 'Ravi Kumar',
        reReplies: []
      }
    ]
  }
];

const Community = () => {
  const [threads, setThreads] = useState(initialThreads);
  const [newQuestion, setNewQuestion] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState('');
  const [newReplies, setNewReplies] = useState({});
  const [reReplies, setReReplies] = useState({});
  const [showSidebar, setShowSidebar] = useState(false);

  const handlePost = (e) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;
    const newThread = {
      id: Date.now(),
      title: newQuestion,
      user: 'You',
      isOwner: true,
      replies: []
    };
    setThreads([newThread, ...threads]);
    setNewQuestion('');
  };

  const handleDelete = (id) => {
    setThreads(threads.filter(t => t.id !== id));
  };

  const handleEdit = (id, currentText) => {
    setEditingId(id);
    setEditedText(currentText);
  };

  const handleUpdate = (id) => {
    setThreads(threads.map(t => t.id === id ? { ...t, title: editedText } : t));
    setEditingId(null);
    setEditedText('');
  };

  const handleReply = (threadId, text) => {
    if (!text.trim()) return;
    setThreads(threads.map(thread =>
      thread.id === threadId
        ? {
          ...thread,
          replies: [
            ...thread.replies,
            {
              id: Date.now(),
              text,
              responder: 'You',
              reReplies: []
            }
          ]
        }
        : thread
    ));
    setNewReplies({ ...newReplies, [threadId]: '' });
  };

  const handleReReply = (threadId, replyId, text) => {
    if (!text.trim()) return;
    setThreads(threads.map(thread => {
      if (thread.id !== threadId) return thread;
      return {
        ...thread,
        replies: thread.replies.map(r =>
          r.id === replyId
            ? {
              ...r,
              reReplies: [...r.reReplies, { responder: 'You', text }]
            }
            : r
        )
      };
    }));
    setReReplies({ ...reReplies, [`${threadId}-${replyId}`]: '' });
  };

  return (
    <motion.section
      className="community-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="community-header">
        <h1 className="page-heading-home">
          <Users size={28} />Community Discussions
        </h1>
        <button className="toggle-sidebar" onClick={() => setShowSidebar(!showSidebar)}>
          {showSidebar ? <X size={20} /> : <Users size={20} />}
        </button>
      </div>

      <p>Ask questions, share knowledge, and learn together.</p>

      <form onSubmit={handlePost} className="community-form">
        <textarea
          placeholder="Post a question to the community..."
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          rows={3}
        />
        <button type="submit">
          <Plus size={16} /> Post Question
        </button>
      </form>

      <div className="discussion-threads">
        {threads.map((thread) => (
          <div className="thread-card" key={thread.id}>
            <div className="thread-header">
              <h3><MessageCircle size={18} />{' '}
                {editingId === thread.id ? (
                  <input
                    className="edit-input"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                  />
                ) : (
                  thread.title
                )}
              </h3>
              <span className="thread-user">Posted by: {thread.user}</span>
              {thread.isOwner && (
                <div className="thread-actions">
                  {editingId === thread.id ? (
                    <button onClick={() => handleUpdate(thread.id)}>Save</button>
                  ) : (
                    <>
                      <Edit size={16} onClick={() => handleEdit(thread.id, thread.title)} />
                      <Trash size={16} onClick={() => handleDelete(thread.id)} />
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="replies">
              {thread.replies.map((reply) => (
                <div className="reply" key={reply.id}>
                  <Reply size={14} />
                  <strong>{reply.responder}:</strong> {reply.text}

                  <div className="re-replies">
                    {reply.reReplies.map((rr, i) => (
                      <div key={i} className="re-reply">
                        <Reply size={12} />
                        <strong>{rr.responder}:</strong> {rr.text}
                      </div>
                    ))}
                    <form
                      className="re-reply-form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleReReply(thread.id, reply.id, reReplies[`${thread.id}-${reply.id}`] || '');
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Reply..."
                        value={reReplies[`${thread.id}-${reply.id}`] || ''}
                        onChange={(e) =>
                          setReReplies({
                            ...reReplies,
                            [`${thread.id}-${reply.id}`]: e.target.value
                          })
                        }
                      />
                      <button type="submit"><Send size={14} /></button>
                    </form>
                  </div>
                </div>
              ))}
            </div>
            
            <form
              className="reply-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleReply(thread.id, newReplies[thread.id] || '');
              }}
            >
              <input
                type="text"
                placeholder="Write a reply..."
                value={newReplies[thread.id] || ''}
                onChange={(e) => setNewReplies({ ...newReplies, [thread.id]: e.target.value })}
              />
              <button type="submit"><Send size={14} /></button>
            </form>
          </div>
        ))}
      </div>

      {showSidebar && <RightSidebar />}
    </motion.section>
  );
};

export default Community;
