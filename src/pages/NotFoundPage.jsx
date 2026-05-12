import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import CheckerStrip from '../components/CheckerStrip.jsx';

export default function NotFoundPage() {
  return (
    <>
      <Seo title="No encontrado" path="/404" />
      <div className="section flex flex-col items-center text-center">
        <p className="h-display text-[clamp(6rem,20vw,12rem)] leading-none text-brand-orange">
          404
        </p>
        <CheckerStrip height="h-2" size="sm" className="my-4 max-w-xs" />
        <h1 className="h-display text-3xl sm:text-4xl">
          Esa página no existe
        </h1>
        <p className="mt-3 max-w-md text-text-muted">
          Tal vez el auto que buscas ya se vendió. Vuelve al inicio o conversa
          con nosotros.
        </p>
        <div className="mt-6 flex gap-3">
          <Link to="/" className="btn-primary">Volver al inicio</Link>
          <Link to="/contacto" className="btn-outline">Contáctanos</Link>
        </div>
      </div>
    </>
  );
}
