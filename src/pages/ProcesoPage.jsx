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
        title="Proceso de importación"
        description="10 hitos claros desde la primera conversación hasta la entrega en Santiago."
        path="/proceso"
      />
      <div className="section">
        <div className="max-w-3xl">
          <p className="eyebrow">Proceso</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Cómo importamos tu auto, paso a paso
          </h1>
          <p className="mt-3 text-text-muted">
            10 hitos transparentes. Entre 75 y 120 días desde la primera
            conversación hasta tu garage en Santiago.
          </p>
        </div>

        <ol className="relative mt-14 space-y-10 border-l border-bg-border pl-8 sm:pl-12">
          {process.map((p, i) => {
            const Icon = ICONS[p.icon] || ListChecks;
            return (
              <motion.li
                key={p.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3) }}
                className="relative"
              >
                <span className="absolute -left-[42px] flex h-9 w-9 items-center justify-center rounded-full border border-bg-border bg-bg-card text-brand-orange sm:-left-[58px] sm:h-11 sm:w-11">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <div className="card p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-mono text-3xl font-bold text-brand-orange">
                      {String(p.step).padStart(2, '0')}
                    </span>
                    <span className="text-xs uppercase tracking-wide text-text-muted">
                      {p.day}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-text-muted">
                    {p.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
