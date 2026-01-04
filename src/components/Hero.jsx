import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock, Shield, Sparkles, ArrowDown, Zap } from 'lucide-react';

const Hero = () => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="relative min-h-screen pt-20 pb-12 flex flex-col overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
            initial={{
              x: `${15 + i * 15}%`,
              y: '110%'
            }}
            animate={{
              y: '-10%',
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'linear'
            }}
          />
        ))}

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(16, 185, 129, 0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex-grow flex items-center">
        <div className="max-w-6xl mx-auto w-full">

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* LEFT: Copy */}
            <motion.div
              className="text-center lg:text-left order-2 lg:order-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >

              {/* Product Type Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/10 border border-emerald-400/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={16} className="text-emerald-400" />
                </motion.div>
                <span className="text-emerald-300 font-medium text-sm">Guía Digital • Acceso Inmediato</span>
              </motion.div>

              {/* Main Headline with Enhanced Animation */}
              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              >
                <span className="inline-block">Desinfla tu abdomen en</span>{' '}
                <motion.span
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-[length:200%_auto] text-glow"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  7 días
                </motion.span>
                <br className="hidden sm:block" />
                <motion.span
                  className="text-slate-300 font-medium text-2xl md:text-3xl lg:text-4xl inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  sin dietas extremas ni ejercicio
                </motion.span>
              </motion.h1>

              {/* Subheadline - The Insight */}
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed"
              >
                Esa "panza" que no se va <strong className="text-white font-semibold">no es grasa</strong>—es{' '}
                <motion.strong
                  className="text-emerald-400 relative"
                  whileHover={{ scale: 1.05 }}
                >
                  inflamación intestinal
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </motion.strong>.
                <br />
                Esta guía te muestra cómo eliminarla desde la raíz.
              </motion.p>

              {/* Benefit Pills with Hover Effects */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
              >
                {[
                  "Sin pastillas",
                  "Sin gimnasio",
                  "Recetas de 15 min"
                ].map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: 'rgba(16, 185, 129, 0.2)',
                      borderColor: 'rgba(16, 185, 129, 0.5)'
                    }}
                    className="bg-slate-800/60 border border-slate-700/50 text-slate-300 px-4 py-2 rounded-full text-sm font-medium cursor-default transition-colors duration-300"
                  >
                    <span className="text-emerald-400 mr-1">✓</span> {item}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA Button with Premium Effects */}
              <motion.div
                variants={itemVariants}
                className="mb-6"
              >
                <motion.a
                  href="#checkout"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 text-white text-lg font-bold py-4 px-8 rounded-2xl shadow-2xl shadow-emerald-500/30 overflow-hidden group"
                  onClick={() => {
                    if (window.fbq) window.fbq('track', 'InitiateCheckout');
                  }}
                >
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-emerald-300/50"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  <span className="relative z-10 flex items-center gap-2">
                    <Zap size={20} className="fill-current" />
                    QUIERO MI GUÍA AHORA
                  </span>
                  <motion.span
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
                  </motion.span>
                </motion.a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500"
              >
                {[
                  { icon: Clock, text: "Descarga inmediata" },
                  { icon: Shield, text: "Garantía 7 días" },
                  { icon: Sparkles, text: "+1,500 mujeres" }
                ].map((item, index) => (
                  <motion.span
                    key={index}
                    className="flex items-center gap-2"
                    whileHover={{ color: '#10b981', scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon size={16} className="text-emerald-400" />
                    {item.text}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT: Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="order-1 lg:order-2 flex justify-center perspective-1000"
            >
              <motion.div
                className="relative"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Animated Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 blur-3xl rounded-full scale-110"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1.1, 1.2, 1.1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Product Image */}
                <div className="relative">
                  <motion.img
                    src="/product-explosion.jpg"
                    alt="El Protocolo de Raíz - Guía Completa"
                    className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl shadow-black/50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Sparkle effects around image */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3"
                      style={{
                        top: `${20 + i * 20}%`,
                        right: i % 2 === 0 ? '-5%' : 'auto',
                        left: i % 2 === 1 ? '-5%' : 'auto'
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      <Sparkles size={12} className="text-emerald-400" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
