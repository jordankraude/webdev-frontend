import Image from "next/image";
import { CircleAnimation } from "../components/circleAnimation.jsx"
import {StickyCarousel} from "../components/carousel.jsx"
import { TestimonialCard } from "../components/testimonials.jsx";
import { FeedbackButton } from "../components/feedbackButton.jsx"
import { SuccessProvider } from '../components/successContext.jsx';

import React, { useEffect, useRef } from 'react';


export default function Home() {
  
  return (
      <main className="bg-black">
        
        <div id="header"></div>
        {/* <SuccessProvider/> */}

          <div className="relative top-1 w-2/3 h-2/3 bg-white"></div>
          <div className="absolute top-40 right-8 h-60 w-2/4 md:h-80 md:w-3/5 bg-gray-900 bg-opacity-50 rounded-md z-20 text-white bg-blend-color">
            <h1 className="text-3xl md:text-5xl text-center mt-10 md:mt-20">A Whole New Outlook on </h1><h1 className="text-3xl md:text-6xl text-cyan-300 text-right mr-10">Web Design</h1>
          </div>


          <CircleAnimation/>

          <StickyCarousel/>

          
        <div className="companyPurpose mt-20 md:mt-40 z-0 h-auto max-h-lvh">
            <div className="bg-gray-900 bg-opacity-50 text-white rounded-md w-4/5 ml-8 z-50">
              <h1 className="text-center text-2xl md:text-3xl lg:text-6xl p-4  z-50">Our Purpose</h1>
            </div>
            <img className="h-auto max-w-full" src="images/boardMeeting (1).jpg" alt="company board meeting"/>
            <div className="purposeStatement bg-gray-900 text-white w-4/5 relative p-4 md:p-10 text-sm md:text-lg m-auto lg:ml-44 rounded-md md:top-20 lg:top-0 top-72 bg-opacity-50">
              <p>At TOT, our purpose is to empower businesses and individuals by crafting exceptional digital experiences 
                that transcend expectations. We are dedicated to pushing the boundaries of innovation, design, and functionality 
                to deliver tailored web solutions that not only meet but exceed the unique goals of our clients. Our team of
                passionate developers and designers is committed to transforming ideas into reality, leveraging the latest 
                technologies to build robust, user-friendly, and visually stunning websites. Through creativity, collaboration, 
                and cutting-edge expertise, we strive to be the catalyst for our clients' digital success, fostering growth and 
                making a lasting impact in the ever-evolving online landscape. At TOT, we don't just build websites; we sculpt 
                digital masterpieces that leave a lasting impression.</p>
            </div>
        </div>


        <div className="bridge text-cyan-300 md:text-white lg:mt-40 mt-96">
          <h1 className="text-4xl md:text-6xl text-right mr-10">But Don't Just Take it From Us</h1>
        </div>
        <div className="flex-container text-white top-5 relative mt-0 md:mt-20"> 
          <TestimonialCard
          content="I'm thrilled with the exceptional service from TOT. Their expertise, creativity, and professionalism were outstanding. The team not only met but exceeded my expectations, delivering a visually stunning and highly functional website. Communication was seamless, making them my top recommendation for web development services"
          side="left"          
          />
          <TestimonialCard
            content="Working with TOT has been a game-changer for my business. Their commitment to understanding our unique needs and crafting tailored solutions sets them apart. The development team is highly skilled, always ready to go the extra mile. TOT is now our go-to partner for future projects."
            side="right"
          />
          <TestimonialCard
            content="Choosing TOT for our website redesign was the best decision we made. The design team showcased their innovative flair, creating a modern and visually appealing website. The user experience is seamless, and their dedication to staying on top of the latest trends is impressive. TOT is the ideal partner for ongoing success."
            side="left"
          />
        </div>
        
        <div>
          <FeedbackButton/>
        </div>


      </main>
  );
}

