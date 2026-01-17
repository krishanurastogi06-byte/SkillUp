import { motion } from 'framer-motion';
import { Briefcase, FileText, UserCheck, Send } from 'lucide-react';
import './CareerTools.css';

const CareerTools = () => {
  return (
    <motion.section
      className="career-tools-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h1 className="page-heading-home">
        <Briefcase size={28} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
        Career Tools
      </h1>
      <p>SkillUp helps you land your dream role with guided tools and mentor support.</p>

      <div className="career-grid">

        <div className="career-card">
          <FileText size={28} />
          <h2>Resume Builder</h2>
          <p>Quickly create a professional resume with our guided tool.</p>
          <button className="btn">Start Building</button>
        </div>

        <div className="career-card job-form">
          <UserCheck size={28} />
          <h2>Get Career Support</h2>
          <p>Let us know what you're aiming for, and we'll connect you with resources.</p>

          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea rows="4" placeholder="Your Career Goals / Questions" required></textarea>
            <button type="submit" className="btn">
              <Send size={16} style={{ marginRight: '0.4rem' }} /> Submit Request
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default CareerTools;
