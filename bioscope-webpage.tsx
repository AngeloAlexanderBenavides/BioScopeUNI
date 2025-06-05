import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Microscope, Users, Target, Lightbulb, Cpu, TrendingUp, Heart, GraduationCap } from "lucide-react"

export default function BioScopeWebpage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Microscope className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">BioScope</h1>
            <Badge variant="secondary" className="ml-2">
              Innovación en Salud Estudiantil
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Title Suggestions */}
        <section className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Sugerencias de Títulos para la Página Web</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-600">
                  BioScope: Innovación en el Análisis de Salud Estudiantil
                </h3>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-green-600">
                  Inteligencia Artificial al Servicio de la Salud Universitaria
                </h3>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-purple-600">
                  BioScope: Conectando Dieta y Salud con Tecnología Avanzada
                </h3>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Introduction */}
        <section>
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Lightbulb className="h-6 w-6 text-blue-600" />
                Introducción a BioScope: Innovación en Salud Estudiantil
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed">
                <strong>BioScope</strong> es un proyecto innovador cuyo nombre completo es{" "}
                <em>
                  "Análisis microscópico de componentes urinarios en estudiantes de la Universidad Politécnica Estatal
                  del Carchi y su relación con los hábitos alimenticios según su carrera implementando Inteligencia
                  Artificial para su análisis"
                </em>
                .
              </p>
              <p className="text-gray-700">
                El objetivo central de BioScope es identificar cambios en la composición urinaria de estudiantes
                universitarios y relacionarlos con los hábitos alimenticios según diferentes programas académicos,
                utilizando Inteligencia Artificial para el análisis automatizado.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-medium">
                  Este proyecto se enmarca en el tema de{" "}
                  <em>"Innovaciones y sostenibilidad en el laboratorio clínico: hacia un futuro responsable"</em>,
                  representando un paso adelante en la integración de tecnología avanzada con el cuidado de la salud
                  estudiantil.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why This Research Matters */}
        <section>
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Heart className="h-6 w-6 text-green-600" />
                Por Qué Importa Esta Investigación: Dieta, Salud y Vida Universitaria
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Existe un vínculo fundamental entre la dieta y la salud general, donde la composición urinaria refleja
                el estado metabólico y fisiológico de un individuo. Esta conexión es especialmente relevante en el
                contexto universitario.
              </p>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Desafíos de los Estudiantes Universitarios:</h4>
                <ul className="list-disc list-inside text-yellow-700 space-y-1">
                  <li>Estrés académico que afecta los patrones alimenticios</li>
                  <li>Tiempo limitado para preparar comidas saludables</li>
                  <li>Acceso limitado a alimentos nutritivos</li>
                  <li>Impacto en la salud renal y urinaria</li>
                </ul>
              </div>

              <p className="text-gray-700">
                El valor del proyecto BioScope radica en su capacidad para identificar riesgos de salud y fomentar la
                conciencia sobre la nutrición equilibrada dentro de la comunidad universitaria, contribuyendo al
                bienestar integral de los estudiantes.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Objectives */}
        <section>
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Target className="h-6 w-6 text-purple-600" />
                Nuestros Objetivos: Lo Que Buscamos Lograr
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Objetivo General:</h4>
                <p className="text-purple-700">
                  Analizar los componentes urinarios observados microscópicamente, vinculando el microscopio con la
                  aplicación S-Eye a diversas IAs para diagnósticos automatizados, y correlacionar estos hallazgos con
                  los hábitos alimenticios de estudiantes de diferentes carreras en la Universidad Politécnica Estatal
                  del Carchi.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Objetivos Específicos:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>1.</strong> Recolectar muestras de orina de estudiantes de los programas de Laboratorio
                      Clínico, Actividad Física, Comercio y Educación Básica en UPEC.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>2.</strong> Vincular el microscopio eléctrico con la aplicación S-Eye a diversas IAs para
                      análisis automatizado de muestras urinarias.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>3.</strong> Obtener diagnósticos automatizados de muestras de orina, identificando
                      componentes como cristales, bacterias u otros elementos patológicos usando la app S-Eye e IAs
                      integradas.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>4.</strong> Correlacionar los hallazgos microscópicos con los hábitos alimenticios
                      específicos de cada programa académico.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Methodology */}
        <section>
          <Card className="border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Users className="h-6 w-6 text-orange-600" />
                Nuestro Enfoque: Fusionando Ciencia Clínica con Inteligencia Artificial
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                El estudio utiliza una metodología cuantitativa y observacional, siguiendo un proceso sistemático y
                riguroso.
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Pasos Clave del Proceso:</h4>
                <div className="space-y-3">
                  {[
                    "Selección de estudiantes voluntarios de las carreras especificadas con consentimiento informado",
                    "Recolección de muestras de orina en contenedores estériles, codificados anónimamente y almacenados apropiadamente",
                    "Observación microscópica usando un microscopio digital conectado vía adaptador S-Eye a un dispositivo móvil o computadora con la app S-Eye instalada",
                    "Identificación automatizada mediante IA de elementos urinarios como células epiteliales, leucocitos, glóbulos rojos, cristales y bacterias",
                    "Recolección de información dietética (incluyendo consumo de productos procesados y líquidos) a través de encuestas",
                    "Centrifugación de muestras para concentrar el sedimento urinario antes del examen microscópico",
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                      <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-orange-800 text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technology */}
        <section>
          <Card className="border-l-4 border-l-cyan-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Cpu className="h-6 w-6 text-cyan-600" />
                La Tecnología: S-Eye e IA en Acción
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-cyan-800">Adaptador S-Eye:</h4>
                  <p className="text-gray-700 text-sm">
                    El adaptador S-Eye convierte un teléfono móvil o laptop en un microscopio digital, democratizando el
                    acceso a tecnología de análisis microscópico avanzado.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-cyan-800">Aplicación S-Eye:</h4>
                  <p className="text-gray-700 text-sm">
                    La app S-Eye se utiliza para capturar e interpretar imágenes microscópicas, complementada por
                    herramientas de IA para análisis automatizado.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-50 p-4 rounded-lg">
                <h4 className="font-semibold text-cyan-800 mb-2">Ventajas de la IA:</h4>
                <ul className="list-disc list-inside text-cyan-700 space-y-1 text-sm">
                  <li>Identificación y clasificación automática de sedimentos urinarios</li>
                  <li>Resultados más exactos para profesionales de laboratorio</li>
                  <li>Reducción de errores humanos en el análisis</li>
                  <li>Procesamiento más rápido de múltiples muestras</li>
                </ul>
              </div>

              <p className="text-gray-700 text-sm">
                Este proyecto se sitúa en el contexto más amplio de la creciente integración de innovaciones
                tecnológicas e IA en la medicina de laboratorio clínico, representando el futuro de los diagnósticos
                médicos.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Expected Insights */}
        <section>
          <Card className="border-l-4 border-l-teal-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TrendingUp className="h-6 w-6 text-teal-600" />
                Resultados Esperados: Conectando Dieta, Carrera y Salud Urinaria
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700">
                El proyecto espera evidenciar variaciones en la composición urinaria entre estudiantes de diferentes
                carreras, dependiendo de sus hábitos alimenticios. Se hipotetiza que las carreras con mayor carga
                académica podrían mostrar diferentes composiciones urinarias debido a dietas desequilibradas y baja
                ingesta de líquidos.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-800">Estudiantes de Laboratorio Clínico</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-700 text-sm">
                      Se espera que tengan dietas más equilibradas, reflejándose en valores urinarios normales sin
                      patógenos y con pH y densidad balanceados.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-800">Estudiantes de Educación Física</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-700 text-sm">
                      Debido a la alta ingesta de proteínas y ejercicio, se esperan glucosa y hemoglobina normales, pero
                      posibles cristales de ácido úrico o calcio, pH más ácido y posibles cuerpos cetónicos.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-orange-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-800">
                      Estudiantes de Comercio y Educación Básica
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-orange-700 text-sm">
                      Las dietas irregulares o basadas en comida rápida podrían llevar a mayor densidad urinaria, más
                      bacterias o leucocitos, y numerosos cristales debido a desequilibrios dietéticos y estilos de vida
                      sedentarios.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Potential Impact */}
        <section>
          <Card className="border-l-4 border-l-rose-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Heart className="h-6 w-6 text-rose-600" />
                Impacto Potencial: Promoviendo una Comunidad Universitaria Más Saludable
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-rose-800">Conciencia Nutricional:</h4>
                  <p className="text-gray-700 text-sm">
                    La investigación busca generar conciencia sobre la importancia de una nutrición equilibrada y
                    saludable en el entorno universitario.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-rose-800">Estrategias Preventivas:</h4>
                  <p className="text-gray-700 text-sm">
                    Los hallazgos pueden contribuir al diseño de estrategias preventivas y educativas para fomentar
                    hábitos saludables.
                  </p>
                </div>
              </div>

              <div className="bg-rose-50 p-4 rounded-lg">
                <p className="text-rose-800 text-sm">
                  <strong>Enfoque Integral:</strong> El proyecto combina análisis clínico con un enfoque educativo y
                  preventivo, fortaleciendo el conocimiento académico y la responsabilidad social de futuros
                  profesionales.
                </p>
              </div>

              <p className="text-gray-700">
                En última instancia, el análisis ayudará a establecer relaciones entre la dieta y la salud del sistema
                urinario, promoviendo el bienestar integral de los estudiantes y contribuyendo a mejorar la calidad de
                vida en el ambiente universitario.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Team */}
        <section>
          <Card className="border-l-4 border-l-indigo-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <GraduationCap className="h-6 w-6 text-indigo-600" />
                El Equipo BioScope
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "Jenny Portilla",
                    "Lisbeth Castro",
                    "Priscila Tapia",
                    "Tiffany Fuertes",
                    "Cristian Chimarro",
                    "Ariel Montaluisa",
                  ].map((name, index) => (
                    <div key={index} className="bg-indigo-50 p-3 rounded-lg text-center">
                      <p className="font-medium text-indigo-800">{name}</p>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="text-center space-y-2">
                  <p className="text-gray-700">
                    <strong>Curso:</strong> Segundo B-T
                  </p>
                  <p className="text-gray-700">
                    <strong>Institución:</strong> Universidad Politécnica Estatal del Carchi (UPEC)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Microscope className="h-6 w-6" />
            <h3 className="text-xl font-bold">BioScope</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Innovaciones y sostenibilidad en el laboratorio clínico: hacia un futuro responsable
          </p>
          <p className="text-gray-500 text-xs mt-2">Universidad Politécnica Estatal del Carchi (UPEC) - 2024</p>
        </div>
      </footer>
    </div>
  )
}
