import About from "@/components/sections/About"
import Contact from "@/components/sections/Contact"
import Projects from "@/components/sections/Projects"
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
    label: "Contact",
    id: "contact",
    component: <Contact id="contact" />,
  },
  // {
  //   label: "Projets",
  //   id: "projects",
  //   component: <Projects id="projects" />,
  // },
]

export default sections
