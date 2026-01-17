import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useGsapFadeIn from '../hooks/useGsapFadeIn';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Award } from 'lucide-react';
import './DashboardHome.css';

const suggestedCourses = [
  {
    name: 'Build a Fashion Career',
    desc: 'Kickstart your journey in fashion.',
  },
  {
    name: 'Become a Content Influencer',
    desc: 'Grow your brand and audience.',
  },
];

const myCourses = [
  {
    title: 'Build a Fashion Career',
    desc: 'Fashion skills for your career.',
  },
  {
    title: 'Master Business Development',
    desc: 'Business growth with expert guidance.',
  },
  {
    title: 'Become a Content Influencer',
    desc: 'Content creation and branding tips.',
  },
];

const liveSessions = [
  {
    topic: 'Fashion Career Panel Q&A',
    mentor: 'Aarushi Mehta',
    date: '2025-05-21',
    time: '6:00 PM',
  },
  {
    topic: 'Business Dev Masterclass',
    mentor: 'Ravi Kumar',
    date: '2025-05-23',
    time: '4:00 PM',
  },
  {
    topic: 'Influencer Branding Tips',
    mentor: 'Sneha Roy',
    date: '2025-05-25',
    time: '7:30 PM',
  },
];

const certificates = [
  {
    course: 'Digital Marketing for Beginners',
    mentor: 'Karan Singh',
    date: '2025-04-30',
  },
  {
    course: 'Fashion Portfolio Builder',
    mentor: 'Aarushi Mehta',
    date: '2025-03-18',
  },
];

const DashboardHome = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  useGsapFadeIn(ref, 0.2);

  return (
    <motion.div
      ref={ref}
      className="dashboard-home"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h1 className="page-heading-home">Welcome back, Arsh 👋</h1>
      <p className="subtitle">Here’s your personalized learning dashboard</p>

      <div className="kpi-cards">
        <div className="kpi-card">
          <div className="heading-dashboard-home">
            <BookOpen size={28} />
            <h3>Suggested Courses</h3>
          </div>
          <ul className="kpi-list">
            {suggestedCourses.map((course, idx) => (
              <li key={idx}>
                <strong>{course.name}</strong>
                <span>{course.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="kpi-card kpi-card-link">
          <div className="heading-dashboard-home">
            <Calendar size={28} />
            <h3>3 Live Sessions</h3>
          </div>
          <ul className="kpi-list">
            {liveSessions.map((session, idx) => (
              <li key={idx} onClick={() => navigate('/dashboard/sessions')} style={{ cursor: 'pointer' }}>
                <strong>{session.topic}</strong>
                <span>
                  {session.date} • {session.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="kpi-card kpi-card-link">
          <div className="heading-dashboard-home">
            <Award size={28} />
            <h3>2 Certificates</h3>
          </div>
          <ul className="kpi-list">
            {certificates.map((cert, idx) => (
              <li key={idx} onClick={() => navigate('/dashboard/certificates')} style={{ cursor: 'pointer' }}>
                <strong>{cert.course}</strong>
                <span>by {cert.mentor}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section-home">
        <h2>📚 Continue Learning</h2>
        <div className="continue-courses">
          {myCourses.map((course, idx) => (
            <div className="course-preview" key={idx} onClick={() => navigate('/dashboard/courses')} style={{ cursor: 'pointer' }}>
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              <progress value={80 - idx * 20} max="100"></progress>
              <p className="progress-label">{80 - idx * 20}% complete</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardHome;