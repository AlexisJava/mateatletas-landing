"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import Link from "next/link"

export default function DiagnosticoClientPage() {
  const [formData, setFormData] = useState({
    nombreNino: "",
    edad: "",
    nombreResponsable: "",
    email: "",
    telefono: "",
    disponibilidad: "",
    consentimiento: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.nombreNino.trim()) {
      newErrors.nombreNino = "El nombre del niño/a es requerido"
    }
    if (!formData.edad) {
      newErrors.edad = "La edad es requerida"
    }
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
    if (!formData.disponibilidad) {
      newErrors.disponibilidad = "La disponibilidad horaria es requerida"
    }
    if (!formData.consentimiento) {
      newErrors.consentimiento = "Debe aceptar el consentimiento de contacto"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitted(true)
      // Simulate form submission
      console.log("Form submitted:", formData)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
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
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-foreground">¡Solicitud Enviada!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Gracias por tu interés en Mateatletas. Nos pondremos en contacto contigo dentro de las próximas 24 horas
              para coordinar el diagnóstico STEAM gratuito.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/">Volver al Inicio</Link>
            </Button>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Diagnóstico STEAM Gratuito</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Descubrí el potencial de tu hijo/a en matemática, programación, IA y habilidades sociales. Nuestro
              diagnóstico personalizado te dará un mapa claro de fortalezas y oportunidades de crecimiento.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: "1",
                title: "Completá el formulario",
                description: "Contanos sobre tu hijo/a y tus expectativas",
              },
              {
                step: "2",
                title: "Sesión de diagnóstico",
                description: "45 minutos de actividades lúdicas y desafíos adaptados",
              },
              {
                step: "3",
                title: "Informe personalizado",
                description: "Recibí un plan de desarrollo con recomendaciones específicas",
              },
            ].map((item, index) => (
              <Card key={index} className="bg-card/60 backdrop-blur-sm border-border/50 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Form */}
          <Card className="bg-card/60 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Información del Diagnóstico</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Nombre del niño/a */}
                  <div className="space-y-2">
                    <Label htmlFor="nombreNino">Nombre del niño/a *</Label>
                    <Input
                      id="nombreNino"
                      value={formData.nombreNino}
                      onChange={(e) => handleInputChange("nombreNino", e.target.value)}
                      aria-invalid={!!errors.nombreNino}
                      aria-describedby={errors.nombreNino ? "nombreNino-error" : undefined}
                      required
                    />
                    {errors.nombreNino && (
                      <p id="nombreNino-error" className="text-sm text-destructive">
                        {errors.nombreNino}
                      </p>
                    )}
                  </div>

                  {/* Edad */}
                  <div className="space-y-2">
                    <Label htmlFor="edad">Edad *</Label>
                    <Select value={formData.edad} onValueChange={(value) => handleInputChange("edad", value)} required>
                      <SelectTrigger aria-invalid={!!errors.edad}>
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
                    {errors.edad && (
                      <p id="edad-error" className="text-sm text-destructive">
                        {errors.edad}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Nombre del responsable */}
                  <div className="space-y-2">
                    <Label htmlFor="nombreResponsable">Nombre del responsable *</Label>
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

                  {/* Email */}
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

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Teléfono */}
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

                  {/* Disponibilidad */}
                  <div className="space-y-2">
                    <Label htmlFor="disponibilidad">Disponibilidad horaria *</Label>
                    <Select
                      value={formData.disponibilidad}
                      onValueChange={(value) => handleInputChange("disponibilidad", value)}
                      required
                    >
                      <SelectTrigger aria-invalid={!!errors.disponibilidad}>
                        <SelectValue placeholder="Seleccionar horario" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manana">Mañana (9:00 - 12:00)</SelectItem>
                        <SelectItem value="tarde">Tarde (14:00 - 17:00)</SelectItem>
                        <SelectItem value="noche">Noche (18:00 - 20:00)</SelectItem>
                        <SelectItem value="sabado">Sábado</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.disponibilidad && (
                      <p id="disponibilidad-error" className="text-sm text-destructive">
                        {errors.disponibilidad}
                      </p>
                    )}
                  </div>
                </div>

                {/* Consentimiento */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consentimiento"
                    checked={formData.consentimiento}
                    onCheckedChange={(checked) => handleInputChange("consentimiento", !!checked)}
                    aria-invalid={!!errors.consentimiento}
                    aria-describedby={errors.consentimiento ? "consentimiento-error" : undefined}
                    required
                  />
                  <div className="space-y-1">
                    <Label htmlFor="consentimiento" className="text-sm font-normal cursor-pointer">
                      Acepto que Mateatletas se ponga en contacto conmigo para coordinar el diagnóstico STEAM gratuito *
                    </Label>
                    {errors.consentimiento && (
                      <p id="consentimiento-error" className="text-sm text-destructive">
                        {errors.consentimiento}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                    Solicitar Diagnóstico Gratuito
                  </Button>
                  <Button asChild variant="outline" className="flex-1 bg-transparent">
                    <a href="#" className="text-center">
                      Contactar por WhatsApp
                    </a>
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
