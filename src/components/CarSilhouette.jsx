// Generic stylized silhouettes per body type — used in lieu of real photos
// so we never show a misleading image. Designed in cream/ink palette.

const PATHS = {
  coupe: (
    <>
      <path
        d="M40 230 L70 230 Q75 195 110 188 L170 175 Q200 150 250 145 L340 145 Q380 150 420 175 L500 195 Q540 200 555 215 L570 230 L620 230 L620 250 L40 250 Z"
        fill="currentColor"
      />
      <circle cx="160" cy="245" r="28" fill="#1a1410" />
      <circle cx="160" cy="245" r="14" fill="#efe5c7" />
      <circle cx="490" cy="245" r="28" fill="#1a1410" />
      <circle cx="490" cy="245" r="14" fill="#efe5c7" />
      <path
        d="M240 145 L260 175 L420 175 L400 150 Q380 150 250 145 Z"
        fill="rgba(255,255,255,0.25)"
      />
    </>
  ),
  convertible: (
    <>
      <path
        d="M40 230 L70 230 Q75 200 110 192 L180 178 Q210 168 260 168 L420 168 Q470 168 510 195 L560 215 Q580 220 595 230 L620 230 L620 250 L40 250 Z"
        fill="currentColor"
      />
      <circle cx="160" cy="245" r="28" fill="#1a1410" />
      <circle cx="160" cy="245" r="14" fill="#efe5c7" />
      <circle cx="490" cy="245" r="28" fill="#1a1410" />
      <circle cx="490" cy="245" r="14" fill="#efe5c7" />
      <path
        d="M210 178 L420 168"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="3"
        fill="none"
      />
    </>
  ),
  pickup: (
    <>
      <path
        d="M30 230 L60 230 Q65 195 110 188 L180 175 Q210 160 280 160 L340 160 L355 195 L600 195 L600 250 L30 250 Z"
        fill="currentColor"
      />
      <path
        d="M355 195 L355 230 L600 230 L600 195"
        fill="rgba(0,0,0,0.25)"
      />
      <circle cx="160" cy="245" r="28" fill="#1a1410" />
      <circle cx="160" cy="245" r="14" fill="#efe5c7" />
      <circle cx="500" cy="245" r="28" fill="#1a1410" />
      <circle cx="500" cy="245" r="14" fill="#efe5c7" />
      <path
        d="M210 175 L330 175 L340 195 L220 195 Z"
        fill="rgba(255,255,255,0.25)"
      />
    </>
  ),
  suv: (
    <>
      <path
        d="M40 235 L70 235 L75 165 Q80 150 130 150 L420 150 Q470 150 490 165 L555 195 Q585 200 600 215 L620 235 L620 255 L40 255 Z"
        fill="currentColor"
      />
      <circle cx="160" cy="245" r="28" fill="#1a1410" />
      <circle cx="160" cy="245" r="14" fill="#efe5c7" />
      <circle cx="510" cy="245" r="28" fill="#1a1410" />
      <circle cx="510" cy="245" r="14" fill="#efe5c7" />
      <path
        d="M130 165 L460 165 L460 195 L130 195 Z"
        fill="rgba(255,255,255,0.22)"
      />
    </>
  ),
  van: (
    <>
      <path
        d="M40 235 L60 235 L65 150 Q70 135 130 135 L470 135 Q510 135 525 155 L575 200 Q600 205 615 220 L620 235 L620 255 L40 255 Z"
        fill="currentColor"
      />
      <circle cx="160" cy="245" r="28" fill="#1a1410" />
      <circle cx="160" cy="245" r="14" fill="#efe5c7" />
      <circle cx="510" cy="245" r="28" fill="#1a1410" />
      <circle cx="510" cy="245" r="14" fill="#efe5c7" />
      <rect
        x="100"
        y="155"
        width="160"
        height="40"
        fill="rgba(255,255,255,0.28)"
      />
      <rect
        x="280"
        y="155"
        width="180"
        height="40"
        fill="rgba(255,255,255,0.28)"
      />
    </>
  ),
};

export default function CarSilhouette({
  bodyType = 'coupe',
  className = '',
  color = '#1a1410',
}) {
  const content = PATHS[bodyType] || PATHS.coupe;
  return (
    <svg
      viewBox="0 0 660 280"
      role="img"
      aria-label={`Silueta de ${bodyType}`}
      className={className}
      style={{ color }}
    >
      {/* Ground line */}
      <line
        x1="20"
        x2="640"
        y1="270"
        y2="270"
        stroke="rgba(26,20,16,0.18)"
        strokeWidth="2"
        strokeDasharray="6 6"
      />
      {content}
    </svg>
  );
}
