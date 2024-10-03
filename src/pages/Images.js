// src/pages/Images.js

import React from 'react';
import './Images.css'; // Create a separate CSS file for styling

const Images = () => {
  return (
    <div className="images-page">
      <h2>My Photo Gallery</h2>
      <div className="image-gallery">
        {/* Add your images here */}
        <img src="path-to-image-1.jpg" alt="Description of image 1" />
        <img src="path-to-image-2.jpg" alt="Description of image 2" />
        <img src="path-to-image-3.jpg" alt="Description of image 3" />
        <img src="path-to-image-4.jpg" alt="Description of image 4" />
        {/* Continue adding images */}
      </div>
    </div>
  );
}

export default Images;
