import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Minimal Navbar
const Navbar = () => (
  <div style={{
    width: '100%',
    padding: '15px 30px',
    background: '#007bff',
    color: '#fff',
    fontSize: '20px',
    fontWeight: 'bold',
    position: 'relative',
    zIndex: 2
  }}>
    🍽️ Pizza Hut App
  </div>
);

// Inspired by: https://youtu.be/Y9f54yJx_Uc
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isMuted, setIsMuted] = useState(true);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'admin@example.com' && password === 'admin') {
      navigate('/admin');
    } else {
      navigate('/user');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <>
      <Navbar />

      {/* Background YouTube Video */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, bottom: 0, right: 0,
        zIndex: 0,
        overflow: 'hidden'
      }}>
        <iframe
          title="Background Video"
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/Y9f54yJx_Uc?autoplay=1&controls=0&loop=1&playlist=Y9f54yJx_Uc&mute=${isMuted ? 1 : 0}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            zIndex: 0
          }}
        ></iframe>
      </div>

      {/* Mute Toggle Button */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 3,
          padding: '12px 16px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: '#007bff',
          color: 'white',
          fontSize: '18px',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }}
        title={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>

      {/* Login Form */}
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2,
        backdropFilter: 'blur(5px)',
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
          width: '100%',
          maxWidth: '350px',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '30px', color: '#333' }}>Login</h2>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '15px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '14px'
            }}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '20px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '14px'
            }}
          />
          <button
            onClick={handleLogin}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
              marginBottom: '15px'
            }}
          >
            Login
          </button>

          <button
            onClick={handleBack}
            style={{
              padding: '10px 16px',
              backgroundColor: '#f5f5f5',
              color: '#333',
              border: '1px solid #ccc',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            ⬅️ Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
