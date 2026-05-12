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
        <div className="border-b border-ink-line pb-6">
          <p className="eyebrow">Proceso · Hoja de ruta</p>
          <h1 className="h-display mt-4 text-[clamp(2.4rem,8vw,5.5rem)]">
            Diez hitos.<br />
            <em className="italic text-oxblood">Cero sorpresas.</em>
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-lg italic text-ink-soft">
            Entre 75 y 120 días desde la primera conversación hasta tu garage en Santiago.
          </p>
        </div>

        <ol className="relative mt-12 space-y-10 border-l-2 border-ink-line pl-8 sm:pl-12">
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
                  whileHover={{ scale: 1.08 }}
                  className="absolute -left-[44px] flex h-11 w-11 items-center justify-center rounded-full border-2 border-oxblood bg-paper-light text-oxblood shadow-paper sm:-left-[64px] sm:h-12 sm:w-12"
                >
                  <Icon size={18} aria-hidden="true" />
                </motion.span>
                <div className="card-paper overflow-hidden">
                  <div className="flex items-baseline justify-between gap-3 border-b border-dashed border-ink-line bg-paper-dark/30 px-5 py-3">
                    <span className="font-condensed text-5xl font-normal leading-none text-cognac sm:text-6xl">
                      {String(p.step).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest2 text-ink-muted">
                      {p.day}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-2xl font-bold text-ink">{p.title}</h3>
                    <p className="mt-2 font-serif text-base text-ink-soft">{p.description}</p>
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
