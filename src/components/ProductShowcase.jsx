import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ProductShowcase Component
 * 
 * Displays a curated selection of Lireason's outdoor apparel for Kids and Women.
 * Features:
 * - Category filtering (All, Kids, Women).
 * - Minimalist grid layout with ample white space.
 * - Smooth entry animations and hover effects.
 * - High-quality mock data with nature-inspired imagery.
 */

const PRODUCTS = [
  {
    id: 1,
    name: "儿童探索者冲锋衣",
    category: "儿童",
    price: "¥899",
    image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80&w=800",
    tag: "防水"
  },
  {
    id: 2,
    name: "女士高山美利奴打底衫",
    category: "女士",
    price: "¥650",
    image: "https://images.unsplash.com/photo-1485126713398-2d07416d5ad9?auto=format&fit=crop&q=80&w=800",
    tag: "透气"
  },
  {
    id: 3,
    name: "儿童全天候户外裤",
    category: "儿童",
    price: "¥520",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=800",
    tag: "耐磨"
  },
  {
    id: 4,
    name: "女士轻量防风夹克",
    category: "女士",
    price: "¥1,280",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
    tag: "超轻"
  },
  {
    id: 5,
    name: "儿童保暖抓绒卫衣",
    category: "儿童",
    price: "¥450",
    image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&q=80&w=800",
    tag: "保暖"
  },
  {
    id: 6,
    name: "女士高性能紧身裤",
    category: "女士",
    price: "¥780",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=800",
    tag: "弹力"
  }
];

const ProductShowcase = () => {
  const [filter, setFilter] = useState('全部');
  const categories = ['全部', '儿童', '女士'];

  const filteredProducts = filter === '全部' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <section id="product-showcase" className="bg-brand-beige py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-sage font-sans text-xs tracking-widest uppercase mb-4 block">
              精选系列
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-slate">
              为荒野而设计
            </h2>
          </motion.div>

          {/* Filter Controls */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex gap-8"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`nav-link pb-1 ${filter === cat ? 'text-brand-slate after:w-full' : 'text-brand-slate/40'}`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="product-card-img relative mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-slate/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] tracking-widest uppercase font-sans text-brand-slate">
                      {product.tag}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-brand-sage mb-1">
                      {product.category}
                    </p>
                    <h3 className="text-lg font-serif text-brand-slate group-hover:text-brand-sage transition-colors duration-300">
                      {product.name}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-brand-slate/60">
                    {product.price}
                  </p>
                </div>
                
                {/* Subtle "View Details" indicator on hover */}
                <div className="mt-4 overflow-hidden">
                  <div className="h-[1px] w-0 bg-brand-sage group-hover:w-full transition-all duration-500" />
                  <p className="text-[10px] tracking-widest uppercase text-brand-sage mt-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    查看详情
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-24 text-center"
        >
          <p className="text-brand-slate/50 font-serif italic mb-8">
            探索为每一次冒险设计的全系列功能服饰。
          </p>
          <button className="btn-primary">
            查看所有产品
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;