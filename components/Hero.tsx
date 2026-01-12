import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const Hero: React.FC = () => {
  const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section id="home" className="relative bg-slate-900 h-[600px] md:h-[700px] flex items-center overflow-hidden scroll-mt-24">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Proteja sua casa contra <span className="text-green-500">infiltrações e goteiras</span> com a FM Calhas
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Especialistas em instalação e manutenção de calhas, rufos e coberturas metálicas. 
            Segurança e acabamento impecável para o seu imóvel em Jaguariúna e região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg shadow-green-900/50"
            >
              Solicitar Orçamento no WhatsApp
              <ArrowRight size={20} />
            </a>
            <a
              href="#servicos"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center transition-colors"
            >
              Conhecer Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;