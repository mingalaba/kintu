import { Terminal, Crosshair, Box, Layers, Plus, Check, X } from 'lucide-react';
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

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-40 pb-32 flex flex-col items-start relative border-x border-grid">
        <Plus className="absolute -top-3 -left-3 text-grid" size={24} />
        <Plus className="absolute -top-3 -right-3 text-grid" size={24} />
        <Plus className="absolute -bottom-3 -left-3 text-grid" size={24} />
        <Plus className="absolute -bottom-3 -right-3 text-grid" size={24} />

        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="w-full relative z-10"
        >
          <motion.div variants={fadeUp} className="font-mono text-lab text-[10px] uppercase tracking-[0.2em] mb-12 border border-grid px-4 py-2 bg-void/50 backdrop-blur-sm inline-block">
            // INICIATIVA DE TRANSFORMACIÓN
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-[7.5rem] font-medium tracking-tighter leading-[0.85] mb-10 max-w-6xl">
            Tu empresa escala.<br />
            <span className="text-lab">Tu operación colapsa.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-lab max-w-3xl mb-16 font-light leading-snug">
            Reemplazamos el caos corporativo con infraestructura táctica. Instalamos el Sistema Operativo para que tu empresa opere con autonomía real y recuperes tu tiempo estratégico.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center">
            <button className="bg-optical text-void px-8 py-5 font-mono uppercase text-xs tracking-[0.2em] hover:bg-volt hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-4 group w-full sm:w-auto shadow-[0_0_40px_rgba(250,250,250,0.1)] hover:shadow-[0_0_60px_rgba(250,250,250,0.2)]">
              INICIAR_FUTURE_AUDIT 
              <Terminal size={16} className="group-hover:rotate-12 transition-transform" />
            </button>
            <div className="flex items-center gap-4 text-lab font-mono text-[10px] border border-grid px-6 py-4 tracking-widest uppercase bg-void/50 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-optical rounded-full animate-ping"></span>
              <div>Diagnóstico clínico.<br/>45 min. Sin fricción.</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* THE DIAGNOSIS */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 border-x border-b border-grid relative overflow-hidden">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
            Estás financiando la<br/>ineficiencia con tu tiempo.
          </motion.h2>
          <motion.div variants={fadeUp} className="font-mono text-lab text-xs border border-grid p-4 tracking-widest uppercase bg-void/50">
            [ DIAGNÓSTICO_CLÍNICO ]
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-grid border border-grid"
        >
          {/* Card 1 */}
          <motion.div variants={fadeUp} className="bg-void p-12 flex flex-col gap-8 group hover:bg-grid/10 transition-colors duration-500">
            <div className="p-4 border border-grid inline-flex self-start group-hover:border-optical/30 transition-colors duration-500">
              <Crosshair className="text-lab group-hover:text-optical transition-colors duration-500" size={24} />
            </div>
            <div>
              <h3 className="font-mono text-xs text-optical mb-5 uppercase tracking-[0.2em]">El Líder Bottleneck</h3>
              <p className="text-lab text-sm leading-relaxed font-light">Eres el cuello de botella. Cada decisión clave pasa por ti o por un puñado de managers. Un fin de semana desconectado o una ausencia clave equivale a una semana de incendios.</p>
            </div>
          </motion.div>
          {/* Card 2 */}
          <motion.div variants={fadeUp} className="bg-void p-12 flex flex-col gap-8 group hover:bg-grid/10 transition-colors duration-500">
            <div className="p-4 border border-grid inline-flex self-start group-hover:border-optical/30 transition-colors duration-500">
              <Box className="text-lab group-hover:text-optical transition-colors duration-500" size={24} />
            </div>
            <div>
              <h3 className="font-mono text-xs text-optical mb-5 uppercase tracking-[0.2em]">Falsa Tecnología</h3>
              <p className="text-lab text-sm leading-relaxed font-light">Inversión en licencias de ERP, CRM o gestores de proyectos (Slack, Asana) que los equipos terminan rechazando o subutilizando, volviendo a coordinar la operación diaria por WhatsApp y planillas aisladas.</p>
            </div>
          </motion.div>
          {/* Card 3 */}
          <motion.div variants={fadeUp} className="bg-void p-12 flex flex-col gap-8 group hover:bg-grid/10 transition-colors duration-500">
            <div className="p-4 border border-grid inline-flex self-start group-hover:border-optical/30 transition-colors duration-500">
              <Layers className="text-lab group-hover:text-optical transition-colors duration-500" size={24} />
            </div>
            <div>
              <h3 className="font-mono text-xs text-optical mb-5 uppercase tracking-[0.2em]">Fricción Operativa</h3>
              <p className="text-lab text-sm leading-relaxed font-light">Contratas más gente, pero los resultados no se multiplican. Solo generas más reuniones de alineamiento, burocracia y dependencia en el día a día.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* THE SOLUTION */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 border-x border-b border-grid relative" id="os">
        <Plus className="absolute -top-3 -right-3 text-grid" size={24} />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mb-24"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-10">
            No vendemos herramientas sueltas.<br/>
            <span className="text-lab">Instalamos tu Sistema Operativo.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-lab font-light leading-relaxed max-w-3xl">
            Las consultoras dejan PDFs teóricos. Las agencias implementan bots aislados. Nosotros reconstruimos la infraestructura de tu empresa en 3 capas tácticas para que la operación corra sola.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-px border border-grid bg-grid"
        >
          {[
            { tag: "MÚSCULO", title: "Eficiencia Extrema", desc: "Automatizamos el trabajo robótico y estandarizamos la infraestructura. Desde integraciones complejas de ERP/CRM y migraciones de datos legacy hasta la inyección de modelos de IA, devolviendo ancho de banda neto a tu equipo." },
            { tag: "CEREBRO", title: "Autonomía Táctica", desc: "Diseñamos roles milimétricos y asincronía. Reemplazamos la \"reunionitis\" por un sistema donde el equipo toma decisiones y ejecuta de forma autónoma sin tu supervisión constante." },
            { tag: "ALMA", title: "Propósito y Cultura", desc: "Instalamos los raíles para la autogestión real. Una organización ágil donde el equipo toma ownership de los objetivos y el talento clave quiere quedarse." }
          ].map((layer, idx) => (
            <motion.div key={idx} variants={fadeUp} className="flex flex-col md:flex-row bg-void group hover:bg-optical hover:text-void transition-all duration-500 cursor-default">
              <div className="p-10 md:w-1/3 border-b md:border-b-0 md:border-r border-grid group-hover:border-void/10 flex items-center transition-colors">
                <span className="font-mono text-sm tracking-[0.2em] text-lab group-hover:text-void/60 transition-colors">[ {layer.tag} ]</span>
              </div>
              <div className="p-10 md:w-2/3 flex flex-col justify-center">
                <h4 className="text-2xl mb-4 font-medium tracking-tight">{layer.title}</h4>
                <p className="text-lab group-hover:text-void/80 transition-colors leading-relaxed font-light">{layer.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* THE PROCESS */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 border-x border-b border-grid">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Cómo instalamos el OS.</motion.h2>
          <motion.p variants={fadeUp} className="text-lab font-mono text-xs tracking-widest uppercase border border-grid inline-block px-4 py-2 bg-void/50">
            [ SIN DETENER TU EMPRESA ]
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-4 gap-px bg-grid border border-grid"
        >
          {[
            { num: "01", title: "Audit Clínico", desc: "En 45 minutos mapeamos dónde pierdes liquidez y horas-hombre hoy." },
            { num: "02", title: "Blueprint Táctico", desc: "Diseñamos la arquitectura exacta para destrabar tu operación." },
            { num: "03", title: "Instalación In-House", desc: "Nuestro hub despliega squads técnicos y de procesos a demanda para ejecutar." },
            { num: "04", title: "Autogestión Real", desc: "Nos retiramos cuando el sistema opera solo. Tu autonomía es el objetivo." }
          ].map((step, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-void p-10 flex flex-col gap-12 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-px bg-optical origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out z-10" />
              
              <div className="font-mono text-6xl text-grid font-bold absolute -top-2 -right-4 select-none group-hover:text-grid/80 transition-colors">{step.num}</div>
              <div className="font-mono text-[10px] tracking-widest text-lab uppercase">{step.num} // FASE</div>
              <div className="z-10 mt-auto">
                <h3 className="text-xl mb-4 font-medium">{step.title}</h3>
                <p className="text-sm text-lab leading-relaxed font-light">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* THE KINTU GAP (Nosotros vs Mercado) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 border-x border-b border-grid relative">
        <Plus className="absolute -top-3 -right-3 text-grid" size={24} />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-medium tracking-tight mb-6">El mercado te vende parches.<br/><span className="text-lab">Nosotros, infraestructura.</span></motion.h2>
          <motion.p variants={fadeUp} className="text-lab font-mono text-xs tracking-widest uppercase border border-grid inline-block px-4 py-2 bg-void/50">
            [ KINTU VS MERCADO ]
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="w-full overflow-x-auto border border-grid"
        >
          <table className="w-full text-left min-w-[800px]">
            <thead>
              <tr className="border-b border-grid bg-void/50">
                <th className="p-6 font-mono text-xs uppercase tracking-widest text-lab w-1/4 border-r border-grid">Característica</th>
                <th className="p-6 font-mono text-xs uppercase tracking-widest text-lab w-1/4 border-r border-grid">Consultoras Tradicionales</th>
                <th className="p-6 font-mono text-xs uppercase tracking-widest text-lab w-1/4 border-r border-grid">Software Factories / Dev Shops</th>
                <th className="p-6 font-mono text-xs uppercase tracking-widest text-optical bg-optical/5 w-1/4">Kintu Labs</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Entregable", cons: "Un informe de recomendaciones en PDF", agen: "Un software a medida según un pliego rígido", kin: "Un Sistema Operativo funcionando y adoptado por el equipo" },
                { feature: "Rol asumido", cons: "Te dicen qué hacer y se van", agen: "Programan a ciegas sin entender el proceso de negocio", kin: "Hub de Evolución: Diseñamos la arquitectura e implementamos llave en mano" },
                { feature: "Impacto en equipo", cons: "Charlas de liderazgo abstractas", agen: "Nulo. Crean sistemas complejos que los humanos acaban rechazando", kin: "Alta. Co-diseñamos el software junto con la adopción cultural del equipo" },
                { feature: "Criterio de salida", cons: "Al terminar las horas de consultoría", agen: "Al entregar las líneas de código contratadas", kin: "Cuando el sistema y la empresa operan con autonomía real" }
              ].map((row, i) => (
                <motion.tr key={i} variants={fadeUp} className="border-b last:border-b-0 border-grid bg-void hover:bg-grid/10 transition-colors">
                  <td className="p-6 text-sm text-optical border-r border-grid font-medium">{row.feature}</td>
                  <td className="p-6 border-r border-grid">
                    <div className="flex gap-3 items-start text-sm text-lab font-light">
                      <X size={16} className="shrink-0 mt-0.5 text-grid"/> <span>{row.cons}</span>
                    </div>
                  </td>
                  <td className="p-6 border-r border-grid">
                    <div className="flex gap-3 items-start text-sm text-lab font-light">
                      <X size={16} className="shrink-0 mt-0.5 text-grid"/> <span>{row.agen}</span>
                    </div>
                  </td>
                  <td className="p-6 bg-optical/5">
                    <div className="flex gap-3 items-start text-sm text-optical">
                      <Check size={16} className="shrink-0 mt-0.5 text-optical"/> <span>{row.kin}</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* PRUEBA SOCIAL */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 border-x border-b border-grid relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-medium tracking-tight">
            Empresas que instalaron<br/>el OS Kintu.
          </motion.h2>
          <motion.div variants={fadeUp} className="font-mono text-lab text-xs border border-grid p-4 tracking-widest uppercase bg-void/50">
            [ CASOS_DE_ÉXITO ]
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-grid border border-grid"
        >
          {/* Testimonial 1 */}
          <motion.div variants={fadeUp} className="bg-void p-12 flex flex-col gap-10 group hover:bg-grid/10 transition-colors duration-500">
            <div className="font-mono text-4xl text-grid opacity-50">"</div>
            <p className="text-xl md:text-2xl leading-relaxed font-light text-optical">
              En 6 semanas dejé de ser el único que sabía cómo corría la operación comercial. El equipo tomó ownership de verdad y recuperé mis fines de semana.
            </p>
            <div className="mt-auto border-t border-grid pt-8">
              <p className="font-medium text-optical uppercase tracking-wide text-sm">Nicolás M.</p>
              <p className="text-lab text-sm">CEO & Fundador — Empresa de Logística</p>
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div variants={fadeUp} className="bg-void p-12 flex flex-col gap-10 group hover:bg-grid/10 transition-colors duration-500">
            <div className="font-mono text-4xl text-grid opacity-50">"</div>
            <p className="text-xl md:text-2xl leading-relaxed font-light text-optical">
              Contratamos la capa de Músculo y en 30 días automatizamos 40 horas de data entry semanal. Ese margen nos permitió financiar el rediseño del Cerebro sin inversión extra.
            </p>
            <div className="mt-auto border-t border-grid pt-8">
              <p className="font-medium text-optical uppercase tracking-wide text-sm">Sofía L.</p>
              <p className="text-lab text-sm">Directora de Operaciones — Agencia Digital</p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
