import { Shield, Globe, AlertTriangle, Mail, Zap, Map } from "lucide-react"

export default function Home() {
  const sitesCyber1 = [
    {
      title: "Visão Global",
      descricao: "Pulso de Ciber Ataques",
      icon: Globe,
    },
  ]

  const sitesCyber2 = [
    {
      title: "Vetores de Ataque",
      descricao: "Ameaças em Redes",
      icon: AlertTriangle,
    },
  ]

  const sitesCyber3 = [
    {
      title: "Ameaças de E-mail",
      descricao: "Spam e Phishing",
      icon: Mail,
    },
  ]

  const navigationItems = [
    { ...sitesCyber1[0], href: "visao-global" },
    { ...sitesCyber2[0], href: "vetores-ataque" },
    { ...sitesCyber3[0], href: "ameacas-email" },
  ]

  const statsData = [
    {
      label: "Ataques Detectados",
      value: "+4.8M",
      description: "O maior volume de ataques no mundo.",
      icon: Zap,
    },
    {
      label: "Países alvos",
      value: "195",
      description: "Cobertura Global",
      icon: Globe,
    },
    {
      label: "Taxa de crescimento",
      value: "+39%",
      description: "vs. semana anterior",
      icon: AlertTriangle,
    },
    {
      label: "Ameaças críticas",
      value: "2,234",
      description: "Requerem ação imediata",
      icon: Shield,
    },
  ]

  return (
    <div className="bg-slate-950 min-h-screen">
      <div className="px-6 md:px-10 py-5">
        <header>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">Cyber Security Intelligence</h1>
              <p className="text-lg text-stone-400 mt-2">Painel de ameaças em tempo real</p>
            </div>
            <div className="bg-linear-to-r from-green-600 to-green-500 px-4 py-2 rounded-full flex items-center gap-2 text-white font-semibold">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              Sistema Ativo
            </div>
          </div>

          <div className="border border-slate-700 my-6"></div>

          <nav className="flex flex-wrap gap-4">
            {navigationItems.map((item) => {
              const IconComponent = item.icon
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors font-medium text-sm md:text-base"
                >
                  <IconComponent size={20} />
                  {item.title}
                </a>
              )
            })}
          </nav>
          <div className="border border-slate-700 my-6"></div>
        </header>
      </div>

      <div className="px-6 md:px-10 py-8">
        <main>
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">Módulo 1: Visão Macroscópica</h2>
            <p className="text-stone-300">
              O Pulso Global dos Ciberataques - Escala e velocidade das ameaças em tempo real
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {statsData.map((stat) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={stat.label}
                  className="bg-slate-800 border border-slate-700 hover:border-cyan-500 transition-colors p-6 rounded-2xl"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-sm font-medium text-stone-400">
                      {stat.label} {new Date().getFullYear()}
                    </h3>
                    <IconComponent size={20} className="text-cyan-400" />
                  </div>
                  <p className="text-3xl font-bold text-amber-300 mb-2">{stat.value}</p>
                  <p className="text-sm text-stone-400">{stat.description}</p>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Map size={24} className="text-blue-400" />
                <h3 className="text-xl font-bold text-white">KasperSky CyberMap</h3>
              </div>

              <a
                href="https://cybermap.kaspersky.com/pt"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white p-4 rounded-xl text-center font-semibold mb-4"
              >
                <span className="flex items-center justify-center gap-2">
                  <Globe size={20} />
                  Abrir mapa em tempo real
                </span>
              </a>

              <div className="bg-slate-700 border border-slate-600 p-4 rounded-xl">
                <p className="text-sm text-stone-300">
                  <span className="font-semibold text-cyan-400">Foco:</span> Volume e velocidade dos ataques, origem vs.
                  alvo, tipos de ameaças em tempo real
                </p>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Shield size={24} className="text-purple-400" />
                <h3 className="text-xl font-bold text-white">Checkpoint ThreatMap</h3>
              </div>

              <a
                href="https://threatmap.checkpoint.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-purple-600 hover:bg-purple-700 transition-colors text-white p-4 rounded-xl text-center font-semibold mb-4"
              >
                <span className="flex items-center justify-center gap-2">
                  <Globe size={20} />
                  Abrir mapa em tempo real
                </span>
              </a>

              <div className="bg-slate-700 border border-slate-600 p-4 rounded-xl">
                <p className="text-sm text-stone-300">
                  <span className="font-semibold text-cyan-400">Foco:</span> Comparação de tendências, estatísticas
                  recentes de malware e exploits ativos
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="bg-black border-t border-slate-700 p-8 text-center mt-16">
        <p className="text-amber-300 font-semibold">Painel de Inteligência de Ameaças Cibernéticas - Dados em Tempo Real</p>
        <p className="text-amber-300 font-semibold">Fontes: Kaspersky, Checkpoint, Fortinet, Talos Intelligence</p>
      </div>
    </div>
  )
}
