import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Home,
    BookOpen,
    Calendar,
    Users,
    Menu,
    Award,
    BarChart3,
    Briefcase,
    Settings,
    Sun,
    Moon
} from 'lucide-react';

import './BottomNav.css';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { List } from 'lucide-react';



const mainNav = [
    { path: '/dashboard', icon: <Home size={20} />, label: 'Home' },
    { path: '/dashboard/courses', icon: <BookOpen size={20} />, label: 'Courses' },
    { path: '/dashboard/sessions', icon: <Calendar size={20} />, label: 'Sessions' },
    { path: '/dashboard/community', icon: <Users size={20} />, label: 'Community' }
];

const extraNav = [
    { path: '/dashboard/certificates', icon: <Award size={20} />, label: 'Certificates' },
    { path: '/dashboard/progress', icon: <BarChart3 size={20} />, label: 'Progress' },
    { path: '/dashboard/career', icon: <Briefcase size={20} />, label: 'Career' },
    { path: '/dashboard/settings', label: 'Settings', icon: <Settings size={20} /> }
];

const BottomNav = () => {
    const [showMore, setShowMore] = useState(false);
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    return (
        <>
            <nav className="bottom-nav">
                {mainNav.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        className="nav-icon"
                        title={item.label}
                        end={item.path === '/dashboard'}
                    >
                        {item.icon}
                    </NavLink>
                ))}
                <button onClick={() => setShowMore(!showMore)} className="nav-icon" title="More">
                    <List size={20} />
                </button>


            </nav>

            {showMore && (
                <div className="more-menu">
                    {extraNav.map((item, i) => (
                        <NavLink to={item.path} key={i} className="more-link">
                            {item.icon}
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                    <div className="more-link" onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                    </div>
                </div>
            )}
        </>
    );
};

export default BottomNav;
