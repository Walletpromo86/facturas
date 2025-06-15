import Link from "next/link"

export default function Fornecedores() {
  const fornecedores = [
    { id: 1, nome: "Fornecedor A", email: "contato@fornecedora.com", nif: "123456789" },
    { id: 2, nome: "Fornecedor B", email: "info@fornecedorb.com", nif: "987654321" },
    { id: 3, nome: "Fornecedor C", email: "vendas@fornecedorc.com", nif: "555123456" },
  ]

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Gestão de Fornecedores</h1>
          <Link href="/" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            ← Voltar
          </Link>
        </div>

        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">NIF</th>
                <th className="text-left p-4">Ações</th>
              </tr>
            </thead>
            <tbody>
              {fornecedores.map((fornecedor, index) => (
                <tr key={fornecedor.id} className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}>
                  <td className="p-4 font-semibold">{fornecedor.nome}</td>
                  <td className="p-4">{fornecedor.email}</td>
                  <td className="p-4 font-mono">{fornecedor.nif}</td>
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
