"use client"
import { MateAtletasNavbar } from "@/components/ui/mateatletas-navbar"

const HomeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
)

const LightbulbIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21h6" />
    <path d="M12 17h.01" />
    <path d="M12 3a4 4 0 0 1 4 4c0 1.33-.47 2.55-1.26 3.5L12 14l-2.74-3.5A4.02 4.02 0 0 1 8 7a4 4 0 0 1 4-4z" />
  </svg>
)

const GraduationCapIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
)

const NewspaperIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
    <path d="M18 14h-8" />
    <path d="M15 18h-5" />
    <path d="M10 6h8v4h-8V6Z" />
  </svg>
)

const MessageSquareIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)

export function MateatletasNavBar() {
  const navItems = [
    { name: "Inicio", url: "/", icon: HomeIcon },
    { name: "Método", url: "/metodo", icon: LightbulbIcon },
    {
      name: "Cursos",
      url: "/cursos",
      icon: GraduationCapIcon,
    },
    { name: "Novedades", url: "/novedades", icon: NewspaperIcon },
    { name: "Reservá tu lugar", url: "/diagnostico", icon: MessageSquareIcon },
  ]

  return <MateAtletasNavbar items={navItems} />
}
