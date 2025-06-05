import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Microscope, ArrowRight, Target, Users, Cpu, TrendingUp, Heart, GraduationCap, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-green-600 p-2 rounded-xl">
                <Microscope className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  BioScope
                </h1>
                <p className="text-sm text-gray-600">Universidad Politécnica Estatal del Carchi</p>
              </div>
            </div>
            <Badge variant="secondary" className="hidden md:flex">
              Innovación en Salud Estudiantil
            </Badge>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
          <div className="container mx-auto text-center relative z-10">
            <div className="max-w-4xl mx-auto space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent leading-tight">
                BioScope: Innovación en el Análisis de Salud Estudiantil
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Revolucionando el análisis de salud universitaria mediante{" "}
                <span className="font-semibold text-blue-600">Inteligencia Artificial</span> y{" "}
                <span className="font-semibold text-green-600">tecnología microscópica avanzada</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/objetivos">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3"
                  >
                    Explorar el Proyecto
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/equipo">
                  <Button variant="outline" size="lg" className="px-8 py-3">
                    Conocer al Equipo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <Card className="border-0 shadow-2xl bg-white/70 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <CardTitle className="flex items-center justify-center gap-3 text-3xl mb-4">
                  <Lightbulb className="h-8 w-8 text-blue-600" />
                  Introducción al Proyecto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 max-w-4xl mx-auto">
                <div className="text-center space-y-6">
                  <p className="text-lg leading-relaxed text-gray-700">
                    <strong className="text-blue-600">BioScope</strong> representa un proyecto pionero cuyo nombre
                    completo es{" "}
                    <em className="text-gray-800">
                      "Análisis microscópico de componentes urinarios en estudiantes de la Universidad Politécnica
                      Estatal del Carchi y su relación con los hábitos alimenticios según su carrera implementando
                      Inteligencia Artificial para su análisis"
                    </em>
                    .
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Nuestro Objetivo Central</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Identificar cambios en la composición urinaria de estudiantes universitarios y relacionarlos con
                      los hábitos alimenticios según diferentes programas académicos, utilizando Inteligencia Artificial
                      para el análisis automatizado y preciso.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
                    <p className="text-purple-800 font-medium text-lg">
                      <em>"Innovaciones y sostenibilidad en el laboratorio clínico: hacia un futuro responsable"</em>
                    </p>
                    <p className="text-purple-600 text-sm mt-2">Tema marco del proyecto BioScope</p>
                  </div>

                  <div className="mt-8">
                    <Link href="/beta">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
                      >
                        Probar Beta
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Navigation Cards */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Explora Nuestro Proyecto</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Nuestros Objetivos",
                  description:
                    "Descubre qué buscamos lograr con BioScope y cómo planeamos revolucionar el análisis de salud estudiantil.",
                  icon: Target,
                  href: "/objetivos",
                  color: "from-purple-500 to-purple-600",
                  bgColor: "bg-purple-50",
                },
                {
                  title: "Metodología",
                  description:
                    "Conoce nuestro enfoque científico que fusiona ciencia clínica con inteligencia artificial.",
                  icon: Users,
                  href: "/metodologia",
                  color: "from-orange-500 to-orange-600",
                  bgColor: "bg-orange-50",
                },
                {
                  title: "Tecnología S-Eye",
                  description: "Explora la tecnología innovadora que hace posible nuestro análisis automatizado.",
                  icon: Cpu,
                  href: "/tecnologia",
                  color: "from-cyan-500 to-cyan-600",
                  bgColor: "bg-cyan-50",
                },
                {
                  title: "Resultados Esperados",
                  description: "Conoce las conexiones que esperamos encontrar entre dieta, carrera y salud urinaria.",
                  icon: TrendingUp,
                  href: "/resultados",
                  color: "from-teal-500 to-teal-600",
                  bgColor: "bg-teal-50",
                },
                {
                  title: "Impacto Potencial",
                  description: "Descubre cómo BioScope puede promover una comunidad universitaria más saludable.",
                  icon: Heart,
                  href: "/impacto",
                  color: "from-rose-500 to-rose-600",
                  bgColor: "bg-rose-50",
                },
                {
                  title: "Nuestro Equipo",
                  description:
                    "Conoce a los estudiantes investigadores detrás de esta innovación en salud estudiantil.",
                  icon: GraduationCap,
                  href: "/equipo",
                  color: "from-indigo-500 to-indigo-600",
                  bgColor: "bg-indigo-50",
                },
              ].map((item, index) => (
                <Link key={index} href={item.href}>
                  <Card
                    className={`h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group ${item.bgColor} border-0`}
                  >
                    <CardHeader>
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-gray-900 transition-colors">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{item.description}</p>
                      <div className="flex items-center mt-4 text-sm font-medium text-blue-600 group-hover:text-blue-700">
                        Explorar
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why This Research Matters */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-r from-green-50 to-blue-50">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-3 text-3xl mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                  Por Qué Importa Esta Investigación
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 max-w-4xl mx-auto">
                <div className="text-center space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Existe un vínculo fundamental entre la dieta y la salud general, donde la composición urinaria
                    refleja el estado metabólico y fisiológico de un individuo. Esta conexión es especialmente relevante
                    en el contexto universitario.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white/70 p-6 rounded-xl">
                      <h4 className="font-semibold text-yellow-800 mb-4 text-lg">Desafíos Universitarios</h4>
                      <ul className="text-left space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          Estrés académico que afecta los patrones alimenticios
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          Tiempo limitado para preparar comidas saludables
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          Acceso limitado a alimentos nutritivos
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          Impacto en la salud renal y urinaria
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/70 p-6 rounded-xl">
                      <h4 className="font-semibold text-green-800 mb-4 text-lg">Valor del Proyecto</h4>
                      <p className="text-gray-700 leading-relaxed">
                        BioScope identifica riesgos de salud y fomenta la conciencia sobre la nutrición equilibrada
                        dentro de la comunidad universitaria, contribuyendo al bienestar integral de los estudiantes y
                        su futuro profesional.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-green-600 p-2 rounded-xl">
                <Microscope className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">BioScope</h3>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Innovaciones y sostenibilidad en el laboratorio clínico: hacia un futuro responsable
            </p>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 text-sm">Universidad Politécnica Estatal del Carchi (UPEC) - 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
