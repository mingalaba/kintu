import React from 'react';
import { Terminal, Plus, Activity, GitBranch, Cpu, Network } from 'lucide-react';
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

const SistemaOperativo = () => {
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
            // ARQUITECTURA CORE
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-[7.5rem] font-medium tracking-tighter leading-[0.85] mb-10 max-w-6xl">
            Tu empresa es un sistema.<br />
            <span className="text-lab">Diseñémoslo para que escale solo.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-lab max-w-3xl mb-16 font-light leading-snug">
            No necesitas otra herramienta de software. Necesitas una arquitectura donde la tecnología, los procesos y las personas operen en perfecta sincronía.
          </motion.p>
        </motion.div>
      </section>

      {/* DIAGNOSTICO ESTRUCTURAL */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 border-x border-t border-grid relative overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row justify-between items-start gap-16"
        >
          <div className="md:w-1/2">
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-8">
              El crecimiento rompe<br/>los sistemas informales.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-lab font-light leading-relaxed mb-8">
              Lo que te llevó a tener 10 empleados, rompe la empresa cuando llegas a 40. Si el conocimiento está en cabezas individuales y la coordinación se hace por WhatsApp, no tienes un sistema operativo: tienes un grupo de personas improvisando todos los días.
            </motion.p>
          </div>
          <div className="md:w-1/2 w-full aspect-square md:aspect-auto md:h-96 bg-grid border border-grid relative flex items-center justify-center group overflow-hidden">
            {/* Visual transition from chaos to order */}
            <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-1000">
              <Network size={120} className="text-lab/20 animate-spin-slow" />
              <Activity size={80} className="text-lab/30 absolute" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="w-64 h-64 border border-optical/20 grid grid-cols-3 grid-rows-3">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="border border-optical/10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-optical/40 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-lab bg-void/80 px-2 py-1">Caos vs Grilla</div>
          </div>
        </motion.div>
      </section>

      {/* LAS 3 CAPAS */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 border-x border-t border-grid relative">
        <Plus className="absolute -top-3 -right-3 text-grid" size={24} />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Tres capas.<br/><span className="text-lab">Una única infraestructura.</span></motion.h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-grid border border-grid"
        >
          {[
            { 
              icon: <Terminal size={32} className="mb-8 text-optical" />,
              title: "Músculo", 
              subtitle: "Infraestructura Táctica",
              desc: "Automatizamos lo predecible. Extraemos las tareas repetitivas de las manos de tu talento para que puedan hacer el trabajo que realmente importa. Menos clics, cero fricción.",
              link: "Explorar Músculo →"
            },
            { 
              icon: <GitBranch size={32} className="mb-8 text-optical" />,
              title: "Cerebro", 
              subtitle: "Diseño Organizacional",
              desc: "Estructuramos cómo se toman decisiones. Roles explícitos, responsabilidades medibles y flujos de trabajo donde no necesitas estar presente para que las cosas avancen.",
              link: "Explorar Cerebro →"
            },
            { 
              icon: <Cpu size={32} className="mb-8 text-optical" />,
              title: "Alma", 
              subtitle: "Evolución Cultural",
              desc: "Instalamos el propósito en la operación diaria. Transformamos grupos de trabajo estresados en equipos autónomos (Teal) que comparten una visión de futuro.",
              link: "Explorar Alma →"
            }
          ].map((layer, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-void p-12 flex flex-col group hover:bg-optical hover:text-void transition-colors duration-500 cursor-pointer">
              <div className="group-hover:text-void transition-colors">{layer.icon}</div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] mb-2">{layer.title}</h3>
              <h4 className="text-2xl font-medium tracking-tight mb-6">{layer.subtitle}</h4>
              <p className="text-lab group-hover:text-void/80 leading-relaxed font-light mb-12 flex-grow">{layer.desc}</p>
              <div className="font-mono text-xs uppercase tracking-widest pt-6 border-t border-grid group-hover:border-void/20">
                {layer.link}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA FINAL DE SECCIÓN */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 border-x border-t border-grid relative flex justify-center text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-2xl flex flex-col items-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
            ¿Por qué capa deberías empezar?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-lab font-light leading-relaxed mb-12">
            El error más común es automatizar el desorden. En 45 minutos, mapeamos tu operación y te decimos exactamente dónde está tu cuello de botella real.
          </motion.p>
          <motion.button variants={fadeUp} className="bg-void border border-optical text-optical px-10 py-5 font-mono uppercase text-xs tracking-[0.2em] hover:bg-optical hover:text-void transition-all duration-300">
            INICIAR_FUTURE_AUDIT
          </motion.button>
        </motion.div>
      </section>
    </>
  );
};

export default SistemaOperativo;
