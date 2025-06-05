import fotoPersonal from './Foto/Jose.jpeg'; 

const About = () => {
  const highlights = [
    {
      title: 'Frontend Development',
      description: 'React, JavaScript, HTML5 y CSS avanzado',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Backend Development', 
      description: 'Experiencia con Node.js, APIs RESTful y bases de datos',
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'UI/UX Design',
      description: 'Creación de interfaces intuitivas y experiencias de usuario',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Problem Solving',
      description: 'Enfoque analítico para resolver desafíos',
      color: 'from-orange-400 to-orange-600'
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 -left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-60 h-60 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Mí
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="flex justify-center flex-col items-center"> 
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>
              
              <div className="relative h-80 w-80 rounded-full border-4 border-white/10 overflow-hidden shadow-2xl">
                <img 
                  src={fotoPersonal} 
                  alt="José López - Desarrollador"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute top-6 right-6 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>-
            <h3 className="mt-6 text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Jose López - Desarrollador
            </h3>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                ¡Hola! Soy <span className="text-blue-400 font-medium">José López</span>, un desarrollador apasionado con experiencia en tecnologías modernas. 
                Actualmente curso Ingeniería en Ciencias de la Computación en la Universidad del Valle de Guatemala, 
                donde combino formación académica con proyectos prácticos.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Mi enfoque se centra en diseñar interfaces intuitivas
                y desarrollar aplicaciones que resuelvan problemas. Siempre estoy aprendiendo 
                nuevas tecnologías y mejorando mis habilidades.
              </p>

              <div className="text-gray-300 text-lg leading-relaxed">
                Cosas que disfruto:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Escuchar música en todo momento</li>
                  <li>Ver series y películas</li>
                  <li>Jugar videojuegos</li>
                  <li>Compartir tiempo con amigos y familia</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-4 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group">
                  <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full mb-3 group-hover:scale-150 transition-transform duration-300`}></div>
                  <h4 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;