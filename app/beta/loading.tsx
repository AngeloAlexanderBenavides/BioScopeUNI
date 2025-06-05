import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
      <h2 className="mt-4 text-xl font-semibold text-gray-700">Cargando BioScope Beta...</h2>
    </div>
  )
}
