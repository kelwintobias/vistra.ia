import React, { useState } from 'react';
import { Terminal, AlertTriangle, CheckCircle2, Cpu, Zap, ArrowRight, MessageCircle, BarChart3, Users, ChevronDown, ChevronUp } from 'lucide-react';

// Keeping the existing WhatsApp link as requested
const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5514981400272&text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es&type=phone_number&app_absent=0";

export const VistraConcierge: React.FC = () => {
  const handleCtaClick = () => {
    window.open(WHATSAPP_URL, '_blank');
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-vistra-black text-vistra-white">
      
      {/* Decorative Background */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{
             backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>

      {/* HEADER */}
      <header className="z-50 w-full border-b border-vistra-gray bg-vistra-black/80 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <img src="/imagens/logovistra.jpg" alt="Vistra.IA Logo" className="h-10 w-10 rounded-full object-cover border border-vistra-neon/20" />
                <span className="font-mono text-xl font-bold tracking-[0.2em] text-vistra-white hidden sm:block">
                VISTRA.IA
                </span>
            </div>
            <div>
                <span className="font-mono text-[10px] sm:text-xs text-vistra-neon border border-vistra-neon/30 px-3 py-1.5 bg-vistra-neon/5 rounded-full flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-vistra-neon animate-pulse"></span>
                SYSTEM STATUS: OPERATING 24/7
                </span>
            </div>
        </div>
      </header>

      <div className="z-10 w-full max-w-5xl px-4 flex-1 flex flex-col items-center">
        
        {/* HERO SECTION */}
        <section className="py-16 sm:py-24 text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vistra-gray/50 border border-vistra-gray mb-4">
                <span className="text-vistra-neon text-sm font-mono font-bold">NOVO</span>
                <span className="text-gray-400 text-xs">Agente de IA com Atendimento Humanizado</span>
            </div>
            
            <h1 className="font-sans text-4xl sm:text-6xl font-black leading-[1.1] tracking-tight">
                Engenharia de Receita que<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-vistra-neon to-green-600">
                    converte leads em contratos
                </span>
            </h1>
            
            <p className="font-sans text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Você investe em tráfego, gestão e processos, mas sua conversão continua travada? 
                <br className="hidden sm:block" />
                A verdade é simples: seu funil não falha na captação. <strong>Ele falha no acolhimento.</strong>
            </p>

            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                    onClick={handleCtaClick}
                    className="group relative flex items-center justify-center gap-3 bg-[#25D366] px-8 py-4 text-base font-bold uppercase tracking-wide text-black transition-all duration-200 hover:bg-white hover:scale-105 rounded-lg shadow-[0_0_20px_rgba(37,211,102,0.2)]"
                >
                    <MessageCircle className="h-6 w-6" />
                    <span>Falar com a IA da Vistra</span>
                </button>
                <div className="text-xs font-mono text-gray-500 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Resposta Imediata
                </div>
            </div>
        </section>

        {/* AVATAR / AUTHORITY */}
        <div className="mb-24 relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-vistra-neon to-green-600 rounded-full opacity-25 group-hover:opacity-50 blur transition duration-200"></div>
            <img 
                src="/imagens/avatarvistra.png" 
                alt="Agente Vistra" 
                className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-full border-4 border-vistra-black object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-vistra-black border border-vistra-neon p-1.5 rounded-full">
                <Zap size={16} className="text-vistra-neon fill-current" />
            </div>
        </div>

        {/* COMPARISON SECTION */}
        <section className="w-full grid gap-8 md:grid-cols-2 mb-24">
            {/* SEM VISTRA */}
            <div className="bg-zinc-900/50 border border-red-900/30 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <AlertTriangle size={120} />
                </div>
                <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-3">
                    <AlertTriangle className="shrink-0" /> Sem a Vistra.IA
                </h3>
                <ul className="space-y-4">
                    <ComparisonItem icon={<span className="text-red-500 text-xl font-bold">-</span>}>
                        Leads chegam fora de hora e esfriam sem resposta
                    </ComparisonItem>
                    <ComparisonItem icon={<span className="text-red-500 text-xl font-bold">-</span>}>
                        Vendedores esquecem de fazer follow-up
                    </ComparisonItem>
                    <ComparisonItem icon={<span className="text-red-500 text-xl font-bold">-</span>}>
                        Curiosos tomam tempo precioso da equipe comercial
                    </ComparisonItem>
                    <ComparisonItem icon={<span className="text-red-500 text-xl font-bold">-</span>}>
                        Cliente ideal desiste no primeiro "olá" seco
                    </ComparisonItem>
                    <ComparisonItem icon={<span className="text-red-500 text-xl font-bold">-</span>}>
                        Você paga a conta com a agenda vazia
                    </ComparisonItem>
                </ul>
            </div>

            {/* COM VISTRA */}
            <div className="bg-zinc-900/80 border border-vistra-neon/30 rounded-2xl p-8 relative overflow-hidden shadow-[0_0_50px_rgba(57,255,20,0.05)]">
                 <div className="absolute top-0 right-0 p-4 opacity-5">
                    <CheckCircle2 size={120} />
                </div>
                <h3 className="text-2xl font-bold text-vistra-neon mb-6 flex items-center gap-3">
                    <CheckCircle2 className="shrink-0" /> Com a Vistra.IA
                </h3>
                <ul className="space-y-4">
                    <ComparisonItem icon={<CheckCircle2 size={20} className="text-vistra-neon shrink-0" />}>
                        Atendimento instantâneo, humanizado e padronizado 24/7
                    </ComparisonItem>
                    <ComparisonItem icon={<CheckCircle2 size={20} className="text-vistra-neon shrink-0" />}>
                        Follow-up infinito e automatizado sem falhas
                    </ComparisonItem>
                    <ComparisonItem icon={<CheckCircle2 size={20} className="text-vistra-neon shrink-0" />}>
                        Qualificação automática: só reais interessados chegam na equipe
                    </ComparisonItem>
                    <ComparisonItem icon={<CheckCircle2 size={20} className="text-vistra-neon shrink-0" />}>
                        Acolhimento profissional desde o primeiro segundo
                    </ComparisonItem>
                    <ComparisonItem icon={<CheckCircle2 size={20} className="text-vistra-neon shrink-0" />}>
                        Dados reais e equipe focada em fechar negócios
                    </ComparisonItem>
                </ul>
            </div>
        </section>

        {/* FEATURE HIGHLIGHTS */}
        <section className="mb-24 text-center">
             <h2 className="text-3xl font-bold mb-12">
                Tecnologia, estratégia e execução integradas
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 <FeatureCard 
                    icon={<Terminal size={32} />}
                    title="IA no WhatsApp 24h"
                    desc="Entende áudio, texto e imagem. Responde objeções e reativa leads automaticamente."
                 />
                 <FeatureCard 
                    icon={<Cpu size={32} />}
                    title="Integração CRM"
                    desc="Move cards no funil, registra conversas e alerta vendedores no timing exato."
                 />
                 <FeatureCard 
                    icon={<Users size={32} />}
                    title="Suporte Humano"
                    desc="Acompanhamento estratégico, implementação guiada e treinamento para seu time."
                 />
                 <FeatureCard 
                    icon={<BarChart3 size={32} />}
                    title="Dashboard Real"
                    desc="Acompanhe leads gerados, conversões e ROI em tempo real."
                 />
            </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="w-full max-w-3xl mb-24">
            <h2 className="text-3xl font-bold mb-8 text-center sm:text-left">
                Tudo o que você precisa saber
            </h2>
            <div className="space-y-4">
                <FaqItem 
                    question="A IA substitui minha equipe comercial?"
                    answer="Não. Ela potencializa sua equipe. A IA faz o primeiro atendimento, qualifica, responde dúvidas e passa o bastão apenas quando o lead está pronto para comprar. Seu time foca em fechar, não em triar."
                />
                <FaqItem 
                    question="A IA parece um robô?"
                    answer="Não. A Vistra.IA utiliza modelos avançados de linguagem natural. Ela entende gírias, áudios e contexto, respondendo de forma fluida e humana."
                />
                 <FaqItem 
                    question="Preciso ter um CRM específico?"
                    answer="A Vistra.IA se integra aos principais CRMs do mercado. Se você ainda não tem um, nós fornecemos a infraestrutura necessária."
                />
                <FaqItem 
                    question="Como funciona a implementação?"
                    answer="Nossa equipe cuida de tudo: configuração do fluxo, treinamento da IA com seus dados, integração e testes. Você recebe a chave com o motor ligado."
                />
            </div>
        </section>

        {/* FINAL CTA */}
        <section className="w-full bg-vistra-gray/20 border-y border-vistra-gray py-16 text-center">
            <div className="max-w-2xl mx-auto px-4 space-y-8">
                <h2 className="text-3xl sm:text-4xl font-bold">
                    Sua operação comercial dorme.<br /> 
                    <span className="text-vistra-neon">A Vistra.IA vende.</span>
                </h2>
                 <button
                    onClick={handleCtaClick}
                    className="w-full sm:w-auto bg-[#25D366] hover:bg-white text-black font-bold uppercase tracking-wide py-4 px-10 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                >
                    Transformar meu WhatsApp em Máquina de Vendas
                </button>
            </div>
        </section>

        {/* FOOTER */}
        <footer className="w-full py-12 text-center text-gray-500 font-mono text-[10px] sm:text-xs">
            <div className="flex flex-col items-center gap-4">
                 <img src="/imagens/logovistra.jpg" alt="Vistra Badge" className="h-8 w-8 rounded-full grayscale opacity-50 hover:grayscale-0 transition-all" />
                 <p>VISTRA.IA © {new Date().getFullYear()} — REVENUE ENGINEERING SYSTEMS</p>
            </div>
        </footer>

      </div>
    </main>
  );
};

// HELPER COMPONENTS

const ComparisonItem: React.FC<{ icon: React.ReactNode; children: React.ReactNode }> = ({ icon, children }) => (
    <li className="flex items-start gap-4">
        <div className="mt-1">{icon}</div>
        <span className="text-gray-300 leading-snug">{children}</span>
    </li>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-vistra-neon/50 transition-colors duration-300 text-left">
        <div className="text-vistra-neon mb-4">{icon}</div>
        <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
        <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </div>
);

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-zinc-800 rounded-lg bg-zinc-900/40 overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800/50 transition-colors"
            >
                <span className="font-bold text-white pr-4">{question}</span>
                {isOpen ? <ChevronUp className="text-vistra-neon" /> : <ChevronDown className="text-gray-500" />}
            </button>
            {isOpen && (
                <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-zinc-800/50 pt-4">
                    {answer}
                </div>
            )}
        </div>
    );
};
