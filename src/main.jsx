import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CoursePage from './pages/CoursePage';
import PricingPage from './pages/PricingPage';
import CommunityPage from './pages/CommunityPage';
import ContactPage from './pages/ContactPage';

import { ThemeProvider } from './context/ThemeContext';
import Layout from './layout/Layout';

import ProtectedRoute from './pages/ProtectedRoute';
import DashboardLayout from './pages/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import MyCourses from './pages/MyCourses';
import LiveSessions from './pages/LiveSessions';
import Certificates from './pages/Certificates';
import ProgressAnalytics from './pages/ProgressAnalytics';
import CareerTools from './pages/CareerTools';
import Community from './pages/Community';
import Setting from './pages/Setting';
import LiveSessionRoom from './pages/LiveSessionRoom';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<App />} />
            <Route path="/courses" element={<CoursePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>

          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route index element={<DashboardHome />} />
            <Route path="/dashboard/courses" element={<MyCourses />} />
            <Route path="/dashboard/sessions" element={<LiveSessions />} />
            <Route path="/dashboard/certificates" element={<Certificates />} />
            <Route path="/dashboard/progress" element={<ProgressAnalytics />} />
            <Route path="/dashboard/career" element={<CareerTools />} />
            <Route path="/dashboard/community" element={<Community />} />
            <Route path="settings" element={<Setting />} />

          </Route>

          <Route path="/live-session/:id" element={<LiveSessionRoom />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
