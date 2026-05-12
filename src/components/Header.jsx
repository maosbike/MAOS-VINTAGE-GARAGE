import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Calculator } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo.jsx';
import CheckerStrip from './CheckerStrip.jsx';

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
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'border-b border-bg-border bg-bg/90 backdrop-blur'
          : 'bg-bg/60 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link
          to="/"
          aria-label="Inicio Maos Vintage Garage"
          className="block transition-transform hover:scale-[1.02]"
        >
          <Logo
            priority
            className="h-9 sm:h-11"
          />
        </Link>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Principal"
        >
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-wider transition-colors ${
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
          <Link to="/calculadora" className="btn-primary px-5 py-2 text-xs">
            <Calculator size={16} aria-hidden="true" />
            Calcular
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="-mr-2 rounded-md p-2 text-text md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <CheckerStrip height="h-2" size="sm" />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden md:hidden"
          >
            <nav
              className="space-y-1 border-b border-bg-border bg-bg px-4 py-4"
              aria-label="Mobile"
            >
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block rounded-md px-3 py-3 text-base font-semibold uppercase tracking-wider ${
                        isActive
                          ? 'bg-bg-card text-brand-orange'
                          : 'text-text-muted hover:bg-bg-card hover:text-text'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <Link to="/calculadora" className="btn-primary mt-3 w-full">
                <Calculator size={16} aria-hidden="true" />
                Calcular costo
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
