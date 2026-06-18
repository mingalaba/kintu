import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const Footer = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-6 py-40 border-x border-grid relative flex flex-col items-center text-center overflow-hidden mt-auto">
      <Plus className="absolute -top-3 -left-3 text-grid" size={24} />
      <Plus className="absolute -top-3 -right-3 text-grid" size={24} />
      
      {/* Glow effect at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-optical/5 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-medium tracking-tighter leading-tight mb-10">
          Compiten sistemas operativos,<br/>
          <span className="text-lab">no empresas.</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="text-lg md:text-xl text-lab max-w-2xl mb-16 font-light leading-relaxed">
          Descubre exactamente dónde está el nudo que ahoga tus márgenes. 45 minutos para auditar tu infraestructura actual y trazar la ruta de escape hacia el New Way of Work.
        </motion.p>
        
        <motion.div variants={fadeUp}>
          <Link to="/future-audit" className="bg-optical text-void px-12 py-6 font-mono uppercase text-sm tracking-[0.2em] hover:bg-volt hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-4 group shadow-[0_0_40px_rgba(250,250,250,0.1)] hover:shadow-[0_0_60px_rgba(250,250,250,0.2)]">
            AGENDAR_FUTURE_AUDIT
          </Link>
        </motion.div>
      </motion.div>
      
      <div className="mt-40 w-full flex flex-col md:flex-row justify-between items-center border-t border-grid pt-10 font-mono text-[10px] tracking-widest uppercase text-lab relative z-10">
        <div>[KINTU_LABS] © 2026</div>
        <div className="flex gap-8 mt-6 md:mt-0">
          <a href="https://www.linkedin.com/company/kintu-lab" target="_blank" rel="noopener noreferrer" className="hover:text-optical transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
