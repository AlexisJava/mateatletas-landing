"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"

const ArrowRight = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const ArrowLeft = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const Sparkles = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3l1.5 1.5L5 6l1.5 1.5L5 9l1.5 1.5L5 12l1.5 1.5L5 15l1.5 1.5L5 18l1.5 1.5L5 21M19 3l-1.5 1.5L19 6l-1.5 1.5L19 9l-1.5 1.5L19 12l-1.5 1.5L19 15l-1.5 1.5L19 18l-1.5 1.5L19 21"
    />
  </svg>
)

const Target = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const Brain = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 007.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
)

const Heart = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
)

const Trophy = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const Clock = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
)

const CheckCircle = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const CreditCard = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
)

const Home = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
)

const Star = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const Users = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const Zap = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
  </svg>
)

interface DiagnosticData {
  childName: string
  parentName: string
  age: string
  currentChallenges: string[]
  childInterests: string[]
  parentGoals: string[]
  urgencyLevel: string
  previousExperience: string
  timeCommitment: string
  selectedSchedule: string
  specificConcerns: string
  parentDream: string
}

export function DiagnosticoInteractivo() {
  const [step, setStep] = useState(1)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [paymentCompleted, setPaymentCompleted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(1800) // 30 minutes countdown
  const [data, setData] = useState<DiagnosticData>({
    childName: "",
    parentName: "",
    age: "",
    currentChallenges: [],
    childInterests: [],
    parentGoals: [],
    urgencyLevel: "",
    previousExperience: "",
    timeCommitment: "",
    selectedSchedule: "",
    specificConcerns: "",
    parentDream: "",
  })

  const [loadingText, setLoadingText] = useState("Generando su plan personalizado...")

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (step === 5) {
      const loadingTexts = [
        "Analizando el perfil de " + (data.childName || "tu hijo/a") + "...",
        "💡 ¿Sabías que las matemáticas están en todas partes? Desde la música hasta el arte...",
        "Identificando fortalezas únicas...",
        "🧮 Los números son el lenguaje universal que conecta culturas y civilizaciones...",
        "Diseñando plan personalizado...",
        "🚀 La programación es como resolver puzzles: cada línea de código es una pieza...",
        "Seleccionando mentores ideales...",
        "🌟 Einstein decía: 'La imaginación es más importante que el conocimiento'...",
        "Calibrando metodología STEAM...",
        "🎯 En matemáticas, no hay caminos reales. Solo hay que explorar y descubrir...",
        "¡Casi listo! Preparando recomendaciones...",
        "✨ Cada problema matemático resuelto es una pequeña victoria del pensamiento...",
      ]

      let currentIndex = 0
      const interval = setInterval(() => {
        setLoadingText(loadingTexts[currentIndex])
        currentIndex = (currentIndex + 1) % loadingTexts.length
      }, 1200) // Faster text changes for better engagement

      const timeout = setTimeout(() => {
        clearInterval(interval)
        setStep(6)
      }, 3000) // Reduced to 3 seconds total loading time

      return () => {
        clearInterval(interval)
        clearTimeout(timeout)
      }
    }
  }, [step, data.childName])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const ageOptions = [
    { value: "6-8", label: "6-8 años", description: "Exploradores curiosos" },
    { value: "9-11", label: "9-11 años", description: "Constructores creativos" },
    { value: "12-14", label: "12-14 años", description: "Innovadores emergentes" },
    { value: "15-17", label: "15-17 años", description: "Futuros líderes STEAM" },
  ]

  const challengeOptions = [
    "Se aburre en matemáticas porque es demasiado fácil",
    "Tiene miedo de equivocarse y no participa en clase",
    "Le encanta la tecnología pero no sabe por dónde empezar",
    "Es muy creativo pero necesita estructura para sus ideas",
    "Quiere crear videojuegos pero no conoce la programación",
    "Destaca en ciencias pero necesita más desafíos",
    "Le cuesta concentrarse en tareas largas",
    "Necesita más confianza para presentar sus proyectos",
  ]

  const interestOptions = [
    { icon: "🧮", label: "Resolver problemas matemáticos complejos", category: "math" },
    { icon: "🎮", label: "Crear videojuegos y aplicaciones", category: "tech" },
    { icon: "🔬", label: "Experimentos científicos", category: "science" },
    { icon: "🤖", label: "Robótica y automatización", category: "engineering" },
    { icon: "🎨", label: "Diseño digital y arte tecnológico", category: "art" },
    { icon: "🏆", label: "Competencias y olimpíadas", category: "competition" },
    { icon: "💡", label: "Inventar soluciones a problemas reales", category: "innovation" },
    { icon: "🌟", label: "Liderar proyectos en equipo", category: "leadership" },
  ]

  const parentGoalOptions = [
    "Que desarrolle una mentalidad de crecimiento inquebrantable",
    "Que transforme su pasión en una ventaja competitiva para su futuro",
    "Que construya la confianza para enfrentar cualquier desafío",
    "Que encuentre su tribu de mentes brillantes que lo inspiren",
    "Que desarrolle habilidades que lo preparen para trabajos del futuro",
    "Que aprenda a convertir ideas en proyectos reales",
  ]

  const urgencyOptions = [
    {
      value: "immediate",
      label: "¡Quiero empezar YA!",
      description: "Mi hijo necesita este estímulo ahora",
      color: "bg-red-500",
    },
    {
      value: "soon",
      label: "En las próximas semanas",
      description: "Estoy evaluando opciones",
      color: "bg-orange-500",
    },
    { value: "exploring", label: "Solo estoy explorando", description: "Quiero conocer más", color: "bg-blue-500" },
  ]

  const schedules = [
    { time: "Lunes 16:00-17:30", spots: "2 lugares", popular: false },
    { time: "Miércoles 17:00-18:30", spots: "1 lugar", popular: true },
    { time: "Viernes 16:30-18:00", spots: "3 lugares", popular: false },
    { time: "Sábados 10:00-11:30", spots: "¡ÚLTIMO LUGAR!", popular: true },
  ]

  const dreamOptions = [
    "Ser ingeniero/a",
    "Convertirse en programador/a",
    "Estar en una competencia de ciencias",
    "Crear su propia empresa",
    "Viajar al espacio",
    "Ser músico/a profesional",
  ]

  const canProceedStep1 = data.childName.trim() !== "" && data.parentName.trim() !== "" && data.age !== ""
  const canProceedStep2 = data.currentChallenges.length > 0
  const canProceedStep3 = data.childInterests.length > 0
  const canProceedStep4 = data.parentGoals.length > 0
  const canProceedStep5 = data.urgencyLevel !== ""
  const canProceedStep6 = data.parentDream !== ""

  const handleNext = () => {
    if (step < 8) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const toggleChallenge = (challenge: string) => {
    setData((prev) => ({
      ...prev,
      currentChallenges: prev.currentChallenges.includes(challenge)
        ? prev.currentChallenges.filter((c) => c !== challenge)
        : [...prev.currentChallenges, challenge],
    }))
  }

  const toggleInterest = (interest: string) => {
    setData((prev) => ({
      ...prev,
      childInterests: prev.childInterests.includes(interest)
        ? prev.childInterests.filter((i) => i !== interest)
        : [...prev.childInterests, interest],
    }))
  }

  const toggleGoal = (goal: string) => {
    setData((prev) => ({
      ...prev,
      parentGoals: prev.parentGoals.includes(goal)
        ? prev.parentGoals.filter((g) => g !== goal)
        : [...prev.parentGoals, goal],
    }))
  }

  const handleScheduleSelect = (schedule: string) => {
    setData({ ...data, selectedSchedule: schedule })
  }

  const handlePayment = () => {
    setTimeout(() => {
      setPaymentCompleted(true)
      setShowPaymentModal(false)
    }, 2000)
  }

  const handleReservePlace = () => {
    if (data.selectedSchedule) {
      setShowPaymentModal(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center px-4 py-8 pt-20 relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large flowing blobs with smoother animations */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 50, -20, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 5,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-cyan-400/15 to-green-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, 80, -50, 0],
            y: [0, -30, 60, 0],
            scale: [1, 1.3, 0.7, 1],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 10,
          }}
        />

        {/* Floating particles with organic movement */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1.5 h-1.5 bg-green-400/20 rounded-full blur-sm" // Made particles smaller, more transparent, and added blur for softness
            animate={{
              x: [0, Math.random() * 150 - 75, Math.random() * 100 - 50, 0], // Reduced movement range for gentler motion
              y: [0, Math.random() * 150 - 75, Math.random() * 100 - 50, 0],
              opacity: [0.1, 0.4, 0.2, 0.1], // Reduced opacity range for softer appearance
              scale: [1, 1.2, 0.9, 1], // Reduced scale variation for subtler effect
            }}
            transition={{
              duration: 20 + Math.random() * 15, // Increased duration for slower, more gentle movement
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 8, // Increased delay variation for more organic feel
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="fixed top-4 right-4 z-50 bg-red-500/90 backdrop-blur-sm rounded-lg px-3 py-2 text-white font-bold text-sm md:text-base">
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 md:w-5 md:h-5" />
          <span className="hidden sm:inline">Oferta especial termina en:</span>
          <span className="sm:hidden">Oferta:</span>
          <span>{formatTime(timeLeft)}</span>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-20 pb-8 relative z-10">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 md:space-y-8"
            >
              <Card className="bg-gray-900/90 backdrop-blur-md border-2 border-green-500/30 shadow-2xl shadow-green-500/10 relative">
                <CardContent className="p-6 md:p-8 space-y-6 md:space-y-8">
                  <div className="text-center space-y-4 md:space-y-6 mb-6 md:mb-8">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent [&:not(:has(.bg-clip-text))]:text-white">
                      ¡Descubre el potencial único de tu hijo/a!
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                      En solo 3 minutos, crearemos un plan personalizado que transformará su futuro
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-4">
                      <Label
                        htmlFor="childName"
                        className="text-base md:text-lg font-semibold text-green-400 flex items-center"
                      >
                        <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                        <span className="ml-2">Nombre de tu futuro genio</span>
                      </Label>
                      <Input
                        id="childName"
                        value={data.childName}
                        onChange={(e) => setData({ ...data, childName: e.target.value })}
                        className="bg-gray-800/90 border-2 border-gray-600 focus:border-green-500 text-white text-lg md:text-xl p-4 md:p-6 rounded-xl transition-all duration-300 hover:border-green-400"
                        placeholder="Ej: Sofía, Mateo..."
                        autoComplete="off"
                      />
                    </div>

                    <div className="space-y-4">
                      <Label
                        htmlFor="parentName"
                        className="text-base md:text-lg font-semibold text-blue-400 flex items-center"
                      >
                        <Heart className="w-4 h-4 md:w-5 md:h-5" />
                        <span className="ml-2">Tu nombre (papá/mamá)</span>
                      </Label>
                      <Input
                        id="parentName"
                        value={data.parentName}
                        onChange={(e) => setData({ ...data, parentName: e.target.value })}
                        className="bg-gray-800/90 border-2 border-gray-600 focus:border-blue-500 text-white text-lg md:text-xl p-4 md:p-6 rounded-xl transition-all duration-300 hover:border-blue-400"
                        placeholder="Tu nombre aquí..."
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <Label className="text-base md:text-lg font-semibold text-purple-400 flex items-center">
                      <Target className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="ml-2">¿En qué etapa de desarrollo está?</span>
                    </Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                      {ageOptions.map((option) => (
                        <Button
                          key={option.value}
                          variant={data.age === option.value ? "default" : "outline"}
                          onClick={() => setData({ ...data, age: option.value })}
                          className={`p-4 md:p-6 text-center transition-all duration-300 rounded-xl min-h-[80px] md:min-h-[100px] flex flex-col justify-center ${
                            data.age === option.value
                              ? "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 border-purple-400 shadow-lg shadow-purple-500/30 scale-105 text-white"
                              : "bg-gray-800/90 border-2 border-gray-600 hover:border-purple-500 hover:bg-gray-700/90 hover:scale-105 text-gray-200"
                          }`}
                        >
                          <span className="text-base md:text-lg font-bold">{option.label}</span>
                          <span className="text-xs md:text-sm opacity-80 mt-1">{option.description}</span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={handleNext}
                    disabled={!canProceedStep1}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-500 disabled:from-gray-700 disabled:to-gray-700 disabled:text-gray-400 text-lg md:text-xl font-bold p-4 md:p-6 mt-6 md:mt-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Descubrir el potencial de {data.childName || "mi hijo/a"}{" "}
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="text-center space-y-4 md:space-y-6 pt-4 md:pt-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent [&:not(:has(.bg-clip-text))]:text-white">
                  {data.parentName}, ¿qué desafíos está enfrentando {data.childName}?
                </h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                  Identifica las barreras que están limitando su potencial.{" "}
                  <span className="text-orange-400 font-semibold">Cada desafío es una oportunidad de crecimiento.</span>
                </p>
              </div>

              <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 p-4 mb-6 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm md:text-base">M</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-200 italic text-sm md:text-base">
                      "Mi hija Martina tenía estos mismos desafíos. Ahora lidera proyectos de robótica y ganó su primera
                      competencia de programación."
                    </p>
                    <p className="text-blue-400 font-semibold mt-2 text-sm md:text-base">
                      - María González, mamá de Martina (12 años)
                    </p>
                  </div>
                </div>
              </Card>

              <div className="grid gap-3 md:gap-4">
                {challengeOptions.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      onClick={() => toggleChallenge(challenge)}
                      className={`w-full p-3 sm:p-4 md:p-6 text-left transition-all duration-300 rounded-xl hover:scale-105 min-h-[60px] sm:min-h-[70px] md:min-h-[80px] flex items-center cursor-pointer relative z-10 pointer-events-auto ${
                        data.currentChallenges.includes(challenge)
                          ? "bg-gradient-to-r from-red-500/20 to-orange-500/20 border-2 border-orange-500 text-white shadow-lg shadow-orange-500/20"
                          : "bg-gray-800/80 border-2 border-gray-600 hover:border-orange-500 hover:bg-gray-700/80 text-gray-200"
                      }`}
                    >
                      <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 w-full">
                        <div
                          className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            data.currentChallenges.includes(challenge)
                              ? "border-orange-400 bg-orange-400"
                              : "border-gray-400"
                          }`}
                        >
                          {data.currentChallenges.includes(challenge) && (
                            <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                          )}
                        </div>
                        <span className="text-xs sm:text-sm md:text-lg leading-tight flex-1 break-words hyphens-auto">
                          {challenge}
                        </span>
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-gray-600 hover:border-gray-400 bg-gray-800/80 hover:bg-gray-700/80 text-base md:text-lg p-3 md:p-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-2" /> Volver
                </Button>

                <Button
                  onClick={handleNext}
                  disabled={!canProceedStep2}
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-700 disabled:to-gray-700 text-base md:text-lg font-bold p-3 md:p-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Continuar <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="text-center space-y-4 md:space-y-6 pt-4 md:pt-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent [&:not(:has(.bg-clip-text))]:text-white">
                  ¡Perfecto! Ahora, ¿qué es lo que más le emociona a {data.childName}?
                </h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                  Sus intereses nos ayudarán a diseñar la experiencia perfecta.{" "}
                  <span className="text-green-400 font-semibold">¡Selecciona todo lo que le fascine!</span>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {interestOptions.map((interest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      variant="outline"
                      onClick={() => toggleInterest(interest.label)}
                      className={`w-full p-4 md:p-6 text-center transition-all duration-300 rounded-xl min-h-[100px] md:min-h-[120px] cursor-pointer relative z-10 pointer-events-auto flex flex-col justify-center ${
                        data.childInterests.includes(interest.label)
                          ? "bg-gradient-to-r from-green-500/20 to-blue-500/20 border-2 border-green-500 text-white shadow-lg shadow-green-500/20 scale-105"
                          : "bg-gray-800/80 border-2 border-gray-600 hover:border-green-500 hover:bg-gray-700/80 hover:scale-105 text-gray-200"
                      }`}
                    >
                      <span className="text-2xl md:text-3xl mb-2">{interest.icon}</span>
                      <span className="text-xs md:text-sm font-medium text-center leading-tight px-2">
                        {interest.label}
                      </span>
                    </Button>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-gray-600 hover:border-gray-400 bg-gray-800/80 hover:bg-gray-700/80 text-base md:text-lg p-3 md:p-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-2" /> Volver
                </Button>

                <Button
                  onClick={handleNext}
                  disabled={!canProceedStep3}
                  className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-gray-700 disabled:to-gray-700 text-base md:text-lg font-bold p-3 md:p-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Continuar <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="text-center space-y-4 md:space-y-6 pt-4 md:pt-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent [&:not(:has(.bg-clip-text))]:text-white">
                  {data.parentName}, ¿cuál es tu mayor sueño para {data.childName}?
                </h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                  Como padre/madre, tu visión es fundamental.{" "}
                  <span className="text-purple-400 font-semibold">¿Qué transformación esperas ver?</span>
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                {parentGoalOptions.map((goal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      variant="outline"
                      onClick={() => toggleGoal(goal)}
                      className={`w-full p-4 md:p-6 text-left transition-all duration-300 rounded-xl hover:scale-105 min-h-[60px] md:min-h-[80px] flex items-center cursor-pointer relative z-10 pointer-events-auto ${
                        data.parentGoals.includes(goal)
                          ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500 text-white shadow-lg shadow-purple-500/20"
                          : "bg-gray-800/80 border-2 border-gray-600 hover:border-purple-500 hover:bg-gray-700/80 hover:scale-105 text-gray-200"
                      }`}
                    >
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div
                          className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                            data.parentGoals.includes(goal) ? "border-purple-400 bg-purple-400" : "border-gray-400"
                          }`}
                        >
                          {data.parentGoals.includes(goal) && <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />}
                        </div>
                        <span className="text-sm md:text-lg">{goal}</span>
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-gray-600 hover:border-gray-400 bg-gray-800/80 hover:bg-gray-700/80 text-base md:text-lg p-3 md:p-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-2" /> Volver
                </Button>

                <Button
                  onClick={handleNext}
                  disabled={!canProceedStep4}
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-700 disabled:to-gray-700 text-base md:text-lg font-bold p-3 md:p-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Continuar <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="text-center space-y-4 md:space-y-6 pt-4 md:pt-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent [&:not(:has(.bg-clip-text))]:text-white">
                  Una última pregunta, {data.parentName}...
                </h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                  ¿Qué tan urgente es para ti que {data.childName} comience esta transformación?
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                {urgencyOptions.map((option, index) => (
                  <motion.div
                    key={option.value}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      variant="outline"
                      onClick={() => setData({ ...data, urgencyLevel: option.value })}
                      className={`w-full p-4 md:p-6 text-left transition-all duration-300 rounded-xl hover:scale-105 min-h-[80px] md:min-h-[100px] flex items-center cursor-pointer relative z-10 pointer-events-auto ${
                        data.urgencyLevel === option.value
                          ? `bg-gradient-to-r from-${option.color.replace("bg-", "")}/20 to-${option.color.replace("bg-", "")}/30 border-2 border-${option.color.replace("bg-", "")} text-white shadow-lg`
                          : "bg-gray-800/80 border-2 border-gray-600 hover:border-yellow-500 hover:bg-gray-700/80 text-gray-200"
                      }`}
                    >
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div
                          className={`w-6 h-6 md:w-8 md:h-8 rounded-full ${option.color} flex items-center justify-center flex-shrink-0`}
                        >
                          <Zap className="w-3 h-3 md:w-4 md:h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-base md:text-lg font-bold">{option.label}</div>
                          <div className="text-xs md:text-sm opacity-80">{option.description}</div>
                        </div>
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-gray-600 hover:border-gray-400 bg-gray-800/80 hover:bg-gray-700/80 text-base md:text-lg p-3 md:p-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-2" /> Volver
                </Button>

                <Button
                  onClick={handleNext}
                  disabled={!canProceedStep5}
                  className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 disabled:from-gray-700 disabled:to-gray-700 text-base md:text-lg font-bold p-3 md:p-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Generar Plan Personalizado <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 6 && (
            <motion.div
              key="dream"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="text-center space-y-4 md:space-y-6 pt-4 md:pt-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent [&:not(:has(.bg-clip-text))]:text-white">
                  {data.parentName}, ¿qué sueño tiene {data.childName}?
                </h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                  ¿Qué es lo que más anhela ver en su futuro?{" "}
                  <span className="text-blue-400 font-semibold">¡Selecciona su mayor sueño!</span>
                </p>
              </div>

              <div className="grid gap-3 md:gap-4">
                {dreamOptions.map((dream, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      onClick={() => setData({ ...data, parentDream: dream })}
                      className={`w-full p-3 sm:p-4 md:p-6 text-left transition-all duration-300 rounded-xl hover:scale-105 min-h-[60px] sm:min-h-[70px] md:min-h-[80px] flex items-center cursor-pointer relative z-10 pointer-events-auto ${
                        data.parentDream === dream
                          ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500 text-white shadow-lg shadow-purple-500/20"
                          : "bg-gray-800/80 border-2 border-gray-600 hover:border-purple-500 hover:bg-gray-700/80 hover:scale-105 text-gray-200"
                      }`}
                    >
                      <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 w-full">
                        <div
                          className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            data.parentDream === dream ? "border-purple-400 bg-purple-400" : "border-gray-400"
                          }`}
                        >
                          {data.parentDream === dream && (
                            <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                          )}
                        </div>
                        <span className="text-xs sm:text-sm md:text-lg leading-tight flex-1 break-words hyphens-auto">
                          {dream}
                        </span>
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-gray-600 hover:border-gray-400 bg-gray-800/80 hover:bg-gray-700/80 text-base md:text-lg p-3 md:p-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-2" /> Volver
                </Button>

                <Button
                  onClick={handleNext}
                  disabled={!canProceedStep6}
                  className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-gray-700 disabled:to-gray-700 text-base md:text-lg font-bold p-3 md:p-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Continuar <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 7 && (
            <motion.div
              key="step6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="text-center space-y-4 md:space-y-6 pt-4 md:pt-0">
                <div className="flex justify-center space-x-2 mb-4">
                  <Star className="w-5 h-5 md:w-6 md:h-6" />
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
                  <Star className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent [&:not(:has(.bg-clip-text))]:text-white px-4">
                  ¡Listo! Este es el Plan de Vuelo Personalizado para {data.childName}
                </h1>
              </div>

              <div className="space-y-4 md:space-y-6">
                <Card className="bg-gray-900/90 backdrop-blur-md border-2 border-green-500/30 shadow-2xl shadow-green-500/10 relative">
                  <CardContent className="p-6 md:p-8 space-y-6 md:space-y-8">
                    <div className="text-center space-y-4 md:space-y-6 mb-6 md:mb-8">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent [&:not(:has(.bg-clip-text))]:text-white">
                        ¡Descubre el potencial único de tu hijo/a!
                      </h2>
                      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        En solo 3 minutos, crearemos un plan personalizado que transformará su futuro
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-4">
                        <Label
                          htmlFor="childName"
                          className="text-base md:text-lg font-semibold text-green-400 flex items-center"
                        >
                          <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                          <span className="ml-2">Nombre de tu futuro genio</span>
                        </Label>
                        <Input
                          id="childName"
                          value={data.childName}
                          onChange={(e) => setData({ ...data, childName: e.target.value })}
                          className="bg-gray-800/90 border-2 border-gray-600 focus:border-green-500 text-white text-lg md:text-xl p-4 md:p-6 rounded-xl transition-all duration-300 hover:border-green-400"
                          placeholder="Ej: Sofía, Mateo..."
                          autoComplete="off"
                        />
                      </div>

                      <div className="space-y-4">
                        <Label
                          htmlFor="parentName"
                          className="text-base md:text-lg font-semibold text-blue-400 flex items-center"
                        >
                          <Heart className="w-4 h-4 md:w-5 md:h-5" />
                          <span className="ml-2">Tu nombre (papá/mamá)</span>
                        </Label>
                        <Input
                          id="parentName"
                          value={data.parentName}
                          onChange={(e) => setData({ ...data, parentName: e.target.value })}
                          className="bg-gray-800/90 border-2 border-gray-600 focus:border-blue-500 text-white text-lg md:text-xl p-4 md:p-6 rounded-xl transition-all duration-300 hover:border-blue-400"
                          placeholder="Tu nombre aquí..."
                          autoComplete="off"
                        />
                      </div>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                      <Label className="text-base md:text-lg font-semibold text-purple-400 flex items-center">
                        <Target className="w-4 h-4 md:w-5 md:h-5" />
                        <span className="ml-2">¿En qué etapa de desarrollo está?</span>
                      </Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                        {ageOptions.map((option) => (
                          <Button
                            key={option.value}
                            variant={data.age === option.value ? "default" : "outline"}
                            onClick={() => setData({ ...data, age: option.value })}
                            className={`p-4 md:p-6 text-center transition-all duration-300 rounded-xl min-h-[80px] md:min-h-[100px] flex flex-col justify-center ${
                              data.age === option.value
                                ? "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 border-purple-400 shadow-lg shadow-purple-500/30 scale-105 text-white"
                                : "bg-gray-800/90 border-2 border-gray-600 hover:border-purple-500 hover:bg-gray-700/90 hover:scale-105 text-gray-200"
                            }`}
                          >
                            <span className="text-base md:text-lg font-bold">{option.label}</span>
                            <span className="text-xs md:text-sm opacity-80 mt-1">{option.description}</span>
                          </Button>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={handleNext}
                      disabled={!canProceedStep1}
                      className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-500 disabled:from-gray-700 disabled:to-gray-700 disabled:text-gray-400 text-lg md:text-xl font-bold p-4 md:p-6 mt-6 md:mt-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Descubrir el potencial de {data.childName || "mi hijo/a"}{" "}
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-gray-600 hover:border-gray-400 bg-gray-800/80 hover:bg-gray-700/80 text-base md:text-lg p-3 md:p-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-2" /> Volver
                </Button>

                <Button
                  onClick={handleNext}
                  disabled={!canProceedStep6}
                  className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-gray-700 disabled:to-gray-700 text-base md:text-lg font-bold p-3 md:p-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Continuar <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 8 && (
            <motion.div
              key="analysis"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center space-y-6 md:space-y-8 min-h-[60vh] pt-4 md:pt-0"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-16 h-16 md:w-20 md:h-20 border-4 border-green-500/30 border-t-green-500 rounded-full"
              />

              <div className="text-center space-y-3 md:space-y-4">
                <motion.h2
                  key={loadingText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-white"
                >
                  {loadingText}
                </motion.h2>
                <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto px-4">
                  Nuestro algoritmo está procesando las respuestas para crear la experiencia perfecta
                </p>
              </div>

              <div className="flex space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                    className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          )}

          {step === 9 && !paymentCompleted && (
            <motion.div
              key="step6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="text-center space-y-4 md:space-y-6 pt-4 md:pt-0">
                <div className="flex justify-center space-x-2 mb-4">
                  <Star className="w-5 h-5 md:w-6 md:h-6" />
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
                  <Star className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent [&:not(:has(.bg-clip-text))]:text-white px-4">
                  ¡Listo! Este es el Plan de Vuelo Personalizado para {data.childName}
                </h1>
              </div>

              <div className="space-y-4 md:space-y-6">
                <Card className="bg-gray-900/90 backdrop-blur-md border-2 border-green-500/30 shadow-2xl shadow-green-500/10">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg md:text-xl text-green-400 flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Perfil Identificado
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 text-sm md:text-base">
                      Hemos identificado en {data.childName} un perfil único con gran potencial en las áreas que más le
                      apasionan. Su combinación de intereses y tu visión como padre/madre lo hacen el candidato perfecto
                      para nuestra metodología personalizada.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-green-900/90 backdrop-blur-md border-2 border-green-500/40">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg md:text-xl text-green-400">El Plan Perfecto</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 md:space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">Plan Integral MateAtletas</h3>
                    <p className="text-gray-200 text-sm md:text-base">
                      Basado en el perfil de {data.childName} y tus objetivos, recomendamos nuestro Plan Integral que
                      incluye mentoría personalizada, proyectos desafiantes y acceso completo a nuestra comunidad de
                      futuros genios.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-blue-900/90 backdrop-blur-md border-2 border-blue-500/40">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg md:text-xl text-blue-400">Horarios Disponibles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      {schedules.map((schedule, index) => (
                        <Button
                          key={index}
                          variant={data.selectedSchedule === schedule.time ? "default" : "outline"}
                          onClick={() => handleScheduleSelect(schedule.time)}
                          className={`text-left p-3 md:p-4 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer min-h-[60px] md:min-h-[80px] relative z-10 pointer-events-auto ${
                            data.selectedSchedule === schedule.time
                              ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 border-blue-400 shadow-lg shadow-blue-500/30 text-white"
                              : "border-2 border-gray-600 hover:border-blue-500 bg-gray-800/80 hover:bg-gray-700/80 text-gray-200"
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-semibold text-sm md:text-base">{schedule.time}</div>
                              <div
                                className={`text-xs md:text-sm ${schedule.popular ? "text-yellow-400" : "text-gray-400"}`}
                              >
                                {schedule.spots}
                              </div>
                            </div>
                            {schedule.popular && (
                              <div className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                                POPULAR
                              </div>
                            )}
                          </div>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-purple-900/90 backdrop-blur-md border-2 border-purple-500/40">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg md:text-xl text-purple-400">La Inversión en su Futuro</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">ARS 45.000 / mes</h3>
                    <p className="text-gray-400 mt-2 text-sm md:text-base">
                      Plan Integral - Acceso completo + Mentoría personalizada
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 hover:from-green-600 hover:via-blue-600 hover:to-purple-600 text-lg md:text-xl font-bold p-6 md:p-8 mt-6 md:mt-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl disabled:opacity-50 relative z-10 pointer-events-auto cursor-pointer"
                onClick={handleReservePlace}
                disabled={!data.selectedSchedule}
              >
                Reservar Lugar para {data.childName} <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {showPaymentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-[100]"
            onClick={() => setShowPaymentModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-green-500/40 rounded-2xl p-6 md:p-8 max-w-md w-full mx-4 shadow-2xl shadow-green-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center space-y-4 md:space-y-6">
                <div className="flex justify-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <CreditCard className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Reservar lugar para {data.childName}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base">Horario: {data.selectedSchedule}</p>
                </div>

                <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-white">ARS 45.000</div>
                  <div className="text-gray-400 text-sm md:text-base">Plan Integral - Primer mes</div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <Button
                    onClick={handlePayment}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-base md:text-lg font-semibold p-3 md:p-4 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <CreditCard className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Pagar con MercadoPago
                  </Button>

                  <Button
                    onClick={() => setShowPaymentModal(false)}
                    variant="outline"
                    className="w-full border-2 border-gray-600 hover:border-gray-400 bg-gray-800/80 hover:bg-gray-700/80 text-sm md:text-base p-3"
                  >
                    Cancelar
                  </Button>
                </div>

                <p className="text-xs text-gray-500 text-center">Pago seguro procesado por MercadoPago</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
