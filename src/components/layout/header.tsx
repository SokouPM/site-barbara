"use client"

import Nav from "@/components/layout/nav"
import useWindowSize from "@/hooks/use-window-size"
import Image from "next/image"
import { ReactElement } from "react"

export default function Header(): ReactElement {
  let imgSize = 70

  if (useWindowSize() < 640) {
    imgSize = 40
  }

  return (
    <header className="fixed top-0 z-10 flex w-full items-center justify-between border-foreground border-b-1 bg-background/80 p-4">
      <div className="flex items-end justify-center gap-4">
        <Image src="/logo.svg" alt="Logo de Barbara Bidot, Technicienne lumière" width={imgSize} height={imgSize} />
        <h1 className="sr-only font-black text-4xl md:not-sr-only">barbara</h1>
      </div>
      <Nav />
    </header>
  )
}
