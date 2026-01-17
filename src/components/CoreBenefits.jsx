import { useRef } from 'react';
import useGsapFadeIn from '../hooks/useGsapFadeIn';
import './CoreBenefits.css';
import { BookOpen, Video, Calendar, ThumbsUp, Award } from 'lucide-react';

const features = [
  {
    icon: <BookOpen size={32} />,
    title: 'Personalized Courses',
    desc: 'Courses suggested based on your interests and goals using our onboarding quiz.'
  },
  {
    icon: <Video size={32} />,
    title: 'Mentor-Led Video Lessons',
    desc: 'Learn from professionals through engaging, real-world focused video content.'
  },
  {
    icon: <Calendar size={32} />,
    title: 'Live Sessions & Events',
    desc: 'Attend live sessions, webinars, and Q&A events to stay updated and connected.'
  },
  {
    icon: <Award size={32} />,
    title: 'Certificates & Progress',
    desc: 'Get certified and track your learning journey from start to finish.'
  },
  {
    icon: <ThumbsUp size={32} />,
    title: 'Career Support',
    desc: 'Access job assistance, resume tools, and career guidance on completion.'
  }
];

const CoreBenefits = () => {
  const benefitsRef = useRef(null);
  useGsapFadeIn(benefitsRef, 0.3);

  return (
    <section className="benefits" ref={benefitsRef}>
      <h2>Why Students Love SkillUp</h2>
      <div className="benefit-grid">
        {features.map((feature, index) => (
          <div className="benefit-card" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreBenefits;
