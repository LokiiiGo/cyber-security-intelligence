import { Shield, Globe, AlertTriangle, Mail, Map, Activity, Lock, TrendingUp, Eye, AlertCircle, Percent, Users, } from "lucide-react"

export default function Home() {
  const navigationItems = [
    {
      title: "Visão Global",
      descricao: "Pulso de Ciber Ataques",
      icon: Globe,
      href: "visao-global",
    },
    {
      title: "Vetores de Ataque",
      descricao: "Ameaças em Redes",
      icon: AlertTriangle,
      href: "vetores-ataque",
    },
    {
      title: "Ameaças de E-mail",
      descricao: "Spam e Phishing",
      icon: Mail,
      href: "ameacas-email",
    },
  ]

  const emailStats = [
    {
      label: "E-mails Maliciosos",
      value: "+100M",
      description: "Detectados",
      icon: Mail,
      color: "text-red-400",
    },
    {
      label: "Tentativas Phishing",
      value: "+500K",
      description: "Bloqueadas",
      icon: AlertCircle,
      color: "text-orange-400",
    },
    {
      label: "Anexos Maliciosos",
      value: "+20M",
      description: "Arquivos infectados",
      icon: Lock,
      color: "text-purple-400",
    },
    {
      label: "Vítimas Potenciais",
      value: "+7.5M",
      description: "Afetados",
      icon: Users,
      color: "text-pink-400",
    },
  ]

  const riskData = [
    {
      level: "Alto Risco",
      percentage: "72%",
      description: "E-mails com anexos executáveis",
      icon: AlertTriangle,
      color: "from-red-600 to-orange-500",
    },
    {
      level: "Médio Risco",
      percentage: "24%",
      description: "Links para sites de phishing",
      icon: AlertCircle,
      color: "from-yellow-600 to-orange-500",
    },
    {
      level: "Spam Geral",
      percentage: "4%",
      description: "Propaganda não maliciosa",
      icon: Percent,
      color: "from-blue-600 to-cyan-500",
    },
  ]

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      {/* Header */}
      <div className="px-6 md:px-10 py-8 border-b border-slate-800">
        <header>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-cyan-400" size={32} />
                <h1 className="text-3xl md:text-4xl font-bold text-white">Cyber Security Intelligence</h1>
              </div>
              <p className="text-lg text-slate-400">Painel de ameaças em tempo real</p>
            </div>
            <div className="bg-linear-to-r from-green-600 to-green-500 px-4 py-2 rounded-full flex items-center gap-2 text-white font-semibold">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              Sistema Ativo
            </div>
          </div>

          <nav className="flex flex-wrap gap-3">
            {navigationItems.map((item) => {
              const IconComponent = item.icon
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500 text-white rounded-lg transition-all duration-200 font-medium text-sm"
                >
                  <IconComponent size={18} className="group-hover:text-cyan-400 transition-colors" />
                  <span>{item.title}</span>
                </a>
              )
            })}
          </nav>
        </header>
      </div>

      {/* Main Content */}
      <div className="px-6 md:px-10 py-10">
        <main>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="text-cyan-400" size={28} />
              <h2 className="text-3xl font-bold">Módulo 3: O Ponto de Entrada</h2>
            </div>
            <p className="text-lg text-slate-400">A Ameaça no E-mail - O vetor de ataque mais comum para usuários</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {emailStats.map((stat) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={stat.label}
                  className="group bg-slate-800 border border-slate-700 hover:border-cyan-500 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{stat.label}</h3>
                    <IconComponent size={20} className={`${stat.color} shrink-0`} />
                  </div>
                  <p className="text-3xl font-bold text-amber-300 mb-2">{stat.value}</p>
                  <p className="text-sm text-slate-400">{stat.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Map className="text-cyan-400" size={28} />
              <h3 className="text-2xl font-bold">Talos Intelligence - Spam & Email Threats</h3>
            </div>

            <div className="bg-slate-800 border border-slate-700 hover:border-blue-500 p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Globe size={24} />
                </div>
                <h4 className="text-2xl font-bold">Mapa em Tempo Real</h4>
              </div>

              <a
                href="https://cybermap.kaspersky.com/pt"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-4 rounded-lg text-center font-semibold mb-6 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Globe size={20} />
                Abrir mapa em tempo real
              </a>

              <div className="bg-slate-700 border border-slate-600 p-6 rounded-lg">
                <h5 className="text-lg font-bold text-amber-300 mb-4">A Cadeia de Ataque por E-mail</h5>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <div className="bg-red-600 p-2 rounded-lg shrink-0 mt-1">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">1º - Origem</p>
                      <p className="text-sm text-slate-300">E-mail de spam é enviado em massa de países geradores</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="bg-orange-600 p-2 rounded-lg shrink-0 mt-1">
                      <AlertCircle size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">2º - Infecção</p>
                      <p className="text-sm text-slate-300">Usuário clica em link/anexo malicioso</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="bg-purple-600 p-2 rounded-lg shrink-0 mt-1">
                      <Activity size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">3º - Propagação</p>
                      <p className="text-sm text-slate-300">Malware se instala e se comunica com redes zumbis</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="bg-pink-600 p-2 rounded-lg shrink-0 mt-1">
                      <TrendingUp size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">4º - Impacto Global</p>
                      <p className="text-sm text-slate-300">Dispositivo comprometido contribui para ataques mundiais</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-cyan-400" size={28} />
              <h3 className="text-2xl font-bold">Níveis de Risco</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {riskData.map((risk) => {
                const IconComponent = risk.icon
                return (
                  <div
                    key={risk.level}
                    className="group relative overflow-hidden bg-slate-800 border border-slate-700 hover:border-slate-600 p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-bold">{risk.level}</h4>
                        <IconComponent size={24} className="text-amber-300" />
                      </div>
                      <p className="text-4xl font-bold text-amber-300 mb-2">{risk.percentage}</p>
                      <p className="text-sm text-slate-400">{risk.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <div className="bg-black border-t border-slate-700 p-8 text-center mt-16">
        <p className="text-amber-300 font-semibold">Painel de Inteligência de Ameaças Cibernéticas - Dados em Tempo Real</p>
        <p className="text-amber-300 font-semibold">Fontes: Kaspersky, Checkpoint, Fortinet, Talos Intelligence</p>
      </div>
    </div>
  )
}
