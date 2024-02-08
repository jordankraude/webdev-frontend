"use client";

import React, { useState } from 'react';
import axios from 'axios';
import {FormSubmitButton} from './formSubmitButton.jsx'
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation'
import { useSuccess } from './successContext.jsx';

const ReviewForm = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const { setSuccess } = useSuccess();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      feedback: document.getElementById('feedback').value,
      wantResponse: document.querySelector('input[name="wantResponse"]:checked').value,
    };

    try {
      const response = await axios.post('https://webdev-backend-n0v3.onrender.com/feedback/', formData, {
      });
  

      // Handle successful response
      console.log('Response data:', response.data);
      setSuccessMessage('Form submitted successfully!');
      setIsSuccess(true)
      setSuccess(true);
      // router.push({ pathname: '/', query: { success: true } });
      

    } catch (error) {
      // Handle errors
      console.error('Error Submitting Form:', error.message);
      setSuccessMessage('Failed to submit the form. Please try again.');
      setIsSuccess(false)
      setSuccess(false);
    }
  };

  return (
    <div className="block overflow-hidden max-w-xl m-auto w-3/4">
      <h1 className="text-4xl md:text-6xl text-white text-center mt-40 w-full">Leave A Review</h1>
      <div className="review w-full md:w-4/5 h-auto m-auto rounded-md bg-gray-900 bg-opacity-50 text-white mt-5 p-6">
        <form className='gap-4' onSubmit={handleSubmit} encType='application/json'>

          <div className="mb-6">
            <label htmlFor="firstName" className="block text-white">First Name:</label>
            <input type="text" name="firstName" id="firstName" required className="w-full p-2 bg-gray-800 text-white" />
          </div>

          <div className="mb-6">
            <label htmlFor="lastName" className="block text-white">Last Name:</label>
            <input type="text" name="lastName" id="lastName" required className="w-full p-2 bg-gray-800 text-white" />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-white">Email:</label>
            <input type="text" name="email" id="email" required className="w-full p-2 bg-gray-800 text-white" />
          </div>

          <div className="mb-6">
            <label htmlFor="feedback" className="block text-white">Feedback:</label>
            <textarea name="feedback" id="feedback" cols={30} rows={6} required className="w-full p-2 bg-gray-800 text-white"></textarea>
          </div>

          <div id="wantResponse" className="text-center mb-6">
            <label htmlFor="wantResponse" className="text-white">Would you like a response?</label>
            <div className="flex justify-center mt-2">
              <label className="mr-4">
                <input type="radio" name="wantResponse" value="Yes" required className="mr-2" /> Yes
              </label>
              <label>
                <input type="radio" name="wantResponse" value="No" required className="mr-2" /> No
              </label>
            </div>
          </div>

          <button type="submit" className="w-full md:w-auto bg-white text-black p-2">Submit</button>
        </form>

        {/* Display success message */}
        {successMessage && (
          <div className={`mt-4 p-2 text-white ${isSuccess ? 'bg-green-700' : 'bg-red-700'}`}>
          {successMessage}
        </div>
        )}

      </div>
    </div>
  );
};

export { ReviewForm };
