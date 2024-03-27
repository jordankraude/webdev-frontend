'use client'
import React, { useEffect, useState } from 'react';

const LavaLamp = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const circleWidth = 200;
    const numberOfBubbles = 30;

    const bubbleConfigs = [];
    for (let i = 1; i <= numberOfBubbles; i++) {
      bubbleConfigs.push({
        top: `${getRandomNumber(0, 80)}%`,
        left: `${getRandomNumber(0, 100)}%`,
        width: `${getRandomNumber(100, 140)}px`,
        height: `${getRandomNumber(100, 140)}px`,
        animationDelay: `${i * 1}s`,
      });
    }
    setBubbles(bubbleConfigs);
  }, []);


  

  return (
    <div>
    <div className="lava-lamps-container-down">
    {bubbles.map((bubble, index) => (
      <div
        key={index}
        style={{
          position: 'absolute',
          backgroundColor: 'cyan',
          borderRadius: '50%',
          top: bubble.top,
          left: bubble.left,
          width: bubble.width,
          height: bubble.height,
          animation: `move-bubbles-down 50s infinite alternate ${bubble.animationDelay}`,
          opacity: `0`
        }}
      ></div>
    ))}
  </div>
    <div className="lava-lamps-container">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            backgroundColor: 'cyan',
            borderRadius: '50%',
            top: bubble.top,
            left: bubble.left,
            width: bubble.width,
            height: bubble.height,
            animation: `move-bubbles 50s infinite alternate ${bubble.animationDelay}`,
            opacity: `0`
          }}
        ></div>
      ))}
    </div>
    </div>

  );
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default LavaLamp;
