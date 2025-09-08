"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BrainCircuit, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function InteractiveMathPanel() {
  return (
    <section className="py-24 relative z-10" style={{ backgroundColor: "#0D1117" }}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[30%_70%] gap-12 lg:gap-16">
          {/* Left Column - Navigation Placeholder */}
          <div className="flex flex-col items-start space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#00E676" }} />
              <span className="text-lg font-medium" style={{ color: "#00E676" }}>
                Matemática
              </span>
            </div>
            <div className="text-sm text-muted-foreground">Navegación completa próximamente</div>
          </div>

          {/* Right Column - Content Panel */}
          <div className="grid lg:grid-cols-[60%_40%] gap-8">
            {/* Text Column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="outline"
                  className="text-sm font-medium border-2"
                  style={{
                    borderColor: "#00E676",
                    color: "#00E676",
                    backgroundColor: "transparent",
                  }}
                >
                  <BrainCircuit className="w-4 h-4 mr-2" />
                  Lógica & Resolución de Problemas
                </Badge>

                <h2 className="text-4xl font-bold text-white font-sans">Matemática para Pensar con Claridad</h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  No memorizamos fórmulas. Modelamos situaciones reales, exploramos patrones y construimos argumentos
                  sólidos. Cada problema es una oportunidad para desarrollar estrategias de pensamiento que trascienden
                  la matemática.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-3">
                {["Pensamiento abstracto", "Estrategias de solución", "Preparación para olimpíadas"].map(
                  (benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5" style={{ color: "#00E676" }} />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ),
                )}
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "95%", label: "Mejora en lógica" },
                  { value: "Top 10%", label: "En competencias" },
                  { value: "+40", label: "Problemas resueltos" },
                ].map((metric, index) => (
                  <Card key={index} className="bg-card/60 border-border/50">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold mb-1" style={{ color: "#00E676" }}>
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Tools */}
              <div className="space-y-3">
                <div className="text-sm font-medium text-muted-foreground">Herramientas:</div>
                <div className="flex flex-wrap gap-2">
                  {["GeoGebra", "Laboratorios Virtuales", "Gamificación"].map((tool, index) => (
                    <Badge key={index} variant="secondary" className="bg-muted/50">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Button asChild size="lg" className="text-black font-semibold" style={{ backgroundColor: "#00E676" }}>
                <Link href="/rutas/matematica">
                  Explorar Ruta Matemática
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Visualization Column */}
            <div className="space-y-6">
              <Card className="bg-card/60 border-2 backdrop-blur-sm" style={{ borderColor: "#00E676" }}>
                <CardHeader>
                  <CardTitle className="text-lg text-center">Dashboard de Rendimiento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Card className="bg-background/50">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Precisión Lógica</span>
                        <span className="text-lg font-bold" style={{ color: "#00E676" }}>
                          98/100
                        </span>
                      </div>
                      <Progress
                        value={98}
                        className="h-2"
                        style={{
                          backgroundColor: "#374151",
                        }}
                      />
                    </CardContent>
                  </Card>

                  <Card className="bg-background/50">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Velocidad de Resolución</span>
                        <span className="text-lg font-bold" style={{ color: "#00E676" }}>
                          1.2x
                        </span>
                      </div>
                      <Progress
                        value={75}
                        className="h-2"
                        style={{
                          backgroundColor: "#374151",
                        }}
                      />
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
