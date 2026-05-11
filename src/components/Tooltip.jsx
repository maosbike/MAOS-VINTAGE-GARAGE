import { useState, useId } from 'react';
import { HelpCircle } from 'lucide-react';

export default function Tooltip({ text, label = 'Más información' }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <span className="relative inline-flex">
      <button
        type="button"
        aria-label={label}
        aria-describedby={open ? id : undefined}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
        className="text-text-muted hover:text-brand-orange focus:text-brand-orange focus:outline-none"
      >
        <HelpCircle size={14} aria-hidden="true" />
      </button>
      {open && (
        <span
          role="tooltip"
          id={id}
          className="absolute bottom-full left-1/2 z-20 mb-2 w-60 -translate-x-1/2 rounded-md border border-bg-border bg-bg-card px-3 py-2 text-xs leading-relaxed text-text-muted shadow-lg"
        >
          {text}
        </span>
      )}
    </span>
  );
}
