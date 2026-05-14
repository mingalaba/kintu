import { Plus, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
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

const Nosotros = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-40 pb-32 flex flex-col items-start relative border-x border-grid">
        <Plus className="absolute -top-3 -left-3 text-grid" size={24} />
        <Plus className="absolute -top-3 -right-3 text-grid" size={24} />

        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="w-full relative z-10"
        >
          <motion.div variants={fadeUp} className="font-mono text-lab text-[10px] uppercase tracking-[0.2em] mb-12 border border-grid px-4 py-2 bg-void/50 backdrop-blur-sm inline-block">
            // EL MANIFIESTO FUNDACIONAL
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-[7.5rem] font-medium tracking-tighter leading-[0.85] mb-10 max-w-6xl">
            Kintu es un laboratorio.<br />
            <span className="text-lab">No una agencia.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-lab max-w-3xl mb-16 font-light leading-snug">
            Nacimos porque el mercado está saturado de consultoras que dejan PDFs teóricos y agencias que venden bots sin contexto de negocio. Nosotros instalamos autonomía.
          </motion.p>

          <motion.button variants={fadeUp} className="border border-optical text-optical px-8 py-4 font-mono uppercase text-xs tracking-[0.2em] hover:bg-optical hover:text-void transition-all duration-300 flex items-center gap-4">
            LEER_EL_MANIFIESTO <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </section>

      {/* ORIGEN & PARADIGMA */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 border-x border-t border-grid relative overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <Compass size={32} className="text-optical mb-4" />
            <h2 className="text-3xl font-medium tracking-tight">Construido desde el dolor<br/>de la operación real.</h2>
            <p className="text-lab font-light leading-relaxed">
              Kintu no es teoría académica ni management de escritorio. Es el resultado de años operando y escalando equipos, viendo de primera mano cómo fundadores brillantes se convierten en prisioneros de sus propias empresas por no tener los sistemas arquitectónicos correctos instalados.
            </p>
          </motion.div>
          
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <ShieldCheck size={32} className="text-optical mb-4" />
            <h2 className="text-3xl font-medium tracking-tight">Dirigimos la construcción.<br/>No pegamos los ladrillos.</h2>
            <p className="text-lab font-light leading-relaxed">
              En Kintu asumimos el rol del Arquitecto. Diseñamos el blueprint de tu organización y luego orquestamos a un ecosistema de expertos para implementarlo. Esto garantiza que cada pieza de código y cada herramienta sirva al modelo de negocio, y no al revés.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* MANIFIESTO HIGHLIGHT */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 border-x border-t border-b border-grid relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <motion.div variants={fadeUp} className="font-mono text-lab text-xs border border-grid px-4 py-2 uppercase tracking-widest mb-10">
            [ EN QUÉ CREEMOS ]
          </motion.div>
          
          <motion.ul variants={fadeUp} className="text-2xl md:text-4xl font-medium tracking-tight text-optical space-y-8 mb-16 text-left w-full">
            <li className="flex gap-6 items-start">
              <span className="text-grid select-none">01</span>
              <span>Automatizar lo predecible para humanizar lo excepcional.</span>
            </li>
            <li className="flex gap-6 items-start">
              <span className="text-grid select-none">02</span>
              <span>Los procesos protegen la creatividad, no la limitan.</span>
            </li>
            <li className="flex gap-6 items-start">
              <span className="text-grid select-none">03</span>
              <span>Competimos por autonomía, no por facturar horas hombre.</span>
            </li>
          </motion.ul>

          <motion.button variants={fadeUp} className="bg-optical text-void px-10 py-5 font-mono uppercase text-xs tracking-[0.2em] hover:bg-volt transition-all duration-300">
            ¿COMPARTES ESTA VISIÓN? AGENDAR AUDIT
          </motion.button>
        </motion.div>
      </section>
    </>
  );
};

export default Nosotros;
