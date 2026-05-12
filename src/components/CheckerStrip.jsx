export default function CheckerStrip({
  height = 'h-4',
  className = '',
  animated = false,
  size = 'md',
}) {
  const pattern = size === 'sm' ? 'checker-sm' : 'checker';
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={`${pattern} ${height} w-full ${
        animated ? 'animate-checker-slide' : ''
      } ${className}`}
    />
  );
}
