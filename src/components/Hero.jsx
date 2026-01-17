import React from 'react';
import { motion } from 'framer-motion';

/**
 * Hero Component
 * 
 * Features:
 * - Full-screen background image with a subtle nature-inspired overlay.
 * - Centered brand slogan '面料会说话' (Fabrics Speak) using premium serif typography.
 * - Minimalist Call to Action (CTA) button.
 * - Smooth fade-in and slide-up animations using Framer Motion.
 */
const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=2070"
          alt="Mother and child exploring nature"
          className="w-full h-full object-cover"
        />
        {/* Nature-inspired gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-slate/30 via-transparent to-brand-slate/20" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="block text-white/90 font-sans text-xs tracking-[0.4em] uppercase mb-6">
            Lireason Outdoor
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif mb-8 leading-tight">
            面料会说话
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 font-serif italic mb-12 tracking-wide">
            "Fabrics Speak" — Crafting nature's dialogue for Kids & Women.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#product-showcase"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary bg-white text-brand-slate hover:bg-brand-beige"
            >
              Explore Collection
            </motion.a>
            
            <motion.a
              href="#fabric-tech"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-white font-sans text-xs tracking-widest uppercase border-b border-white/40 pb-1 hover:border-white transition-colors duration-300"
            >
              The Technology
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/60 font-sans text-[10px] tracking-widest uppercase mb-4">滑动</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>

      {/* Decorative Nature Element (Subtle) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-beige to-transparent z-10" />
    </section>
  );
};

export default Hero;
