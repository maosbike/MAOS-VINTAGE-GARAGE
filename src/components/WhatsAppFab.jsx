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
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-racing-green text-paper-light shadow-paper transition-transform hover:scale-105 hover:bg-racing-deep focus:outline-none focus:ring-2 focus:ring-oxblood focus:ring-offset-2 focus:ring-offset-paper"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
