import React, { useState } from 'react';
import { auth, provider } from '../firebase/config';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert('Login successful!');
      // navigate('/dashboard') // if you have dashboard
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert('Google Login successful!');
      // navigate('/dashboard') // if you have dashboard
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

        <div className="login-options">
          <label className="remember-label">
            <input type="checkbox" name="remember" checked={formData.remember} onChange={handleChange} />
            Remember me
          </label>
          <a href="/">SignUp Form</a>
        </div>

        <button type="submit" className="login-button">Sign In</button>
        
        --------------- OR -------------

        <button type="button" className="google-btn" onClick={handleGoogleLogin}>
          <img src="https://developers.google.com/identity/images/g-logo.png" alt="google" className="google-icon" />
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
