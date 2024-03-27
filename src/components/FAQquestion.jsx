'use client'

import React, { useState } from 'react';
import questions from '../data/questions.json'

const FAQSections = () => {

  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setExpandedQuestion(index === expandedQuestion ? null : index);
  };

  return (      
      <div className='text-white mt-32 mb-10 w-4/5 mx-auto flex flex-col justify-center'>
        {questions.map((q, index) => (
          <div 
            key={index} 
            className={`faqCard bg-gray-900 bg-opacity-50 rounded-lg w-full p-10 mb-6 mx-auto ${expandedQuestion === index ? 'active' : ''}`}
            onClick={() => handleQuestionClick(index)}
          >
            <div className="card-content mx-auto w-full">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="card-title text-xl md:text-2xl mb-2">{q.question}</h3>
                <i className={`fa z-10 fa-chevron-${expandedQuestion === index ? 'up' : 'down'} fa-lg text-white`} />
              </div>
              {expandedQuestion === index && <p className="card-text text-md md:text-xl">{q.answer}</p>}
            </div>
          </div>
        ))}
      </div>
  );
};

export default FAQSections;