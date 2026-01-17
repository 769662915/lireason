import React from 'react';
import { motion } from 'framer-motion';

/**
 * BrandStory Component
 * 
 * This section narrates the origin and philosophy of Lireason.
 * Features:
 * - Parallax-style background with a serene nature image.
 * - Centered, elegant typography focusing on the brand's connection to nature.
 * - Minimalist layout with high-end aesthetic.
 */
const BrandStory = () => {
  return (
    <section id="brand-story" className="relative py-32 md:py-48 overflow-hidden">
      {/* Background Image with Parallax Effect (Simulated via fixed background) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2071"
          alt="Serene forest landscape"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-brand-beige/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-brand-sage font-sans text-xs tracking-[0.5em] uppercase mb-8 block">
            品牌起源
          </span>
          
          <h2 className="text-4xl md:text-6xl font-serif text-brand-slate mb-12 leading-tight">
            诞生于森林的静谧 <br />
            <span className="italic">of the Forest</span>
          </h2>

          <div className="space-y-8 text-brand-slate/80 font-sans leading-relaxed text-lg md:text-xl max-w-2xl mx-auto">
            <p>
              Lireason 始于一个简单的观察：自然从不喧哗，它只是低语。
              我们相信最好的户外装备也应如此。
              我们的旅程始于荒野深处，在那里我们意识到，
              探索的真正本质在于身体与环境之间的感官连接。
            </p>
            
            <p className="font-serif italic text-brand-sage text-2xl py-4">
              "面料会说话 — Fabrics Speak."
            </p>

            <p>
              这一哲学驱动着我们所做的一切。对于发现第一条小径的好奇孩子
              和寻找巅峰的女性，我们制作的服饰诉说着舒适、
              保护和自由的语言。我们不仅仅使用科技面料；我们精心挑选材料，
              讲述可持续性和工艺的故事。
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 flex flex-col items-center"
          >
            <div className="w-16 h-[1px] bg-brand-tan mb-8" />
            <p className="text-xs tracking-widest uppercase text-brand-slate/40">
              始于 2023 • 灵感源自自然
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-brand-beige to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-beige to-transparent" />
      
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute -left-20 top-1/4 w-64 h-64 bg-brand-sage/5 rounded-full blur-3xl -z-10"
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute -right-20 bottom-1/4 w-80 h-80 bg-brand-tan/5 rounded-full blur-3xl -z-10"
      />
    </section>
  );
};

export default BrandStory;