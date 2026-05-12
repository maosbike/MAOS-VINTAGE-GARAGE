import { useMemo, useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import CarCard from '../components/CarCard.jsx';
import cars from '../data/cars.json';

const STATUS_OPTIONS = [
  { value: 'all', label: 'Todos' },
  { value: 'available', label: 'Disponible' },
  { value: 'search-active', label: 'Búsqueda activa' },
  { value: 'sold', label: 'Importado vendido' },
];

const ORIGIN_OPTIONS = [
  { value: 'all', label: 'Todos' },
  { value: 'USA', label: 'USA' },
  { value: 'DE', label: 'Alemania' },
];

const YEAR_MIN = 1955;
const YEAR_MAX = 1976;
const PRICE_MAX = 120000000;

function uniqueBrands(items) {
  return Array.from(new Set(items.map((c) => c.brand))).sort();
}

export default function CatalogoPage() {
  const [brand, setBrand] = useState('all');
  const [origin, setOrigin] = useState('all');
  const [status, setStatus] = useState('all');
  const [yearMax, setYearMax] = useState(YEAR_MAX);
  const [priceMax, setPriceMax] = useState(PRICE_MAX);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const brands = useMemo(() => uniqueBrands(cars), []);

  const filtered = useMemo(
    () =>
      cars.filter(
        (c) =>
          (brand === 'all' || c.brand === brand) &&
          (origin === 'all' || c.origin === origin) &&
          (status === 'all' || c.status === status) &&
          c.year <= yearMax &&
          c.estimatedClp <= priceMax
      ),
    [brand, origin, status, yearMax, priceMax]
  );

  const searching = filtered.filter((c) => c.status === 'search-active');

  const filtersUI = (
    <div className="space-y-6">
      <FilterGroup label="Marca">
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="input-base"
        >
          <option value="all">Todas</option>
          {brands.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </FilterGroup>
      <FilterGroup label="País de origen">
        <select
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="input-base"
        >
          {ORIGIN_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </FilterGroup>
      <FilterGroup label="Estado">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="input-base"
        >
          {STATUS_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </FilterGroup>
      <FilterGroup label={`Año máximo: ${yearMax}`}>
        <input
          type="range"
          min={YEAR_MIN}
          max={YEAR_MAX}
          value={yearMax}
          onChange={(e) => setYearMax(Number(e.target.value))}
          className="w-full accent-brand-orange"
        />
      </FilterGroup>
      <FilterGroup label={`Precio máximo: $${(priceMax / 1000000).toFixed(0)}M CLP`}>
        <input
          type="range"
          min={10000000}
          max={PRICE_MAX}
          step={5000000}
          value={priceMax}
          onChange={(e) => setPriceMax(Number(e.target.value))}
          className="w-full accent-brand-orange"
        />
      </FilterGroup>
    </div>
  );

  return (
    <>
      <Seo
        title="Catálogo de autos"
        description="Autos clásicos disponibles y búsquedas activas. Importación bajo pedido a Chile."
        path="/catalogo"
      />
      <div className="section">
        <div className="mb-10">
          <p className="eyebrow">Catálogo</p>
          <h1 className="h-display mt-2 text-[clamp(2.2rem,7vw,4.5rem)]">
            Autos disponibles<br />y búsquedas activas
          </h1>
          <p className="mt-3 max-w-2xl text-text-muted">
            Cada auto está pre-evaluado por nuestro equipo. Si encuentras uno
            que te gusta, lo bloqueamos para ti.
          </p>
        </div>

        {searching.length > 0 && (
          <section className="mb-12">
            <h2 className="h-display mb-4 text-2xl sm:text-3xl">
              Clientes están buscando…
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {searching.slice(0, 4).map((c) => (
                <CarCard key={c.id} car={c} />
              ))}
            </div>
          </section>
        )}

        <div className="flex items-center justify-between gap-3 lg:hidden">
          <p className="text-sm text-text-muted">
            {filtered.length} resultado{filtered.length === 1 ? '' : 's'}
          </p>
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="btn-outline px-4 py-2 text-sm"
          >
            <SlidersHorizontal size={16} aria-hidden="true" />
            Filtros
          </button>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <div className="card sticky top-28 p-5">
              <h3 className="h-display mb-4 text-xl">Filtros</h3>
              {filtersUI}
            </div>
          </aside>

          <div>
            <p className="mb-4 hidden text-sm text-text-muted lg:block">
              {filtered.length} resultado{filtered.length === 1 ? '' : 's'}
            </p>
            {filtered.length === 0 ? (
              <div className="card p-8 text-center text-text-muted">
                Sin resultados con esos filtros. Cuéntanos qué buscas y lo
                conseguimos.
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((c) => (
                  <CarCard key={c.id} car={c} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Cerrar filtros"
            className="absolute inset-0 bg-black/70"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-80 max-w-full overflow-y-auto border-l border-bg-border bg-bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Filtros</h3>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Cerrar"
                className="text-text-muted hover:text-text"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            {filtersUI}
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="btn-primary mt-6 w-full"
            >
              Ver {filtered.length} resultado{filtered.length === 1 ? '' : 's'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function FilterGroup({ label, children }) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
        {label}
      </p>
      {children}
    </div>
  );
}
