
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="font-semibold text-lg md:text-xl text-semaforo-blue">
              Semáforo de propiedades
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#tool" className="text-gray-700 hover:text-semaforo-blue transition-colors">
              La herramienta
            </a>
            <a href="#recommendations" className="text-gray-700 hover:text-semaforo-blue transition-colors">
              Recomendaciones
            </a>
            <a href="#avoid" className="text-gray-700 hover:text-semaforo-blue transition-colors">
              Prácticas a evitar
            </a>
            <button className="semaforo-button">
              Editar mis propiedades
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-gray-700 hover:text-semaforo-blue"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-2xl mt-3 animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <a 
              href="#tool" 
              className="block py-3 text-gray-700 hover:text-semaforo-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              La herramienta
            </a>
            <a 
              href="#recommendations" 
              className="block py-3 text-gray-700 hover:text-semaforo-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Recomendaciones
            </a>
            <a 
              href="#avoid" 
              className="block py-3 text-gray-700 hover:text-semaforo-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Prácticas a evitar
            </a>
            <button className="semaforo-button w-full">
              Editar mis propiedades
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
