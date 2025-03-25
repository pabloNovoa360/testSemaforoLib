import React from 'react';
import { Card } from '../ui/card';

const PracticesToAvoid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Prácticas a Evitar</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estas prácticas afectan negativamente la puntuación de tus propiedades
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 border-l-4 border-l-semaforo-red hover:shadow-lg transition-shadow duration-300">
            <div className="flex mb-4">
              <div className="bg-semaforo-red/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <div className="w-6 h-6 bg-semaforo-red rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold">Información incompleta</h3>
            </div>
            <p className="text-gray-600">
              Propiedades sin descripción detallada, dimensiones o características básicas tienen menor visibilidad.
            </p>
          </Card>
          
          <Card className="p-6 border-l-4 border-l-semaforo-red hover:shadow-lg transition-shadow duration-300">
            <div className="flex mb-4">
              <div className="bg-semaforo-red/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <div className="w-6 h-6 bg-semaforo-red rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold">Pocas fotos o de baja calidad</h3>
            </div>
            <p className="text-gray-600">
              Las propiedades sin fotos o con imágenes de baja resolución reciben menos interacciones.
            </p>
          </Card>
          
          <Card className="p-6 border-l-4 border-l-semaforo-red hover:shadow-lg transition-shadow duration-300">
            <div className="flex mb-4">
              <div className="bg-semaforo-red/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <div className="w-6 h-6 bg-semaforo-red rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold">Ubicación imprecisa</h3>
            </div>
            <p className="text-gray-600">
              Propiedades sin ubicación exacta o con direcciones incompletas no aparecerán en búsquedas por zona.
            </p>
          </Card>
          
          <Card className="p-6 border-l-4 border-l-semaforo-red hover:shadow-lg transition-shadow duration-300">
            <div className="flex mb-4">
              <div className="bg-semaforo-red/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <div className="w-6 h-6 bg-semaforo-red rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold">Precios desactualizados</h3>
            </div>
            <p className="text-gray-600">
              Los precios que no reflejan la realidad actual del mercado generan desconfianza y reducen contactos.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PracticesToAvoid; 