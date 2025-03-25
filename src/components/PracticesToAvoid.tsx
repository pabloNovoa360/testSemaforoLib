
import { useEffect, useRef } from 'react';
import { MapPin, Image, DollarSign, AlertCircle } from 'lucide-react';

const PracticesToAvoid = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
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

  const practicesToAvoid = [
    {
      icon: <MapPin size={20} />,
      title: "Ubicaciones falsas",
      description: "Evita marcar ubicaciones que no corresponden a la realidad. Los compradores valoran la honestidad y se frustran al descubrir que la propiedad no está donde se indicó."
    },
    {
      icon: <Image size={20} />,
      title: "Fotos de baja calidad o con logos",
      description: "No utilices imágenes borrosas, muy oscuras o con marcas de agua grandes. Las fotos deben mostrar la propiedad de forma clara y atractiva."
    },
    {
      icon: <DollarSign size={20} />,
      title: "Precios incorrectos u ocultos",
      description: "Siempre incluye el precio real de la propiedad. Ocultar esta información o mostrar precios engañosos genera desconfianza y reduce las consultas serias."
    },
    {
      icon: <AlertCircle size={20} />,
      title: "Información incompleta",
      description: "No omitas detalles importantes como metraje, cantidad de habitaciones o baños. La falta de información básica reduce drásticamente las posibilidades de contacto."
    }
  ];

  return (
    <section id="avoid" className="bg-white py-12">
      <div className="section-container reveal px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <h2 className="section-heading">Prácticas a evitar</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 reveal px-2">
          Estas prácticas pueden perjudicar seriamente la visibilidad de tus propiedades y afectar tu reputación como vendedor.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border border-semaforo-red/20 rounded-2xl p-6 sm:p-8">
            <ul className="space-y-6">
              {practicesToAvoid.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-semaforo-red/10 rounded-full p-2 mr-4 mt-1">
                    <div className="text-semaforo-red">{item.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center reveal">
          <p className="text-gray-600 mb-6 px-2">
            Sigue nuestras recomendaciones y evita estas prácticas para maximizar tus oportunidades
          </p>
          <button className="semaforo-button">
            Editar mis propiedades
          </button>
        </div>
      </div>
    </section>
  );
};

export default PracticesToAvoid;
