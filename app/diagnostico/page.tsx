import type { Metadata } from "next"
import { DiagnosticoInteractivo } from "./DiagnosticoInteractivo"
import { SiteFooter } from "@/components/layout/main-footer"

export const metadata: Metadata = {
  title: "Diagnóstico STEAM Personalizado — Mateatletas",
  description:
    "Descubrí el potencial de tu hijo/a en matemática, programación, IA y habilidades sociales con nuestro diagnóstico personalizado interactivo.",
}

export default function DiagnosticoPage() {
  return (
    <div>
      <DiagnosticoInteractivo />
      <SiteFooter />
    </div>
  )
}
