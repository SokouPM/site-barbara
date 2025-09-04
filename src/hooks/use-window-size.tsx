"use client"

import { useEffect, useState } from "react"

const useWindowSize = (): number => {
  const [windowWidth, setWindowWidth] = useState<number>(0)

  useEffect((): (() => void) => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return (): void => window.removeEventListener("resize", handleResize)
  }, [])

  return windowWidth
}

export default useWindowSize
