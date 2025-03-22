"use client"

import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import menu from "@/data/menu"
import { ReactElement, useEffect, useState } from "react"
import { LuMenu } from "react-icons/lu"

export default function Nav(): ReactElement {
  const [windowWidth, setWindowWidth] = useState<number>(0)

  useEffect((): (() => void) => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return (): void => window.removeEventListener("resize", handleResize)
  }, [])
  const handleScroll = (sectionId: string): void => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (windowWidth < 640) {
    return (
      <Button variant="outline" size="icon">
        <LuMenu />
      </Button>
    )
  }

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-2">
        {menu.map(
          (navItem): ReactElement => (
            <NavigationMenuItem key={navItem.id} asChild>
              <Button variant="ghost" className="cursor-pointer p-3" onClick={(): void => handleScroll(navItem.id)}>
                {navItem.label}
              </Button>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
