import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db, provider } from '../firebase/config';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {
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
            const { user } = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            await setDoc(doc(db, 'users', user.uid), {
                email: formData.email,
                createdAt: new Date()
            });
            alert('Signup successful!');
            navigate('/login');
        } catch (error) {
            alert(error.message);
        }
    };

    const handleGoogleSignup = async () => {
        try {
            const { user } = await signInWithPopup(auth, provider);
            await setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                name: user.displayName,
                createdAt: new Date()
            });
            alert('Google Signup successful!');
            navigate('/login');
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="signup-wrapper">
            <form className="signup-box" onSubmit={handleSubmit}>
                <h2>SIGN UP</h2>
                <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

                <div className="signup-options">
                    <label className="remember-label">
                        <input type="checkbox" name="remember" checked={formData.remember} onChange={handleChange} />
                        Remember me
                    </label>
                    <a href="/login">Login Form</a>
                </div>

                <button type="submit" className="signup-button">Sign Up</button>

                --------------- OR -------------

                <button type="button" className="google-btn" onClick={handleGoogleSignup}>
                    <img src="https://developers.google.com/identity/images/g-logo.png" alt="google" className="google-icon" />
                    Sign up with Google
                </button>
            </form>
        </div>
    );
};

export default Signup;
