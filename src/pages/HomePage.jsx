import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Wrench, ArrowRight } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import Hero from '../components/Hero.jsx';
import Calculadora from '../components/Calculadora.jsx';

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
          <p className="eyebrow">Por qué MaosCars</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            La forma fácil y segura de importar un clásico
          </h2>
          <p className="mt-4 text-text-muted">
            Hacemos lo que nadie quiere hacer: buscar, inspeccionar, embarcar y
            nacionalizar. Tú solo decides el auto.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {VALUE_PROPS.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="card p-6"
            >
              <span className="mb-4 inline-flex rounded-md border border-bg-border bg-bg p-2 text-brand-orange">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-text-muted">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Calculadora variant="home" />

      <section className="section">
        <div className="card flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow">¿Listo para empezar?</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Conversemos sobre tu auto ideal
            </h2>
            <p className="mt-2 max-w-xl text-text-muted">
              Cuéntanos qué buscas y en menos de 7 días te mostramos 3
              candidatos reales.
            </p>
          </div>
          <Link to="/contacto" className="btn-primary shrink-0">
            Empezar
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
