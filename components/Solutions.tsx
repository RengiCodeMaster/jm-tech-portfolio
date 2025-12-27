import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Utensils, Briefcase, Stethoscope, TrendingUp, Users, Settings } from 'lucide-react';

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Soluciones para <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Negocios Reales</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              No solo código, sino herramientas que optimizan la gestión diaria de tu empresa. Desde el control de stock hasta la fidelización de clientes.
            </p>

            <ul className="space-y-6">
              {[
                { icon: <ShoppingBag />, title: "Tiendas y Emprendimientos", desc: "Control de inventario y punto de venta (POS)." },
                { icon: <Utensils />, title: "Restaurantes y Delivery", desc: "Gestión de pedidos y cartas digitales." },
                { icon: <Stethoscope />, title: "Consultorios y Servicios", desc: "Agendamiento de citas y recordatorios automáticos." },
                { icon: <Briefcase />, title: "Profesionales", desc: "Portafolios de alto impacto y marca personal." },
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="mt-1 p-2 rounded-lg bg-white/5 text-secondary border border-white/5 h-fit group-hover:bg-secondary/20 group-hover:scale-110 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Futuristic Dashboard Visualization with 3D Perspective */}
          <motion.div
            initial={{ opacity: 0, rotateY: 30, x: 50 }}
            whileInView={{ opacity: 1, rotateY: -5, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            className="relative hidden md:block"
          >
            <div className="relative bg-[#0A0C10] border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-y-6 hover:rotate-y-0 transition-transform duration-500">
              {/* Header UI */}
              <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-xs text-gray-500 font-mono flex items-center gap-2">
                   JM_DASHBOARD_V1.0
                   <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                </div>
              </div>

              {/* Grid UI */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors group cursor-pointer relative overflow-hidden">
                  <div className="flex justify-between items-start mb-2 relative z-10">
                    <TrendingUp className="text-green-400 group-hover:scale-110 transition-transform" />
                    <span className="text-xs text-green-400">+24%</span>
                  </div>
                  <div className="text-2xl font-bold font-display relative z-10">S/ 12,450</div>
                  <div className="text-xs text-gray-500 relative z-10">Ventas del mes (Reporte Auto)</div>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-400/30 transition-colors">
                  <Users className="text-purple-400 mb-2" />
                  <div className="text-lg font-bold">1,204</div>
                  <div className="text-xs text-gray-500">Clientes Activos</div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-400/30 transition-colors">
                  <Settings className="text-blue-400 mb-2 animate-spin-slow" />
                  <div className="text-lg font-bold">Auto</div>
                  <div className="text-xs text-gray-500">Python Scripts Running</div>
                </div>
                
                {/* Code snippet visual with typewriter effect */}
                <div className="col-span-2 bg-black/50 rounded-lg p-3 font-mono text-xs text-gray-400 border border-white/5 mt-2 overflow-hidden">
                   <motion.div
                     initial={{ y: 0 }}
                     animate={{ y: -20 }}
                     transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
                   >
                      <p><span className="text-purple-400">def</span> <span className="text-blue-400">optimize_process</span>():</p>
                      <p className="pl-4">data = database.fetch_all()</p>
                      <p className="pl-4">analyze(data) <span className="text-gray-600"># AI Analysis</span></p>
                      <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-green-400">"Efficiency +100%"</span></p>
                      <p className="pl-4 text-gray-600"># System ready...</p>
                   </motion.div>
                </div>
              </div>
            </div>

            {/* Glowing lines behind */}
            <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;