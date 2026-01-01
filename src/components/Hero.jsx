import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Shield, MessageCircle, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-emerald-50/30">
      {/* Cinematic Parallax Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight"
          >
            Desinfla tu abdomen en{' '}
            <span className="text-primary">7 días</span>
            <br className="hidden md:block" />
            <span className="text-secondary">—sin dietas extremas ni pasar hambre</span>
          </motion.h1>

          {/* Pattern Interrupt Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Eso que parece grasa obstinada <strong className="text-primary">NO es grasa</strong>.{' '}
            Es <strong className="text-secondary">inflamación química</strong> atrapada en tu intestino.
            <br className="hidden md:block" />
            Y se puede revertir en una semana.
          </motion.p>

          {/* Micro-Benefit Bullets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center gap-3 mb-8 text-left max-w-xl mx-auto"
          >
            {[
              { text: "Sentirte ligera por primera vez en meses, sin esa sensación de globo", icon: "✓" },
              { text: "Recuperar tu energía desde el día 3—sin necesitar 3 cafés para funcionar", icon: "✓" },
              { text: "Ver resultados visibles en el espejo, no solo en la báscula", icon: "✓" },
              { text: "Comer sin miedo a que tu abdomen se infle después de cada comida", icon: "✓" },
              { text: "Volver a ponerte tu ropa favorita sin sentir que te aprieta", icon: "✓" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-primary font-bold text-lg">{benefit.icon}</span>
                <span className="text-slate-700">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Proof Line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-base text-slate-500 mb-8 font-medium"
          >
            👩‍👩‍👧 <strong className="text-primary">1,500+ mujeres</strong> en México ya desinflamaron su abdomen con este método
          </motion.p>

          {/* Primary CTA with Breathing Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-6"
          >
            <a
              href="#checkout"
              className="inline-block bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-emerald-700 text-white text-lg md:text-xl font-bold py-5 px-10 md:px-12 rounded-full shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-300 transform hover:scale-105 animate-breathing"
            >
              SÍ, QUIERO DESINFLAMAR MI ABDOMEN →
            </a>
          </motion.div>

          {/* CTA Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-sm text-slate-500 mb-10"
          >
            ⚡ Acceso inmediato · 🛡️ 7 días de garantía · 🔒 Pago 100% seguro
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
