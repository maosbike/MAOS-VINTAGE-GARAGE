import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { formatCLP } from '../utils/format.js';

const STATUS_LABEL = {
  available: {
    text: 'Disponible',
    tone: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  },
  'search-active': {
    text: 'Búsqueda activa',
    tone: 'bg-brand-orange/15 text-brand-orange border-brand-orange/50',
  },
  sold: {
    text: 'Vendido',
    tone: 'bg-bg text-text-muted border-bg-border',
  },
};

export default function CarCard({ car }) {
  const badge = STATUS_LABEL[car.status] || STATUS_LABEL.available;
  const accentFrom = car.accentFrom || '#1a1a1a';
  const accentTo = car.accentTo || '#0a0a0a';

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="card group relative flex flex-col overflow-hidden hover:border-brand-orange/50 hover:shadow-card"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-bg">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model} ${car.year} (foto referencial)`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Duotone gradient overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${accentFrom}40 0%, transparent 30%, ${accentTo}f0 100%)`,
          }}
        />

        {/* Status badge top-left */}
        <span
          className={`absolute left-3 top-3 rounded-full border px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest ${badge.tone}`}
        >
          {badge.text}
        </span>

        {/* Origin flag top-right */}
        <span
          className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/60 px-2 py-1 text-xs backdrop-blur"
          aria-label={car.origin === 'USA' ? 'Estados Unidos' : 'Alemania'}
        >
          {car.origin === 'USA' ? '🇺🇸' : '🇩🇪'}
        </span>

        {/* Foto referencial badge bottom */}
        <span className="absolute bottom-3 left-3 rounded border border-white/20 bg-black/50 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-white/80 backdrop-blur">
          Foto referencial
        </span>

        {/* Title overlaid on photo bottom-right */}
        <div className="absolute bottom-3 right-3 text-right text-white">
          <div className="h-display text-2xl leading-none drop-shadow-lg sm:text-3xl">
            {car.year}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-orange">
            {car.tag}
          </p>
          <h3 className="h-display mt-1 text-2xl text-white">
            {car.brand}
          </h3>
          <p className="text-sm font-semibold uppercase tracking-wider text-text-muted">
            {car.model}
          </p>
        </div>

        <ul className="space-y-1 text-xs text-text-muted">
          <li className="flex items-center gap-2">
            <MapPin size={14} aria-hidden="true" className="text-brand-orange" />
            {car.origin === 'USA' ? 'Estados Unidos' : 'Alemania'}
          </li>
          <li className="flex items-center gap-2">
            <Clock size={14} aria-hidden="true" className="text-brand-orange" />
            {car.leadTimeDays} días puerta a puerta
          </li>
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-bg-border pt-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
              Estimado
            </p>
            <p className="font-mono text-base font-bold text-white">
              {formatCLP(car.estimatedClp)}
            </p>
          </div>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-1 rounded-md border border-brand-orange/40 bg-brand-orange/10 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-brand-orange transition-all hover:bg-brand-orange hover:text-black"
          >
            {car.status === 'sold' ? 'Similar' : 'Pedirlo'}
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
