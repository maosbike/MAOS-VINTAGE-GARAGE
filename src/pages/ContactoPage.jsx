import { Mail, MessageCircle, MapPin } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import LeadForm from '../components/LeadForm.jsx';
import CheckerStrip from '../components/CheckerStrip.jsx';

export default function ContactoPage() {
  return (
    <>
      <Seo
        title="Contacto"
        description="Escríbenos por formulario o WhatsApp. Te contactamos en 24 horas hábiles."
        path="/contacto"
      />
      <div className="section">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="eyebrow">Contacto</p>
            <h1 className="h-display mt-2 text-[clamp(2.2rem,7vw,4.5rem)]">
              Cuéntanos qué<br />auto buscas
            </h1>
            <p className="mt-3 max-w-xl text-text-muted">
              Respondemos en menos de 24 horas hábiles. Si prefieres,
              escríbenos directo por WhatsApp.
            </p>

            <CheckerStrip height="h-2" size="sm" className="mt-8" />

            <div className="card mt-2 overflow-hidden">
              <div className="border-b border-bg-border bg-bg-card p-5">
                <h2 className="h-display text-2xl">Formulario</h2>
              </div>
              <div className="p-5 sm:p-7">
                <LeadForm />
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="card overflow-hidden">
              <div className="border-b border-bg-border bg-bg-card p-5">
                <h2 className="h-display text-xl">Canales directos</h2>
              </div>
              <ul className="space-y-4 p-5 text-sm">
                <li>
                  <a
                    href="https://wa.me/56900000000"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-start gap-3 text-text hover:text-brand-orange"
                  >
                    <MessageCircle size={20} className="mt-0.5 text-brand-orange" aria-hidden="true" />
                    <span>
                      <span className="block font-semibold uppercase tracking-wider">WhatsApp</span>
                      <span className="font-mono text-text-muted">+56 9 0000 0000</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hola@maoscars.cl"
                    className="flex items-start gap-3 text-text hover:text-brand-orange"
                  >
                    <Mail size={20} className="mt-0.5 text-brand-orange" aria-hidden="true" />
                    <span>
                      <span className="block font-semibold uppercase tracking-wider">Email</span>
                      <span className="font-mono text-text-muted">hola@maoscars.cl</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-text-muted">
                  <MapPin size={20} className="mt-0.5 text-brand-orange" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold uppercase tracking-wider text-text">Oficina</span>
                    Santiago, Chile
                  </span>
                </li>
              </ul>
            </div>

            <div className="card overflow-hidden">
              <div className="border-b border-bg-border bg-bg-card p-5">
                <h2 className="h-display text-xl">Horario</h2>
              </div>
              <p className="p-5 font-mono text-sm text-text-muted">
                Lun a Vie · 9:00 — 19:00<br />
                Sáb · 10:00 — 14:00
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
