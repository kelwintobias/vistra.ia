import React from 'react';
import { Terminal, AlertTriangle, CheckCircle2, Cpu, Zap } from 'lucide-react';

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5514981400272&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es&type=phone_number&app_absent=0";

export const VistraLanding: React.FC = () => {
  const handleCtaClick = () => {
    window.open(WHATSAPP_URL, '_blank');
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-vistra-black px-4 py-12 md:py-24">

      {/* Decorative Technical Grid - Very subtle */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="z-10 w-full max-w-4xl space-y-16 sm:space-y-24">

        {/* HEADER / LOGO */}
        <header className="flex w-full items-center justify-between border-b border-vistra-gray pb-6">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-vistra-neon animate-pulse"></div>
            <span className="font-mono text-xl font-bold tracking-[0.2em] text-vistra-white">
              VISTRA.IA
            </span>
          </div>
          <div className="hidden sm:block">
            <span className="font-mono text-xs text-vistra-neon border border-vistra-neon/30 px-2 py-1 bg-vistra-neon/5 rounded-sm">
              SYSTEM STATUS: ONLINE
            </span>
          </div>
          <div className="sm:hidden block">
            <span className="font-mono text-[10px] text-vistra-neon border border-vistra-neon/30 px-1.5 py-0.5 bg-vistra-neon/5 rounded-sm">
              ONLINE
            </span>
          </div>
        </header>

        {/* SECTION 1: HEADLINE */}
        <section className="space-y-6 text-left sm:text-center">
          <div className="inline-block rounded-full border border-vistra-neon/30 bg-vistra-neon/10 px-3 py-1 mb-4">
            <span className="text-xs font-bold tracking-widest text-vistra-neon uppercase">NOVO</span>
          </div>
          <h1 className="font-sans text-4xl font-bold leading-[1.1] tracking-tighter text-vistra-white sm:text-6xl lg:text-7xl">
            Instale um SDR de Inteligência Artificial no seu WhatsApp e <br className="hidden sm:block" />
            <span className="text-vistra-neon">atenda cada lead em 3 segundos, 24/7.</span>
          </h1>
        </section>

        {/* SECTION 2: SUBHEADLINE */}
        <section className="relative border-l-2 border-vistra-neon/50 bg-vistra-gray/20 p-6 pl-6 sm:border-l-0 sm:border-t-2 sm:bg-transparent sm:p-0 sm:pt-8 min-h-[100px]">
          <p className="font-sans text-lg leading-relaxed text-gray-300 sm:text-xl sm:text-center max-w-3xl mx-auto">
            Pare de deixar leads esfriarem. A Vistra qualifica, nutre e agenda reuniões automaticamente enquanto sua equipe dorme.
          </p>
        </section>

        {/* SECTION 3: PAIN POINTS (COMPARISON CARDS) */}
        <section className="grid gap-6 sm:grid-cols-2">

          {/* CARD: MANUAL (PROBLEM) */}
          <div className="flex flex-col gap-6 rounded-2xl border border-white/5 bg-white/5 p-6 sm:p-8 relative overflow-hidden group hover:border-red-500/30 transition-colors duration-500">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                <AlertTriangle size={20} />
              </div>
              <h3 className="font-mono text-lg font-bold text-gray-200">
                PROCESSO MANUAL <br />
                <span className="text-sm text-red-400 font-normal">(LENTO)</span>
              </h3>
            </div>

            <ul className="space-y-4">
              <PainPointItem text="Sem a Vistra.IA: Leads esperam horas por resposta" />
              <PainPointItem text="Sem a Vistra.IA: Vendedores desistem no 1º 'não'" />
              <PainPointItem text="Sem a Vistra.IA: Follow-up desorganizado" />
              <PainPointItem text="Sem a Vistra.IA: Atendimento limitado ao horário comercial" />
            </ul>
          </div>

          {/* CARD: VISTRA (SOLUTION) */}
          <div className="flex flex-col gap-6 rounded-2xl border border-vistra-neon/30 bg-vistra-neon/5 p-6 sm:p-8 relative overflow-hidden shadow-[0_0_40px_-10px_rgba(37,211,102,0.1)]">
            {/* Highlight effect */}
            <div className="absolute top-0 right-0 h-24 w-24 bg-vistra-neon/10 blur-3xl rounded-full -mr-10 -mt-10 pointer-events-none"></div>

            <div className="flex items-center gap-3 border-b border-vistra-neon/20 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-vistra-neon/10 text-vistra-neon">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="font-mono text-lg font-bold text-white">
                COM VISTRA.IA <br />
                <span className="text-sm text-vistra-neon font-normal">(INSTANTÂNEO)</span>
              </h3>
            </div>

            <ul className="space-y-4">
              <SolutionItem text="Atendimento em 3 segundos (24h por dia)" />
              <SolutionItem text="Follow-up infinito até a conversão" />
              <SolutionItem text="Qualificação automática de leads" />
              <SolutionItem text="Agendamento direto no calendário" />
            </ul>
          </div>
        </section>

        {/* SECTION 4: AUTHORITY / POSITIONING (Existing, slight tweak potentially, but keeping as is per request logic to focus on changes) */}
        {/* We keep the infrastructure section but maybe move it down or keep it as credibility anchor */}
        <section className="flex flex-col items-start gap-6 border border-vistra-gray bg-zinc-900/30 p-8 sm:items-center sm:text-center rounded-xl">
          <Cpu className="h-10 w-10 text-vistra-neon mb-2" />
          <div className="space-y-2">
            <h2 className="font-sans text-2xl font-bold text-white">
              Não somos agência. Não vendemos software.
            </h2>
            <p className="font-mono text-sm text-vistra-neon">
                    // CONSTRUÍMOS INFRAESTRUTURA DE RECEITA
            </p>
          </div>
        </section>

        {/* SECTION 5: CTA */}
        <section className="flex flex-col items-center gap-8 pt-8">
          <button
            onClick={handleCtaClick}
            className="group relative flex w-full max-w-md items-center justify-center gap-3 bg-[#25D366] px-8 py-6 text-lg font-bold uppercase tracking-wide text-black transition-all duration-200 hover:bg-white hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] sm:text-xl rounded-lg"
          >
            <WhatsAppIcon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
            <span>Ver a IA Negociando ao Vivo</span>

            {/* Blinking overlay effect */}
            <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-100 group-hover:opacity-100 rounded-lg"></div>
          </button>

          {/* Social Proof Placeholder */}
          <div className="flex flex-col items-center gap-3 text-center opacity-80">
            <span className="text-sm text-zinc-400 font-sans tracking-tight">Tecnologia de ponta para escalar operações comerciais</span>
            <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholder boxes for logos */}
              <div className="h-6 w-20 bg-white/10 rounded"></div>
              <div className="h-6 w-20 bg-white/10 rounded"></div>
              <div className="h-6 w-20 bg-white/10 rounded"></div>
            </div>
          </div>
        </section>

        {/* Implementation Highlight */}
        <div className="w-full flex justify-center py-8">
          <div className="flex items-center gap-3 rounded-full border border-vistra-gray bg-zinc-950 px-6 py-3 text-xs sm:text-sm text-zinc-400">
            <Zap size={16} className="text-yellow-500" />
            <span><strong className="text-white">Implementação Relâmpago:</strong> Conectamos ao seu WhatsApp e CRM em menos de 48h.</span>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="pt-10 text-center border-t border-vistra-gray/30 w-full">
          <p className="font-mono text-[10px] text-zinc-600">
            VISTRA.IA © {new Date().getFullYear()} — REVENUE ENGINEERING SYSTEMS
          </p>
        </footer>

      </div>
    </main>
  );
};

// Helper Components for clean code
const PainPointItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start gap-3 text-gray-400 group">
    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-red-900 group-hover:bg-red-500 transition-colors duration-300"></span>
    <span className="font-sans">{text}</span>
  </li>
);

const SolutionItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start gap-3 text-white group">
    <CheckCircle2 size={18} className="text-vistra-neon shrink-0 mt-0.5" />
    <span className="font-sans font-medium">{text}</span>
  </li>
);

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);