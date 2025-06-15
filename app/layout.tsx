import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sistema de Faturas",
  description: "Sistema de gestão de faturas",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  )
}
