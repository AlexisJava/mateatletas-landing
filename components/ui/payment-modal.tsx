"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { CreditCard, Shield, Clock, Users, CheckCircle, Sparkles } from "lucide-react"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  courseName: string
  coursePrice: number
}

export function PaymentModal({ isOpen, onClose, courseName, coursePrice }: PaymentModalProps) {
  const [step, setStep] = useState<"info" | "payment" | "success">("info")
  const [formData, setFormData] = useState({
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    studentName: "",
    studentAge: "",
    schedule: "",
  })

  const schedules = [
    { id: "lunes-miercoles-16", label: "Lunes y Miércoles 16:00-17:30" },
    { id: "martes-jueves-16", label: "Martes y Jueves 16:00-17:30" },
    { id: "sabados-9", label: "Sábados 9:00-12:00" },
    { id: "sabados-14", label: "Sábados 14:00-17:00" },
  ]

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("payment")
  }

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setStep("success")
    }, 2000)
  }

  const handleClose = () => {
    setStep("info")
    setFormData({
      parentName: "",
      parentEmail: "",
      parentPhone: "",
      studentName: "",
      studentAge: "",
      schedule: "",
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl bg-slate-900/95 backdrop-blur-xl border-green-500/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            {step === "info" && "Información del estudiante"}
            {step === "payment" && "Confirmar pago"}
            {step === "success" && "¡Bienvenidos al club!"}
          </DialogTitle>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {step === "info" && (
            <motion.div
              key="info"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <Card className="bg-green-500/10 border-green-500/20 p-4">
                <h3 className="font-semibold text-green-400 mb-2">{courseName}</h3>
                <p className="text-white/80 text-sm">Precio: ${coursePrice.toLocaleString()}</p>
              </Card>

              <form onSubmit={handleInfoSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="parentName" className="text-white/90">
                      Nombre del padre/madre
                    </Label>
                    <Input
                      id="parentName"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="bg-white/5 border-white/20 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="parentEmail" className="text-white/90">
                      Email
                    </Label>
                    <Input
                      id="parentEmail"
                      type="email"
                      value={formData.parentEmail}
                      onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                      className="bg-white/5 border-white/20 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="parentPhone" className="text-white/90">
                      Teléfono
                    </Label>
                    <Input
                      id="parentPhone"
                      value={formData.parentPhone}
                      onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                      className="bg-white/5 border-white/20 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="studentAge" className="text-white/90">
                      Edad del estudiante
                    </Label>
                    <Select
                      value={formData.studentAge}
                      onValueChange={(value) => setFormData({ ...formData, studentAge: value })}
                    >
                      <SelectTrigger className="bg-white/5 border-white/20 text-white">
                        <SelectValue placeholder="Seleccionar edad" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-white/20">
                        {Array.from({ length: 12 }, (_, i) => i + 6).map((age) => (
                          <SelectItem key={age} value={age.toString()}>
                            {age} años
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="studentName" className="text-white/90">
                    Nombre del estudiante
                  </Label>
                  <Input
                    id="studentName"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="bg-white/5 border-white/20 text-white"
                    required
                  />
                </div>

                <div>
                  <Label className="text-white/90">Horario preferido</Label>
                  <Select
                    value={formData.schedule}
                    onValueChange={(value) => setFormData({ ...formData, schedule: value })}
                  >
                    <SelectTrigger className="bg-white/5 border-white/20 text-white">
                      <SelectValue placeholder="Seleccionar horario" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-white/20">
                      {schedules.map((schedule) => (
                        <SelectItem key={schedule.id} value={schedule.id}>
                          {schedule.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3"
                >
                  Continuar al pago
                </Button>
              </form>
            </motion.div>
          )}

          {step === "payment" && (
            <motion.div
              key="payment"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <Card className="bg-white/5 border-white/20 p-6">
                <h3 className="font-semibold text-white mb-4">Resumen de la compra</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Curso:</span>
                    <span className="text-white">{courseName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Estudiante:</span>
                    <span className="text-white">{formData.studentName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Horario:</span>
                    <span className="text-white">{schedules.find((s) => s.id === formData.schedule)?.label}</span>
                  </div>
                  <hr className="border-white/20 my-3" />
                  <div className="flex justify-between font-semibold text-lg">
                    <span className="text-white">Total:</span>
                    <span className="text-green-400">${coursePrice.toLocaleString()}</span>
                  </div>
                </div>
              </Card>

              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Pago seguro con MercadoPago</h3>
                    <p className="text-white/70 text-sm">Procesamiento seguro y encriptado</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
                  <Shield className="w-4 h-4" />
                  <span>Tus datos están protegidos con encriptación SSL</span>
                </div>

                <Button
                  onClick={handlePayment}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-3"
                >
                  Pagar con MercadoPago
                </Button>
              </div>
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center space-y-6"
            >
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto animate-ping opacity-20" />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-2">¡Bienvenidos al Club MateAtletas!</h2>
                <p className="text-white/80 mb-6">
                  {formData.studentName} ya forma parte de nuestra comunidad de genios matemáticos
                </p>
              </div>

              <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20 p-6">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-green-400" />
                    <span className="text-white">
                      Horario: {schedules.find((s) => s.id === formData.schedule)?.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-white">Grupo reducido de máximo 8 estudiantes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-white">Inicio de clases: Próxima semana</span>
                  </div>
                </div>
              </Card>

              <p className="text-white/70 text-sm">
                Te contactaremos en las próximas 24 horas con todos los detalles del curso
              </p>

              <Button
                onClick={handleClose}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3"
              >
                Continuar explorando
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
