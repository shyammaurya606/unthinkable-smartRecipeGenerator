import React from 'react';
import HeroSection from './HeroSection';
import WhyChooseSection from './WhyChooseSection';

import TestimonialsSection from './TestimonialsSection';
import EndSection from  './EndSection';

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gray-900">
      <HeroSection onGetStarted={onGetStarted} />
      <WhyChooseSection />
      <TestimonialsSection />
      <EndSection onGetStarted={onGetStarted} /> 
    </div> 
  );
};

export default LandingPage;