import { motion } from 'framer-motion';
import { Plus, ArrowLeft, Target, Compass, MessageSquare, ShieldAlert, Cpu, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function SprintsEvolucion() {
  const sprints = [
    {
      num: "01",
      icon: <Cpu className="text-optical" size={28} />,
      tag: "IA & EFICIENCIA",
      title: "Sprint IA: Automatización e Ingesta",
      problem: "El talento clave pasa el 30% de su tiempo haciendo trabajo administrativo robótico (clasificar leads manuales, redactar respuestas repetitivas o consolidar planillas).",
      install: [
        "Mapeo de flujos operativos con mayor potencial de automatización.",
        "Integración de APIs y modelos de IA locales/nube para procesamiento automático de emails, facturas o leads.",
        "Instalación de paneles de control sencillos para auditar las tareas autónomas de la IA."
      ],
      roi: "Devolución de hasta 10 horas semanales por empleado involucrado."
    },
    {
      num: "02",
      icon: <Target className="text-optical" size={28} />,
      tag: "ALINEACIÓN & CULTURA",
      title: "Sprint OKR: Gobernanza y Alineamiento",
      problem: "Falta de foco en objetivos estratégicos. El director debe estar encima de cada tarea para que las cosas avancen; el equipo no tiene claro el impacto de su trabajo diario.",
      install: [
        "Diseño personalizado de un marco de OKRs (Objectives and Key Results) integrado en tu software habitual.",
        "Capacitación interna y facilitación de rituales semanales de sincronización sin burocracia.",
        "Transición del liderazgo: de control de tareas individuales a gobernanza por resultados explícitos."
      ],
      roi: "100% de alineación estratégica del equipo en 90 días, erradicación del micromanagement."
    },
    {
      num: "03",
      icon: <MessageSquare className="text-optical" size={28} />,
      tag: "COMUNICACIÓN & FOCO",
      title: "Sprint Asíncrono: Adiós Reunionitis",
      problem: "Agendas bloqueadas por llamadas infinitas de coordinación de 30 minutos, falsas urgencias por chat y pérdida de concentración en el trabajo de alto valor.",
      install: [
        "Diagnóstico y auditoría de la agenda del equipo (tiempo perdido en reuniones).",
        "Protocolo formal de comunicación escrita y asíncrona.",
        "Estructuración de herramientas (Notion/Slack) para estatus escritos y tableros compartidos."
      ],
      roi: "Reducción del 50% al 60% en reuniones internas; recuperación de días de foco profundo."
    },
    {
      num: "04",
      icon: <Compass className="text-optical" size={28} />,
      tag: "VENTAS & PREDECIBILIDAD",
      title: "Sprint Pipeline: Estructura Comercial",
      problem: "Falta de visibilidad de ventas futuras, vendedores que registran información de forma inconsistente y prospectos calificados que se pierden por falta de seguimiento.",
      install: [
        "Diseño e implementación de tu pipeline comercial a medida en CRM (HubSpot, Pipedrive, etc.).",
        "Automatización del ingreso y traspaso de leads desde tus canales de captación.",
        "Entrenamiento comercial en gobernanza del CRM y reportes de conversión."
      ],
      roi: "Incremento del 25% en la tasa de cierre y visibilidad en tiempo real de la facturación proyectada."
    }
  ];

  return (
    <>
      {/* NAVIGATION BACK & BREADCRUMB */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-32 pb-8 flex flex-col items-start relative border-x border-grid">
        <Link to="/servicios" className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-lab hover:text-optical transition-colors group mb-4">
          <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
          VOLVER_A_SERVICIOS
        </Link>
        <div className="font-mono text-[10px] text-lab tracking-[0.2em] uppercase">
          Nivel 02 // SPRINTS DE EVOLUCIÓN
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 pb-24 flex flex-col items-start relative border-x border-grid">
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
          <motion.div variants={fadeUp} className="font-mono text-lab text-[10px] uppercase tracking-[0.2em] mb-10 border border-grid px-4 py-2 bg-void/50 backdrop-blur-sm inline-block">
            // INTERVENCIONES QUIRÚRGICAS DE 90 DÍAS
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-[6.5rem] font-medium tracking-tighter leading-[0.9] mb-10 max-w-6xl">
            Módulos tácticos con impacto<br />
            <span className="text-lab">en tu operación y tus márgenes.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-lab max-w-3xl mb-12 font-light leading-snug">
            No necesitas planes eternos de 18 meses. Instalamos soluciones modulares y preestablecidas diseñadas para resolver cuellos de botella específicos, devolviendo el control al C-Level y acelerando el ROI.
          </motion.p>
        </motion.div>
      </section>

      {/* SPRINTS BENTO GRID */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 border-x border-t border-grid relative">
        <Plus className="absolute -top-3 -right-3 text-grid" size={24} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-grid border border-grid">
          {sprints.map((sprint, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="bg-void p-10 flex flex-col justify-between group hover:bg-grid/5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative step number */}
              <div className="absolute top-0 right-0 font-mono text-[9rem] font-bold text-grid/10 select-none pointer-events-none group-hover:text-grid/25 transition-colors duration-500">
                {sprint.num}
              </div>

              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center gap-4 border-b border-grid pb-4">
                  {sprint.icon}
                  <div>
                    <span className="font-mono text-[9px] text-lab uppercase tracking-widest">{sprint.tag}</span>
                    <h3 className="text-xl font-medium tracking-tight text-optical">{sprint.title}</h3>
                  </div>
                </div>

                {/* Problem definition */}
                <div className="border border-grid bg-void/50 p-6 flex flex-col gap-2">
                  <span className="font-mono text-[9px] text-lab uppercase tracking-widest flex items-center gap-2">
                    <ShieldAlert size={12} className="text-lab" /> PROBLEMA_A_RESOLVER
                  </span>
                  <p className="text-sm text-lab font-light leading-relaxed">{sprint.problem}</p>
                </div>

                {/* Scope list */}
                <div className="flex flex-col gap-3 my-4">
                  <span className="font-mono text-[9px] text-lab uppercase tracking-widest">// QUÉ_INSTALAMOS:</span>
                  <ul className="space-y-2">
                    {sprint.install.map((item, idx) => (
                      <li key={idx} className="text-xs text-lab font-light leading-relaxed flex items-start gap-3">
                        <span className="text-optical shrink-0 mt-1">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ROI box */}
              <div className="relative z-10 mt-6 pt-6 border-t border-grid flex items-center gap-3">
                <CheckCircle size={16} className="text-optical shrink-0" />
                <p className="text-xs font-mono uppercase tracking-widest text-optical">
                  ROI: <span className="text-lab normal-case font-geist font-light">{sprint.roi}</span>
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 border-x border-t border-grid relative flex justify-center text-center">
        <Plus className="absolute -top-3 -left-3 text-grid" size={24} />
        
        <div className="max-w-xl flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">
            ¿Listo para acelerar tu ROI operativo?
          </h2>
          <p className="text-sm text-lab font-light leading-relaxed mb-10">
            Hagamos un Future Audit rápido de 45 minutos para mapear cuál de estos sprints se adapta a tu cuello de botella estratégico principal.
          </p>
          <Link to="/future-audit" className="bg-optical text-void px-10 py-5 font-mono text-xs uppercase tracking-widest font-bold hover:bg-volt transition-colors">
            INICIAR_FUTURE_AUDIT →
          </Link>
        </div>
      </section>
    </>
  );
}
