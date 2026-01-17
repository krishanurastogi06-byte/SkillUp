import { motion } from 'framer-motion';
import {
  BarChart3,
  CheckCircle2,
  Lightbulb,
  Brain,
  TrendingUp,
  MessageSquare,
  Bot,
  User,
  Send
} from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import './ProgressAnalytics.css';

const data = [
  { name: 'Completed', value: 2 },
  { name: 'In Progress', value: 3 }
];

const COLORS = ['#10b981', '#3b82f6'];

const ProgressAnalytics = () => {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    const botReply = {
      sender: 'bot',
      text:
        'Thanks for your question! I recommend reviewing your live sessions and completing the remaining quizzes.'
    };

    setMessages((prev) => [...prev, userMessage, botReply]);
    setInput('');
  };

  return (
    <motion.section
      className="progress-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h1 className="page-heading-home">
        <BarChart3 size={28} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
        Progress Overview
      </h1>
      <p>Visualize your learning and get actionable insights.</p>

      <div className="progress-grid">
        <div className="chart-section">
          <h3><TrendingUp size={20} /> Course Completion</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <p className="chart-summary">Total Courses: {total}</p>
        </div>

        <div className="ai-feedback">
          <h3><Brain size={22} style={{ marginRight: '0.5rem' }} /> AI Learning Insights</h3>
          <p className="insight-msg">
            Great job! You've completed <strong>{data[0].value}</strong> out of <strong>{total}</strong> courses. Here's how you can improve:
          </p>
          <ul className="insight-list">
            <li><CheckCircle2 size={16} className="check-icon" /> Focus more on assignments in BDE courses</li>
            <li><CheckCircle2 size={16} className="check-icon" /> Join 1 more live session this week</li>
            <li><Lightbulb size={16} className="idea-icon" /> Explore topics outside your comfort zone</li>
          </ul>
        </div>
      </div>

      <div className="ai-chat">
        <h3><MessageSquare size={22} /> Chat with AI</h3>
        <div className="chat-box">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-msg ${msg.sender}`}>
              {msg.sender === 'user' ? <User size={16} className="use" /> : <Bot size={26} className="use" />}
              <span>{msg.text}</span>
            </div>
          ))}
        </div>
        <form onSubmit={handleSend} className="chat-input">
          <input
            type="text"
            placeholder="Ask me about your progress..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">
            <Send size={18} />
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default ProgressAnalytics;
