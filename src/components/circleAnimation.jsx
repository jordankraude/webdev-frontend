'use client';
import React, { useEffect } from 'react';

function CircleAnimation() {
  useEffect(() => {
    const circleContainer = document.querySelector(".circle-container");

    if (circleContainer) {
      const numberOfCircles = calculateNumberOfCircles();
      const fixedDistanceBetweenCircles = 80; // Adjust the fixed distance between circles

      for (let i = 1; i <= numberOfCircles; i++) {
        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.opacity = "0";
        circle.style.left = i === 1 ? `${-50}px` : `${-130 + i * fixedDistanceBetweenCircles}px`;
        circle.style.animationDelay = `${i * 0.4}s`;
        circleContainer.appendChild(circle);
      }
    }
  }, []);

  function calculateNumberOfCircles() {
    const screenWidth = window.innerWidth;
    const circleWidth = 200;
    return Math.ceil(screenWidth / circleWidth) * 4;
  }

  return (
    <div>
      <div className="circle-container sticky fadeIn"></div>
    </div>
  );
}



export { CircleAnimation };
