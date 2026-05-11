import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const BUDGETS = [
  'Menos de 25 millones CLP',
  '25 – 40 millones CLP',
  '40 – 60 millones CLP',
  '60 – 100 millones CLP',
  'Más de 100 millones CLP',
];

const ORIGINS = ['USA', 'Alemania', 'Sin preferencia'];

export default function LeadForm({ initialData, compact = false }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    target: '',
    budget: BUDGETS[1],
    origin: ORIGINS[2],
    message: '',
    ...initialData,
  });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // Stub: replace with API call (Railway + PostgreSQL) later
    console.log('[MaosCars lead]', form);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-md border border-bg-border bg-bg/40 px-4 py-8 text-center">
        <CheckCircle2 size={36} className="text-brand-orange" aria-hidden="true" />
        <h3 className="text-lg font-semibold">¡Recibido!</h3>
        <p className="text-sm text-text-muted">
          Te contactaremos dentro de 24 horas hábiles con los próximos pasos.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`grid gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}>
      <div className="space-y-1">
        <label htmlFor="lead-name" className="text-xs font-medium uppercase tracking-wide text-text-muted">
          Nombre
        </label>
        <input
          id="lead-name"
          required
          autoComplete="name"
          value={form.name}
          onChange={update('name')}
          className="input-base"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="lead-email" className="text-xs font-medium uppercase tracking-wide text-text-muted">
          Email
        </label>
        <input
          id="lead-email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={update('email')}
          className="input-base"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="lead-phone" className="text-xs font-medium uppercase tracking-wide text-text-muted">
          Teléfono
        </label>
        <input
          id="lead-phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={update('phone')}
          className="input-base"
          placeholder="+56 9 ..."
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="lead-budget" className="text-xs font-medium uppercase tracking-wide text-text-muted">
          Presupuesto
        </label>
        <select
          id="lead-budget"
          value={form.budget}
          onChange={update('budget')}
          className="input-base"
        >
          {BUDGETS.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>
      <div className="space-y-1 sm:col-span-2">
        <label htmlFor="lead-target" className="text-xs font-medium uppercase tracking-wide text-text-muted">
          ¿Qué auto buscas?
        </label>
        <textarea
          id="lead-target"
          rows={3}
          value={form.target}
          onChange={update('target')}
          className="input-base resize-none"
          placeholder="Marca, modelo, año, color, etc."
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="lead-origin" className="text-xs font-medium uppercase tracking-wide text-text-muted">
          País de preferencia
        </label>
        <select
          id="lead-origin"
          value={form.origin}
          onChange={update('origin')}
          className="input-base"
        >
          {ORIGINS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className="space-y-1 sm:col-span-2">
        <label htmlFor="lead-message" className="text-xs font-medium uppercase tracking-wide text-text-muted">
          Mensaje
        </label>
        <textarea
          id="lead-message"
          rows={3}
          value={form.message}
          onChange={update('message')}
          className="input-base resize-none"
          placeholder="Cuéntanos más detalles…"
        />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full">
          Enviar solicitud
        </button>
        <p className="mt-2 text-xs text-text-muted">
          Te contactaremos dentro de 24 horas hábiles.
        </p>
      </div>
    </form>
  );
}
