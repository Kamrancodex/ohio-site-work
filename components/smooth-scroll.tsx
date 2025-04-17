"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    // Function to handle smooth scrolling
    const handleSmoothScroll = (e: MouseEvent) => {
      // Check if the clicked element is an anchor tag with a hash
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (!anchor) return

      const href = anchor.getAttribute("href")

      // Only process internal links that start with #
      if (!href || !href.startsWith("#")) return

      // Get the target element
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (!targetElement) return

      // Prevent default behavior
      e.preventDefault()

      // Scroll smoothly to the target
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Update URL without scrolling
      window.history.pushState(null, "", href)
    }

    // Add event listener to the document
    document.addEventListener("click", handleSmoothScroll)

    // Clean up
    return () => {
      document.removeEventListener("click", handleSmoothScroll)
    }
  }, [])

  return null
}
