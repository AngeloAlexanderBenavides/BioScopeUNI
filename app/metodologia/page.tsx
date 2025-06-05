import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Microscope, Users, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function MetodologiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="bg-gradient-to-br from-blue-600 to-green-600 p-2 rounded-xl">
                <Microscope className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  BioScope
                </h1>
                <p className="text-sm text-gray-600">Universidad Politécnica Estatal del Carchi</p>
              </div>
            </Link>
            <Badge variant="secondary">Metodología</Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/objetivos">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Objetivos
            </Button>
          </Link>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-3 rounded-xl">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Nuestra Metodología
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fusionando ciencia clínica con inteligencia artificial para resultados precisos y confiables
          </p>
        </div>

        {/* Methodology Overview */}
        <section className="mb-16">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-orange-50 to-red-50">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl text-orange-800 mb-4">Enfoque Científico</CardTitle>
            </CardHeader>
            <CardContent className="max-w-4xl mx-auto">
              <div className="bg-white/70 p-8 rounded-2xl text-center">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  El estudio utiliza una{" "}
                  <strong className="text-orange-600">metodología cuantitativa y observacional</strong>, siguiendo un
                  proceso sistemático y riguroso que combina técnicas tradicionales de laboratorio clínico con
                  tecnología de vanguardia en inteligencia artificial.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-orange-100 p-4 rounded-xl">
                    <h4 className="font-semibold text-orange-800 mb-2">Cuantitativo</h4>
                    <p className="text-orange-700 text-sm">
                      Medición precisa de componentes urinarios y análisis estadístico de datos
                    </p>
                  </div>
                  <div className="bg-red-100 p-4 rounded-xl">
                    <h4 className="font-semibold text-red-800 mb-2">Observacional</h4>
                    <p className="text-red-700 text-sm">Estudio de patrones naturales sin intervención experimental</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Process Steps */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Proceso Paso a Paso</h2>
            <p className="text-lg text-gray-600">Cada etapa diseñada para garantizar precisión y confiabilidad</p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Selección de Participantes",
                description:
                  "Selección de estudiantes voluntarios de las carreras especificadas con consentimiento informado, garantizando representatividad y aspectos éticos.",
                details: ["Laboratorio Clínico", "Actividad Física", "Comercio", "Educación Básica"],
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50",
              },
              {
                step: "02",
                title: "Recolección de Muestras",
                description:
                  "Recolección de muestras de orina en contenedores estériles, codificados anónimamente y almacenados apropiadamente para preservar la integridad.",
                details: [
                  "Contenedores estériles",
                  "Codificación anónima",
                  "Almacenamiento controlado",
                  "Trazabilidad completa",
                ],
                color: "from-green-500 to-green-600",
                bgColor: "bg-green-50",
              },
              {
                step: "03",
                title: "Preparación Microscópica",
                description:
                  "Centrifugación de muestras para concentrar el sedimento urinario antes del examen microscópico, optimizando la visualización.",
                details: [
                  "Centrifugación controlada",
                  "Concentración de sedimento",
                  "Preparación de láminas",
                  "Control de calidad",
                ],
                color: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-50",
              },
              {
                step: "04",
                title: "Observación Digital",
                description:
                  "Observación microscópica usando un microscopio digital conectado vía adaptador S-Eye a un dispositivo móvil o computadora.",
                details: ["Microscopio digital", "Adaptador S-Eye", "Captura de imágenes", "Documentación digital"],
                color: "from-cyan-500 to-cyan-600",
                bgColor: "bg-cyan-50",
              },
              {
                step: "05",
                title: "Análisis con IA",
                description:
                  "Identificación automatizada mediante IA de elementos urinarios como células epiteliales, leucocitos, glóbulos rojos, cristales y bacterias.",
                details: [
                  "Reconocimiento automático",
                  "Clasificación precisa",
                  "Análisis cuantitativo",
                  "Validación de resultados",
                ],
                color: "from-orange-500 to-orange-600",
                bgColor: "bg-orange-50",
              },
              {
                step: "06",
                title: "Recolección Dietética",
                description:
                  "Recolección de información dietética detallada incluyendo consumo de productos procesados y líquidos a través de encuestas estructuradas.",
                details: ["Encuestas validadas", "Hábitos alimenticios", "Consumo de líquidos", "Patrones dietéticos"],
                color: "from-red-500 to-red-600",
                bgColor: "bg-red-50",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`border-0 shadow-xl ${item.bgColor} hover:shadow-2xl transition-all duration-300`}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center`}
                      >
                        <span className="text-2xl font-bold text-white">{item.step}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed mb-6">{item.description}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {item.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Navigation to Next Section */}
        <section className="text-center">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-gray-50 to-cyan-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Quieres conocer la tecnología S-Eye?</h3>
              <p className="text-gray-600 mb-6">
                Descubre cómo la inteligencia artificial revoluciona nuestro análisis
              </p>
              <Link href="/tecnologia">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white px-8 py-3"
                >
                  Explorar Tecnología
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 mt-16">
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
