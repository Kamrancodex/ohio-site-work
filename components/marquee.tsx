"use client"

import React, { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { Mail, Phone } from "lucide-react"

interface MarqueeProps {
  className?: string
  children?: React.ReactNode
  speed?: number
  pauseOnHover?: boolean
}

export function Marquee({ className, children, speed = 50, pauseOnHover = true }: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.offsetWidth)
    }

    const handleResize = () => {
      if (contentRef.current) {
        setContentWidth(contentRef.current.offsetWidth)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [children])

  const duration = contentWidth / speed

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      ref={marqueeRef}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: isPaused ? "none" : `marquee ${duration}s linear infinite`,
          transform: isPaused ? "translateX(0)" : undefined,
        }}
      >
        <div ref={contentRef} className="flex items-center">
          {children}
        </div>
        <div className="flex items-center" aria-hidden="true">
          {children}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${contentWidth}px);
          }
        }
      `}</style>
    </div>
  )
}

export function ContactMarquee() {
  return (
    <div className="relative bg-black py-4 overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0">
        <div className="h-full w-full grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(10,1fr)]">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="relative">
              <div className="absolute inset-0 border-r border-b border-white/10"></div>
              {i % 5 === 0 && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white/20 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Marquee className="py-2">
        <div className="flex items-center gap-12 mx-8">
          <div className="flex items-center gap-4">
            <Mail className="h-8 w-8 text-white" />
            <span className="londrina-outline text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider">
              EMAIL US AT: SALES@OHIOSITEWORKS.COM
            </span>
          </div>
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="flex items-center gap-4">
            <Phone className="h-8 w-8 text-white" />
            <span className="londrina-outline text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider">
              216-273-4447
            </span>
          </div>
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </Marquee>
    </div>
  )
}
