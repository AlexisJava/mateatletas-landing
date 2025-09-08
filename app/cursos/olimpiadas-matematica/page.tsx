"use client"

import { SiteFooter } from "@/components/layout/main-footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, ArrowRight, Trophy, Medal, Target } from "lucide-react"
import Link from "next/link"

export default function OlimpiadasMatematicaPage() {
  const cursos = [
    {
      id: "olimpiadas-inicial",
      title: "Olimpiadas Nivel Inicial",
      description:
        "Introducción a las competencias matemáticas con problemas adaptados para estudiantes principiantes.",
      icon: Target,
      color: "from-yellow-400 to-orange-500",
      duration: "8 meses",
      students: "6-8 estudiantes",
      level: "Inicial",
      ages: "10-13 años",
      highlights: ["Problemas básicos", "Técnicas fundamentales", "Competencias locales", "Preparación OMA"],
    },
    {
      id: "olimpiadas-avanzado",
      title: "Olimpiadas Nivel Avanzado",
      description: "Preparación intensiva para competencias nacionales e internacionales de matemática olímpica.",
      icon: Trophy,
      color: "from-orange-400 to-red-500",
      duration: "12 meses",
      students: "4-6 estudiantes",
      level: "Avanzado",
      ages: "14-17 años",
      highlights: [
        "Problemas complejos",
        "Estrategias avanzadas",
        "Competencias nacionales",
        "Mentorías personalizadas",
      ],
    },
    {
      id: "olimpiadas-elite",
      title: "Olimpiadas Elite",
      description: "Entrenamiento de élite para estudiantes excepcionales que buscan competir a nivel internacional.",
      icon: Medal,
      color: "from-purple-400 to-pink-500",
      duration: "12 meses",
      students: "2-4 estudiantes",
      level: "Elite",
      ages: "15-17 años",
      highlights: ["Problemas IMO", "Entrenamiento individual", "Competencias internacionales", "Coaches expertos"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
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
              <span className="bg-gradient-to-r from-yellow-400 via-orange-300 to-red-400 bg-clip-text text-transparent">
                Olimpiadas de Matemática
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Prepárate para competir al más alto nivel con nuestros programas especializados en olimpiadas matemáticas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                    <CardTitle className="text-xl text-white mb-2">{curso.title}</CardTitle>
                    <CardDescription className="text-white/70 text-sm leading-relaxed">
                      {curso.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="flex items-center gap-1 text-white/80">
                        <Clock className="w-3 h-3 text-yellow-400" />
                        <span>{curso.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-white/80">
                        <Users className="w-3 h-3 text-orange-400" />
                        <span>{curso.students}</span>
                      </div>
                      <div className="flex items-center gap-1 text-white/80">
                        <Star className="w-3 h-3 text-red-400" />
                        <span>{curso.ages}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm">Preparación:</h4>
                      <div className="space-y-1">
                        {curso.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                            <div className="w-1 h-1 bg-yellow-400 rounded-full" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link href={`/cursos/olimpiadas-matematica/${curso.id}`}>
                        <Button
                          className={`w-full bg-gradient-to-r ${curso.color} hover:scale-105 transition-all duration-300 group text-sm`}
                        >
                          Ver curso completo
                          <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
