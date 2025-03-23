import sections from "@/data/sections"

interface MenuItem {
  label: string
  id: string
}

const menu: MenuItem[] = sections.map(({ label, id }): MenuItem => ({ label, id }))

export default menu
