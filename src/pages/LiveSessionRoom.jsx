import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mic, MicOff, Video as VideoIcon, VideoOff } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import './LiveSessionRoom.css';

const LiveSessionRoom = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const session = location.state?.session;
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      });
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const toggleAudio = () => {
    if (streamRef.current) {
      streamRef.current.getAudioTracks().forEach(track => {
        track.enabled = !audioEnabled;
      });
      setAudioEnabled(a => !a);
    }
  };

  const toggleVideo = () => {
    if (streamRef.current) {
      streamRef.current.getVideoTracks().forEach(track => {
        track.enabled = !videoEnabled;
      });
      setVideoEnabled(v => !v);
    }
  };

  if (!session) {
    navigate('/livesessions');
    return null;
  }

  return (
    <div className="live-session-room">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <ArrowLeft size={22} /> Back
      </button>
      <h2 className="session-title">{session.topic}</h2>
      <div className="video-frame">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          width="100%"
          height="350"
          style={{ borderRadius: 12, border: '1px solid #ccc', background: '#000' }}
        />
      </div>
      <div className="media-controls" style={{ display: 'flex', gap: 16, margin: '16px 0' }}>
        <button
          className="btn"
          onClick={toggleAudio}
          style={{
            background: audioEnabled ? 'var(--accent)' : '#e5e7eb',
            color: audioEnabled ? 'var(--bg)' : '#222',
            borderRadius: 8,
            padding: '0.5rem 1.2rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {audioEnabled ? <Mic size={18} /> : <MicOff size={18} />}
          {audioEnabled ? 'Mute' : 'Unmute'}
        </button>
        <button
          className="btn"
          onClick={toggleVideo}
          style={{
            background: videoEnabled ? 'var(--accent)' : '#e5e7eb',
            color: videoEnabled ? 'var(--bg)' : '#222',
            borderRadius: 8,
            padding: '0.5rem 1.2rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {videoEnabled ? <VideoIcon size={18} /> : <VideoOff size={18} />}
          {videoEnabled ? 'Video Off' : 'Video On'}
        </button>
      </div>
      <button className="btn join-meeting-btn" style={{ marginTop: 8 }}>
        Join Meeting
      </button>
    </div>
  );
};

export default LiveSessionRoom;