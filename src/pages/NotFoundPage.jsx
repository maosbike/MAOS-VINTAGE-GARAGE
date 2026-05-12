import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

export default function NotFoundPage() {
  return (
    <>
      <Seo title="No encontrado" path="/404" />
      <div className="section flex flex-col items-center text-center">
        <p className="font-display text-[clamp(8rem,28vw,18rem)] font-black leading-none text-oxblood">
          404
        </p>
        <div className="my-4 h-px w-24 bg-ink-line" />
        <h1 className="font-display text-4xl font-bold sm:text-5xl">
          Esa página <em className="italic text-oxblood">no existe</em>
        </h1>
        <p className="mt-3 max-w-md font-serif text-lg italic text-ink-soft">
          Tal vez el auto que buscas ya se vendió. Vuelve al inicio o conversa con nosotros.
        </p>
        <div className="mt-7 flex gap-3">
          <Link to="/" className="btn-primary">Volver al inicio</Link>
          <Link to="/contacto" className="btn-outline">Contáctanos</Link>
        </div>
      </div>
    </>
  );
}
