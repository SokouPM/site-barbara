import { BoxReveal } from "@/components/animated/box-reveal"
import ProjectsList from "@/components/projects-list"
import { ReactElement } from "react"

interface ProjectsProps {
  id: string
}

export default function Projects({ id }: ProjectsProps): ReactElement {
  return (
    <section className="min-h-screen w-full pt-26 md:pt-40" id={id}>
      <BoxReveal width="100%">
        <h2 className="mb-8 self-center text-center font-bold text-5xl text-primary md:mb-14">Mes Projets</h2>
      </BoxReveal>
      <ProjectsList />
    </section>
  )
}
