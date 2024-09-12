'use client';
import React from 'react';
import { scrollToSection } from '../../utils/scrollToSection';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ 
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('https://downloadhdwallpapers.in/wp-content/uploads/2017/11/Laptop-Work-Condition-1600x1200.jpg')` 
      }}
    >
      <div className="text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Business Software<br />Solutions And Services
        </h1>
        <p className="text-xl text-black mb-8">
          <span className="underline font-bold">Software</span> services and solutions to take your <span className="underline font-bold">Business</span> to the next level 🚀
        </p>
        <div className="space-x-4">
          <button className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Know more
          </button>
          <button
            className="bg-white text-black px-6 py-2 rounded-md border border-blue-600 hover:bg-blue-50 transition duration-300"
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

 