import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Calculator } from 'lucide-react';

const NAV = [
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/proceso', label: 'Proceso' },
  { to: '/casos', label: 'Casos' },
  { to: '/blog', label: 'Blog' },
  { to: '/contacto', label: 'Contacto' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur transition-colors ${
        scrolled
          ? 'border-bg-border bg-bg/85'
          : 'border-transparent bg-bg/40'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          aria-label="Inicio MaosCars"
          className="flex items-center gap-2 font-extrabold tracking-tight"
        >
          <span className="text-xl">MAOS</span>
          <span className="text-xl text-brand-orange">CARS</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-brand-orange'
                    : 'text-text-muted hover:text-text'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/calculadora" className="btn-primary px-5 py-2 text-sm">
            <Calculator size={16} aria-hidden="true" />
            Calcular
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="rounded-md p-2 text-text md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <nav
            className="space-y-1 border-t border-bg-border bg-bg px-4 py-4"
            aria-label="Mobile"
          >
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-3 text-base font-medium ${
                    isActive
                      ? 'bg-bg-card text-brand-orange'
                      : 'text-text-muted hover:bg-bg-card hover:text-text'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/calculadora"
              className="btn-primary mt-3 w-full"
            >
              <Calculator size={16} aria-hidden="true" />
              Calcular costo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
