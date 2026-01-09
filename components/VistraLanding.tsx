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

      <div className="z-10 w-full max-w-3xl space-y-16 sm:space-y-24">
        
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
        </header>

        {/* SECTION 1: HEADLINE */}
        <section className="space-y-6 text-left sm:text-center">
          <h1 className="font-sans text-4xl font-bold leading-[1.1] tracking-tighter text-vistra-white sm:text-6xl lg:text-7xl">
            Seu vendedor escolhe<br />
            <span className="text-vistra-textGray line-through decoration-vistra-textGray/50">pra quem vender.</span><br />
            <span className="text-vistra-neon">Nossa IA vende para TODOS.</span>
          </h1>
        </section>

        {/* SECTION 2: SUBHEADLINE */}
        <section className="relative border-l-2 border-vistra-neon/50 bg-vistra-gray/20 p-6 pl-6 sm:border-l-0 sm:border-t-2 sm:bg-transparent sm:p-0 sm:pt-8">
          <p className="font-sans text-lg leading-relaxed text-gray-300 sm:text-xl sm:text-center max-w-2xl mx-auto">
            Distribuidoras e indústrias perdem dinheiro todos os dias porque vendedores humanos só ligam para quem dá comissão fácil.
            <br /><br />
            <span className="text-white font-semibold">A Vistra.ia constrói agentes de IA que varrem 100% da sua base</span>, recuperam clientes inativos e transformam estoque parado em faturamento previsível.
          </p>
        </section>

        {/* SECTION 3: PAIN POINTS */}
        <section className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-4">
                <h3 className="font-mono text-sm uppercase tracking-widest text-red-500 mb-6 flex items-center gap-2">
                    <AlertTriangle size={16} /> O PROBLEMA ATUAL
                </h3>
                <ul className="space-y-4">
                    <PainPointItem text="Vendedores priorizam apenas parte da carteira, focando nos clientes com maior retorno imediato." />
                    <PainPointItem text="Clientes somem e ninguém percebe" />
                    <PainPointItem text="Estoque parado vira custo, não caixa" />
                    <PainPointItem text="Relacionamento refém do vendedor" />
                </ul>
            </div>
            
            <div className="space-y-4 mt-8 sm:mt-0">
                <h3 className="font-mono text-sm uppercase tracking-widest text-vistra-neon mb-6 flex items-center gap-2">
                    <Zap size={16} /> SOLUÇÃO VISTRA
                </h3>
                <ul className="space-y-4">
                    <SolutionItem text="Cobertura de 100% da base ativa e inativa" />
                    <SolutionItem text="Follow-up infinito e automatizado" />
                    <SolutionItem text="Foco total em produtos de margem/estoque" />
                    <SolutionItem text="Controle total dos dados pela empresa" />
                </ul>
            </div>
        </section>

        {/* SECTION 4: AUTHORITY / POSITIONING */}
        <section className="flex flex-col items-start gap-6 border border-vistra-gray bg-zinc-900/30 p-8 sm:items-center sm:text-center">
            <Cpu className="h-10 w-10 text-vistra-neon mb-2" />
            <div className="space-y-2">
                <h2 className="font-sans text-2xl font-bold text-white">
                    Não somos agência. Não vendemos software.
                </h2>
                <p className="font-mono text-sm text-vistra-neon">
                    // CONSTRUÍMOS INFRAESTRUTURA DE RECEITA
                </p>
            </div>
            <p className="max-w-xl text-gray-400">
                O robô não tem preguiça. Não esquece cliente. Não escolhe comissão.
                Implementamos a máquina, integramos ao seu CRM e colocamos para rodar.
            </p>
        </section>

        {/* SECTION 5: CTA */}
        <section className="flex flex-col items-center gap-6 pt-8">
          <button
            onClick={handleCtaClick}
            className="group relative flex w-full max-w-md items-center justify-center gap-3 bg-[#25D366] px-8 py-6 text-lg font-bold uppercase tracking-wide text-black transition-all duration-200 hover:bg-white hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] sm:text-xl"
          >
            <WhatsAppIcon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
            <span>Falar com a IA da Vistra Agora</span>
            
            {/* Blinking overlay effect */}
            <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-100 group-hover:opacity-100"></div>
          </button>

          <div className="flex flex-col items-center gap-1 text-center">
             <div className="flex items-center gap-2 text-xs font-mono text-vistra-textGray uppercase tracking-wider">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                Conversa direta no WhatsApp
             </div>
             <span className="text-xs text-zinc-600 font-mono">Sem pitch. Sem enrolação.</span>
          </div>
        </section>
        
        {/* FOOTER */}
        <footer className="pt-20 text-center">
            <p className="font-mono text-[10px] text-zinc-800">
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
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);