import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Droplets, Sun, ShieldCheck } from 'lucide-react';

/**
 * FabricTech Component
 * 
 * This section brings the brand slogan '面料会说话' (Fabrics Speak) to life.
 * It uses a split-screen layout to showcase the technical superiority and 
 * sensory quality of Lireason's materials.
 */
const FabricTech = () => {
  const techFeatures = [
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Air-Touch Breathability",
      description: "Advanced micro-porous structures that allow heat to escape while keeping the elements out."
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Eco-Shield Protection",
      description: "A sustainable, PFC-free water-repellent finish that protects both the wearer and the environment."
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "UV-Guard Technology",
      description: "Integrated fiber protection that blocks 98% of harmful rays during long days in the sun."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Durability-Plus",
      description: "High-tenacity fibers engineered to withstand the rigors of childhood exploration and mountain trails."
    }
  ];

  return (
    <section id="fabric-tech" className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Macro Fabric Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=2070" 
                alt="Macro texture of high-end outdoor fabric" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-sage/10 -z-10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/30 w-[90%] h-[90%] pointer-events-none" />
          </motion.div>

          {/* Right Side: Technical Storytelling */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-sage font-sans text-xs tracking-widest uppercase mb-4 block">
                品牌哲学
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-slate mb-6 leading-tight">
                面料会说话 <br />
                <span className="italic text-3xl md:text-4xl opacity-80">Fabrics Speak</span>
              </h2>
              <p className="text-brand-slate/70 font-sans leading-relaxed mb-12 max-w-lg">
                我们相信，户外服饰应是第二层肌肤。我们独有的面料科技
                不仅仅是防护；它通过每一根纤维传递舒适与自由，
                让你和孩子能够聆听自然的韵律。
              </p>
            </motion.div>

            {/* Tech Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {techFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="text-brand-sage mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-sm font-sans font-semibold tracking-wider uppercase text-brand-slate mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-brand-slate/60 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-16"
            >
              <button className="btn-outline">
                Learn More About Our Tech
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FabricTech;