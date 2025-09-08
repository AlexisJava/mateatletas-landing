"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { LayoutGrid, X } from "lucide-react"

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : ""
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50 bg-[#0D1117] border-b border-border/20" role="banner">
      <div className="container mx-auto px-6 py-4">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:items-center">
          {/* Left: Logo */}
          <div>
            <Link href="/" aria-label="Mateatletas - inicio">
              <Image
                src="/placeholder.svg?height=40&width=180&text=Mateatletas+Logo"
                alt="Mateatletas"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Center: Navigation */}
          <nav className="flex items-center justify-center gap-8" aria-label="Navegación principal">
            <Link href="/#metodo" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Método
            </Link>
            <Link
              href="/programas"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Programas
            </Link>
            <Link
              href="/#comunidad"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Comunidad
            </Link>
          </nav>

          {/* Right: CTA Button */}
          <div className="flex justify-end">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 font-semibold transition-all hover:scale-105"
            >
              <Link href="/diagnostico">Agendar Diagnóstico STEAM</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex lg:hidden items-center justify-between">
          {/* Left: Isotipo */}
          <Link href="/" aria-label="Mateatletas - inicio">
            <Image
              src="/placeholder.svg?height=40&width=40&text=M"
              alt="Mateatletas"
              width={40}
              height={40}
              className="h-10 w-10"
            />
          </Link>

          {/* Right: Menu Button */}
          <Button variant="ghost" size="icon" onClick={() => setMobileOpen(true)} aria-label="Abrir menú">
            <LayoutGrid className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Panel */}
        {mobileOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />

            {/* Panel */}
            <div className="absolute right-0 top-0 h-full w-[80%] bg-background/80 backdrop-blur-xl border-l border-border/20">
              {/* Panel Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/20">
                <Image
                  src="/placeholder.svg?height=32&width=140&text=Mateatletas"
                  alt="Mateatletas"
                  width={140}
                  height={32}
                  className="h-8 w-auto"
                />
                <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} aria-label="Cerrar menú">
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Panel Content */}
              <div className="flex flex-col h-full">
                <nav className="flex-1 p-6 space-y-4">
                  <Link
                    href="/#metodo"
                    onClick={() => setMobileOpen(false)}
                    className="block text-xl font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    Método
                  </Link>
                  <Link
                    href="/programas"
                    onClick={() => setMobileOpen(false)}
                    className="block text-xl font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    Programas
                  </Link>
                  <Link
                    href="/#comunidad"
                    onClick={() => setMobileOpen(false)}
                    className="block text-xl font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    Comunidad
                  </Link>
                </nav>

                {/* Fixed CTA at bottom */}
                <div className="p-6 border-t border-border/20">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 font-semibold"
                  >
                    <Link href="/diagnostico" onClick={() => setMobileOpen(false)}>
                      Agendar Diagnóstico STEAM
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
