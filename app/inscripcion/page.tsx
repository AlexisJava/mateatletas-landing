import type { Metadata } from "next"
import InscripcionClientPage from "./InscripcionClientPage"
import { SiteFooter } from "@/components/layout/main-footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

export const metadata: Metadata = {
  title: "Inscripción — Mateatletas Club STEAM",
  description:
    "Comenzá el proceso de ingreso al primer club STEAM de Argentina. Preinscripción y diagnóstico gratuito para chicos de 6 a 15 años.",
}

export default function InscripcionPage() {
  return (
    <div>
      <InscripcionClientPage />
      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
