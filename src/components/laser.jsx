'use client'
// LaserAnimation.jsx

import React, { useEffect } from 'react';

const LaserAnimation = () => {
  useEffect(() => {
    const createLaser = () => {
      const laserContainer = document.getElementById('laserContainer');
      const laser = document.createElement('div');
      laser.className = 'laser';

      const randomPosition = 5 + Math.random() * 90;
      laser.style.left = `${randomPosition}vw`;

      const randomDelay = Math.random() * 10;
      laser.style.animationDelay = `${randomDelay}s`;

      // Remaining styles are added dynamically
      laser.style.position = 'absolute';
      laser.style.transformOrigin = 'bottom';

      laserContainer.appendChild(laser);
    };

    // Create multiple lasers
    for (let i = 0; i < 30; i++) {
      createLaser();
    }
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="laser-container" id="laserContainer"></div>
  );
};

export default LaserAnimation;
