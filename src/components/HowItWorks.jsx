import { useRef } from 'react';
import useGsapFadeIn from '../hooks/useGsapFadeIn';
import './HowItWorks.css';
import { UserPlus, Layers, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus size={32} />,
    title: 'Sign Up & Take Quiz',
    desc: 'Create your free account and complete a short quiz to personalize your experience.'
  },
  {
    icon: <Layers size={32} />,
    title: 'Get Your Learning Path',
    desc: 'Explore a custom dashboard with courses, progress tracking, and community access.'
  },
  {
    icon: <Rocket size={32} />,
    title: 'Start Learning & Grow',
    desc: 'Watch mentor-led videos, complete tasks, earn certificates, and grow your career.'
  }
];

const HowItWorks = () => {
  const worksRef = useRef(null);
  useGsapFadeIn(worksRef, 0.6);

  return (
    <section className="how-it-works" ref={worksRef}>
      <h2>How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
