import Image from "next/image";
import { CircleAnimation } from "../../components/circleAnimation.jsx"
import { RequestQuoteButton } from "../../components/requestQuoteButton.jsx"
import React, { useEffect, useRef } from 'react';

export default function Services() {
  
  return (
// pages/index.js (or any appropriate page file)

    <main className="text-white mt-40">
      <h1 className="text-3xl md:text-5xl mb-6 text-center">Our Services</h1>
      <section className="flex flex-wrap m-auto w-full justify-center items-start">
        <div className="mb-8 p-6 bg-gray-900 bg-opacity-50 shadow-md rounded-md text-white w-full md:w-2/5 lg:w-1/3 h-auto md:mx-3 md:h-[300px] lg:h-[360px] border border-cyan-300">
          <h3 className="text-2xl font-bold mb-4">Web Design</h3>
          <p>We specialize in creating visually appealing and user-friendly website designs tailored to your brand, ensuring a seamless and engaging user experience.</p>
          <img className="hidden lg:block" src="path/to/web-design-image.jpg" alt="Web Design Image" />
        </div>

        <div className="mb-8 p-6 bg-gray-900 bg-opacity-50 shadow-md rounded-md text-white w-full md:w-2/5 lg:w-1/3 h-auto md:mx-3 md:h-[300px] lg:h-[360px] border border-cyan-300">
          <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
          <p>Our team excels in building responsive and interactive user interfaces using modern frontend technologies. We have expertise in frameworks such as React, Next.js, and Svelte, along with proficiency in styling with Tailwind CSS for sleek and efficient designs.</p>
          <img className="hidden lg:block" src="path/to/frontend-dev-image.jpg" alt="Frontend Development Image" />
        </div>

        <div className="mb-8 p-6 bg-gray-900 bg-opacity-50 shadow-md rounded-md text-white w-full md:w-2/5 lg:w-1/3 h-auto md:mx-3 md:h-[300px] lg:h-[360px] border border-cyan-300">
          <h3 className="text-2xl font-bold mb-4">Backend Development</h3>
          <p>Experience the strength of our server-side applications, developed with a focus on robustness. Our team is skilled in meta frameworks and has hands-on experience with databases, including MongoDB, MySQL, and PostgreSQL, ensuring efficient data handling and storage.</p>
          <img className="hidden lg:block" src="path/to/backend-dev-image.jpg" alt="Backend Development Image" />
        </div>

        <div className="mb-8 p-6 bg-gray-900 bg-opacity-50 shadow-md rounded-md text-white w-full md:w-2/5 lg:w-1/3 h-auto md:mx-3 md:h-[300px] lg:h-[360px] border border-cyan-300">
          <h3 className="text-2xl font-bold mb-4">E-commerce Solutions</h3>
          <p>Boost your online business with our secure and scalable e-commerce platforms. We provide end-to-end solutions to enhance your digital storefront and streamline online transactions.</p>
          <img className="hidden lg:block" src="path/to/ecommerce-image.jpg" alt="E-commerce Solutions Image" />
        </div>

        <div className="mb-8 p-6 bg-gray-900 bg-opacity-50 shadow-md rounded-md text-white w-full md:w-2/5 lg:w-1/3 h-auto md:mx-3 md:h-[300px] lg:h-[360px] border border-cyan-300">
          <h3 className="text-2xl font-bold mb-4">Graphic Design</h3>
          <p>Our creative expertise extends to graphic design using the Adobe Creative Suite. From stunning visuals to captivating branding elements, we bring your ideas to life with precision and creativity.</p>
          <img className="hidden lg:block" src="path/to/graphic-design-image.jpg" alt="Graphic Design Image" />
        </div>

        </section>






      <div>
          <RequestQuoteButton/>
      </div>
    </main>
  )
}