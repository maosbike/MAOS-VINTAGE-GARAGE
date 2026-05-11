import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { formatCLP } from '../utils/format.js';

const STATUS_LABEL = {
  available: { text: 'Disponible', tone: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' },
  'search-active': { text: 'Búsqueda activa', tone: 'bg-brand-orange/10 text-brand-orange border-brand-orange/40' },
  sold: { text: 'Importado · Vendido', tone: 'bg-bg text-text-muted border-bg-border' },
};

export default function CarCard({ car }) {
  const badge = STATUS_LABEL[car.status] || STATUS_LABEL.available;
  return (
    <article className="card group flex flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-bg">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model} ${car.year}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 rounded-full border px-2.5 py-1 text-xs font-medium ${badge.tone}`}
        >
          {badge.text}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="text-xs uppercase tracking-wide text-text-muted">{car.tag}</p>
          <h3 className="mt-1 text-lg font-semibold">
            {car.brand} {car.model}
          </h3>
          <p className="text-sm text-text-muted">{car.year}</p>
        </div>
        <ul className="space-y-1 text-xs text-text-muted">
          <li className="flex items-center gap-2">
            <MapPin size={14} aria-hidden="true" />
            Origen: {car.origin === 'USA' ? 'Estados Unidos' : 'Alemania'}
          </li>
          <li className="flex items-center gap-2">
            <Clock size={14} aria-hidden="true" />
            {car.leadTimeDays} días estimados puerta a puerta
          </li>
        </ul>
        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <span className="font-semibold">{formatCLP(car.estimatedClp)}</span>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-orange hover:underline"
          >
            {car.status === 'sold' ? 'Buscar similar' : 'Pedirlo'}
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
