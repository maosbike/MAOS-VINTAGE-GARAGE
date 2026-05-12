import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CarSilhouette from './CarSilhouette.jsx';
import { ORIGIN_BY_CODE } from '../utils/cost.js';
import { formatCLP } from '../utils/format.js';

const STATUS = {
  available: { text: 'Disponible', tone: 'border-racing-green text-racing-green bg-racing-green/5' },
  'search-active': { text: 'Búsqueda activa', tone: 'border-oxblood text-oxblood bg-oxblood/5' },
  sold: { text: 'Vendido', tone: 'border-ink-muted text-ink-muted bg-paper-dark' },
};

export default function CarCard({ car }) {
  const badge = STATUS[car.status] || STATUS.available;
  const accent = car.accent || '#6b1f1f';
  const origin = ORIGIN_BY_CODE[car.origin];

  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="card-paper group relative flex flex-col overflow-hidden"
    >
      {/* TOP BAND — lot number + status */}
      <div
        className="flex items-center justify-between border-b border-ink-line/70 px-5 py-3 text-paper-light"
        style={{ backgroundColor: accent }}
      >
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest2">
          Lote · {car.lot}
        </span>
        <span className={`stamp ${badge.tone} !bg-paper-light/95 !border-white/20`}>
          {badge.text}
        </span>
      </div>

      {/* HEADER — year + brand/model (typographic, no fake photo) */}
      <div className="relative px-5 pt-6 pb-3">
        <p className="font-mono text-[10px] uppercase tracking-widest2 text-cognac">
          {car.tag}
        </p>
        <div className="mt-1 flex items-baseline gap-3">
          <span
            className="font-display text-[64px] font-black leading-none"
            style={{ color: accent }}
          >
            {String(car.year).slice(-2)}
          </span>
          <span className="font-mono text-xs text-ink-muted">
            ′{String(car.year).slice(-2)} · {car.year}
          </span>
        </div>
        <h3 className="mt-3 font-display text-2xl font-bold text-ink">
          {car.brand}
        </h3>
        <p className="font-serif text-lg italic text-ink-soft">
          {car.model}
        </p>
      </div>

      {/* SILHOUETTE — generic vintage shape; tinted, NEVER misleading */}
      <div className="relative mx-5 mb-3 overflow-hidden rounded-sm border border-ink-line bg-paper-dark/50">
        <CarSilhouette
          bodyType={car.bodyType}
          color={accent}
          className="h-32 w-full sm:h-36"
        />
        <p className="absolute bottom-1 right-2 font-mono text-[8px] uppercase tracking-widest2 text-ink-muted">
          Silueta referencial · {car.bodyType}
        </p>
      </div>

      {/* SPEC LIST — auction ledger */}
      <dl className="grid grid-cols-2 gap-x-4 gap-y-1 border-y border-dashed border-ink-line/60 px-5 py-3 text-[11px]">
        <div className="flex justify-between">
          <dt className="font-mono uppercase tracking-widest2 text-ink-muted">Origen</dt>
          <dd className="font-mono font-semibold text-ink">
            {origin?.flag} {origin?.label.split(' ')[0]}
          </dd>
        </div>
        <div className="flex justify-between">
          <dt className="font-mono uppercase tracking-widest2 text-ink-muted">Motor</dt>
          <dd className="font-mono font-semibold text-ink">{car.engine}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="font-mono uppercase tracking-widest2 text-ink-muted">Caja</dt>
          <dd className="font-mono font-semibold text-ink">{car.transmission}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="font-mono uppercase tracking-widest2 text-ink-muted">Plazo</dt>
          <dd className="font-mono font-semibold text-ink">{car.leadTimeDays} días</dd>
        </div>
      </dl>

      {/* PRICE + CTA */}
      <div className="flex flex-1 items-end justify-between gap-3 px-5 py-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
            Estimado puesto en Santiago
          </p>
          <p className="font-display text-2xl font-bold text-ink">
            {formatCLP(car.estimatedClp)}
          </p>
        </div>
        <Link
          to="/contacto"
          className="inline-flex items-center gap-1 rounded-sm border border-ink bg-ink px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-widest2 text-paper-light transition-all hover:bg-oxblood hover:border-oxblood"
        >
          {car.status === 'sold' ? 'Similar' : 'Pedirlo'}
          <ArrowRight size={12} aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}
