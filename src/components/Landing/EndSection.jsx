import React from "react";
import { Link } from "react-router-dom";

const EndSection = ({ onGetStarted }) => {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden text-center">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-40 w-2 h-2 bg-white rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Experience the Difference?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join the growing number of organizations that have discovered the
          advantages of working with a team that combines deep expertise with
          personal commitment to your success.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Start Cooking Button */}
          <div
            onClick={onGetStarted}
            className="relative cursor-pointer inline-flex flex-col items-center justify-center px-10 py-8 rounded-2xl shadow-2xl text-white font-extrabold text-2xl transition-all duration-500 transform hover:scale-110 bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-400"
          >
            <span>Start Cooking</span>
            {/* Shiny hover overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-400 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl mix-blend-overlay"></span>
          </div>

          {/* Sample Recipes Button */}
          <Link
            to="/sample-recipes"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // ✅ scroll to top
            className="relative cursor-pointer inline-flex flex-col items-center justify-center px-10 py-8 rounded-2xl shadow-2xl text-white font-extrabold text-2xl transition-all duration-500 transform bg-blue-400 hover:bg-blue-500"
          >
            Sample Recipes
          </Link>
        </div>

        {/* Stats section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-blue-400 mb-2">10K+</div>
            <div className="text-white text-l">Recipes Generated</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-400 mb-2">5K+</div>
            <div className="text-white text-l">Happy Users</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-300 text-l">Dietary Options</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-300 text-l">AI Availability</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndSection;
