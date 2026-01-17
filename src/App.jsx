import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';

// Import Components
import Hero from './components/Hero';
import FabricTech from './components/FabricTech';
import ProductShowcase from './components/ProductShowcase';
import BrandStory from './components/BrandStory';

/**
 * Navbar Component
 * 
 * A minimalist, sticky navigation bar that transitions from transparent to 
 * solid background on scroll. Includes mobile menu functionality.
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', href: '#hero' },
    { name: '科技', href: '#fabric-tech' },
    { name: '系列', href: '#product-showcase' },
    { name: '品牌故事', href: '#brand-story' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-brand-beige/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="group">
          <h1 className={`text-2xl font-serif tracking-widest transition-colors duration-300 ${
            isScrolled ? 'text-brand-slate' : 'text-white'
          }`}>
            LIREASON
          </h1>
          <div className={`h-[1px] w-0 group-hover:w-full transition-all duration-500 ${
            isScrolled ? 'bg-brand-slate' : 'bg-white'
          }`} />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`nav-link ${isScrolled ? 'text-brand-slate/60 hover:text-brand-slate' : 'text-white/70 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button className={`btn-primary py-2 px-6 text-[10px] ${
            isScrolled ? 'bg-brand-slate text-white' : 'bg-white text-brand-slate'
          }`}>
            立即选购
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-brand-slate"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-brand-slate' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-brand-slate' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-beige border-t border-brand-slate/5 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-brand-slate font-sans text-sm tracking-widest uppercase"
                >
                  {link.name}
                </a>
              ))}
              <button className="btn-primary w-full">立即选购</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/**
 * Footer Component
 * 
 * Minimalist footer with brand info, links, and social icons.
 */
const Footer = () => {
  return (
    <footer className="bg-brand-slate text-brand-beige py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif mb-6 tracking-widest">LIREASON</h2>
            <p className="text-brand-beige/60 font-sans text-sm leading-relaxed max-w-sm mb-8">
              为下一代探险家及引领他们的女性打造高端户外服饰。技术性能与极简优雅的完美结合。
            </p>
            <div className="flex gap-6">
              <Instagram className="w-5 h-5 cursor-pointer hover:text-brand-sage transition-colors" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-brand-sage transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-brand-sage transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-semibold mb-6 text-brand-sage">Explore</h4>
            <ul className="space-y-4 text-sm text-brand-beige/60 font-sans">
              <li><a href="#hero" className="hover:text-brand-beige transition-colors">Home</a></li>
              <li><a href="#fabric-tech" className="hover:text-brand-beige transition-colors">Fabric Tech</a></li>
              <li><a href="#product-showcase" className="hover:text-brand-beige transition-colors">Collections</a></li>
              <li><a href="#brand-story" className="hover:text-brand-beige transition-colors">Brand Story</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-semibold mb-6 text-brand-sage">Newsletter</h4>
            <p className="text-xs text-brand-beige/60 mb-4">Join our community for exclusive updates.</p>
            <div className="flex border-b border-brand-beige/20 pb-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-transparent border-none outline-none text-sm w-full placeholder:text-brand-beige/30"
              />
              <button className="text-brand-sage hover:text-brand-beige transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-beige/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] tracking-widest uppercase text-brand-beige/40">
            © 2023 Lireason 官方。保留所有权利。
          </p>
          <div className="flex gap-8 text-[10px] tracking-widest uppercase text-brand-beige/40">
            <a href="#" className="hover:text-brand-beige">隐私政策</a>
            <a href="#" className="hover:text-brand-beige">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

/**
 * Main App Component
 * 
 * Assembles the entire Lireason official website.
 */
const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 1000);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen selection:bg-brand-sage/30 selection:text-brand-slate">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <FabricTech />
        <ProductShowcase />
        <BrandStory />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-4 bg-brand-slate text-white rounded-full shadow-2xl hover:bg-brand-sage transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Global Nature-inspired Texture Overlay (Subtle) */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
    </div>
  );
};

export default App;