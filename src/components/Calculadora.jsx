import { useMemo, useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import Tooltip from './Tooltip.jsx';
import Modal from './Modal.jsx';
import LeadForm from './LeadForm.jsx';
import { calcImportCost } from '../utils/cost.js';
import { formatCLP, formatUSD } from '../utils/format.js';

const CAR_TYPES = [
  { value: 'classic', label: 'Clásico (≥50 años)', disabled: false },
  { value: 'youngtimer', label: 'Clásico moderno (Próximamente)', disabled: true },
  { value: 'new', label: 'Nuevo 0km (Próximamente)', disabled: true },
];

export default function Calculadora({ variant = 'page' }) {
  const [carType, setCarType] = useState('classic');
  const [origin, setOrigin] = useState('USA');
  const [purchase, setPurchase] = useState(25000);
  const [fx, setFx] = useState(915);
  const [fta, setFta] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const result = useMemo(
    () =>
      calcImportCost({
        purchaseUSD: Number(purchase) || 0,
        origin,
        fxClpUsd: Number(fx) || 0,
        ftaApplies: fta,
      }),
    [purchase, origin, fx, fta]
  );

  const isCompact = variant === 'home';

  return (
    <section
      id="calculadora"
      aria-labelledby="calc-heading"
      className={isCompact ? 'section' : ''}
    >
      <div className={isCompact ? '' : 'mb-8'}>
        <p className="eyebrow">Calculadora</p>
        <h2 id="calc-heading" className="mt-2 text-3xl font-bold sm:text-4xl">
          Estima tu costo de importación
        </h2>
        <p className="mt-3 max-w-2xl text-text-muted">
          Calcula en tiempo real cuánto te costaría tu auto clásico puesto en
          Santiago. Sin sorpresas — todos los costos visibles.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Inputs */}
        <div className="card p-5 lg:col-span-2">
          <h3 className="mb-4 text-lg font-semibold">Tu auto</h3>
          <div className="space-y-4">
            <Field label="Tipo de auto" htmlFor="ct">
              <select
                id="ct"
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
                className="input-base"
              >
                {CAR_TYPES.map((t) => (
                  <option key={t.value} value={t.value} disabled={t.disabled}>
                    {t.label}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="País de origen" htmlFor="origin">
              <select
                id="origin"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="input-base"
              >
                <option value="USA">Estados Unidos</option>
                <option value="DE">Alemania</option>
              </select>
            </Field>

            <Field label="Precio de compra (USD)" htmlFor="price">
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
                  $
                </span>
                <input
                  id="price"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  step={500}
                  value={purchase}
                  onChange={(e) => setPurchase(e.target.value)}
                  className="input-base pl-8"
                />
              </div>
            </Field>

            <Field label="Tipo de cambio CLP/USD" htmlFor="fx">
              <input
                id="fx"
                type="number"
                min={0}
                step={1}
                value={fx}
                onChange={(e) => setFx(e.target.value)}
                className="input-base"
              />
            </Field>

            <label className="flex items-start gap-3 text-sm text-text-muted">
              <input
                type="checkbox"
                checked={fta}
                onChange={(e) => setFta(e.target.checked)}
                className="mt-0.5 h-4 w-4 cursor-pointer accent-brand-orange"
              />
              <span>
                Auto califica para TLC (arancel 0%){' '}
                <Tooltip
                  text="Los autos con TLC vigente con Chile (USA, UE) pagan 0% de arancel. Si tu auto no califica, paga 6%."
                />
              </span>
            </label>
          </div>
        </div>

        {/* Output */}
        <div className="card p-5 lg:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Desglose estimado</h3>
            <span className="rounded-full border border-bg-border px-3 py-1 text-xs text-text-muted">
              FX: {fx} CLP/USD
            </span>
          </div>

          <ul className="divide-y divide-bg-border">
            <Line
              label="Precio de compra"
              value={formatUSD(result.purchaseUSD)}
              tooltip="Lo que pagas en USD al vendedor en origen."
            />
            <Line
              label={`Flete marítimo (${origin === 'USA' ? 'USA' : 'Alemania'})`}
              value={formatUSD(result.freightUSD)}
              tooltip={
                origin === 'USA'
                  ? 'Flete RoRo/container desde puerto USA a San Antonio. ~USD 1.800.'
                  : 'Flete desde Hamburgo/Bremerhaven a San Antonio. ~USD 3.000.'
              }
            />
            <Line
              label="Seguro tránsito (2%)"
              value={formatUSD(result.insuranceUSD)}
              tooltip="Cobertura todo riesgo del auto durante el embarque."
            />
            <Line
              label="CIF (Costo + Seguro + Flete)"
              value={formatUSD(result.cifUSD)}
              highlight
              tooltip="Base sobre la que se calculan los impuestos en aduana."
            />
            <Line
              label={`Arancel (${(result.tariffRate * 100).toFixed(0)}%)`}
              value={formatUSD(result.tariffUSD)}
              tooltip={
                fta
                  ? 'Arancel 0% por TLC con USA o UE.'
                  : 'Arancel general de 6% si el auto no califica para TLC.'
              }
            />
            <Line
              label="IVA 19% sobre CIF + arancel"
              value={formatUSD(result.ivaUSD)}
              tooltip="IVA chileno aplicado sobre el valor CIF más el arancel."
            />
            <Line
              label="Costos en Chile"
              value={formatCLP(result.localCostsCLP)}
              tooltip="Agente aduana 450k + portuarios 300k + transporte a Stgo 250k + inspección CAACH 200k."
            />
            <Line
              label="Subtotal puesto en Santiago"
              value={formatCLP(result.subtotalCLP)}
              highlight
            />
            <Line
              label="Comisión MaosCars (10%)"
              value={formatCLP(result.commissionCLP)}
              tooltip="Honorarios MaosCars: búsqueda, inspección, gestión y entrega."
            />
          </ul>

          <div className="mt-5 rounded-md border border-brand-orange/40 bg-brand-orange/10 p-4">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
                Total final
              </span>
              <span className="text-2xl font-bold sm:text-3xl">
                {formatCLP(result.totalCLP)}
              </span>
            </div>
            <p className="mt-1 text-xs text-text-muted">
              Equivale a ~{formatUSD(result.totalCLP / (Number(fx) || 1))} al
              tipo de cambio actual.
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-text-muted">
              Estimación referencial. Costos finales se confirman con cotización
              formal antes de firmar mandato.
            </p>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="btn-primary"
            >
              <Calculator size={18} aria-hidden="true" />
              Empezar pedido con este precio
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Empezar tu pedido"
      >
        <p className="mb-4 text-sm text-text-muted">
          Tu cotización estimada: <strong className="text-text">{formatCLP(result.totalCLP)}</strong>{' '}
          ({origin === 'USA' ? 'USA' : 'Alemania'}, USD {Number(purchase || 0).toLocaleString('en-US')} compra).
          Déjanos tus datos y te contactamos.
        </p>
        <LeadForm
          compact
          initialData={{
            message: `Cotización inicial: ${formatCLP(result.totalCLP)} (origen ${
              origin === 'USA' ? 'USA' : 'Alemania'
            }, precio compra USD ${Number(purchase || 0).toLocaleString('en-US')}).`,
            origin: origin === 'USA' ? 'USA' : 'Alemania',
          }}
        />
      </Modal>
    </section>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div className="space-y-1">
      <label
        htmlFor={htmlFor}
        className="text-xs font-medium uppercase tracking-wide text-text-muted"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function Line({ label, value, tooltip, highlight }) {
  return (
    <li
      className={`flex items-center justify-between gap-3 py-3 text-sm ${
        highlight ? 'font-semibold text-text' : 'text-text-muted'
      }`}
    >
      <span className="flex items-center gap-2">
        {label}
        {tooltip && <Tooltip text={tooltip} />}
      </span>
      <span className={highlight ? 'text-text' : 'text-text'}>{value}</span>
    </li>
  );
}
