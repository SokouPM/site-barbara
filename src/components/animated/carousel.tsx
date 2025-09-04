"use client"

import { Button } from "@/components/ui/button"
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react"
import React, { useState, useRef, useId, useEffect, ReactElement } from "react"

interface SlideData {
  title: string
  src: string
}

interface SlideProps {
  slide: SlideData
  index: number
  current: number
  handleSlideClick: (index: number) => void
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps): ReactElement => {
  const slideRef = useRef<HTMLLIElement>(null)

  const xRef = useRef(0)
  const yRef = useRef(0)
  // @ts-ignore
  const frameRef = useRef<number>()

  useEffect(() => {
    const animate = (): void => {
      if (!slideRef.current) return

      const x = xRef.current
      const y = yRef.current

      slideRef.current.style.setProperty("--x", `${x}px`)
      slideRef.current.style.setProperty("--y", `${y}px`)

      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)

    return (): void => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  const handleMouseMove = (event: React.MouseEvent): void => {
    const el = slideRef.current
    if (!el) return

    const r = el.getBoundingClientRect()
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2))
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2))
  }

  const handleMouseLeave = (): void => {
    xRef.current = 0
    yRef.current = 0
  }

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>): void => {
    event.currentTarget.style.opacity = "1"
  }

  const { src, title } = slide

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <li
        ref={slideRef}
        className="relative z-10 mx-[4vmin] flex h-[70vmin] w-[70vmin] flex-1 flex-col items-center justify-center text-center text-white opacity-100 transition-all duration-300 ease-in-out "
        onClick={(): void => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: current !== index ? "scale(0.98) rotateX(8deg)" : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 h-full w-full overflow-hidden rounded-[1%] bg-[#1D1F2F] transition-all duration-150 ease-out"
          style={{
            // biome-ignore lint/nursery/noSecrets: <explanation>
            transform: current === index ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)" : "none",
          }}
        >
          <img
            className="absolute inset-0 h-[120%] w-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
            style={{
              opacity: current === index ? 1 : 0.5,
            }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />
          {current === index && <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />}
        </div>
      </li>
    </div>
  )
}

interface CarouselControlProps {
  type: string
  title: string
  handleClick: () => void
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps): ReactElement => {
  return (
    <Button onClick={handleClick} size="icon" className="mx-3">
      {type === "previous" && <IconArrowNarrowLeft />}
      {type === "next" && <IconArrowNarrowRight />}
    </Button>
  )
}

interface CarouselProps {
  slides: SlideData[]
}

export default function Carousel({ slides }: CarouselProps): ReactElement {
  const [current, setCurrent] = useState(0)

  const handlePreviousClick = (): void => {
    const previous = current - 1
    setCurrent(previous < 0 ? slides.length - 1 : previous)
  }

  const handleNextClick = (): void => {
    const next = current + 1
    setCurrent(next === slides.length ? 0 : next)
  }

  const handleSlideClick = (index: number): void => {
    if (current !== index) {
      setCurrent(index)
    }
  }

  const id = useId()

  return (
    <div className="relative mx-auto h-[70vmin] w-[70vmin]" aria-labelledby={`carousel-heading-${id}`}>
      <ul
        className="absolute mx-[-4vmin] flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <Slide key={index} slide={slide} index={index} current={current} handleSlideClick={handleSlideClick} />
        ))}
      </ul>

      <div className="absolute top-[calc(100%+1rem)] flex w-full justify-center">
        <CarouselControl type="previous" title="Go to previous slide" handleClick={handlePreviousClick} />

        <CarouselControl type="next" title="Go to next slide" handleClick={handleNextClick} />
      </div>
    </div>
  )
}
