'use client'

import Image from "next/image";
import LaserAnimation from "../../components/laser.jsx"
import { RequestQuoteButton } from "../../components/requestQuoteButton.jsx"
import { FeedbackButton } from "../../components/feedbackButton.jsx"
import React, { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const [gameOver, setGameOver] = useState(false);
  const rocketRef = useRef<HTMLDivElement>(null);

  const handleResetGame = () => {
    setGameOver(false); // Reset game state
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (rocketRef.current) {
        const rocket = rocketRef.current;
        const rocketRect = rocket.getBoundingClientRect();
        const rocketCenterX = rocketRect.left + rocketRect.width / 2;
        const rocketCenterY = rocketRect.top + rocketRect.height / 2;
  
        // Calculate offsets based on rocket center
        const offsetX = event.clientX - rocketCenterX;
        const offsetY = event.clientY - rocketCenterY;
  
        // Adjust rocket position considering parent container's position
        const rocketX = rocket.offsetLeft + offsetX;
        const rocketY = rocket.offsetTop + offsetY;
  
        rocket.style.left = rocketX + 'px';
        rocket.style.top = rocketY + 'px';
      }
    };

    const checkCollision = () => {
      if (rocketRef.current) {
        const rocket = rocketRef.current;
        const rocketRect = rocket.getBoundingClientRect();
        const rocketX = rocketRect.left;
        const rocketY = rocketRect.top;
  
        // Example: Check collision with specific element(s)
        const obstacleElements = document.querySelectorAll('.obstacle'); // Select obstacle elements
        obstacleElements.forEach((obstacle) => {
          const obstacleRect = obstacle.getBoundingClientRect();
          if (
            rocketX < obstacleRect.right &&
            rocketX + rocketRect.width > obstacleRect.left &&
            rocketY < obstacleRect.bottom &&
            rocketY + rocketRect.height > obstacleRect.top
          ) {
            setGameOver(true);
          }
        });
      }
    }

    const intervalId = setInterval(checkCollision, 100); // Check collision every 100ms

    document.addEventListener('mousemove', handleMouseMove);

    

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <main className="h-screen text-cyan-300 overflow-hidden">
      <h1>Contact</h1>
      {gameOver && <div className="game-over-message absolute top-1/2 left-1/2">
      <h3 className="relative right-10 text-center mx-auto">Game Over!</h3>
      <h5 className="relative right-10 text-center mx-auto">Avoid Collisions!</h5>
      <button className="z-20 w-auto relative right-10" onClick={handleResetGame}>Play Again</button>
      </div>
      }
      <div className="rocket" ref={rocketRef}>
          <div className="struts">
              <div className="strut"></div>
              <div className="strut"></div>
              <div className="strut"></div>
              <div className="strut"></div>
          </div>
          <div className="rocket-body">
              <div className="rocket-window"></div>
          </div>
          <div className="rocket-flame">
              <div className="flame"></div>
              <div className="flame"></div>
              <div className="flame"></div>
          </div>
          <div className="wing right">
          </div>
          <div className="wing left">
          </div>
      </div>
      <LaserAnimation/>
      <div className="h-full z-50">
        <div className="up producedBy relative text-center left-0 md:text-left md:left-2/3 text-2xl">
          <h2 className="text-white obstacle">Produced By:</h2>
          <h1 className="text-4xl obstacle">Jordan Kraude</h1>
        </div>
        <div className="up second address relative text-center left-0 md:text-left md:left-1/3 text-2xl">
          <h2 className="text-white obstacle">Mail Info: </h2>
          <h1 className="text-4xl obstacle">999 W 999 S <br />
            Rexburg, ID 83440</h1>
        </div>
        <div className="up third otherContact relative text-center left-0 md:text-left md:left-1/2 text-2xl">
          <h2 className="text-white obstacle">Other Contact Info:</h2>
          <h1 className="text-2xl md:text-4xl obstacle">209-495-2253  <br /> jordankraudetp@gmail.com</h1>
        </div>
      </div>
      <div className="mb-10 absolute bottom-0 Contact-Buttons">
        <FeedbackButton/>
        <RequestQuoteButton/>
      </div>

    </main>
  )
}