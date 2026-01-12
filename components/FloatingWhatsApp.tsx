import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const FloatingWhatsApp: React.FC = () => {
    const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={32} fill="white" className="text-white" />
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Orçamento Rápido
      </span>
      {/* Pulse effect */}
      <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
    </a>
  );
};

export default FloatingWhatsApp;