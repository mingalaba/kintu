import { Plus, Mail, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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

const Contacto = () => {
  return (
    <>
      <section className="w-full max-w-7xl mx-auto px-6 pt-40 pb-32 flex flex-col items-start relative border-x border-grid min-h-[80vh]">
        <Plus className="absolute -top-3 -left-3 text-grid" size={24} />
        <Plus className="absolute -top-3 -right-3 text-grid" size={24} />

        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20"
        >
          <div>
            <motion.div variants={fadeUp} className="font-mono text-lab text-[10px] uppercase tracking-[0.2em] mb-12 border border-grid px-4 py-2 bg-void/50 backdrop-blur-sm inline-block">
              // INICIAR PROTOCOLO
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.85] mb-10">
              Contacto.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl text-lab font-light leading-snug mb-16">
              ¿Listo para auditar tu operación y recuperar tus márgenes? Hablemos de arquitectura organizacional.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-8 font-mono text-xs uppercase tracking-widest text-lab">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-grid flex items-center justify-center bg-grid/5">
                  <Mail size={16} className="text-optical" />
                </div>
                <div>
                  <span className="block text-[9px] text-lab/50 mb-1">EMAIL DIRECTO</span>
                  <a href="mailto:hola@kintulab.com" className="hover:text-optical transition-colors text-white">hola@kintulab.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-grid flex items-center justify-center bg-grid/5">
                  <MapPin size={16} className="text-optical" />
                </div>
                <div>
                  <span className="block text-[9px] text-lab/50 mb-1">HQ / OFICINAS</span>
                  <span className="text-white">Olivos, Buenos Aires</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="bg-void border border-grid p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-optical/5 blur-3xl rounded-full pointer-events-none" />
            
            <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-lab">Identificación [Nombre]</label>
                <input 
                  type="text" 
                  className="bg-grid/5 border border-grid text-white px-4 py-3 outline-none focus:border-optical/50 transition-colors font-mono text-sm"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-lab">Canal de Respuesta [Email]</label>
                <input 
                  type="email" 
                  className="bg-grid/5 border border-grid text-white px-4 py-3 outline-none focus:border-optical/50 transition-colors font-mono text-sm"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-lab">Diagnóstico Preliminar [Mensaje]</label>
                <textarea 
                  rows={4}
                  className="bg-grid/5 border border-grid text-white px-4 py-3 outline-none focus:border-optical/50 transition-colors font-mono text-sm resize-none"
                  required
                />
              </div>

              <button 
                type="submit"
                className="mt-4 bg-optical text-void py-4 px-6 font-mono text-xs uppercase tracking-widest font-bold hover:bg-volt transition-colors flex items-center justify-center gap-2 group/btn"
              >
                ENVIAR_TRANSMISIÓN
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Contacto;
