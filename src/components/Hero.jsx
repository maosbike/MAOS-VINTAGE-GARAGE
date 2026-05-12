import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calculator, Car, ArrowRight } from 'lucide-react';
import CarImage from './CarImage.jsx';

const ORIGIN_TICKER = [
  'Estados Unidos',
  'Alemania',
  'Italia',
  'Reino Unido',
  'Japón',
  'Francia',
  'Canadá',
  'Australia',
  'España',
  'Suiza',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      {/* Magazine header bar */}
      <div className="border-b border-canvas-line bg-canvas-raised">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted sm:px-6 lg:px-8">
          <span className="text-brass">VOL. I · No. 01</span>
          <span className="hidden sm:inline">Importación bajo pedido · Edición Chile</span>
          <span className="text-brass">MMXXV</span>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <p className="eyebrow">Importación bajo pedido a Chile</p>

          <h1
            id="hero-heading"
            className="mt-6 break-words text-[clamp(2.2rem,10vw,6.5rem)] font-display uppercase leading-[0.9] text-ink tracking-tight sm:mt-8 sm:leading-[0.88] sm:tracking-wider2"
          >
            <span className="block">El clásico</span>
            <span className="block">
              que <em className="font-serif italic font-normal normal-case tracking-normal text-cognac">soñabas</em>,
            </span>
            <span className="block">
              en tu garage.
            </span>
          </h1>

          <p className="mt-6 max-w-xl font-serif text-xl italic leading-snug text-ink-soft sm:mt-8 sm:text-2xl lg:text-3xl">
            Lo buscamos, lo inspeccionamos, lo embarcamos y te lo entregamos. Tu rol: elegir.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link to="/calculadora" className="btn-primary">
              <Calculator size={14} aria-hidden="true" />
              Cotizar mi auto
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/catalogo" className="btn-outline">
              <Car size={14} aria-hidden="true" />
              Ver catálogo
            </Link>
          </motion.div>

          {/* Origin ticker */}
          <div className="mt-12 overflow-hidden border-y border-canvas-line py-3">
            <div className="flex items-center gap-3">
              <span className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-widest2 text-ink-faint">
                Desde
              </span>
              <div className="relative flex-1 overflow-hidden">
                <motion.div
                  className="flex items-center gap-8 whitespace-nowrap"
                  animate={{ x: ['0%', '-50%'] }}
                  transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                >
                  {[...ORIGIN_TICKER, ...ORIGIN_TICKER].map((label, i) => (
                    <span key={`${label}-${i}`} className="flex items-center gap-6 font-display text-2xl tracking-wider2 text-ink-soft">
                      {label}
                      <span className="h-1 w-1 rounded-full bg-cognac" aria-hidden="true" />
                    </span>
                  ))}
                </motion.div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-canvas to-transparent" aria-hidden="true" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-canvas to-transparent" aria-hidden="true" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: layered photo + metadata frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
        >
          {/* Corner checker accents */}
          <div className="absolute -left-2 -top-2 z-10 h-8 w-8 checker text-ink/70 bg-canvas-raised sm:h-10 sm:w-10" aria-hidden="true" />
          <div className="absolute -bottom-2 -right-2 z-10 h-8 w-8 checker text-ink/70 bg-canvas-raised sm:h-10 sm:w-10" aria-hidden="true" />

          <div className="relative aspect-[4/3] overflow-hidden border border-canvas-line shadow-plate sm:aspect-[4/3] lg:aspect-[4/5]">
            <CarImage
              src="https://commons.wikimedia.org/wiki/Special:FilePath/1969%20red%20Chevrolet%20Camaro%20SS%20front.JPG?width=1400"
              brand="Chevrolet"
              model="Camaro SS"
              year={1969}
              eager
              className="absolute inset-0"
            />
            {/* Editorial caption */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-brass">
                Portada · MVG-006
              </p>
              <p className="mt-1 font-display text-2xl leading-none text-ink sm:text-3xl lg:text-4xl">
                Chevrolet Camaro SS
              </p>
              <p className="font-serif text-sm italic text-ink-soft sm:text-base">
                1969 · Disponible
              </p>
            </div>
          </div>

          {/* Floating stat plate */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute -bottom-6 -left-4 hidden border border-cognac/40 bg-canvas-raised px-4 py-3 shadow-plate lg:block"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-cognac">Tiempo promedio</p>
            <p className="font-display text-3xl text-ink">75–120 días</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom checker accent */}
      <div className="checker text-ink h-2 bg-canvas-raised" aria-hidden="true" />
    </section>
  );
}
