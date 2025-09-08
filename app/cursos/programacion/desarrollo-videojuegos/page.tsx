"use client"

import { SiteFooter } from "@/components/layout/main-footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { motion } from "framer-motion"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, ArrowRight, Gamepad2, Code, Zap, Trophy } from "lucide-react"
import Link from "next/link"

export default function DesarrolloVideojuegosPage() {
  const modules = [
    { title: "Fundamentos de Unity 3D", description: "Domina el motor de juegos más popular del mundo" },
    { title: "Programación en C#", description: "Aprende el lenguaje que impulsa los mejores videojuegos" },
    { title: "Diseño de Gameplay", description: "Crea mecánicas adictivas y experiencias memorables" },
    { title: "Arte y Animación", description: "Da vida a tus personajes y mundos virtuales" },
    { title: "Publicación de Juegos", description: "Lleva tu creación a Steam y tiendas digitales" },
  ]

  const benefits = [
    "Crea tu primer videojuego profesional",
    "Domina Unity 3D y C# desde cero",
    "Portfolio impresionante para universidades",
    "Habilidades de programación avanzada",
    "Pensamiento creativo y resolución de problemas",
    "Posibles ingresos con tus juegos",
  ]

  const projects = [
    "Juego de plataformas 2D estilo Mario",
    "Shooter espacial con efectos especiales",
    "RPG con sistema de combate por turnos",
    "Juego móvil para Android/iOS",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
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
              <Gamepad2 className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">Desarrollo de Videojuegos</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent text-white">
                Convierte tu pasión
              </span>
              <br />
              <span className="text-white">en tu profesión</span>
            </h1>

            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Crea videojuegos profesionales desde cero usando Unity 3D y C#. Desarrolla habilidades que las mejores
              universidades y empresas tecnológicas buscan.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span className="text-white/90 text-sm">6-8 estudiantes máximo</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-white/90 text-sm">10 meses intensivos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-cyan-400" />
                <span className="text-white/90 text-sm">Edades 12-17 años</span>
              </div>
            </div>

            <Link href="/diagnostico">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Comenzar mi carrera gamer
                <Gamepad2 className="w-5 h-5 ml-2" />
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
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-white">
                Proyectos que crearás
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Trophy className="w-6 h-6 text-purple-400" />
                    <h3 className="text-white font-semibold">{project}</h3>
                  </div>
                  <p className="text-white/70 text-sm">
                    Proyecto completo con código fuente, arte y mecánicas profesionales
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
              <span className="text-white">Curriculum completo</span>
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
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold">
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
            <Card className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-lg border-purple-500/20 p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">El futuro de los videojuegos te está esperando</h2>
                <p className="text-white/80 mb-8 text-lg">
                  La industria de videojuegos genera más ingresos que Hollywood y la música juntos
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Portfolio profesional</h3>
                    <p className="text-white/70 text-sm">4 juegos completos para mostrar</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Habilidades demandadas</h3>
                    <p className="text-white/70 text-sm">Unity y C# son top 3 mundial</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Certificación oficial</h3>
                    <p className="text-white/70 text-sm">Reconocida por universidades</p>
                  </div>
                </div>

                <Link href="/diagnostico">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Crear mi primer videojuego
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Button>
                </Link>

                <p className="text-white/60 text-sm mt-4">* Cupos limitados - Solo 6 estudiantes por cohorte</p>
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
