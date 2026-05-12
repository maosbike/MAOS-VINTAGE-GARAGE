import { Link } from 'react-router-dom';
import { MessageCircle, Mail, MapPin } from 'lucide-react';
import Logo from './Logo.jsx';

function InstagramIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
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
    <footer className="relative border-t border-canvas-line bg-canvas-raised">
      <div className="checker text-ink h-1 bg-canvas" aria-hidden="true" />
      <div className="rule-brass" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
        <div className="space-y-6 lg:col-span-5">
          <Logo className="h-16" />
          <p className="max-w-sm font-serif text-xl italic leading-snug text-ink-soft">
            Importación bajo pedido de autos clásicos a Chile. Lo buscamos, lo embarcamos, lo entregamos. Sin sorpresas.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-brass">
            EST. MMXXV · Santiago, Chile
          </p>
        </div>

        <div className="lg:col-span-3">
          <h4 className="mb-5 font-mono text-[10px] font-bold uppercase tracking-widest2 text-brass">
            Navegación
          </h4>
          <ul className="space-y-3">
            {QUICK.map((q) => (
              <li key={q.to}>
                <Link to={q.to} className="font-display text-xl tracking-wider2 text-ink-soft transition-colors hover:text-cognac">
                  {q.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="mb-5 font-mono text-[10px] font-bold uppercase tracking-widest2 text-brass">
            Contacto
          </h4>
          <ul className="space-y-4 text-sm text-ink-soft">
            <li>
              <a href="https://wa.me/56900000000" className="flex items-start gap-2 hover:text-cognac" target="_blank" rel="noreferrer">
                <MessageCircle size={14} className="mt-1 shrink-0" aria-hidden="true" />
                <span className="font-mono text-xs">+56 9 0000 0000</span>
              </a>
            </li>
            <li>
              <a href="mailto:hola@maoscars.cl" className="flex items-start gap-2 hover:text-cognac">
                <Mail size={14} className="mt-1 shrink-0" aria-hidden="true" />
                <span className="font-mono text-xs">hola@maoscars.cl</span>
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-1 shrink-0" aria-hidden="true" />
              <span className="font-mono text-xs">Santiago, CL</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="mb-5 font-mono text-[10px] font-bold uppercase tracking-widest2 text-brass">
            Síguenos
          </h4>
          <ul className="flex gap-3">
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-canvas-line text-ink-soft transition-colors hover:border-cognac hover:text-cognac">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer noopener" aria-label="YouTube" className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-canvas-line text-ink-soft transition-colors hover:border-cognac hover:text-cognac">
                <YoutubeIcon />
              </a>
            </li>
            <li>
              <a href="https://wa.me/56900000000" target="_blank" rel="noreferrer noopener" aria-label="WhatsApp" className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-canvas-line text-ink-soft transition-colors hover:border-cognac hover:text-cognac">
                <MessageCircle size={18} aria-hidden="true" />
              </a>
            </li>
          </ul>
          <p className="mt-6 text-xs text-ink-muted">
            Una empresa del grupo{' '}
            <a href="https://maosbike.cl" target="_blank" rel="noreferrer noopener" className="text-cognac hover:underline">
              MaosBike
            </a>
            .
          </p>
        </div>
      </div>

      <div className="border-t border-canvas-line">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-5 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {year} Maos Vintage Garage. Todos los derechos reservados.</p>
          <p>Construido para coleccionistas exigentes.</p>
        </div>
      </div>
    </footer>
  );
}
