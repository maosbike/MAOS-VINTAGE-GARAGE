import { useEffect, useRef, useState } from 'react';

// Resilient car image: shows real photo with a typographic fallback if
// the URL fails OR takes too long to load (timeout = 5s).
export default function CarImage({
  src,
  brand,
  model,
  year,
  className = '',
  imgClassName = 'h-full w-full object-cover',
  eager = false,
  timeoutMs = 5000,
}) {
  const [state, setState] = useState('loading'); // 'loading' | 'loaded' | 'errored'
  const timerRef = useRef(null);

  useEffect(() => {
    if (!src) {
      setState('errored');
      return undefined;
    }
    setState('loading');
    timerRef.current = setTimeout(() => {
      setState((s) => (s === 'loading' ? 'errored' : s));
    }, timeoutMs);
    return () => clearTimeout(timerRef.current);
  }, [src, timeoutMs]);

  const showImg = state !== 'errored' && src;
  const showFallback = state === 'errored' || !src;

  return (
    <div className={`relative isolate overflow-hidden bg-coal-raised ${className}`}>
      {showImg && (
        <img
          src={src}
          alt={`${brand} ${model} ${year} (foto referencial)`}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => {
            clearTimeout(timerRef.current);
            setState('loaded');
          }}
          onError={() => {
            clearTimeout(timerRef.current);
            setState('errored');
          }}
          className={`${imgClassName} ${state === 'loaded' ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        />
      )}

      {/* Loading shimmer (visible while not loaded and not errored) */}
      {state === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center bg-coal-elevated">
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-ink-faint">
            Cargando…
          </span>
        </div>
      )}

      {/* Typographic fallback */}
      {showFallback && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-coal-elevated via-coal-card to-coal p-6 text-center">
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
            Foto referencial pendiente
          </span>
        </div>
      )}

      {/* Cinematic vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-coal/95 via-coal/15 to-transparent"
      />
    </div>
  );
}
