import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import CarImage from './CarImage.jsx';
import { formatCLP } from '../utils/format.js';

const ORIGIN_CODE = {
  USA: 'US',
  EU: 'EU',
  UK: 'UK',
  JP: 'JP',
  CA: 'CA',
  AU: 'AU',
  OTHER: 'XX',
};

function StatusPill({ status }) {
  if (status === 'available') return <span className="pill-avail">Disponible</span>;
  if (status === 'search-active') return <span className="pill-search">Búsqueda activa</span>;
  return <span className="pill-sold">Vendido</span>;
}

export default function CarCard({ car }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="card card-hover group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <CarImage
          src={car.image}
          brand={car.brand}
          model={car.model}
          year={car.year}
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        />
        {/* Top metadata band over photo */}
        <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-3">
          <span className="origin-code">{ORIGIN_CODE[car.origin] || 'XX'}</span>
          <StatusPill status={car.status} />
        </div>
        {/* Bottom: lot + year over photo */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-cream-dark/80">
              Lote {car.lot}
            </p>
            <p className="font-display text-5xl leading-none text-ink drop-shadow-lg sm:text-6xl">
              {car.year}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest2 text-cognac">
            {car.tag}
          </p>
          <h3 className="mt-1 font-display text-3xl text-ink">{car.brand}</h3>
          <p className="font-serif text-lg italic text-ink-soft">{car.model}</p>
        </div>

        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 border-y border-canvas-line py-3 text-[11px]">
          <div className="flex justify-between gap-2">
            <dt className="font-mono uppercase tracking-widest2 text-ink-faint">Motor</dt>
            <dd className="font-mono text-ink truncate text-right">{car.engine}</dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt className="font-mono uppercase tracking-widest2 text-ink-faint">Caja</dt>
            <dd className="font-mono text-ink truncate text-right">{car.transmission}</dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt className="font-mono uppercase tracking-widest2 text-ink-faint">Origen</dt>
            <dd className="font-mono text-ink truncate text-right">{car.originLabel}</dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt className="font-mono uppercase tracking-widest2 text-ink-faint">Plazo</dt>
            <dd className="font-mono text-ink truncate text-right">{car.leadTimeDays} días</dd>
          </div>
        </dl>

        <div className="mt-auto flex items-end justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-faint">
              Estimado puesto en Santiago
            </p>
            <p className="mt-1 font-display text-3xl text-ink">
              {formatCLP(car.estimatedClp)}
            </p>
          </div>
          <Link
            to="/contacto"
            aria-label={`Pedir ${car.brand} ${car.model}`}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-cognac/60 bg-cognac/10 text-cognac transition-all hover:bg-cognac hover:text-canvas"
          >
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
