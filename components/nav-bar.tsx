"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { type LucideIcon, Home, Wrench, MapPin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items?: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const defaultItems: NavItem[] = [
    { name: "Home", url: "/", icon: Home },
    { name: "Services", url: "#services", icon: Wrench },
    { name: "Counties", url: "#counties", icon: MapPin },
    { name: "Contact", url: "#contact", icon: Mail },
  ]

  const navItems = items || defaultItems
  const [activeTab, setActiveTab] = useState(navItems[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      // Get all section elements
      const sections = document.querySelectorAll("section[id]")

      // Find the current section
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id")

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const matchingItem = navItems.find(
            (item) => item.url === `#${sectionId}` || (sectionId === null && item.url === "/"),
          )

          if (matchingItem) {
            setActiveTab(matchingItem.name)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  // Handle smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, itemName: string) => {
    e.preventDefault()
    setActiveTab(itemName)

    const href = e.currentTarget.getAttribute("href")
    if (!href || href === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      return
    }

    if (href.startsWith("#")) {
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })

        // Update URL without scrolling
        window.history.pushState(null, "", href)
      }
    }
  }

  return (
    <div className={cn("fixed top-6 left-1/2 -translate-x-1/2 z-50", className)}>
      <div className="flex items-center gap-3 bg-white/10 border border-black/20 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={(e) => handleNavClick(e, item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-black/80 hover:text-black",
                isActive && "bg-black/5 text-black",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-black/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-black rounded-t-full">
                    <div className="absolute w-12 h-6 bg-black/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-black/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-black/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
