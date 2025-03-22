import { ReactElement } from "react"

export default function Footer(): ReactElement {
  const year = new Date().getFullYear()
  return <footer className="p-5 text-center">&copy; {year} Barbara Bidot</footer>
}
