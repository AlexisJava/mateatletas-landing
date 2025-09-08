import { notFound } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteFooter } from "@/components/layout/main-footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react"

const articles = {
  "laboratorio-robotica": {
    title: "Nuevo Laboratorio de Robótica",
    category: "Evento",
    date: "5 de Septiembre, 2025",
    author: "Equipo MateAtletas",
    readTime: "3 min",
    excerpt: "Inauguramos nuestro nuevo espacio de robótica con tecnología de última generación para nuestros atletas.",
    content: `
      <p>Estamos emocionados de anunciar la apertura de nuestro nuevo Laboratorio de Robótica, un espacio de vanguardia diseñado específicamente para impulsar la creatividad y el aprendizaje de nuestros atletas.</p>
      
      <h3>Tecnología de Última Generación</h3>
      <p>El laboratorio cuenta con:</p>
      <ul>
        <li>20 kits de robótica Arduino y Raspberry Pi</li>
        <li>Impresoras 3D para prototipado rápido</li>
        <li>Sensores avanzados y componentes electrónicos</li>
        <li>Estaciones de trabajo colaborativas</li>
      </ul>
      
      <h3>Proyectos Emocionantes</h3>
      <p>Los atletas ya están trabajando en proyectos increíbles como robots autónomos, sistemas de automatización del hogar y dispositivos de asistencia para personas con discapacidades.</p>
      
      <p>Este nuevo espacio representa nuestro compromiso continuo con brindar a nuestros atletas las herramientas más avanzadas para explorar, crear e innovar en el mundo de la tecnología.</p>
    `,
    tags: ["Robótica", "Tecnología", "Innovación", "Laboratorio"],
  },
  "maria-app-matematicas": {
    title: "Atleta Destacado: María y su App de Matemáticas",
    category: "Proyecto Destacado",
    date: "3 de Septiembre, 2025",
    author: "María González",
    readTime: "5 min",
    excerpt: "María, de 14 años, desarrolló una aplicación que ayuda a estudiantes con dificultades en álgebra.",
    content: `
      <p>Conoce a María González, una atleta de 14 años que ha desarrollado "AlgebraFácil", una aplicación móvil que está revolucionando la forma en que los estudiantes aprenden álgebra.</p>
      
      <h3>El Problema que Identificó</h3>
      <p>María notó que muchos de sus compañeros de clase tenían dificultades para visualizar conceptos algebraicos abstractos. "Veía que mis amigos se frustraban con las ecuaciones porque no podían 'ver' lo que estaba pasando", explica María.</p>
      
      <h3>La Solución Innovadora</h3>
      <p>Su aplicación utiliza:</p>
      <ul>
        <li>Visualizaciones interactivas de ecuaciones</li>
        <li>Gamificación para hacer el aprendizaje divertido</li>
        <li>Sistema de progreso personalizado</li>
        <li>Explicaciones paso a paso con animaciones</li>
      </ul>
      
      <h3>Impacto Real</h3>
      <p>En solo 3 meses, más de 500 estudiantes han usado la aplicación, con un 85% reportando mejoras significativas en sus calificaciones de matemáticas.</p>
      
      <p>"Lo más gratificante es recibir mensajes de estudiantes diciéndome que ahora entienden álgebra gracias a mi app", dice María con una sonrisa.</p>
    `,
    tags: ["Matemáticas", "Desarrollo de Apps", "Educación", "Innovación"],
  },
}

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E5E7EB] relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-green-500/15 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <main className="relative z-30 px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/novedades"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Novedades
            </Link>
          </div>

          <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-700 mb-8">
            <CardContent className="p-8">
              <div className="mb-6">
                <Badge
                  className={`mb-4 ${
                    article.category === "Evento"
                      ? "bg-blue-600/20 text-blue-400 border-blue-600/30"
                      : article.category === "Proyecto Destacado"
                        ? "bg-purple-600/20 text-purple-400 border-purple-600/30"
                        : article.category === "Para Padres"
                          ? "bg-orange-600/20 text-orange-400 border-orange-600/30"
                          : "bg-green-600/20 text-green-400 border-green-600/30"
                  }`}
                >
                  {article.category}
                </Badge>

                <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-white">
                  {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {article.author}
                  </div>
                  <span>{article.readTime} de lectura</span>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">{article.excerpt}</p>
              </div>

              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-8">
                <span className="text-gray-400">Imagen del Artículo</span>
              </div>

              <div
                className="prose prose-invert prose-green max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-gray-300 border-gray-600">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent">
                    <Share2 className="w-4 h-4 mr-2" />
                    Compartir Artículo
                  </Button>

                  <Link href="/novedades">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">Ver Más Artículos</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <SiteFooter />
      <ScrollToTop />
    </div>
  )
}
