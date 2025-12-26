import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Lock, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-emerald-50/30">
      {/* Cinematic Parallax Background - Luminous Intestinal Garden */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Organic shapes with gentle glow */}
        <motion.div
          className="absolute top-[10%] right-[5%] w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-[15%] left-[10%] w-80 h-80 bg-accent/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          className="absolute top-[40%] left-[20%] w-64 h-64 bg-emerald-300/25 rounded-full blur-2xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Subtle root/vein patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M100,500 Q250,400 400,500 T700,500"
            stroke="#10B981"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
            animate={{
              pathLength: [0, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main Hook */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight"
          >
            No es grasa. Es{' '}
            <span className="text-primary">inflamación química</span>.
            <br className="hidden md:block" />
            Reviértela en 7 días{' '}
            <span className="text-secondary">sin dietas extremas</span>.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            El protocolo científico que desinflama tu abdomen, reduce{' '}
            <strong className="text-primary">3–7 cm de cintura</strong> y reinicia tu
            energía… sin pasar hambre, sin contar calorías, sin efecto rebote.
          </motion.p>

          {/* Social Proof Line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base text-slate-500 mb-10 font-medium"
          >
            ✓ 1,500+ mujeres ya transformaron su abdomen y su energía con este método
            clínicamente diseñado
          </motion.p>

          {/* Primary CTA with Breathing Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-6"
          >
            <a
              href="#checkout"
              className="inline-block bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-emerald-700 text-white text-lg md:text-xl font-bold py-5 px-10 md:px-12 rounded-full shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-300 transform hover:scale-105 animate-breathing"
            >
              COMENZAR MI RESET AHORA →
            </a>
          </motion.div>

          {/* CTA Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-sm text-slate-500 mb-10"
          >
            Acceso inmediato · Solo $17 USD · Sin riesgo
          </motion.p>

          {/* Trust Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-slate-600"
          >
            <div className="flex items-center gap-2">
              <Lock size={18} className="text-primary" />
              <span>Pago protegido SSL</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-primary" />
              <span>Garantía 7 días sin riesgo</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle size={18} className="text-primary" />
              <span>Soporte 24/7 por WhatsApp</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
