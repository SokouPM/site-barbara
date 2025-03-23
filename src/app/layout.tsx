import type { Metadata } from "next"
import "./globals.css"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { ReactElement, ReactNode } from "react"

export const metadata: Metadata = {
  title: "Technicienne spectacle lumière | Barbara Bidot",
  description: "Portfolio et CV de Barbara Bidot, technicienne spectacle lumière",
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): ReactElement {
  return (
    <html lang="fr">
      <body className="relative flex min-h-screen w-screen flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
