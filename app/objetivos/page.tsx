import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Microscope, Target, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ObjetivosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
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
            <Badge variant="secondary">Nuestros Objetivos</Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al Inicio
            </Button>
          </Link>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-3 rounded-xl">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Nuestros Objetivos
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lo que buscamos lograr con BioScope y cómo planeamos revolucionar el análisis de salud estudiantil
          </p>
        </div>

        {/* General Objective */}
        <section className="mb-16">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-purple-50 to-blue-50">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl text-purple-800 mb-4">Objetivo General</CardTitle>
            </CardHeader>
            <CardContent className="max-w-4xl mx-auto">
              <div className="bg-white/70 p-8 rounded-2xl">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Analizar los componentes urinarios observados microscópicamente, vinculando el microscopio con la
                  aplicación S-Eye a diversas IAs para diagnósticos automatizados, y correlacionar estos hallazgos con
                  los hábitos alimenticios de estudiantes de diferentes carreras en la Universidad Politécnica Estatal
                  del Carchi.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Specific Objectives */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Objetivos Específicos</h2>
            <p className="text-lg text-gray-600">Pasos concretos para alcanzar nuestra meta principal</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                number: "01",
                title: "Recolección de Muestras",
                description:
                  "Recolectar muestras de orina de estudiantes de los programas de Laboratorio Clínico, Actividad Física, Comercio y Educación Básica en UPEC.",
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50",
              },
              {
                number: "02",
                title: "Integración Tecnológica",
                description:
                  "Vincular el microscopio eléctrico con la aplicación S-Eye a diversas IAs para análisis automatizado de muestras urinarias.",
                color: "from-green-500 to-green-600",
                bgColor: "bg-green-50",
              },
              {
                number: "03",
                title: "Diagnósticos Automatizados",
                description:
                  "Obtener diagnósticos automatizados de muestras de orina, identificando componentes como cristales, bacterias u otros elementos patológicos usando la app S-Eye e IAs integradas.",
                color: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-50",
              },
              {
                number: "04",
                title: "Correlación de Datos",
                description:
                  "Correlacionar los hallazgos microscópicos con los hábitos alimenticios específicos de cada programa académico para establecer patrones significativos.",
                color: "from-orange-500 to-orange-600",
                bgColor: "bg-orange-50",
              },
            ].map((objective, index) => (
              <Card
                key={index}
                className={`border-0 shadow-xl ${objective.bgColor} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${objective.color} flex items-center justify-center`}
                    >
                      <span className="text-2xl font-bold text-white">{objective.number}</span>
                    </div>
                    <CardTitle className="text-xl text-gray-800">{objective.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Navigation to Next Section */}
        <section className="text-center">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-gray-50 to-blue-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Quieres conocer nuestra metodología?</h3>
              <p className="text-gray-600 mb-6">Descubre cómo fusionamos ciencia clínica con inteligencia artificial</p>
              <Link href="/metodologia">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-3"
                >
                  Explorar Metodología
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
