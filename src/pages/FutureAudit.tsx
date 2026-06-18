import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowRight, ArrowLeft, ClipboardCheck, Database, Mail, Phone, Building, User, Briefcase, Clock, Wrench, Activity, Brain, Heart, DollarSign, Users, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
type ScoreCategory = 'SMB' | 'ENT' | 'BOT' | 'CAOS';

type Question = {
  id: number;
  text: string;
  subtitle: string;
  options: {
    value: string;
    text: string;
    score: ScoreCategory;
    monitorSignal: string; // What the monitor shows when this is selected
  }[];
};

type LeadInfo = {
  name: string;
  email: string;
  company: string;
  phone: string;
  role: string;
  priority: string;
  coreTool: string;
};

/* ─────────────────────────────────────────────
   QUIZ DATA
───────────────────────────────────────────── */
const questions: Question[] = [
  {
    id: 1,
    text: '¿Cuál es la escala actual de tu operación?',
    subtitle: 'Esto nos permite calibrar la complejidad de tu infraestructura organizativa.',
    options: [
      { value: 'micro', text: '1 a 9 personas — Micro-equipo / Start-up', score: 'BOT', monitorSignal: 'Estructura ligera detectada. Riesgo: dependencia del fundador.' },
      { value: 'smb', text: '10 a 40 personas — Pyme en crecimiento acelerado', score: 'SMB', monitorSignal: 'Fase de tracción. Los procesos informales empiezan a colapsar.' },
      { value: 'mid', text: '41 a 150 personas — Empresa consolidada', score: 'ENT', monitorSignal: 'Masa crítica. Los silos interdepartamentales son inevitables sin diseño.' },
      { value: 'enterprise', text: 'Más de 150 personas — Estructura corporativa regional', score: 'ENT', monitorSignal: 'Arquitectura compleja. Fragmentación de sistemas legacy altamente probable.' },
    ],
  },
  {
    id: 2,
    text: '¿Cuál es tu principal cuello de botella operativo hoy?',
    subtitle: 'Identificamos el nudo central que ahoga tus márgenes y tu tiempo.',
    options: [
      { value: 'founder', text: 'Las decisiones clave pasan únicamente por la dirección', score: 'CAOS', monitorSignal: '⚠ ALERTA: Líder Bottleneck. Un fin de semana sin conexión = semana de incendios.' },
      { value: 'software', text: 'Inversión en licencias de software que el equipo subutiliza', score: 'BOT', monitorSignal: '⚠ ALERTA: Falsa Tecnología. Inversión en herramientas sin adopción real.' },
      { value: 'meetings', text: 'La coordinación requiere reuniones constantes y crece la burocracia', score: 'CAOS', monitorSignal: '⚠ ALERTA: Fricción Operativa. Cada contratación genera más reuniones, no más output.' },
      { value: 'silos', text: 'Las distintas áreas operan en silos con sistemas desintegrados', score: 'ENT', monitorSignal: '⚠ ALERTA: Fragmentación Legacy. Datos críticos dispersos en múltiples sistemas.' },
    ],
  },
  {
    id: 3,
    text: '¿Qué nivel de automatización e IA tienen tus procesos?',
    subtitle: 'Evaluamos la madurez de tu infraestructura tecnológica operativa.',
    options: [
      { value: 'none', text: 'Nulo: la operación se sostiene con trabajo administrativo manual', score: 'BOT', monitorSignal: 'Músculo: CRÍTICO. El talento calificado ejecuta tareas robóticas.' },
      { value: 'basic', text: 'Básico: algunas integraciones (Zapier/bots) de forma aislada', score: 'SMB', monitorSignal: 'Músculo: PARCIAL. Automatizaciones sin estrategia arquitectónica.' },
      { value: 'medium', text: 'Intermedio: sistemas conectados pero sin modelos de IA en flujos clave', score: 'ENT', monitorSignal: 'Músculo: ESTABLE. Infraestructura lista para inyección de IA.' },
      { value: 'advanced', text: 'Avanzado: la IA y la automatización estructuran el día a día', score: 'ENT', monitorSignal: 'Músculo: ÓPTIMO. Foco en optimización y governance.' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo se coordinan las decisiones y tareas en el equipo?',
    subtitle: 'Medimos la salud del Cerebro organizacional y la gobernanza real.',
    options: [
      { value: 'meetings_heavy', text: 'Reunionitis: necesitamos llamadas recurrentes para cualquier estatus', score: 'CAOS', monitorSignal: 'Cerebro: COLAPSADO. Agenda directiva bloqueada por coordinación.' },
      { value: 'informal', text: 'Informal: los roles no están explícitos y dependemos de la buena voluntad', score: 'CAOS', monitorSignal: 'Cerebro: DIFUSO. Sin arquitectura de decisiones. Riesgo de micromanagement.' },
      { value: 'async', text: 'Asíncrono: documentamos procesos y operamos con autonomía real', score: 'SMB', monitorSignal: 'Cerebro: SALUDABLE. Base sólida para escalar sin fricción adicional.' },
    ],
  },
];

/* ─────────────────────────────────────────────
   SCANNER MESSAGES
───────────────────────────────────────────── */
const scannerLines = [
  '> Iniciando análisis de infraestructura organizativa...',
  '> Escaneando capa de Músculo (automatización e integración)...',
  '> Evaluando capa de Cerebro (gobernanza y coordinación)...',
  '> Analizando capa de Alma (cultura y adopción)...',
  '> Correlacionando vectores de fricción operativa...',
  '> Calculando índice de ineficiencia financiera...',
  '> Generando blueprint de escape personalizado...',
  '> ✓ DIAGNÓSTICO COMPLETADO.',
];

/* ─────────────────────────────────────────────
   HELPER: compute health scores from answers
───────────────────────────────────────────── */
function computeHealthScores(scores: ScoreCategory[]) {
  const chaosCount = scores.filter((s) => s === 'CAOS').length;
  const botCount = scores.filter((s) => s === 'BOT').length;
  const entCount = scores.filter((s) => s === 'ENT').length;

  // Músculo: inverse of BOT (more BOT = lower muscle health)
  const musculo = Math.max(15, 100 - botCount * 25 - chaosCount * 10);
  // Cerebro: inverse of CAOS
  const cerebro = Math.max(15, 100 - chaosCount * 30 - botCount * 5);
  // Alma: composite — high CAOS or BOT = low alma
  const alma = Math.max(15, 100 - chaosCount * 20 - botCount * 15 + entCount * 5);

  return { musculo, cerebro, alma };
}

/* ─────────────────────────────────────────────
   COMPONENT: Animated Health Bar
───────────────────────────────────────────── */
function HealthBar({ label, value, icon, delay }: { label: string; value: number; icon: React.ReactNode; delay: number }) {
  const getColor = (v: number) => {
    if (v >= 70) return 'bg-emerald-400';
    if (v >= 40) return 'bg-amber-400';
    return 'bg-red-400';
  };
  const getTextColor = (v: number) => {
    if (v >= 70) return 'text-emerald-400';
    if (v >= 40) return 'text-amber-400';
    return 'text-red-400';
  };
  const getStatus = (v: number) => {
    if (v >= 70) return 'SALUDABLE';
    if (v >= 40) return 'EN RIESGO';
    return 'CRÍTICO';
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className="flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-optical">{icon}</span>
          <span className="font-mono text-xs uppercase tracking-widest text-optical">{label}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className={`font-mono text-[10px] uppercase tracking-widest ${getTextColor(value)}`}>
            {getStatus(value)}
          </span>
          <span className={`font-mono text-sm font-bold ${getTextColor(value)}`}>{value}%</span>
        </div>
      </div>
      <div className="w-full h-2 bg-grid overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: 'easeOut' }}
          className={`h-full ${getColor(value)}`}
        />
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   COMPONENT: ROI Simulator Slider
───────────────────────────────────────────── */
function RoiSlider({
  label,
  value,
  min,
  max,
  step,
  unit,
  icon,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  icon: React.ReactNode;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lab">{icon}</span>
          <span className="text-xs text-lab font-light">{label}</span>
        </div>
        <span className="font-mono text-sm text-optical font-bold tabular-nums">
          {unit === 'USD' ? `$${value}` : value} {unit !== 'USD' ? unit : '/hr'}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1 bg-grid appearance-none cursor-pointer accent-optical
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:bg-optical [&::-webkit-slider-thumb]:border-0
          [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4
          [&::-moz-range-thumb]:bg-optical [&::-moz-range-thumb]:border-0"
      />
      <div className="flex justify-between font-mono text-[9px] text-lab/50">
        <span>{unit === 'USD' ? `$${min}` : `${min}`}</span>
        <span>{unit === 'USD' ? `$${max}` : `${max}`}</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   COMPONENT: Organizational State Monitor
───────────────────────────────────────────── */
function OrgMonitor({ signals, currentStep }: { signals: string[]; currentStep: number }) {
  return (
    <div className="border border-grid bg-void/80 p-6 h-full flex flex-col gap-4 overflow-hidden">
      <div className="flex items-center gap-3 border-b border-grid pb-3">
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        <span className="font-mono text-[9px] uppercase tracking-widest text-lab">
          ORG_STATE_MONITOR // LIVE
        </span>
      </div>
      <div className="flex-1 overflow-y-auto space-y-3 font-mono text-[11px] leading-relaxed">
        {signals.length === 0 && (
          <div className="text-lab/40 italic">
            {'>'} Esperando input del operador...
            <span className="inline-block w-1.5 h-3 bg-lab/40 ml-1 animate-pulse" />
          </div>
        )}
        <AnimatePresence>
          {signals.map((signal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className={`p-3 border border-grid/50 ${
                signal?.includes('⚠') ? 'text-amber-400/90 bg-amber-400/5 border-amber-400/20' :
                signal?.includes('CRÍTICO') ? 'text-red-400/90 bg-red-400/5 border-red-400/20' :
                (signal?.includes('ÓPTIMO') || signal?.includes('SALUDABLE')) ? 'text-emerald-400/90 bg-emerald-400/5 border-emerald-400/20' :
                'text-lab/80 bg-grid/5'
              }`}
            >
              <span className="text-lab/40 mr-2">[Q{idx + 1}]</span>
              {signal}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="border-t border-grid pt-3 flex items-center justify-between">
        <span className="font-mono text-[9px] text-lab/50 uppercase tracking-widest">
          Vectores analizados: {signals.length}/{questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-1 transition-colors duration-500 ${
                i < currentStep ? 'bg-optical' : i === currentStep ? 'bg-optical/50 animate-pulse' : 'bg-grid'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function FutureAudit() {
  // Steps: 0..3 = quiz, 4 = lead form, 5 = scanning, 6 = results
  const FORM_STEP = questions.length;
  const SCAN_STEP = questions.length + 1;
  const RESULT_STEP = questions.length + 2;

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [scores, setScores] = useState<ScoreCategory[]>([]);
  const [monitorSignals, setMonitorSignals] = useState<string[]>([]);
  const [leadInfo, setLeadInfo] = useState<LeadInfo>({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    priority: '',
    coreTool: '',
  });

  // Scanner animation
  const [scanLines, setScanLines] = useState<string[]>([]);

  // ROI Simulator
  const [roiEmployees, setRoiEmployees] = useState(20);
  const [roiHours, setRoiHours] = useState(8);
  const [roiCost, setRoiCost] = useState(25);

  const roiCalc = useMemo(() => {
    const monthlyHours = roiEmployees * roiHours * 4.3;
    const annualCost = monthlyHours * 12 * roiCost;
    const recoverable = Math.round(monthlyHours * 0.6); // 60% automation potential
    const annualSavings = Math.round(annualCost * 0.6);
    return { monthlyHours: Math.round(monthlyHours), annualCost, recoverable, annualSavings };
  }, [roiEmployees, roiHours, roiCost]);

  const handleOptionSelect = useCallback(
    (qId: number, value: string, score: ScoreCategory, monitorSignal: string) => {
      setAnswers((prev) => ({ ...prev, [qId]: value }));
      setScores((prev) => [...prev, score]);
      setMonitorSignals((prev) => [...prev, monitorSignal]);
      setTimeout(() => setCurrentStep((prev) => prev + 1), 400);
    },
    [],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setLeadInfo({ ...leadInfo, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(SCAN_STEP);
  };

  // Scanner animation effect
  useEffect(() => {
    if (currentStep !== SCAN_STEP) return;
    let idx = 0;
    const interval = setInterval(() => {
      if (idx < scannerLines.length) {
        setScanLines((prev) => [...prev, scannerLines[idx]]);
        idx++;
      } else {
        clearInterval(interval);
        setTimeout(() => setCurrentStep(RESULT_STEP), 800);
      }
    }, 380);
    return () => clearInterval(interval);
  }, [currentStep, SCAN_STEP, RESULT_STEP]);

  // Diagnosis computation
  const getDiagnosis = useCallback(() => {
    const isEnterprise = answers[1] === 'mid' || answers[1] === 'enterprise' || scores.filter((s) => s === 'ENT').length >= 2;
    const isChaos = scores.filter((s) => s === 'CAOS').length >= 2;

    if (isEnterprise) {
      return {
        profile: 'Estructura Corporativa Fragmentada',
        summary:
          'Tu organización cuenta con escala significativa, pero la dispersión de sistemas e información genera silos operativos. El riesgo principal es la erosión de márgenes por ineficiencia sistémica y la lentitud directiva.',
        blueprint: 'Partner de Evolución (Enterprise Hub)',
        steps: [
          'Modernización y consolidación de la arquitectura de software core.',
          'Rediseño de gobernanza y roles explícitos para descentralizar decisiones.',
          'Capacitación interna (Reskilling) y diseño de la adopción de usuarios.',
        ],
        ctaText: 'Aplicar para Partnership de Evolución',
        ctaLink: '/partner-evolucion',
      };
    } else if (isChaos) {
      return {
        profile: 'Operación Atascada por Fricción Humana',
        summary:
          'El cuello de botella está en la comunicación y la gobernanza. Dependes de reuniones recurrentes y del micromanagement para mantener la operación alineada.',
        blueprint: 'Sprint OKR + Sprint Asíncrono (90 días)',
        steps: [
          'Implantación de dinámicas de comunicación asíncronas y herramientas estructuradas.',
          'Establecimiento de un marco de OKRs prácticos para alinear objetivos.',
          'Definición y documentación formal de roles y responsabilidades claras.',
        ],
        ctaText: 'Explorar Sprints de Evolución',
        ctaLink: '/sprints-evolucion',
      };
    } else {
      return {
        profile: 'Falsa Digitalización & Carga Robótica',
        summary:
          'Tu equipo cuenta con licencias de software, pero el día a día se sigue resolviendo de forma manual. Tu talento calificado pasa horas haciendo data entry y reportes robóticos.',
        blueprint: 'Sprint IA: Automatización de Operaciones (90 días)',
        steps: [
          'Mapeo clínico de tus tareas y flujos más repetitivos.',
          'Integración de modelos de IA y automatizaciones de flujos (APIs).',
          'Nivelación técnica de tus empleados para auditar a la IA.',
        ],
        ctaText: 'Explorar Sprints de Evolución',
        ctaLink: '/sprints-evolucion',
      };
    }
  }, [answers, scores]);

  const diagnosis = currentStep >= RESULT_STEP ? getDiagnosis() : null;
  const healthScores = currentStep >= RESULT_STEP ? computeHealthScores(scores) : null;

  const formatCurrency = (n: number) => {
    if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
    return `$${n}`;
  };

  return (
    <>
      {/* ── HERO HEADER ── */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-32 pb-8 border-x border-grid relative">
        <Plus className="absolute -top-3 -left-3 text-grid" size={24} />
        <Plus className="absolute -top-3 -right-3 text-grid" size={24} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="font-mono text-lab text-[10px] uppercase tracking-[0.2em] mb-6 border border-grid px-4 py-2 bg-void/50 inline-block">
            // DIAGNÓSTICO CLÍNICO DE INFRAESTRUCTURA
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-medium tracking-tighter leading-[0.9] mb-6 max-w-5xl">
            Future Audit
            <span className="text-lab">_</span>
          </h1>
          <p className="text-lg md:text-xl text-lab max-w-2xl font-light leading-relaxed">
            En 4 preguntas mapeamos tu infraestructura organizativa y te devolvemos un diagnóstico
            accionable con estimación de ROI financiero.
          </p>
        </motion.div>
      </section>

      {/* ── MAIN CONTENT AREA ── */}
      <section className="w-full max-w-7xl mx-auto px-6 py-12 border-x border-grid relative min-h-[70vh]">
        <Plus className="absolute -bottom-3 -left-3 text-grid" size={24} />
        <Plus className="absolute -bottom-3 -right-3 text-grid" size={24} />

        <AnimatePresence mode="wait">
          {/* ════════════════════════════════════════════
              QUIZ QUESTIONS (Steps 0–3)
          ════════════════════════════════════════════ */}
          {currentStep < FORM_STEP && (
            <motion.div
              key={`quiz-${currentStep}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full"
            >
              {/* LEFT: Question */}
              <div className="lg:col-span-3 flex flex-col gap-8">
                {/* Progress */}
                <div className="flex items-center gap-4 justify-between border-b border-grid pb-4">
                  <span className="font-mono text-xs text-lab uppercase tracking-widest">
                    Paso {currentStep + 1} de {questions.length + 1} // Diagnóstico
                  </span>
                  <div className="flex gap-1">
                    {questions.map((_, i) => (
                      <div
                        key={i}
                        className={`w-8 h-1 transition-colors duration-300 ${
                          i < currentStep ? 'bg-optical' : i === currentStep ? 'bg-optical/60 animate-pulse' : 'bg-grid'
                        }`}
                      />
                    ))}
                    <div className="w-8 h-1 bg-grid" />
                  </div>
                </div>

                {/* Question text */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-optical leading-snug mb-3">
                    {questions[currentStep].text}
                  </h2>
                  <p className="text-sm text-lab font-light">{questions[currentStep].subtitle}</p>
                </div>

                {/* Options */}
                <div className="flex flex-col gap-3">
                  {questions[currentStep].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        handleOptionSelect(
                          questions[currentStep].id,
                          option.value,
                          option.score,
                          option.monitorSignal,
                        )
                      }
                      className="w-full text-left p-5 md:p-6 border border-grid hover:border-optical/30 hover:bg-optical/5 transition-all duration-300 group flex justify-between items-center cursor-pointer"
                    >
                      <span className="text-sm text-lab group-hover:text-optical transition-colors leading-relaxed pr-4">
                        {option.text}
                      </span>
                      <ArrowRight
                        size={16}
                        className="text-grid group-hover:text-optical group-hover:translate-x-1 transition-all shrink-0"
                      />
                    </button>
                  ))}
                </div>

                {/* Back button */}
                {currentStep > 0 && (
                  <button
                    onClick={() => {
                      setScores((prev) => prev.slice(0, -1));
                      setMonitorSignals((prev) => prev.slice(0, -1));
                      setCurrentStep((prev) => prev - 1);
                    }}
                    className="self-start flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-lab hover:text-optical transition-colors group cursor-pointer"
                  >
                    <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                    PREGUNTA_ANTERIOR
                  </button>
                )}
              </div>

              {/* RIGHT: Organizational State Monitor */}
              <div className="lg:col-span-2 hidden lg:block">
                <OrgMonitor signals={monitorSignals} currentStep={currentStep} />
              </div>
            </motion.div>
          )}

          {/* ════════════════════════════════════════════
              LEAD CAPTURE FORM (Step 4)
          ════════════════════════════════════════════ */}
          {currentStep === FORM_STEP && (
            <motion.div
              key="lead-form"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full"
            >
              {/* LEFT: Form */}
              <div className="lg:col-span-3 flex flex-col gap-8">
                <div className="flex items-center gap-4 justify-between border-b border-grid pb-4">
                  <span className="font-mono text-xs text-lab uppercase tracking-widest">
                    Paso {questions.length + 1} de {questions.length + 1} // Registro
                  </span>
                  <div className="flex gap-1">
                    {questions.map((_, i) => (
                      <div key={i} className="w-8 h-1 bg-optical" />
                    ))}
                    <div className="w-8 h-1 bg-optical animate-pulse" />
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-optical leading-snug mb-2">
                    Tu diagnóstico está listo.
                  </h2>
                  <p className="text-sm text-lab font-light">
                    Ingresa tus datos para procesar el resultado de tu infraestructura organizativa y
                    recibir tu estimación de ROI personalizada.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 border border-grid px-4 py-3 bg-void/50 focus-within:border-optical/30 transition-colors">
                      <User size={16} className="text-lab shrink-0" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Nombre completo"
                        required
                        value={leadInfo.name}
                        onChange={handleInputChange}
                        className="bg-transparent border-none outline-none text-sm w-full text-optical placeholder:text-lab/50"
                      />
                    </div>
                    <div className="flex items-center gap-3 border border-grid px-4 py-3 bg-void/50 focus-within:border-optical/30 transition-colors">
                      <Mail size={16} className="text-lab shrink-0" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email corporativo"
                        required
                        value={leadInfo.email}
                        onChange={handleInputChange}
                        className="bg-transparent border-none outline-none text-sm w-full text-optical placeholder:text-lab/50"
                      />
                    </div>
                  </div>

                  {/* Row 2: Company & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 border border-grid px-4 py-3 bg-void/50 focus-within:border-optical/30 transition-colors">
                      <Building size={16} className="text-lab shrink-0" />
                      <input
                        type="text"
                        name="company"
                        placeholder="Nombre de la empresa"
                        required
                        value={leadInfo.company}
                        onChange={handleInputChange}
                        className="bg-transparent border-none outline-none text-sm w-full text-optical placeholder:text-lab/50"
                      />
                    </div>
                    <div className="flex items-center gap-3 border border-grid px-4 py-3 bg-void/50 focus-within:border-optical/30 transition-colors">
                      <Phone size={16} className="text-lab shrink-0" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="WhatsApp / Teléfono"
                        required
                        value={leadInfo.phone}
                        onChange={handleInputChange}
                        className="bg-transparent border-none outline-none text-sm w-full text-optical placeholder:text-lab/50"
                      />
                    </div>
                  </div>

                  {/* Row 3: Segmentation — Role & Priority */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 border border-grid px-4 py-3 bg-void/50 focus-within:border-optical/30 transition-colors">
                      <Briefcase size={16} className="text-lab shrink-0" />
                      <select
                        name="role"
                        required
                        value={leadInfo.role}
                        onChange={handleInputChange}
                        className="bg-transparent border-none outline-none text-sm w-full text-optical appearance-none cursor-pointer [&>option]:bg-void [&>option]:text-optical"
                      >
                        <option value="" disabled>
                          Cargo / Rol
                        </option>
                        <option value="ceo">CEO / Fundador</option>
                        <option value="coo">COO / Director de Operaciones</option>
                        <option value="cto">CTO / Director de Tecnología</option>
                        <option value="cfo">CFO / Director Financiero</option>
                        <option value="vp">VP / Director de Área</option>
                        <option value="manager">Gerente / Manager</option>
                        <option value="other">Otro</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-3 border border-grid px-4 py-3 bg-void/50 focus-within:border-optical/30 transition-colors">
                      <Clock size={16} className="text-lab shrink-0" />
                      <select
                        name="priority"
                        required
                        value={leadInfo.priority}
                        onChange={handleInputChange}
                        className="bg-transparent border-none outline-none text-sm w-full text-optical appearance-none cursor-pointer [&>option]:bg-void [&>option]:text-optical"
                      >
                        <option value="" disabled>
                          Prioridad operativa
                        </option>
                        <option value="urgent">Urgente: resolver en menos de 30 días</option>
                        <option value="planned">Planificado: próximo trimestre</option>
                        <option value="exploring">Exploración / Benchmarking</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Core Tool */}
                  <div className="flex items-center gap-3 border border-grid px-4 py-3 bg-void/50 focus-within:border-optical/30 transition-colors">
                    <Wrench size={16} className="text-lab shrink-0" />
                    <select
                      name="coreTool"
                      required
                      value={leadInfo.coreTool}
                      onChange={handleInputChange}
                      className="bg-transparent border-none outline-none text-sm w-full text-optical appearance-none cursor-pointer [&>option]:bg-void [&>option]:text-optical"
                    >
                      <option value="" disabled>
                        Herramienta core actual de gestión
                      </option>
                      <option value="manual">WhatsApp + Hojas de Cálculo</option>
                      <option value="legacy">ERP/CRM Legacy (SAP, Oracle, Salesforce, etc.)</option>
                      <option value="modern">Gestión Moderna (Slack, Notion, Asana, Monday)</option>
                      <option value="custom">Software propio a medida</option>
                      <option value="none">Ninguna herramienta formal</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="mt-4 bg-optical text-void py-4 px-6 font-mono text-xs uppercase tracking-widest font-bold hover:bg-volt transition-colors flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    PROCESAR_DIAGNÓSTICO
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                {/* Back button */}
                <button
                  onClick={() => {
                    setScores((prev) => prev.slice(0, -1));
                    setMonitorSignals((prev) => prev.slice(0, -1));
                    setCurrentStep((prev) => prev - 1);
                  }}
                  className="self-start flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-lab hover:text-optical transition-colors group cursor-pointer"
                >
                  <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                  PREGUNTA_ANTERIOR
                </button>
              </div>

              {/* RIGHT: Monitor — completed */}
              <div className="lg:col-span-2 hidden lg:block">
                <OrgMonitor signals={monitorSignals} currentStep={currentStep} />
              </div>
            </motion.div>
          )}

          {/* ════════════════════════════════════════════
              SCANNER ANIMATION (Step 5)
          ════════════════════════════════════════════ */}
          {currentStep === SCAN_STEP && (
            <motion.div
              key="scanner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-3xl mx-auto flex flex-col gap-6"
            >
              <div className="flex items-center gap-3 border-b border-grid pb-4">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="font-mono text-xs text-optical uppercase tracking-widest">
                  PROCESANDO INFRAESTRUCTURA // {leadInfo.company.toUpperCase()}
                </span>
              </div>

              <div className="border border-grid bg-void/80 p-8 min-h-[320px] font-mono text-sm space-y-2">
                {scanLines.map((line, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`${
                      line?.includes('✓') ? 'text-emerald-400 font-bold' : 'text-lab/80'
                    }`}
                  >
                    {line}
                  </motion.div>
                ))}
                {scanLines.length < scannerLines.length && (
                  <span className="inline-block w-2 h-4 bg-optical animate-pulse" />
                )}
              </div>

              {/* Animated progress bar */}
              <div className="w-full h-1 bg-grid overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${(scanLines.length / scannerLines.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-optical"
                />
              </div>
            </motion.div>
          )}

          {/* ════════════════════════════════════════════
              RESULTS DASHBOARD (Step 6)
          ════════════════════════════════════════════ */}
          {currentStep >= RESULT_STEP && diagnosis && healthScores && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col gap-10 w-full"
            >
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-grid pb-4">
                <ClipboardCheck size={20} className="text-optical" />
                <span className="font-mono text-xs text-optical uppercase tracking-widest">
                  RESULTADO DEL AUDIT // {leadInfo.company.toUpperCase()}
                </span>
              </div>

              {/* Profile Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="border border-grid bg-grid/10 p-8 md:p-10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 font-mono text-[7rem] md:text-[9rem] font-bold text-grid/10 select-none pointer-events-none leading-none">
                  SYS
                </div>
                <span className="font-mono text-[9px] text-lab uppercase tracking-widest">
                  Perfil Mapeado:
                </span>
                <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-optical mt-2 mb-4">
                  {diagnosis.profile}
                </h3>
                <p className="text-sm text-lab leading-relaxed font-light max-w-2xl">
                  {diagnosis.summary}
                </p>
              </motion.div>

              {/* Health Scorecards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="border border-grid p-8 flex flex-col gap-8"
              >
                <span className="font-mono text-xs text-optical uppercase tracking-widest flex items-center gap-2">
                  <Activity size={14} /> Estado del Sistema Operativo
                </span>
                <div className="flex flex-col gap-6">
                  <HealthBar
                    label="Músculo"
                    value={healthScores.musculo}
                    icon={<Database size={16} />}
                    delay={0.5}
                  />
                  <HealthBar
                    label="Cerebro"
                    value={healthScores.cerebro}
                    icon={<Brain size={16} />}
                    delay={0.7}
                  />
                  <HealthBar
                    label="Alma"
                    value={healthScores.alma}
                    icon={<Heart size={16} />}
                    delay={0.9}
                  />
                </div>
              </motion.div>

              {/* ROI SIMULATOR */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="border border-grid p-8 flex flex-col gap-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <span className="font-mono text-xs text-optical uppercase tracking-widest flex items-center gap-2">
                    <DollarSign size={14} /> Simulador de ROI de Automatización
                  </span>
                  <span className="font-mono text-[9px] text-lab uppercase tracking-widest">
                    Ajusta los valores a tu realidad
                  </span>
                </div>

                {/* Sliders */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <RoiSlider
                    label="Personas en operaciones admin."
                    value={roiEmployees}
                    min={5}
                    max={500}
                    step={5}
                    unit="personas"
                    icon={<Users size={14} />}
                    onChange={setRoiEmployees}
                  />
                  <RoiSlider
                    label="Horas semanales de trabajo manual"
                    value={roiHours}
                    min={1}
                    max={30}
                    step={1}
                    unit="hrs/sem"
                    icon={<Timer size={14} />}
                    onChange={setRoiHours}
                  />
                  <RoiSlider
                    label="Costo estimado hora-hombre"
                    value={roiCost}
                    min={10}
                    max={100}
                    step={5}
                    unit="USD"
                    icon={<DollarSign size={14} />}
                    onChange={setRoiCost}
                  />
                </div>

                {/* Results Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-grid border border-grid">
                  <div className="bg-void p-6 flex flex-col gap-2">
                    <span className="font-mono text-[9px] text-lab uppercase tracking-widest">
                      Horas mensuales totales
                    </span>
                    <span className="text-2xl font-medium text-optical tabular-nums">
                      {roiCalc.monthlyHours.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-lab font-light">hrs dedicadas a tareas manuales</span>
                  </div>
                  <div className="bg-void p-6 flex flex-col gap-2">
                    <span className="font-mono text-[9px] text-lab uppercase tracking-widest">
                      Costo anual de ineficiencia
                    </span>
                    <span className="text-2xl font-medium text-red-400 tabular-nums">
                      {formatCurrency(roiCalc.annualCost)}
                    </span>
                    <span className="text-[10px] text-lab font-light">USD invertidos en trabajo robótico</span>
                  </div>
                  <div className="bg-void p-6 flex flex-col gap-2">
                    <span className="font-mono text-[9px] text-lab uppercase tracking-widest">
                      Horas mensuales recuperables
                    </span>
                    <span className="text-2xl font-medium text-emerald-400 tabular-nums">
                      {roiCalc.recoverable.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-lab font-light">hrs que el OS Kintu devuelve</span>
                  </div>
                  <div className="bg-void p-6 flex flex-col gap-2">
                    <span className="font-mono text-[9px] text-lab uppercase tracking-widest">
                      Ahorro anual estimado
                    </span>
                    <span className="text-2xl font-medium text-emerald-400 tabular-nums">
                      {formatCurrency(roiCalc.annualSavings)}
                    </span>
                    <span className="text-[10px] text-lab font-light">USD de retorno proyectado</span>
                  </div>
                </div>
              </motion.div>

              {/* ESCAPE PLAN */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col gap-4"
              >
                <span className="font-mono text-xs text-optical uppercase tracking-widest flex items-center gap-2">
                  <Database size={14} /> Tu plan de escape sugerido: {diagnosis.blueprint}
                </span>
                <div className="flex flex-col gap-px bg-grid border border-grid">
                  {diagnosis.steps.map((step, idx) => (
                    <div key={idx} className="bg-void p-6 flex items-start gap-4">
                      <span className="font-mono text-xs text-lab mt-0.5">0{idx + 1}</span>
                      <p className="text-sm text-lab font-light">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA SECTION */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="border border-grid p-8 md:p-10 bg-void/50 flex flex-col md:flex-row justify-between items-center gap-8"
              >
                <div>
                  <span className="font-mono text-[9px] text-lab uppercase tracking-widest">
                    Próxima acción:
                  </span>
                  <h4 className="text-lg font-medium text-optical mt-1">
                    Valida este blueprint en una sesión de 45 min
                  </h4>
                  <p className="text-xs text-lab font-light mt-1">
                    Analizaremos este resultado detalladamente con el C-Level, sin compromiso.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
                  <Link
                    to={diagnosis.ctaLink}
                    className="border border-grid hover:border-optical/30 hover:bg-optical/5 text-lab hover:text-optical py-4 px-6 text-center font-mono text-xs uppercase tracking-widest transition-all"
                  >
                    {diagnosis.ctaText}
                  </Link>
                  <a
                    href={`mailto:hola@kintu.lat?subject=Future%20Audit%20-%20${encodeURIComponent(leadInfo.company)}&body=Hola%2C%20completé%20el%20Future%20Audit%20y%20me%20gustaría%20agendar%20una%20sesión%20de%20validación.%0A%0APerfil%3A%20${encodeURIComponent(diagnosis.profile)}%0AEmpresa%3A%20${encodeURIComponent(leadInfo.company)}%0AContacto%3A%20${encodeURIComponent(leadInfo.name)}`}
                    className="bg-optical text-void py-4 px-6 text-center font-mono text-xs uppercase tracking-widest font-bold hover:bg-volt transition-colors"
                  >
                    AGENDAR_LLAMADA_DE_VALIDACIÓN
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
