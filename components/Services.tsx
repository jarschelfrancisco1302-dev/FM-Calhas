import React from 'react';
import { CloudRain, Layers, ArrowDownToLine, ArrowDown, Home, Wind } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'calhas',
    title: 'Calhas',
    description: 'Instalação de calhas sob medida para captar e direcionar a água da chuva, protegendo paredes e beirais.',
    icon: CloudRain,
  },
  {
    id: 'rufos',
    title: 'Rufos',
    description: 'Proteção essencial para a junção entre telhados e paredes, evitando infiltrações graves.',
    icon: Layers,
  },
  {
    id: 'pingadeiras',
    title: 'Pingadeiras',
    description: 'Acabamento para muros e muretas que impede que a água escorra pelas paredes, evitando manchas.',
    icon: ArrowDownToLine,
  },
  {
    id: 'condutores',
    title: 'Condutores',
    description: 'Tubulações verticais estratégicas para o escoamento eficiente da água até a rede pluvial.',
    icon: ArrowDown,
  },
  {
    id: 'coberturas',
    title: 'Coberturas Metálicas',
    description: 'Estruturas resistentes e duráveis para garagens, varandas e galpões industriais ou residenciais.',
    icon: Home,
  },
  {
    id: 'chamines',
    title: 'Chaminés',
    description: 'Instalação de dutos e chapéus chineses para churrasqueiras, fogões a lenha e lareiras.',
    icon: Wind,
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">O que fazemos</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mt-2">
            Nossas Especialidades
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em funilaria industrial e residencial para proteger e valorizar seu imóvel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 hover:border-primary/50">
              <div className="p-8 flex-grow flex flex-col">
                <div className="w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon size={32} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 flex-grow text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;