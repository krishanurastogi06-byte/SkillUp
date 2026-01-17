import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import './MyCourses.css';

const courses = [
  {
    id: 1,
    title: 'Build a Fashion Career',
    mentor: 'Aarushi Mehta',
    category: 'Fashion',
    progress: 80,
    videoUrl: 'https://youtu.be/Qd5dGAY5APo?si=Wmmk32Hx1oygiJnD'
  },
  {
    id: 2,
    title: 'Master Business Development',
    mentor: 'Ravi Kumar',
    category: 'BDE',
    progress: 60,
    videoUrl: 'https://youtu.be/dvzzBlnLxsc?si=ri_Rs3huOQ_ggxWk'
  },
  {
    id: 3,
    title: 'Become a Content Influencer',
    mentor: 'Sneha Roy',
    category: 'Influencer',
    progress: 40,
    videoUrl: 'https://youtu.be/zjHECpSVZVA?si=uEiE929d6_FAnUO9'
  }
];

const MyCourses = () => {
  const handleResume = (videoUrl) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <motion.section
      className="my-courses-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h1 className="page-heading-home">
        <BookOpen size={28} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
        My Courses
      </h1>
      <p>Here are all the courses you’re currently enrolled in.</p>

      <div className="course-list">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            <h2>{course.title}</h2>
            <p><strong>Mentor:</strong> {course.mentor}</p>
            <p><strong>Category:</strong> {course.category}</p>
            <progress value={course.progress} max="100"></progress>
            <p className="progress-label">{course.progress}% complete</p>
            <button
              className="btn resume-btn"
              onClick={() => handleResume(course.videoUrl)}
            >
              Resume Course
            </button>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default MyCourses;
