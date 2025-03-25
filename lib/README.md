# Semáforo Property Boost

Una biblioteca de componentes React para visualizar y mejorar la puntuación de propiedades inmobiliarias.

## Instalación

```bash
npm install semaforo-property-boost
# o
yarn add semaforo-property-boost
```

## Requisitos

- React 16.8.0 o superior
- ReactDOM 16.8.0 o superior
- Tailwind CSS (opcional, pero recomendado)

## Uso

### Componente principal

```jsx
import React from 'react';
import { PropertyBoost } from 'semaforo-property-boost';

const MyPage = () => {
  return (
    <div>
      <h1>Mi página inmobiliaria</h1>
      
      {/* Uso básico con valores por defecto */}
      <PropertyBoost />
      
      {/* Uso personalizado */}
      <PropertyBoost 
        title="Sistema de Evaluación de Propiedades"
        description="Mejora la visibilidad de tus propiedades en el mercado"
        showFooter={false}
        primaryColor="#3B82F6"
        secondaryColor="#10B981"
      />
    </div>
  );
};

export default MyPage;
```

### Componentes individuales

También puedes importar y usar componentes individuales:

```jsx
import React from 'react';
import { 
  HeroSection, 
  ToolSection, 
  HowItWorks 
} from 'semaforo-property-boost';

const CustomPage = () => {
  return (
    <div>
      <HeroSection 
        title="Título personalizado" 
        description="Descripción personalizada" 
      />
      <ToolSection />
      <HowItWorks />
      {/* Otros componentes... */}
    </div>
  );
};

export default CustomPage;
```

## Props

### PropertyBoost

| Prop | Tipo | Por defecto | Descripción |
|------|------|-------------|-------------|
| title | string | "Boost Your Property's Value" | Título principal en la sección hero |
| description | string | "Get personalized recommendations to increase your property value" | Descripción en la sección hero |
| showFooter | boolean | true | Mostrar u ocultar el footer |
| primaryColor | string | "#007AFF" | Color primario (azul) |
| secondaryColor | string | "#34C759" | Color secundario (verde) |

### HeroSection

| Prop | Tipo | Por defecto | Descripción |
|------|------|-------------|-------------|
| title | string | "Semáforo de propiedades" | Título principal |
| description | string | "Mantén tus propiedades completas y actualizadas" | Descripción principal |

## Configuración de Tailwind CSS

Para asegurar que los estilos funcionen correctamente, añade los siguientes colores a tu configuración de Tailwind:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'semaforo-blue': 'var(--semaforo-blue, #007AFF)',
        'semaforo-green': 'var(--semaforo-green, #34C759)',
        'semaforo-yellow': '#FF9500',
        'semaforo-red': '#FF3B30',
      },
    },
  },
  // ... resto de tu configuración
};
```

## Desarrollo

Para desarrollar esta biblioteca localmente:

```bash
git clone https://github.com/yourusername/semaforo-property-boost.git
cd semaforo-property-boost
npm install
npm run dev
```

## Licencia

MIT 