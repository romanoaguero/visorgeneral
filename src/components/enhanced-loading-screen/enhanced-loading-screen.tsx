

import React, { useState, useEffect } from 'react';

const EnhancedLoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-blue-900 animate-gradient-slow">
      {/* Efecto de partículas con múltiples colores */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-pulse ${
              i % 3 === 0 ? 'bg-yellow-500/20' : 
              i % 3 === 1 ? 'bg-emerald-500/20' : 
              'bg-blue-500/20'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Contenedor principal */}
      <div className="flex flex-col items-center gap-8 z-10">
        {/* Círculos animados */}
        <div className="relative">
          {/* Círculo exterior con gradiente */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-600 to-orange-500 animate-spin-slow absolute -inset-2 blur-md opacity-50" />
          
          {/* Círculo principal */}
          <div className="relative w-28 h-28">
            {/* Anillos pulsantes */}
            <div className="absolute inset-0 w-full h-full border-4 border-yellow-500/50 rounded-full animate-ping" />
            <div className="absolute inset-0 w-full h-full border-4 border-orange-400/40 rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
            
            {/* Círculo central con logo */}
            <div className="absolute inset-0 w-full h-full bg-gray-900/90 rounded-full flex items-center justify-center border-2 border-yellow-500">
              <svg 
                viewBox="0 0 100 100" 
                className="w-20 h-20"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(234, 179, 8, 0.3))'
                }}
              >
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  className="fill-yellow-500" 
                />
                <path 
                  d="M50 5 
                     L60 15 L60 40 L85 40 L95 50
                     L85 60 L60 60 L60 85 L50 95
                     L40 85 L40 60 L15 60 L5 50
                     L15 40 L40 40 L40 15 Z" 
                  className="fill-orange-500"
                />
                <path 
                  d="M35 35 L65 65 M35 65 L65 35" 
                  className="stroke-gray-900 stroke-[8]" 
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Barra de progreso con nuevo gradiente */}
        <div className="w-64 h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
          <div 
            className="h-full bg-gradient-to-r from-yellow-500 via-emerald-500 to-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Texto de carga con efecto de brillo */}
        <div className="space-y-2 text-center">
          <p className="text-yellow-400 text-lg font-medium tracking-wider animate-pulse">
            Cargando...
          </p>
          <p className="text-gray-300 text-sm">
            {progress}% Completado
          </p>
        </div>

        {/* Mensajes rotativos */}
        <div className="h-6 overflow-hidden">
          <div className="animate-slide-up">
            {['Preparando todo...', 'Casi listo...', 'Un momento más...'].map((text, i) => (
              <p 
                key={i} 
                className="text-gray-400 text-sm h-6 flex items-center justify-center"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Agregar keyframes para animaciones
const style = document.createElement('style');
style.textContent = `
  @keyframes slide-up {
    0% { transform: translateY(0); }
    33.33% { transform: translateY(-24px); }
    66.66% { transform: translateY(-48px); }
    100% { transform: translateY(-72px); }
  }

  @keyframes gradient-slow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;
document.head.appendChild(style);

export default EnhancedLoadingScreen;
