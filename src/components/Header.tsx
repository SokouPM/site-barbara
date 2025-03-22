import Nav from "@/components/Nav"
import { ReactElement } from "react"

export default function Header(): ReactElement {
  return (
    <header className="fixed top-0 z-10 flex w-full items-center justify-between bg-white p-4">
      <h1>Barbara Bidot</h1>
      <Nav />
    </header>
  )
}
