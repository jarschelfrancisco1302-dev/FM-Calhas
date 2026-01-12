import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Localização', href: '#localizacao' },
  ];

  const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Manual offset calculation for robust sticky header support
      const headerOffset = 80; // Height of the sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false); // Close mobile menu if open
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-2xl font-bold text-secondary cursor-pointer hover:opacity-90 transition-opacity"
            >
              FM <span className="text-primary">Calhas</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-sm transform hover:scale-105"
            >
              <Phone size={18} />
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-700 hover:text-primary block px-3 py-4 rounded-md text-base font-medium border-b border-gray-50"
              >
                {link.name}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full bg-primary text-white block px-3 py-3 rounded-lg text-base font-bold text-center"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;