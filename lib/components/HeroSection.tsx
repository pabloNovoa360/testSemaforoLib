import React, { useEffect, useRef } from 'react';
import { ArrowDown, Home } from 'lucide-react';
import { Card } from '../ui/card';
import { useIsMobile } from '../hooks/use-mobile';

interface HeroSectionProps {
  title?: string;
  description?: string;
}

const HeroSection = ({ 
  title = "Semáforo de propiedades",
  description = "Mantén tus propiedades completas y actualizadas"
}: HeroSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    }, {
      root: null,
      threshold: 0.1
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const properties = [{
    id: 1,
    score: 'high',
    color: 'green',
    label: 'Puntuación alta'
  }, {
    id: 0,
    score: 'medium',
    color: 'yellow',
    label: 'Puntuación media'
  }, {
    id: 2,
    score: 'low',
    color: 'red',
    label: 'Puntuación baja'
  }];
  
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden pt-16 md:pt-12 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:w-1/2 reveal" ref={sectionRef}>
          <div className="mb-6">
            <span className="inline-block bg-semaforo-blue/10 text-semaforo-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
              Nuevo Sistema
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 opacity-0 animate-fade-in">
              {title}
            </h1>
            <h2 className="text-lg md:text-2xl text-gray-600 mb-6 opacity-0 animate-fade-in-delay-1">{description}</h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl opacity-0 animate-fade-in-delay-2">
              Ahora podrás ver la puntuación que tienen tus publicaciones. Cumpliendo estos requisitos, tu propiedad se mostrará más arriba en los listados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-delay-3">
              <button className="semaforo-button">
                Editar mis propiedades
              </button>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 reveal opacity-0 animate-fade-in-delay-2 px-1 sm:px-4">
          <div className={`relative mx-auto w-full ${isMobile ? 'max-w-xs' : 'max-w-md'}`}>
            <div className="property-cards-grid space-y-4">
              {properties.map(property => (
                <Card key={property.id} className={`property-card shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${property.color === 'green' ? 'border-l-semaforo-green' : property.color === 'yellow' ? 'border-l-semaforo-yellow' : 'border-l-semaforo-red'}`}>
                  <div className="p-3 md:p-4 flex">
                    <div className="w-1/4 bg-gray-100 rounded mr-3 flex items-center justify-center">
                      <Home className={`${property.score === 'high' ? 'text-gray-600' : property.score === 'yellow' ? 'text-gray-500' : 'text-gray-400'}`} size={isMobile ? 20 : 24} />
                    </div>
                    <div className="w-3/4">
                      <div className="h-2 bg-gray-200 rounded w-2/3 mb-3"></div>
                      <div className="flex space-x-1 mb-2">
                        {property.score === 'high' ? (
                          <>
                            <div className="bg-semaforo-green w-3 h-3 md:w-4 md:h-4 rounded-full"></div>
                            <div className="bg-semaforo-green w-3 h-3 md:w-4 md:h-4 rounded-full"></div>
                            <div className="bg-semaforo-green w-3 h-3 md:w-4 md:h-4 rounded-full"></div>
                          </>
                        ) : property.score === 'low' ? (
                          <>
                            <div className="bg-semaforo-red w-3 h-3 md:w-4 md:h-4 rounded-full"></div>
                            <div className="bg-gray-200 w-3 h-3 md:w-4 md:h-4 rounded-full"></div>
                            <div className="bg-gray-200 w-3 h-3 md:w-4 md:h-4 rounded-full"></div>
                          </>
                        ) : (
                          <>
                            <div className="bg-semaforo-yellow w-3 h-3 md:w-4 md:h-4 rounded-full"></div>
                            <div className="bg-semaforo-yellow w-3 h-3 md:w-4 md:h-4 rounded-full"></div>
                            <div className="bg-gray-200 w-3 h-3 md:w-4 md:h-4 rounded-full"></div>
                          </>
                        )}
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 bg-gray-200 rounded w-full"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="absolute top-1/4 -right-5 md:-right-10 w-16 md:w-24 h-16 md:h-24 bg-semaforo-blue/10 rounded-full opacity-50"></div>
            <div className="absolute bottom-1/3 -left-5 md:-left-10 w-20 md:w-32 h-20 md:h-32 bg-semaforo-green/10 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#tool" className="text-gray-400 hover:text-semaforo-blue transition-colors">
          <ArrowDown size={isMobile ? 20 : 24} />
        </a>
      </div>
    </div>
  );
};

export default HeroSection; 