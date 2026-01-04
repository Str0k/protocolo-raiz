import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock, Shield, Sparkles, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 pb-12 flex flex-col overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">

      {/* Subtle animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex-grow flex items-center">
        <div className="max-w-6xl mx-auto w-full">

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* LEFT: Copy */}
            <div className="text-center lg:text-left order-2 lg:order-1">

              {/* Product Type Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-400/30 rounded-full px-4 py-2 mb-6"
              >
                <FileText size={16} className="text-emerald-400" />
                <span className="text-emerald-300 font-medium text-sm">Guía Digital • Acceso Inmediato</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Desinfla tu abdomen en{' '}
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-emerald-400 bg-[length:200%_auto]"
                >
                  7 días
                </motion.span>
                <br className="hidden sm:block" />
                <span className="text-slate-300 font-medium text-2xl md:text-3xl lg:text-4xl">
                  sin dietas extremas ni ejercicio
                </span>
              </motion.h1>

              {/* Subheadline - The Insight */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed"
              >
                Esa "panza" que no se va <strong className="text-white">no es grasa</strong>—es{' '}
                <strong className="text-emerald-400">inflamación intestinal</strong>.
                Esta guía te muestra cómo eliminarla desde la raíz.
              </motion.p>

              {/* Benefit Pills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
              >
                {[
                  "Sin pastillas",
                  "Sin gimnasio",
                  "Recetas de 15 min"
                ].map((item, index) => (
                  <span
                    key={index}
                    className="bg-slate-800/60 border border-slate-700/50 text-slate-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    ✓ {item}
                  </span>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-6"
              >
                <a
                  href="#checkout"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-lg font-bold py-4 px-8 rounded-2xl shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-[1.02] group"
                  onClick={() => {
                    if (window.fbq) window.fbq('track', 'InitiateCheckout');
                  }}
                >
                  <span>QUIERO MI GUÍA AHORA</span>
                  <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
                </a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500"
              >
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-emerald-400" />
                  Descarga inmediata
                </span>
                <span className="flex items-center gap-2">
                  <Shield size={16} className="text-emerald-400" />
                  Garantía 7 días
                </span>
                <span className="flex items-center gap-2">
                  <Sparkles size={16} className="text-emerald-400" />
                  +1,500 mujeres
                </span>
              </motion.div>
            </div>

            {/* RIGHT: Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -15, 0] // Floating animation
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl rounded-full scale-110" />

                {/* Product Image */}
                <div className="relative">
                  <img
                    src="/product-explosion.jpg"
                    alt="El Protocolo de Raíz - Guía Completa"
                    className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl shadow-black/50"
                  />

                  {/* Price Badge REMOVED as per request */}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
