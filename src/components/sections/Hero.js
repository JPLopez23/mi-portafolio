import React, { useState, useEffect } from 'react';
import { ChevronDown, Code } from 'lucide-react';
import fotoPersonal from './Foto/Jose.jpeg';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Estudiante de Ingeniería en Ciencias de la Computación';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center px-6 relative z-10">
        <div className="w-32 h-32 mx-auto mb-6 group">
          <div className="relative rounded-full p-0.5 bg-gradient-to-r from-blue-400 to-purple-500">
            <div className="relative rounded-full overflow-hidden h-full w-full">
              <img 
                src={fotoPersonal}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt="José López"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-[3px] border-white/10 mix-blend-overlay"></div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          Hola, soy{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Jose López
          </span>
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
          <span className="inline-block min-w-0">
            {text}
            <span className="animate-pulse text-blue-400">|</span>
          </span>
        </div>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Me gusta crear experiencias web con tecnologías modernas. 
        </p>
        
        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={() => scrollToSection('proyectos')}
            className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 font-medium"
          >
            <span className="flex items-center justify-center">
              Ver mis proyectos
            </span>
          </button>
          <button 
            onClick={() => scrollToSection('contacto')}
            className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 font-medium"
          >
            <span className="flex items-center justify-center">
              Contactar
            </span>
          </button>
        </div>
        
        <div className="absolute bottom--8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('sobre-mi')}>
            <ChevronDown className="text-white/70 hover:text-white transition-colors duration-300" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;