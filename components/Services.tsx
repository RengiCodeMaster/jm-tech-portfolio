import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layout, Code2, Database, Bot, BarChart, FileSpreadsheet, Calendar, PenTool } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

const mainServices = [
  {
    title: "Landing Pages que venden",
    description: "Diseño estratégico enfocado en conversión. Velocidad ultrarrápida y estética premium.",
    icon: <Layout className="w-8 h-8 text-primary" />,
  },
  {
    title: "Páginas Web Completas",
    description: "Sitios corporativos, blogs o portafolios escalables con Next.js y tecnologías modernas.",
    icon: <Globe className="w-8 h-8 text-purple-400" />,
  },
  {
    title: "Automatización Python",
    description: "Scripts que ahorran horas de trabajo. Automatización de reportes, scraping y procesos repetitivos.",
    icon: <Code2 className="w-8 h-8 text-green-400" />,
  },
  {
    title: "Sistemas para Negocios",
    description: "Software a medida para inventarios, control de ventas y gestión de clientes (CRM/ERP).",
    icon: <Database className="w-8 h-8 text-orange-400" />,
  },
];

const extraServices = [
  { name: "Bots WhatsApp/Telegram", icon: <Bot size={18} /> },
  { name: "Dashboards Interactivos", icon: <BarChart size={18} /> },
  { name: "Integración Excel/Sheets", icon: <FileSpreadsheet size={18} /> },
  { name: "Sistemas de Reservas", icon: <Calendar size={18} /> },
  { name: "Formularios Inteligentes", icon: <PenTool size={18} /> },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-mono tracking-wider uppercase">Mis Servicios</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-2 mb-4">¿En qué puedo ayudarte?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Soluciones tecnológicas adaptadas a las necesidades de tu negocio.</p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {mainServices.map((service, idx) => (
            <motion.div key={idx} variants={item}>
              <GlassCard 
                className="h-full flex flex-col justify-between group overflow-hidden relative"
              >
                {/* Shine Effect */}
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out"></div>
                
                <div>
                  <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{service.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Extra Services List */}
        <div className="flex flex-wrap justify-center gap-4">
          {extraServices.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + (idx * 0.05), type: "spring" }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 flex items-center gap-2 text-sm text-gray-300 hover:border-primary/30 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all cursor-default"
            >
              <span className="text-primary">{item.icon}</span>
              {item.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;