import React from 'react';
import { Plus, ArrowRight, FileText, Zap, Users, Shield } from 'lucide-react';
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

const Servicios = () => {
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
            // METODOLOGÍA & ENTREGABLES
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-[7.5rem] font-medium tracking-tighter leading-[0.85] mb-10 max-w-6xl">
            Ingeniería organizacional,<br />
            <span className="text-lab">de extremo a extremo.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-lab max-w-3xl mb-16 font-light leading-snug">
            Desde el diagnóstico clínico inicial hasta la transformación cultural completa. Instalamos autonomía a través de intervenciones de alto impacto, no vendiendo horas hombre.
          </motion.p>
        </motion.div>
      </section>

      {/* ESCALERA DE VALOR */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 border-x border-t border-grid relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-grid border border-grid"
        >
          {[
            { 
              icon: <FileText className="text-optical mb-6" size={24}/>,
              level: "Nivel 01 / ENTRY", 
              title: "Future Audit", 
              desc: "El diagnóstico clínico. 45 minutos para radiografiar tu organización y exponer dónde pierdes tiempo y liquidez. Sales con un blueprint accionable.",
              action: "Agendar sesión sin costo →"
            },
            { 
              icon: <Zap className="text-optical mb-6" size={24}/>,
              level: "Nivel 02 / CORE", 
              title: "Sprints de Evolución", 
              desc: "Intervenciones quirúrgicas de 90 días. Instalamos una capa táctica de tu OS (ej. automatización comercial o rediseño de roles) y medimos el ROI inmediato.",
              action: "Ver metodología del Sprint →"
            },
            { 
              icon: <Shield className="text-optical mb-6" size={24}/>,
              level: "Nivel 03 / GROWTH", 
              title: "Partner de Evolución", 
              desc: "Retainer estratégico. Nos convertimos en tu equipo de Arquitectura Organizacional in-house. Iteramos y escalamos el OS mientras tu empresa crece.",
              action: "Aplicar para Partnership →"
            },
            { 
              icon: <Users className="text-optical mb-6" size={24}/>,
              level: "Nivel 04 / PREMIUM", 
              title: "Experiencias", 
              desc: "Espacios inmersivos. Retiros y laboratorios presenciales para hackear la mentalidad operativa del CEO y conectarlo con pares en la misma frecuencia.",
              action: "Explorar próximos Labs →"
            }
          ].map((service, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-void p-12 flex flex-col group hover:bg-grid/10 transition-colors duration-500">
              {service.icon}
              <div className="font-mono text-[10px] text-lab uppercase tracking-widest mb-4">{service.level}</div>
              <h3 className="text-3xl font-medium tracking-tight mb-6 text-optical">{service.title}</h3>
              <p className="text-lab leading-relaxed font-light mb-12 flex-grow">{service.desc}</p>
              <button className="self-start font-mono text-xs uppercase tracking-widest text-optical hover:text-white flex items-center gap-2 group-hover:translate-x-2 transition-all">
                {service.action}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 border-x border-t border-grid relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto flex flex-col gap-12"
        >
          <motion.div variants={fadeUp} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Preguntas de Sistema</h2>
          </motion.div>
          
          <motion.div variants={fadeUp} className="border border-grid bg-void p-10 group hover:border-optical/30 transition-colors">
            <h3 className="text-xl font-medium mb-4 text-optical flex items-center gap-4">
              <span className="text-lab font-mono text-sm">01 //</span> ¿Por qué no puedo contratar directamente el Sprint?
            </h3>
            <p className="text-lab font-light leading-relaxed pl-10">
              Porque no recetamos sin diagnosticar. El Future Audit asegura que no gastes recursos, tiempo ni dinero resolviendo el síntoma en lugar de la enfermedad real de la empresa.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="border border-grid bg-void p-10 group hover:border-optical/30 transition-colors">
            <h3 className="text-xl font-medium mb-4 text-optical flex items-center gap-4">
              <span className="text-lab font-mono text-sm">02 //</span> ¿Implementan la tecnología ustedes mismos?
            </h3>
            <p className="text-lab font-light leading-relaxed pl-10">
              Diseñamos la arquitectura y dirigimos la ejecución. Tenemos un ecosistema validado de nodos expertos (desarrolladores, integradores y automatizadores) que operan bajo nuestra estricta dirección.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Servicios;
