"use client"

import { SiteFooter } from "@/components/layout/main-footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Star, ArrowRight, Calculator, Code, Brain, Trophy } from "lucide-react"
import Link from "next/link"

export default function CursosPage() {
  const cursos = [
    {
      id: "matematica",
      title: "Matemática",
      description:
        "Desarrolla el pensamiento lógico y habilidades matemáticas fundamentales a través de métodos innovadores y divertidos.",
      icon: Calculator,
      color: "from-green-400 to-emerald-600",
      students: "8-12 estudiantes",
      level: "Todos los niveles",
      ages: "6-17 años",
      highlights: ["Pensamiento lógico", "Resolución de problemas", "Matemática aplicada", "Métodos innovadores"],
      url: "/cursos/matematica",
    },
    {
      id: "olimpiadas-matematica",
      title: "Olimpiadas de Matemática",
      description:
        "Preparación especializada para competencias matemáticas nacionales e internacionales con desafíos de alto nivel.",
      icon: Trophy,
      color: "from-yellow-400 to-orange-600",
      students: "6-8 estudiantes",
      level: "Avanzado",
      ages: "10-17 años",
      highlights: ["Competencias nacionales", "Problemas olímpicos", "Mentores expertos", "Preparación intensiva"],
      url: "/cursos/olimpiadas-matematica",
    },
    {
      id: "programacion",
      title: "Programación",
      description:
        "Aprende a programar desde cero hasta proyectos avanzados, desarrollando habilidades tecnológicas del futuro.",
      icon: Code,
      color: "from-blue-400 to-cyan-600",
      students: "6-10 estudiantes",
      level: "Todos los niveles",
      ages: "8-17 años",
      highlights: ["Múltiples lenguajes", "Proyectos reales", "Lógica de programación", "Desarrollo web"],
      url: "/cursos/programacion",
    },
    {
      id: "ciencia-ia",
      title: "Ciencia e IA",
      description:
        "Explora el fascinante mundo de la ciencia y la inteligencia artificial con experimentos y proyectos innovadores.",
      icon: Brain,
      color: "from-purple-400 to-pink-600",
      students: "6-8 estudiantes",
      level: "Intermedio-Avanzado",
      ages: "12-17 años",
      highlights: ["Inteligencia Artificial", "Experimentos científicos", "Machine Learning", "Proyectos innovadores"],
      url: "/cursos/ciencia-ia",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-green-200 to-cyan-200 bg-clip-text text-transparent">
                Nuestros cursos
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Programas especializados que transforman la curiosidad en expertise. Cada curso está diseñado para
              desarrollar habilidades del futuro a través de proyectos reales y mentorías personalizadas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {cursos.map((curso, index) => (
              <motion.div
                key={curso.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 group h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${curso.color} shadow-lg`}>
                        <curso.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                        {curso.level}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-white mb-2">{curso.title}</CardTitle>
                    <CardDescription className="text-white/70 text-base leading-relaxed">
                      {curso.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-white/80">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span>{curso.students}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{curso.ages}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Lo que aprenderás:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {curso.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-white/80">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link href={curso.url}>
                        <Button
                          className={`w-full bg-gradient-to-r ${curso.color} hover:scale-105 transition-all duration-300 group`}
                        >
                          Ver cursos disponibles
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Card className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 backdrop-blur-lg border-green-500/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">¿No sabés cuál elegir?</h3>
                <p className="text-white/80 mb-6">
                  Nuestro diagnóstico STEAM te ayudará a encontrar el curso perfecto para tu hijo
                </p>
                <Link href="/diagnostico">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-semibold px-8"
                  >
                    Hacer diagnóstico gratuito
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
