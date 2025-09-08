import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { SiteFooter } from "@/components/layout/main-footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

export const metadata: Metadata = {
  title: "Ruta Matemática — Mateatletas",
  description:
    "Desarrollá el pensamiento lógico y la resolución de problemas. Preparación para olimpíadas matemáticas y desafíos de alto nivel.",
}

export default function RutaMatematicaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            MATE<span className="text-primary">ATLETAS</span>
          </Link>
          <Button asChild variant="outline">
            <Link href="/">Volver al Inicio</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-2xl mb-6">
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-green-400">
                <g stroke="currentColor" strokeWidth="2" fill="none">
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="28" cy="12" r="3" />
                  <circle cx="20" cy="28" r="3" />
                  <circle cx="8" cy="28" r="2" />
                  <circle cx="32" cy="28" r="2" />
                  <line x1="15" y1="12" x2="25" y2="12" />
                  <line x1="14" y1="15" x2="18" y2="25" />
                  <line x1="26" y1="15" x2="22" y2="25" />
                  <line x1="10" y1="28" x2="17" y2="28" />
                  <line x1="23" y1="28" x2="30" y2="28" />
                </g>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-green-400">Ruta Matemática</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Desarrollá el pensamiento lógico y la resolución de problemas a través de desafíos matemáticos reales.
              Desde conceptos fundamentales hasta preparación para olimpíadas.
            </p>
          </div>

          {/* Qué se entrena */}
          <Card className="mb-8 bg-card/60 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-green-400">Qué se entrena</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Habilidades Fundamentales</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Pensamiento lógico-deductivo
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Resolución de problemas complejos
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Modelado matemático
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Argumentación y demostración
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Áreas de Conocimiento</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Álgebra y geometría aplicada
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Teoría de números
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Combinatoria y probabilidad
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Optimización y estrategias
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Proyectos típicos */}
          <Card className="mb-8 bg-card/60 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-green-400">Proyectos típicos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Modelado de Fenómenos",
                    description: "Crear modelos matemáticos para explicar situaciones reales",
                    examples: ["Crecimiento poblacional", "Optimización de rutas", "Análisis de datos"],
                  },
                  {
                    title: "Desafíos Lógicos",
                    description: "Resolver problemas que requieren pensamiento estratégico",
                    examples: ["Juegos de estrategia", "Puzzles matemáticos", "Problemas de ingenio"],
                  },
                  {
                    title: "Investigación Matemática",
                    description: "Explorar patrones y formular conjeturas propias",
                    examples: ["Secuencias numéricas", "Geometría fractal", "Teoría de grafos"],
                  },
                ].map((project, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="font-semibold text-foreground">{project.title}</h4>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.examples.map((example, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-green-500/20 text-green-400">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Preparación para olimpíadas */}
          <Card className="mb-8 bg-card/60 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-green-400">Preparación para olimpíadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Entrenamiento específico para competencias matemáticas nacionales e internacionales, desarrollando las
                  habilidades necesarias para destacar en estos desafíos de alto nivel.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Competencias Objetivo</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Olimpíada Matemática Argentina (OMA)
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Olimpíada Matemática del Cono Sur
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        International Mathematical Olympiad (IMO)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Metodología de Entrenamiento</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Resolución de problemas históricos
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Técnicas de demostración avanzadas
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Simulacros de competencia
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-green-500/10 to-primary/10 border-green-500/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">¿Listo para el desafío matemático?</h3>
              <p className="text-muted-foreground mb-6">
                Descubrí si tu hijo/a tiene el perfil para destacar en matemática con nuestro diagnóstico gratuito.
              </p>
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                <Link href="/diagnostico">Iniciar Diagnóstico STEAM</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
