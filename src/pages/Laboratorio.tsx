import React from 'react';
import { Plus, Terminal, Clock, Filter, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const Laboratorio = () => {
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
            // INTELIGENCIA OPERATIVA
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-[7.5rem] font-medium tracking-tighter leading-[0.85] mb-10 max-w-6xl">
            El Laboratorio.
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-lab max-w-3xl font-light leading-snug">
            Apuntes, tesis y diagnósticos clínicos sobre el futuro del trabajo y la eficiencia operativa.
          </motion.p>
        </motion.div>
      </section>

      {/* FILTROS (Jobs to be Done) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-8 border-x border-t border-grid relative flex flex-wrap gap-4 items-center">
        <Filter size={16} className="text-lab mr-2" />
        <span className="font-mono text-xs uppercase tracking-widest text-lab">SÍNTOMAS:</span>
        <button className="border border-grid hover:border-optical/50 text-lab hover:text-optical bg-void px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors">
          [ Eliminar Micromanagement ]
        </button>
        <button className="border border-grid hover:border-optical/50 text-lab hover:text-optical bg-void px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors">
          [ Automatizar Operaciones ]
        </button>
        <button className="border border-grid hover:border-optical/50 text-lab hover:text-optical bg-void px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors">
          [ Diseñar Equipos Autónomos ]
        </button>
      </section>

      {/* FEATURED POST */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 border-x border-t border-grid relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-grid p-px group cursor-pointer"
        >
          <div className="bg-void p-12 md:p-16 flex flex-col md:flex-row gap-12 items-start justify-between group-hover:bg-grid/5 transition-colors duration-500">
            <div className="md:w-2/3 flex flex-col items-start">
              <div className="font-mono text-[10px] text-optical uppercase tracking-widest bg-optical/10 px-3 py-1 mb-8">
                CASO DE ESTUDIO
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-6 group-hover:text-optical text-white transition-colors">
                El test de los 10 minutos: ¿tu empresa puede sobrevivir si apagás el celular hoy?
              </h2>
              <p className="text-xl text-lab font-light leading-relaxed mb-8">
                Por qué el 90% de los CEOs fallan esta prueba, y cuál es el sistema operativo exacto y la infraestructura necesaria para pasarla sin que la operación colapse.
              </p>
              <div className="flex items-center gap-4 text-optical font-mono text-xs uppercase tracking-widest">
                LEER_REPORTE <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
            <div className="md:w-1/3 flex flex-col gap-4 w-full">
              <div className="aspect-video bg-grid/30 border border-grid flex items-center justify-center">
                <Terminal size={48} className="text-lab/20" />
              </div>
              <div className="flex justify-between font-mono text-[10px] text-lab tracking-widest">
                <span>TIEMPO: 8 MIN</span>
                <span>COMPLEJIDAD: ALTA</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* GRID DE ARTICULOS */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 border-x border-t border-grid relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-grid border border-grid"
        >
          {[
            {
              tag: "DISEÑO ORG",
              title: "OKRs vs. Sociocracia: ¿Cuándo usar cada sistema?",
              time: "6 MIN"
            },
            {
              tag: "MÚSCULO TÁCTICO",
              title: "El costo invisible de coordinar la operación por WhatsApp.",
              time: "5 MIN"
            },
            {
              tag: "SISTEMAS",
              title: "Por qué automatizar el desorden solo acelera el caos.",
              time: "7 MIN"
            }
          ].map((post, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-void p-10 flex flex-col group hover:bg-grid/10 transition-colors duration-500 cursor-pointer">
              <div className="font-mono text-[10px] text-lab uppercase tracking-widest mb-6 border border-grid px-2 py-1 self-start">
                {post.tag}
              </div>
              <h3 className="text-2xl font-medium tracking-tight mb-8 leading-snug group-hover:text-optical transition-colors">
                {post.title}
              </h3>
              <div className="mt-auto pt-6 border-t border-grid flex justify-between items-center text-lab font-mono text-[10px] uppercase tracking-widest group-hover:text-optical transition-colors">
                <span className="flex items-center gap-2"><Clock size={12}/> {post.time}</span>
                <span>LEER <ArrowRight size={12} className="inline group-hover:translate-x-1 transition-transform" /></span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA INTERMEDIO (Suscripción) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 border-x border-t border-grid relative">
        <Plus className="absolute -top-3 -right-3 text-grid" size={24} />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center flex flex-col items-center bg-void/50 p-12 border border-grid"
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Recibí nuestra inteligencia operativa.</h2>
          <p className="text-lab font-light leading-relaxed mb-10">
            Un correo mensual. Cero humo motivacional. Solo tácticas de arquitectura organizacional, automatización dura y diseño de sistemas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <input 
              type="email" 
              placeholder="[TU CORREO CEO]" 
              className="bg-void border border-grid text-optical font-mono text-sm px-6 py-4 outline-none focus:border-optical/50 transition-colors w-full"
            />
            <button className="bg-optical text-void font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-volt transition-colors shrink-0">
              SUSCRIBIRME
            </button>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Laboratorio;
