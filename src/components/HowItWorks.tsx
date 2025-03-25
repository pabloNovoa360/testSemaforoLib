
import React from 'react';
import { Check, AlertTriangle, X } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { useIsMobile } from '@/hooks/use-mobile';
const HowItWorks = () => {
  const isMobile = useIsMobile();
  const trafficLightInfo = [{
    color: "green",
    status: "Óptimo",
    description: "Propiedad completa",
    visibility: "100% Visibilidad",
    icon: <Check className="w-8 h-8 text-white" />,
    requirements: ["Mínimo 5 fotos de calidad", "Descripción detallada", "Precios y dimensiones exactas", "Localización precisa"]
  }, {
    color: "yellow",
    status: "Mejorable",
    description: "Propiedad incompleta",
    visibility: "60% Visibilidad",
    icon: <AlertTriangle className="w-8 h-8 text-white" />,
    requirements: ["3-4 fotos", "Descripción básica", "Precio aproximado", "Localización general"]
  }, {
    color: "red",
    status: "Deficiente",
    description: "Propiedad insuficiente",
    visibility: "10% Visibilidad",
    icon: <X className="w-8 h-8 text-white" />,
    requirements: ["1-2 fotos o ninguna", "Descripción mínima o ausente", "Sin precio exacto", "Localización imprecisa"]
  }];
  return <div className="w-full py-8 bg-white md:py-0">
      <div className="section-container reveal px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4">¿Cómo funciona?</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12 px-2">
          El Semáforo evalúa tus propiedades y les asigna un color según su nivel de información
        </p>

        {/* Traffic light icons - Responsive grid for mobile */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 mb-8 md:mb-12">
          {trafficLightInfo.map(item => <div key={item.color} className="flex flex-col items-center mb-2">
              <div className={`flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full bg-semaforo-${item.color} mb-2 md:mb-3`}>
                {item.icon}
              </div>
              <span className="font-medium text-lg">{item.status}</span>
            </div>)}
        </div>

        {/* Mobile card view */}
        {isMobile ? <div className="space-y-4">
            {trafficLightInfo.map((item, index) => <div key={item.color} className="rounded-lg border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex items-center p-3 bg-gray-50">
                  <div className={`w-10 h-10 rounded-full bg-semaforo-${item.color} flex items-center justify-center mr-3`}>
                    {React.cloneElement(item.icon, {
                className: "w-6 h-6 text-white"
              })}
                  </div>
                  <div>
                    <p className="font-medium">{item.status}</p>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="p-3">
                  <div className="mb-2">
                    <span className={`inline-block px-2 py-1 rounded-full text-sm font-medium ${item.color === "green" ? "bg-semaforo-green/10 text-semaforo-green" : item.color === "yellow" ? "bg-semaforo-yellow/10 text-semaforo-yellow" : "bg-semaforo-red/10 text-semaforo-red"}`}>
                      {item.visibility}
                    </span>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-medium mb-1">Requisitos:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {item.requirements.map((req, i) => <li key={i} className="text-gray-600 text-sm">{req}</li>)}
                    </ul>
                  </div>
                </div>
              </div>)}
          </div> : (/* Desktop table view */
      <div className="w-full overflow-hidden rounded-lg border border-gray-100 shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="w-[15%]">Color</TableHead>
                  <TableHead className="w-[20%]">Estado</TableHead>
                  <TableHead className="w-[20%]">Visibilidad</TableHead>
                  <TableHead className="w-[45%]">Requisitos</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {trafficLightInfo.map((item, index) => <TableRow key={item.color} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <TableCell>
                      <div className={`w-12 h-12 rounded-full bg-semaforo-${item.color}`}></div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{item.status}</p>
                        <p className="text-gray-500 text-sm">{item.description}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${item.color === "green" ? "bg-semaforo-green/10 text-semaforo-green" : item.color === "yellow" ? "bg-semaforo-yellow/10 text-semaforo-yellow" : "bg-semaforo-red/10 text-semaforo-red"}`}>
                        {item.visibility}
                      </span>
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 space-y-1">
                        {item.requirements.map((req, i) => <li key={i} className="text-gray-600">{req}</li>)}
                      </ul>
                    </TableCell>
                  </TableRow>)}
              </TableBody>
            </Table>
          </div>)}
      </div>
    </div>;
};
export default HowItWorks;
