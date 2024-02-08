import Image from "next/image";
import LaserAnimation from "../../components/laser.jsx"
import { RequestQuoteButton } from "../../components/requestQuoteButton.jsx"
import { FeedbackButton } from "../../components/feedbackButton.jsx"
import React, { useEffect, useRef } from 'react';

export default function Contact() {
  
  return (
    <main className="h-screen text-cyan-300 overflow-hidden">
      <h1>Contact</h1>
      <LaserAnimation/>
      <div className="h-full z-50">
        <div className="up producedBy relative text-center left-0 md:text-left md:left-2/3 text-2xl">
          <h2 className="text-white">Produced By:</h2>
          <h1 className="text-4xl">Jordan Kraude</h1>
        </div>
        <div className="up second address relative text-center left-0 md:text-left md:left-1/3 text-2xl">
          <h2 className="text-white">Mail Info: </h2>
          <h1 className="text-4xl">999 W 999 S <br />
            Rexburg, ID 83440</h1>
        </div>
        <div className="up third otherContact relative text-center left-0 md:text-left md:left-1/2 text-2xl">
          <h2 className="text-white">Other Contact Info:</h2>
          <h1 className="text-2xl md:text-4xl">209-495-2253  <br /> jordankraudetp@gmail.com</h1>
        </div>
      </div>
      <div className="mb-10 absolute bottom-0">
        <FeedbackButton/>
        <RequestQuoteButton/>
      </div>

    </main>
  )
}