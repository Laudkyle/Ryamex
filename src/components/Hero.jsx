// components/Hero.jsx
import React from 'react';
import heroVideo from '/assets/videos/distribution-hero.mp4';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <div className="absolute inset-0 bg-black bg-opacity-90"></div> */}
      </div>
      
      <div className="relative z-10 text-center px-4 text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
          RYAMEX VENTURES
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Premier distribution partner for leading beverage brands in Ghana
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
          Partner With Us
        </button>
      </div>
    </section>
  );
};

export default Hero;