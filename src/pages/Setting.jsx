import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit2, Download, LogOut, Trash2 } from 'lucide-react';
import cert1 from '../assets/certificate1.png';
import cert2 from '../assets/certificate2.png';

import './SettingProfile.css';

const initialUser = {
  firstName: 'Arsh',
  lastName: 'Bhardwaj',
  dob: '28-10-2004',
  email: 'arsh@gmail.com',
  phone: '9080994321',
  role: 'Student',
  photo: 'https://ui-avatars.com/api/?name=Arsh+Bhardwaj&background=0D8ABC&color=fff',
  location: 'India'
};

const sessions = [
  {
    id: 1,
    course: 'Fashion Career Panel Q&A',
    mentor: 'Aarushi Mehta',
    time: '2025-05-21, 6:00 PM'
  },
  {
    id: 2,
    course: 'Business Dev Masterclass',
    mentor: 'Ravi Kumar',
    time: '2025-05-23, 4:00 PM'
  },
  {
    id: 3,
    course: 'Influencer Branding Tips',
    mentor: 'Sneha Roy',
    time: '2025-05-25, 7:30 PM'
  }
];

const courses = [
  {
    id: 1,
    name: 'Build a Fashion Career',
    mentor: 'Aarushi Mehta',
    category: 'Fashion',
    progress: 80
  },
  {
    id: 2,
    name: 'Master Business Development',
    mentor: 'Ravi Kumar',
    category: 'BDE',
    progress: 60
  },
  {
    id: 3,
    name: 'Become a Content Influencer',
    mentor: 'Sneha Roy',
    category: 'Influencer',
    progress: 40
  }
];

const certificates = [
  {
    id: 1,
    course: 'Digital Marketing for Beginners',
    mentor: 'Karan Singh',
    date: '2025-04-30',
    image: cert1
  },
  {
    id: 2,
    course: 'Fashion Portfolio Builder',
    mentor: 'Aarushi Mehta',
    date: '2025-03-18',
    image: cert2
  }
];

const getDefaultAvatar = (firstName, lastName) => {
  let initials = '';
  if (firstName) initials += firstName[0];
  if (lastName) initials += lastName[0];
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=0D8ABC&color=fff`;
};

const Setting = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState(initialUser);
  const [editUser, setEditUser] = useState(initialUser);
  const navigate = useNavigate();

  const [customPhoto, setCustomPhoto] = useState(
    !!localStorage.getItem('profilePhoto')
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener('resize', handleResize);

    const savedPhoto = localStorage.getItem('profilePhoto');
    if (savedPhoto) {
      setUser(prev => ({ ...prev, photo: savedPhoto }));
      setCustomPhoto(true);
    } else {
      setUser(prev => ({
        ...prev,
        photo: getDefaultAvatar(prev.firstName, prev.lastName)
      }));
      setCustomPhoto(false);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!customPhoto) {
      setUser(prev => ({
        ...prev,
        photo: getDefaultAvatar(prev.firstName, prev.lastName)
      }));
    }
  }, [user.firstName, user.lastName, customPhoto]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/login';
  };

  const handleEdit = () => {
    setEditUser(user);
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditUser(user);
  };

  const handleSave = () => {
    setUser(editUser);
    setEditMode(false);
    if (!customPhoto) {
      setUser(prev => ({
        ...prev,
        photo: getDefaultAvatar(editUser.firstName, editUser.lastName)
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser(prev => ({ ...prev, [name]: value }));
    if ((name === 'firstName' || name === 'lastName') && !customPhoto) {
      setEditUser(prev => ({
        ...prev,
        photo: getDefaultAvatar(
          name === 'firstName' ? value : prev.firstName,
          name === 'lastName' ? value : prev.lastName
        )
      }));
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = ev => {
        setUser(prev => ({ ...prev, photo: ev.target.result }));
        localStorage.setItem('profilePhoto', ev.target.result);
        setCustomPhoto(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    localStorage.removeItem('profilePhoto');
    setUser(prev => ({
      ...prev,
      photo: getDefaultAvatar(user.firstName, user.lastName)
    }));
    setCustomPhoto(false);
  };

  return (
    <section className="profile-page-bg">
      <div className="profile-container">
        <h2 className="profile-title">My Profile</h2>
        <div className="profile-card">
          <div className="profile-avatar-wrap">
            <img src={user.photo} alt="Profile" className="profile-avatar" />
            <label className="profile-avatar-edit" style={{ cursor: 'pointer' }}>
              <Edit2 size={14} />
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handlePhotoUpload}
              />
            </label>
          </div>
          <div className="profile-remove-photo">
          <div className="profile-card-info">
            <h2>{user.firstName} {user.lastName}</h2>
            <div className="profile-role">{user.role}</div>
            <div className="profile-location">{user.location}</div>
          </div>
          {customPhoto && (
              <button
                className="profile-remove-photo-btn"
                style={{ marginTop: 8, cursor: 'pointer' }}
                onClick={handleRemovePhoto}
                type="button"
              >
                <Trash2 size={14} /> Remove
              </button>
            )}
          </div>
        </div>

        <div className="profile-section-card">
          <div className="profile-section-header">
            <h3>Personal Information</h3>
            {!editMode ? (
              <button className="profile-edit-btn" onClick={handleEdit}>
                Edit <Edit2 size={16} />
              </button>
            ) : (
              <div className="profile-edit-actions">
                <button className="profile-save-btn" onClick={handleSave}>Save</button>
                <button className="profile-cancel-btn" onClick={handleCancel}>Cancel</button>
              </div>
            )}
          </div>
          <div className="profile-info-grid">
            <div>
              <div className="profile-info-label">First Name</div>
              {editMode ? (
                <input
                  className="profile-info-input"
                  name="firstName"
                  value={editUser.firstName}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-info-value">{user.firstName}</div>
              )}
            </div>
            <div>
              <div className="profile-info-label">Last Name</div>
              {editMode ? (
                <input
                  className="profile-info-input"
                  name="lastName"
                  value={editUser.lastName}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-info-value">{user.lastName}</div>
              )}
            </div>
            <div>
              <div className="profile-info-label">Date of Birth</div>
              {editMode ? (
                <input
                  className="profile-info-input"
                  name="dob"
                  value={editUser.dob}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-info-value">{user.dob}</div>
              )}
            </div>
            <div>
              <div className="profile-info-label">Email Address</div>
              {editMode ? (
                <input
                  className="profile-info-input"
                  name="email"
                  value={editUser.email}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-info-value">{user.email}</div>
              )}
            </div>
            <div>
              <div className="profile-info-label">Phone Number</div>
              {editMode ? (
                <input
                  className="profile-info-input"
                  name="phone"
                  value={editUser.phone}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-info-value">{user.phone}</div>
              )}
            </div>
            <div>
              <div className="profile-info-label">User Role</div>
              {editMode ? (
                <input
                  className="profile-info-input"
                  name="role"
                  value={editUser.role}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-info-value">{user.role}</div>
              )}
            </div>
          </div>
        </div>

        <div className="profile-section-card">
          <div className="profile-section-header">
            <h3>Sessions</h3>
          </div>
          <div className="profile-session-list">
            {sessions.map(s => (
              <div className="profile-session-card" key={s.id}>
                <div>
                  <div className="profile-info-label">Course</div>
                  <div className="profile-info-value">{s.course}</div>
                </div>
                <div>
                  <div className="profile-info-label">Mentor Name</div>
                  <div className="profile-info-value">{s.mentor}</div>
                </div>
                <div>
                  <div className="profile-info-label">Timings</div>
                  <div className="profile-info-value">{s.time}</div>
                </div>
                <button className="profile-join-btn" onClick={() => navigate('/dashboard/sessions')}>Join</button>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-section-card">
          <h3 className="profile-section-title">Courses</h3>
          <div className="profile-table-wrap">
            <table className="profile-table">
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Mentor</th>
                  <th>Category</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                {courses.map(c => (
                  <tr key={c.id}>
                    <td>{c.name}</td>
                    <td>{c.mentor}</td>
                    <td>{c.category}</td>
                    <td>
                      <div className="profile-progress-wrap">
                        <progress value={c.progress} max="100"></progress>
                        <span>{c.progress}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="profile-section-card">
          <h3 className="profile-section-title">Certificates</h3>
          <div className="profile-table-wrap">
            <table className="profile-table">
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Mentor</th>
                  <th>Completion Date</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                {certificates.map(cert => (
                  <tr key={cert.id}>
                    <td>{cert.course}</td>
                    <td>{cert.mentor}</td>
                    <td>{cert.date}</td>
                    <td>
                      <a
                        href={cert.image}
                        download={`${cert.course.replace(/\s+/g, '_')}.png`}
                        className="profile-download-btn"
                      >
                        <Download size={16} /> Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {isMobile && (
          <div className="profile-mobile-logout">
            <button className="profile-logout-btn" onClick={handleLogout}>
              <LogOut size={18} /> Logout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Setting;