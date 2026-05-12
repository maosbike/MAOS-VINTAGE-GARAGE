import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const BUDGETS = [
  'Menos de 25 millones CLP',
  '25 – 40 millones CLP',
  '40 – 60 millones CLP',
  '60 – 100 millones CLP',
  '100 – 200 millones CLP',
  'Más de 200 millones CLP',
];

const ORIGINS = [
  'Estados Unidos',
  'Alemania / Europa',
  'Reino Unido',
  'Japón',
  'Canadá',
  'Australia',
  'Otro país',
  'Sin preferencia',
];

export default function LeadForm({ initialData, compact = false }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    target: '',
    budget: BUDGETS[1],
    origin: ORIGINS[7],
    message: '',
    ...initialData,
  });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('[MVG lead]', form);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-sm border-2 border-dashed border-racing-green bg-paper px-4 py-10 text-center">
        <CheckCircle2 size={40} className="text-racing-green" aria-hidden="true" />
        <h3 className="font-display text-2xl font-bold text-ink">¡Recibido!</h3>
        <p className="font-serif text-base italic text-ink-soft">
          Te contactaremos dentro de 24 horas hábiles con los próximos pasos.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`grid gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}>
      <Field id="lead-name" label="Nombre">
        <input
          id="lead-name"
          required
          autoComplete="name"
          value={form.name}
          onChange={update('name')}
          className="input-base"
        />
      </Field>
      <Field id="lead-email" label="Email">
        <input
          id="lead-email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={update('email')}
          className="input-base"
        />
      </Field>
      <Field id="lead-phone" label="Teléfono">
        <input
          id="lead-phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={update('phone')}
          className="input-base"
          placeholder="+56 9 ..."
        />
      </Field>
      <Field id="lead-budget" label="Presupuesto">
        <select id="lead-budget" value={form.budget} onChange={update('budget')} className="input-base">
          {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </Field>
      <Field id="lead-target" label="¿Qué auto buscas?" className="sm:col-span-2">
        <textarea
          id="lead-target"
          rows={3}
          value={form.target}
          onChange={update('target')}
          className="input-base resize-none"
          placeholder="Marca, modelo, año, color, especificaciones…"
        />
      </Field>
      <Field id="lead-origin" label="País de preferencia">
        <select id="lead-origin" value={form.origin} onChange={update('origin')} className="input-base">
          {ORIGINS.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </Field>
      <Field id="lead-message" label="Mensaje" className="sm:col-span-2">
        <textarea
          id="lead-message"
          rows={3}
          value={form.message}
          onChange={update('message')}
          className="input-base resize-none"
          placeholder="Cuéntanos más detalles…"
        />
      </Field>
      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full">
          Enviar solicitud
        </button>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
          Te contactaremos en menos de 24 horas hábiles.
        </p>
      </div>
    </form>
  );
}

function Field({ id, label, children, className = '' }) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <label
        htmlFor={id}
        className="font-mono text-[10px] font-bold uppercase tracking-widest2 text-ink-muted"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
