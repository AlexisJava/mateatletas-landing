import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { SiteFooter } from "@/components/layout/main-footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

export const metadata: Metadata = {
  title: "Ruta Programación — Mateatletas",
  description:
    "Creá videojuegos, apps y proyectos de automatización. Desde Scratch hasta Python y electrónica básica para chicos de 6 a 15 años.",
}

export default function RutaProgramacionPage() {
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/20 rounded-2xl mb-6">
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-blue-400">
                <g stroke="currentColor" strokeWidth="2.5" fill="none">
                  <path d="M8 12l4 4-4 4" />
                  <path d="M32 12l-4 4 4 4" />
                  <path d="M18 8l-4 24" />
                  <rect x="6" y="6" width="28" height="28" rx="4" strokeWidth="1.5" />
                  <rect x="12" y="18" width="16" height="8" rx="2" strokeWidth="1" />
                </g>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-blue-400">Ruta Programación</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Transformá ideas en realidad a través del código. Desde videojuegos hasta aplicaciones útiles,
              desarrollando el pensamiento computacional paso a paso.
            </p>
          </div>

          {/* Videojuegos */}
          <Card className="mb-8 bg-card/60 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-400">Videojuegos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Creá tus propios videojuegos desde cero, aprendiendo programación de manera divertida y práctica.
                  Desde conceptos básicos hasta mecánicas avanzadas.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      level: "Principiante (6-9 años)",
                      tool: "Scratch",
                      projects: ["Juegos de plataformas", "Historias interactivas", "Animaciones"],
                    },
                    {
                      level: "Intermedio (10-12 años)",
                      tool: "Roblox Studio",
                      projects: ["Mundos 3D", "Sistemas de puntos", "Multijugador básico"],
                    },
                    {
                      level: "Avanzado (13-15 años)",
                      tool: "Godot/Unity",
                      projects: ["Juegos 2D/3D", "Física realista", "Inteligencia artificial"],
                    },
                  ].map((item, index) => (
                    <div key={index} className="space-y-3">
                      <h4 className="font-semibold text-foreground">{item.level}</h4>
                      <Badge className="bg-blue-600/80 text-white">{item.tool}</Badge>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {item.projects.map((project, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Apps/automatización */}
          <Card className="mb-8 bg-card/60 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-400">Apps y automatización</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Desarrollá aplicaciones que resuelvan problemas reales y automaticen tareas cotidianas. Aprendé a
                  pensar como un programador profesional.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Aplicaciones Web</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Calculadoras especializadas
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Organizadores de tareas
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Generadores de contenido
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Dashboards de datos
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Automatización</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Scripts de organización de archivos
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Bots para redes sociales
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Análisis automático de datos
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Notificaciones inteligentes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Electrónica simple */}
          <Card className="mb-8 bg-card/60 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-400">Electrónica simple</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Combiná programación con hardware para crear proyectos físicos interactivos. Desde sensores básicos
                  hasta robots autónomos.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      category: "Sensores y Actuadores",
                      projects: ["Termómetro digital", "Detector de movimiento", "Sistema de luces automático"],
                    },
                    {
                      category: "Internet de las Cosas",
                      projects: ["Monitor de plantas", "Estación meteorológica", "Control remoto por WiFi"],
                    },
                    {
                      category: "Robótica Básica",
                      projects: ["Robot seguidor de línea", "Brazo robótico", "Vehículo autónomo"],
                    },
                  ].map((category, index) => (
                    <div key={index} className="space-y-3">
                      <h4 className="font-semibold text-foreground">{category.category}</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {category.projects.map((project, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  {["Arduino", "Raspberry Pi", "Sensores", "Motores", "LEDs", "Impresión 3D"].map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-600/80 text-white">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-blue-500/10 to-primary/10 border-blue-500/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">¿Listo para crear el futuro?</h3>
              <p className="text-muted-foreground mb-6">
                Descubrí si tu hijo/a tiene el perfil para destacar en programación con nuestro diagnóstico gratuito.
              </p>
              <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
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
