import { ReactElement } from "react"

interface ProjectsProps {
  id: string
}

export default function Projects({ id }: ProjectsProps): ReactElement {
  return (
    <section className="min-h-screen w-full pt-26 md:pt-40" id={id}>
      Projets
    </section>
  )
}
