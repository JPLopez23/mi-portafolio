import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { menuItems } from '../../utils/constants';
import { scrollToSection } from '../../utils/helpers';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            MiPortafolio
          </div>
          
          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => handleScrollTo(item.id)}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button 
            className="md:hidden text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-sm pt-20">
            <ul className="flex flex-col items-center space-y-8 pt-8">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => handleScrollTo(item.id)}
                    className="text-xl text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;