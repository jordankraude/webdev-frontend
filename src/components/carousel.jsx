'use client';
import React, { useEffect } from 'react';


function StickyCarousel() {
    useEffect(() => {
      const header = document.querySelector("header");
      const carousel = document.querySelector(".carousel-container");
      const headerHeight = header?.offsetHeight || 0;
      const carouselOffsetTop = carousel?.offsetTop || 0;
      let isSticky = false;
  
      const handleScroll = () => {
        const scrollPosition = window.scrollY || window.pageYOffset;
  
        if (!isSticky && scrollPosition >= carouselOffsetTop - headerHeight) {
          isSticky = true;
          carousel?.style.setProperty("position", "fixed");
          carousel?.style.setProperty("width", "100%");
          carousel?.style.setProperty("top", `${headerHeight}px`);
        } else if (isSticky && scrollPosition < carouselOffsetTop - headerHeight) {
          isSticky = false;
          carousel?.style.setProperty("position", "relative");
          carousel?.style.setProperty("top", "auto");
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        // Cleanup the event listener on component unmount
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <div>
        {/* Your JSX structure for the sticky carousel */}
        <div className="carousel-container relative">
          <div className="carousel">
            <div className="logo"><img src="images/adidas-logo.png" alt="Logo 1"/></div>
            <div className="logo"><img src="images/chatgpt-logo.png" alt="Logo 2"/></div>
            <div className="logo"><img src="images/threads-logo.png" alt="Logo 3"/></div>
            <div className="logo"><img src="images/twitter-x-logo.png" alt="Logo 3"/></div>
            <div className="logo"><img src="images/adidas-logo.png" alt="Logo 1"/></div>
            <div className="logo"><img src="images/chatgpt-logo.png" alt="Logo 2"/></div>
            <div className="logo"><img src="images/threads-logo.png" alt="Logo 3"/></div>
            <div className="logo"><img src="images/twitter-x-logo.png" alt="Logo 3"/></div>
          </div>
        </div>
      </div>
    );
  }


  export {StickyCarousel};