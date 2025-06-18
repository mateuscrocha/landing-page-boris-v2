"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { BarChart3, UserCheck, Zap, TrendingUp, Hash, Tag } from "lucide-react"

export function DashboardRealtime() {
  const [isVisible, setIsVisible] = useState(false)
  const [metrics, setMetrics] = useState({
    msgToday: 0,
    activeUsers: 0,
    peakHour: "19:30",
    weeklyData: [120, 180, 240, 320, 280, 380, 420],
    topTopics: [
      "Moradores comentaram sobre o aumento da taxa de condomínio para o próximo trimestre.",
      "Houve debate intenso sobre a reforma da fachada e o orçamento necessário.",
      "Síndico enviou aviso sobre nova regra para uso do salão de festas.",
    ],
    keywords: ["aviso", "urgente", "reforma"],
  })
  const sectionRef = useRef<HTMLElement>(null)
  const intervalRef = useRef<NodeJS.Timeout>()
  const animationRef = useRef<number>()
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<any>(null)

  // Função para gerar números aleatórios
  const rand = useCallback((min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min), [])

  // Função para embaralhar arrays
  const shuffle = useCallback((arr: string[]) => [...arr].sort(() => 0.5 - Math.random()), [])

  // Função para animar contagem
  const animateCount = useCallback(
    (start: number, end: number, duration: number, callback: (value: number) => void) => {
      const startTime = Date.now()
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easeOut = 1 - Math.pow(1 - progress, 3)
        const current = Math.floor(start + (end - start) * easeOut)
        callback(current)
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate)
        }
      }
      animationRef.current = requestAnimationFrame(animate)
    },
    [],
  )

  // Função para criar/atualizar gráfico
  const updateChart = useCallback((data: number[]) => {
    if (!chartRef.current) return

    // Carregar Chart.js se não estiver disponível
    if (typeof window !== "undefined" && !(window as any).Chart) {
      const script = document.createElement("script")
      script.src = "https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js"
      script.onload = () => updateChart(data)
      document.head.appendChild(script)
      return
    }

    const Chart = (window as any).Chart
    if (!Chart) return

    // Destruir gráfico anterior se existir
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext("2d")
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
        datasets: [
          {
            data: data,
            borderColor: "#FF6B00",
            backgroundColor: "rgba(255, 107, 0, 0.1)",
            borderWidth: 4,
            pointRadius: 6,
            pointHoverRadius: 8,
            pointBackgroundColor: "#FF6B00",
            pointBorderColor: "#FFFFFF",
            pointBorderWidth: 3,
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: {
            display: false,
            grid: { display: false },
          },
          y: {
            display: false,
            grid: { display: false },
          },
        },
        elements: {
          point: {
            radius: 6,
            hoverRadius: 8,
          },
        },
      },
    })
  }, [])

  // Função para atualizar métricas
  const updateMetrics = useCallback(() => {
    const newMsgCount = rand(350, 550)
    const newUserCount = rand(45, 120)
    const h = rand(18, 22).toString().padStart(2, "0")
    const m = rand(0, 59).toString().padStart(2, "0")
    const newPeakHour = `${h}:${m}`

    // Novos dados do gráfico
    const newWeeklyData = Array.from({ length: 7 }, () => rand(150, 450))

    // Dados segmentados por nicho - CONDOMÍNIOS
    const assuntosCondominio = [
      "Moradores comentaram sobre o aumento da taxa de condomínio para o próximo trimestre.",
      "Houve debate intenso sobre a reforma da fachada e o orçamento necessário.",
      "Síndico enviou aviso sobre nova regra para uso do salão de festas.",
      "Grupo discutiu reclamações de barulho após às 22h e possíveis punições.",
      "Conversas giraram em torno da instalação de câmeras extras no estacionamento.",
      "Recebemos várias sugestões sobre a poda das árvores do jardim interno.",
      "Moradores pediram atualização sobre a obra do elevador social.",
      "Foi levantada a possibilidade de contratar serviço de portaria 24 horas.",
      "Síndico compartilhou o relatório financeiro do último semestre para análise.",
      "Discussão sobre criar grupo separado para compra coletiva de gás.",
    ]

    const palavrasCondominio = [
      "aviso",
      "urgente",
      "reforma",
      "vaga",
      "financeiro",
      "segurança",
      "limpeza",
      "portaria",
      "silêncio",
      "regulamento",
    ]

    // Dados segmentados por nicho - ALUNOS
    const assuntosAlunos = [
      "Alunos tiraram dúvidas sobre o prazo final para entrega do TCC.",
      "Mensagens focaram na divisão de tarefas para o trabalho em grupo de Marketing.",
      "Professora anunciou a data da prova substitutiva de Estatística.",
      "Debate sobre oportunidades de estágio enviadas pelo departamento de carreiras.",
      "Estudantes organizaram grupo de estudo para a semana de provas.",
      "Coordenação explicou o novo sistema de matrícula on-line.",
      "Turma compartilhou materiais extras para revisão de Cálculo II.",
      "Conversa sobre bolsas de pesquisa disponíveis para o próximo semestre.",
      "Votação rápida definiu o tema da Semana Acadêmica de 2025.",
      "Alunos pediram extensão de prazo para envio de relatório de laboratório.",
    ]

    const palavrasAlunos = [
      "prova",
      "trabalho",
      "matrícula",
      "bolsa",
      "evento",
      "deadline",
      "monitoria",
      "resultado",
      "estágio",
      "reposição",
    ]

    // Dados segmentados por nicho - AGÊNCIAS
    const assuntosAgencia = [
      "Time apresentou relatório de ROI da campanha de lançamento do cliente A.",
      "Discussão sobre redefinir a persona antes da próxima rodada de anúncios.",
      "Gestor solicitou revisão urgente dos criativos reprovados pelo Facebook Ads.",
      "Equipe analisou aumento de leads orgânicos após nova estratégia de conteúdo.",
      "Debate sobre orçamento adicional para mídia paga durante Black Friday.",
      "Reunião async definiu OKRs do próximo trimestre para Social Media.",
      "Designer compartilhou guia atualizado de identidade visual do cliente B.",
      "Copywriter pediu feedback em headlines A/B antes do disparo de e-mail.",
      "Analista mostrou queda no CPA e propôs dobrar investimento em Google Ads.",
      "Cliente elogiou relatório gerado pelo Bóris com dados de engajamento.",
    ]

    const palavrasAgencia = [
      "briefing",
      "lead",
      "ROI",
      "planejamento",
      "design",
      "relatório",
      "copy",
      "ads",
      "sprint",
      "feedback",
    ]

    // Selecionar nicho (pode ser dinâmico ou fixo)
    const groupTypes = ["condominio", "alunos", "agencia"] as const
    const currentGroupType = groupTypes[rand(0, groupTypes.length - 1)]

    // Mapear dados por nicho
    const assuntosMap = {
      condominio: assuntosCondominio,
      alunos: assuntosAlunos,
      agencia: assuntosAgencia,
    }

    const palavrasMap = {
      condominio: palavrasCondominio,
      alunos: palavrasAlunos,
      agencia: palavrasAgencia,
    }

    // Embaralhar e pegar os 3 primeiros
    const randomTopics = shuffle(assuntosMap[currentGroupType]).slice(0, 3)
    const randomKeywords = shuffle(palavrasMap[currentGroupType]).slice(0, 3)

    // Animar contadores
    animateCount(metrics.msgToday, newMsgCount, 1200, (value) => {
      setMetrics((prev) => ({ ...prev, msgToday: value }))
    })

    animateCount(metrics.activeUsers, newUserCount, 1200, (value) => {
      setMetrics((prev) => ({ ...prev, activeUsers: value }))
    })

    // Atualizar outros dados
    setTimeout(() => {
      setMetrics((prev) => ({
        ...prev,
        peakHour: newPeakHour,
        weeklyData: newWeeklyData,
        topTopics: randomTopics,
        keywords: randomKeywords,
      }))
      updateChart(newWeeklyData)
    }, 600)
  }, [rand, shuffle, animateCount, metrics.msgToday, metrics.activeUsers, updateChart])

  // IntersectionObserver para trigger on-scroll
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          updateMetrics()

          // Iniciar atualizações periódicas
          intervalRef.current = setInterval(updateMetrics, 4000)
        }
      },
      { threshold: 0.25, rootMargin: "50px" },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [isVisible, updateMetrics])

  return (
    <section
      id="dashboard-realtime"
      ref={sectionRef}
      className={`py-12 sm:py-16 lg:py-20 bg-[#F7F7F7] transition-all duration-600 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      aria-label="Seção de métricas em tempo real do Bóris"
      role="region"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl bg-gradient-to-br from-[#FF6B00] to-[#FF8533] rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl border border-[#E5E5E5]/20">
        <div className="text-center mb-8 sm:mb-10 lg:mb-14 pt-8 sm:pt-10 lg:pt-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-normal mb-4 sm:mb-6 text-black tracking-tight leading-tight">
            Dashboard em tempo real
          </h2>
          <p className="text-sm sm:text-base text-black/70 max-w-3xl mx-auto font-inter leading-relaxed px-4">
            Bóris transforma conversa em dados:{" "}
            <span className="text-black font-semibold">mensagens, engajamento e assuntos quentes</span> ao vivo.
          </p>
        </div>

        {/* Linha 1 - Métricas principais */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12 px-4 sm:px-0">
          {/* Mensagens hoje */}
          <div
            className="bg-white shadow-xl hover:shadow-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center transition-all duration-300 hover:scale-105 border border-gray-100"
            role="group"
          >
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#FF6B00] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                <BarChart3 className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
              </div>
            </div>
            <span className="text-xs lg:text-sm text-[#888888] font-inter mb-2 sm:mb-3 font-medium block uppercase tracking-wider">
              Mensagens hoje
            </span>
            <span
              id="msgToday"
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#1a1a1a] font-poppins tabular-nums block mb-1 sm:mb-2"
              aria-label={`${metrics.msgToday.toLocaleString()} mensagens hoje`}
            >
              {metrics.msgToday.toLocaleString()}
            </span>
            <div className="flex items-center justify-center">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-xs text-emerald-600 font-inter font-semibold">Ativo agora</span>
            </div>
          </div>

          {/* Usuários ativos */}
          <div
            className="bg-white shadow-xl hover:shadow-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center transition-all duration-300 hover:scale-105 border border-gray-100"
            role="group"
          >
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#FF6B00] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                <UserCheck className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
              </div>
            </div>
            <span className="text-xs lg:text-sm text-[#888888] font-inter mb-2 sm:mb-3 font-medium block uppercase tracking-wider">
              Usuários ativos
            </span>
            <span
              id="activeUsers"
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#1a1a1a] font-poppins tabular-nums block mb-1 sm:mb-2"
              aria-label={`${metrics.activeUsers} usuários ativos`}
            >
              {metrics.activeUsers}
            </span>
            <div className="flex items-center justify-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-xs text-blue-600 font-inter font-semibold">Online</span>
            </div>
          </div>

          {/* Próximo horário de pico */}
          <div
            className="bg-white shadow-xl hover:shadow-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center transition-all duration-300 hover:scale-105 border border-gray-100"
            role="group"
          >
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#FF6B00] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                <Zap className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
              </div>
            </div>
            <span className="text-xs lg:text-sm text-[#888888] font-inter mb-2 sm:mb-3 font-medium block uppercase tracking-wider">
              Próximo pico
            </span>
            <span
              id="peakHour"
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#1a1a1a] font-poppins tabular-nums block mb-1 sm:mb-2"
              aria-label={`Próximo pico às ${metrics.peakHour}`}
            >
              {metrics.peakHour}
            </span>
            <div className="flex items-center justify-center">
              <div className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-xs text-amber-600 font-inter font-semibold">Previsto</span>
            </div>
          </div>
        </div>

        {/* Linha 2 - Gráfico e listas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
          {/* Gráfico semanal */}
          <div
            className="bg-white shadow-xl hover:shadow-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:scale-105 border border-gray-100 min-h-[180px]"
            role="group"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF6B00] rounded-lg sm:rounded-xl flex items-center justify-center shadow-md mr-3 sm:mr-4">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-poppins font-medium text-[#222222]">Mensagens por dia</h3>
                <p className="text-xs sm:text-sm text-[#666666] font-inter">Última semana</p>
              </div>
            </div>
            <div className="h-32 sm:h-40 relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <canvas ref={chartRef} id="weekChart" className="w-full h-full"></canvas>
            </div>
            <div className="mt-3 sm:mt-4 flex items-center justify-between text-xs text-[#666666] font-inter">
              <span>Seg</span>
              <span>Ter</span>
              <span>Qua</span>
              <span>Qui</span>
              <span>Sex</span>
              <span>Sáb</span>
              <span>Dom</span>
            </div>
          </div>

          {/* Assuntos mais falados */}
          <div
            className="bg-white shadow-xl hover:shadow-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:scale-105 border border-gray-100 min-h-[180px]"
            role="group"
          >
            <div className="flex items-start mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF6B00] rounded-lg sm:rounded-xl flex items-center justify-center shadow-md mr-3 sm:mr-4 flex-shrink-0">
                <Hash className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-poppins font-medium text-[#222222]">Assuntos quentes</h3>
                <p className="text-xs sm:text-sm text-[#666666] font-inter">Mais discutidos</p>
              </div>
            </div>
            <ul id="topicsList" className="space-y-2" aria-label="Assuntos mais falados no grupo" aria-live="polite">
              {metrics.topTopics.map((topic, index) => (
                <li
                  key={index}
                  className="flex items-start p-2 sm:p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg sm:rounded-xl hover:from-[#FFF4CC] hover:to-[#FFF8E1] transition-all duration-200"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#FF6B00] rounded-full flex items-center justify-center text-white font-bold text-xs mr-2 sm:mr-3 shadow-md flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-[#222222] font-inter text-xs sm:text-sm leading-relaxed">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Palavras-chave em destaque */}
          <div
            className="bg-white shadow-xl hover:shadow-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:scale-105 border border-gray-100 min-h-[180px]"
            role="group"
          >
            <div className="flex items-start mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF6B00] rounded-lg sm:rounded-xl flex items-center justify-center shadow-md mr-3 sm:mr-4 flex-shrink-0">
                <Tag className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-poppins font-medium text-[#222222]">Palavras-chave</h3>
                <p className="text-xs sm:text-sm text-[#666666] font-inter">Em destaque</p>
              </div>
            </div>
            <ul id="keywordsList" className="space-y-2" aria-label="Palavras-chave em destaque" aria-live="polite">
              {metrics.keywords.map((keyword, index) => (
                <li
                  key={index}
                  className="flex items-center p-2 sm:p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg sm:rounded-xl hover:from-[#FFF4CC] hover:to-[#FFF8E1] transition-all duration-200"
                >
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#FF6B00] rounded-full mr-2 sm:mr-3 shadow-sm flex-shrink-0"></div>
                  <span className="bg-[#FF6B00] text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-poppins font-semibold shadow-md">
                    #{keyword}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-8 lg:mt-12 pb-6 sm:pb-8 lg:pb-12">
          <p className="text-xs sm:text-sm text-[#666666] font-inter">
            <span className="inline-block w-2 h-2 bg-[#FF6B00] rounded-full mr-2 animate-pulse"></span>
            Dados atualizados em tempo real
          </p>
        </div>
      </div>
    </section>
  )
}
