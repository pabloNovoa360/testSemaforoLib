
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Semáforo de propiedades</h3>
            <p className="text-gray-400 max-w-md">
              Un sistema inteligente para mejorar la visibilidad de tus propiedades.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-8 md:mt-0">
            <div>
              <h4 className="font-medium mb-3">Enlaces rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#tool" className="text-gray-400 hover:text-white transition-colors">La herramienta</a></li>
                <li><a href="#reference" className="text-gray-400 hover:text-white transition-colors">Niveles</a></li>
                <li><a href="#recommendations" className="text-gray-400 hover:text-white transition-colors">Recomendaciones</a></li>
                <li><a href="#avoid" className="text-gray-400 hover:text-white transition-colors">Prácticas a evitar</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Contacto</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Soporte</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ayuda</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Semáforo de propiedades. Todos los derechos reservados.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-400 text-sm mr-2">Hecho con</span>
            <Heart className="h-4 w-4 text-semaforo-red" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
