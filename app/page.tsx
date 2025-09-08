"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Script from "next/script"
import PilaresSection from "@/components/sections/core-pillars-section"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { SiteFooter } from "@/components/layout/main-footer"
import RobotScene from "@/components/three/robot-scene"

export default function HomePage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* JSON-LD Schema */}
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Mateatletas Club",
            url: "https://mateatletas.com",
            logo: "https://mateatletas.com/logo.png",
            sameAs: ["https://www.instagram.com/mateatletas"],
            address: { "@type": "PostalAddress", addressCountry: "AR" },
            knowsAbout: ["Matemática", "Programación", "Inteligencia Artificial", "Habilidades Sociales"],
            areaServed: "Argentina",
            audience: { "@type": "PeopleAudience", ageRange: "6-15" },
          }),
        }}
      />

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

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes drift {
          0% { transform: translateX(0px) rotate(0deg); }
          100% { transform: translateX(100px) rotate(360deg); }
        }
        
        @keyframes sway {
          0% { transform: translateX(0px) translateY(0px); }
          100% { transform: translateX(30px) translateY(-15px); }
        }
        
        @keyframes neuralRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes neuralPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes neuralFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes neuralFlow {
          0% { stroke-dasharray: 0 100; }
          50% { stroke-dasharray: 50 50; }
          100% { stroke-dasharray: 100 0; }
        }
        
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
          50% { transform: translateY(-15px) translateX(10px); opacity: 1; }
        }
        
        @keyframes codeFlow {
          0% { transform: translateY(0px); opacity: 0.2; }
          50% { transform: translateY(10px); opacity: 0.8; }
          100% { transform: translateY(0px); opacity: 0.2; }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(40px) rotate(0deg); opacity: 0.4; }
          50% { transform: rotate(180deg) translateX(40px) rotate(-180deg); opacity: 1; }
          100% { transform: rotate(360deg) translateX(40px) rotate(-360deg); opacity: 0.4; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 1; }
        }
      `}</style>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32"
        role="main"
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary)/.1,transparent_60%)]"
          aria-hidden="true"
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[80vh] max-w-7xl mx-auto">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left space-y-6 md:space-y-8 order-2 lg:order-1"
            >
              <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-white bg-gradient-to-r from-white via-cyan-100 to-green-100 bg-clip-text text-transparent">
                  De exploradores a creadores:
                </span>
                <br />
                <span className="text-white bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  el futuro STEAM empieza hoy
                </span>
              </h1>
              <p className="mx-auto lg:mx-0 max-w-[55ch] text-balance text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Somos el primer club STEAM de Argentina para chicos de 6 a 17 años, que combina Matemática,
                programación, IA y habilidades sociales en un proceso guiado, medible y divertido. Sin fórmulas vacías:
                proyectos, desafíos y trabajo en equipo.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-2xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
                >
                  <Link href="/diagnostico" aria-label="Agendar Diagnóstico STEAM">
                    Agendar Diagnóstico STEAM
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - 3D Robot Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center order-1 lg:order-2"
            >
              <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] relative">
                <div
                  role="img"
                  aria-label="Robot 3D interactivo representando la tecnología y el aprendizaje STEAM"
                  className="w-full h-full"
                >
                  <RobotScene />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Pilares Section */}
      <PilaresSection />

      {/* ¿Para quién es? section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 sm:py-20 lg:py-24 relative z-10"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
              Un Plan de Vuelo para Cada Genio
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              No creemos en moldes. Creamos rutas personalizadas para potenciar la curiosidad, la lógica y la
              creatividad única de tu hijo/a.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="altas-capacidades" className="w-full">
              <div className="grid lg:grid-cols-[300px_1fr] xl:grid-cols-[350px_1fr] gap-6 lg:gap-8 items-stretch">
                {/* Left Column - Vertical TabsList */}
                <TabsList className="flex flex-col h-full bg-card/60 backdrop-blur-sm border border-border/50 p-2 lg:sticky lg:top-8">
                  <TabsTrigger
                    value="altas-capacidades"
                    className="w-full justify-start text-left p-3 sm:p-4 min-h-[70px] sm:min-h-[80px] data-[state=active]:bg-cyan-500/20 data-[state=active]:text-white data-[state=active]:border-l-4 data-[state=active]:border-cyan-400 hover:bg-muted/50 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-cyan-400 sm:w-4 sm:h-4"
                        >
                          <path
                            d="M12 2L2 7l10 5 10-5-10-5z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2 17l10 5 10-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2 12l10 5 10-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-xs sm:text-sm">Altas Capacidades</div>
                        <div className="text-xs text-muted-foreground">Desafíos avanzados</div>
                      </div>
                    </div>
                  </TabsTrigger>

                  <TabsTrigger
                    value="amantes-matematica"
                    className="w-full justify-start text-left p-3 sm:p-4 min-h-[70px] sm:min-h-[80px] data-[state=active]:bg-blue-500/20 data-[state=active]:text-white data-[state=active]:border-l-4 data-[state=active]:border-blue-400 hover:bg-muted/50 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-blue-400 sm:w-4 sm:h-4"
                        >
                          <path
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-xs sm:text-sm">Amantes de la Matemática</div>
                        <div className="text-xs text-muted-foreground">Exploración profunda</div>
                      </div>
                    </div>
                  </TabsTrigger>

                  <TabsTrigger
                    value="amantes-programacion"
                    className="w-full justify-start text-left p-3 sm:p-4 min-h-[70px] sm:min-h-[80px] data-[state=active]:bg-green-500/20 data-[state=active]:text-white data-[state=active]:border-l-4 data-[state=active]:border-green-400 hover:bg-muted/50 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-green-400 sm:w-4 sm:h-4"
                        >
                          <polyline
                            points="16,18 22,12 16,6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <polyline
                            points="8,6 2,12 8,18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-xs sm:text-sm">Amantes de la Programación</div>
                        <div className="text-xs text-muted-foreground">Creación digital</div>
                      </div>
                    </div>
                  </TabsTrigger>

                  <TabsTrigger
                    value="apoyo-escolar"
                    className="w-full justify-start text-left p-3 sm:p-4 min-h-[70px] sm:min-h-[80px] data-[state=active]:bg-orange-500/20 data-[state=active]:text-white data-[state=active]:border-l-4 data-[state=active]:border-orange-400 hover:bg-muted/50 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-orange-400 sm:w-4 sm:h-4"
                        >
                          <path
                            d="M22 12h-4l-3 9L9 3l-3 9H2"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-xs sm:text-sm">Apoyo Escolar</div>
                        <div className="text-xs text-muted-foreground">Refuerzo personalizado</div>
                      </div>
                    </div>
                  </TabsTrigger>

                  <TabsTrigger
                    value="olimpiadas"
                    className="w-full justify-start text-left p-3 sm:p-4 min-h-[70px] sm:min-h-[80px] data-[state=active]:bg-purple-500/20 data-[state=active]:text-white data-[state=active]:border-l-4 data-[state=active]:border-purple-400 hover:bg-muted/50 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-purple-400 sm:w-4 sm:h-4"
                        >
                          <circle cx="12" cy="8" r="7" stroke="currentColor" strokeWidth="2" />
                          <polyline
                            points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-xs sm:text-sm">Olimpíadas de Matemática</div>
                        <div className="text-xs text-muted-foreground">Competencia de élite</div>
                      </div>
                    </div>
                  </TabsTrigger>
                </TabsList>

                {/* Right Column - Content */}
                <div className="flex-1">
                  <TabsContent value="altas-capacidades" className="mt-0">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className="bg-card/60 backdrop-blur-sm border border-border/50 h-full">
                        <CardContent className="p-6 lg:p-8">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                                <path
                                  d="M12 2L2 7l10 5 10-5-10-5z"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M2 17l10 5 10-5"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M2 12l10 5 10-5"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-cyan-400">Altas Capacidades</h3>
                              <p className="text-muted-foreground">
                                Para mentes que necesitan desafíos extraordinarios
                              </p>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h4 className="text-lg font-semibold mb-3">🎯 El Desafío</h4>
                              <p className="text-muted-foreground">
                                Tu hijo/a resuelve problemas complejos con facilidad, pero se aburre en clases
                                tradicionales. Necesita estímulos intelectuales que estén a la altura de su potencial.
                              </p>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-3">🚀 Nuestra Propuesta</h4>
                              <p className="text-muted-foreground">
                                Proyectos avanzados de matemática aplicada, algoritmos complejos, y desafíos de
                                programación que estimulan su curiosidad. Trabajamos con problemas reales que requieren
                                pensamiento crítico y creatividad.
                              </p>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-3">✨ El Resultado</h4>
                              <p className="text-muted-foreground">
                                Un espacio donde su capacidad excepcional es valorada y potenciada. Desarrolla
                                habilidades sociales con pares de similar nivel intelectual, mientras explora conceptos
                                avanzados de STEAM de manera colaborativa y divertida.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="amantes-matematica" className="mt-0">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className="bg-card/60 backdrop-blur-sm border border-border/50 h-full">
                        <CardContent className="p-6 lg:p-8">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                                <path
                                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-blue-400">Amantes de la Matemática</h3>
                              <p className="text-muted-foreground">Para quienes ven belleza en los números</p>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h4 className="text-lg font-semibold mb-3">🎯 El Desafío</h4>
                              <p className="text-muted-foreground">
                                Tu hijo/a disfruta de la matemática pero necesita aplicaciones prácticas y emocionantes
                                que vayan más allá de los ejercicios tradicionales del colegio.
                              </p>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-3">🚀 Nuestra Propuesta</h4>
                              <p className="text-muted-foreground">
                                Exploramos matemática aplicada a través de proyectos reales: desde modelado de fenómenos
                                naturales hasta criptografía y análisis de datos. Conectamos conceptos abstractos con
                                aplicaciones tangibles y emocionantes.
                              </p>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-3">✨ El Resultado</h4>
                              <p className="text-muted-foreground">
                                Desarrolla una comprensión profunda de conceptos matemáticos mientras crea proyectos
                                significativos. Aprende a comunicar ideas complejas y descubre cómo la matemática
                                impulsa la innovación en el mundo real.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="amantes-programacion" className="mt-0">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className="bg-card/60 backdrop-blur-sm border border-border/50 h-full">
                        <CardContent className="p-6 lg:p-8">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green-400">
                                <polyline
                                  points="16,18 22,12 16,6"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <polyline
                                  points="8,6 2,12 8,18"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-green-400">Amantes de la Programación</h3>
                              <p className="text-muted-foreground">Para futuros creadores digitales</p>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h4 className="text-lg font-semibold mb-3">🎯 El Desafío</h4>
                              <p className="text-muted-foreground">
                                Tu hijo/a muestra interés en la tecnología y programación, pero necesita proyectos
                                desafiantes que combinen código con matemática y creatividad.
                              </p>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-3">🚀 Nuestra Propuesta</h4>
                              <p className="text-muted-foreground">
                                Desarrollamos videojuegos, aplicaciones web, y proyectos de inteligencia artificial.
                                Combinamos programación con matemática avanzada, algoritmos, y diseño de experiencias de
                                usuario.
                              </p>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-3">✨ El Resultado</h4>
                              <p className="text-muted-foreground">
                                Domina múltiples lenguajes de programación mientras crea proyectos impactantes.
                                Desarrolla pensamiento computacional, habilidades de resolución de problemas, y la
                                confianza para innovar en el mundo digital.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="apoyo-escolar" className="mt-0">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className="bg-card/60 backdrop-blur-sm border border-border/50 h-full">
                        <CardContent className="p-6 lg:p-8">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-orange-400">
                                <path
                                  d="M22 12h-4l-3 9L9 3l-3 9H2"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-orange-400">Apoyo Escolar</h3>
                              <p className="text-muted-foreground">Refuerzo personalizado y motivador</p>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h4 className="text-lg font-semibold mb-3">🎯 El Desafío</h4>
                              <p className="text-muted-foreground">
                                Tu hijo/a necesita refuerzo en matemática pero los métodos tradicionales no logran
                                motivarlo/a. Busca una aproximación diferente que genere confianza y comprensión real.
                              </p>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-3">🚀 Nuestra Propuesta</h4>
                              <p className="text-muted-foreground">
                                Utilizamos proyectos prácticos y gamificación para enseñar conceptos matemáticos. Cada
                                estudiante avanza a su ritmo, construyendo bases sólidas mientras desarrolla amor por el
                                aprendizaje.
                              </p>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-3">✨ El Resultado</h4>
                              <p className="text-muted-foreground">
                                Mejora significativa en el rendimiento escolar, pero más importante: desarrolla
                                confianza en sus habilidades matemáticas y estrategias de resolución de problemas que
                                aplicará en todas las áreas de su vida.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="olimpiadas" className="mt-0">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className="bg-card/60 backdrop-blur-sm border border-border/50 h-full">
                        <CardContent className="p-6 lg:p-8">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-purple-400">
                                <circle cx="12" cy="8" r="7" stroke="currentColor" strokeWidth="2" />
                                <polyline
                                  points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-purple-400">Olimpíadas de Matemática</h3>
                              <p className="text-muted-foreground">Entrenamiento de élite para competencias</p>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h4 className="text-lg font-semibold mb-3">🎯 El Desafío</h4>
                              <p className="text-muted-foreground">
                                Tu hijo/a tiene talento excepcional en matemática y aspira a competir en olimpíadas
                                nacionales e internacionales. Necesita entrenamiento especializado y estratégico.
                              </p>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-3">🚀 Nuestra Propuesta</h4>
                              <p className="text-muted-foreground">
                                Entrenamiento intensivo con problemas de olimpíadas, técnicas avanzadas de resolución, y
                                estrategias de competencia. Trabajamos con mentores especializados en matemática
                                olímpica y competencias internacionales.
                              </p>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-3">✨ El Resultado</h4>
                              <p className="text-muted-foreground">
                                Preparación completa para competencias de alto nivel, desarrollo de técnicas avanzadas
                                de resolución de problemas, y la mentalidad competitiva necesaria para destacar en
                                olimpíadas nacionales e internacionales.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </motion.section>

      {/* Social Proof Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 sm:py-20 lg:py-24 relative z-10"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
              Resultados Reales, Confianza Total
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              Descubre por qué las familias que buscan la excelencia eligen Mateatletas.
            </p>
          </motion.div>

          {/* Part 1: Key Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 lg:mb-20"
          >
            <Card className="bg-card/60 backdrop-blur-sm border border-border/50 hover:border-cyan-500/30 transition-all duration-300">
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-cyan-400 mb-2 sm:mb-4">
                  9.03 / 10
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                  Calificación promedio de satisfacción de nuestras familias.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm border border-border/50 hover:border-cyan-500/30 transition-all duration-300">
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-cyan-400 mb-2 sm:mb-4">
                  +566%
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                  Crecimiento de matrícula en un solo mes, validando la alta demanda de nuestro método.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm border border-border/50 hover:border-cyan-500/30 transition-all duration-300">
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-cyan-400 mb-2 sm:mb-4">
                  82.7%
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                  De las familias nos califican con 8, 9 o 10, convirtiéndose en nuestros mayores defensores.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm border border-border/50 hover:border-cyan-500/30 transition-all duration-300">
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-cyan-400 mb-2 sm:mb-4">
                  2 de cada 3
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                  Familias destaca que Mateatletas es un espacio clave para que sus hijos hagan amigos y desarrollen
                  habilidades sociales.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Part 2: Testimonials Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16 lg:mb-20"
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <Card className="bg-card/60 backdrop-blur-sm border border-border/50 hover:border-green-500/30 transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4">
                      La Transformación se Nota en Casa
                    </h4>
                    <blockquote className="text-muted-foreground mb-3 sm:mb-4 italic text-xs sm:text-sm lg:text-base">
                      "El cambio se nota en casa. Ahora resuelve problemas de matemática con estrategias que antes no
                      conocía, y lo más importante: disfruta haciéndolo."
                    </blockquote>
                    <footer className="text-xs text-muted-foreground">- Familia de un Mateatleta de 8 años</footer>
                  </CardContent>
                </Card>

                <Card className="bg-card/60 backdrop-blur-sm border border-border/50 hover:border-green-500/30 transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4">Más que Matemática</h4>
                    <blockquote className="text-muted-foreground mb-3 sm:mb-4 italic text-xs sm:text-sm lg:text-base">
                      "No solo mejoró en matemática, también aprendió a trabajar en equipo y a explicar sus ideas. Son
                      habilidades que va a usar toda la vida."
                    </blockquote>
                    <footer className="text-xs text-muted-foreground">- Familia de un Mateatleta de 11 años</footer>
                  </CardContent>
                </Card>

                <Card className="bg-card/60 backdrop-blur-sm border border-border/50 hover:border-green-500/30 transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4">Confianza y Autonomía</h4>
                    <blockquote className="text-muted-foreground mb-3 sm:mb-4 italic text-xs sm:text-sm lg:text-base">
                      "Mi hija llegaba frustrada de matemática en el colegio. Ahora tiene confianza, entiende los
                      conceptos y hasta ayuda a sus compañeros."
                    </blockquote>
                    <footer className="text-xs text-muted-foreground">- Familia de un Mateatleta de 9 años</footer>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Missions Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 sm:py-20 lg:py-24 relative z-10"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
              Elige la Misión que Definirá su Futuro
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              Dos caminos épicos hacia la excelencia. ¿Cuál despertará la pasión de tu hijo/a?
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Math Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 h-full group">
                <CardContent className="p-6 lg:p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                        <path
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-blue-400">Misión Matemática</h3>
                      <p className="text-muted-foreground">El Arte de Resolver lo Imposible</p>
                    </div>
                  </div>

                  <div className="space-y-4 flex-grow">
                    <p className="text-muted-foreground">
                      Transforma a tu hijo/a en un maestro de la lógica y el razonamiento. Desde olimpíadas matemáticas
                      hasta aplicaciones en el mundo real.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <span className="text-sm">Olimpíadas de Matemática</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <span className="text-sm">Matemática Aplicada</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <span className="text-sm">Resolución de Problemas Complejos</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <span className="text-sm">Pensamiento Lógico Avanzado</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border border-blue-500/30 hover:border-blue-400/50"
                    >
                      <Link href="/rutas/matematica">Explorar Misión Matemática</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Programming Mission */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 hover:border-green-400/40 transition-all duration-300 h-full group">
                <CardContent className="p-6 lg:p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-green-400">
                        <polyline
                          points="16,18 22,12 16,6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <polyline
                          points="8,6 2,12 8,18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-green-400">Misión Programación</h3>
                      <p className="text-muted-foreground">Creadores del Futuro Digital</p>
                    </div>
                  </div>

                  <div className="space-y-4 flex-grow">
                    <p className="text-muted-foreground">
                      Convierte a tu hijo/a en un arquitecto digital. Desde videojuegos hasta inteligencia artificial,
                      construye el futuro con código.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <span className="text-sm">Desarrollo de Videojuegos</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <span className="text-sm">Inteligencia Artificial</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <span className="text-sm">Aplicaciones Web y Móviles</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <span className="text-sm">Pensamiento Computacional</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/30 hover:border-green-400/50"
                    >
                      <Link href="/rutas/programacion">Explorar Misión Programación</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Podcast Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 sm:py-20 lg:py-24 relative z-10"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden">
              <CardContent className="p-6 lg:p-8">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-purple-400">
                          <path
                            d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19 10v2a7 7 0 0 1-14 0v-2"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <line
                            x1="12"
                            y1="19"
                            x2="12"
                            y2="23"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <line
                            x1="8"
                            y1="23"
                            x2="16"
                            y2="23"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-purple-400">Código Crianza</h3>
                        <p className="text-muted-foreground">Nuestro Podcast para Padres</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      Descubre estrategias, consejos y reflexiones sobre cómo acompañar a tu hijo/a en su desarrollo
                      STEAM. Episodios semanales con expertos en educación y padres que comparten sus experiencias.
                    </p>

                    <Button
                      asChild
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold"
                    >
                      <Link
                        href="https://open.spotify.com/show/codigo-crianza"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                        </svg>
                        Escuchar en Spotify
                      </Link>
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="flex items-center justify-center space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-purple-400 rounded-full animate-pulse"
                          style={{
                            height: `${Math.random() * 40 + 20}px`,
                            animationDelay: `${i * 0.1}s`,
                            animationDuration: "1s",
                          }}
                        ></div>
                      ))}
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-4">Visualizador de audio en vivo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* AI Support Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 sm:py-20 lg:py-24 relative z-10"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                      <path
                        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 8H7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17 12H7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-cyan-400 mb-4">Ayuda Instantánea con IA</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  ¿Tu hijo/a tiene dudas fuera del horario de clases? Nuestro asistente de IA especializado en STEAM
                  está disponible 24/7 para resolver problemas, explicar conceptos y guiar el aprendizaje.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mx-auto mb-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <polyline
                          points="12,6 12,12 16,14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold">24/7 Disponible</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mx-auto mb-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                        <path
                          d="M9 11H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h4l3 3h1a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-1l-3 3z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 9v6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold">Explicaciones Claras</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mx-auto mb-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                        <path
                          d="M22 12h-4l-3 9L9 3l-3 9H2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold">Aprendizaje Adaptativo</p>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold"
                >
                  <Link href="/chat-ia">Probar Asistente IA</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 sm:py-20 lg:py-24 relative z-10"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
              Inversión en el Futuro de tu Hijo/a
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              Planes diseñados para cada etapa del desarrollo STEAM. Transparencia total, resultados garantizados.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Inicial Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/60 backdrop-blur-sm border border-border/50 hover:border-green-500/30 transition-all duration-300 h-full">
                <CardContent className="p-6 lg:p-8 h-full flex flex-col">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-green-400 mb-2">Inicial</h3>
                    <p className="text-muted-foreground mb-4">Perfecto para comenzar la aventura STEAM</p>
                    <div className="text-4xl font-bold mb-2">$89.000</div>
                    <p className="text-sm text-muted-foreground">por mes</p>
                  </div>

                  <div className="space-y-3 flex-grow">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-sm">2 clases semanales (8 horas/mes)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-sm">Acceso a plataforma digital</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-sm">Proyectos individuales</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-sm">Seguimiento de progreso</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-sm">Soporte por chat</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/30"
                    >
                      <Link href="/diagnostico">Comenzar Ahora</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 h-full relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </div>
                </div>
                <CardContent className="p-6 lg:p-8 h-full flex flex-col">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">Premium</h3>
                    <p className="text-muted-foreground mb-4">La experiencia completa de Mateatletas</p>
                    <div className="text-4xl font-bold mb-2">$149.000</div>
                    <p className="text-sm text-muted-foreground">por mes</p>
                  </div>

                  <div className="space-y-3 flex-grow">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      <span className="text-sm">3 clases semanales (12 horas/mes)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      <span className="text-sm">Acceso completo a plataforma</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      <span className="text-sm">Proyectos colaborativos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      <span className="text-sm">Mentoría personalizada</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      <span className="text-sm">Asistente IA 24/7</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      <span className="text-sm">Reportes detallados para padres</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                    >
                      <Link href="/diagnostico">Elegir Premium</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Elite Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 h-full">
                <CardContent className="p-6 lg:p-8 h-full flex flex-col">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">Elite</h3>
                    <p className="text-muted-foreground mb-4">Para futuros líderes en STEAM</p>
                    <div className="text-4xl font-bold mb-2">$229.000</div>
                    <p className="text-sm text-muted-foreground">por mes</p>
                  </div>

                  <div className="space-y-3 flex-grow">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      <span className="text-sm">Clases ilimitadas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      <span className="text-sm">Mentor personal dedicado</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      <span className="text-sm">Proyectos de investigación</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      <span className="text-sm">Preparación para olimpíadas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      <span className="text-sm">Acceso a eventos exclusivos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      <span className="text-sm">Certificaciones internacionales</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      <span className="text-sm">Soporte prioritario</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                    >
                      <Link href="/diagnostico">Acceder a Elite</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Guarantee Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-16 text-center"
          >
            <Card className="bg-card/60 backdrop-blur-sm border border-border/50 max-w-2xl mx-auto">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green-400">
                      <path
                        d="M9 12l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.12 0 4.07.74 5.61 1.98"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-2">Garantía de Satisfacción 30 Días</h3>
                <p className="text-muted-foreground">
                  Si no ves mejoras significativas en el primer mes, te devolvemos el 100% de tu inversión. Sin
                  preguntas, sin complicaciones.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Scroll To Top Button */}
      <ScrollToTop />

      {/* Site Footer */}
      <SiteFooter />
    </div>
  )
}
