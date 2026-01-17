import { useState } from 'react';
import { MessageSquare, Send, User } from 'lucide-react';
import './RightSidebar.css';

const mockFriends = [
  { id: 1, name: 'Ravi Kumar' },
  { id: 2, name: 'Aarushi Mehta' },
  { id: 3, name: 'Sneha Roy' },
];

const RightSidebar = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState({});
  const [input, setInput] = useState('');

  const openChat = (friend) => {
    setActiveChat(friend);
    if (!messages[friend.id]) {
      setMessages((prev) => ({ ...prev, [friend.id]: [] }));
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim() || !activeChat) return;

    const newMsg = { sender: 'You', text: input };
    setMessages((prev) => ({
      ...prev,
      [activeChat.id]: [...prev[activeChat.id], newMsg]
    }));
    setInput('');
  };

  return (
    <div className="right-sidebar">
      <h3><MessageSquare size={20} /> Friends</h3>

      <div className="friend-list">
        {mockFriends.map(friend => (
          <div
            key={friend.id}
            className={`friend ${activeChat?.id === friend.id ? 'active' : ''}`}
            onClick={() => openChat(friend)}
          >
            <User size={16} /> {friend.name}
          </div>
        ))}
      </div>

      {activeChat && (
        <div className="chat-box">
          <h4>Chat with {activeChat.name}</h4>
          <div className="messages">
            {(messages[activeChat.id] || []).map((msg, i) => (
              <div key={i} className={`msg ${msg.sender === 'You' ? 'you' : 'friend'}`}>
                <span>{msg.text}</span>
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="chat-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit"><Send size={16} /></button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RightSidebar;
