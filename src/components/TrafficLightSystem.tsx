
import { useEffect, useRef } from 'react';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

const TrafficLightSystem = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
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
      },
      {
        root: null,
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const levels = [
    {
      color: "green",
      label: "Nivel Alto",
      icon: <CheckCircle className="w-12 h-12 text-semaforo-green" />,
      title: "¡Felicidades!",
      description: "La propiedad está en su máximo potencial. Saldrá en los primeros lugares cuando los usuarios hagan una búsqueda.",
      percentage: 100
    },
    {
      color: "yellow",
      label: "Nivel Medio",
      icon: <AlertTriangle className="w-12 h-12 text-semaforo-yellow" />,
      title: "Casi allí",
      description: "Te sugerimos completar los campos faltantes para alcanzar la máxima visualización. Estás perdiendo el 50% de las visitas.",
      percentage: 50
    },
    {
      color: "red",
      label: "Nivel Bajo",
      icon: <XCircle className="w-12 h-12 text-semaforo-red" />,
      title: "Atención",
      description: "La propiedad tiene muy poca información, deberás completar la ficha para aumentar su visualización. Estás perdiendo el 90% de las visitas.",
      percentage: 10
    }
  ];

  return (
    <section id="reference" className="bg-white py-12">
      <div className="section-container reveal px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <h2 className="section-heading">Referencia de visualización</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 reveal px-2">
          Nuestro sistema de colores te ayuda a identificar el nivel de visibilidad de tus propiedades en los listados.
          Mejora la puntuación para aumentar tus posibilidades de venta o arriendo.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <div
              key={level.color}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`traffic-light-card reveal border-${level.color === "green" ? "semaforo-green" : level.color === "yellow" ? "semaforo-yellow" : "semaforo-red"} hover:shadow-${level.color === "green" ? "semaforo-green/20" : level.color === "yellow" ? "semaforo-yellow/20" : "semaforo-red/20"} p-5`}
              style={{
                borderColor: level.color === "green" ? "#10b981" : level.color === "yellow" ? "#f59e0b" : "#ef4444",
                boxShadow: `0 4px 6px -1px ${level.color === "green" ? "rgba(16, 185, 129, 0.1)" : level.color === "yellow" ? "rgba(245, 158, 11, 0.1)" : "rgba(239, 68, 68, 0.1)"}`,
              }}
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-4">{level.icon}</div>
                <div className={`text-sm font-medium px-3 py-1 rounded-full mb-4 ${
                  level.color === "green" 
                    ? "bg-semaforo-green/10 text-semaforo-green" 
                    : level.color === "yellow" 
                      ? "bg-semaforo-yellow/10 text-semaforo-yellow" 
                      : "bg-semaforo-red/10 text-semaforo-red"
                }`}>
                  {level.label}
                </div>
                <h3 className="text-xl font-semibold mb-3">{level.title}</h3>
                <p className="text-gray-600 flex-grow">{level.description}</p>
                
                <div className="w-full mt-6">
                  <Progress 
                    value={level.percentage} 
                    className={`h-4 ${
                      level.color === "green" 
                        ? "bg-gray-100" 
                        : level.color === "yellow" 
                          ? "bg-gray-100" 
                          : "bg-gray-100"
                    }`}
                    indicatorClassName={
                      level.color === "green" 
                        ? "bg-semaforo-green" 
                        : level.color === "yellow" 
                          ? "bg-semaforo-yellow" 
                          : "bg-semaforo-red"
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrafficLightSystem;
