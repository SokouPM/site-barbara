"use client"

import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import menu from "@/data/menu"
import { ReactElement } from "react"

export default function Nav(): ReactElement {
  const handleScroll = (sectionId: string): void => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
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
