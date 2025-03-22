import { ReactElement } from "react"

export default function Home(): ReactElement {
  return (
    <main>
      <section className="flex h-screen w-full items-center justify-center" id="about">
        A propos
      </section>
      <section className="flex h-screen w-full items-center justify-center" id="projects">
        Projets
      </section>
      <section className="flex h-screen w-full items-center justify-center" id="contact">
        Contact
      </section>
    </main>
  )
}
