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
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="eyebrow">Contacto · Empezar conversación</p>
            <h1 className="h-display mt-4 text-[clamp(2.4rem,8vw,5.5rem)]">
              Cuéntanos qué<br />
              <em className="italic text-oxblood">auto sueñas.</em>
            </h1>
            <p className="mt-4 max-w-xl font-serif text-lg italic text-ink-soft">
              Respondemos en menos de 24 horas hábiles. Si prefieres, escríbenos directo por WhatsApp.
            </p>

            <div className="card-paper mt-10 overflow-hidden">
              <div className="border-b border-ink-line bg-paper-dark/40 px-5 py-4">
                <h2 className="font-display text-2xl font-bold text-ink">Formulario</h2>
                <p className="font-mono text-[10px] uppercase tracking-widest2 text-ink-muted">
                  Sección A · Tus datos
                </p>
              </div>
              <div className="p-5 sm:p-7">
                <LeadForm />
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="card-paper overflow-hidden">
              <div className="border-b border-ink-line bg-paper-dark/40 px-5 py-4">
                <h2 className="font-display text-xl font-bold">Canales directos</h2>
              </div>
              <ul className="space-y-5 p-5">
                <li>
                  <a
                    href="https://wa.me/56900000000"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-start gap-3 text-ink hover:text-oxblood"
                  >
                    <MessageCircle size={20} className="mt-0.5 text-oxblood" aria-hidden="true" />
                    <span>
                      <span className="block font-mono text-[10px] font-bold uppercase tracking-widest2 text-ink-muted">WhatsApp</span>
                      <span className="font-serif text-base">+56 9 0000 0000</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hola@maoscars.cl"
                    className="flex items-start gap-3 text-ink hover:text-oxblood"
                  >
                    <Mail size={20} className="mt-0.5 text-oxblood" aria-hidden="true" />
                    <span>
                      <span className="block font-mono text-[10px] font-bold uppercase tracking-widest2 text-ink-muted">Email</span>
                      <span className="font-serif text-base">hola@maoscars.cl</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-ink-soft">
                  <MapPin size={20} className="mt-0.5 text-oxblood" aria-hidden="true" />
                  <span>
                    <span className="block font-mono text-[10px] font-bold uppercase tracking-widest2 text-ink-muted">Oficina</span>
                    <span className="font-serif text-base">Santiago, Chile</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="card-paper overflow-hidden">
              <div className="border-b border-ink-line bg-paper-dark/40 px-5 py-4">
                <h2 className="font-display text-xl font-bold">Horario</h2>
              </div>
              <p className="p-5 font-mono text-sm leading-relaxed text-ink-soft">
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
