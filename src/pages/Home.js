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
    <div className="home">
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
        <h2>Deepika Sewwandi</h2> {/* Name in a separate line */}
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
      {/* About Me Section - Positioned after the background */}
    </div>

    {/* About Me Section */}
    <section className="about-me">
        <h3>About Me</h3>
        <p>Hi! I’m Deepika, a web developer with a passion for designing user-friendly and visually appealing interfaces. I have experience in various web technologies and enjoy tackling challenges that require creative solutions.</p>
        <p>In my free time, I love to explore new technologies, work on personal projects, and contribute to open-source initiatives. I believe in continuous learning and strive to improve my skills every day.</p>
      </section>

      {/* My Projects Section */}
      <section className="projects">
        <h3>My Projects</h3>
        <p>Here you can describe some of your projects. Mention technologies used, project goals, and your role in each project.</p>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h3>Contact</h3>
        <p>If you have any questions or want to collaborate, feel free to reach out!</p>
      </section>

      {/* Feedback Section */}
      <section className="feedback">
        <h3>Feedback</h3>
        <p>Your feedback is important to me! Please share your thoughts.</p>
      </section>

  </div>
  );
};

export default Home;


