import React from 'react';
import { Smartphone, Check, BarChart3, BrainCircuit, Plug, XCircle, TrendingDown, AlertTriangle, Calendar, Gift, Users, Trophy, ShieldCheck, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#39FF14] selection:text-black overflow-x-hidden">

      {/* 1. Header & Headline */}
      <header className="px-5 pt-10 pb-4 text-center max-w-5xl mx-auto">
        <div className="bg-red-600/20 border border-red-500/50 text-red-500 text-center py-2 px-4 rounded-full font-bold text-xs md:text-sm inline-block mb-8 animate-pulse">
          🚀 Pare de Rasgar Dinheiro com Leads que Ninguém Atende
        </div>
        <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight mb-6">
          Nós Implementamos uma <span className="text-[#39FF14]">Máquina de Vendas com IA</span> no seu WhatsApp em 24h.
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
          Atendimento <span className="text-white font-bold">humanizado</span>, qualificação automática e fechamento de vendas enquanto você dorme — <span className="underline decoration-[#39FF14] decoration-2 underline-offset-4">sem sua equipe tocar no celular</span>.
        </p>
      </header>

      {/* 2. Visual Element & Social Proof */}
      <section className="px-5 pb-16 text-center">
        <div className="group relative inline-block w-full max-w-md mx-auto mb-10">
          <div className="absolute -inset-1 bg-[#39FF14] rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse"></div>
          <a href="https://wa.me/5514981400272?text=Oi!%20Vi%20o%20site%20e%20tenho%20interesse.%20Como%20podemos%20prosseguir%3F" target="_blank" rel="noopener noreferrer">
            <button className="relative w-full bg-[#39FF14] hover:bg-[#32e010] text-black font-black text-lg md:text-xl py-5 px-6 rounded-full shadow-xl transition transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
              QUERO AGENDAR UMA DEMONSTRAÇÃO GRATUITA <Calendar className="w-6 h-6" />
            </button>
          </a>
          <p className="text-gray-500 text-xs mt-3">
            Fale com um consultor e veja se o seu negócio é elegível.
          </p>
        </div>

        {/* Social Proof Strip */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gray-900/80 border border-white/10 rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="bg-[#39FF14]/10 p-2 rounded-lg">
                <Users className="w-6 h-6 text-[#39FF14]" />
              </div>
              <div className="text-left">
                <span className="block text-2xl font-bold text-white">+ 11</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Empresas Automatizadas</span>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-white/10"></div>

            <div className="flex items-center gap-3">
              <div className="bg-[#39FF14]/10 p-2 rounded-lg">
                <Trophy className="w-6 h-6 text-[#39FF14]" />
              </div>
              <div className="text-left">
                <span className="block text-2xl font-bold text-white">R$ 900k+</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Gerados em Vendas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto relative group mt-8">
          <div className="absolute -inset-1 bg-[#39FF14] rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
            <img
              src="/imagens/2criativoVISTRA.png"
              alt="Dashboard Vistra.ia"
              className="w-full h-auto opacity-90 hover:opacity-100 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* 3. Agitação (O Gargalo) */}
      <section className="px-5 py-20 bg-white/5 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 leading-tight">
            O gargalo do seu faturamento hoje <br /><span className="text-red-500">está no atendimento:</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: "CAC Jogado no Lixo",
                desc: "Você paga caro pelo lead, ele chega, ninguém responde e ele compra do concorrente.",
                color: "text-red-500"
              },
              {
                icon: TrendingDown,
                title: "Equipe Ineficiente",
                desc: "Seus vendedores perdem 80% do tempo qualificando curiosos em vez de fechar vendas.",
                color: "text-red-500"
              },
              {
                icon: XCircle,
                title: "Falta de Padronização",
                desc: "Cada atendente fala uma coisa e você perde o controle da sua oferta.",
                color: "text-red-500"
              }
            ].map((item, index) => (
              <div key={index} className="bg-black/40 p-6 rounded-2xl border border-white/5 hover:border-red-500/30 transition duration-300">
                <div className="bg-red-500/10 p-3 rounded-lg w-fit mb-4">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="font-bold text-white text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Solução (O Que Vamos Entregar) + Bonus */}
      <section className="px-5 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              O Que Vamos Entregar Para Você:
            </h2>
            <div className="w-24 h-1 bg-[#39FF14] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Implantação Completa",
                desc: "Configuramos a IA personalizada para o seu nicho."
              },
              {
                icon: BrainCircuit,
                title: "Cérebro de Vendas",
                desc: "Treinamos a IA com as melhores objeções e argumentos do seu negócio."
              },
              {
                icon: Plug,
                title: "Conexão Imediata",
                desc: "Integração oficial, sem riscos de bloqueio (gera muita segurança)."
              },
              {
                icon: BarChart3,
                title: "Dashboard de Controle",
                desc: "Veja em tempo real quanto a IA está vendendo."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-gray-900/30 border border-gray-800 hover:border-[#39FF14]/50 transition duration-300">
                <div className="bg-[#39FF14]/10 p-3 rounded-xl shrink-0">
                  <item.icon className="w-6 h-6 text-[#39FF14]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            {/* Bonus Item */}
            <div className="md:col-span-2 flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-[#39FF14]/10 to-transparent border border-[#39FF14]/30 hover:border-[#39FF14] transition duration-300">
              <div className="bg-[#39FF14] p-3 rounded-xl shrink-0 text-black shadow-lg shadow-[#39FF14]/20 animate-pulse">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-white text-lg mb-2 flex items-center gap-2">
                  BÔNUS: Script de Recuperação de Vendas <span className="text-[#39FF14]">Exclusivo</span>
                  <span className="bg-[#39FF14] text-black text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ml-auto md:ml-2">OFERTA</span>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  A IA detecta quem gerou Pix e não pagou, e faz a cobrança automática com alta conversão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Final (Escassez) & Quem Somos */}
      <section className="px-5 pb-16 pt-10 bg-gradient-to-t from-[#39FF14]/5 to-transparent">
        <div className="max-w-3xl mx-auto text-center">

          {/* CTA Box */}
          <div className="bg-gray-900 border border-gray-700 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden mb-20">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#39FF14] to-transparent"></div>

            <div className="flex items-center justify-center gap-2 text-yellow-500 font-bold mb-6 bg-yellow-500/10 inline-block px-4 py-1 rounded-full text-sm">
              <AlertTriangle className="w-4 h-4" /> Capacidade de Implementação Limitada
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Como nossa configuração é 100% personalizada, liberamos apenas <span className="text-[#39FF14] underline">4 vagas de consultoria</span> por semana.
            </h2>

            <a href="https://wa.me/5514981400272?text=Oi!%20Vi%20o%20site%20e%20tenho%20interesse.%20Como%20podemos%20prosseguir%3F" target="_blank" rel="noopener noreferrer" className="group relative inline-block w-full max-w-md mt-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#39FF14] to-yellow-400 rounded-full blur opacity-50 group-hover:opacity-80 transition duration-500 animate-pulse"></div>
              <button className="relative w-full bg-gradient-to-r from-[#39FF14] to-yellow-400 text-black font-black text-lg md:text-xl py-6 px-4 rounded-full shadow-xl transition transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                QUERO APLICAR PARA UMA VAGA
                <span className="text-black/80 text-2xl">➤</span>
              </button>
              {/* Guarantee Line */}
              <div className="flex items-center justify-center gap-2 mt-4 text-gray-400 text-xs md:text-sm font-medium">
                <ShieldCheck className="w-4 h-4 text-[#39FF14]" />
                <span>Garantia: Máquina rodando em 24h ou seu dinheiro de volta.</span>
              </div>
            </a>
          </div>

          {/* Quem Somos */}
          <div className="max-w-2xl mx-auto border-t border-gray-800 pt-12">
            <h3 className="text-xl font-bold text-white mb-4">Quem é a Vistra.ia?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas em automação comercial que já geraram mais de <strong className="text-white">R$ 900 Mil</strong> para nossos clientes. Nós unimos tecnologia de ponta com estratégias de vendas validadas para transformar o atendimento do seu negócio.
            </p>
          </div>

        </div>
      </section>

      <footer className="py-8 text-center text-gray-800 text-xs border-t border-gray-900">
        <p>&copy; {new Date().getFullYear()} Vistra.ia. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}

export default App;