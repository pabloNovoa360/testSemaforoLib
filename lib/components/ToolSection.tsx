import React from 'react';
import { Card } from '../ui/card';

const ToolSection = () => {
  return (
    <section id="tool" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Herramienta de Evaluación</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Evalúa la puntuación de tus propiedades basada en la completitud de la información
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-semaforo-green/10 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-semaforo-green rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold mb-2">Puntuación Alta</h3>
            <p className="text-gray-600">
              La propiedad tiene toda la información clave y aparecerá en los primeros resultados.
            </p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-semaforo-yellow/10 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-semaforo-yellow rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold mb-2">Puntuación Media</h3>
            <p className="text-gray-600">
              La propiedad tiene información básica pero podría mejorar su visibilidad con más detalles.
            </p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-semaforo-red/10 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-semaforo-red rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold mb-2">Puntuación Baja</h3>
            <p className="text-gray-600">
              La propiedad carece de información esencial y tendrá visibilidad limitada.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ToolSection; 