import React from 'react';
import { Card } from '../ui/card';

const RecommendationsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recomendaciones</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mejora la puntuación de tus propiedades siguiendo estas recomendaciones
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex mb-4">
              <div className="bg-semaforo-green/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <div className="w-6 h-6 bg-semaforo-green rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold">Incluye fotos de calidad</h3>
            </div>
            <p className="text-gray-600">
              Las propiedades con al menos 5 fotos de buena calidad obtienen mejor puntuación y más visitas.
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex mb-4">
              <div className="bg-semaforo-green/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <div className="w-6 h-6 bg-semaforo-green rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold">Describe las características</h3>
            </div>
            <p className="text-gray-600">
              Incluye detalles sobre los servicios, comodidades y características especiales de la propiedad.
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex mb-4">
              <div className="bg-semaforo-green/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <div className="w-6 h-6 bg-semaforo-green rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold">Especifica la ubicación exacta</h3>
            </div>
            <p className="text-gray-600">
              Las propiedades con ubicación precisa aparecen en más búsquedas por zona.
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex mb-4">
              <div className="bg-semaforo-green/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <div className="w-6 h-6 bg-semaforo-green rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold">Mantén precios actualizados</h3>
            </div>
            <p className="text-gray-600">
              Actualiza regularmente el precio para reflejar las condiciones actuales del mercado.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection; 