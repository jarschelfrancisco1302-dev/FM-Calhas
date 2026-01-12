import React from 'react';
import { Clock, ShieldCheck, Hammer } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    id: '1',
    title: 'Atendimento Rápido',
    icon: Clock,
  },
  {
    id: '2',
    title: 'Materiais de Alta Durabilidade',
    icon: ShieldCheck,
  },
  {
    id: '3',
    title: 'Mão de Obra Especializada',
    icon: Hammer,
  },
];

const Features: React.FC = () => {
  return (
    <section className="bg-white py-12 relative -mt-16 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 text-center hover:border-primary/30 transition-colors duration-300"
            >
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">
                Compromisso com a qualidade e satisfação do cliente em cada detalhe.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;