import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

export default function NotFoundPage() {
  return (
    <>
      <Seo title="No encontrado" path="/404" />
      <div className="section flex flex-col items-center text-center">
        <p className="font-display text-[clamp(8rem,28vw,18rem)] leading-none tracking-wider2 text-cognac">
          404
        </p>
        <div className="rule-brass my-6 w-32" aria-hidden="true" />
        <h1 className="font-display text-4xl tracking-wider2 sm:text-5xl">
          Esa página <em className="font-serif italic font-normal normal-case tracking-normal text-cognac">no existe</em>
        </h1>
        <p className="mt-4 max-w-md font-serif text-xl italic text-ink-soft">
          Tal vez el auto que buscas ya se vendió. Vuelve al inicio o conversa con nosotros.
        </p>
        <div className="mt-8 flex gap-3">
          <Link to="/" className="btn-primary">Volver al inicio</Link>
          <Link to="/contacto" className="btn-outline">Contáctanos</Link>
        </div>
      </div>
    </>
  );
}
