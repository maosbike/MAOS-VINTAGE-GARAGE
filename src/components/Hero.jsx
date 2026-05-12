import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calculator, Car } from 'lucide-react';

const ORIGINS = ['USA', 'Alemania', 'Italia', 'Reino Unido', 'Japón', 'Francia', 'Canadá'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-line" aria-labelledby="hero-heading">
      {/* Magazine cover header strip */}
      <div className="border-b border-ink-line bg-paper-deep text-paper-light">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 font-mono text-[10px] uppercase tracking-widest2 sm:px-6 lg:px-8">
          <span className="text-brass">Vol. 01 · No. 01</span>
          <span className="hidden text-paper-light/70 sm:inline">Importación de autos clásicos · Edición Chile</span>
          <span className="text-brass">MMXXV</span>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-12 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-12 lg:px-8 lg:gap-12 lg:pt-24">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Importación bajo pedido · Desde 1 país, hacia tu garage
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-display mt-6 text-[clamp(2.6rem,8.5vw,6.5rem)] text-ink"
          >
            El clásico que{' '}
            <span className="italic text-oxblood">soñabas</span>,<br />
            puesto en tu{' '}
            <span className="relative inline-block">
              garage
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ originX: 0 }}
                className="absolute -bottom-1 left-0 right-0 h-[6px] bg-cognac"
                aria-hidden="true"
              />
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-7 max-w-xl font-serif text-xl leading-relaxed text-ink-soft sm:text-2xl"
          >
            Lo buscamos, lo inspeccionamos, lo embarcamos y te lo entregamos en Chile.
            <em className="text-oxblood"> Transparencia total. Sin sorpresas.</em>
          </motion.p>

          {/* Origin marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2 border-y border-ink-line py-3"
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest2 text-ink-muted">
              Desde:
            </span>
            {ORIGINS.map((o, i) => (
              <span key={o} className="flex items-center gap-2">
                <span className="font-condensed text-base uppercase tracking-wider2 text-ink">
                  {o}
                </span>
                {i < ORIGINS.length - 1 && (
                  <span className="text-oxblood" aria-hidden="true">·</span>
                )}
              </span>
            ))}
            <span className="font-condensed text-base uppercase tracking-wider2 text-cognac">
              + cualquier país del mundo
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link to="/calculadora" className="btn-primary text-xs">
              <Calculator size={16} aria-hidden="true" />
              Cotizar mi auto
            </Link>
            <Link to="/catalogo" className="btn-outline text-xs">
              <Car size={16} aria-hidden="true" />
              Ver catálogo
            </Link>
          </motion.div>
        </div>

        {/* Right column — vintage "ficha" panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5"
        >
          <div className="card-paper p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-ink-line pb-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest2 text-oxblood">
                Manual del propietario
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                Edición 2025
              </span>
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold text-ink">
              ¿Por qué importar<br />con nosotros?
            </h2>
            <ul className="mt-5 space-y-4">
              {[
                ['01', 'Transparencia total', 'Cada peso desglosado antes de firmar.'],
                ['02', 'Inspección previa', 'PPI con 80 fotos y video antes de pagar.'],
                ['03', 'Seguro en tránsito', '100% asegurado puerta a puerta.'],
                ['04', 'Plazos definidos', '75–120 días puerta a puerta.'],
              ].map(([n, title, desc]) => (
                <li key={n} className="flex gap-3 border-b border-dashed border-ink-line/60 pb-3 last:border-b-0">
                  <span className="font-condensed text-3xl font-normal leading-none text-cognac">
                    {n}
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-ink">{title}</p>
                    <p className="font-serif text-sm italic text-ink-muted">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-ink-line pt-4">
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                Una empresa del grupo MaosBike
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
