import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from '../components/Seo.jsx';

const PLACEHOLDER_POSTS = [
  {
    id: 'tlc-arancel-0',
    issue: 'No. 01',
    title: 'TLC USA–Chile: cómo lograr arancel 0% en clásicos',
    excerpt: 'Qué documentos pide aduana y cómo evitar pagar el 6% innecesariamente.',
  },
  {
    id: 'caach-checklist',
    issue: 'No. 02',
    title: 'Checklist CAACH: 12 puntos que se revisan',
    excerpt: 'Anticipa los detalles que pueden retrasar tu nacionalización.',
  },
  {
    id: 'roro-vs-container',
    issue: 'No. 03',
    title: 'RoRo vs Container 40\': cuándo conviene cada uno',
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
        <div className="border-b border-ink-line pb-6">
          <p className="eyebrow">Diario · Guías de campo</p>
          <h1 className="h-display mt-4 text-[clamp(2.4rem,8vw,5.5rem)]">
            Diario de<br />
            <em className="italic text-oxblood">importación</em>
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-lg italic text-ink-soft">
            Próximamente. Estos son los temas que estamos preparando para ti.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {PLACEHOLDER_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-paper p-6"
            >
              <div className="flex items-center justify-between border-b border-dashed border-ink-line pb-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest2 text-cognac">
                  {post.issue}
                </span>
                <span className="stamp">Próximamente</span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold text-ink">
                {post.title}
              </h2>
              <p className="mt-3 font-serif text-base italic text-ink-soft">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 font-serif text-base italic text-ink-soft">
          ¿Tienes una pregunta puntual?{' '}
          <Link to="/contacto" className="not-italic font-bold text-oxblood hover:underline">
            Escríbenos
          </Link>{' '}
          y la cubrimos en un próximo número.
        </div>
      </div>
    </>
  );
}
