import Link from "next/link"

export default function Faturas() {
  const faturas = [
    { id: "FAT-001", fornecedor: "Fornecedor A", valor: "€1,234.50", status: "Paga" },
    { id: "FAT-002", fornecedor: "Fornecedor B", valor: "€856.30", status: "Pendente" },
    { id: "FAT-003", fornecedor: "Fornecedor C", valor: "€2,100.00", status: "Vencida" },
  ]

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Gestão de Faturas</h1>
          <Link href="/" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            ← Voltar
          </Link>
        </div>

        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="text-left p-4">ID</th>
                <th className="text-left p-4">Fornecedor</th>
                <th className="text-left p-4">Valor</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Ações</th>
              </tr>
            </thead>
            <tbody>
              {faturas.map((fatura, index) => (
                <tr key={fatura.id} className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}>
                  <td className="p-4 font-mono">{fatura.id}</td>
                  <td className="p-4">{fatura.fornecedor}</td>
                  <td className="p-4 font-semibold">{fatura.valor}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        fatura.status === "Paga"
                          ? "bg-green-600"
                          : fatura.status === "Pendente"
                            ? "bg-yellow-600"
                            : "bg-red-600"
                      }`}
                    >
                      {fatura.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm mr-2">Ver</button>
                    <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm">Apagar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
