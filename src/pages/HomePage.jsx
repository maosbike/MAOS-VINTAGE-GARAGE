import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import Hero from '../components/Hero.jsx';
import Calculadora from '../components/Calculadora.jsx';

const VALUES = [
  {
    n: '01',
    title: 'Transparencia',
    text: 'Cada peso desglosado en una calculadora pública antes de que firmes nada. Sin letra chica.',
  },
  {
    n: '02',
    title: 'Sin riesgos',
    text: 'Inspección PPI con video y 80 fotos antes de transferir. Seguro full en tránsito.',
  },
  {
    n: '03',
    title: 'Post-entrega',
    text: 'Te ayudamos con la patente, el primer service y la red de mecánicos especializados.',
  },
];

export default function HomePage() {
  return (
    <>
      <Seo path="/" />
      <Hero />

      {/* Editorial section — values */}
      <section className="border-b border-ink-line bg-paper">
        <div className="section">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">Filosofía</p>
              <h2 className="h-display mt-4 text-[clamp(2rem,5vw,3.5rem)]">
                La forma <em className="italic text-oxblood">honesta</em> de importar.
              </h2>
              <p className="mt-5 font-serif text-lg italic text-ink-soft">
                Hacemos lo que nadie quiere hacer: buscar, inspeccionar, embarcar y nacionalizar. Tú decides el auto, nosotros nos encargamos del resto.
              </p>
            </div>

            <ol className="space-y-8 lg:col-span-8">
              {VALUES.map(({ n, title, text }, i) => (
                <motion.li
                  key={n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="grid grid-cols-[auto_1fr] gap-6 border-t border-ink-line pt-6 first:border-t-0 first:pt-0 sm:gap-10"
                >
                  <span className="font-condensed text-6xl leading-none text-cognac sm:text-7xl">
                    {n}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl font-bold text-ink">{title}</h3>
                    <p className="mt-2 max-w-xl font-serif text-lg text-ink-soft">{text}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Editorial divider quote */}
      <section className="border-b border-ink-line bg-paper-deep text-paper-light">
        <div className="section text-center">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <p className="font-serif text-3xl italic leading-tight sm:text-5xl">
              "Un clásico no se compra dos veces. Te ayudamos a hacerlo bien la primera."
            </p>
            <footer className="mt-6 font-mono text-[11px] uppercase tracking-widest2 text-brass">
              — Maos Vintage Garage
            </footer>
          </motion.blockquote>
        </div>
      </section>

      <div className="section">
        <Calculadora variant="home" />
      </div>

      {/* Final CTA */}
      <section className="border-y border-ink-line bg-paper-dark/40">
        <div className="section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-paper flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-12"
          >
            <div>
              <p className="eyebrow">Listo para empezar</p>
              <h2 className="h-display mt-3 text-4xl sm:text-5xl">
                Cuéntanos qué auto sueñas.
              </h2>
              <p className="mt-3 font-serif text-lg italic text-ink-soft">
                En menos de 7 días te mostramos 3 candidatos reales en el país que prefieras.
              </p>
            </div>
            <Link to="/contacto" className="btn-primary shrink-0">
              Empezar mi pedido
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
