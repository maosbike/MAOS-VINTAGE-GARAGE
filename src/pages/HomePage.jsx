import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Wrench, ArrowRight } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import Hero from '../components/Hero.jsx';
import Calculadora from '../components/Calculadora.jsx';
import CheckerStrip from '../components/CheckerStrip.jsx';

const VALUE_PROPS = [
  {
    icon: Eye,
    title: 'Transparencia total',
    text: 'Cada peso desglosado. Sabes exactamente cuánto vale tu auto puesto en Santiago antes de firmar.',
  },
  {
    icon: ShieldCheck,
    title: 'Sin riesgos',
    text: 'Inspección PPI con video y 80 fotos antes de pagar. Seguro full en tránsito.',
  },
  {
    icon: Wrench,
    title: 'Soporte post-entrega',
    text: 'Te ayudamos con la patente, primer service y red de mecánicos especializados.',
  },
];

export default function HomePage() {
  return (
    <>
      <Seo path="/" />
      <Hero />

      <section className="section">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Por qué Maos Vintage Garage</p>
          <h2 className="h-display mt-3 text-[clamp(2rem,6vw,4rem)]">
            La forma fácil y segura<br />de importar un clásico
          </h2>
          <p className="mt-4 text-text-muted">
            Hacemos lo que nadie quiere hacer: buscar, inspeccionar, embarcar y
            nacionalizar. Tú solo decides el auto.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {VALUE_PROPS.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card relative overflow-hidden p-6 hover:border-brand-orange/40"
            >
              <span className="mb-4 inline-flex rounded-md border border-bg-border bg-bg p-3 text-brand-orange">
                <Icon size={24} aria-hidden="true" />
              </span>
              <h3 className="h-display text-2xl text-white">{title}</h3>
              <p className="mt-2 text-sm text-text-muted">{text}</p>
              <div className="absolute -right-2 -top-2 h-10 w-10 checker-sm rounded-sm opacity-30" aria-hidden="true" />
            </motion.div>
          ))}
        </div>
      </section>

      <CheckerStrip height="h-3" />

      <Calculadora variant="home" />

      <CheckerStrip height="h-3" />

      <section className="section">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card relative flex flex-col items-start gap-4 overflow-hidden p-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="absolute inset-y-0 right-0 w-32 checker opacity-10" aria-hidden="true" />
          <div className="relative">
            <p className="eyebrow">¿Listo para empezar?</p>
            <h2 className="h-display mt-2 text-3xl sm:text-4xl">
              Conversemos sobre<br />tu auto ideal
            </h2>
            <p className="mt-2 max-w-xl text-text-muted">
              Cuéntanos qué buscas y en menos de 7 días te mostramos 3
              candidatos reales.
            </p>
          </div>
          <Link to="/contacto" className="btn-primary relative shrink-0">
            Empezar
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
