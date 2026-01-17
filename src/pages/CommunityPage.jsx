import { useRef } from 'react';
import useGsapFadeIn from '../hooks/useGsapFadeIn';
import './CommunityPage.css';
import {
  Users, CalendarDays, MessageCircleMore, UserCircle2, Star,
  MessageSquareText, UsersRound
} from 'lucide-react';
import Footer from '../components/Footer';

const mentors = [
  { name: 'Aarushi Mehta', role: 'Fashion Mentor' },
  { name: 'Ravi Kumar', role: 'BDE Expert' },
  { name: 'Sneha Roy', role: 'Content Coach' }
];

const events = [
  { title: 'Live AMA with Sneha', date: 'May 25', time: '7:00 PM IST' },
  { title: 'Portfolio Feedback Session', date: 'May 28', time: '5:00 PM IST' },
  { title: 'June Job Fair Prep', date: 'June 1', time: '6:30 PM IST' }
];

const discussions = [
  'How to get your first freelance client?',
  'Top tools for social media reels',
  'Advice for switching careers to marketing',
  'Best platforms to showcase your design portfolio'
];

const groups = [
  'Fashion Learners',
  'Content Creators',
  'Marketing Ninjas',
  'Freelancer Circle'
];

const CommunityPage = () => {
  const communityRef = useRef(null);
  useGsapFadeIn(communityRef, 0.3);

  return (
    <section className="community-page" ref={communityRef}>
      <h1 className="page-heading">Connect. Learn. Grow Together.</h1>
      <p className="intro">
        Dive into a vibrant community of learners and mentors. Share knowledge, ask questions, and grow your career with like-minded people.
      </p>

      <div className="section">
        <h2><Users size={24} /> Featured Mentors</h2>
        <div className="card-grid">
          {mentors.map((mentor, i) => (
            <div className="community-card" key={i}>
              <UserCircle2 size={48} />
              <h4>{mentor.name}</h4>
              <p>{mentor.role}</p>
              <button className="btn">View Profile</button>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2><CalendarDays size={24} /> Upcoming Events</h2>
        <div className="card-grid">
          {events.map((event, i) => (
            <div className="community-card" key={i}>
              <Star size={40} />
              <h4>{event.title}</h4>
              <p>{event.date} • {event.time}</p>
              <button className="btn">Join Event</button>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2><MessageCircleMore size={24} /> Latest Discussions</h2>
        <ul className="discussion-list">
          {discussions.map((topic, i) => (
            <li key={i}><MessageSquareText size={18} /> {topic}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2><UsersRound size={24} /> Join Learning Groups</h2>
        <div className="tag-group">
          {groups.map((group, i) => (
            <span className="tag" key={i}>{group}</span>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CommunityPage;
