"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter, Eye, Star, BrainCircuit, Package, Clock, Calculator } from "lucide-react"

const proyectos = [
  {
    id: "geometria-dinamica",
    nombre: "Laboratorio de Geometría Dinámica",
    alumno: "Lucía G.",
    pilar: "matematica",
    estado: "completado",
    progreso: 100,
    imagen: "https://placehold.co/500x300/0D1117/00E676?text=GeoLab",
    logo: "https://placehold.co/100x100/FFFFFF/0D1117?text=G",
    descripcion: "Laboratorio interactivo para visualizar y manipular conceptos complejos de trigonometría y vectores.",
    conceptos: ["Trigonometría", "Vectores", "GeoGebra"],
    metricas: {
      precision: "98%",
      conceptos_dominados: "8/10",
      complejidad: "Avanzada",
    },
    destacado: true,
  },
  {
    id: "analisis-estadistico",
    nombre: "Análisis Estadístico de Datos",
    alumno: "Mateo R.",
    pilar: "matematica",
    estado: "completado",
    progreso: 100,
    imagen: "https://placehold.co/500x300/0D1117/00E676?text=DataViz",
    logo: "https://placehold.co/100x100/FFFFFF/0D1117?text=S",
    descripcion:
      "Análisis de un set de datos real para extraer conclusiones usando herramientas de visualización y estadística.",
    conceptos: ["Estadística", "Probabilidad", "Python"],
    metricas: {
      precision: "95%",
      conceptos_dominados: "9/10",
      complejidad: "Intermedia",
    },
    destacado: false,
  },
  {
    id: "olimpiadas-problemas",
    nombre: "Resolución de Problemas de Olimpíada",
    alumno: "Sofía L.",
    pilar: "matematica",
    estado: "en-progreso",
    progreso: 80,
    imagen: "https://placehold.co/500x300/0D1117/00E676?text=Olimpíada",
    logo: "https://placehold.co/100x100/FFFFFF/0D1117?text=O",
    descripcion:
      "Entrenamiento enfocado en la resolución de problemas no rutinarios típicos de competencias matemáticas.",
    conceptos: ["Teoría de Números", "Combinatoria", "Lógica"],
    metricas: {
      precision: "92%",
      conceptos_dominados: "7/10",
      complejidad: "Avanzada",
    },
    destacado: true,
  },
]

export function GaleriaPilarMatematica() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("matematica")

  const filtros = [
    { id: "todos", label: "Todos", count: 150 },
    { id: "matematica", label: "Matemática", count: 45 },
    { id: "programacion", label: "Programación", count: 55 },
    { id: "ia", label: "Inteligencia Artificial", count: 25 },
    { id: "sociales", label: "Habilidades Sociales", count: 25 },
  ]

  const proyectosFiltrados = proyectos.filter((proyecto) => {
    const matchesSearch =
      proyecto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proyecto.alumno.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proyecto.descripcion.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = selectedFilter === "todos" || proyecto.pilar === selectedFilter

    return matchesSearch && matchesFilter
  })

  const getPilarIcon = (pilar: string) => {
    return <Calculator className="w-4 h-4 text-green-400" />
  }

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case "completado":
        return "text-white bg-green-600/80 border-green-500/60"
      case "en-progreso":
        return "text-white bg-blue-600/80 border-blue-500/60"
      default:
        return "text-white bg-gray-600/80 border-gray-500/60"
    }
  }

  return (
    <section className="bg-background text-foreground py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white">Galería de </span>
              <span className="text-green-400">Talentos</span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explora los proyectos, desafíos y logros de nuestros alumnos. La evidencia real de nuestro método.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-background/50 border border-border rounded-lg p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">+150</p>
                  <p className="text-sm text-muted-foreground">Proyectos Creados</p>
                </div>
              </div>
            </div>
            <div className="bg-background/50 border border-border rounded-lg p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">+20K</p>
                  <p className="text-sm text-muted-foreground">Horas de Práctica</p>
                </div>
              </div>
            </div>
            <div className="bg-background/50 border border-border rounded-lg p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <BrainCircuit className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">+500</p>
                  <p className="text-sm text-muted-foreground">Conceptos Dominados</p>
                </div>
              </div>
            </div>
            <div className="bg-background/50 border border-border rounded-lg p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">98%</p>
                  <p className="text-sm text-muted-foreground">Satisfacción Familias</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar proyectos, alumnos, conceptos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              <Filter className="text-muted-foreground w-5 h-5 flex-shrink-0" />
              {filtros.map((filtro) => (
                <button
                  key={filtro.id}
                  onClick={() => setSelectedFilter(filtro.id)}
                  className={`px-4 py-2 text-sm rounded-lg whitespace-nowrap transition-all ${
                    selectedFilter === filtro.id
                      ? "bg-green-600/90 text-white border border-green-500/80"
                      : "bg-background/50 text-muted-foreground border border-border hover:text-foreground hover:border-primary/30"
                  }`}
                >
                  {filtro.label} ({filtro.count})
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <AnimatePresence>
              {proyectosFiltrados.map((proyecto, index) => (
                <motion.div
                  key={proyecto.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-background/50 border border-border rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,230,118,0.15)]">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={proyecto.imagen || "/placeholder.svg"}
                        alt={proyecto.nombre}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                      <div className="absolute top-4 left-4">
                        <div
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${getEstadoColor(proyecto.estado)}`}
                        >
                          {proyecto.estado === "en-progreso" ? "En Progreso" : "Completado"}
                        </div>
                      </div>

                      {proyecto.destacado && (
                        <div className="absolute top-4 right-4">
                          <div className="px-3 py-1 bg-green-500 text-black rounded-full text-xs font-medium">
                            Destacado
                          </div>
                        </div>
                      )}

                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-lg p-2">
                          <img
                            src={proyecto.logo || "/placeholder.svg"}
                            alt={`${proyecto.nombre} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      <div className="absolute bottom-4 right-4 flex space-x-2">
                        <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-green-500/20 transition-colors">
                          <Eye className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          {getPilarIcon(proyecto.pilar)}
                          <h3 className="text-lg font-bold">{proyecto.nombre}</h3>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">Alumno: {proyecto.alumno}</p>
                      <p className="text-sm text-foreground mb-4 line-clamp-2">{proyecto.descripcion}</p>

                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs text-muted-foreground">Progreso</span>
                          <span className="text-xs text-green-400">{proyecto.progreso}%</span>
                        </div>
                        <div className="w-full bg-muted/50 rounded-full h-2">
                          <motion.div
                            className="bg-green-500 rounded-full h-2"
                            initial={{ width: 0 }}
                            animate={{ width: `${proyecto.progreso}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {proyecto.conceptos.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Precisión</p>
                          <p className="text-sm font-medium">{proyecto.metricas.precision}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Conceptos</p>
                          <p className="text-sm font-medium">{proyecto.metricas.conceptos_dominados}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Complejidad</p>
                          <p className="text-sm font-medium text-green-400">{proyecto.metricas.complejidad}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
