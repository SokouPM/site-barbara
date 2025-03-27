import { BoxReveal } from "@/components/animated/BoxReveal"
import { ReactElement } from "react"

interface AboutProps {
  id: string
}

export default function About({ id }: AboutProps): ReactElement {
  return (
    <section className="min-h-screen w-full pt-26 md:pt-40" id={id}>
      <BoxReveal width="100%">
        <h2 className="mb-8 self-center text-center font-bold text-5xl text-primary md:mb-14">À propos de moi</h2>
      </BoxReveal>
      <div className="flex flex-col items-center justify-center gap-10 md:gap-20 lg:flex-row">
        <img src="/barbara.jpeg" alt="Barbara Bidot, Technicienne lumière" className="w-2/3 shadow-pic lg:w-2/5" />
        <div className="flex w-full flex-col gap-5">
          <BoxReveal>
            <div className="bg-primary p-10 text-primary-foreground">
              <BoxReveal>
                <h3 className="mb-5 font-bold text-3xl">Qui suis-je ?</h3>
              </BoxReveal>
              <BoxReveal>
                <p>
                  Passionnée par la lumière, cette danse silencieuse qui façonne l’invisible, je mets mon expertise au
                  service de la scène. Mon rôle va bien au-delà de l’installation des équipements lumineux : chaque
                  faisceau, chaque ombre est pensé pour magnifier l’instant. La lumière ne se contente pas d’éclairer,
                  elle transforme l’espace, intensifie les émotions et donne vie aux instants précieux. Dans l’ombre de
                  la technique, j’orchestre cette magie lumineuse, révélant toute sa puissance et sa beauté.
                </p>
              </BoxReveal>
            </div>
          </BoxReveal>
          <BoxReveal width="100%" boxColor="bg-background">
            <h3 className="w-full bg-primary py-5 text-center font-bold text-3xl text-primary-foreground">
              Mes compétences
            </h3>
          </BoxReveal>
          <BoxReveal width="100%">
            <ul className="list-disc pl-5">
              <li>Préparation, stockage et entretien du matériel</li>
              <li>Entretien et organisation de la salle</li>
              <li>Montage des équipements lumière et configuration du système DMX</li>
              <li>Focus lumière pour un rendu optimal</li>
              <li>Installation du circuit électrique en suivant les consignes du chef électro ou du régisseur</li>
              <li>Mise en place d’écrans LCD, de cyclos et de vidéoprojecteurs</li>
            </ul>
          </BoxReveal>
        </div>
      </div>
    </section>
  )
}
