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
          {/* Tagline/Hook */}
          <div className="inline-block rounded-full border border-vistra-neon/30 bg-vistra-neon/10 px-3 py-1 mb-4">
            <span className="text-xs font-bold tracking-widest text-vistra-neon uppercase">PROTOCOLO DE 3 SEGUNDOS</span>
          </div>

          <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-vistra-white mb-4">
            O Protocolo de 3 Segundos que Liquida Estoque Encalhado de <span className="text-vistra-neon">R$ 50k+</span> Sem Gastar com Anúncios.
          </h1>
        </section>

        {/* SECTION 2: SUBHEADLINE */}
        <section className="relative border-l-2 border-vistra-neon/50 bg-vistra-gray/20 p-6 pl-6 sm:border-l-0 sm:border-t-2 sm:bg-transparent sm:p-0 sm:pt-8 min-h-[100px]">
          <p className="font-sans text-lg leading-relaxed text-gray-300 sm:text-xl sm:text-center max-w-3xl mx-auto">
            Utilizamos uma IA de Engenharia de Receita para reativar leads mortos no seu CRM e gerar agendamentos automáticos. <strong>Não é agência, não é software: é infraestrutura de liquidação.</strong>
          </p>
        </section>

        {/* SECTION 3: SOCIAL PROOF (UNIFIED CARDS) */}
        <section className="grid gap-6 sm:grid-cols-3">
          {/* Card 1 */}
          <div className="flex flex-col items-center justify-center p-6 rounded-xl border border-vistra-neon/20 bg-vistra-neon/5 backdrop-blur-sm text-center transform transition-all duration-300 hover:scale-105 hover:border-vistra-neon/50">
            <span className="text-4xl font-bold text-white mb-2">R$ 12M+</span>
            <span className="text-xs font-mono text-vistra-textGray uppercase tracking-widest">Recuperados (Histórico)</span>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center justify-center p-6 rounded-xl border border-vistra-neon/20 bg-vistra-neon/5 backdrop-blur-sm text-center transform transition-all duration-300 hover:scale-105 hover:border-vistra-neon/50">
            <span className="text-4xl font-bold text-white mb-2">3 Seg</span>
            <span className="text-xs font-mono text-vistra-textGray uppercase tracking-widest">Tempo Médio de Resposta</span>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center justify-center p-6 rounded-xl border border-vistra-neon/20 bg-vistra-neon/5 backdrop-blur-sm text-center transform transition-all duration-300 hover:scale-105 hover:border-vistra-neon/50">
            <span className="text-4xl font-bold text-white mb-2">24/7</span>
            <span className="text-xs font-mono text-vistra-textGray uppercase tracking-widest">Operação da IA</span>
          </div>
        </section>


        {/* SECTION 4: COMPARISON (DOR VS PRAZER - HIGH CONTRAST) */}
        <section className="grid gap-6 sm:grid-cols-2 pt-8">

          {/* CARD: MANUAL (DOR/PAIN) - Black & White / Red Tint */}
          <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-zinc-950 p-6 sm:p-8 relative overflow-hidden grayscale-0 sm:grayscale sm:hover:grayscale-0 hover:border-red-500/50 transition-all duration-500 group">
            {/* Glitch overlay maybe? Keeping it simple but dark */}
            <div className="absolute inset-0 bg-red-900/5 pointer-events-none group-hover:bg-red-900/10 transition-colors"></div>

            <div className="flex items-center gap-3 border-b border-white/10 pb-4 z-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 group-hover:bg-red-500/10 group-hover:text-red-500 transition-colors">
                <AlertTriangle size={20} />
              </div>
              <h3 className="font-mono text-lg font-bold text-zinc-400 group-hover:text-white transition-colors">
                MODO MANUAL <br />
                <span className="text-sm text-zinc-600 font-normal group-hover:text-red-400">(LENTO & CARO)</span>
              </h3>
            </div>

            <ul className="space-y-4 z-10 opacity-70 group-hover:opacity-100 transition-opacity">
              <PainPointItem text="Horas/Dias para responder 1 lead" />
              <PainPointItem text="Vendedores desistem após 1 tentativa" />
              <PainPointItem text="Follow-up inexistente ou manual" />
              <PainPointItem text="Limitado ao horário comercial (8h-18h)" />
            </ul>
          </div>

          {/* CARD: VISTRA (PRAZER/GAIN) - Neon/Vibrant */}
          <div className="flex flex-col gap-6 rounded-2xl border-2 border-vistra-neon bg-vistra-neon/5 p-6 sm:p-8 relative overflow-hidden shadow-[0_0_50px_-10px_rgba(37,211,102,0.15)]">
            {/* Highlight effect */}
            <div className="absolute top-0 right-0 h-32 w-32 bg-vistra-neon/20 blur-[60px] rounded-full -mr-10 -mt-10 pointer-events-none"></div>

            <div className="flex items-center gap-3 border-b border-vistra-neon/20 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-vistra-neon text-black font-bold">
                <Zap size={20} />
              </div>
              <h3 className="font-mono text-lg font-bold text-white">
                VISTRA.IA <br />
                <span className="text-sm text-vistra-neon font-normal">(AUTOMÁTICO & LUCRO)</span>
              </h3>
            </div>

            <ul className="space-y-4">
              <SolutionItem text="Atendimento imediato em 3 segundos" />
              <SolutionItem text="Persistência infinita até agendar" />
              <SolutionItem text="Qualificação e triagem automática" />
              <SolutionItem text="Vendas ocorrendo 24h/7d (mesmo feriados)" />
            </ul>
          </div>
        </section>

        {/* SECTION 5: CTA */}
        <section className="flex flex-col items-center gap-8 pt-8 pb-12">

          {/* Credibility / Authority text moved here slightly modified if needed, or keep standard */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">Pare de perder dinheiro com estoque parado.</h2>
            <p className="text-zinc-400">Sua agenda lotada de clientes qualificados, sem esforço manual.</p>
          </div>

          <button
            onClick={handleCtaClick}
            className="group relative flex w-full max-w-md items-center justify-center gap-3 bg-[#25D366] px-8 py-6 text-lg font-bold uppercase tracking-wide text-black transition-all duration-200 hover:bg-white hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] sm:text-xl rounded-lg"
          >
            <WhatsAppIcon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
            <span>Agendar Diagnóstico Gratuito</span>

            {/* Blinking overlay effect */}
            <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-100 group-hover:opacity-100 rounded-lg"></div>
          </button>

          <div className="flex flex-col items-center gap-1 text-center">
            <span className="text-xs text-zinc-500 font-mono border-b border-zinc-800 pb-0.5">
              Ideal para estoques acima de <span className="text-yellow-500 font-bold">R$ 50k</span>
            </span>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-10 text-center border-t border-vistra-gray/30 w-full">
          <p className="font-mono text-[10px] text-zinc-600">
            VISTRA.IA © {new Date().getFullYear()} — INFRAESTRUTURA DE RECEITA
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