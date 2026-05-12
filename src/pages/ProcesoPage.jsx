import { motion } from 'framer-motion';
import {
  MessageCircle,
  ListChecks,
  FileSignature,
  ScanSearch,
  ThumbsUp,
  CreditCard,
  Ship,
  Navigation,
  ShieldCheck,
  KeyRound,
} from 'lucide-react';
import Seo from '../components/Seo.jsx';
import process from '../data/process.json';

const ICONS = {
  MessageCircle,
  ListChecks,
  FileSignature,
  ScanSearch,
  ThumbsUp,
  CreditCard,
  Ship,
  Navigation,
  ShieldCheck,
  KeyRound,
};

export default function ProcesoPage() {
  return (
    <>
      <Seo
        title="Proceso"
        description="Diez hitos claros desde la primera conversación hasta la entrega en Santiago."
        path="/proceso"
      />
      <div className="section">
        <div className="border-b border-canvas-line pb-6">
          <p className="eyebrow">Proceso · Hoja de ruta</p>
          <h1 className="mt-5 font-display text-[clamp(2.2rem,9vw,5.5rem)] uppercase leading-[0.9] tracking-tight sm:tracking-wider2">
            Diez hitos.<br />
            <em className="font-serif italic font-normal normal-case tracking-normal text-cognac">Cero sorpresas.</em>
          </h1>
          <p className="mt-5 max-w-2xl font-serif text-xl italic text-ink-soft">
            Entre 75 y 120 días desde la primera conversación hasta tu garage en Santiago.
          </p>
        </div>

        <ol className="relative mt-14 space-y-10 border-l border-canvas-line pl-8 sm:pl-12">
          {process.map((p, i) => {
            const Icon = ICONS[p.icon] || ListChecks;
            return (
              <motion.li
                key={p.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3) }}
                className="relative"
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="absolute -left-[42px] flex h-11 w-11 items-center justify-center rounded-full border border-cognac/60 bg-canvas-raised text-cognac shadow-plate sm:-left-[62px] sm:h-12 sm:w-12"
                >
                  <Icon size={18} aria-hidden="true" />
                </motion.span>
                <div className="card overflow-hidden">
                  <div className="flex items-baseline justify-between gap-3 border-b border-canvas-line bg-canvas-raised/40 px-5 py-3">
                    <span className="font-display text-5xl leading-none tracking-wider2 text-cognac sm:text-6xl">
                      {String(p.step).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest2 text-ink-faint">
                      {p.day}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-2xl tracking-wider2 text-ink">{p.title}</h3>
                    <p className="mt-2 font-serif text-lg italic text-ink-soft">{p.description}</p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
