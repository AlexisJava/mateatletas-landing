"use client"

import type React from "react"
import { X, Calculator, Code, Brain, Users } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

interface Program {
  id: string
  title: string
  description: string
  ageRange: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  features: string[]
}

const programs: Program[] = [
  {
    id: "matematica-avanzada",
    title: "Matemática Avanzada",
    description: "Desarrollo del pensamiento lógico y resolución de problemas complejos",
    ageRange: "8-15 años",
    icon: Calculator,
    color: "from-emerald-500 to-teal-600",
    features: ["Álgebra aplicada", "Geometría espacial", "Estadística práctica"],
  },
  {
    id: "programacion-creativa",
    title: "Programación Creativa",
    description: "Construcción de aplicaciones y videojuegos desde cero",
    ageRange: "6-15 años",
    icon: Code,
    color: "from-blue-500 to-cyan-600",
    features: ["Python & JavaScript", "Desarrollo de apps", "Videojuegos 2D/3D"],
  },
  {
    id: "inteligencia-artificial",
    title: "Inteligencia Artificial",
    description: "Exploración práctica de machine learning y redes neuronales",
    ageRange: "10-15 años",
    icon: Brain,
    color: "from-purple-500 to-violet-600",
    features: ["Machine Learning", "Redes neuronales", "Proyectos con IA"],
  },
  {
    id: "habilidades-sociales",
    title: "Habilidades Sociales",
    description: "Comunicación efectiva y liderazgo en equipos tecnológicos",
    ageRange: "6-15 años",
    icon: Users,
    color: "from-orange-500 to-red-600",
    features: ["Trabajo en equipo", "Presentaciones", "Liderazgo técnico"],
  },
]

interface ProgramsMegaMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function ProgramsMegaMenu({ isOpen, onClose }: ProgramsMegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-black/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
                  Nuestros Programas
                </h2>
                <p className="text-lg text-muted-foreground mt-2">
                  Descubre el programa perfecto para desarrollar el potencial de tu hijo/a
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-12 w-12 rounded-full border border-white/10 hover:bg-white/5"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 hover:border-white/20 transition-all duration-300"
                >
                  {/* Program Icon */}
                  <div
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${program.color} mb-4`}
                  >
                    <program.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Program Info */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-sm text-accent font-medium">{program.ageRange}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{program.description}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-white/80">Incluye:</p>
                      <ul className="space-y-1">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-accent mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Button
                      className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                      onClick={() => {
                        // Navigate to program details or diagnostic
                        window.location.href = "/diagnostico"
                      }}
                    >
                      Agendar Diagnóstico
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="mt-8 text-center p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <h3 className="text-xl font-bold text-white mb-2">¿No estás seguro cuál elegir?</h3>
              <p className="text-muted-foreground mb-4">
                Nuestro diagnóstico STEAM personalizado te ayudará a encontrar el programa ideal
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                onClick={() => {
                  window.location.href = "/diagnostico"
                }}
              >
                Comenzar Diagnóstico STEAM
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
