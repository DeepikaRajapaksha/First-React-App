// src/pages/Home.js

import React, { useCallback } from 'react';
import './Home.css'; // Create this CSS file for styling
// Import icons for social media and email
import { FaFacebook, FaEnvelope } from 'react-icons/fa'; 
import { loadSlim } from 'tsparticles-slim'; // Use the slim version for better compatibility
import Particles from 'react-tsparticles';

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="home-container">
      {/* Add Particles as the background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false }, // Prevents particles from covering the whole screen
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
            },
          },
          retina_detect: true,
        }}
      />
      
      
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


