"use client"

import { ReactElement } from "react"

export default function Nav(): ReactElement {
  const handleScroll = (sectionId: string): void => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <button type="button" className="cursor-pointer p-3" onClick={(): void => handleScroll("about")}>
            À propos
          </button>
        </li>
        <li>
          <button type="button" className="cursor-pointer p-3" onClick={(): void => handleScroll("projects")}>
            Projets
          </button>
        </li>
        <li>
          <button type="button" className="cursor-pointer p-3" onClick={(): void => handleScroll("contact")}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  )
}
