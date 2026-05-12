import { MessageCircle } from 'lucide-react';

const PHONE = '56900000000';
const MESSAGE = encodeURIComponent(
  'Hola Maos Vintage Garage, me interesa importar un auto clásico.'
);

export default function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-cognac/40 bg-coal-raised text-cognac shadow-plate transition-all hover:scale-105 hover:bg-cognac hover:text-coal focus:outline-none focus:ring-2 focus:ring-cognac focus:ring-offset-2 focus:ring-offset-coal"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
