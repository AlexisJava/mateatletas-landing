"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { SiteFooter } from "@/components/layout/main-footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

export default function ProfesoresPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-green-500/25 rounded-full blur-3xl animate-drift"></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-sway"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-emerald-500/25 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl animate-drift"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          className="pt-32 pb-20 px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-green-600/80 text-white border-green-500/30">Únete al Equipo</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white bg-gradient-to-r from-white via-green-100 to-cyan-100 bg-clip-text text-transparent">
              Forma Parte de la Revolución Educativa
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Buscamos educadores apasionados que quieran transformar la manera en que los jóvenes aprenden matemática,
              programación e inteligencia artificial.
            </p>
          </div>
        </motion.section>

        {/* What We Offer & Requirements */}
        <motion.section
          className="py-20 px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* What We Offer */}
              <Card className="bg-card/50 backdrop-blur-sm border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-green-400">Lo Que Ofrecemos</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Ambiente de trabajo innovador y colaborativo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Formación continua en metodologías STEAM</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Herramientas tecnológicas de vanguardia</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Flexibilidad horaria y modalidad híbrida</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Remuneración competitiva y bonos por resultados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Oportunidades de crecimiento profesional</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card className="bg-card/50 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400">Perfil Buscado</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Título universitario en Matemática, Ingeniería o afines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Experiencia en educación (mínimo 2 años)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Conocimientos en programación (Python, JavaScript)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Pasión por la innovación educativa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Habilidades de comunicación excepcionales</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Mentalidad de crecimiento y adaptabilidad</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Application Form */}
        <motion.section
          className="py-20 px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-green-500/30 shadow-2xl shadow-green-500/10">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4 text-white bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                    Postúlate Ahora
                  </h2>
                  <p className="text-muted-foreground">
                    Completa el formulario y nos pondremos en contacto contigo en las próximas 48 horas.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre Completo *</Label>
                      <Input
                        id="nombre"
                        placeholder="Tu nombre completo"
                        className="bg-background/50 border-muted-foreground/20 focus:border-green-500/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="bg-background/50 border-muted-foreground/20 focus:border-green-500/50"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input
                        id="telefono"
                        placeholder="+54 9 11 1234-5678"
                        className="bg-background/50 border-muted-foreground/20 focus:border-green-500/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ubicacion">Ubicación *</Label>
                      <Input
                        id="ubicacion"
                        placeholder="Ciudad, País"
                        className="bg-background/50 border-muted-foreground/20 focus:border-green-500/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="titulo">Título Universitario *</Label>
                    <Input
                      id="titulo"
                      placeholder="Ej: Licenciatura en Matemática, Ingeniería en Sistemas"
                      className="bg-background/50 border-muted-foreground/20 focus:border-green-500/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experiencia">Experiencia Educativa *</Label>
                    <Textarea
                      id="experiencia"
                      placeholder="Describe tu experiencia en educación, instituciones donde trabajaste, años de experiencia..."
                      className="bg-background/50 border-muted-foreground/20 focus:border-green-500/50 min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="habilidades">Habilidades Técnicas *</Label>
                    <Textarea
                      id="habilidades"
                      placeholder="Lenguajes de programación, herramientas, tecnologías que manejas..."
                      className="bg-background/50 border-muted-foreground/20 focus:border-green-500/50 min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivacion">¿Por qué quieres ser parte de Mateatletas? *</Label>
                    <Textarea
                      id="motivacion"
                      placeholder="Cuéntanos qué te motiva a formar parte de nuestro equipo y cómo puedes contribuir a nuestra misión..."
                      className="bg-background/50 border-muted-foreground/20 focus:border-green-500/50 min-h-[120px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cv">CV / LinkedIn</Label>
                    <Input
                      id="cv"
                      placeholder="Enlace a tu CV o perfil de LinkedIn"
                      className="bg-background/50 border-muted-foreground/20 focus:border-green-500/50"
                    />
                  </div>

                  <motion.div className="pt-6" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-green-500/25 transition-all duration-300"
                    >
                      Enviar Postulación
                    </Button>
                  </motion.div>
                </form>

                <div className="mt-8 pt-6 border-t border-muted-foreground/10 text-center text-sm text-muted-foreground">
                  <p>
                    Al enviar tu postulación, aceptas que procesemos tus datos para evaluar tu candidatura. Nos
                    comprometemos a mantener la confidencialidad de tu información.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </div>

      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
