import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

const PLACEHOLDER_POSTS = [
  {
    id: 'tlc-arancel-0',
    title: 'TLC USA–Chile: cómo lograr arancel 0% en autos clásicos',
    excerpt: 'Qué documentos pide aduana y cómo evitar pagar el 6% innecesariamente.',
  },
  {
    id: 'caach-checklist',
    title: 'Checklist CAACH: 12 puntos que se revisan antes de patentar',
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
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Guías de importación
          </h1>
          <p className="mt-3 text-text-muted">
            Próximamente. Estos son los temas que estamos preparando para ti.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PLACEHOLDER_POSTS.map((post) => (
            <article key={post.id} className="card p-6 opacity-75">
              <span className="inline-block rounded-full border border-bg-border px-2 py-0.5 text-[10px] uppercase tracking-wide text-text-muted">
                Próximamente
              </span>
              <h2 className="mt-3 text-lg font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm text-text-muted">{post.excerpt}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-sm text-text-muted">
          ¿Tienes una pregunta puntual?{' '}
          <Link to="/contacto" className="text-brand-orange hover:underline">
            Escríbenos
          </Link>{' '}
          y la cubrimos en un próximo post.
        </div>
      </div>
    </>
  );
}
