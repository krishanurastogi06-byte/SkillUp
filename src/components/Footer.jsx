import { useRef } from 'react';
import useGsapFadeIn from '../hooks/useGsapFadeIn';
import './Footer.css';
import { Linkedin, Youtube, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef(null);
  useGsapFadeIn(footerRef, 0.9);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-main">
        <div className="footer-about">
          <h3>SkillUp</h3>
          <p>Empowering students with career-ready skills through expert mentorship and personalized learning.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><Mail size={16} /> support@skillup.com</p>
          <p>+1 234 567 890</p>
          <div className="social-icons">
            <a href="https://in.linkedin.com/"><Linkedin size={20} /></a>
            <a href="https://www.youtube.com/" className='Yt'><Youtube size={20} /></a>
            <a href="https://x.com/"><Twitter size={20} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 SkillUp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
