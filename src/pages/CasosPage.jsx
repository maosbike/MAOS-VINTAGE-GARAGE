import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import Seo from '../components/Seo.jsx';
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
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Importaciones cerradas
          </h1>
          <p className="mt-3 text-text-muted">
            Historias reales con números reales. Esto es lo que entregamos.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <article key={c.id} className="card group flex flex-col overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden bg-bg">
                <img
                  src={c.image}
                  alt={`${c.brand} ${c.model}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h2 className="text-lg font-semibold">
                  {c.brand} {c.model}
                </h2>
                <p className="text-sm text-text-muted">{c.summary}</p>
                <ul className="mt-auto space-y-1 border-t border-bg-border pt-3 text-sm">
                  <li className="flex items-center justify-between text-text-muted">
                    <span className="inline-flex items-center gap-2">
                      <Clock size={14} aria-hidden="true" />
                      Importado en
                    </span>
                    <span className="font-medium text-text">{c.daysToDeliver} días</span>
                  </li>
                  <li className="flex items-center justify-between text-text-muted">
                    <span>Costo total</span>
                    <span className="font-medium text-text">{formatCLP(c.totalClp)}</span>
                  </li>
                </ul>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-orange hover:underline"
                >
                  Quiero algo similar
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 card flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">¿Tu caso podría ser el próximo?</h2>
            <p className="mt-1 text-sm text-text-muted">
              Cuéntanos qué auto buscas y armamos un plan a medida.
            </p>
          </div>
          <Link to="/contacto" className="btn-primary">
            Empezar mi pedido
          </Link>
        </div>
      </div>
    </>
  );
}
