import { useState } from 'react';

// Resilient car image: shows real Wikimedia photo with a typographic fallback
// if the URL fails (CSP, network, deleted file).
export default function CarImage({
  src,
  brand,
  model,
  year,
  className = '',
  imgClassName = 'h-full w-full object-cover',
  eager = false,
}) {
  const [errored, setErrored] = useState(false);

  return (
    <div className={`relative isolate overflow-hidden bg-canvas-raised ${className}`}>
      {!errored && src && (
        <img
          src={src}
          alt={`${brand} ${model} ${year} (foto referencial Wikimedia Commons)`}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setErrored(true)}
          className={imgClassName}
        />
      )}

      {/* Fallback: tipografía dominante sobre fondo gradiente */}
      {(errored || !src) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-canvas-elevated via-canvas-card to-canvas p-6 text-center">
          <span className="font-display text-7xl leading-none text-cognac">
            {year}
          </span>
          <span className="mt-2 font-display text-2xl tracking-wider2 text-ink">
            {brand}
          </span>
          <span className="font-serif text-base italic text-ink-muted">
            {model}
          </span>
          <span className="mt-3 font-mono text-[9px] uppercase tracking-widest2 text-ink-faint">
            Foto pendiente
          </span>
        </div>
      )}

      {/* Cinematic vignette + bottom gradient for text overlays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/95 via-canvas/15 to-transparent"
      />
    </div>
  );
}
