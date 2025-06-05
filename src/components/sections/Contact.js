import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { socialLinks } from '../../utils/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'jplop2004@gmail.com',
      link: 'mailto:jplop2004@gmail.com',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Teléfono',
      content: '+502 41576205',
      link: 'tel:+50241576205',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Ubicación',
      content: 'Guatemala City, GT',
      link: 'https://maps.google.com/?q=Guatemala+City',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      link: 'https://github.com/JPLopez23',
      color: 'hover:text-gray-300',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jose-pablo-l%C3%B3pez-l%C3%B3pez-bb3416265?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BAXdW8WsVTE%2BrQrZDcs3RnA%3D%3D',
      color: 'hover:text-blue-400',
      followers: '30+'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: 'Email',
      link: 'mailto:jplop2004@gmail.com',
      color: 'hover:text-purple-400',
      followers: 'Directo'
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Contacto
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy siempre abierto a nuevas oportunidades y colaboraciones.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">¡Conectemos!</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Estoy siempre interesado en nuevas oportunidades, proyectos emocionantes 
                  y conversaciones sobre tecnología. No dudes en contactarme.
                </p>
              </div>
              
              {/* Información de contacto */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="group flex items-center p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:bg-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {info.content}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Redes sociales */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Sígueme en:</h4>
                <div className="grid grid-cols-1 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center justify-between p-3 bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-lg transition-all duration-300 ${social.color} hover:bg-gray-700/30 hover:border-gray-600/50`}
                    >
                      <div className="flex items-center">
                        <div className="mr-3 group-hover:scale-110 transition-transform duration-300">
                          {social.icon}
                        </div>
                        <span className="font-medium">{social.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{social.followers}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Formulario de contacto  */}
            <div className="lg:col-span-3">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Envíame un mensaje</h3>
                
                {/* Status messages */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center">
                    <CheckCircle className="text-green-400 mr-3" size={20} />
                    <span className="text-green-400">¡Mensaje enviado exitosamente! Te contactaré pronto.</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center">
                    <AlertCircle className="text-red-400 mr-3" size={20} />
                    <span className="text-red-400">Hubo un error al enviar el mensaje. Intenta nuevamente.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre"
                        className="w-full p-4 bg-gray-800/50 text-white rounded-lg border border-gray-600/50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                        className="w-full p-4 bg-gray-800/50 text-white rounded-lg border border-gray-600/50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="¿De qué quieres hablar?"
                      className="w-full p-4 bg-gray-800/50 text-white rounded-lg border border-gray-600/50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Cuéntame sobre tu proyecto o idea..."
                      className="w-full p-4 bg-gray-800/50 text-white rounded-lg border border-gray-600/50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;