import React, { useEffect, useState } from "react";

const HeroSection = ({ onGetStarted }) => {
  // Local video URLs (stored inside public/videos folder)
  const videoUrls = [
    "/videos/food1.mp4",
    "/videos/food2.mp4",
    "/videos/food3.mp4",
    "/videos/food4.mp4",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videoUrls.length);
    }, 7000); // Change video every 7 seconds (set 120000 for 2 min)

    return () => clearInterval(interval);
  }, [videoUrls.length]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      {/* Video Background */}
      <video
        key={currentVideo}
        className="absolute inset-0 w-full h-full object-cover"
        src={videoUrls[currentVideo]}
        autoPlay
        muted
        loop
      />

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-40 w-2 h-2 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute top-80 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Recipe<span className="text-blue-500">AI</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming Your Ingredients into Intelligent Culinary Solutions
          </p>

          {/* CTA Button as Card */}
          <div
            onClick={onGetStarted}
            className="relative cursor-pointer inline-flex flex-col items-center justify-center px-10 py-8 bg-blue-600 rounded-2xl shadow-2xl text-white font-extrabold text-3xl transition-all duration-500 transform hover:scale-110"
          >
           
            <span>Start Cooking</span>

            {/* Shiny hover overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-400 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl mix-blend-overlay"></span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  );
};

export default HeroSection;
