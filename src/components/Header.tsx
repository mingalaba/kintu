import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-7xl mx-auto border-b border-grid px-6 py-4 flex justify-between items-center bg-void/80 backdrop-blur-xl sticky top-0 z-50"
    >
      <div className="flex items-center gap-8">
        <Link to="/" className="font-mono text-xl tracking-tighter flex items-center gap-2 group cursor-pointer">
          <span className="text-lab group-hover:text-optical transition-colors">[</span>
          KINTU 
          <span className="text-lab group-hover:text-optical transition-colors">]</span>
          <span className="w-2 h-4 bg-optical animate-pulse ml-1"></span>
        </Link>
        <nav className="hidden md:flex gap-8 text-xs font-mono text-lab tracking-widest uppercase">
          <Link to="/sistema-operativo" className="hover:text-optical transition-colors">Sistema Operativo</Link>
          <Link to="/servicios" className="hover:text-optical transition-colors">Servicios</Link>
          <Link to="/laboratorio" className="hover:text-optical transition-colors">Laboratorio</Link>
          <Link to="/nosotros" className="hover:text-optical transition-colors">Nosotros</Link>
        </nav>
      </div>
      <button className="border border-grid hover:border-optical/50 hover:bg-optical/5 transition-all duration-300 px-5 py-2.5 font-mono text-xs uppercase tracking-widest flex items-center gap-3 group">
        FUTURE_AUDIT 
        <ArrowRight size={14} className="text-lab group-hover:text-optical group-hover:translate-x-1 transition-all" />
      </button>
    </motion.header>
  );
};

export default Header;
