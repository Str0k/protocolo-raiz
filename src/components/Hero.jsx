import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Zap, Lock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] md:min-h-[85vh] pt-24 pb-12 flex items-center overflow-hidden bg-gradient-to-b from-[#F0FDF4] to-white">
      {/* Abstract Organic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-green-200 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-orange-100 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT COLUMN: Copy & Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] mb-6 leading-[1.1]">
              ¿Tu Pantalón No Cierra Después de las Fiestas?
            </h1>

            <h2 className="text-xl md:text-2xl font-bold text-slate-700 mb-6 leading-relaxed">
              No Es Grasa. Es <span className="text-[#10B981]">Inflamación Química</span>. <br className="hidden md:block" />
              Y Puedes <span className="text-orange-500">Revertirla</span> en 7 Días.
            </h2>

            <p className="text-lg text-slate-500 mb-8 max-w-lg mx-auto md:mx-0">
              El protocolo científico que desinflama tu abdomen sin dietas restrictivas, hambre ni rebote.
            </p>

            <ul className="space-y-4 mb-8 text-left max-w-md mx-auto md:mx-0">
              {[
                "Reduce entre 3-7 cm de cintura en la primera semana",
                "Elimina la hinchazón, gases y pesadez digestiva",
                "Sin contar calorías, sin pasar hambre, sin efecto rebote"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 bg-green-100 p-0.5 rounded-full">
                    <Check size={16} className="text-[#10B981] stroke-[3]" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col items-center md:items-start gap-4">
              <motion.button
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#10B981] text-white text-lg md:text-xl font-bold py-4 px-8 rounded-full shadow-xl shadow-[#10B981]/30 hover:shadow-[#10B981]/50 transition-all w-full md:w-auto"
              >
                DESINFLAMA TU ABDOMEN HOY - $17 USD
              </motion.button>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 text-sm font-medium text-slate-500 mt-4">
                <span className="flex items-center gap-1 text-emerald-600 font-bold">✓</span> Sin riesgo
                <span className="text-slate-300">·</span>
                <span>Cancelación en 1 clic</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 3D Product Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-green-400/20 blur-[80px] rounded-full transform scale-75"></div>

            {/* Main Product Image */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img
                src="/product-explosion.jpg"
                alt="Protocolo de Raíz Bundle"
                className="w-full h-auto drop-shadow-2xl transform rotate-[-5deg]"
              />
              {/* Floating Elements (Visual Decoration) */}
              <div className="absolute top-10 -right-10 bg-white p-3 rounded-xl shadow-lg animate-bounce delay-700">
                <span className="text-2xl">🥑</span>
              </div>
              <div className="absolute bottom-20 -left-5 bg-white p-3 rounded-xl shadow-lg animate-bounce delay-1000">
                <span className="text-2xl">⚖️</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

