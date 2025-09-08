"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: React.ComponentType
  onClick?: () => void
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function MateAtletasNavbar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const currentItem = items.find((item) => item.url === pathname)
    if (currentItem) {
      setActiveTab(currentItem.name)
    }
  }, [pathname, items])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl border-b border-green-500/20 shadow-lg shadow-green-500/10",
        isScrolled && "shadow-xl shadow-green-500/20",
        className,
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-2 -left-4 w-24 h-24 bg-green-500/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute -top-1 right-8 w-16 h-16 bg-cyan-500/5 rounded-full blur-lg animate-pulse delay-1000" />
        <div className="absolute top-2 left-1/3 w-12 h-12 bg-emerald-500/5 rounded-full blur-md animate-pulse delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Purple%20and%20Pink%20HighTech%20Company%20Technology%20Logo-Tmem5V7D4VblhFmTUhRWjoSX01tFCS.png"
                  alt="MateAtletas Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-white font-bold text-xl bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                MateAtletas
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-1">
            {items.map((item, index) => {
              const Icon = item.icon
              const isActive = activeTab === item.name

              const handleClick = (e: React.MouseEvent) => {
                if (item.onClick) {
                  e.preventDefault()
                  item.onClick()
                } else {
                  setActiveTab(item.name)
                }
              }

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {item.onClick ? (
                    <button
                      onClick={handleClick}
                      className={cn(
                        "relative flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300",
                        "text-white hover:text-white hover:bg-white/5",
                        isActive && "text-white bg-green-500/20",
                      )}
                    >
                      <Icon />
                      <span className="font-medium">{item.name}</span>

                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg border border-green-500/30"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </button>
                  ) : (
                    <Link
                      href={item.url}
                      onClick={() => setActiveTab(item.name)}
                      className={cn(
                        "relative flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300",
                        "text-white hover:text-white hover:bg-white/5",
                        isActive && "text-white bg-green-500/20",
                      )}
                    >
                      <Icon />
                      <span className="font-medium">{item.name}</span>

                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg border border-green-500/30"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  )}
                </motion.div>
              )
            })}
          </div>

          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-2 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-wrap gap-2">
                {items.map((item) => {
                  const Icon = item.icon
                  const isActive = activeTab === item.name

                  const handleMobileClick = (e: React.MouseEvent) => {
                    setIsMobileMenuOpen(false)
                    if (item.onClick) {
                      e.preventDefault()
                      item.onClick()
                    } else {
                      setActiveTab(item.name)
                    }
                  }

                  return item.onClick ? (
                    <button
                      key={item.name}
                      onClick={handleMobileClick}
                      className={cn(
                        "flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm",
                        "text-white hover:text-white hover:bg-white/5",
                        isActive && "text-white bg-green-500/20 border border-green-500/30",
                      )}
                    >
                      <Icon />
                      <span>{item.name}</span>
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.url}
                      onClick={handleMobileClick}
                      className={cn(
                        "flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm",
                        "text-white hover:text-white hover:bg-white/5",
                        isActive && "text-white bg-green-500/20 border border-green-500/30",
                      )}
                    >
                      <Icon />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
