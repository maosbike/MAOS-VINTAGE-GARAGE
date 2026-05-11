import { MessageCircle } from 'lucide-react';

const PHONE = '56900000000';
const MESSAGE = encodeURIComponent(
  'Hola MaosCars, me interesa importar un auto clásico.'
);

export default function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-bg"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
