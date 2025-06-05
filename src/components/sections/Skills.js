import React, { useState, useEffect } from 'react';
import { Code, Palette, Globe, Database, Smartphone, GitBranch, FlaskConical, Terminal, KanbanSquare } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('habilidades');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const technicalSkills = [
    { 
      name: 'React', 
      level: 60, 
      icon: <Code className="w-6 h-6" />, 
      color: 'from-blue-400 to-blue-600',
      description: 'Hooks, Context API'
    },
    { 
      name: 'JavaScript', 
      level: 70, 
      icon: <Globe className="w-6 h-6" />, 
      color: 'from-yellow-400 to-yellow-600',
      description: 'Async/Await, APIs REST'
    },
    { 
      name: 'CSS/Tailwind', 
      level: 80, 
      icon: <Palette className="w-6 h-6" />, 
      color: 'from-green-400 to-green-600',
      description: 'Responsive, Animaciones, Flex/Grid'
    },
    { 
      name: 'Node.js', 
      level: 60, 
      icon: <Terminal className="w-6 h-6" />, 
      color: 'from-purple-400 to-purple-600',
      description: 'Express, APIs RESTful, Middlewares'
    },
    { 
      name: 'Python', 
      level: 80, 
      icon: <FlaskConical className="w-6 h-6" />, 
      color: 'from-pink-400 to-pink-600',
      description: 'Backend, Scripting, Automatización'
    },
    { 
      name: 'Git & GitHub', 
      level: 85, 
      icon: <GitBranch className="w-6 h-6" />, 
      color: 'from-orange-400 to-orange-600',
      description: 'Control de versiones'
    },
    { 
      name: 'PostgreSQL', 
      level: 85, 
      icon: <Database className="w-6 h-6" />, 
      color: 'from-blue-400 to-blue-600',
      description: 'Bases de datos relacionales, SQL'
    },
    { 
      name: 'Jira', 
      level: 85, 
      icon: <KanbanSquare className="w-6 h-6" />, 
      color: 'from-indigo-400 to-indigo-600',
      description: 'Gestión ágil, Sprints, Tickets'
    },
    { 
      name: 'Kotlin', 
      level: 70, 
      icon: <Smartphone className="w-6 h-6" />, 
      color: 'from-violet-400 to-violet-600',
      description: 'Desarrollo Android'
    }
  ];

  const softSkills = [
    { name: 'Resolución de Problemas', level: 85 },
    { name: 'Trabajo en Equipo', level: 90 },
    { name: 'Comunicación', level: 90 },
    { name: 'Adaptabilidad', level: 85 },
    { name: 'Liderazgo', level: 88 },
    { name: 'Creatividad', level: 84 }
  ];

  return (
    <section id="habilidades" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mis{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear experiencias web excepcionales
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>
        
        {/* Habilidades Técnicas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Habilidades Técnicas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => (
              <div 
                key={index} 
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl hover:bg-gray-700/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-3 mb-2 overflow-hidden">
                  <div 
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out ${
                      isVisible ? '' : 'w-0'
                    }`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  ></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Nivel de dominio</span>
                  <span className="text-white font-semibold">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Habilidades Blandas */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Habilidades Blandas</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                    {skill.name}
                  </span>
                  <span className="text-gray-400 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${(index + technicalSkills.length) * 100}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Aprendizaje Continuo</h3>
            <p className="text-gray-400 leading-relaxed">
              Siempre estoy actualizando mis conocimientos con las últimas tecnologías y mejores prácticas. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;