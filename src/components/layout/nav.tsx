"use client"

import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import menu from "@/data/menu"
import useWindowSize from "@/hooks/use-window-size"
import { ReactElement, useEffect, useState } from "react"
import { LuMenu, LuX } from "react-icons/lu"

export default function Nav(): ReactElement {
  const handleScroll = (sectionId: string): void => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (useWindowSize() < 640) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon">
            <LuMenu className="size-4" />
            <span className="sr-only">Ouvrir le menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top" customCloseButton className="w-full">
          <SheetHeader className="mb-5">
            <SheetClose className="absolute top-4 right-4" asChild>
              <Button size="icon">
                <LuX className="size-4" />
                <span className="sr-only">Fermer le menu</span>
              </Button>
            </SheetClose>
            <SheetTitle className="pt-1 font-normal">Barbara Bidot</SheetTitle>
            <SheetDescription />
          </SheetHeader>
          <ul className="mb-4 flex w-full flex-col items-center gap-4">
            {menu.map(
              (navItem): ReactElement => (
                <li key={navItem.id} className="w-full px-4">
                  <Button className="w-full cursor-pointer p-3" onClick={(): void => handleScroll(navItem.id)}>
                    {navItem.label}
                  </Button>
                </li>
              ),
            )}
          </ul>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-2">
        {menu.map(
          (navItem): ReactElement => (
            <NavigationMenuItem key={navItem.id} asChild>
              <Button className="cursor-pointer p-3" onClick={(): void => handleScroll(navItem.id)}>
                {navItem.label}
              </Button>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
