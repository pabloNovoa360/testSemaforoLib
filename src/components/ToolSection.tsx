
import { useEffect, useRef } from 'react';
import { Eye, TrendingUp, Award, Search } from 'lucide-react';
const ToolSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');

        // Animate features with delay when section is visible
        featuresRef.current.forEach((feature, index) => {
          if (feature) {
            setTimeout(() => {
              feature.classList.add('active');
            }, 200 * index);
          }
        });
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
  const benefits = [{
    icon: <TrendingUp className="w-10 h-10 text-semaforo-blue" />,
    title: "Mayor visibilidad garantizada",
    description: "Las propiedades bien puntuadas aparecen hasta 3 veces más en búsquedas y reciben el doble de consultas."
  }, {
    icon: <Search className="w-10 h-10 text-semaforo-blue" />,
    title: "Posicionamiento preferencial",
    description: "Al mejorar tu puntuación, tu propiedad recibe ubicación prioritaria en los resultados de búsqueda, aumentando las oportunidades de venta."
  }, {
    icon: <Eye className="w-10 h-10 text-semaforo-blue" />,
    title: "Más visitas",
    description: "Las propiedades con información completa generan mayor confianza en los usuarios, incrementando las visitas virtuales en un 40% y las presenciales en un 25%."
  }, {
    icon: <Award className="w-10 h-10 text-semaforo-blue" />,
    title: "Ventas más rápidas",
    description: "Propiedades con puntuación verde se venden o arriendan hasta un 30% más rápido que aquellas con puntuación roja o amarilla."
  }];
  return <section id="tool" className="bg-white py-[20px]">
      <div ref={sectionRef} className="section-container reveal px-4 sm:px-6 lg:px-8 py-0">
        <div className="flex flex-col items-center justify-between gap-12">
          <div className="w-full max-w-4xl mx-auto">
            <span className="inline-block bg-semaforo-blue/10 text-semaforo-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
              Maximiza tus resultados
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Mejora la visibilidad de tus propiedades
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl">Aplicar las recomendaciones del Semáforo no solo mejora tu puntuación, sino que aumenta significativamente las oportunidades de venta o arriendo. Cada punto de mejora se traduce en más visitas y potenciales compradores.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => <div key={index} ref={el => featuresRef.current[index] = el} className="flex items-start gap-4 reveal">
                  <div className="bg-semaforo-blue/5 rounded-lg p-3">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-base">{benefit.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ToolSection;
