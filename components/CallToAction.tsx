import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const CallToAction: React.FC = () => {
    const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Faça um orçamento sem compromisso agora mesmo
        </h2>
        <p className="text-green-50 text-xl mb-10 max-w-2xl mx-auto">
          Nossa equipe está pronta para atender Jaguariúna e região com agilidade e o melhor preço.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-bold flex items-center justify-center gap-3 shadow-lg transition-transform hover:-translate-y-1"
            >
                <MessageCircle size={24} />
                Falar no WhatsApp
            </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;