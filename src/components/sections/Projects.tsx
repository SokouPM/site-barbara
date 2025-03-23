import { ReactElement } from "react"

interface ProjectsProps {
  id: string
}

export default function Projects({ id }: ProjectsProps): ReactElement {
  return (
    <section className="flex min-h-screen w-full items-center justify-center" id={id}>
      Projets
    </section>
  )
}
