import Image from "next/image";
import { CircleAnimation } from "../../components/circleAnimation.jsx"
import { RequestQuoteButton } from "../../components/requestQuoteButton.jsx"
import React, { useEffect, useRef } from 'react';

export default function Services() {
  
  return (
// pages/index.js (or any appropriate page file)

    <main className="text-white mt-40 overflow-hidden">
      <h1 className="text-3xl md:text-5xl mb-6 text-left ml-10 w-full mx-12">Our Services</h1>
      <section className="flex flex-wrap justify-center">
        <div className="mb-8 p-6 w-full md:w-full lg:w-full xl:w-full h-auto border-t-2 border-b-2 md:px-16 md:mx-12 border-cyan-300">
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold mb-4 text-cyan-300">Frontend Development</h3>
          <p className="text-sm">Our team excels in building responsive and interactive user interfaces using modern frontend technologies. We have expertise in frameworks such as React, Next.js, and Svelte, along with proficiency in styling with Tailwind CSS for sleek and efficient designs.</p>
          <ul className="mt-10 space-y-4 md:space-y-2 mb-20 text-sm list-disc">
            <li className="font-semibold">Create dynamic single-page applications (SPAs) using React.js</li>
            <li className="font-semibold">Optimize web applications for performance using Next.js server-side rendering</li>
            <li className="font-semibold">Build interactive and data-driven components with Svelte.js</li>
            <li className="font-semibold">Implement responsive designs for various devices using media queries and flexbox/grid layouts</li>
            <li className="font-semibold">Utilize Tailwind CSS utility classes for rapid and consistent styling</li>
            <li className="font-semibold">Integrate third-party APIs to fetch and display dynamic content</li>
            <li className="font-semibold">Optimize user experience (UX) through smooth animations and transitions</li>
            <li className="font-semibold">Ensure cross-browser compatibility and accessibility standards</li>
          </ul>
        </div>

        <div className=" mb-8 p-6 w-full md:w-full lg:w-full xl:w-full h-auto border-b-2 md:px-16 md:mx-12 border-cyan-300">
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold mb-4 text-cyan-300">Backend Development</h3>
          <p className="text-sm md:text-md">Experience the strength of our server-side applications, developed with a focus on robustness. Our team is skilled in meta frameworks and has hands-on experience with databases, including MongoDB, MySQL, and PostgreSQL, ensuring efficient data handling and storage.</p>
          <ul className="mt-10 space-y-4 md:space-y-2 mb-20 text-sm list-disc">
            <li className="font-semibold">Develop RESTful APIs for seamless communication between frontend and backend systems</li>
            <li className="font-semibold">Implement authentication and authorization systems for secure user access</li>
            <li className="font-semibold">Design and optimize database schemas for efficient data storage and retrieval</li>
            <li className="font-semibold">Integrate caching mechanisms to improve application performance</li>
            <li className="font-semibold">Handle server-side rendering for faster initial page loads and SEO benefits</li>
            <li className="font-semibold">Implement scalable and fault-tolerant backend architectures using microservices</li>
            <li className="font-semibold">Monitor and troubleshoot backend performance to ensure optimal system operation</li>
            <li className="font-semibold">Ensure data privacy and compliance with relevant regulations such as GDPR or HIPAA</li>
          </ul>
        </div>

        <div className="p-6 w-full md:w-full lg:w-full xl:w-full h-auto border-b-2 md:px-16 md:mx-12 mb-8 border-cyan-300">
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold mb-4 text-cyan-300">E-commerce Solutions</h3>
          <p className="text-sm md:text-md">Boost your online business with our secure and scalable e-commerce platforms. We provide end-to-end solutions to enhance your digital storefront and streamline online transactions.</p>
          <ul className="mt-10 space-y-4 md:space-y-2 mb-20 text-sm list-disc">
            <li className="font-semibold">Create custom e-commerce websites tailored to your brand and target audience</li>
            <li className="font-semibold">Integrate secure payment gateways for seamless online transactions</li>
            <li className="font-semibold">Optimize product listings and user experience for higher conversions</li>
            <li className="font-semibold">Implement inventory management and order tracking systems</li>
            <li className="font-semibold">Provide analytics and reporting tools to monitor sales and customer behavior</li>
            <li className="font-semibold">Offer ongoing support and maintenance for your e-commerce platform</li>
          </ul>
        </div>

        <div className="mb-10 p-6 w-full md:w-full lg:w-full xl:w-full h-auto md:px-16 md:mx-12 border-cyan-300">
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold mb-4 text-cyan-300">Graphic Design</h3>
          <p className="text-sm md:text-md">Our creative expertise extends to graphic design using the Adobe Creative Suite. From stunning visuals to captivating branding elements, we bring your ideas to life with precision and creativity.</p>
          <ul className="mt-10 space-y-4 md:space-y-2 mb-20 text-sm list-disc">
            <li className="font-semibold">Create eye-catching logos, illustrations, and marketing materials</li>
            <li className="font-semibold">Design visually appealing user interfaces for web and mobile applications</li>
            <li className="font-semibold">Develop brand identities including color schemes, typography, and style guides</li>
            <li className="font-semibold">Provide print-ready designs for business cards, brochures, and promotional materials</li>
            <li className="font-semibold">Offer digital asset creation such as social media graphics and email templates</li>
            <li className="font-semibold">Collaborate with clients to understand their vision and deliver impactful designs</li>
          </ul>
        </div>
      </section>


      <div className="mb-10">
          <RequestQuoteButton/>
      </div>
    </main>
  )
}