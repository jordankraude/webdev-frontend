import Image from "next/image";
import { CircleAnimation } from "../../components/circleAnimation.jsx"
import {StickyCarousel} from "../../components/carousel.jsx"
import { TestimonialCard } from "../../components/testimonials.jsx"
import SnakeGame from "../../components/snakeGame.jsx"
import React, { useEffect, useRef } from 'react';

export default function Team() {
  
  return (
    <main>
      <h1>Team</h1>

      <SnakeGame/>


    </main>
  )
}