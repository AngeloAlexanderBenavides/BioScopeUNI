// Tipos para la API
export interface AnalysisResult {
  components: {
    epithelialCells: boolean
    leukocytes: string
    redBloodCells: boolean
    bacteria: boolean
    crystals: boolean
    crystalTypes?: string[]
  }
  analysis: string
  recommendation?: string
}

// Función para analizar una imagen
export async function analyzeImage(file: File): Promise<AnalysisResult> {
  const formData = new FormData()
  formData.append("file", file)

  const response = await fetch("https://bioscope-277270001088.us-central1.run.app/analyze", {
    method: "POST",
    body: formData,
  })

  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`)
  }

  return await response.json()
}

// Función para obtener información de la API
export async function getApiInfo() {
  const response = await fetch("https://bioscope-277270001088.us-central1.run.app/info")

  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`)
  }

  return await response.json()
}
