export default function Logo({ className = 'h-12 sm:h-14', priority = false }) {
  return (
    <img
      src="/logo.webp"
      alt="Maos Vintage Garage"
      width="1200"
      height="420"
      loading={priority ? 'eager' : 'lazy'}
      fetchpriority={priority ? 'high' : 'auto'}
      decoding="async"
      className={`${className} w-auto select-none`}
      draggable="false"
    />
  );
}
