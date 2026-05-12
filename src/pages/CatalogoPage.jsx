import { useMemo, useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import CarCard from '../components/CarCard.jsx';
import cars from '../data/cars.json';
import { ORIGINS } from '../utils/cost.js';

const STATUS_OPTIONS = [
  { value: 'all', label: 'Todos' },
  { value: 'available', label: 'Disponible' },
  { value: 'search-active', label: 'Búsqueda activa' },
  { value: 'sold', label: 'Importado vendido' },
];

const ORIGIN_OPTIONS = [
  { value: 'all', label: 'Cualquiera' },
  ...ORIGINS.map((o) => ({ value: o.code, label: `${o.flag} ${o.label}` })),
];

const YEAR_MIN = 1955;
const YEAR_MAX = 1980;
const PRICE_MAX = 300000000;

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
    <div className="space-y-5">
      <FilterGroup label="Marca">
        <select value={brand} onChange={(e) => setBrand(e.target.value)} className="input-base">
          <option value="all">Todas</option>
          {brands.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </FilterGroup>
      <FilterGroup label="País de origen">
        <select value={origin} onChange={(e) => setOrigin(e.target.value)} className="input-base">
          {ORIGIN_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </FilterGroup>
      <FilterGroup label="Estado">
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="input-base">
          {STATUS_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </FilterGroup>
      <FilterGroup label={`Año máximo · ${yearMax}`}>
        <input
          type="range"
          min={YEAR_MIN}
          max={YEAR_MAX}
          value={yearMax}
          onChange={(e) => setYearMax(Number(e.target.value))}
          className="w-full accent-oxblood"
        />
      </FilterGroup>
      <FilterGroup label={`Precio máx · $${(priceMax / 1000000).toFixed(0)}M`}>
        <input
          type="range"
          min={10000000}
          max={PRICE_MAX}
          step={5000000}
          value={priceMax}
          onChange={(e) => setPriceMax(Number(e.target.value))}
          className="w-full accent-oxblood"
        />
      </FilterGroup>
    </div>
  );

  return (
    <>
      <Seo
        title="Catálogo de autos"
        description="Autos clásicos disponibles y búsquedas activas. Importación bajo pedido desde cualquier país a Chile."
        path="/catalogo"
      />
      <div className="section">
        <div className="mb-10 border-b border-ink-line pb-6">
          <p className="eyebrow">Catálogo · Lotes en circulación</p>
          <h1 className="h-display mt-4 text-[clamp(2.4rem,8vw,5.5rem)]">
            Autos en pista<br />
            <em className="italic text-oxblood">& búsquedas activas</em>
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-lg italic text-ink-soft">
            Cada lote está pre-evaluado por nuestro equipo. Si encuentras uno que te gusta, lo bloqueamos para ti.
          </p>
        </div>

        {searching.length > 0 && (
          <section className="mb-14">
            <div className="mb-5 flex items-baseline justify-between border-b border-dashed border-ink-line/60 pb-2">
              <h2 className="font-display text-3xl font-bold text-ink">
                Clientes están buscando…
              </h2>
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                {searching.length} pedidos abiertos
              </span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {searching.slice(0, 4).map((c) => <CarCard key={c.id} car={c} />)}
            </div>
          </section>
        )}

        <div className="flex items-center justify-between gap-3 lg:hidden">
          <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
            {filtered.length} resultado{filtered.length === 1 ? '' : 's'}
          </p>
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="btn-outline px-4 py-2 text-[11px]"
          >
            <SlidersHorizontal size={14} aria-hidden="true" />
            Filtros
          </button>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <div className="card-paper sticky top-32 p-5">
              <h3 className="mb-4 font-display text-xl font-bold">Filtros</h3>
              {filtersUI}
            </div>
          </aside>

          <div>
            <p className="mb-4 hidden font-mono text-[10px] uppercase tracking-widest2 text-ink-muted lg:block">
              {filtered.length} resultado{filtered.length === 1 ? '' : 's'}
            </p>
            {filtered.length === 0 ? (
              <div className="card-paper p-10 text-center font-serif text-lg italic text-ink-soft">
                Sin resultados con esos filtros.<br />
                Cuéntanos qué buscas y lo conseguimos.
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((c) => <CarCard key={c.id} car={c} />)}
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
            className="absolute inset-0 bg-paper-deep/80"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-80 max-w-full overflow-y-auto border-l border-ink-line bg-paper-light p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-xl font-bold">Filtros</h3>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Cerrar"
                className="text-ink-muted hover:text-oxblood"
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
    <div className="space-y-1.5">
      <p className="font-mono text-[10px] font-bold uppercase tracking-widest2 text-ink-muted">
        {label}
      </p>
      {children}
    </div>
  );
}
