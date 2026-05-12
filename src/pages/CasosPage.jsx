import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import CarImage from '../components/CarImage.jsx';
import cases from '../data/cases.json';
import { formatCLP } from '../utils/format.js';

export default function CasosPage() {
  return (
    <>
      <Seo
        title="Casos"
        description="Importaciones reales de autos clásicos a Chile: historia, costos y tiempos."
        path="/casos"
      />
      <div className="section">
        <div className="border-b border-canvas-line pb-6">
          <p className="eyebrow">Casos · Importaciones cerradas</p>
          <h1 className="mt-5 font-display text-[clamp(2.2rem,9vw,5.5rem)] uppercase leading-[0.9] tracking-tight sm:tracking-wider2">
            Historias reales,<br />
            <em className="font-serif italic font-normal normal-case tracking-normal text-cognac">números reales.</em>
          </h1>
          <p className="mt-5 max-w-2xl font-serif text-xl italic text-ink-soft">
            Esto es lo que entregamos. Sin filtros.
          </p>
        </div>

        <div className="mt-14 space-y-12">
          {cases.map((c, i) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card overflow-hidden"
            >
              <div className="grid lg:grid-cols-12">
                <div className="relative aspect-[16/10] overflow-hidden lg:col-span-7 lg:aspect-auto">
                  <CarImage
                    src={c.image}
                    brand={c.brand}
                    model={c.model}
                    year={c.year}
                    className="absolute inset-0"
                  />
                  <span className="absolute left-4 top-4 origin-code">{c.lot}</span>
                </div>

                <div className="flex flex-col justify-between gap-6 border-t border-canvas-line p-6 sm:p-8 lg:col-span-5 lg:border-l lg:border-t-0">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest2 text-cognac">
                      {c.originLabel}
                    </p>
                    <h2 className="mt-2 font-display text-4xl uppercase tracking-wider2 leading-[0.95] text-ink sm:text-5xl">
                      {c.brand}
                    </h2>
                    <p className="font-serif text-2xl italic text-ink-soft">
                      {c.model} · {c.year}
                    </p>
                    <p className="mt-5 font-serif text-lg italic leading-relaxed text-ink-soft">
                      "{c.summary}"
                    </p>
                  </div>

                  <dl className="grid grid-cols-2 gap-4 border-y border-canvas-line py-4">
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-widest2 text-ink-faint">
                        Tiempo entrega
                      </dt>
                      <dd className="mt-1 font-display text-3xl tracking-wider2 text-ink">
                        {c.daysToDeliver} <span className="text-base text-ink-muted">días</span>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-widest2 text-ink-faint">
                        Costo total
                      </dt>
                      <dd className="mt-1 font-display text-2xl tracking-wider2 text-ink">
                        {formatCLP(c.totalClp)}
                      </dd>
                    </div>
                  </dl>

                  <Link
                    to="/contacto"
                    className="btn-ghost self-start px-0"
                  >
                    Quiero algo similar
                    <ArrowRight size={14} aria-hidden="true" />
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
          className="card mt-20 flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10"
        >
          <div>
            <h2 className="font-display text-3xl uppercase tracking-wider2 sm:text-4xl">
              ¿Tu caso será el próximo?
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
