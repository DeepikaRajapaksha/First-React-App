import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Deepika Rajapaksha</h2> {/* Your name as the logo */}
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/images">Images</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="cv-button">
        <a href="/path-to-your-cv.pdf" download="Deepika_CV.pdf">Download CV</a>
      </div>
    </nav>
  );
}

export default Navbar;
