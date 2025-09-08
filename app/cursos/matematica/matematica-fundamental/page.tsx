"use client"

import { SiteFooter } from "@/components/layout/main-footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { PaymentModal } from "@/components/ui/payment-modal"
import { motion } from "framer-motion"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, ArrowRight, BookOpen, CheckCircle, Award, Calendar, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function MatematicaFundamentalPage() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  const modules = [
    { title: "Números y Operaciones", description: "Domina la aritmética básica con métodos visuales y divertidos" },
    { title: "Geometría Exploratoria", description: "Descubre formas, espacios y medidas a través del juego" },
    { title: "Resolución de Problemas", description: "Desarrolla estrategias para enfrentar desafíos matemáticos" },
    { title: "Matemática en la Vida Real", description: "Conecta conceptos con situaciones cotidianas" },
  ]

  const benefits = [
    "Bases sólidas en matemática",
    "Confianza en resolución de problemas",
    "Pensamiento lógico desarrollado",
    "Preparación para niveles avanzados",
    "Metodología lúdica y efectiva",
    "Grupos reducidos personalizados",
  ]

  const schedules = [
    { day: "Lunes y Miércoles", time: "16:00 - 17:30", spots: "3 cupos disponibles" },
    { day: "Martes y Jueves", time: "16:00 - 17:30", spots: "5 cupos disponibles" },
    { day: "Sábados", time: "9:00 - 12:00", spots: "2 cupos disponibles" },
    { day: "Sábados", time: "14:00 - 17:00", spots: "4 cupos disponibles" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        {/* Purple blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-xl animate-pulse will-change-[transform,opacity]"></div>
        <div
          className="absolute top-3/4 right-[20%] w-80 h-80 bg-purple-600/15 rounded-full blur-xl animate-bounce will-change-[transform,opacity]"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-400/10 rounded-full blur-xl will-change-[transform,opacity]"
          style={{ animation: "float 12s ease-in-out infinite" }}
        ></div>

        {/* Green blobs */}
        <div
          className="absolute bottom-1/3 right-[20%] w-[22rem] h-[22rem] bg-green-500/15 rounded-full blur-xl will-change-[transform,opacity]"
          style={{ animation: "drift 18s linear infinite" }}
        ></div>
        <div
          className="absolute top-1/5 left-[16.666%] w-64 h-64 bg-emerald-400/12 rounded-full blur-xl will-change-[transform,opacity]"
          style={{ animation: "sway 14s ease-in-out infinite alternate" }}
        ></div>

        {/* Turquoise/Cyan blobs */}
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-500/18 rounded-full blur-xl will-change-[transform,opacity]"
          style={{ animation: "float 16s ease-in-out infinite reverse" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/3 w-72 h-72 bg-teal-400/14 rounded-full blur-xl will-change-[transform,opacity]"
          style={{ animation: "drift 20s linear infinite reverse" }}
        ></div>

        {/* Additional mixed color blobs */}
        <div
          className="absolute top-1/6 right-1/3 w-56 h-56 bg-purple-300/15 rounded-full blur-xl will-change-[transform,opacity]"
          style={{ animation: "sway 10s ease-in-out infinite alternate" }}
        ></div>
        <div
          className="absolute bottom-1/5 right-2/5 w-64 h-64 bg-green-300/10 rounded-full blur-xl will-change-[transform,opacity]"
          style={{ animation: "float 22s ease-in-out infinite" }}
        ></div>
      </div>

      <main className="relative z-10 pt-24 pb-16">
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">Matemática Fundamental</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent text-white">
                Construye bases matemáticas
              </span>
              <br />
              <span className="text-white">sólidas y duraderas</span>
            </h1>

            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Transforma la relación de tu hijo con las matemáticas a través de métodos innovadores, juegos interactivos
              y un enfoque personalizado que garantiza el éxito académico.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-green-400" />
                <span className="text-white/90 text-sm">8-10 estudiantes máximo</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-white/90 text-sm">6 meses de duración</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-white/90 text-sm">Edades 6-12 años</span>
              </div>
            </div>

            <Button
              size="lg"
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Reservar lugar ahora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent text-white">
                ¿Por qué elegir este curso?
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
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
              <span className="text-white">Programa de estudios</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <CardTitle className="text-white text-lg">{module.title}</CardTitle>
                      </div>
                      <CardDescription className="text-white/70">{module.description}</CardDescription>
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
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Horarios disponibles</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {schedules.map((schedule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <CardTitle className="text-white text-lg">{schedule.day}</CardTitle>
                          <p className="text-green-400 font-semibold">{schedule.time}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-white/90 bg-white/10 px-2 py-1 rounded-full">
                            {schedule.spots}
                          </span>
                        </div>
                      </div>
                      <CardDescription className="text-white/70">
                        Clases presenciales con grupos reducidos de máximo 8 estudiantes
                      </CardDescription>
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
            <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-lg border-green-500/20 p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Comienza la transformación matemática de tu hijo</h2>
                <p className="text-white/80 mb-8 text-lg">
                  Únete a cientos de familias que ya han visto resultados extraordinarios
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Inicio inmediato</h3>
                    <p className="text-white/70 text-sm">Próxima cohorte en 2 semanas</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Garantía de resultados</h3>
                    <p className="text-white/70 text-sm">O devolvemos tu inversión</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">Soporte continuo</h3>
                    <p className="text-white/70 text-sm">Acompañamiento personalizado</p>
                  </div>
                </div>

                <Button
                  size="lg"
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Reservar lugar ahora
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>

                <p className="text-white/90 text-sm mt-4">* Cupos limitados - Solo 8 estudiantes por grupo</p>
              </div>
            </Card>
          </motion.div>
        </section>
      </main>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        courseName="Matemática Fundamental"
        coursePrice={25000}
      />

      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
