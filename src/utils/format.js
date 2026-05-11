const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const clpFormatter = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat('es-CL', {
  maximumFractionDigits: 0,
});

export function formatUSD(value) {
  if (!Number.isFinite(value)) return '—';
  return usdFormatter.format(Math.round(value));
}

export function formatCLP(value) {
  if (!Number.isFinite(value)) return '—';
  return clpFormatter.format(Math.round(value));
}

export function formatNumber(value) {
  if (!Number.isFinite(value)) return '—';
  return numberFormatter.format(Math.round(value));
}

export function parseNumber(raw) {
  if (raw === '' || raw == null) return 0;
  const cleaned = String(raw).replace(/[^0-9.,-]/g, '').replace(/\./g, '').replace(',', '.');
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
}
