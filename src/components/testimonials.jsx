"use client"
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const TestimonialCard = ({ content, side }) => {
  const [randomUser, setRandomUser] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const flexClass = side === 'right' ? 'flex-left' : 'flex-right';

  useEffect(() => {
    const fetchRandomUser = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const firstUser = data.results[0];
        setRandomUser(firstUser);
      } catch (error) {
        console.error('Error fetching random user:', error);
      }
    };

    fetchRandomUser();

    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const cardTop = cardRef.current.offsetTop;
      const triggerDistance = viewportHeight - 600; // Adjust as needed
      
      if (scrollPosition + triggerDistance >= cardTop) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array for fetching data only once

  const animationClass = isVisible ? 'fadeIn' : 'hidden'; // CSS class for visibility

  return (
    <div ref={cardRef} className={`card w-5/6 md:w-3/4 p-6 mb-8 bg-gray-900 bg-opacity-60 shadow-md transition-transform transform ${flexClass} min-h-52 h-auto ${animationClass}`}>
      {randomUser && (
        <div className="block">
          {/* Circular frame for the photo */}
          <div className="flex w-full mb-5">
            <div className="overflow-hidden w-20 h-20 mr-4 rounded-full">
              <img
                src={randomUser.picture.large}
                alt={`${randomUser.name.first} ${randomUser.name.last}`}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl font-semibold mt-2 ml-5">{`${randomUser.name.first} ${randomUser.name.last}`}</h3>
          </div>

          {/* Display user's name and passed-in review content */}
          <div>
            <p className="text-white">{content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

TestimonialCard.propTypes = {
  content: PropTypes.string.isRequired,
  side: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default TestimonialCard;
