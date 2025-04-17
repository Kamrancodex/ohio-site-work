"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function StackedCircularFooter() {
  return (
    <footer className="bg-[#f5f5f5] py-12 border-t border-black/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 rounded-full bg-black/5 p-6 border border-black/10 shadow-sm">
            <Image src="/images/logo.png" alt="Ohio Site Works" width={60} height={27} className="w-12 h-auto" />
          </div>

          <nav className="mb-8 flex flex-wrap justify-center gap-6 text-black/80">
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="hover:text-black transition-colors"
            >
              Home
            </Link>
            <Link
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="hover:text-black transition-colors"
            >
              Services
            </Link>
            <Link
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="hover:text-black transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#counties"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("counties")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="hover:text-black transition-colors"
            >
              Counties
            </Link>
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="hover:text-black transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="mb-8 flex space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-black/10 hover:bg-black/5 hover:border-black/20"
            >
              <Facebook className="h-4 w-4 text-black/70" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-black/10 hover:bg-black/5 hover:border-black/20"
            >
              <Twitter className="h-4 w-4 text-black/70" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-black/10 hover:bg-black/5 hover:border-black/20"
            >
              <Instagram className="h-4 w-4 text-black/70" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-black/10 hover:bg-black/5 hover:border-black/20"
            >
              <Linkedin className="h-4 w-4 text-black/70" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>

          <div className="mb-8 w-full max-w-md">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-sm text-black/70 mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
            </div>
            <form className="flex space-x-2">
              <div className="flex-grow">
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  className="rounded-full border-black/10 bg-white focus-visible:ring-black"
                />
              </div>
              <Button type="submit" className="rounded-full bg-black text-white hover:bg-black/90">
                Subscribe
              </Button>
            </form>
          </div>

          <div className="mb-8 flex flex-col md:flex-row gap-6 md:gap-12 justify-center">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-black/70" />
              <a href="tel:2162734447" className="text-sm hover:text-black transition-colors">
                216-273-4447
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-black/70" />
              <a href="mailto:sales@ohiositeworks.com" className="text-sm hover:text-black transition-colors">
                sales@ohiositeworks.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-black/70" />
              <span className="text-sm">Cleveland, OH 44101</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-black/60">© {new Date().getFullYear()} Ohio Site Works. All rights reserved.</p>
            <p className="text-xs text-black/40 mt-1">Full Service Residential and Commercial Site Works Contractor</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
