import React from 'react';
import { Check } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

const plans = [
  {
    name: "Emprendedor",
    description: "Ideal para profesionales que necesitan presencia online.",
    features: ["Landing Page One-Page", "Diseño Responsive", "Botón a WhatsApp", "SEO Básico"],
    gradient: "from-gray-700 to-gray-600"
  },
  {
    name: "Empresarial",
    description: "Para negocios que quieren vender más y mostrar catálogo.",
    features: ["Web Completa (5 secciones)", "Catálogo de Productos", "Panel autoadministrable", "Google Analytics", "Formularios de contacto"],
    recommended: true,
    gradient: "from-primary to-blue-600"
  },
  {
    name: "Sistema Corporativo",
    description: "Automatización total y gestión interna.",
    features: ["Sistema a medida (Web App)", "Base de Datos", "Usuarios y Roles", "Automatización con Python", "Soporte Prioritario"],
    gradient: "from-purple-600 to-pink-600"
  },
];

const Plans: React.FC = () => {
  return (
    <section id="plans" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Planes y Paquetes</h2>
          <p className="text-gray-400">Inversión transparente para cada etapa de tu crecimiento.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <GlassCard
              key={idx}
              className={`relative flex flex-col h-full ${plan.recommended ? 'border-primary/50 shadow-[0_0_30px_rgba(6,182,212,0.15)]' : ''}`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-blue-500 text-black font-bold px-4 py-1 rounded-full text-xs shadow-lg uppercase tracking-wider">
                  Más Pedido
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400 h-10">{plan.description}</p>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/51947442007?text=Hola,%20me%20interesa%20el%20plan%20${plan.name}`}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-3 rounded-xl text-center font-bold text-white transition-all hover:opacity-90 bg-gradient-to-r ${plan.gradient}`}
              >
                Cotizar Plan
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;