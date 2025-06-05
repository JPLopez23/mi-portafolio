import React, { useState } from 'react';
import { Github, ExternalLink, Eye, Star, GitFork } from 'lucide-react';
import calculadoraImg from './Foto/calcu.png';
import memoriaImg from './Foto/memoria.png';
import htmlonlyImg from './Foto/htmlonly.jpeg';
import cssImg from './Foto/css.png';
import chatImg from './Foto/chat.png';
import portafolioImg from './Foto/portafolio.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Calculadora',
      description: 'Calculadora matemática interactiva con validaciones visuales.',
      longDescription: 'Calculadora desarrollada en React con operaciones básicas y validaciones de límite...',
      image: calculadoraImg,
      tech: ['React', 'CSS', 'JavaScript', 'Testing', 'Storybook'],
      category: 'React',
      github: 'https://github.com/JPLopez23/calculator-project.git',
      demo: 'https://calculator-project-three-inky.vercel.app/', 
      featured: true,
      stats: { stars: 0, forks: 0, views: 0 }
    },
    {
      id: 2,
      title: 'Juego de memoria con React',
      description: 'Juego de memoria animado con cartas aleatorias.',
      longDescription: 'Juego de memoria implementado en React sin create-react-app...',
      image: memoriaImg,
      tech: ['React', 'CSS Grid', 'Babel', 'JS'],
      category: 'React',
      github: 'https://github.com/JPLopez23/Memoria-React.git',
      demo: 'https://23773-jose.genserdev.space/Memoria-React/memoria.html',
      featured: true,
      stats: { stars: 0, forks: 0, views: 0 }
    },
    {
      id: 3,
      title: 'Historia HTML only',
      description: 'Narrativa interactiva usando sólo HTML semántico.',
      longDescription: 'Una historia ramificada construida sólo con HTML...',
      image: htmlonlyImg,
      tech: ['HTML'],
      category: 'HTML',
      github: 'https://github.com/JPLopez23/lab3.git',
      demo: 'https://23773.nrywhite.lat/lab3/',
      featured: false,
      stats: { stars: 0, forks: 0, views: 0 }
    },
    {
      id: 4,
      title: 'Dibujo CSS Only',
      description: 'Recreación de una imagen compleja usando sólo HTML y CSS.',
      longDescription: 'Dibujo de una imagen utilizando sólo un elemento HTML...',
      image: cssImg,
      tech: ['CSS', 'HTML'],
      category: 'CSS',
      github: 'https://github.com/JPLopez23/lab4css.git',
      demo: 'https://23773.nrywhite.lat/lab4/',
      featured: false,
      stats: { stars: 0, forks: 0, views: 0 }
    },
    {
      id: 5,
      title: 'Chat JS Only',
      description: 'Chat funcional sin librerías, sólo JavaScript nativo.',
      longDescription: 'Interfaz de chat completamente funcional construida con JS puro...',
      image: chatImg,
      tech: ['JavaScript', 'DOM'],
      category: 'JavaScript',
      github: 'https://github.com/JPLopez23/JSonly.git',
      demo: 'https://23773-jose.genserdev.space/JSonly/chat1.html',
      featured: false,
      stats: { stars: 0, forks: 0, views: 0 }
    },
    {
      id: 6,
      title: 'Portafolio Web',
      description: 'Proyecto final integrador con enfoque profesional.',
      longDescription: 'Portafolio personal desarrollado como carta de presentación profesional...',
      image: portafolioImg,
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
      category: 'Frontend',
      github: 'https://github.com/JPLopez23/Portafolio.git',
      demo: '#',
      featured: true,
      stats: { stars: 0, forks: 0, views: 0 }
    },
  ];

  const categories = [
    { id: 'all', name: 'Todos', count: projects.length },
    { id: 'React', name: 'React', count: projects.filter(p => p.category === 'React').length },
    { id: 'HTML', name: 'HTML', count: projects.filter(p => p.category === 'HTML').length },
    { id: 'CSS', name: 'CSS', count: projects.filter(p => p.category === 'CSS').length },
    { id: 'JavaScript', name: 'JavaScript', count: projects.filter(p => p.category === 'JavaScript').length },
    { id: 'Frontend', name: 'Frontend', count: projects.filter(p => p.category === 'Frontend').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  const renderImage = (project) => {
    try {
      return (
        <img 
          src={project.image} 
          alt={project.title}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SW1hZ2VuIG5vIGRpc3BvbmlibGU8L3RleHQ+PC9zdmc+';
          }}
        />
      );
    } catch (error) {
      return (
        <div className="text-4xl flex items-center justify-center h-full">
          🖼️
        </div>
      );
    }
  };

  return (
    <section id="proyectos" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-32 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mis <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Proyectos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Una colección de proyectos que demuestran mis habilidades en desarrollo web
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Proyectos Destacados</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:bg-gray-700/30 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center overflow-hidden">
                  {renderImage(project)}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex space-x-4">
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer"
                          className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200">
                          <Eye size={20} />
                        </a>
                      )}
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-200">
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Star size={14} />
                      <span>{project.stats.stars}</span>
                      <GitFork size={14} />
                      <span>{project.stats.forks}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30 hover:bg-blue-600/30 transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                      <Github size={18} className="mr-2" />
                      Código fuente
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                        <ExternalLink size={18} className="mr-2" />
                        Demo en vivo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white border border-gray-700/50'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:bg-gray-700/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:scale-105 cursor-pointer"
              onClick={() => project.demo && window.open(project.demo, '_blank')}>
              
              <div className="relative h-40 bg-gradient-to-br from-blue-500/10 to-purple-600/10 flex items-center justify-center overflow-hidden">
                {renderImage(project)}
                {project.featured && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full">
                    ⭐ Destacado
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-gray-500 text-xs">
                    <Eye size={12} />
                    <span>{project.stats.views}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col space-y-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    <Github size={16} className="mr-2" />
                    Repositorio
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Tienes una idea de proyecto?
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Estoy siempre interesado en colaborar en proyectos emocionantes. 
              ¡Hablemos sobre cómo puedo ayudarte a hacer realidad tu visión!
            </p>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
              Colaboremos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;