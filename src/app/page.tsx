import { ReactElement } from "react"

export default function Home(): ReactElement {
  return (
    <main>
      <section className="h-screen w-full bg-red-300" id="about">
        A propos
      </section>
      <section className="h-screen w-full bg-blue-300" id="projects">
        Projets
      </section>
      <section className="h-screen w-full bg-green-300" id="contact">
        Contact
      </section>
    </main>
  )
}
