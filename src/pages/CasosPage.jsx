import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import CheckerStrip from '../components/CheckerStrip.jsx';
import cases from '../data/cases.json';
import { formatCLP } from '../utils/format.js';

export default function CasosPage() {
  return (
    <>
      <Seo
        title="Casos cerrados"
        description="Importaciones reales de autos clásicos a Chile: historia, costos y tiempos."
        path="/casos"
      />
      <div className="section">
        <div className="max-w-3xl">
          <p className="eyebrow">Casos</p>
          <h1 className="h-display mt-2 text-[clamp(2.2rem,7vw,4.5rem)]">
            Importaciones cerradas
          </h1>
          <p className="mt-3 text-text-muted">
            Historias reales con números reales. Esto es lo que entregamos.
          </p>
        </div>

        <CheckerStrip height="h-2" size="sm" className="mt-10" />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="card group flex flex-col overflow-hidden hover:border-brand-orange/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-bg">
                <img
                  src={c.image}
                  alt={`${c.brand} ${c.model} (foto referencial)`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent"
                />
                <span className="absolute bottom-3 left-3 rounded border border-white/20 bg-black/60 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-white/80 backdrop-blur">
                  Foto referencial
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h2 className="h-display text-2xl text-white">
                  {c.brand} <span className="text-brand-orange">·</span>{' '}
                  <span className="text-text-muted">{c.model}</span>
                </h2>
                <p className="text-sm text-text-muted">{c.summary}</p>
                <ul className="mt-auto space-y-2 border-t border-bg-border pt-3 text-sm">
                  <li className="flex items-center justify-between text-text-muted">
                    <span className="inline-flex items-center gap-2">
                      <Clock size={14} aria-hidden="true" className="text-brand-orange" />
                      Importado en
                    </span>
                    <span className="font-mono font-bold text-text">
                      {c.daysToDeliver} días
                    </span>
                  </li>
                  <li className="flex items-center justify-between text-text-muted">
                    <span>Costo total</span>
                    <span className="font-mono font-bold text-text">
                      {formatCLP(c.totalClp)}
                    </span>
                  </li>
                </ul>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-brand-orange hover:underline"
                >
                  Quiero algo similar
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="card relative mt-16 flex flex-col items-start gap-4 overflow-hidden p-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="absolute inset-y-0 right-0 w-32 checker opacity-10" aria-hidden="true" />
          <div className="relative">
            <h2 className="h-display text-2xl sm:text-3xl">
              ¿Tu caso podría ser el próximo?
            </h2>
            <p className="mt-1 text-sm text-text-muted">
              Cuéntanos qué auto buscas y armamos un plan a medida.
            </p>
          </div>
          <Link to="/contacto" className="btn-primary relative">
            Empezar mi pedido
          </Link>
        </motion.div>
      </div>
    </>
  );
}
