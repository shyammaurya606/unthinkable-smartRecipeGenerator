import React, { useEffect, useState } from "react";

const HeroSection = ({ onGetStarted }) => {
  const videoUrls = ["/videos/foodVideo.mp4"]; // if multiple, cycle them
  const [currentVideo, setCurrentVideo] = useState(0);
  const [loading, setLoading] = useState(true); 
  const [showLoader, setShowLoader] = useState(true);

  // ❌ Removed resetting loader on interval
  useEffect(() => {
    if (videoUrls.length > 1) {
      const interval = setInterval(() => {
        setCurrentVideo((prev) => (prev + 1) % videoUrls.length);
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [videoUrls.length]);

  const handleVideoLoaded = () => {
    setLoading(false); 
    setTimeout(() => setShowLoader(false), 500); 
  };

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
        onLoadedData={handleVideoLoaded}
      />

      {/* Loader Overlay */}
      {showLoader && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/80 z-20 transition-opacity duration-500 ${
            loading ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Big Circular Spinner */}
          <div className="w-24 h-24 border-8 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Recipe<span className="text-blue-500">AI</span>
          </h1>

          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming Your Ingredients into Intelligent Culinary Solutions
          </p>

          <div
            onClick={onGetStarted}
            className="relative cursor-pointer inline-flex flex-col items-center justify-center px-10 py-8 bg-blue-600 rounded-2xl shadow-2xl text-white font-extrabold text-3xl transition-all duration-500 transform hover:scale-110"
          >
            <span>Start Cooking</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-400 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl mix-blend-overlay"></span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  );
};

export default HeroSection;
