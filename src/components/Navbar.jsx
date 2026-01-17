import { useRef, useEffect, useContext, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ThemeContext } from '../context/ThemeContext';
import { Sun, Moon, Logs, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const navRef = useRef(null);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -50, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  useEffect(() => {
    const onScroll = () => {
      navRef.current.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="logo" onClick={() => navigate('/')}>SkillUp</div>

      <ul className="nav-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/courses' ? 'active' : ''}>
          <Link to="/courses">Courses</Link>
        </li>
        <li className={location.pathname === '/pricing' ? 'active' : ''}>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className={location.pathname === '/community' ? 'active' : ''}>
          <Link to="/community">Community</Link>
        </li>
        <li className={location.pathname === '/contact' ? 'active' : ''}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="nav-right">
        <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="btn login" onClick={() => navigate('/login')}>Login</button>
        <button className="btn signup" onClick={() => navigate('/signup')}>Sign Up</button>
      </div>

      <button className="menu-mobile-btn" onClick={() => setSidebarOpen(true)}>
        <Logs />
      </button>

      <div className={`sidebar-mobile ${sidebarOpen ? 'open' : ''}`}>
        <button className="sidebar-close" onClick={() => setSidebarOpen(false)}>
          <X size={28} />
        </button>
        <ul className="links-mobile">
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/courses' ? 'active' : ''}>
            <Link to="/courses">Courses</Link>
          </li>
          <li className={location.pathname === '/pricing' ? 'active' : ''}>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className={location.pathname === '/community' ? 'active' : ''}>
            <Link to="/community">Community</Link>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle-mobile">
          {darkMode ? <><Sun size={20} /> <p>Light</p></> : <><Moon size={20} /> <p>Dark</p></>}
        </button>
        <div className="button-mobile">
          <button className="btn-mobile login" onClick={() => navigate('/login')}>Login</button>
          <button className="btn-mobile signup" onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;