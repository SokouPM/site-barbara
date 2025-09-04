import About from "@/components/sections/about"
import Contact from "@/components/sections/contact"
import Projects from "@/components/sections/projects"
import { ReactNode } from "react"

interface Section {
  label: string
  id: string
  component: ReactNode
}

const sections: Section[] = [
  {
    label: "À propos",
    id: "about",
    component: <About id="about" />,
  },
  {
    label: "Projets",
    id: "projects",
    component: <Projects id="projects" />,
  },
  {
    label: "Contact",
    id: "contact",
    component: <Contact id="contact" />,
  },
]

export default sections
