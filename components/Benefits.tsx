import React from 'react';
import { Droplets, Home, TrendingUp, CloudRain } from 'lucide-react';
import { BenefitItem } from '../types';

const benefits: BenefitItem[] = [
  {
    id: '1',
    title: 'Evita Infiltrações',
    description: 'A água mal direcionada é a maior causa de danos em paredes e fundações. Nossas calhas resolvem isso.',
    icon: Droplets,
  },
  {
    id: '2',
    title: 'Previne Mofo e Danos',
    description: 'Mantenha sua casa seca e saudável, evitando manchas escuras, bolor e deterioração da pintura.',
    icon: Home,
  },
  {
    id: '3',
    title: 'Valoriza o Imóvel',
    description: 'Um sistema de calhas bem instalado melhora a estética e conserva a estrutura do imóvel por muito mais tempo.',
    icon: TrendingUp,
  },
  {
    id: '4',
    title: 'Proteção Climática',
    description: 'Sistemas projetados para suportar chuvas fortes e ventos, garantindo tranquilidade em qualquer estação.',
    icon: CloudRain,
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 bg-secondary text-white relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-green-400 font-bold tracking-wider uppercase text-sm">Por que investir?</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-6">
              Mais que estética, uma questão de proteção para seu patrimônio
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Não espere a chuva causar prejuízos. A instalação correta de calhas e rufos é o melhor investimento preventivo para sua casa ou comércio.
            </p>
            <div className="space-y-6">
                {benefits.map((benefit) => (
                    <div key={benefit.id} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                            <div className="w-12 h-12 rounded-lg bg-secondary-light flex items-center justify-center border border-gray-700">
                                <benefit.icon className="text-primary w-6 h-6" />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
          
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl border-4 border-gray-700">
             <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop" 
                alt="Profissional trabalhando em obra" 
                className="w-full h-full object-cover"
             />
             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
                <p className="text-white font-semibold">Qualidade garantida em cada instalação.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;