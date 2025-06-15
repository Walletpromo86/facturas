import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-400">Sistema de Faturas</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/faturas" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
            <h2 className="text-xl font-semibold mb-2">📄 Faturas</h2>
            <p className="text-gray-400">Gerir faturas</p>
          </Link>

          <Link href="/fornecedores" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
            <h2 className="text-xl font-semibold mb-2">🏢 Fornecedores</h2>
            <p className="text-gray-400">Gerir fornecedores</p>
          </Link>

          <Link
            href="/transportadoras"
            className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">🚛 Transportadoras</h2>
            <p className="text-gray-400">Gerir transportadoras</p>
          </Link>
        </div>

        <div className="mt-12 bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Estatísticas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">1,234</div>
              <div className="text-sm text-gray-400">Faturas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">89</div>
              <div className="text-sm text-gray-400">Fornecedores</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">23</div>
              <div className="text-sm text-gray-400">Transportadoras</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">€45,231</div>
              <div className="text-sm text-gray-400">Total</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
