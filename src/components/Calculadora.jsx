import { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Tooltip from './Tooltip.jsx';
import Modal from './Modal.jsx';
import LeadForm from './LeadForm.jsx';
import useCountUp from '../hooks/useCountUp.js';
import { calcImportCost, ORIGINS, ORIGIN_BY_CODE } from '../utils/cost.js';
import { formatCLP, formatUSD } from '../utils/format.js';

export default function Calculadora({ variant = 'page' }) {
  const [origin, setOrigin] = useState('USA');
  const [purchase, setPurchase] = useState(25000);
  const [fx, setFx] = useState(915);
  const [fta, setFta] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  // When origin changes, default the FTA toggle to that origin's default
  useEffect(() => {
    const def = ORIGIN_BY_CODE[origin];
    if (def) setFta(def.fta);
  }, [origin]);

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

  const animatedTotal = useCountUp(result.totalCLP, 500);
  const originDef = ORIGIN_BY_CODE[origin];

  return (
    <section
      id="calculadora"
      aria-labelledby="calc-heading"
      className={variant === 'home' ? 'section' : ''}
    >
      {/* Header */}
      <div className="mb-10">
        <p className="eyebrow">Calculadora · Ledger</p>
        <h2
          id="calc-heading"
          className="h-display mt-4 text-[clamp(2.2rem,7vw,4.5rem)]"
        >
          Estima tu costo, al peso.
        </h2>
        <p className="mt-3 max-w-2xl font-serif text-lg italic text-ink-soft">
          Cada línea desglosada como un libro contable. Sin letra chica.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        {/* INPUTS — left ledger */}
        <div className="card-paper lg:col-span-2">
          <div className="border-b border-ink-line bg-paper-dark/40 px-5 py-4">
            <h3 className="font-display text-2xl font-bold text-ink">Tu pedido</h3>
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
              Sección A · Datos del vehículo
            </p>
          </div>

          <div className="space-y-5 p-5">
            <Field label="País de origen" htmlFor="origin">
              <select
                id="origin"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="input-base font-serif text-base"
              >
                {ORIGINS.map((o) => (
                  <option key={o.code} value={o.code}>
                    {o.flag}  {o.label}
                  </option>
                ))}
              </select>
              <p className="mt-1 font-mono text-[10px] text-ink-muted">
                Flete estimado: USD {originDef?.freightUSD.toLocaleString('en-US')}
              </p>
            </Field>

            <Field label="Precio de compra (USD)" htmlFor="price">
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-mono text-ink-muted">
                  $
                </span>
                <input
                  id="price"
                  type="number"
                  inputMode="decimal"
                  min={0}
                  step={500}
                  value={purchase}
                  onChange={(e) => setPurchase(e.target.value)}
                  className="input-base pl-8 font-mono text-lg font-semibold"
                />
              </div>
            </Field>

            <Field label="Tipo de cambio CLP/USD" htmlFor="fx">
              <input
                id="fx"
                type="number"
                inputMode="decimal"
                min={0}
                step={1}
                value={fx}
                onChange={(e) => setFx(e.target.value)}
                className="input-base font-mono"
              />
            </Field>

            <label className="flex cursor-pointer items-start gap-3 rounded-sm border border-ink-line bg-paper p-3 text-sm transition-colors hover:border-oxblood">
              <input
                type="checkbox"
                checked={fta}
                onChange={(e) => setFta(e.target.checked)}
                className="mt-0.5 h-4 w-4 cursor-pointer accent-oxblood"
              />
              <span className="text-ink-soft">
                <span className="font-semibold text-ink">TLC vigente</span> · arancel 0%{' '}
                <Tooltip text="Chile tiene TLC con USA, UE, UK, Japón, Canadá, Australia, Corea y otros. Si tu auto es de un país con TLC, paga 0% de arancel; si no, 6%." />
              </span>
            </label>
          </div>
        </div>

        {/* OUTPUT — ledger right */}
        <div className="card-paper lg:col-span-3">
          <div className="flex items-center justify-between border-b border-ink-line bg-paper-dark/40 px-5 py-4">
            <div>
              <h3 className="font-display text-2xl font-bold text-ink">Desglose</h3>
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                Sección B · Costos al detalle
              </p>
            </div>
            <span className="rounded-sm border border-ink-line px-3 py-1 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
              FX {fx}
            </span>
          </div>

          <ul className="divide-y divide-dashed divide-ink-line/60 px-5">
            <Line
              label="Precio de compra"
              value={formatUSD(result.purchaseUSD)}
              tooltip="Lo que pagas en USD al vendedor en origen."
            />
            <Line
              label={`Flete marítimo · ${originDef?.label}`}
              value={formatUSD(result.freightUSD)}
              tooltip={`Flete desde ${originDef?.label} a San Antonio (RoRo o container 40' compartido).`}
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
                  ? 'Arancel 0% por TLC con el país de origen.'
                  : 'Arancel general 6% (sin TLC vigente).'
              }
            />
            <Line
              label="IVA 19% sobre CIF + arancel"
              value={formatUSD(result.ivaUSD)}
              tooltip="IVA chileno sobre el valor CIF más el arancel."
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
              label="Comisión MVG (10%)"
              value={formatCLP(result.commissionCLP)}
              tooltip="Honorarios Maos Vintage Garage: búsqueda, inspección, gestión y entrega."
            />
          </ul>

          {/* TOTAL — ribbon with brass + oxblood */}
          <div className="m-5 mt-4 overflow-hidden rounded-sm border-2 border-oxblood bg-paper-deep text-paper-light">
            <div className="flex items-center justify-between bg-oxblood px-4 py-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest2 text-paper-light">
                Total final · puesto en Santiago
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-brass-light">
                {originDef?.flag} {originDef?.label}
              </span>
            </div>
            <div className="px-5 py-5">
              <motion.span
                key={Math.round(animatedTotal / 100000)}
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 1 }}
                className="block font-display text-5xl font-bold text-paper-light sm:text-6xl"
              >
                {formatCLP(animatedTotal)}
              </motion.span>
              <p className="mt-2 font-mono text-xs text-brass-light">
                ≈ {formatUSD(result.totalCLP / (Number(fx) || 1))} USD
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-ink-line p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md font-serif text-xs italic text-ink-muted">
              Estimación referencial. Costo final se confirma con cotización formal antes de firmar mandato.
            </p>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="btn-primary w-full text-xs sm:w-auto"
            >
              Empezar pedido
              <ArrowRight size={14} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Empezar tu pedido"
      >
        <p className="mb-4 font-serif text-base italic text-ink-soft">
          Tu cotización estimada:{' '}
          <strong className="not-italic text-oxblood">{formatCLP(result.totalCLP)}</strong>{' '}
          ({originDef?.label}, USD{' '}
          {Number(purchase || 0).toLocaleString('en-US')} compra).
        </p>
        <LeadForm
          compact
          initialData={{
            message: `Cotización inicial: ${formatCLP(result.totalCLP)} (origen ${
              originDef?.label
            }, precio compra USD ${Number(purchase || 0).toLocaleString('en-US')}).`,
            origin: originDef?.label,
          }}
        />
      </Modal>
    </section>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={htmlFor}
        className="font-mono text-[10px] font-bold uppercase tracking-widest2 text-ink-muted"
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
        highlight ? 'font-semibold text-ink' : 'text-ink-soft'
      }`}
    >
      <span className="flex items-center gap-2 font-serif">
        {label}
        {tooltip && <Tooltip text={tooltip} />}
      </span>
      <span className="font-mono text-ink">{value}</span>
    </li>
  );
}
