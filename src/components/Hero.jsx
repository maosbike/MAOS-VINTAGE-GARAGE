import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calculator, Car, ShieldCheck, Plane, Clock } from 'lucide-react';

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
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-12 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col justify-center"
        >
          <p className="eyebrow">Importación bajo pedido</p>
          <h1
            id="hero-heading"
            className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Trae tu auto clásico desde{' '}
            <span className="text-brand-orange">USA</span> o{' '}
            <span className="text-brand-orange">Alemania</span>. Sin sorpresas,
            sin riesgos.
          </h1>
          <p className="mt-5 max-w-xl text-base text-text-muted sm:text-lg">
            Importación bajo pedido con transparencia total. Tú decides el auto,
            nosotros nos encargamos del resto.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/calculadora" className="btn-primary">
              <Calculator size={18} aria-hidden="true" />
              Calcular costo
            </Link>
            <Link to="/catalogo" className="btn-outline">
              <Car size={18} aria-hidden="true" />
              Ver autos disponibles
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-bg-border bg-bg-card">
            <img
              src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80"
              alt="Auto clásico Ford Mustang restaurado"
              loading="eager"
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-bg/60 via-transparent to-transparent"
            />
          </div>
        </motion.div>
      </div>

      <div className="border-y border-bg-border bg-bg-card/50">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-6 sm:grid-cols-3 sm:px-6 lg:px-8">
          {METRICS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 text-sm text-text-muted"
            >
              <span className="rounded-md border border-bg-border bg-bg p-2 text-brand-orange">
                <Icon size={18} aria-hidden="true" />
              </span>
              <span className="font-medium text-text">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
