import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useAnimation, PanInfo } from 'framer-motion';
import { Search, Lightbulb, Code2, Rocket, Headset, ArrowRight, MousePointer2, CheckCircle2, Trophy } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

const steps = [
  {
    id: '01',
    title: 'Diagnóstico',
    desc: 'Análisis profundo de requerimientos y competencia.',
    icon: <Search className="w-6 h-6" />
  },
  {
    id: '02',
    title: 'Diseño',
    desc: 'Arquitectura, UX/UI y selección de stack tecnológico.',
    icon: <Lightbulb className="w-6 h-6" />
  },
  {
    id: '03',
    title: 'Desarrollo',
    desc: 'Código limpio (Clean Code) y construcción modular.',
    icon: <Code2 className="w-6 h-6" />
  },
  {
    id: '04',
    title: 'Despliegue',
    desc: 'Tests, optimización y puesta en producción segura.',
    icon: <Rocket className="w-6 h-6" />
  },
  {
    id: '05',
    title: 'Soporte',
    desc: 'Monitoreo continuo y mejoras post-lanzamiento.',
    icon: <Headset className="w-6 h-6" />
  },
];

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  // Motion controls
  const controls = useAnimation();
  const x = useMotionValue(0);

  // Progress bar calculation based on x value and total width
  // Map x range [0, -width] to [0, 1]
  const progress = useTransform(x, [0, -width], [0, 1]);
  const progressWidth = useTransform(progress, p => `${p * 100}%`);

  useEffect(() => {
    if (containerRef.current) {
      // Calculate total scrollable width: ScrollWidth - ClientWidth
      const scrollWidth = containerRef.current.scrollWidth;
      const offsetWidth = containerRef.current.offsetWidth;
      setWidth(scrollWidth - offsetWidth);

      // Start auto-scroll animation
      startAutoScroll(scrollWidth - offsetWidth);
    }
  }, []);

  const startAutoScroll = (targetWidth: number) => {
    controls.start({
      x: -targetWidth,
      transition: {
        duration: 20, // Slow linear movement
        ease: "linear",
        repeat: Infinity, // Loop forever
        repeatType: "mirror", // Go back and forth
        repeatDelay: 0,
      }
    });
  };

  const handleDragStart = () => {
    setIsInteracting(true);
    controls.stop(); // Stop auto-scroll when user grabs
  };

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-black/40">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-primary/30 rounded-full bg-primary/10 text-primary text-xs font-mono uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Workflow Lineal
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Ruta hacia el Éxito
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Un camino claro de principio a fin.
          </p>
        </div>

        {/* Interaction Hint & Progress */}
        <div className="flex justify-between items-end mb-4 px-4 md:px-12 text-xs text-gray-500 font-mono">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            INICIO
          </div>
          <div className="flex items-center gap-2">
            META
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">

          <motion.div
            ref={containerRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing relative py-12"
          >
            {/* The Timeline Line Background */}
            <div className="absolute top-1/2 left-0 w-[200%] h-1 bg-white/5 -translate-y-1/2 z-0"></div>

            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              animate={controls}
              style={{ x }}
              onDragStart={handleDragStart}
              className="flex gap-12 pl-6 md:pl-12 w-max"
            >
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex-shrink-0">
                  <GlassCard
                    className="w-[280px] md:w-[320px] h-[340px] flex flex-col justify-between border border-white/5 bg-[#05060A]/80 backdrop-blur-xl group/card relative overflow-hidden"
                    hoverEffect={false}
                  >
                    {/* Step Indicator Top */}
                    <div className="absolute top-0 left-0 px-4 py-2 bg-white/5 rounded-br-2xl border-b border-r border-white/5 font-mono text-xs text-primary/70">
                      PASO {step.id}
                    </div>

                    <div className="mt-8 relative z-10 pointer-events-none">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 flex items-center justify-center text-primary mb-6 shadow-lg group-hover/card:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover/card:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    {/* Bottom aesthetic line */}
                    <div className="w-full h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 mt-4"></div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </GlassCard>

                  {/* Connector Arrow */}
                  <div className="absolute top-1/2 -right-9 -translate-y-1/2 text-white/10 z-0">
                    <ArrowRight size={24} />
                  </div>
                </div>
              ))}

              {/* FINAL CARD: The Goal / Success State */}
              <div className="relative flex-shrink-0">
                <GlassCard className="w-[280px] md:w-[320px] h-[340px] flex flex-col items-center justify-center text-center border border-green-500/30 bg-green-500/5 backdrop-blur-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent animate-pulse-slow"></div>

                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-black mb-6 shadow-[0_0_30px_rgba(34,197,94,0.4)] relative z-10">
                    <Trophy size={32} />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2 relative z-10">
                    ¡Lanzamiento!
                  </h3>
                  <p className="text-green-200/70 text-sm max-w-[200px] relative z-10">
                    Tu proyecto está vivo, optimizado y listo para escalar.
                  </p>

                  <div className="mt-6 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold tracking-widest flex items-center gap-2">
                    <CheckCircle2 size={12} />
                    COMPLETADO
                  </div>
                </GlassCard>
              </div>

            </motion.div>
          </motion.div>

          {/* Progress Bar (Visible Interaction Feedback) */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 mt-8">
            <motion.div
              style={{ width: progressWidth }}
              className="h-full bg-gradient-to-r from-primary to-green-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
            />
          </div>
        </div>

        <div className="flex justify-center mt-6 text-gray-500 text-xs items-center gap-2">
          <MousePointer2 size={14} />
          <span>Arrastra para navegar por el timeline</span>
        </div>

      </div>
    </section>
  );
};

export default Process;