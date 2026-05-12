import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from '../components/Seo.jsx';
import CheckerStrip from '../components/CheckerStrip.jsx';

const PLACEHOLDER_POSTS = [
  {
    id: 'tlc-arancel-0',
    title: 'TLC USA–Chile: cómo lograr arancel 0% en clásicos',
    excerpt: 'Qué documentos pide aduana y cómo evitar pagar el 6% innecesariamente.',
  },
  {
    id: 'caach-checklist',
    title: 'Checklist CAACH: 12 puntos que se revisan',
    excerpt: 'Anticipa los detalles que pueden retrasar tu nacionalización.',
  },
  {
    id: 'roro-vs-container',
    title: 'RoRo vs Container 40\': cuándo conviene cada uno',
    excerpt: 'Costos, tiempos y riesgos según el valor del auto.',
  },
];

export default function BlogPage() {
  return (
    <>
      <Seo
        title="Blog"
        description="Guías y artículos sobre importación de autos clásicos a Chile."
        path="/blog"
      />
      <div className="section">
        <div className="max-w-3xl">
          <p className="eyebrow">Blog</p>
          <h1 className="h-display mt-2 text-[clamp(2.2rem,7vw,4.5rem)]">
            Guías de importación
          </h1>
          <p className="mt-3 text-text-muted">
            Próximamente. Estos son los temas que estamos preparando para ti.
          </p>
        </div>

        <CheckerStrip height="h-2" size="sm" className="mt-10" />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PLACEHOLDER_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card p-6 opacity-90 hover:opacity-100"
            >
              <span className="inline-block rounded border border-brand-orange/40 bg-brand-orange/10 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-brand-orange">
                Próximamente
              </span>
              <h2 className="h-display mt-3 text-2xl text-white">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-text-muted">{post.excerpt}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-sm text-text-muted">
          ¿Tienes una pregunta puntual?{' '}
          <Link to="/contacto" className="font-semibold text-brand-orange hover:underline">
            Escríbenos
          </Link>{' '}
          y la cubrimos en un próximo post.
        </div>
      </div>
    </>
  );
}
