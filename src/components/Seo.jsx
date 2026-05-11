import { Helmet } from 'react-helmet-async';

export default function Seo({
  title,
  description,
  path = '/',
  image,
}) {
  const fullTitle = title
    ? `${title} — MaosCars`
    : 'MaosCars — Importación de autos clásicos desde USA y Alemania';
  const desc =
    description ||
    'Importación bajo pedido de autos clásicos desde USA y Alemania a Chile. Transparencia total, sin sorpresas.';
  const url = `https://maoscars.cl${path}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}
