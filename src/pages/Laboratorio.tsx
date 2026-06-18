import { Plus, Clock, Filter, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

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

const articles = [
  {
    id: 1,
    tag: "DISEÑO ORG",
    title: "La trampa de la 'Falsa Digitalización'",
    subtitle: "Por qué pagar 15 suscripciones SaaS diferentes te está haciendo más lento (y cómo solucionarlo).",
    time: "6 MIN",
    image: "/images/lab_falsa_digitalizacion.png",
    content: (
      <>
        <h3 className="text-3xl font-medium tracking-tight mb-6 mt-10">Tu empresa no necesita otro SaaS. Necesita un Sistema Operativo.</h3>
        <p className="text-xl text-lab font-light leading-relaxed mb-6">Descubre por qué la "falsa digitalización" está multiplicando el caos en tu equipo, destruyendo tus márgenes y cómo una arquitectura centralizada te devuelve el control absoluto.</p>
        
        <h4 className="text-2xl font-medium tracking-tight mb-4 mt-12 text-optical">El Espejismo del Software</h4>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">La mayoría de las agencias y pymes confunden "digitalización" con "comprar licencias de software". Contratan Asana para gestionar los proyectos, Slack para la comunicación interna, un CRM complejo para ventas, Google Drive para los archivos, y recientemente, tres herramientas más de Inteligencia Artificial porque "hay que innovar".</p>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">¿El resultado? Han logrado lo que en Kintu llamamos <strong>La Falsa Digitalización</strong>.</p>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">En lugar de simplificar el trabajo, estas empresas han digitalizado el desorden. Han creado silos de información donde los datos no se comunican entre sí. Ahora, tus empleados pasan el 30% de su día copiando y pegando datos entre plataformas, buscando dónde quedó "aquel mensaje importante" del cliente y actualizando estados de tareas manualmente para que los directores puedan ver un reporte a medias.</p>

        <h4 className="text-2xl font-medium tracking-tight mb-4 mt-12 text-optical">La Fricción Operativa</h4>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">En el Laboratorio de Kintu medimos constantemente el impacto financiero de este caos: cada herramienta desconectada que sumas a tu <em>stack</em> tecnológico añade fricción, no velocidad. Cada vez que un Account Manager tiene que abrir tres pestañas diferentes para entender el estado de una cuenta, estás perdiendo dinero. Estás pagando talento humano brillante para que actúen como "puentes manuales" entre softwares que deberían estar integrados.</p>

        <h4 className="text-2xl font-medium tracking-tight mb-4 mt-12 text-optical">La Solución: Un Sistema Operativo Invisible</h4>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">La respuesta no es entrenar al equipo en usar más software, ni redactar manuales de procedimientos interminables que nadie lee. La solución es construir un <strong>Sistema Operativo Organizacional</strong>.</p>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">Un Sistema Operativo real conecta tus flujos de trabajo en el <em>back-end</em> mediante lo que denominamos la capa de <strong>Músculo</strong> (automatizaciones e integraciones vía APIs). En lugar de que el humano alimente a la máquina, la máquina sirve al humano, dejando al equipo una única interfaz limpia y centralizada.</p>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">Imagina un escenario donde un nuevo cliente firma un contrato digital: sin intervención humana, se crea su carpeta en Drive, se levanta su proyecto en el gestor de tareas con todas las subtareas asignadas, se genera su canal de Slack, y se le envía un email de bienvenida. Todo en 2 segundos.</p>
        <p className="text-lg font-mono text-optical uppercase tracking-widest mt-12 mb-6 border-l-4 border-optical pl-4">Conclusión: No compres más herramientas aisladas. Invierte en orquestar las que ya tienes para que trabajen como un solo ecosistema.</p>
      </>
    )
  },
  {
    id: 2,
    tag: "SISTEMAS",
    title: "El fin del 'Micromanagement' y la Era Asíncrona",
    subtitle: "Cómo estructurar el 'Cerebro' de tu agencia para recuperar tu agenda directiva.",
    time: "8 MIN",
    image: "/images/lab_cerebro_asincrono.png",
    content: (
      <>
        <h3 className="text-3xl font-medium tracking-tight mb-6 mt-10">Si tu operación depende de reuniones de estatus, tu agencia está rota.</h3>
        <p className="text-xl text-lab font-light leading-relaxed mb-6">El costo oculto de la "reunionitis" directiva y cómo la gobernanza asíncrona libera hasta 15 horas semanales de tu agenda para que vuelvas a hacer estrategia.</p>

        <h4 className="text-2xl font-medium tracking-tight mb-4 mt-12 text-optical">El Síntoma: La Dependencia Directiva</h4>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">"¿Cómo vamos con la campaña del cliente X?". "¿Ya se envió la factura?". "¿Quién está a cargo de este entregable?". Si tú o tus líderes de equipo tienen que hacer estas preguntas en un canal de Slack, o peor aún, agendar una llamada de 15 minutos para averiguarlo, tu empresa tiene un problema grave en su capa de <strong>Cerebro</strong>.</p>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">Las agencias tradicionales y las empresas de servicios escalan a base de fuerza bruta: más clientes equivalen a más Account Managers, más reuniones de alineación semanal y, en consecuencia, más cuellos de botella centrados en los directores. Es un modelo insostenible que fomenta el micromanagement, agota a los líderes y destruye silenciosamente el margen de ganancia operativa.</p>

        <h4 className="text-2xl font-medium tracking-tight mb-4 mt-12 text-optical">Arquitectura de Decisiones (La capa Cerebro)</h4>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">La ventaja competitiva injusta de la próxima década pertenece a las empresas <strong>asíncronas</strong>. Esto no significa dejar de hablarse, significa tener una arquitectura de la información tan sólida que hablar sea una opción para crear, no un requisito para operar.</p>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">En Kintu, estructuramos la capa "Cerebro" construyendo bases de datos relacionales que actúan como la Única Fuente de la Verdad (Single Source of Truth). Esto implica reglas de negocio claras, permisos bien definidos y tableros que reportan el estado de cualquier iniciativa en tiempo real, sin depender de que un humano actualice una celda de Excel el viernes a las 5 PM.</p>

        <h4 className="text-2xl font-medium tracking-tight mb-4 mt-12 text-optical">El Impacto en el ROI</h4>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">Cuando el "Cerebro" de tu organización está estructurado correctamente, ocurren tres cosas:</p>
        <ul className="list-none space-y-4 mb-6">
          <li className="flex items-start gap-3"><Plus className="text-optical shrink-0 mt-1" size={16} /><span className="text-lg text-lab/80"><strong>Descentralización:</strong> Nadie tiene que pedir permiso ni preguntar cómo va un proyecto. La información está a un clic de distancia.</span></li>
          <li className="flex items-start gap-3"><Plus className="text-optical shrink-0 mt-1" size={16} /><span className="text-lg text-lab/80"><strong>Reducción de overhead:</strong> Eliminas el 80% de las reuniones de estatus (reuniones que le cuestan a tu empresa cientos de dólares la hora).</span></li>
          <li className="flex items-start gap-3"><Plus className="text-optical shrink-0 mt-1" size={16} /><span className="text-lg text-lab/80"><strong>Foco Directivo:</strong> Los líderes dejan de ser niñeros operativos para convertirse en verdaderos estrategas enfocados en la expansión del negocio.</span></li>
        </ul>
        <p className="text-lg font-mono text-optical uppercase tracking-widest mt-12 mb-6 border-l-4 border-optical pl-4">Deja de gestionar tareas y empieza a gestionar sistemas.</p>
      </>
    )
  },
  {
    id: 3,
    tag: "MÚSCULO TÁCTICO",
    title: "Músculo Robótico vs. Fuerza Bruta Humana",
    subtitle: "Por qué contratar más personas para tareas repetitivas es un suicidio financiero en la era de la IA.",
    time: "7 MIN",
    image: "/images/lab_musculo_robotico.png",
    content: (
      <>
        <h3 className="text-3xl font-medium tracking-tight mb-6 mt-10">Tu agencia no necesita más "horas-hombre". Necesita Músculo Robótico.</h3>
        <p className="text-xl text-lab font-light leading-relaxed mb-6">Cómo la automatización hiper-eficiente te permite triplicar tu capacidad de entrega sin añadir un solo centavo de overhead a tu nómina.</p>

        <h4 className="text-2xl font-medium tracking-tight mb-4 mt-12 text-optical">El Techo de Cristal del Modelo Tradicional</h4>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">El modelo de negocio de las agencias de servicios tradicionales está caducando rápidamente. Vender "horas-hombre" crea un techo de cristal matemático: para ganar más dinero, tienes que contratar a más personas. Y con cada nuevo empleado que sumas a la nómina, aumentan proporcionalmente los costos fijos, el overhead administrativo, el riesgo de errores humanos y la complejidad de gestión.</p>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">En Kintu lo llamamos operar <strong>sin Músculo</strong>. Es intentar cavar un túnel con cucharas en la era de las excavadoras industriales.</p>

        <h4 className="text-2xl font-medium tracking-tight mb-4 mt-12 text-optical">El Ascenso del Trabajador Sintético</h4>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">Hoy en día, tareas como la investigación de competidores, la limpieza de bases de datos, el enrutamiento de leads, la generación de reportes analíticos e incluso el control de calidad visual básico, son procesos que un "robot" puede ejecutar en segundos, trabajando 24/7, con cero errores y por una fracción ínfima del costo de un salario humano.</p>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">Al conectar integradores como Make.com con modelos de Inteligencia Artificial (LLMs), logramos lo que denominamos <strong>Músculo Robótico</strong>. No estamos hablando de simples macros de Excel, estamos hablando de agentes de IA capaces de leer, razonar, clasificar y ejecutar acciones complejas a través de las herramientas de tu empresa.</p>

        <h4 className="text-2xl font-medium tracking-tight mb-4 mt-12 text-optical">Redefiniendo el Valor Humano</h4>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">La inteligencia artificial no vino a reemplazar la creatividad humana ni el pensamiento crítico; vino a erradicar el trabajo de "fábrica" digital. Las empresas que entiendan cómo delegar el trabajo repetitivo a estos sistemas lograrán márgenes de ganancia del 60-70%, operando con equipos pequeños de alto rendimiento. Mientras tanto, su competencia tradicional seguirá luchando por raspar un 15% de margen mientras gestionan planillas de cientos de empleados desmotivados.</p>
        <p className="text-lg font-mono text-optical uppercase tracking-widest mt-12 mb-6 border-l-4 border-optical pl-4">La pregunta no es si debes automatizar, la pregunta es qué tan rápido lo hará tu competencia si tú no lo haces. Escala tus sistemas, no tu nómina.</p>
      </>
    )
  },
  {
    id: 4,
    tag: "CULTURA & ALMA",
    title: "El Factor Humano (La capa 'Alma')",
    subtitle: "Por qué el 70% de las iniciativas de automatización fracasan (y no es culpa del software).",
    time: "6 MIN",
    image: "/images/lab_alma_humana.png",
    content: (
      <>
        <h3 className="text-3xl font-medium tracking-tight mb-6 mt-10">El mejor software del mundo no salvará una cultura empresarial tóxica.</h3>
        <p className="text-xl text-lab font-light leading-relaxed mb-6">Si tu equipo se resiste al cambio, cualquier automatización será un gasto muerto. Aprende a dominar la capa de "Alma" organizativa.</p>

        <h4 className="text-2xl font-medium tracking-tight mb-4 mt-12 text-optical">La Fricción Invisible</h4>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">En nuestra experiencia analizando operaciones, hemos visto a cientos de empresas invertir miles de dólares en implementaciones técnicas impecables —flujos complejos en Zapier, arquitecturas en Airtable, o pilotos de IA generativa— solo para descubrir seis meses después que la inversión no tuvo retorno. ¿Por qué? Porque los empleados siguen enviándose archivos de Excel por correo a escondidas.</p>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">El problema en el 90% de los casos nunca es el código ni la herramienta tecnológica. El problema es el <strong>Alma</strong> de la organización.</p>

        <h4 className="text-2xl font-medium tracking-tight mb-4 mt-12 text-optical">¿Qué es el Alma Organizativa?</h4>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">El Alma es la cultura interna, la predisposición a la adopción tecnológica y la correcta alineación de incentivos. La tecnología es inerte; requiere de humanos que quieran usarla. Si un empleado siente que una nueva automatización viene a "robarle el puesto de trabajo", su instinto natural será boicotearla. Si usar el nuevo sistema centralizado requiere 10 clics más que su antiguo hábito de mandar un mensaje por WhatsApp, el sistema fracasará.</p>

        <h4 className="text-2xl font-medium tracking-tight mb-4 mt-12 text-optical">Ingeniería Cultural</h4>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">En Kintu, nuestra metodología exige no escribir una sola línea de código sin antes haber mapeado el impacto humano y el flujo de trabajo del usuario final. Implementar un verdadero Sistema Operativo requiere "Ingeniería Cultural":</p>
        <ul className="list-none space-y-4 mb-6">
          <li className="flex items-start gap-3"><Plus className="text-optical shrink-0 mt-1" size={16} /><span className="text-lg text-lab/80"><strong>Evangelización interna:</strong> Explicar el "por qué" antes del "cómo".</span></li>
          <li className="flex items-start gap-3"><Plus className="text-optical shrink-0 mt-1" size={16} /><span className="text-lg text-lab/80"><strong>Capacitación sin fricción:</strong> Interfaces intuitivas que no requieran manuales técnicos.</span></li>
          <li className="flex items-start gap-3"><Plus className="text-optical shrink-0 mt-1" size={16} /><span className="text-lg text-lab/80"><strong>Incentivos:</strong> Mostrarle al empleado que el bot no viene a despedirlo, sino a quitarle el trabajo aburrido para que pueda brillar en lo estratégico.</span></li>
        </ul>
        <p className="text-lg font-mono text-optical uppercase tracking-widest mt-12 mb-6 border-l-4 border-optical pl-4">Una cultura que castiga el error no puede innovar. Sin la capa de Alma, tu Músculo Robótico y tu Cerebro Asíncrono son solo líneas costosas de código inútil.</p>
      </>
    )
  },
  {
    id: 5,
    tag: "PRODUCTIZACIÓN",
    title: "De Agencia a Fábrica de Software",
    subtitle: "El Blueprint de Kintu para productizar servicios, garantizar márgenes y escapar de la trampa del tiempo.",
    time: "9 MIN",
    image: "/images/lab_fabrica_software.png",
    content: (
      <>
        <h3 className="text-3xl font-medium tracking-tight mb-6 mt-10">Deja de vender horas. Empieza a vender resultados empaquetados.</h3>
        <p className="text-xl text-lab font-light leading-relaxed mb-6">Cómo transformamos nuestro propio modelo de negocio hacia "Productized Services" y por qué es el único camino hacia la escalabilidad real.</p>

        <h4 className="text-2xl font-medium tracking-tight mb-4 mt-12 text-optical">El Veneno de la Cotización a Medida</h4>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">Para la mayoría de las agencias y consultoras, la "cotización a medida" es una medalla de honor. Venden que cada cliente es único y requiere una solución 100% personalizada. Desde la perspectiva del CEO, esto es el enemigo número uno de la escalabilidad.</p>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">Cuando cada proyecto es <em>Taylor-made</em>, es matemáticamente imposible estandarizar los procesos internos. No puedes predecir con exactitud tus márgenes de ganancia, sufres de constantes alteraciones en el alcance del proyecto (<em>scope creep</em>) y, lo más crítico: es imposible aplicar automatización a un proceso que cambia cada semana.</p>

        <h4 className="text-2xl font-medium tracking-tight mb-4 mt-12 text-optical">La Productización: Sprints de Evolución</h4>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">En el Laboratorio de Kintu tomamos una decisión radical que definió nuestro futuro: dejar de ser una agencia tradicional de "esfuerzo y horas" y convertirnos en un <strong>Socio de Infraestructura y Producto</strong>.</p>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">En lugar de vender bolsas de horas de consultoría abstractas, productizamos nuestra oferta transformándola en <strong>Sprints de Evolución</strong>. Un servicio productizado opera como una fábrica moderna:</p>
        <ul className="list-none space-y-4 mb-6">
          <li className="flex items-start gap-3"><Plus className="text-optical shrink-0 mt-1" size={16} /><span className="text-lg text-lab/80"><strong>Alcance Cerrado:</strong> Sabemos exactamente qué entregamos y en cuánto tiempo.</span></li>
          <li className="flex items-start gap-3"><Plus className="text-optical shrink-0 mt-1" size={16} /><span className="text-lg text-lab/80"><strong>Precio Transparente:</strong> El cliente compra un resultado, no un intento.</span></li>
          <li className="flex items-start gap-3"><Plus className="text-optical shrink-0 mt-1" size={16} /><span className="text-lg text-lab/80"><strong>Proceso Hiper-Optimizado:</strong> Al repetir el mismo tipo de entregable, podemos automatizar el 60% del trabajo manual interno, aumentando dramáticamente nuestra rentabilidad sin afectar la calidad final.</span></li>
        </ul>

        <h4 className="text-2xl font-medium tracking-tight mb-4 mt-12 text-optical">Tu Ventaja Competitiva Injusta</h4>
        <p className="text-lg text-lab/80 font-light leading-relaxed mb-6">Al estandarizar el proceso, el espacio para la innovación se dispara. Podemos iterar y perfeccionar la calidad del entregable en cada ciclo.</p>
        <p className="text-lg font-mono text-optical uppercase tracking-widest mt-12 mb-6 border-l-4 border-optical pl-4">Si quieres dominar tu nicho y construir una "ventaja competitiva injusta", debes empaquetar tu conocimiento operativo. Si tu servicio hoy no es escalable o depende de que tu mejor empleado no se enferme, tu negocio está en riesgo. Es hora de rediseñarlo desde los cimientos.</p>
      </>
    )
  }
];

const Laboratorio = () => {
  const [activeArticle, setActiveArticle] = useState<number | null>(null);

  // Auto-scroll to top when opening an article
  useEffect(() => {
    if (activeArticle !== null) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeArticle]);

  const renderArticleView = () => {
    const article = articles.find(a => a.id === activeArticle);
    if (!article) return null;

    return (
      <motion.div 
        key="article-view"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl mx-auto px-6 py-12"
      >
        <button 
          onClick={() => setActiveArticle(null)}
          className="flex items-center gap-2 font-mono text-xs text-lab hover:text-optical uppercase tracking-widest mb-12 transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
          Volver al índice
        </button>

        <div className="font-mono text-[10px] text-optical uppercase tracking-widest bg-optical/10 px-3 py-1 mb-8 inline-block">
          {article.tag} // {article.time}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-tight mb-8">
          {article.title}
        </h1>

        <div className="w-full aspect-[21/9] md:aspect-[3/1] bg-grid/30 border border-grid mb-16 relative overflow-hidden group">
          <div className="absolute inset-0 bg-void/20 mix-blend-overlay z-10" />
          <img src={article.image} alt={article.title} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
        </div>

        <div className="max-w-3xl mx-auto prose prose-invert prose-p:text-lab/80 prose-headings:text-white">
          {article.content}
        </div>

        {/* Article CTA */}
        <div className="max-w-3xl mx-auto mt-20 pt-12 border-t border-grid flex flex-col md:flex-row items-center gap-6 justify-between bg-grid/5 p-8">
          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest text-optical mb-2">Siguiente Paso</h4>
            <p className="text-lab text-sm">Aplica estas metodologías en tu operación.</p>
          </div>
          <button className="bg-optical text-void font-mono text-xs uppercase tracking-widest px-6 py-4 hover:bg-volt transition-colors font-bold whitespace-nowrap">
            Agendar Diagnóstico
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {activeArticle !== null ? (
          renderArticleView()
        ) : (
          <motion.div
            key="index-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
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
                onClick={() => setActiveArticle(articles[0].id)}
              >
                <div className="bg-void p-12 md:p-16 flex flex-col md:flex-row gap-12 items-start justify-between group-hover:bg-grid/5 transition-colors duration-500">
                  <div className="md:w-2/3 flex flex-col items-start z-10">
                    <div className="font-mono text-[10px] text-optical uppercase tracking-widest bg-optical/10 px-3 py-1 mb-8">
                      CASO DE ESTUDIO // DESTACADO
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-6 group-hover:text-optical text-white transition-colors">
                      {articles[0].title}
                    </h2>
                    <p className="text-xl text-lab font-light leading-relaxed mb-8">
                      {articles[0].subtitle}
                    </p>
                    <div className="flex items-center gap-4 text-optical font-mono text-xs uppercase tracking-widest">
                      LEER_REPORTE <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                  <div className="md:w-1/3 flex flex-col gap-4 w-full h-full relative">
                    <div className="aspect-video bg-grid/30 border border-grid overflow-hidden">
                      <img src={articles[0].image} alt="Featured" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                    </div>
                    <div className="flex justify-between font-mono text-[10px] text-lab tracking-widest mt-2">
                      <span>TIEMPO: {articles[0].time}</span>
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
                className="grid grid-cols-1 md:grid-cols-2 gap-px bg-grid border border-grid"
              >
                {articles.slice(1).map((post) => (
                  <motion.div 
                    key={post.id} 
                    variants={fadeUp} 
                    onClick={() => setActiveArticle(post.id)}
                    className="bg-void p-10 flex flex-col group hover:bg-grid/10 transition-colors duration-500 cursor-pointer relative overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="font-mono text-[10px] text-lab uppercase tracking-widest mb-6 border border-grid px-2 py-1 self-start">
                        {post.tag}
                      </div>
                      <h3 className="text-3xl font-medium tracking-tight mb-4 leading-snug group-hover:text-optical transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-lab/70 font-light leading-relaxed mb-8 text-sm">
                        {post.subtitle}
                      </p>
                      <div className="mt-auto pt-6 border-t border-grid flex justify-between items-center text-lab font-mono text-[10px] uppercase tracking-widest group-hover:text-optical transition-colors">
                        <span className="flex items-center gap-2"><Clock size={12}/> {post.time}</span>
                        <span>LEER <ArrowRight size={12} className="inline group-hover:translate-x-1 transition-transform" /></span>
                      </div>
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
                className="max-w-3xl mx-auto text-center flex flex-col items-center bg-void/50 p-12 border border-grid relative overflow-hidden"
              >
                <div className="absolute -inset-20 bg-optical/5 blur-[100px] rounded-full pointer-events-none" />
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 relative z-10">Recibí nuestra inteligencia operativa.</h2>
                <p className="text-lab font-light leading-relaxed mb-10 relative z-10">
                  Un correo mensual. Cero humo motivacional. Solo tácticas de arquitectura organizacional, automatización dura y diseño de sistemas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md relative z-10">
                  <input 
                    type="email" 
                    placeholder="[TU CORREO CEO]" 
                    className="bg-void border border-grid text-optical font-mono text-sm px-6 py-4 outline-none focus:border-optical/50 transition-colors w-full"
                  />
                  <button className="bg-optical text-void font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-volt transition-colors shrink-0 font-bold">
                    SUSCRIBIRME
                  </button>
                </div>
              </motion.div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Laboratorio;
