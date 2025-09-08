"use client"

import { SiteFooter } from "@/components/layout/main-footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, ArrowRight, Brain, Microscope, Cpu, Zap } from "lucide-react"
import Link from "next/link"

export default function CienciaIAPage() {
  const cursos = [
    {
      id: "ciencia-experimental",
      title: "Ciencia Experimental",
      description:
        "Descubre los secretos de la ciencia a través de experimentos fascinantes y proyectos de investigación.",
      icon: Microscope,
      color: "from-green-400 to-blue-500",
      duration: "8 meses",
      students: "6-8 estudiantes",
      level: "Intermedio",
      ages: "10-15 años",
      highlights: ["Experimentos prácticos", "Método científico", "Laboratorio virtual", "Proyectos de investigación"],
    },
    {
      id: "inteligencia-artificial",
      title: "Inteligencia Artificial",
      description:
        "Explora el mundo de la IA con Python, machine learning y proyectos de inteligencia artificial aplicada.",
      icon: Brain,
      color: "from-purple-400 to-pink-500",
      duration: "10 meses",
      students: "4-6 estudiantes",
      level: "Avanzado",
      ages: "14-17 años",
      highlights: ["Python & TensorFlow", "Machine Learning", "Redes neuronales", "Proyectos de IA"],
    },
    {
      id: "robotica-avanzada",
      title: "Robótica Avanzada",
      description: "Construye y programa robots inteligentes usando Arduino, sensores y sistemas de control avanzados.",
      icon: Cpu,
      color: "from-orange-400 to-red-500",
      duration: "9 meses",
      students: "6-8 estudiantes",
      level: "Avanzado",
      ages: "12-17 años",
      highlights: [
        "Arduino & Raspberry Pi",
        "Sensores avanzados",
        "Programación de robots",
        "Competencias de robótica",
      ],
    },
    {
      id: "innovacion-tecnologica",
      title: "Innovación Tecnológica",
      description:
        "Desarrolla soluciones innovadoras combinando ciencia, tecnología y creatividad para resolver problemas reales.",
      icon: Zap,
      color: "from-cyan-400 to-purple-500",
      duration: "12 meses",
      students: "4-6 estudiantes",
      level: "Elite",
      ages: "15-17 años",
      highlights: ["Proyectos innovadores", "Emprendimiento tech", "Prototipado", "Presentación de ideas"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
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
              <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400 bg-clip-text text-transparent">
                Ciencia e Inteligencia Artificial
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Sumérgete en el fascinante mundo de la ciencia y la inteligencia artificial con nuestros programas de
              vanguardia.
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
                    <CardTitle className="text-xl text-white mb-2">{curso.title}</CardTitle>
                    <CardDescription className="text-white/70 text-sm leading-relaxed">
                      {curso.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="flex items-center gap-1 text-white/80">
                        <Clock className="w-3 h-3 text-purple-400" />
                        <span>{curso.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-white/80">
                        <Users className="w-3 h-3 text-pink-400" />
                        <span>{curso.students}</span>
                      </div>
                      <div className="flex items-center gap-1 text-white/80">
                        <Star className="w-3 h-3 text-cyan-400" />
                        <span>{curso.ages}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm">Especialización:</h4>
                      <div className="space-y-1">
                        {curso.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                            <div className="w-1 h-1 bg-purple-400 rounded-full" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link href={`/cursos/ciencia-ia/${curso.id}`}>
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
