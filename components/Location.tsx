import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { ADDRESS, PHONE_DISPLAY, GOOGLE_MAPS_EMBED_URL } from '../constants';

const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Onde estamos</span>
          <h2 className="text-3xl font-extrabold text-secondary mt-2">
            Localização e Contato
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            {/* Info Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-secondary mb-8">Visite nossa sede ou entre em contato</h3>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">Endereço</p>
                            <p className="text-gray-600">{ADDRESS}</p>
                            <p className="text-sm text-gray-500 mt-1">Bairro Nassif, Jaguariúna – SP</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">Telefone / WhatsApp</p>
                            <p className="text-gray-600 font-medium text-lg">{PHONE_DISPLAY}</p>
                            <p className="text-sm text-gray-500 mt-1">Atendimento comercial</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Side */}
            <div className="h-[400px] w-full bg-gray-200">
                <iframe 
                    src={GOOGLE_MAPS_EMBED_URL}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de localização FM Calhas"
                ></iframe>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Location;