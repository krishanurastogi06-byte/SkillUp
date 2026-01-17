import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';


import {
    Home, BookOpen, Calendar, Users, Award, BarChart3, Briefcase, Settings, ChevronLeft, ChevronRight
} from 'lucide-react';

import BottomNav from '../components/BottomNav';
import './DashboardLayout.css';

const menuItems = [
    { path: '/dashboard', label: 'Home', icon: <Home size={20} /> },
    { path: '/dashboard/courses', label: 'Courses', icon: <BookOpen size={20} /> },
    { path: '/dashboard/sessions', label: 'Sessions', icon: <Calendar size={20} /> },
    { path: '/dashboard/community', label: 'Community', icon: <Users size={20} /> },
    { path: '/dashboard/certificates', label: 'Certificates', icon: <Award size={20} /> },
    { path: '/dashboard/progress', label: 'Progress', icon: <BarChart3 size={20} /> },
    { path: '/dashboard/career', label: 'Career', icon: <Briefcase size={20} /> },
    { path: '/dashboard/settings', label: 'Settings', icon: <Settings size={20} /> },
];

const DashboardLayout = () => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(true);
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    return (
        <>
            <div className={`dashboard ${collapsed ? 'collapsed' : ''}`}>
                <aside
                    className="sidebar"
                    onMouseEnter={() => setCollapsed(false)}
                    onMouseLeave={() => setCollapsed(true)}
                >
                    <div className="sidebar-top">
                        <h2 className="logo">{collapsed ? 'SU' : 'SkillUp'}</h2>
                    </div>
                    <nav className="menu">
                        {menuItems.map((item, index) => (
                            <NavLink
                                to={item.path}
                                key={index}
                                className="nav-item"
                                end={item.path === '/dashboard'}
                            >
                                {item.icon}
                                {!collapsed && <span>{item.label}</span>}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="bottom-sidebar">
                        <div className="theme-toggle-sidebar">
                            <button onClick={() => setDarkMode(!darkMode)}>
                                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                                {!collapsed && <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>}
                            </button>
                        </div>
                        <button className="logout-btn" onClick={handleLogout}>
                            {collapsed ? <Settings size={18} /> : 'Logout'}
                        </button>
                    </div>
                </aside>
                <main className="dashboard-main">
                    <Outlet />
                </main>
            </div>
            <div className="bottom-nav-wrapper">
                <BottomNav />
            </div>
        </>
    );
};

export default DashboardLayout;
