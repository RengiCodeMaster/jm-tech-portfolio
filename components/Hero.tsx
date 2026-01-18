import React, { Suspense } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, MessageCircle, MapPin, CheckCircle, Clock } from 'lucide-react';

// Lazy load TechHalo
const TechHalo = React.lazy(() => import('./TechHalo'));

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Hero: React.FC = () => {
  // Tilt Effect Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center pt-24 pb-12 overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-50"></div>

      {/* Layout Grid: Changed to md:grid-cols-2 to keep side-by-side on tablets+ */}
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-8 items-center z-10">

        {/* Left Column: Text & CTA */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="order-1" // Ensure text is first on mobile/desktop logic
        >
          <motion.div variants={childVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            JM Tech Solutions
          </motion.div>

          <motion.h1 variants={childVariants} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Ingeniería en <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary animate-pulse-slow">Informática</span> <br />
            Desarrollo Web
          </motion.h1>

          <motion.h2 variants={childVariants} className="text-xl md:text-2xl text-gray-300 mb-4 font-light border-l-4 border-primary pl-4">
            Construyo soluciones digitales modernas para negocios y profesionales.
          </motion.h2>

          <motion.p variants={childVariants} className="text-gray-400 mb-8 leading-relaxed max-w-lg">
            Desarrollo landing pages premium, páginas web completas, automatizaciones con Python y sistemas de inventario/ventas para optimizar procesos.
          </motion.p>

          <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="https://wa.me/51947442007?text=Hola%20Juan,%20quiero%20cotizar%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle size={20} />
              Cotizar por WhatsApp
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-medium hover:bg-white/10 hover:border-white/30 transition-all"
            >
              Ver Servicios
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div variants={childVariants} className="flex flex-wrap gap-4 text-xs md:text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
              <CheckCircle size={14} className="text-green-400" />
              Disponible
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
              <Clock size={14} className="text-blue-400" />
              Respuesta rápida
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
              <MapPin size={14} className="text-purple-400" />
              Tingo María, Perú
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D & Image */}
        <div className="order-2 relative flex justify-center items-center h-[500px] lg:h-[600px] perspective-1000">

          {/* Tech Halo Background - Centered behind photo */}
          <div className="absolute inset-0 flex items-center justify-center z-0 scale-125 lg:scale-150 pointer-events-none">
            <div className="w-full h-full flex items-center justify-center relative translate-x-10 translate-y-[-20px]">
              <Suspense fallback={null}>
                <TechHalo />
              </Suspense>
            </div>
          </div>

          {/* Floating Laptop Container */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full md:min-w-[800px] scale-110 md:scale-[2.2] lg:scale-[2.8] group cursor-pointer"
          >
            {/* Glow behind laptop */}
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full -z-10 transform scale-75"></div>

            {/* Laptop Image */}
            <img
              src="/hero-laptop.png"
              alt="JM Tech Laptop"
              className="w-full h-auto relative z-20 drop-shadow-2xl"
            />

            {/* Floating UI Elements */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-10 -right-4 md:-right-10 bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl z-30"
            >
              <Code2Icon />
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-4 md:-left-12 bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-xl shadow-xl z-30 flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <div className="text-sm text-white font-mono">System <span className="text-primary">Online</span></div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// Small helper component for the floating icon
const Code2Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
);

export default Hero;