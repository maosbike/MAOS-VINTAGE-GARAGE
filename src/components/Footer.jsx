import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Logo from './Logo.jsx';
import CheckerStrip from './CheckerStrip.jsx';

function InstagramIcon(props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

const QUICK = [
  { to: '/calculadora', label: 'Calculadora' },
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/proceso', label: 'Proceso' },
  { to: '/casos', label: 'Casos' },
  { to: '/contacto', label: 'Contacto' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-bg">
      <CheckerStrip height="h-3" />
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-3">
          <Logo className="h-12" />
          <p className="text-sm text-text-muted">
            Importación bajo pedido de autos clásicos desde USA y Alemania a Chile.
            Transparencia total, sin sorpresas.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-orange">
            Navegación
          </h4>
          <ul className="space-y-2">
            {QUICK.map((q) => (
              <li key={q.to}>
                <Link
                  to={q.to}
                  className="text-sm text-text-muted transition-colors hover:text-brand-orange"
                >
                  {q.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-orange">
            Síguenos
          </h4>
          <ul className="flex gap-3">
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram Maos Vintage Garage"
                className="rounded-md border border-bg-border p-2 text-text-muted transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="YouTube Maos Vintage Garage"
                className="rounded-md border border-bg-border p-2 text-text-muted transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                <YoutubeIcon />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/56900000000"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="WhatsApp Maos Vintage Garage"
                className="rounded-md border border-bg-border p-2 text-text-muted transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                <MessageCircle size={18} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-orange">
            Grupo
          </h4>
          <p className="text-sm text-text-muted">
            Una empresa del grupo{' '}
            <a
              href="https://maosbike.cl"
              target="_blank"
              rel="noreferrer noopener"
              className="text-brand-orange hover:underline"
            >
              MaosBike
            </a>
            .
          </p>
        </div>
      </div>
      <div className="border-t border-bg-border">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {year} Maos Vintage Garage. Todos los derechos reservados.</p>
          <p>Santiago, Chile</p>
        </div>
      </div>
    </footer>
  );
}
