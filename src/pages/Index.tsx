
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ToolSection from '@/components/ToolSection';
import HowItWorks from '@/components/HowItWorks';
import RecommendationsSection from '@/components/RecommendationsSection';
import PracticesToAvoid from '@/components/PracticesToAvoid';
import Footer from '@/components/Footer';

const Index = () => {
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

  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <ToolSection />
      <HowItWorks />
      <RecommendationsSection />
      <PracticesToAvoid />
    </div>
  );
};

export default Index;
