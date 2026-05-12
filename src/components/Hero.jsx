import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calculator, Car, ShieldCheck, Plane, Clock } from 'lucide-react';
import CheckerStrip from './CheckerStrip.jsx';

const METRICS = [
  { icon: Plane, label: '0 km presenciales para ti' },
  { icon: ShieldCheck, label: '100% asegurado en tránsito' },
  { icon: Clock, label: '75–120 días puerta a puerta' },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 pb-10 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="order-2 flex flex-col justify-center lg:order-1"
        >
          <p className="eyebrow">Importación bajo pedido</p>
          <h1
            id="hero-heading"
            className="h-display mt-4 text-[clamp(2.4rem,8vw,5.5rem)] text-white"
          >
            Trae tu auto clásico desde{' '}
            <motion.span
              initial={{ color: '#fff' }}
              animate={{ color: '#F28100' }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              USA
            </motion.span>{' '}
            o{' '}
            <motion.span
              initial={{ color: '#fff' }}
              animate={{ color: '#F28100' }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Alemania
            </motion.span>
            .
            <br />
            <span className="text-text-muted">Sin sorpresas,</span>{' '}
            <span className="text-text-muted">sin riesgos.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-text-muted sm:text-lg">
            Importación bajo pedido con transparencia total. Tú decides el auto,
            nosotros nos encargamos del resto.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <Link to="/calculadora" className="btn-primary text-sm">
              <Calculator size={18} aria-hidden="true" />
              Calcular costo
            </Link>
            <Link to="/catalogo" className="btn-outline text-sm">
              <Car size={18} aria-hidden="true" />
              Ver autos disponibles
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative order-1 lg:order-2"
        >
          {/* Checker corner accent */}
          <div className="absolute -left-1 -top-1 z-10 h-12 w-12 checker-sm rounded-md sm:h-16 sm:w-16" aria-hidden="true" />
          <div className="absolute -bottom-1 -right-1 z-10 h-12 w-12 checker-sm rounded-md sm:h-16 sm:w-16" aria-hidden="true" />

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-bg-border bg-bg-card shadow-card">
            <img
              src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1400&q=80"
              alt="Auto clásico estacionado bajo el sol"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-bg/80 via-transparent to-transparent"
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white"
            >
              <span className="rounded-full border border-white/30 bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest backdrop-blur">
                Foto referencial
              </span>
              <span className="font-display text-2xl leading-none sm:text-3xl">
                EST. 2025
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <CheckerStrip height="h-3" />

      <div className="bg-bg-card/50">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-6 sm:grid-cols-3 sm:px-6 lg:px-8">
          {METRICS.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-3 text-sm text-text-muted"
            >
              <span className="rounded-md border border-bg-border bg-bg p-2 text-brand-orange">
                <Icon size={18} aria-hidden="true" />
              </span>
              <span className="font-semibold uppercase tracking-wider text-text">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
