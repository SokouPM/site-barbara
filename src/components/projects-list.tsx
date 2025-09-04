"use client"

import ProjectCarousel from "@/components/project-carousel"
import { Button } from "@/components/ui/button"
import absolutionImages from "@/data/projects/absolution"
import { cn } from "@/lib/utils"
import { ReactElement, useState } from "react"

const projects = [
  {
    title: "Absolution",
    images: absolutionImages,
  },
]

export default function ProjectsList(): ReactElement {
  const [selectedProject, setSelectedProject] = useState(projects[0])

  if (projects.length === 0) {
    return <p className="text-center">Pas de projets disponibles pour le moment :(</p>
  }

  if (projects.length === 1) {
    return (
      <>
        <h3 className="-mb-8 text-center font-bold text-3xl text-primary">{selectedProject.title}</h3>
        <ProjectCarousel imgData={selectedProject.images} />
      </>
    )
  }

  return (
    <>
      <div className="mb-8 flex justify-center space-x-4">
        {projects.map((project) => (
          <Button
            key={project.title}
            onClick={(): void => setSelectedProject(project)}
            disabled={project.title === selectedProject.title}
            className={cn(project.title === selectedProject.title && "cursor-not-allowed")}
          >
            {project.title}
          </Button>
        ))}
      </div>
      <h3 className="-mb-8 text-center font-bold text-3xl text-primary">{selectedProject.title}</h3>
      <ProjectCarousel imgData={selectedProject.images} />
    </>
  )
}
