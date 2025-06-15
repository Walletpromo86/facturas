"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Filter, Plus, Search, Download } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { MainNavigation } from "@/components/main-navigation"
import { useData } from "@/contexts/data-context"

export default function TransportersPage() {
  const { transporters } = useData()

  return (
    <div className="flex min-h-screen w-full flex-col">
      <MainNavigation />
      <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight neon-text bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
            Transportadoras
          </h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10">
              <Download className="mr-2 h-4 w-4" />
              Exportar Lista
            </Button>
            <Link href="/transporters/new">
              <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white">
                <Plus className="mr-2 h-4 w-4" />
                Nova Transportadora
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-neon-purple" />
            <Input
              type="search"
              placeholder="Pesquisar transportadoras..."
              className="w-full pl-8 bg-muted/50 border-neon-purple/30 focus:border-neon-purple focus:ring-neon-purple/30"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filtrar</span>
          </Button>
        </div>

        <Card className="futuristic-card">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-b-neon-purple/20 hover:bg-muted/30">
                  <TableHead className="text-neon-blue">Nome</TableHead>
                  <TableHead className="text-neon-blue">Contacto</TableHead>
                  <TableHead className="text-neon-blue">Email</TableHead>
                  <TableHead className="text-neon-blue">Telefone</TableHead>
                  <TableHead className="text-neon-blue">NIF</TableHead>
                  <TableHead className="text-right text-neon-blue">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transporters.map((transporter) => (
                  <TableRow key={transporter.id}>
                    <TableCell className="font-medium">{transporter.name}</TableCell>
                    <TableCell>{transporter.contact}</TableCell>
                    <TableCell>{transporter.email}</TableCell>
                    <TableCell>{transporter.phone}</TableCell>
                    <TableCell>{transporter.vat}</TableCell>
                    <TableCell className="text-right">
                      <Link href={`/transporters/${transporter.id}`}>
                        <Button variant="ghost" size="sm">
                          Ver
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
