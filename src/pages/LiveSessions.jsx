import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Video, Clock } from 'lucide-react';
import './LiveSessions.css';

const sessions = [
  {
    id: 1,
    topic: 'Fashion Career Panel Q&A',
    mentor: 'Aarushi Mehta',
    date: '2025-05-21',
    time: '6:00 PM'
  },
  {
    id: 2,
    topic: 'Business Dev Masterclass',
    mentor: 'Ravi Kumar',
    date: '2025-05-23',
    time: '4:00 PM'
  },
  {
    id: 3,
    topic: 'Influencer Branding Tips',
    mentor: 'Sneha Roy',
    date: '2025-05-25',
    time: '7:30 PM'
  }
];

const LiveSessions = () => {
  const navigate = useNavigate();

  const handleJoin = (session) => {
    navigate(`/live-session/${session.id}`, { state: { session } });
  };

  return (
    <motion.section
      className="live-sessions-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h1 className="page-heading-home">
        <Calendar size={28} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
        Live Sessions
      </h1>
      <p>Join upcoming events and interact live with mentors.</p>

      <div className="session-list">
        {sessions.map(session => (
          <div className="session-card" key={session.id}>
            <h2><Video size={20} style={{ marginRight: '0.4rem' }} /> {session.topic}</h2>
            <p><strong>Mentor:</strong> {session.mentor}</p>
            <p><Clock size={16} style={{ marginRight: '0.4rem' }} /> {session.date} at {session.time}</p>
            <button className="btn join-btn" onClick={() => handleJoin(session)}>
              Join Session
            </button>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default LiveSessions;
