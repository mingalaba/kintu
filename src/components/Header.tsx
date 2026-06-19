import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1] as any
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as any
      }
    }
  };

  const navLinks = [
    { to: "/sistema-operativo", label: "Sistema Operativo" },
    { to: "/servicios", label: "Servicios" },
    { to: "/laboratorio", label: "Laboratorio" },
    { to: "/nosotros", label: "Nosotros" },
    { to: "/contacto", label: "Contacto" }
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" as any }}
        className="w-full max-w-7xl mx-auto border-b border-grid px-6 py-4 flex justify-between items-center bg-void/80 backdrop-blur-xl sticky top-0 z-50"
      >
        <div className="flex items-center gap-8">
          <Link to="/" className="font-mono text-xl tracking-tighter flex items-center gap-2 group cursor-pointer" onClick={closeMenu}>
            <span className="text-lab group-hover:text-optical transition-colors">[</span>
            KINTU 
            <span className="text-lab group-hover:text-optical transition-colors">]</span>
            <span className="w-2 h-4 bg-optical animate-pulse ml-1"></span>
          </Link>
          <nav className="hidden md:flex gap-8 text-xs font-mono text-lab tracking-widest uppercase">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-optical transition-colors">{link.label}</Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/future-audit" className="hidden sm:flex border border-grid hover:border-optical/50 hover:bg-optical/5 transition-all duration-300 px-5 py-2.5 font-mono text-xs uppercase tracking-widest items-center gap-3 group" onClick={closeMenu}>
            FUTURE_AUDIT 
            <ArrowRight size={14} className="text-lab group-hover:text-optical group-hover:translate-x-1 transition-all" />
          </Link>

          {/* Toggle Button for Mobile */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-lab hover:text-optical transition-colors p-2 z-50 relative"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-void/98 backdrop-blur-2xl md:hidden pt-28 px-6 flex flex-col justify-between border-b border-grid"
          >
            {/* Grid Line Decoration for techy aesthetic */}
            <div className="absolute inset-x-0 top-0 h-full border-x border-grid max-w-7xl mx-auto pointer-events-none" />

            <nav className="flex flex-col gap-6 text-2xl font-mono tracking-wider uppercase relative z-10 mt-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.to}
                >
                  <Link 
                    to={link.to} 
                    onClick={closeMenu} 
                    className="hover:text-optical transition-colors block py-3 border-b border-grid/30 text-lab"
                  >
                    <span className="text-[10px] text-optical/40 mr-4 font-mono">0{idx + 1} //</span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pb-12 w-full relative z-10"
            >
              <Link 
                to="/future-audit" 
                onClick={closeMenu}
                className="w-full text-center border border-optical text-optical hover:bg-optical hover:text-void transition-all duration-300 py-5 font-mono text-sm uppercase tracking-widest flex items-center justify-center gap-3"
              >
                INICIAR_FUTURE_AUDIT 
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
