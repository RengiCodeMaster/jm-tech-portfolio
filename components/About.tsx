import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Database, Server, Cpu, Layers, Globe, Smartphone } from 'lucide-react';

const technologies = [
  { name: "Python", icon: <Terminal className="text-yellow-400 w-6 h-6" /> },
  { name: "React", icon: <Code className="text-blue-400 w-6 h-6" /> },
  { name: "Next.js", icon: <Globe className="text-white w-6 h-6" /> },
  { name: "Tailwind", icon: <Layers className="text-cyan-400 w-6 h-6" /> },
  { name: "Node.js", icon: <Server className="text-green-500 w-6 h-6" /> },
  { name: "SQL", icon: <Database className="text-orange-400 w-6 h-6" /> },
  { name: "Three.js", icon: <Cpu className="text-purple-400 w-6 h-6" /> },
  { name: "Mobile", icon: <Smartphone className="text-pink-400 w-6 h-6" /> },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="md:w-1/2 z-10">
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative"
             >
                <div className="absolute -inset-4 bg-secondary/20 blur-3xl rounded-full"></div>
                <div className="relative glass-card p-8 rounded-2xl border-l-4 border-secondary">
                  <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
                    Perfil Profesional
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Soy estudiante de <span className="text-white font-semibold">Ingeniería en Informática y Sistemas</span> en la Universidad Nacional Agraria de la Selva (Tingo María, Perú).
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Me enfoco en soluciones para negocios: páginas web premium, automatizaciones con Python y sistemas de gestión. Domino Python, desarrollo web y bases de datos.
                  </p>
                </div>
             </motion.div>
          </div>

          <div className="md:w-1/2 z-10">
            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
               Dominio Tecnológico
            </h3>
            <p className="text-gray-400 mb-6">
               Utilizo las últimas herramientas del mercado para garantizar rendimiento, seguridad y escalabilidad en cada proyecto.
            </p>
          </div>
        </div>
      </div>

      {/* Animated Tech Catwalk (Marquee) */}
      <div className="relative w-full py-10 bg-black/20 border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-[#05060A] via-transparent to-[#05060A] z-10 pointer-events-none"></div>
        
        <div className="flex w-full overflow-hidden group">
            <div className="flex animate-scroll space-x-8 min-w-full">
                {/* First Loop */}
                {technologies.map((tech, idx) => (
                    <div 
                        key={`t1-${idx}`} 
                        className="flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-colors cursor-default"
                    >
                        {tech.icon}
                        <span className="font-display font-bold text-gray-200">{tech.name}</span>
                    </div>
                ))}
                {/* Duplicate Loop for seamless scroll */}
                {technologies.map((tech, idx) => (
                    <div 
                        key={`t2-${idx}`} 
                        className="flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-colors cursor-default"
                    >
                        {tech.icon}
                        <span className="font-display font-bold text-gray-200">{tech.name}</span>
                    </div>
                ))}
                 {/* Triplicate Loop for wide screens */}
                 {technologies.map((tech, idx) => (
                    <div 
                        key={`t3-${idx}`} 
                        className="flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-colors cursor-default"
                    >
                        {tech.icon}
                        <span className="font-display font-bold text-gray-200">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;