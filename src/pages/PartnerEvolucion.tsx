import { motion } from 'framer-motion';
import { Plus, Terminal, GitBranch, Cpu, ArrowLeft, Layers, ShieldCheck, HelpCircle } from 'lucide-react';
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

export default function PartnerEvolucion() {
  return (
    <>
      {/* NAVIGATION BACK & BREADCRUMB */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-32 pb-8 flex flex-col items-start relative border-x border-grid">
        <Link to="/servicios" className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-lab hover:text-optical transition-colors group mb-4">
          <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
          VOLVER_A_SERVICIOS
        </Link>
        <div className="font-mono text-[10px] text-lab tracking-[0.2em] uppercase">
          Nivel 03 // PARTNER DE EVOLUCIÓN
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
            // CÓDIGO SÓLIDO. OPERACIÓN ASÍNCRONA. ADOPCIÓN INMEDIATA.
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-[6.5rem] font-medium tracking-tighter leading-[0.9] mb-10 max-w-6xl">
            Diseño e ingeniería para organizaciones<br />
            <span className="text-lab">que dejaron de ser simples.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-lab max-w-3xl mb-12 font-light leading-snug">
            Cuando la escala rompe los procesos informales, necesitas un socio técnico que entienda de sistemas complejos, asincronía y la conducta de tus equipos. De extremo a extremo, cerebro y músculo integrados en una sola infraestructura operativa.
          </motion.p>
        </motion.div>
      </section>

      {/* THE SERVICES GRID */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 border-x border-t border-grid relative">
        <Plus className="absolute -top-3 -right-3 text-grid" size={24} />
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            Evolución en Tres Dimensiones
          </h2>
          <div className="font-mono text-lab text-xs border border-grid p-4 tracking-widest uppercase bg-void/50">
            [ PORTAFOLIO_DE_INGENIERÍA ]
          </div>
        </div>

        {/* 3 Columns based on Kintu's Músculo, Cerebro, Alma */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-grid border border-grid">
          
          {/* COLUMN 1: MÚSCULO */}
          <div className="bg-void p-10 flex flex-col gap-10">
            <div className="flex items-center gap-4 border-b border-grid pb-6">
              <Terminal className="text-optical" size={28} />
              <div>
                <span className="font-mono text-[9px] text-lab uppercase tracking-widest">Dimensión 01</span>
                <h3 className="text-xl font-medium tracking-tight">Transformación Digital</h3>
              </div>
            </div>

            <div className="flex flex-col gap-10 flex-grow">
              <div className="group">
                <h4 className="font-mono text-xs text-optical mb-3 uppercase tracking-[0.15em] flex items-center justify-between">
                  <span>Digital Products</span>
                  <span className="text-lab font-light text-[10px] group-hover:text-optical transition-colors">// 01</span>
                </h4>
                <p className="text-xs text-lab font-light leading-relaxed mb-2">
                  Del concepto a producción, sin fricción.
                </p>
                <p className="text-sm text-lab leading-relaxed font-light">
                  Concebimos, diseñamos y construimos productos digitales robustos (plataformas web, aplicaciones móviles, portales a medida) orientados a resolver necesidades reales del usuario final e impulsar nuevas líneas de negocio. Nos enfocamos en un time-to-market acelerado sin comprometer la estabilidad técnica.
                </p>
              </div>

              <div className="group">
                <h4 className="font-mono text-xs text-optical mb-3 uppercase tracking-[0.15em] flex items-center justify-between">
                  <span>Enterprise & Modernization</span>
                  <span className="text-lab font-light text-[10px] group-hover:text-optical transition-colors">// 02</span>
                </h4>
                <p className="text-xs text-lab font-light leading-relaxed mb-2">
                  Infraestructura a prueba de escala.
                </p>
                <p className="text-sm text-lab leading-relaxed font-light">
                  Rediseñamos arquitecturas de software complejas para hacerlas modulares y eficientes. Ayudamos a integrar, consolidar y modernizar sistemas corporativos fragmentados e infraestructuras heredadas (legacy), unificando el flujo de información crítica y migrando bases de datos hacia entornos cloud seguros y escalables.
                </p>
              </div>

              <div className="group">
                <h4 className="font-mono text-xs text-optical mb-3 uppercase tracking-[0.15em] flex items-center justify-between">
                  <span>IA Operativa</span>
                  <span className="text-lab font-light text-[10px] group-hover:text-optical transition-colors">// 03</span>
                </h4>
                <p className="text-xs text-lab font-light leading-relaxed mb-2">
                  Inteligencia inyectada en el flujo real.
                </p>
                <p className="text-sm text-lab leading-relaxed font-light">
                  Inyectamos Inteligencia Artificial en el corazón de tus procesos de negocio. Diseñamos e implementamos modelos cognitivos, procesamiento de datos no estructurados y agentes autónomos orientados a generar eficiencia operativa real y automatizar flujos de alto volumen.
                </p>
              </div>
            </div>
          </div>

          {/* COLUMN 2: CEREBRO */}
          <div className="bg-void p-10 flex flex-col gap-10 border-t lg:border-t-0 border-grid">
            <div className="flex items-center gap-4 border-b border-grid pb-6">
              <GitBranch className="text-optical" size={28} />
              <div>
                <span className="font-mono text-[9px] text-lab uppercase tracking-widest">Dimensión 02</span>
                <h3 className="text-xl font-medium tracking-tight">Transformación Organizacional</h3>
              </div>
            </div>

            <div className="flex flex-col gap-10 flex-grow">
              <div className="group">
                <h4 className="font-mono text-xs text-optical mb-3 uppercase tracking-[0.15em] flex items-center justify-between">
                  <span>Procesos y Asincronía</span>
                  <span className="text-lab font-light text-[10px] group-hover:text-optical transition-colors">// 01</span>
                </h4>
                <p className="text-xs text-lab font-light leading-relaxed mb-2">
                  Matar la reunionitis, liberar el talento.
                </p>
                <p className="text-sm text-lab leading-relaxed font-light">
                  Mapeamos y reescribimos los flujos de comunicación y trabajo diario. Establecemos dinámicas de trabajo asíncronas y documentación clara, eliminando reuniones innecesarias de coordinación y devolviendo ancho de banda directivo para el pensamiento estratégico.
                </p>
              </div>

              <div className="group">
                <h4 className="font-mono text-xs text-optical mb-3 uppercase tracking-[0.15em] flex items-center justify-between">
                  <span>Gobernanza Dinámica</span>
                  <span className="text-lab font-light text-[10px] group-hover:text-optical transition-colors">// 02</span>
                </h4>
                <p className="text-xs text-lab font-light leading-relaxed mb-2">
                  Autonomía alineada, no jerarquías lentas.
                </p>
                <p className="text-sm text-lab leading-relaxed font-light">
                  Diseñamos organizaciones dinámicas basadas en roles explícitos y propósitos medibles. Reemplazamos la lentitud burocrática por una estructura donde los equipos ejecutan con ownership absoluto y toman decisiones ágiles bajo marcos claros de responsabilidad.
                </p>
              </div>
            </div>
          </div>

          {/* COLUMN 3: ALMA */}
          <div className="bg-void p-10 flex flex-col gap-10 border-t lg:border-t-0 border-grid">
            <div className="flex items-center gap-4 border-b border-grid pb-6">
              <Cpu className="text-optical" size={28} />
              <div>
                <span className="font-mono text-[9px] text-lab uppercase tracking-widest">Dimensión 03</span>
                <h3 className="text-xl font-medium tracking-tight">Transformación Cultural</h3>
              </div>
            </div>

            <div className="flex flex-col gap-10 flex-grow">
              <div className="group">
                <h4 className="font-mono text-xs text-optical mb-3 uppercase tracking-[0.15em] flex items-center justify-between">
                  <span>Tech Capabilities & Reskilling</span>
                  <span className="text-lab font-light text-[10px] group-hover:text-optical transition-colors">// 01</span>
                </h4>
                <p className="text-xs text-lab font-light leading-relaxed mb-2">
                  Autonomía técnica, cero dependencia.
                </p>
                <p className="text-sm text-lab leading-relaxed font-light">
                  Transferimos el conocimiento técnico a tu organización. No creamos dependencia de Kintu; formamos y nivelamos a tus equipos internos (reskilling/upskilling) en las nuevas arquitecturas, tecnologías y metodologías de desarrollo implementadas para que puedan operarlas y evolucionarlas de forma autónoma.
                </p>
              </div>

              <div className="group">
                <h4 className="font-mono text-xs text-optical mb-3 uppercase tracking-[0.15em] flex items-center justify-between">
                  <span>UX del Empleado</span>
                  <span className="text-lab font-light text-[10px] group-hover:text-optical transition-colors">// 02</span>
                </h4>
                <p className="text-xs text-lab font-light leading-relaxed mb-2">
                  Software diseñado para humanos reales.
                </p>
                <p className="text-sm text-lab leading-relaxed font-light">
                  Diseñamos los procesos de software pensando en los usuarios internos. Analizamos el comportamiento de tus equipos y adaptamos las interfaces y flujos de trabajo para minimizar la fricción, garantizando tasas de adopción excepcionales desde el primer día.
                </p>
              </div>

              <div className="group">
                <h4 className="font-mono text-xs text-optical mb-3 uppercase tracking-[0.15em] flex items-center justify-between">
                  <span>Gestión de Adopción y Cambio</span>
                  <span className="text-lab font-light text-[10px] group-hover:text-optical transition-colors">// 03</span>
                </h4>
                <p className="text-xs text-lab font-light leading-relaxed mb-2">
                  Alinear la cultura al nuevo estándar técnico.
                </p>
                <p className="text-sm text-lab leading-relaxed font-light">
                  Lideramos la transformación cultural necesaria para la asimilación del software. Acompañamos a directivos y equipos con planes prácticos de transición para alinear la mentalidad del equipo con las nuevas herramientas instaladas.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* HOW WE DO IT (THE HUB) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 border-x border-t border-grid relative">
        <Plus className="absolute -top-3 -left-3 text-grid" size={24} />
        
        <div className="max-w-4xl mb-24">
          <div className="font-mono text-lab text-[10px] uppercase tracking-[0.2em] mb-8 border border-grid px-4 py-2 bg-void/50 backdrop-blur-sm inline-block">
            // EL HUB DE EVOLUCIÓN
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-8 uppercase">
            Cerebro y Músculo: el fin de las consultoras de diapositivas y las software factories ciegas.
          </h2>
          <p className="text-lg md:text-xl text-lab font-light leading-relaxed max-w-3xl">
            Kintu no opera como una software factory tradicional con programadores asignados a la fuerza, ni como una consultora que entrega diapositivas teóricas y delega el riesgo de implementación. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-grid border border-grid">
          
          {/* Card 1 */}
          <div className="bg-void p-10 flex flex-col gap-6 group hover:bg-grid/10 transition-all duration-300">
            <div className="p-4 border border-grid inline-flex self-start text-lab group-hover:text-optical group-hover:border-optical/30 transition-all duration-300">
              <Layers size={24} />
            </div>
            <h3 className="text-xl font-medium tracking-tight text-optical">El Modelo Hub</h3>
            <p className="text-sm text-lab leading-relaxed font-light">
              Desplegamos squads de ingenieros y especialistas senior de nuestra red de expertos asociados adaptados milimétricamente a la escala del proyecto, eliminando costes fijos inútiles y burocracia.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-void p-10 flex flex-col gap-6 group hover:bg-grid/10 transition-all duration-300">
            <div className="p-4 border border-grid inline-flex self-start text-lab group-hover:text-optical group-hover:border-optical/30 transition-all duration-300">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-medium tracking-tight text-optical">Gobernanza Llave en Mano</h3>
            <p className="text-sm text-lab leading-relaxed font-light">
              A diferencia del *Staff Augmentation* tradicional (donde tú debes dirigir y supervisar al talento contratado), Kintu asume el ownership técnico y el control de calidad total de la entrega. Entregamos soluciones listas para operar.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-void p-10 flex flex-col gap-6 group hover:bg-grid/10 transition-all duration-300">
            <div className="p-4 border border-grid inline-flex self-start text-lab group-hover:text-optical group-hover:border-optical/30 transition-all duration-300">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-medium tracking-tight text-optical">Diseño Sistémico Integrado</h3>
            <p className="text-sm text-lab leading-relaxed font-light">
              Fusionamos la construcción de tecnología con el rediseño de procesos y el cambio cultural. Esto asegura que la inversión tecnológica sea adoptada de forma natural por el equipo y genere un ROI financiero inmediato.
            </p>
          </div>

        </div>

        {/* CTA TO FUTURE AUDIT */}
        <div className="mt-24 border border-grid bg-void p-12 flex flex-col md:flex-row justify-between items-center gap-8 hover:border-optical/10 transition-colors">
          <div className="flex items-center gap-4">
            <HelpCircle size={32} className="text-lab shrink-0" />
            <div>
              <h4 className="text-lg font-medium text-optical">¿Listo para estructurar tu transformación?</h4>
              <p className="text-sm text-lab font-light mt-1">Hagamos una llamada rápida para evaluar tus necesidades organizativas y de sistemas.</p>
            </div>
          </div>
          <Link to="/future-audit" className="bg-optical text-void px-8 py-4 font-mono text-xs uppercase tracking-widest font-bold hover:bg-volt transition-colors shrink-0 w-full md:w-auto">
            AGENDAR_FUTURE_AUDIT →
          </Link>
        </div>
      </section>
    </>
  );
}
