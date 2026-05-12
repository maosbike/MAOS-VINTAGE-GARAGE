import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from '../components/Seo.jsx';

const POSTS = [
  {
    id: 'tlc-arancel-0',
    issue: 'No. 01',
    title: 'TLC USA–Chile: arancel 0% en clásicos',
    excerpt: 'Qué documentos pide aduana y cómo evitar pagar el 6% innecesariamente.',
  },
  {
    id: 'caach-checklist',
    issue: 'No. 02',
    title: 'Checklist CAACH: 12 puntos críticos',
    excerpt: 'Anticipa los detalles que pueden retrasar tu nacionalización.',
  },
  {
    id: 'roro-vs-container',
    issue: 'No. 03',
    title: 'RoRo vs Container 40\'',
    excerpt: 'Costos, tiempos y riesgos según el valor del auto.',
  },
];

export default function BlogPage() {
  return (
    <>
      <Seo
        title="Diario"
        description="Guías y artículos sobre importación de autos clásicos a Chile."
        path="/blog"
      />
      <div className="section">
        <div className="border-b border-coal-line pb-6">
          <p className="eyebrow">Diario · Guías de campo</p>
          <h1 className="mt-5 font-display text-[clamp(2.2rem,9vw,5.5rem)] uppercase leading-[0.9] tracking-tight sm:tracking-wider2">
            Diario de<br />
            <em className="font-serif italic font-normal normal-case tracking-normal text-cognac">importación</em>
          </h1>
          <p className="mt-5 max-w-2xl font-serif text-xl italic text-ink-soft">
            Próximamente. Estos son los temas que estamos preparando.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center justify-between border-b border-coal-line pb-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest2 text-cognac">
                  {post.issue}
                </span>
                <span className="pill-search">Próximamente</span>
              </div>
              <h2 className="mt-5 font-display text-2xl tracking-wider2 text-ink">
                {post.title}
              </h2>
              <p className="mt-3 font-serif text-base italic text-ink-soft">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 font-serif text-base italic text-ink-soft">
          ¿Tienes una pregunta puntual?{' '}
          <Link to="/contacto" className="not-italic font-bold text-cognac hover:underline">
            Escríbenos
          </Link>{' '}
          y la cubrimos en un próximo número.
        </div>
      </div>
    </>
  );
}
