import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import "./globals.css"
import { MateatletasNavBar } from "@/components/layout/main-navigation"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://mateatletas.com"),
  title: "Mateatletas — Club STEAM (6–15)",
  description:
    "Entrenamiento en matemática, programación, IA y habilidades sociales para chicos de 6 a 15 años. Diagnóstico STEAM sin costo.",
  generator: "v0.app",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mateatletas — Club STEAM (6–15)",
    description: "Aprender haciendo. Medir para mejorar.",
    url: "https://mateatletas.com",
    siteName: "Mateatletas",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Mateatletas Club",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateatletas",
    description: "Club STEAM (6–15)",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`font-sans ${poppins.variable} ${GeistMono.variable} antialiased`}>
        <MateatletasNavBar />
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
