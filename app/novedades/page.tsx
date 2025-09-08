"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteFooter } from "@/components/layout/main-footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import Link from "next/link"

export default function NovedadesPage() {
  const [activeFilter, setActiveFilter] = useState("Todas")

  const articles = [
    {
      id: "laboratorio-robotica",
      title: "Nuevo Laboratorio de Robótica",
      category: "Evento",
      date: "5 de Septiembre, 2025",
      excerpt:
        "Inauguramos nuestro nuevo espacio de robótica con tecnología de última generación para nuestros atletas.",
    },
    {
      id: "maria-app-matematicas",
      title: "Atleta Destacado: María y su App de Matemáticas",
      category: "Proyecto Destacado",
      date: "3 de Septiembre, 2025",
      excerpt: "María, de 14 años, desarrolló una aplicación que ayuda a estudiantes con dificultades en álgebra.",
    },
    {
      id: "webinar-steam-casa",
      title: "Webinar: Cómo Apoyar el Aprendizaje STEAM en Casa",
      category: "Para Padres",
      date: "1 de Septiembre, 2025",
      excerpt: "Estrategias prácticas para que los padres fomenten el pensamiento científico en el hogar.",
    },
    {
      id: "mision-agosto-resultados",
      title: "Misión Agosto: Resultados Increíbles",
      category: "Próxima Misión",
      date: "30 de Agosto, 2025",
      excerpt: "Los atletas superaron todas las expectativas en los desafíos de programación y matemáticas.",
    },
    {
      id: "competencia-programacion",
      title: "Competencia Nacional de Programación",
      category: "Evento",
      date: "28 de Agosto, 2025",
      excerpt: "Nuestros atletas representarán al club en la competencia nacional de algoritmos.",
    },
    {
      id: "tutorial-python",
      title: "Tutorial: Primeros Pasos en Python",
      category: "Proyecto Destacado",
      date: "25 de Agosto, 2025",
      excerpt: "Guía completa para que los nuevos atletas comiencen su aventura en programación.",
    },
    {
      id: "entrevista-mentor-ia",
      title: "Entrevista con Mentor IA",
      category: "Para Padres",
      date: "22 de Agosto, 2025",
      excerpt: "Conversamos con nuestro especialista en IA sobre el futuro de la educación tecnológica.",
    },
    {
      id: "hackathon-juvenil",
      title: "Hackathon Juvenil MateAtletas",
      category: "Evento",
      date: "20 de Agosto, 2025",
      excerpt: "48 horas de creatividad, código y soluciones innovadoras creadas por nuestros atletas.",
    },
    {
      id: "calculadora-cientifica",
      title: "Proyecto: Calculadora Científica Avanzada",
      category: "Proyecto Destacado",
      date: "18 de Agosto, 2025",
      excerpt: "Un equipo de atletas creó una calculadora con funciones avanzadas y interfaz intuitiva.",
    },
  ]

  const getFilteredArticles = () => {
    if (activeFilter === "Todas") return articles

    return articles.filter((article) => {
      switch (activeFilter) {
        case "Proyectos Destacados":
          return article.category === "Proyecto Destacado"
        case "Próximas Misiones":
          return article.category === "Próxima Misión"
        case "Eventos y Webinars":
          return article.category === "Evento"
        case "Para Padres":
          return article.category === "Para Padres"
        default:
          return false
      }
    })
  }

  const filteredArticles = getFilteredArticles()

  const filters = ["Todas", "Próximas Misiones", "Proyectos Destacados", "Eventos y Webinars", "Para Padres"]

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
  }

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E5E7EB] relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-green-500/15 rounded-full blur-3xl animate-bounce pointer-events-none"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl animate-bounce pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-green-500/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      </div>

      <main className="relative z-30 px-4 py-20 pointer-events-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Bitácora de Misión: El Diario de MateAtletas
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Las últimas actualizaciones, próximas misiones, proyectos de nuestros atletas y artículos clave desde el
              centro de comando del club.
            </p>
          </div>

          <Card className="mb-12 bg-gray-900/50 backdrop-blur-sm border-gray-700 pointer-events-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Imagen Destacada</span>
                </div>
                <div className="space-y-4">
                  <Badge className="bg-green-600/20 text-green-400 border-green-600/30">Próxima Misión</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold">Misión Octubre: Explorando el Universo de la IA</h3>
                  <p className="text-gray-300">
                    Descubre cómo nuestros atletas están construyendo el futuro con inteligencia artificial. Proyectos
                    increíbles, mentorías especializadas y una aventura que cambiará su perspectiva del mundo digital.
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white pointer-events-auto">Leer Más →</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12 pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filters.map((filter, index) => (
              <motion.div
                key={filter}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant="outline"
                  className={`cursor-pointer transition-all pointer-events-auto ${
                    activeFilter === filter
                      ? "bg-green-600/20 border-green-600/30 text-green-400 shadow-lg shadow-green-600/20"
                      : "hover:bg-blue-600/20 border-gray-600 text-gray-300"
                  }`}
                  onClick={() => handleFilterChange(filter)}
                >
                  {filter}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 pointer-events-auto" layout>
            <AnimatePresence mode="wait">
              {filteredArticles.map((item, index) => (
                <motion.div
                  key={`${activeFilter}-${index}`}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  layout
                >
                  <Card className="bg-gray-900/30 backdrop-blur-sm border-gray-700 hover:bg-gray-900/50 transition-all cursor-pointer group pointer-events-auto h-full">
                    <Link href={`/novedades/${item.id}`} className="block h-full">
                      <div className="aspect-video bg-gray-800 rounded-t-lg flex items-center justify-center">
                        <span className="text-gray-400">Imagen</span>
                      </div>
                      <CardContent className="p-6">
                        <Badge
                          className={`mb-3 ${
                            item.category === "Evento"
                              ? "bg-blue-600/20 text-blue-400 border-blue-600/30"
                              : item.category === "Proyecto Destacado"
                                ? "bg-purple-600/20 text-purple-400 border-purple-600/30"
                                : item.category === "Para Padres"
                                  ? "bg-orange-600/20 text-orange-400 border-orange-600/30"
                                  : "bg-green-600/20 text-green-400 border-green-600/30"
                          }`}
                        >
                          {item.category}
                        </Badge>
                        <h4 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-300 mb-2">{item.excerpt}</p>
                        <p className="text-sm text-gray-400">{item.date}</p>
                      </CardContent>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <SiteFooter />

      <ScrollToTop />
    </div>
  )
}
