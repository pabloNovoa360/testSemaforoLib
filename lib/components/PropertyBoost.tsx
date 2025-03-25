import React, { useEffect } from 'react';
import HeroSection from './HeroSection';
import ToolSection from './ToolSection';
import HowItWorks from './HowItWorks';
import RecommendationsSection from './RecommendationsSection';
import PracticesToAvoid from './PracticesToAvoid';

export interface PropertyBoostProps {
  title?: string;
  description?: string;
  showFooter?: boolean;
  primaryColor?: string;
  secondaryColor?: string;
  // Add more props as needed for customization
}

const PropertyBoost = ({
  title = "Boost Your Property's Value",
  description = "Get personalized recommendations to increase your property value",
  showFooter = true,
  primaryColor = "#007AFF",
  secondaryColor = "#34C759",
}: PropertyBoostProps) => {
  useEffect(() => {
    // Animation for revealing elements when they come into view
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const revealPoint = 150;
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check on load
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  // Define CSS variable for custom colors
  useEffect(() => {
    document.documentElement.style.setProperty('--semaforo-blue', primaryColor);
    document.documentElement.style.setProperty('--semaforo-green', secondaryColor);
    
    return () => {
      document.documentElement.style.removeProperty('--semaforo-blue');
      document.documentElement.style.removeProperty('--semaforo-green');
    };
  }, [primaryColor, secondaryColor]);

  return (
    <div className="semaforo-property-boost min-h-screen overflow-x-hidden">
      <HeroSection title={title} description={description} />
      <ToolSection />
      <HowItWorks />
      <RecommendationsSection />
      <PracticesToAvoid />
      {showFooter && <div className="mt-8 text-center text-gray-500 text-sm py-4">
        <p>© {new Date().getFullYear()} Semáforo Property. All rights reserved.</p>
      </div>}
    </div>
  );
};

export default PropertyBoost; 