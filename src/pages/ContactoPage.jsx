import { Mail, MessageCircle, MapPin } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import LeadForm from '../components/LeadForm.jsx';

export default function ContactoPage() {
  return (
    <>
      <Seo
        title="Contacto"
        description="Escríbenos por formulario o WhatsApp. Te contactamos en 24 horas hábiles."
        path="/contacto"
      />
      <div className="section">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="eyebrow">Contacto</p>
            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
              Cuéntanos qué auto buscas
            </h1>
            <p className="mt-3 max-w-xl text-text-muted">
              Respondemos en menos de 24 horas hábiles. Si prefieres,
              escríbenos directo por WhatsApp.
            </p>

            <div className="card mt-8 p-6 sm:p-8">
              <LeadForm />
            </div>
          </div>

          <aside className="space-y-4">
            <div className="card p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
                Canales directos
              </h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <a
                    href="https://wa.me/56900000000"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-start gap-3 text-text hover:text-brand-orange"
                  >
                    <MessageCircle size={18} className="mt-0.5 text-brand-orange" aria-hidden="true" />
                    <span>
                      <span className="block font-medium">WhatsApp</span>
                      <span className="text-text-muted">+56 9 0000 0000</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hola@maoscars.cl"
                    className="flex items-start gap-3 text-text hover:text-brand-orange"
                  >
                    <Mail size={18} className="mt-0.5 text-brand-orange" aria-hidden="true" />
                    <span>
                      <span className="block font-medium">Email</span>
                      <span className="text-text-muted">hola@maoscars.cl</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-text-muted">
                  <MapPin size={18} className="mt-0.5 text-brand-orange" aria-hidden="true" />
                  <span>
                    <span className="block font-medium text-text">Oficina</span>
                    Santiago, Chile
                  </span>
                </li>
              </ul>
            </div>

            <div className="card p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
                Horario
              </h2>
              <p className="mt-3 text-sm text-text-muted">
                Lun a vie: 9:00 — 19:00<br />
                Sáb: 10:00 — 14:00
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
