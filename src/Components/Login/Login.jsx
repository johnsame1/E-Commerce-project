import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import real from '../../images/real-img.jpg';
import './Sign.css';
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from '../axios/Axios.js';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        if (!email || !password) {
            return setError('Please fill all fields');
        }

        const newUser = { email, password };
        
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };

            // Log the request data in console (visible in dev tools)
            
            const { data } = await axiosInstance.post('/auth/login', newUser, config);
            // Store the token in local storage
            localStorage.setItem("token", data.token);
            navigate("/");
        } catch (error) {
            setError('Login failed. Please check your credentials.');
            console.log(error);
        }
    };

    return (
        <div className="containerr">
            <div className="banner_left">
                <div className="title-banner_left">
                    <h2>Log in tomhbfj Your account</h2>
                    <h4>Welcome! Select a method to log in</h4>
                </div>
                <div className="box">
                    <div className="button-banner_left">
                        <div className="Google">
                            <FontAwesomeIcon className='google-icon' icon={faGoogle} />
                            <h3>Google</h3>
                        </div>
                        <div className="Facebook">
                            <FontAwesomeIcon className='Facebook-icon' icon={faFacebook} />
                            <h3>Facebook</h3>
                        </div>
                    </div>
                </div>
                <div className="login-container">
                    <div className="divider">
                        <hr className="line" />
                        <span>Or</span>
                        <hr className="line" />
                    </div>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="input-container">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <input 
                                type="email" 
                                placeholder="Email" 
                                required 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="input-container">
                            <FontAwesomeIcon icon={faLock} />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                required 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                        {error && <div className="error-message">{error}</div>}
                        <div className="forgot-password">
                            <a href="/">Forgot your password?</a>
                        </div>
                        <button className="login-button" type="submit">
                            Log in
                        </button>
                    </form>
                </div>
            </div>

            <div className="banner_right">
                <div className="image-back">
                    <img className="real" src={real} alt="real-image" />
                    <div className="welcome-content">
                        <h1>Welcome back</h1>
                        <p>Don't have an account?</p>
                        <button className="signup-button">
                            <Link to="/">Sign U</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
