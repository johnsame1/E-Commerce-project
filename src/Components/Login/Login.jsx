import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import real from './Img/real-img.jpg';
import './Sign.css';
import { Link } from "react-router-dom";

function Login() {
    console.log('losojs')
    return (
        <div className="container">
            <div className="banner_left">
                <div className="title-banner_left">
                    <h2>Log in to Your account</h2>
                    <h4>Welcome! Select a method to log in</h4>
                </div>
                <div className="box">
                    <div className="button-banner_left">
                        <div className="Google">
                            <FontAwesomeIcon className='google-icon' icon={faGoogle} />
                            <h3>Google</h3>
                        </div>
                        <div className="Google">
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
                    <form className="login-form">
                        <div className="input-container">
                            <FontAwesomeIcon icon={faEnvelope} />                            
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className="input-container">
                            <FontAwesomeIcon icon={faLock} />   
                            <input type="password" placeholder="Password" required />      
                        </div>
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
                            <Link to="/">Sign Up</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
