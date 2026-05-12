import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, ShieldCheck, Wrench, Clock } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import Hero from '../components/Hero.jsx';
import Calculadora from '../components/Calculadora.jsx';
import CarCard from '../components/CarCard.jsx';
import cars from '../data/cars.json';

const VALUES = [
  { n: '01', icon: Eye, title: 'Transparencia', text: 'Calculadora pública con cada peso desglosado antes de firmar nada. Sin letra chica.' },
  { n: '02', icon: ShieldCheck, title: 'Sin riesgos', text: 'Inspección PPI con 80 fotos y video antes de transferir. Seguro full en tránsito.' },
  { n: '03', icon: Clock, title: 'Plazos definidos', text: 'Entre 75 y 120 días puerta a puerta. Con reporte semanal del estado.' },
  { n: '04', icon: Wrench, title: 'Post-entrega', text: 'Patente, primer service y red de mecánicos especializados. No te soltamos la mano.' },
];

export default function HomePage() {
  const featured = cars.filter((c) => c.status === 'available').slice(0, 3);

  return (
    <>
      <Seo path="/" />
      <Hero />

      {/* Values strip */}
      <section className="border-y border-coal-line bg-coal-raised">
        <div className="mx-auto grid max-w-7xl gap-px bg-coal-line sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ n, icon: Icon, title, text }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col gap-4 bg-coal p-8 transition-colors hover:bg-coal-raised"
            >
              <div className="flex items-baseline justify-between">
                <Icon size={24} className="text-cognac" aria-hidden="true" />
                <span className="font-display text-3xl tracking-wider2 text-coal-line group-hover:text-cognac/40">
                  {n}
                </span>
              </div>
              <h3 className="font-display text-2xl tracking-wider2 text-ink">{title}</h3>
              <p className="font-serif text-base italic text-ink-soft">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured cars */}
      <section className="section">
        <div className="mb-10 flex items-end justify-between gap-4 border-b border-coal-line pb-6">
          <div>
            <p className="eyebrow">Lotes destacados</p>
            <h2 className="mt-3 font-display text-[clamp(2rem,5vw,4rem)] uppercase tracking-wider2">
              En pista esta semana
            </h2>
          </div>
          <Link to="/catalogo" className="btn-ghost shrink-0">
            Ver catálogo
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <CarCard car={c} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote breaker */}
      <section className="relative border-y border-coal-line bg-coal-raised">
        <div className="checker text-ink/95 h-1 bg-coal" aria-hidden="true" />
        <div className="section text-center">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <p className="font-serif text-3xl italic leading-tight text-ink sm:text-5xl">
              "Un clásico no se compra dos veces.<br />Te ayudamos a hacerlo bien la primera."
            </p>
            <footer className="mt-7 font-mono text-[11px] uppercase tracking-widest2 text-cognac">
              — Maos Vintage Garage
            </footer>
          </motion.blockquote>
        </div>
        <div className="checker text-ink/95 h-1 bg-coal" aria-hidden="true" />
      </section>

      <Calculadora variant="home" />

      {/* Final CTA */}
      <section className="border-t border-coal-line bg-coal-raised">
        <div className="section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card flex flex-col items-start justify-between gap-6 overflow-hidden p-8 sm:flex-row sm:items-center sm:p-12"
          >
            <div>
              <p className="eyebrow">Listo para empezar</p>
              <h2 className="mt-4 font-display text-4xl tracking-wider2 sm:text-5xl">
                Cuéntanos qué auto sueñas.
              </h2>
              <p className="mt-3 font-serif text-xl italic text-ink-soft">
                En menos de 7 días te mostramos 3 candidatos reales en el país que prefieras.
              </p>
            </div>
            <Link to="/contacto" className="btn-primary shrink-0">
              Empezar mi pedido
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
