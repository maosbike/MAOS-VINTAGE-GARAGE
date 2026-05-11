import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

export default function NotFoundPage() {
  return (
    <>
      <Seo title="No encontrado" path="/404" />
      <div className="section flex flex-col items-center text-center">
        <p className="font-mono text-6xl font-bold text-brand-orange">404</p>
        <h1 className="mt-4 text-2xl font-bold sm:text-3xl">
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
