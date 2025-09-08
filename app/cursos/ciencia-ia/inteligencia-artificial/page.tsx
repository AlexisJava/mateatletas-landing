"use client"

import { SiteFooter } from "@/components/layout/main-footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { motion } from "framer-motion"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, ArrowRight, Brain, Code, Zap, Trophy, Cpu } from "lucide-react"
import Link from "next/link"

export default function InteligenciaArtificialPage() {
  const modules = [
    { title: "Fundamentos de Python", description: "Domina el lenguaje de la inteligencia artificial" },
    { title: "Machine Learning Básico", description: "Algoritmos de aprendizaje supervisado y no supervisado" },
    { title: "Redes Neuronales", description: "Construye y entrena redes neuronales desde cero" },
    { title: "Deep Learning con TensorFlow", description: "Frameworks profesionales para IA avanzada" },
    { title: "Proyectos de IA Real", description: "Chatbots, reconocimiento de imágenes y más" },
  ]

  const benefits = [
    "Domina Python y TensorFlow",
    "Crea tu propia IA desde cero",
    "Portfolio impresionante para universidades",
    "Habilidades del futuro garantizadas",
    "Proyectos reales con impacto social",
    "Preparación para carreras tech top",
  ]

  const projects = [
    { name: "Chatbot Inteligente", description: "IA conversacional con procesamiento de lenguaje natural" },
    { name: "Reconocimiento Facial", description: "Sistema de identificación usando computer vision" },
    { name: "Predictor de Mercados", description: "IA que analiza tendencias financieras" },
    { name: "Asistente Personal", description: "IA que automatiza tareas cotidianas" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <main className="relative z-10 pt-24 pb-16">
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
              <Brain className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">Inteligencia Artificial</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400 bg-clip-text text-transparent text-white">
                Construye el futuro
              </span>
              <br />
              <span className="text-white">con inteligencia artificial</span>
            </h1>

            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Domina las tecnologías que están transformando el mundo. Aprende Python, TensorFlow y crea proyectos de IA
              que impacten la sociedad mientras te preparas para las carreras del futuro.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span className="text-white/90 text-sm">4-6 estudiantes máximo</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-pink-400" />
                <span className="text-white/90 text-sm">10 meses intensivos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-cyan-400" />
                <span className="text-white/90 text-sm">Edades 14-17 años</span>
              </div>
            </div>

            <Link href="/diagnostico">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Comenzar mi carrera en IA
                <Brain className="w-5 h-5 ml-2" />
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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-white">
                Proyectos que desarrollarás
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Cpu className="w-6 h-6 text-purple-400" />
                    <h3 className="text-white font-semibold">{project.name}</h3>
                  </div>
                  <p className="text-white/70 text-sm">{project.description}</p>
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
              <span className="text-white">Curriculum profesional</span>
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
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold">
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
            <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg border-purple-500/20 p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">La revolución de la IA comienza contigo</h2>
                <p className="text-white/80 mb-8 text-lg">
                  Las empresas más valiosas del mundo buscan expertos en IA. Sé parte de esta revolución.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Python + TensorFlow</h3>
                    <p className="text-white/70 text-sm">Las herramientas más demandadas</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Proyectos reales</h3>
                    <p className="text-white/70 text-sm">Portfolio que impresiona</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Futuro asegurado</h3>
                    <p className="text-white/70 text-sm">Carreras mejor pagadas del mundo</p>
                  </div>
                </div>

                <Link href="/diagnostico">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Reservar mi lugar en el futuro
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Button>
                </Link>

                <p className="text-white/60 text-sm mt-4">* Cupos limitados - Solo 4 estudiantes por cohorte</p>
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
