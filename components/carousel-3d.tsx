"use client"

import type React from "react"

import { useState, useRef, useId, useEffect } from "react"
import { ArrowRight } from "lucide-react"

interface SlideData {
  title: string
  button?: string
  src: string
  alt?: string
}

interface SlideProps {
  slide: SlideData
  index: number
  current: number
  handleSlideClick: (index: number) => void
  isNext?: boolean
  isPrev?: boolean
}

const Slide = ({ slide, index, current, handleSlideClick, isNext, isPrev }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const xRef = useRef(0)
  const yRef = useRef(0)
  const frameRef = useRef<number>()

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return

      const x = xRef.current
      const y = yRef.current

      slideRef.current.style.setProperty("--x", `${x}px`)
      slideRef.current.style.setProperty("--y", `${y}px`)

      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current
    if (!el) return

    const r = el.getBoundingClientRect()
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2))
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2))
  }

  const handleMouseLeave = () => {
    xRef.current = 0
    yRef.current = 0
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1"
  }

  const { src, button, title, alt } = slide

  // Determine slide width and position based on its state
  const getSlideClasses = () => {
    if (current === index) {
      return "w-[70%] z-30 opacity-100"
    } else if (isNext || isPrev) {
      return "w-[15%] z-20 opacity-80"
    } else {
      return "w-[10%] z-10 opacity-50"
    }
  }

  return (
    <li
      ref={slideRef}
      className={`flex flex-col items-center justify-center relative text-center text-white transition-all duration-500 ease-in-out h-[50vh] mx-1 ${getSlideClasses()}`}
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: current !== index ? "scale(0.98)" : "scale(1)",
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-lg overflow-hidden transition-all duration-300 ease-out shadow-lg"
        style={{
          transform:
            current === index && isHovered ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)" : "none",
        }}
      >
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-600 ease-in-out"
          style={{
            opacity: 1,
          }}
          alt={alt || title}
          src={src || "/placeholder.svg"}
          onLoad={imageLoaded}
          loading="eager"
          decoding="sync"
        />
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
            current === index && isHovered ? "opacity-60" : "opacity-0"
          }`}
        />
      </div>

      <article
        className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${
          current === index && isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold relative text-white">{title}</h2>
        {button && (
          <div className="flex justify-center mt-4">
            <button className="px-4 py-2 w-fit mx-auto sm:text-sm text-black bg-white h-12 border border-transparent text-xs flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              {button}
            </button>
          </div>
        )}
      </article>
    </li>
  )
}

interface CarouselControlProps {
  type: string
  title: string
  handleClick: () => void
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-black focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <ArrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  )
}

interface Carousel3DProps {
  slides: SlideData[]
}

export function Carousel3D({ slides }: Carousel3DProps) {
  const [current, setCurrent] = useState(0)

  const handlePreviousClick = () => {
    const previous = current - 1
    setCurrent(previous < 0 ? slides.length - 1 : previous)
  }

  const handleNextClick = () => {
    const next = current + 1
    setCurrent(next === slides.length ? 0 : next)
  }

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index)
    }
  }

  const id = useId()

  // Calculate previous and next indices
  const prevIndex = current === 0 ? slides.length - 1 : current - 1
  const nextIndex = current === slides.length - 1 ? 0 : current + 1

  return (
    <div className="relative w-full h-[60vh] mx-auto overflow-hidden" aria-labelledby={`carousel-heading-${id}`}>
      <ul className="absolute flex w-full h-full items-center justify-center transition-all duration-700 ease-in-out">
        {slides.map((slide, index) => {
          // Determine if this slide is the previous or next one
          const isPrev = index === prevIndex
          const isNext = index === nextIndex

          // Calculate the order to display slides
          let order = index - current
          if (order < 0) order += slides.length

          return (
            <Slide
              key={index}
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={handleSlideClick}
              isPrev={isPrev}
              isNext={isNext}
              // Use order for positioning
              style={{ order }}
            />
          )
        })}
      </ul>

      <div className="absolute flex justify-center w-full bottom-4 z-40">
        <CarouselControl type="previous" title="Go to previous slide" handleClick={handlePreviousClick} />
        <CarouselControl type="next" title="Go to next slide" handleClick={handleNextClick} />
      </div>
    </div>
  )
}
