import { ReactElement } from "react"

export default function Footer(): ReactElement {
  const year = new Date().getFullYear()
  return (
    <footer className="w-full border-foreground border-t-1 bg-background/80 p-4 text-center">
      &copy; {year} Barbara Bidot
    </footer>
  )
}
