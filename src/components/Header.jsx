import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo.jsx';

const NAV = [
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/proceso', label: 'Proceso' },
  { to: '/casos', label: 'Casos' },
  { to: '/blog', label: 'Diario' },
  { to: '/contacto', label: 'Contacto' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? 'border-b border-coal-line bg-coal/95 backdrop-blur-md'
          : 'bg-coal/70 backdrop-blur-sm'
      }`}
    >
      {/* Utility bar with marquee-style metadata */}
      <div className="hidden border-b border-coal-line/60 bg-coal-raised md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted lg:px-8">
          <span className="flex items-center gap-3">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-signal-green animate-pulse" aria-hidden="true" />
            Operando · Santiago, Chile
          </span>
          <span className="flex items-center gap-5">
            <a href="https://wa.me/56900000000" className="hover:text-cognac" target="_blank" rel="noreferrer">
              WhatsApp +56 9 0000 0000
            </a>
            <span aria-hidden="true" className="text-coal-line">·</span>
            <a href="mailto:hola@maoscars.cl" className="hover:text-cognac">
              hola@maoscars.cl
            </a>
          </span>
        </div>
      </div>

      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-8">
        <Link
          to="/"
          aria-label="Inicio Maos Vintage Garage"
          className="block transition-transform hover:scale-[1.02]"
        >
          <Logo priority className="h-12 sm:h-16" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Principal">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative font-mono text-[11px] font-bold uppercase tracking-widest2 transition-colors ${
                  isActive ? 'text-cognac' : 'text-ink-soft hover:text-ink'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-cognac"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/calculadora" className="btn-primary px-5 py-2.5 text-[10px]">
            Cotizar
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="-mr-2 rounded-sm p-2 text-ink md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Racing brass rule */}
      <div className="rule-brass" aria-hidden="true" />
      {/* Checker accent strip */}
      <div className="checker text-ink/95 h-1 bg-coal-raised" aria-hidden="true" />

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
              className="space-y-1 border-b border-coal-line bg-coal-raised px-4 py-4"
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
                      `block rounded-sm px-3 py-3 font-mono text-sm font-bold uppercase tracking-widest2 ${
                        isActive
                          ? 'bg-coal-elevated text-cognac'
                          : 'text-ink hover:bg-coal-elevated hover:text-cognac'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <Link to="/calculadora" className="btn-primary mt-3 w-full">
                Cotizar mi auto
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
