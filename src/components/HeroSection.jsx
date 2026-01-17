import { useRef } from 'react';
import useGsapFadeIn from '../hooks/useGsapFadeIn';
import { Typewriter } from 'react-simple-typewriter';
import { useNavigate, Link } from 'react-router-dom';
import './HeroSection.css';
import heroImg from '../assets/hero-student.svg';

const HeroSection = () => {
  const heroRef = useRef(null);
  useGsapFadeIn(heroRef, 0);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-text">
        <h1 className='DesktopHeading'>
          <Typewriter
            words={['Build Career Skills That Matter']}
            loop={false}
            typeSpeed={50}
          />
        </h1>
        <h1 className='MobileHeading'>Build Career Skills That Matter</h1>
        <p>Get personalized courses, live sessions, certificates, and mentor-led learning – all in one place.</p>
        <div className="hero-buttons">
          <button className="btn primary"><Link to="/Login">Get Started for Free</Link></button>
          <button className="btn outline"><Link to="/courses">Explore Learning Paths</Link></button>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImg} alt="Student Learning" />
      </div>
    </section>
  );
};

export default HeroSection;