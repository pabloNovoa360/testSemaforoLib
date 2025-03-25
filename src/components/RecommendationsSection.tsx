
import { useEffect, useRef } from 'react';
import { Camera, Edit, FileText, LayoutGrid } from 'lucide-react';

const RecommendationsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');

        // Animate cards with delay when section is visible
        cardsRef.current.forEach((card, index) => {
          if (card) {
            setTimeout(() => {
              card.classList.add('active');
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

  const recommendations = [{
    icon: <Camera className="w-8 h-8 text-semaforo-blue" />,
    title: "Fotos de calidad",
    description: "Agrega la mayor cantidad de fotos posibles. Asegurate de mostrar todas las áreas de la propiedad y utilizar buena iluminación."
  }, {
    icon: <Edit className="w-8 h-8 text-semaforo-blue" />,
    title: "Título llamativo y conciso",
    description: "Junto con la foto principal es tu carta de presentación. Destaca las características más relevantes de tu propiedad."
  }, {
    icon: <FileText className="w-8 h-8 text-semaforo-blue" />,
    title: "Descripciones completas",
    description: "Ayuda a tus clientes a saber todos los detalles, mostrándole la información necesaria sobre la propiedad."
  }, {
    icon: <LayoutGrid className="w-8 h-8 text-semaforo-blue" />,
    title: "Amenities completos",
    description: "No olvides completar los amenities! Son fundamentales para que los compradores sepan qué ofrece tu propiedad."
  }];

  return (
    <section id="recommendations" className="bg-gray-50 py-12">
      <div className="section-container reveal px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <h2 className="section-heading">Recomendaciones</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 reveal px-2">
          Sigue estas recomendaciones para maximizar la visibilidad de tus propiedades y aumentar tus probabilidades de éxito.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendations.map((item, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el} 
              className="glass-card reveal h-full flex flex-col px-[20px] py-[20px] my-[10px] mx-[10px]"
            >
              <div className="rounded-full bg-semaforo-blue/5 p-4 w-fit mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 flex-grow">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center reveal">
          <button className="semaforo-button">
            Editar mis propiedades
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
