import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Cómo Funciona?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nuestro sistema evalúa la completitud y calidad de la información de tus propiedades
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-semaforo-blue/10 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-semaforo-blue">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Completa la Información</h3>
            <p className="text-gray-600">
              Asegúrate de incluir todos los detalles importantes de tu propiedad.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-semaforo-blue/10 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-semaforo-blue">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Recibe tu Puntuación</h3>
            <p className="text-gray-600">
              El sistema evaluará automáticamente la calidad de tu publicación.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-semaforo-blue/10 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-semaforo-blue">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Mejora tu Visibilidad</h3>
            <p className="text-gray-600">
              Propiedades con mejor puntuación aparecerán más arriba en los resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 