export default function Logo({ className = 'h-9 sm:h-10', priority = false }) {
  return (
    <img
      src="/logo.webp"
      alt="Maos Vintage Garage"
      width="800"
      height="280"
      loading={priority ? 'eager' : 'lazy'}
      fetchpriority={priority ? 'high' : 'auto'}
      decoding="async"
      className={`${className} w-auto select-none`}
      draggable="false"
    />
  );
}
