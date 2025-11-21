"use client"

import { Shield, AlertTriangle, Zap, Network, Bug, Eye } from "lucide-react"

export default function Home() {
  const metrics = [
    {
      title: "Tentativas de Intrusão",
      value: "+988K+",
      description: "IPS detectados",
      icon: AlertTriangle,
      color: "from-red-500/20 to-red-600/10",
    },
    { 
      title: "Malwares Ativos",
      value: "39.9K",
      description: "Comunicação detectada",
      icon: Bug,
      color: "from-orange-500/20 to-orange-600/10",
    },
    {
      title: "Botnets Ativos",
      value: "342",
      description: "Redes zumbis identificadas",
      icon: Network,
      color: "from-yellow-500/20 to-yellow-600/10",
    },
    {
      title: "Exploits Zero-Day",
      value: "30",
      description: "Vulnerabilidades novas",
      icon: Zap,
      color: "from-red-500/20 to-red-600/10",
    },
  ]

  const modules = [
    {
      title: "Visão Global",
      description: "Pulso de Ciber Ataques",
      icon: Eye,
      href: "/visao-global",
    },
    {
      title: "Vetores de Ataque",
      description: "Ameaças em Redes",
      icon: AlertTriangle,
      href: "/vetores-ataque",
    },
    {
      title: "Ameaças de E-mail",
      description: "Spam e Phishing",
      icon: Shield,
      href: "/ameacas-email",
    },
  ]

  const threatTypes = [
    {
      title: "IPS - Prevenção de Intrusão",
      description: "Tentativas de explorar vulnerabilidades em sistemas conectados à internet",
      icon: Shield,
    },
    {
      title: "Malware",
      description: "Software malicioso comunicando com servidores de comando e controle",
      icon: Bug,
    },
    {
      title: "Botnets",
      description: "Redes de dispositivos comprometidos usadas para DDoS e roubo de dados",
      icon: Network,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Cyber Security Intelligence</h1>
                <p className="text-muted-foreground mt-1">Painel de ameaças em tempo real</p>
              </div>
            </div>
            <div className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
              Sistema Ativo
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-2 flex-wrap">
            {modules.map((module) => {
              const Icon = module.icon
              return (
                <a
                  key={module.href}
                  href={module.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <Icon className="w-4 h-4 text-accent group-hover:text-primary" />
                  <div>
                    <div className="font-semibold text-sm">{module.title}</div>
                    <div className="text-xs text-muted-foreground">{module.description}</div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Módulo 2: Visão Tática</h2>
          <p className="text-muted-foreground">
            Vetores de Ataque em Redes - Tipos de ataques direcionados à infraestrutura
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${metric.color} border border-border p-6 hover:border-accent/50 transition-all group`}
              >
                <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-12 h-12" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-5 h-5 text-accent" />
                    <p className="text-sm text-muted-foreground">{metric.title}</p>
                  </div>
                  <div className="mb-2">
                    <span className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                      {metric.value}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Threat Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-1 space-y-4">
            {/* Threat Types */}
            {threatTypes.map((threat, index) => {
              const Icon = threat.icon
              return (
                <div
                  key={index}
                  className="rounded-xl bg-card border border-border p-5 hover:border-accent/50 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg mt-1">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{threat.title}</h3>
                      <p className="text-sm text-muted-foreground">{threat.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Fortiguard Map */}
          <div className="lg:col-span-2">
            <div className="rounded-xl bg-card border border-border overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 border-b border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Eye className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-semibold">Fortiguard Threat Map</h3>
                </div>
                <p className="text-sm text-muted-foreground">Visualize ataques globais em tempo real</p>
              </div>

              <div className="p-6">
                <a
                  href="https://threatmap.fortiguard.com/"
                  className="flex items-center justify-center gap-2 w-full py-12 bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 rounded-lg border border-primary/30 hover:border-primary/50 transition-all group"
                >
                  <Eye className="w-6 h-6 text-accent group-hover:text-primary transition-colors" />
                  <span className="font-semibold group-hover:text-primary transition-colors">
                    Abrir mapa em tempo real
                  </span>
                </a>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Clique para visualizar ataques globais ao vivo
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Lucas Bruno Calle Chambi</p>
        </div>
      </footer>
    </div>
  )
}
