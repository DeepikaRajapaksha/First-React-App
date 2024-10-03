// src/pages/Home.js

import React from 'react';
import './Home.css'; // Create this CSS file for styling
// Import icons for social media and email
import { FaFacebook, FaEnvelope } from 'react-icons/fa'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Hello, I'm</h1>
        <h2>Deepika S Rajapaksha</h2> {/* Name in a separate line */}
        <p>I am a passionate Web Developer and UI/UX Designer dedicated to creating beautiful and functional websites. I love turning ideas into reality with clean and efficient code.</p> {/* Your description */}

        {/* Social media and contact links */}
        <div className="contact-options">
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="contact-icon" />
          </a>
          <a href="mailto:deepika@example.com">
            <FaEnvelope className="contact-icon" />
          </a>
        </div>
      </div>
      <div className="home-image">
      <img src="/images/DP.jpg" alt="Deepika Rajapaksha" /> {/* Reference to your image */}
      </div>
    </div>
  );
};

export default Home;


