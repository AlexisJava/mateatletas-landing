"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BrainCircuit,
  Code2,
  Bot,
  Users,
  Target,
  Award,
  Zap,
  Lightbulb,
  Shield,
  ArrowRight,
  Calculator,
  Gamepad2,
  Brain,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"

function MatematicaUIGraphic() {
  return (
    <div className="relative">
      <Card className="bg-gray-900/90 backdrop-blur-xl border border-green-500/30 rounded-2xl p-6 shadow-2xl">
        <div className="space-y-6">
          <div className="h-32 bg-gray-800/50 rounded-lg border border-green-500/20"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 bg-gray-800/50 rounded-lg border border-green-500/20"></div>
            <div className="h-20 bg-gray-800/50 rounded-lg border border-green-500/20"></div>
          </div>
        </div>
      </Card>
    </div>
  )
}

function ProgramacionUIGraphic() {
  return (
    <div className="relative">
      <Card className="bg-gray-900/90 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 shadow-2xl">
        <div className="space-y-6">
          <div className="h-32 bg-gray-800/50 rounded-lg border border-blue-500/20"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 bg-gray-800/50 rounded-lg border border-blue-500/20"></div>
            <div className="h-20 bg-gray-800/50 rounded-lg border border-blue-500/20"></div>
          </div>
        </div>
      </Card>
    </div>
  )
}

function IAUIGraphic() {
  return (
    <div className="relative">
      <Card className="bg-gray-900/90 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-2xl">
        <div className="space-y-6">
          <div className="h-32 bg-gray-800/50 rounded-lg border border-purple-500/20"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 bg-gray-800/50 rounded-lg border border-purple-500/20"></div>
            <div className="h-20 bg-gray-800/50 rounded-lg border border-purple-500/20"></div>
          </div>
        </div>
      </Card>
    </div>
  )
}

function HabilidadesSocialesUIGraphic() {
  return (
    <div className="relative">
      <Card className="bg-gray-900/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-2xl">
        <div className="space-y-6">
          <div className="h-32 bg-gray-800/50 rounded-lg border border-cyan-500/20"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 bg-gray-800/50 rounded-lg border border-cyan-500/20"></div>
            <div className="h-20 bg-gray-800/50 rounded-lg border border-cyan-500/20"></div>
          </div>
        </div>
      </Card>
    </div>
  )
}

function PilarUIGraphic({ pilar }: { pilar: any }) {
  switch (pilar.id) {
    case "matematica":
      return <MatematicaUIGraphic />
    case "programacion":
      return <ProgramacionUIGraphic />
    case "ia":
      return <IAUIGraphic />
    case "habilidades-sociales":
      return <HabilidadesSocialesUIGraphic />
    default:
      return <div>Gráfico no disponible</div>
  }
}

export default function PilaresSection() {
  const [activePilar, setActivePilar] = useState(0)
  const pilarRefs = useRef<(HTMLDivElement | null)[]>([])

  const pilares = [
    {
      id: "matematica",
      title: "Matemática",
      subtitle: "Lógica & Resolución de Problemas",
      description:
        "Desarrollamos el pensamiento lógico y analítico a través de desafíos matemáticos progresivos. Los estudiantes aprenden a descomponer problemas complejos y construir soluciones elegantes paso a paso.",
      icon: BrainCircuit,
      color: "green",
      gradient: "from-green-500 to-emerald-600",
      badge: "Lógica & Resolución",
      features: [
        { icon: Calculator, text: "Resolución de problemas paso a paso" },
        { icon: Target, text: "Pensamiento lógico estructurado" },
        { icon: Award, text: "Preparación para olimpíadas matemáticas" },
        { icon: Lightbulb, text: "Creatividad en demostraciones" },
      ],
      stats: [
        { label: "Mejora en Velocidad", value: "340%" },
        { label: "Precisión Alcanzada", value: "98%" },
        { label: "Problemas Resueltos", value: "500+" },
      ],
      cta: "Explorar Matemática",
      href: "/rutas/matematica",
    },
    {
      id: "programacion",
      title: "Programación",
      subtitle: "Creación & Automatización",
      description:
        "Transformamos ideas en realidad digital. Los estudiantes aprenden a crear videojuegos, aplicaciones y herramientas que resuelven problemas reales, desarrollando pensamiento computacional.",
      icon: Code2,
      color: "blue",
      gradient: "from-blue-500 to-indigo-600",
      badge: "Creación & Automatización",
      features: [
        { icon: Gamepad2, text: "Desarrollo de videojuegos" },
        { icon: Code2, text: "Programación desde cero" },
        { icon: Zap, text: "Automatización de tareas" },
        { icon: Shield, text: "Buenas prácticas de código" },
      ],
      stats: [
        { label: "Proyectos Completados", value: "150+" },
        { label: "Lenguajes Aprendidos", value: "5" },
        { label: "Horas de Código", value: "200+" },
      ],
      cta: "Comenzar a Programar",
      href: "/rutas/programacion",
    },
    {
      id: "ia",
      title: "Inteligencia Artificial",
      subtitle: "Futuro & Innovación",
      description:
        "Exploramos el futuro de la tecnología. Los estudiantes crean sus propios modelos de IA, entrenan algoritmos y desarrollan soluciones inteligentes para desafíos del mundo real.",
      icon: Bot,
      color: "purple",
      gradient: "from-purple-500 to-violet-600",
      badge: "Futuro & Innovación",
      features: [
        { icon: Brain, text: "Entrenamiento de modelos de IA" },
        { icon: Bot, text: "Creación de chatbots personalizados" },
        { icon: Target, text: "Reconocimiento de patrones" },
        { icon: Lightbulb, text: "Soluciones innovadoras" },
      ],
      stats: [
        { label: "Modelos Entrenados", value: "25+" },
        { label: "Precisión Promedio", value: "94%" },
        { label: "Proyectos de IA", value: "40+" },
      ],
      cta: "Descubrir IA",
      href: "/diagnostico",
    },
    {
      id: "habilidades-sociales",
      title: "Habilidades Sociales",
      subtitle: "Colaboración & Liderazgo",
      description:
        "Fortalecemos la comunicación, trabajo en equipo y liderazgo. Los estudiantes aprenden a presentar ideas, colaborar efectivamente y liderar proyectos con confianza y empatía.",
      icon: Users,
      color: "cyan",
      gradient: "from-cyan-500 to-teal-600",
      badge: "Colaboración & Liderazgo",
      features: [
        { icon: MessageSquare, text: "Comunicación efectiva" },
        { icon: Users, text: "Trabajo en equipo" },
        { icon: Target, text: "Liderazgo de proyectos" },
        { icon: Award, text: "Presentaciones públicas" },
      ],
      stats: [
        { label: "Presentaciones Realizadas", value: "100+" },
        { label: "Proyectos Colaborativos", value: "50+" },
        { label: "Confianza Desarrollada", value: "95%" },
      ],
      cta: "Desarrollar Habilidades",
      href: "/diagnostico",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = pilarRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) setActivePilar(index)
          }
        })
      },
      { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" },
    )

    pilarRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToPilar = (index: number) => {
    pilarRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <section id="metodo" className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-balance">Los 4 Pilares de Mateatletas</h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto text-pretty">
            Un método integral que combina matemática, programación, IA y habilidades socioemocionales para formar las mentes del futuro.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {pilares.map((pilar, index) => {
              const IconComponent = pilar.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={pilar.id}
                  ref={(el) => (pilarRefs.current[index] = el)}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="min-h-screen flex items-center"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-16 items-center w-full ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
                  >
                    {/* Text Column */}
                    <div className={`space-y-8 ${!isEven ? "lg:col-start-2" : ""}`}>
                      <div>
                        <Badge
                          variant="outline"
                          className={`border-${pilar.color}-500/50 text-${pilar.color}-400 mb-4`}
                        >
                          <IconComponent className="w-4 h-4 mr-2" />
                          {pilar.badge}
                        </Badge>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">{pilar.title}</h3>

                        <p className="text-lg text-gray-300 leading-relaxed text-pretty">{pilar.description}</p>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-3">
                        {pilar.features.map((feature, i) => {
                          const FeatureIcon = feature.icon
                          return (
                            <div key={i} className="flex items-center space-x-3">
                              <FeatureIcon className={`w-5 h-5 text-${pilar.color}-400`} />
                              <span className="text-gray-300">{feature.text}</span>
                            </div>
                          )
                        })}
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4">
                        {pilar.stats.map((stat, i) => (
                          <Card key={i} className={`bg-gray-900/50 border-${pilar.color}-500/20`}>
                            <CardContent className="p-4 text-center">
                              <div className={`text-2xl font-bold text-${pilar.color}-400`}>{stat.value}</div>
                              <div className="text-sm text-gray-400">{stat.label}</div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Button
                        asChild
                        size="lg"
                        className={`bg-gradient-to-r ${pilar.gradient} text-white font-semibold shadow-lg`}
                      >
                        <Link href={pilar.href}>
                          {pilar.cta}
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                      </Button>
                    </div>

                    {/* Visualization Column */}
                    <div className={`flex justify-center ${!isEven ? "lg:col-start-1" : ""}`}>
                      <div className="w-full max-w-lg">
                        <Card
                          className={`bg-black border-2 border-${pilar.color}-500/50 rounded-2xl p-8 shadow-2xl shadow-${pilar.color}-500/20 min-h-[400px] flex items-center justify-center`}
                        >
                          <div className="text-center space-y-4">
                            <div
                              className={`w-16 h-16 mx-auto rounded-full bg-${pilar.color}-500/20 border border-${pilar.color}-500/50 flex items-center justify-center`}
                            >
                              <IconComponent className={`w-8 h-8 text-${pilar.color}-400`} />
                            </div>
                            <p className={`text-${pilar.color}-400 font-medium`}>Visualización Interactiva</p>
                            <p className="text-gray-500 text-sm">Contenido próximamente</p>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
