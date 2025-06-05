import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4 md:mb-0">
            MiPortafolio
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/JPLopez23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/jose-pablo-l%C3%B3pez-l%C3%B3pez-bb3416265?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BAXdW8WsVTE%2BrQrZDcs3RnA%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:jplop2004@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800/50 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Jose López</p>
          <p className="mt-2">Construido con React, Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;