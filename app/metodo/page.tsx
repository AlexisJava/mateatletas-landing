"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteFooter } from "@/components/layout/main-footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { motion } from "framer-motion"

export default function MetodoPage() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E5E7EB] relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/30 to-pink-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-green-500/30 to-emerald-500/20 rounded-full blur-3xl animate-drift" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-cyan-500/30 to-teal-500/20 rounded-full blur-3xl animate-sway" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-blue-500/30 to-indigo-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/3 w-88 h-88 bg-gradient-to-br from-emerald-500/30 to-green-600/20 rounded-full blur-3xl animate-drift" />
      </div>

      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-4">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              La Educación Tradicional Prepara para un Mundo que ya no Existe. Nosotros{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent relative">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent blur-sm animate-pulse opacity-75"></span>
                <span className="relative">Entrenamos</span>
              </span>{" "}
              para el que Viene.
            </h1>
          </motion.div>
        </section>

        <section className="py-20 px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-balance mb-8">El Problema que Nadie te Cuenta...</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              El verdadero riesgo no es que tu hijo no sepa la respuesta a un examen. Es que no sepa cómo hacer
              preguntas cuando no hay un examen. En un mundo que cambia a velocidad exponencial, la habilidad más
              importante no es el conocimiento, es la capacidad de aprender, desaprender y crear.
            </p>
          </motion.div>
        </section>

        <section className="min-h-screen flex items-center px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid md:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-200px" }}
            >
              {/* Left Column - Enhanced 3D Shape */}
              <div className="flex items-center justify-center">
                <div className="w-96 h-96 relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-cyan-500/30 rounded-3xl blur-2xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-8 bg-gradient-to-tr from-cyan-400/50 to-blue-600/40 rounded-2xl backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center shadow-2xl shadow-cyan-500/25"
                    whileHover={{ scale: 1.05, rotateY: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-8xl font-bold text-cyan-400 animate-pulse">∞</div>
                  </motion.div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-ping opacity-75" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce" />
                </div>
              </div>

              {/* Right Column - Complete Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                  Primero, les enseñamos a <span className="text-cyan-400 drop-shadow-lg">VER</span>.
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Las matemáticas no son fórmulas en un pizarrón; son el lenguaje oculto del universo. En nuestro
                  'Laboratorio de Ideas', transformamos conceptos abstractos en experiencias interactivas. Aquí los
                  niños no memorizan, sino que 'ven' y 'tocan' los números. Nuestra filosofía es materializar para
                  manipular, convirtiendo la frustración en fascinación y descubriendo la belleza que se esconde en los
                  patrones.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="min-h-screen flex items-center px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid md:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-200px" }}
            >
              {/* Left Column - Complete Content */}
              <motion.div
                className="space-y-8 md:order-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                  Luego, les enseñamos a <span className="text-green-400 drop-shadow-lg">CONSTRUIR</span>.
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Pasamos de la pregunta '¿Sabes la respuesta?' a la pregunta '¿Qué puedes construir con lo que sabes?'.
                  En nuestro 'Taller del Creador', los niños dejan de ser consumidores de tecnología para convertirse en
                  creadores. Usan la programación para dar vida a sus propias ideas, ya sea creando sus primeros
                  videojuegos o diseñando mini aplicaciones con algoritmos de IA. Aprenden que el código es el
                  superpoder para construir el futuro.
                </p>
              </motion.div>

              {/* Right Column - Enhanced 3D Shape */}
              <div className="flex items-center justify-center md:order-2">
                <div className="w-96 h-96 relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-green-500/40 to-emerald-500/30 rounded-3xl blur-2xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute inset-8 bg-gradient-to-tr from-emerald-400/50 to-green-600/40 rounded-2xl backdrop-blur-sm border border-green-400/30 flex items-center justify-center shadow-2xl shadow-green-500/25"
                    whileHover={{ scale: 1.05, rotateX: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-6xl font-mono text-green-400 animate-pulse">{"</>"}</div>
                  </motion.div>
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-400 rounded-full animate-ping opacity-75" />
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-emerald-400 rounded-full animate-bounce" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="min-h-screen flex items-center px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid md:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-200px" }}
            >
              {/* Left Column - Enhanced Composite 3D Shape */}
              <div className="flex items-center justify-center">
                <div className="w-96 h-96 relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-pink-500/30 rounded-3xl blur-2xl"
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-8 bg-gradient-to-tr from-purple-400/50 to-pink-600/40 rounded-2xl backdrop-blur-sm border border-purple-400/30 flex items-center justify-center shadow-2xl shadow-purple-500/25"
                    whileHover={{ scale: 1.05, rotateZ: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-7xl font-bold text-purple-400">🤝</div>
                  </motion.div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xl animate-spin-slow">
                    🧠
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-400 rounded-full animate-ping opacity-75" />
                </div>
              </div>

              {/* Right Column - Complete Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                  Finalmente, les enseñamos a <span className="text-purple-400 drop-shadow-lg">DOMINAR</span>.
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  El dominio técnico sin inteligencia emocional está incompleto. Guiados por un mentor humano potenciado
                  por IA, los atletas aprenden dentro de su 'Casa', una microcomunidad que genera un profundo sentido de
                  pertenencia. Aquí dominan la habilidad más difícil: la colaboración, la empatía y el liderazgo. Forman
                  no solo mentes brillantes, sino personas extraordinarias.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* New Four Pillars section with animated DNA helix */}
        <section className="py-32 px-4 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-balance">
                Un Entrenamiento Cruzado: Los 4 Pilares de un Mateatleta
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left Column - The DNA Helix Animation */}
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="w-96 h-96 relative">
                  <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                    {/* DNA Helix Strands */}
                    <motion.path
                      d="M100 50 Q200 100 300 50 Q200 150 100 200 Q200 250 300 200 Q200 300 100 350"
                      stroke="url(#mathGradient)"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.path
                      d="M300 50 Q200 100 100 50 Q200 150 300 200 Q200 250 100 200 Q200 300 300 350"
                      stroke="url(#programmingGradient)"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                    />

                    {/* Neural Network Nodes for AI */}
                    <motion.circle
                      cx="200"
                      cy="100"
                      r="8"
                      fill="url(#aiGradient)"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 1, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                    />
                    <motion.circle
                      cx="200"
                      cy="200"
                      r="10"
                      fill="url(#aiGradient)"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.3, 1] }}
                      transition={{ duration: 1, delay: 1.2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                    />
                    <motion.circle
                      cx="200"
                      cy="300"
                      r="8"
                      fill="url(#aiGradient)"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 1, delay: 1.4, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                    />

                    {/* Social Skills Wave */}
                    <motion.path
                      d="M50 200 Q100 180 150 200 Q200 220 250 200 Q300 180 350 200"
                      stroke="url(#socialGradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0.8"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
                    />

                    {/* Gradients */}
                    <defs>
                      <linearGradient id="mathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#34d399" />
                      </linearGradient>
                      <linearGradient id="programmingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#60a5fa" />
                      </linearGradient>
                      <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#67e8f9" />
                      </linearGradient>
                      <linearGradient id="socialGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Rotating container for the entire helix */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column - The Explanation */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  En MateAtletas, ninguna habilidad vive de forma aislada. Creemos en un entrenamiento cruzado donde
                  cada disciplina potencia a las demás. Independientemente de la 'Misión' principal, tu hijo/a
                  desarrollará fluidez en los cuatro pilares del pensamiento del futuro.
                </p>

                <div className="space-y-6">
                  <motion.div
                    className="p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl border border-green-400/20 backdrop-blur-sm"
                    whileHover={{ scale: 1.02, borderColor: "rgba(34, 197, 94, 0.4)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-xl font-bold text-green-400 mb-3">
                      Matemática y Programación (El Núcleo Lógico)
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Nuestras dos misiones principales funcionan como un sistema de 'mayor' y 'menor'. Si su foco es la
                      Matemática, usará la Programación como herramienta para visualizar soluciones. Si su pasión es la
                      Programación, aplicará conceptos matemáticos para construir algoritmos más eficientes.
                    </p>
                  </motion.div>

                  <motion.div
                    className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-400/20 backdrop-blur-sm"
                    whileHover={{ scale: 1.02, borderColor: "rgba(6, 182, 212, 0.4)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-xl font-bold text-cyan-400 mb-3">
                      Inteligencia Artificial (La Herramienta del Futuro)
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      La IA está integrada en todo nuestro ecosistema, desde el Tutor 'Vector' que personaliza el
                      aprendizaje, hasta los proyectos donde los atletas aprenden a usarla como una herramienta para
                      crear y analizar.
                    </p>
                  </motion.div>

                  <motion.div
                    className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20 backdrop-blur-sm"
                    whileHover={{ scale: 1.02, borderColor: "rgba(168, 85, 247, 0.4)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-xl font-bold text-purple-400 mb-3">
                      Habilidades Sociales (El Cimiento del Éxito)
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      La colaboración, la empatía y la resiliencia son la base de cada misión. A través del trabajo en
                      equipo en las 'Casas' y la guía de nuestros 'Entrenadores', las habilidades sociales se practican
                      y fortalecen en cada desafío técnico.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Card 1 - Enhanced */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 h-full hover:bg-white/15 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/10">
                  <CardHeader className="text-center pb-6">
                    <motion.div
                      className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </motion.div>
                    <CardTitle className="text-xl font-bold">Dos Temporadas de Entrenamiento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">
                      El entrenamiento en el Club se organiza en dos grandes temporadas anuales: Marzo-Junio y
                      Agosto-Diciembre. Cada temporada es un ciclo completo de aprendizaje que culmina con la
                      presentación de proyectos y la celebración de los logros alcanzados.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Card 2 - Enhanced */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 h-full hover:bg-white/15 transition-all duration-300 shadow-2xl hover:shadow-green-500/10">
                  <CardHeader className="text-center pb-6">
                    <motion.div
                      className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                    </motion.div>
                    <CardTitle className="text-xl font-bold">Nuevas Misiones Cada Mes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">
                      Dentro de cada temporada, la aventura nunca se detiene. Como parte de la suscripción al Club, cada
                      mes lanzamos una nueva misión narrativa que desafía a los atletas con nuevos problemas,
                      manteniendo la motivación siempre al máximo.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Card 3 - Enhanced */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 h-full hover:bg-white/15 transition-all duration-300 shadow-2xl hover:shadow-purple-500/10">
                  <CardHeader className="text-center pb-6">
                    <motion.div
                      className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                        />
                      </svg>
                    </motion.div>
                    <CardTitle className="text-xl font-bold">Entrenamiento Híbrido y Personalizado</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">
                      Combinamos la flexibilidad de nuestra plataforma online con el poder de los talleres grupales en
                      vivo. Aquí colaboran con su 'Casa' y reciben la guía personalizada de su Entrenador, asegurando un
                      acompañamiento cercano en cada paso del viaje.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-32 px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              ¿En qué lado de la historia quieres que esté tu hijo?
            </h2>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-700 hover:via-cyan-400 hover:to-blue-700 text-white font-bold px-16 py-8 text-xl rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-500 border border-cyan-400/20 relative overflow-hidden group"
              >
                <a href="/diagnostico" className="relative z-10">
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></span>
                  <span className="relative">Reservá tu lugar ahora</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </div>

      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
