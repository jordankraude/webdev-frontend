// components/ReviewForm.js
"use client"

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSuccess } from './successContext.jsx';

const QuoteRequestForm = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [messageColor, setColor] = useState('')
  const [isSuccess, setIsSuccess] = useState(false);
  const { setSuccess } = useSuccess();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(formData)
    
    try {
      const response = await axios.post('https://webdev-backend-n0v3.onrender.com/quote-request/', formData);
      console.log(response.data); // Log the response from the server
      setColor('bg-green')
      setSuccessMessage('Form submitted successfully!');
      setIsSuccess(true)
      setSuccess(true);
      window.location = '/Contact/Success';
      

    } catch (error) {
      console.error('Error submitting form:', error);
      setColor('bg-red')
      setSuccessMessage('Failed to submit the form. Please try again.');
      setIsSuccess(false)
      setSuccess(false);

    }

  };
  return (

<div className="block overflow-hidden max-w-xl m-auto w-3/4">
  <h1 className="text-4xl md:text-6xl text-white text-center mt-40 mb-10 w-full">Quote Request</h1>
  <div className="review w-full md:w-4/5 h-auto m-auto rounded-md bg-gray-900 bg-opacity-50 text-white mt-5 p-6">
    <form className='gap-4' onSubmit={handleSubmit} encType="multipart/form-data">

      <div className="mb-6">
        <label htmlFor="firstname" className="block text-white">First Name:</label>
        <input type="text" name="firstName" id="firstname" required className="w-full p-3 bg-gray-800" />
      </div>

      <div className="mb-6">
        <label htmlFor="lastname" className="block text-white">Last Name:</label>
        <input type="text" name="lastName" id="lastname" required className="w-full p-3 bg-gray-800" />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-white">Email:</label>
        <input type="text" name="email" id="email" required className="w-full p-3 bg-gray-800" />
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block text-white">Phone Number:</label>
        <input type="tel" name="phoneNumber" id="phoneNumber" required className="w-full p-3 bg-gray-800" />
      </div>

      <div className="mb-6">
        <label htmlFor="budget" className="block text-white">Budget:</label>
        <select name="budget" id="budget" required className="w-full p-3 bg-gray-800 ">
          <option>Select a Budget Range</option>
          <option value="< $1,000">{'<'} $1,000</option>
          <option value="$1,000 - $5,000">$1,000 - $5,000</option>
          <option value="$5,000 - $10,000">$5,000 - $10,000</option>
          <option value="$10,000 - $15,000">$10,000 - $15,000</option>
          <option value="> $15,000">{'>'} $15,000</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="otherInfo" className="block text-white">Other Info (Optional):</label>
        <textarea name="otherInfo" id="otherInfo" cols={30} rows={4} className="w-full p-3 bg-gray-800"></textarea>
      </div>

      <div className="mb-6">
        <label htmlFor="file" className="block text-white">Upload File (Optional):</label>
        <input type="file" name="fileData" id="fileData" className="w-full p-3 bg-gray-800" />
      </div>

      <button type="submit" className="w-full md:w-auto bg-white text-black p-3 z-50">Submit</button>
    </form>
    {successMessage && (
          <div className={`mt-4 p-2 text-white ${isSuccess ? 'bg-green-700' : 'bg-red-700'}`}>
            {successMessage}
          </div>
        )}
  </div>
</div>



  );
};

export { QuoteRequestForm };
