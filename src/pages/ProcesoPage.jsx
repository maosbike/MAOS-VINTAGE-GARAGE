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
import CheckerStrip from '../components/CheckerStrip.jsx';
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
        title="Proceso de importación"
        description="10 hitos claros desde la primera conversación hasta la entrega en Santiago."
        path="/proceso"
      />
      <div className="section">
        <div className="max-w-3xl">
          <p className="eyebrow">Proceso</p>
          <h1 className="h-display mt-2 text-[clamp(2.2rem,7vw,4.5rem)]">
            Cómo importamos<br />tu auto, paso a paso
          </h1>
          <p className="mt-3 text-text-muted">
            10 hitos transparentes. Entre 75 y 120 días desde la primera
            conversación hasta tu garage en Santiago.
          </p>
        </div>

        <CheckerStrip height="h-2" size="sm" className="mt-10" />

        <ol className="relative mt-10 space-y-8 border-l-2 border-bg-border pl-6 sm:pl-10">
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
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute -left-[34px] flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-orange/60 bg-bg text-brand-orange shadow-glow sm:-left-[54px] sm:h-12 sm:w-12"
                >
                  <Icon size={18} aria-hidden="true" />
                </motion.span>
                <div className="card overflow-hidden hover:border-brand-orange/40">
                  <div className="flex items-baseline justify-between gap-3 border-b border-bg-border bg-bg-card/60 px-5 py-3">
                    <span className="h-display text-4xl text-brand-orange sm:text-5xl">
                      {String(p.step).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-muted">
                      {p.day}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="h-display text-2xl text-white">{p.title}</h3>
                    <p className="mt-2 text-sm text-text-muted">
                      {p.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>

        <CheckerStrip height="h-2" size="sm" className="mt-12" animated />
      </div>
    </>
  );
}
