import Carousel from "@/components/animated/carousel"
import { ReactElement } from "react"

interface ProjectCarouselProps {
  imgData: {
    title: string
    src: string
  }[]
}

export default function ProjectCarousel({ imgData }: ProjectCarouselProps): ReactElement {
  return (
    <div className="relative w-full scale-75 overflow-hidden pb-20">
      <Carousel slides={imgData} />
    </div>
  )
}
