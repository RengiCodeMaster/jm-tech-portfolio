import React from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Github, Linkedin } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    service: 'Desarrollo Web',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, service, message } = formData;

    // Strict structure requested by user
    const whatsappMessage = `Hola Juan  soy ${name}.
Quiero cotizar: ${service}.
Detalles: ${message}.
Mi correo: ${email}.`;

    const url = `https://wa.me/51947442007?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            ¿Tienes una idea?
          </h2>
          <p className="text-xl text-gray-400">Cuéntame tu idea y la convertimos en una solución real.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <GlassCard className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="tucorreo@empresa.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Servicio de Interés</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option value="Desarrollo Web" className="bg-black">Desarrollo Web</option>
                  <option value="Landing Page" className="bg-black">Landing Page</option>
                  <option value="Sistema Web" className="bg-black">Sistema Web</option>
                  <option value="E-commerce" className="bg-black">Tienda Online</option>
                  <option value="Automatización" className="bg-black">Automatización</option>
                  <option value="Otro" className="bg-black">Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Detalles del Proyecto</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Descríbeme tu proyecto..."
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                Enviar Mensaje <Send size={18} />
              </button>
            </form>
          </GlassCard>

          {/* Quick Contact */}
          <div className="flex flex-col justify-center space-y-6">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/51947442007?text=Hola%20Juan,%20quiero%20una%20cotización%20para..."
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#25D366] text-white p-6 rounded-2xl flex items-center justify-between group shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all"
            >
              <div className="flex items-center gap-4">
                <MessageCircle size={32} className="fill-current" />
                <div className="text-left">
                  <div className="font-bold text-lg">Escríbeme al WhatsApp</div>
                  <div className="text-white/80 text-sm">Respuesta inmediata</div>
                </div>
              </div>
            </motion.a>

            {/* 
            <div className="pt-8 border-t border-white/10">
              <h4 className="text-gray-400 mb-4">Sígueme en redes</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-primary transition-colors"><Github /></a>
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-500 transition-colors"><Linkedin /></a>
              </div>
            </div>
            */}
          </div>
        </div>

        <footer className="mt-20 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} JM Tech Solutions. Desarrollado por Juan M.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;