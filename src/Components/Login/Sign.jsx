import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import real from "../../images/real-img.jpg"; // Path to your image
import "./Sign.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axiosInstance from '../axios/Axios.js'


function Sign() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const newUser = {username: name, email, password, passwordConfirm:confirmPassword };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if(!name || !email || !password || !confirmPassword){
            return alert("Please enter all fields")
    }

    try {
     
      const config = {
        headers: {
           "Content-Type": "application/json",
          
        }
      }
      const { data } = await axiosInstance.post('/auth/register' , newUser ,config );
      
      
      
      localStorage.setItem("token", JSON.stringify(data.token));
   navigate("/")
    } catch (error) {
      console.error("Error registering user: ", error);
    }

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    console.log("Form submitted and user data saved to local storage");
  };

 




  return (
    <div className='section'>
      
  
      <div className="container">
        <div className="banner_left">
          <div className="title-banner_left">
            <h2>Create Your Account</h2>
            <h4>Welcome! Please fill in the details to sign up</h4>
          </div>
          <div className="box">
            <div className="button-banner_left">
              <div className="Google">
                <FontAwesomeIcon className="google-icon" icon={faGoogle} />
                <h3>Google</h3>
              </div>
              <div className="Google">
                <FontAwesomeIcon className="Facebook-icon" icon={faFacebook} />
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
                <input
                  type="text"
                  placeholder="Name *"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-container">
                <input
                  type="email"
                  placeholder="Email *"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-container">
                <input
                  type="password"
                  placeholder="Password *"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-container">
                <input
                  type="password"
                  placeholder="Confirm Your Password *"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="forgot-password">
                <a href="/">Forgot your password?</a>
              </div>
              <button className="login-button" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div className="banner_right">
          <div className="image-back">
            <img className="real" src={real} alt="real-image" />
            <div className="welcome-content">
              <h1>Welcome</h1>
              <p>Already have an account?</p>
              <button className="signup-button">
                <Link to="/login" className="signup-link">
                  Login
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Sign;
