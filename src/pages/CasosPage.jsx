import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
        <div className="border-b border-ink-line pb-6">
          <p className="eyebrow">Casos · Importaciones cerradas</p>
          <h1 className="h-display mt-4 text-[clamp(2.4rem,8vw,5.5rem)]">
            Historias reales,<br />
            <em className="italic text-oxblood">números reales.</em>
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-lg italic text-ink-soft">
            Esto es lo que entregamos. Sin filtros.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {cases.map((c, i) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-paper overflow-hidden"
            >
              <div className="grid lg:grid-cols-12">
                {/* Left: big number plate */}
                <div className="flex items-center justify-center border-b border-ink-line bg-paper-deep p-8 text-paper-light lg:col-span-4 lg:border-b-0 lg:border-r">
                  <div className="text-center">
                    <p className="font-mono text-[10px] uppercase tracking-widest2 text-brass">
                      {c.lot}
                    </p>
                    <p className="mt-2 font-display text-7xl font-black leading-none text-paper-light sm:text-8xl">
                      {String(c.year).slice(-2)}
                    </p>
                    <p className="mt-2 font-condensed text-2xl tracking-wider2 text-brass-light">
                      {c.year}
                    </p>
                  </div>
                </div>

                {/* Right: editorial detail */}
                <div className="p-6 sm:p-8 lg:col-span-8">
                  <p className="font-mono text-[10px] uppercase tracking-widest2 text-cognac">
                    {c.originLabel}
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
                    {c.brand}{' '}
                    <em className="font-serif italic text-ink-soft">{c.model}</em>
                  </h2>
                  <p className="mt-4 max-w-xl font-serif text-lg italic leading-relaxed text-ink-soft">
                    "{c.summary}"
                  </p>

                  <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-dashed border-ink-line py-4">
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                        Tiempo de entrega
                      </dt>
                      <dd className="mt-1 font-display text-2xl font-bold text-ink">
                        {c.daysToDeliver} <span className="font-mono text-sm font-normal text-ink-muted">días</span>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                        Costo total final
                      </dt>
                      <dd className="mt-1 font-display text-2xl font-bold text-ink">
                        {formatCLP(c.totalClp)}
                      </dd>
                    </div>
                  </dl>

                  <Link
                    to="/contacto"
                    className="mt-5 inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-widest2 text-oxblood hover:text-oxblood-dark"
                  >
                    Quiero algo similar
                    <ArrowRight size={12} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="card-paper mt-16 flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h2 className="font-display text-3xl font-bold">
              ¿Tu caso podría ser el próximo?
            </h2>
            <p className="mt-2 font-serif text-lg italic text-ink-soft">
              Cuéntanos qué auto buscas y armamos un plan a medida.
            </p>
          </div>
          <Link to="/contacto" className="btn-primary shrink-0">
            Empezar mi pedido
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </>
  );
}
