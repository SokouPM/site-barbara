import { BoxReveal } from "@/components/animated/box-reveal"
import { ReactElement } from "react"
import { LuFile, LuHouse, LuMail, LuPhone } from "react-icons/lu"
import { TbMailUp } from "react-icons/tb"

interface ContactProps {
  id: string
}

export default function Contact({ id }: ContactProps): ReactElement {
  return (
    <section className="min-h-screen w-full pt-26 md:pt-40" id={id}>
      <BoxReveal width="100%">
        <h2 className="mb-8 self-center text-center font-bold text-5xl text-primary md:mb-14">Me contacter</h2>
      </BoxReveal>
      <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:gap-20 lg:flex-row">
        <div className="flex gap-10 md:w-1/2 md:gap-20">
          <a
            href="/contact/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="1/3 text-center transition-all hover:scale-110"
          >
            <img src="/contact/cv.png" alt="CV de Barbara Bidot, Technicienne lumière" className="mb-10 shadow-pic" />
          </a>
          <a
            href="/contact/fiche-renseignement.pdf"
            target="_blank"
            rel="noreferrer"
            className="1/2 text-center transition-all hover:scale-110"
          >
            <img
              src="/contact/fiche-renseignement.png"
              alt="Fiche de renseignements de Barbara Bidot, Technicienne lumière"
              className="mb-10 shadow-pic"
            />
          </a>
        </div>
        <div className="mb-10 w-full md:mb-0 md:w-2/3">
          <BoxReveal width="100%">
            <div className="bg-primary p-10 text-primary-foreground">
              <BoxReveal>
                <h3 className="mb-5 font-bold text-3xl">Mes coordonnées</h3>
              </BoxReveal>
              <BoxReveal>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <LuPhone className="h-8 w-8 overflow-visible rounded-full bg-background p-2 text-primary" />
                    07.81.50.22.00
                  </li>
                  <li className="flex items-center gap-2">
                    <LuMail className="h-8 w-8 overflow-visible rounded-full bg-background p-2 text-primary" />
                    <a href="mailto:barbarabidot1994@gmail.com" className="flex items-center gap-1 underline">
                      barbarabidot1994@gmail.com <TbMailUp className="text-xs" />
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <LuFile className="h-8 w-8 overflow-visible rounded-full bg-background p-2 text-primary" />
                    <span className="hidden md:block">Numéro France travail spectacle disponible sur demande</span>
                    <span className="block md:hidden">Num. France Travail spect. sur demande</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <LuHouse className="h-8 w-8 overflow-visible rounded-full bg-background p-2 text-primary" />
                    Châtillon, 92320
                  </li>
                </ul>
              </BoxReveal>
            </div>
          </BoxReveal>
        </div>
      </div>
    </section>
  )
}
