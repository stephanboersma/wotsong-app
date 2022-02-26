import React from 'react';
import { useNavigate } from 'react-router';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Frontpage</h1>
      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/register')}>Register</button>
    </div>
  );
};

export default Landing;
