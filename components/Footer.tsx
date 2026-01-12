import React from 'react';
import { COMPANY_NAME, ADDRESS, PHONE_DISPLAY } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
                <span className="text-2xl font-bold text-white mb-4 block">
                  FM <span className="text-primary">Calhas</span>
                </span>
                <p className="text-sm text-gray-400">
                    Especialistas em calhas e coberturas metálicas. Qualidade e proteção para sua obra.
                </p>
            </div>
            
            {/* Quick Links */}
            <div>
                <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#home" className="hover:text-primary transition-colors">Início</a></li>
                    <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
                    <li><a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a></li>
                    <li><a href="#localizacao" className="hover:text-primary transition-colors">Contato</a></li>
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h4 className="text-white font-bold mb-4">Contato</h4>
                <p className="text-sm mb-2">{ADDRESS}</p>
                <p className="text-sm font-bold text-primary">{PHONE_DISPLAY}</p>
            </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos reservados.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;