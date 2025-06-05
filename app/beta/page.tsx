"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Microscope, ArrowLeft, Upload, FileUp, AlertCircle, CheckCircle, Loader2 } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function BetaPage() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [results, setResults] = useState<any | null>(null)
  const [activeTab, setActiveTab] = useState("upload")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setError(null)

      // Create preview
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreview(e.target?.result as string)
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!file) {
      setError("Por favor selecciona una imagen para analizar")
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Create FormData
      const formData = new FormData()
      formData.append("file", file)

      // Send to API
      const response = await fetch("https://bioscope-277270001088.us-central1.run.app/analyze", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`)
      }

      const data = await response.json()
      setResults(data)
      setActiveTab("results")
    } catch (err: any) {
      console.error("Error al analizar la imagen:", err)
      setError(err.message || "Error al procesar la imagen. Por favor intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setFile(null)
    setPreview(null)
    setResults(null)
    setError(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
            <Badge variant="secondary" className="bg-gradient-to-r from-purple-100 to-blue-100">
              Versión Beta
            </Badge>
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
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            BioScope Beta
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prueba nuestro sistema de análisis de muestras microscópicas con inteligencia artificial
          </p>
        </div>

        {/* Beta Interface */}
        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="upload" className="text-lg py-3">
                <FileUp className="mr-2 h-5 w-5" />
                Subir Imagen
              </TabsTrigger>
              <TabsTrigger value="results" className="text-lg py-3" disabled={!results}>
                <CheckCircle className="mr-2 h-5 w-5" />
                Resultados
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upload">
              <Card className="border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Sube una imagen para análisis</CardTitle>
                  <CardDescription className="text-center">
                    Sube una imagen microscópica de una muestra urinaria para análisis automatizado
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid place-items-center">
                      <div
                        className={`border-2 border-dashed rounded-lg p-12 w-full max-w-md text-center cursor-pointer
                          ${preview ? "border-green-300 bg-green-50" : "border-gray-300 bg-gray-50 hover:bg-gray-100"}`}
                        onClick={() => document.getElementById("file-upload")?.click()}
                      >
                        {preview ? (
                          <div className="space-y-4">
                            <div className="relative w-full h-48">
                              <Image
                                src={preview || "/placeholder.svg"}
                                alt="Vista previa"
                                fill
                                className="object-contain rounded-lg"
                              />
                            </div>
                            <p className="text-sm text-gray-500">Haz clic para cambiar la imagen</p>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <Upload className="mx-auto h-12 w-12 text-gray-400" />
                            <div>
                              <p className="text-lg font-medium">Haz clic para subir una imagen</p>
                              <p className="text-sm text-gray-500">o arrastra y suelta aquí</p>
                            </div>
                            <p className="text-xs text-gray-400">PNG, JPG, JPEG (máx. 10MB)</p>
                          </div>
                        )}
                        <input
                          id="file-upload"
                          type="file"
                          className="hidden"
                          accept="image/png, image/jpeg, image/jpg"
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>

                    {error && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}

                    <div className="flex justify-center gap-4">
                      <Button type="button" variant="outline" onClick={resetForm} disabled={!file || loading}>
                        Limpiar
                      </Button>
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        disabled={!file || loading}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Analizando...
                          </>
                        ) : (
                          <>Analizar Imagen</>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="results">
              <Card className="border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Resultados del Análisis</CardTitle>
                  <CardDescription className="text-center">
                    Análisis automatizado mediante inteligencia artificial
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {results && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-medium mb-4">Imagen Analizada</h3>
                          <div className="relative w-full h-48 border rounded-lg overflow-hidden">
                            {preview && (
                              <Image
                                src={preview || "/placeholder.svg"}
                                alt="Muestra analizada"
                                fill
                                className="object-contain"
                              />
                            )}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium mb-4">Componentes Identificados</h3>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <ul className="space-y-2">
                              {/* Aquí mostraríamos los componentes identificados de la API */}
                              <li className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span>
                                  Células epiteliales: <span className="font-medium">Detectadas</span>
                                </span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span>
                                  Leucocitos: <span className="font-medium">Pocos</span>
                                </span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span>
                                  Cristales: <span className="font-medium">No detectados</span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-lg font-medium mb-4">Análisis Detallado</h3>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-gray-700">
                            El análisis de la muestra indica componentes normales sin presencia de patógenos
                            significativos. La composición es consistente con una muestra de orina saludable con niveles
                            normales de células epiteliales y una cantidad mínima de leucocitos que está dentro del
                            rango normal.
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <Button
                          onClick={() => {
                            resetForm()
                            setActiveTab("upload")
                          }}
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        >
                          Analizar Nueva Muestra
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12">
            <Alert className="bg-blue-50 border-blue-200">
              <AlertCircle className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-blue-800">Versión Beta</AlertTitle>
              <AlertDescription className="text-blue-700">
                Esta es una versión de prueba del sistema BioScope. Los resultados son simulados y no deben utilizarse
                para diagnósticos médicos. Para más información sobre la API, consulta la{" "}
                <a
                  href="https://bioscope-277270001088.us-central1.run.app/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium"
                >
                  documentación
                </a>
                .
              </AlertDescription>
            </Alert>
          </div>
        </div>
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
