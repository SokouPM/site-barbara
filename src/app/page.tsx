import sections from "@/data/sections"
import { Fragment, ReactElement } from "react"

export default function Home(): ReactElement {
  return (
    <main className="w-full flex-1 px-5 lg:px-20">
      {sections.map(
        (section, index): ReactElement => (
          <Fragment key={section.id}>
            {section.component}
            {index !== sections.length - 1 && <hr className="border-primary/50" />}
          </Fragment>
        ),
      )}
    </main>
  )
}
