import sections from "@/data/sections"
import { Fragment, ReactElement } from "react"

export default function Home(): ReactElement {
  return (
    <main className="px-5 lg:px-20">
      {sections.map(
        (section): ReactElement => (
          <Fragment key={section.id}>{section.component}</Fragment>
        ),
      )}
    </main>
  )
}
