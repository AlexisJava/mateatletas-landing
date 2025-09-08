"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import Link from "next/link"

export default function InscripcionClientPage() {
  const [formData, setFormData] = useState({
    nombreResponsable: "",
    email: "",
    telefono: "",
    nombreEstudiante: "",
    edadEstudiante: "",
    experienciaPrevia: "",
    comentarios: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.nombreResponsable.trim()) {
      newErrors.nombreResponsable = "El nombre del responsable es requerido"
    }
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido"
    }
    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es requerido"
    }
    if (!formData.nombreEstudiante.trim()) {
      newErrors.nombreEstudiante = "El nombre del estudiante es requerido"
    }
    if (!formData.edadEstudiante) {
      newErrors.edadEstudiante = "La edad del estudiante es requerida"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitted(true)
      console.log("Form submitted:", formData)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
        <Card className="max-w-2xl w-full bg-card/60 backdrop-blur-sm border-border/50">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-foreground">¡Preinscripción Completada!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Gracias por tu interés en Mateatletas. Hemos recibido tu preinscripción y nos pondremos en contacto
              contigo para coordinar el siguiente paso: el diagnóstico STEAM gratuito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/diagnostico">Programar Diagnóstico</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">Volver al Inicio</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Únete al Club Mateatletas</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Comenzá el proceso de ingreso completando esta preinscripción. Luego coordinaremos un diagnóstico STEAM
              gratuito para diseñar el plan de entrenamiento perfecto para tu hijo/a.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { step: "1", title: "Preinscripción", description: "Completá este formulario", active: true },
              { step: "2", title: "Diagnóstico", description: "Evaluación STEAM gratuita", active: false },
              {
                step: "3",
                title: "Plan personalizado",
                description: "Diseñamos tu ruta de aprendizaje",
                active: false,
              },
              { step: "4", title: "¡A entrenar!", description: "Comenzás tu aventura STEAM", active: false },
            ].map((item, index) => (
              <Card
                key={index}
                className={`text-center ${
                  item.active ? "bg-primary/10 border-primary/30" : "bg-card/60 border-border/50"
                } backdrop-blur-sm`}
              >
                <CardContent className="p-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 ${
                      item.active ? "bg-primary/80 text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <span className="font-bold text-sm">{item.step}</span>
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Form */}
          <Card className="bg-card/60 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Formulario de Preinscripción</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Datos del Responsable</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombreResponsable">Nombre completo *</Label>
                      <Input
                        id="nombreResponsable"
                        value={formData.nombreResponsable}
                        onChange={(e) => handleInputChange("nombreResponsable", e.target.value)}
                        aria-invalid={!!errors.nombreResponsable}
                        aria-describedby={errors.nombreResponsable ? "nombreResponsable-error" : undefined}
                        required
                      />
                      {errors.nombreResponsable && (
                        <p id="nombreResponsable-error" className="text-sm text-destructive">
                          {errors.nombreResponsable}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        required
                      />
                      {errors.email && (
                        <p id="email-error" className="text-sm text-destructive">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono *</Label>
                    <Input
                      id="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => handleInputChange("telefono", e.target.value)}
                      aria-invalid={!!errors.telefono}
                      aria-describedby={errors.telefono ? "telefono-error" : undefined}
                      required
                    />
                    {errors.telefono && (
                      <p id="telefono-error" className="text-sm text-destructive">
                        {errors.telefono}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Datos del Estudiante</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombreEstudiante">Nombre completo *</Label>
                      <Input
                        id="nombreEstudiante"
                        value={formData.nombreEstudiante}
                        onChange={(e) => handleInputChange("nombreEstudiante", e.target.value)}
                        aria-invalid={!!errors.nombreEstudiante}
                        aria-describedby={errors.nombreEstudiante ? "nombreEstudiante-error" : undefined}
                        required
                      />
                      {errors.nombreEstudiante && (
                        <p id="nombreEstudiante-error" className="text-sm text-destructive">
                          {errors.nombreEstudiante}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="edadEstudiante">Edad *</Label>
                      <Select
                        value={formData.edadEstudiante}
                        onValueChange={(value) => handleInputChange("edadEstudiante", value)}
                        required
                      >
                        <SelectTrigger aria-invalid={!!errors.edadEstudiante}>
                          <SelectValue placeholder="Seleccionar edad" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 10 }, (_, i) => i + 6).map((age) => (
                            <SelectItem key={age} value={age.toString()}>
                              {age} años
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.edadEstudiante && (
                        <p id="edadEstudiante-error" className="text-sm text-destructive">
                          {errors.edadEstudiante}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experienciaPrevia">Experiencia previa en STEAM</Label>
                    <Select
                      value={formData.experienciaPrevia}
                      onValueChange={(value) => handleInputChange("experienciaPrevia", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar nivel de experiencia" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ninguna">Ninguna experiencia</SelectItem>
                        <SelectItem value="basica">Experiencia básica (juegos educativos, Scratch)</SelectItem>
                        <SelectItem value="intermedia">Experiencia intermedia (cursos previos, proyectos)</SelectItem>
                        <SelectItem value="avanzada">Experiencia avanzada (programación, competencias)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comentarios">Comentarios adicionales</Label>
                  <Textarea
                    id="comentarios"
                    placeholder="Contanos sobre los intereses de tu hijo/a, expectativas, o cualquier información que consideres relevante..."
                    value={formData.comentarios}
                    onChange={(e) => handleInputChange("comentarios", e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                    Completar Preinscripción
                  </Button>
                  <Button asChild variant="outline" className="flex-1 bg-transparent">
                    <Link href="/diagnostico">Ir directo al Diagnóstico</Link>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
