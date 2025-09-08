"use client"

import { SiteFooter } from "@/components/layout/main-footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { motion } from "framer-motion"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, ArrowRight, Medal, Brain, Zap, Trophy, Crown } from "lucide-react"
import Link from "next/link"

export default function OlimpiadasElitePage() {
  const modules = [
    { title: "Teoría de Números Avanzada", description: "Congruencias, funciones multiplicativas y criptografía" },
    { title: "Geometría Olímpica", description: "Teoremas clásicos, transformaciones y construcciones" },
    { title: "Combinatoria Extremal", description: "Principio del palomar, grafos y conteo avanzado" },
    { title: "Álgebra Abstracta", description: "Polinomios, desigualdades y ecuaciones funcionales" },
    { title: "Estrategias de Competencia", description: "Técnicas de examen y manejo del tiempo bajo presión" },
  ]

  const achievements = [
    "Medalla de Oro en OMA Nacional",
    "Clasificación a IMO (International Mathematical Olympiad)",
    "Beca completa en universidades top mundial",
    "Reconocimiento internacional en matemáticas",
    "Red de contactos con genios matemáticos",
    "Preparación para carreras STEM de élite",
  ]

  const competitions = [
    { name: "IMO - International Mathematical Olympiad", level: "Mundial" },
    { name: "OMA - Olimpiada Matemática Argentina", level: "Nacional" },
    { name: "OMCS - Olimpiada del Cono Sur", level: "Regional" },
    { name: "Olimpiada Rioplatense", level: "Binacional" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <main className="relative z-10 pt-24 pb-16">
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
              <Crown className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">Olimpiadas Elite</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-300 to-red-400 bg-clip-text text-transparent text-white">
                Entrena con los mejores
              </span>
              <br />
              <span className="text-white">para competir con los genios</span>
            </h1>

            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Programa de élite para estudiantes excepcionales que buscan competir en olimpiadas internacionales.
              Entrenamiento personalizado con coaches que han ganado medallas en IMO.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-yellow-400" />
                <span className="text-white/90 text-sm">2-4 estudiantes máximo</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-orange-400" />
                <span className="text-white/90 text-sm">12 meses intensivos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-red-400" />
                <span className="text-white/90 text-sm">Edades 15-17 años</span>
              </div>
            </div>

            <Link href="/diagnostico">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Aplicar al programa elite
                <Crown className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent text-white">
                Competencias objetivo
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              {competitions.map((competition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-lg border border-yellow-500/20 rounded-xl p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Medal className="w-8 h-8 text-yellow-400" />
                    <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">{competition.level}</Badge>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{competition.name}</h3>
                  <p className="text-white/70 text-sm">
                    Preparación específica para esta competencia de nivel {competition.level.toLowerCase()}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Curriculum de élite</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <CardTitle className="text-white text-xl">{module.title}</CardTitle>
                          <CardDescription className="text-white/70 mt-1">{module.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-lg border-yellow-500/20 p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Únete a la élite matemática mundial</h2>
                <p className="text-white/80 mb-8 text-lg">
                  Solo para estudiantes excepcionales con potencial de medalla internacional
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Coaches IMO</h3>
                    <p className="text-white/70 text-sm">Entrenadores con medallas internacionales</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Mentoría 1:1</h3>
                    <p className="text-white/70 text-sm">Atención personalizada intensiva</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Becas universitarias</h3>
                    <p className="text-white/70 text-sm">MIT, Harvard, Stanford te esperan</p>
                  </div>
                </div>

                <Link href="/diagnostico">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Aplicar ahora
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Button>
                </Link>

                <p className="text-white/60 text-sm mt-4">
                  * Proceso de selección riguroso - Solo 2-4 estudiantes por año
                </p>
              </div>
            </Card>
          </motion.div>
        </section>
      </main>

      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
