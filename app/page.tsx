import Image from "next/image"
import { Mail, MapPin, Phone, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ContactMarquee } from "@/components/marquee"
import { Hero } from "@/components/hero"
import { NavBar } from "@/components/nav-bar"
import { ShimmerButton } from "@/components/shimmer-button"
import { Carousel3D } from "@/components/carousel-3d"
import { StackedCircularFooter } from "@/components/footer"
import { BackgroundGradient } from "@/components/background-gradient"
import { SmoothScroll } from "@/components/smooth-scroll"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      {/* Add SmoothScroll component */}
      <SmoothScroll />

      {/* New NavBar */}
      <NavBar />

      <main className="flex-1">
        <Hero className="py-20 md:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <div className="relative inline-block mb-8">
              <Image src="/images/logo.png" alt="Ohio Site Works" width={300} height={135} />
              <div className="absolute -inset-4 border border-black/10 rounded-lg -z-10"></div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-black/0 via-black/5 to-black/0 blur-sm"></div>
              <p className="relative mt-4 text-lg md:text-xl text-black/80 leading-relaxed">
                Ohio Site Works is a Full Service Residential and Commercial Site Works Contractor specializing in
                public utilities, storm water control, land clearing, forestry, ponds, lakes, dams and much more.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {/* Contact Us Button with Shimmer */}
              <a href="#contact" className="group inline-flex items-center">
                <ShimmerButton
                  background="rgba(0, 0, 0, 1)"
                  shimmerColor="#ffffff"
                  className="font-medium text-base py-3 px-6"
                >
                  Contact Us
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </ShimmerButton>
              </a>

              {/* Our Services Button with Shimmer */}
              <a href="#services" className="group inline-flex items-center">
                <ShimmerButton
                  background="rgba(255, 255, 255, 0.05)"
                  shimmerColor="#ffffff20"
                  className="font-medium text-base py-3 px-6 text-black border border-black/20"
                >
                  Our Services
                </ShimmerButton>
              </a>
            </div>
          </div>
        </Hero>

        {/* Marquee Section */}
        <ContactMarquee />

        <section id="projects" className="py-16 bg-[#f5f5f5] relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full border-l border-black/5"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 border-t border-r border-black/5 rounded-tr-3xl"></div>
          </div>
          <div className="container relative z-10">
            <div className="flex flex-col items-center mb-12">
              <div className="inline-flex items-center justify-center mb-3">
                <div className="h-px w-8 bg-black/20"></div>
                <span className="mx-3 text-black/60 text-sm font-medium uppercase tracking-wider">Our Work</span>
                <div className="h-px w-8 bg-black/20"></div>
              </div>
              <h2 className="text-3xl font-bold text-center relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-black to-black/80">
                  Recent Projects
                </span>
              </h2>
            </div>

            {/* 3D Carousel */}
            <Carousel3D
              slides={[
                {
                  title: "Excavation Project",
                  src: "/urban-excavation-dawn.png",
                  alt: "Excavation project by Ohio Site Works",
                },
                {
                  title: "Drainage System Installation",
                  src: "/residential-drainage-install.png",
                  alt: "Drainage system installation by Ohio Site Works",
                },
                {
                  title: "Pond Construction",
                  src: "/excavator-pond-dig.png",
                  alt: "Pond construction by Ohio Site Works",
                },
                {
                  title: "Storm Water Management",
                  src: "/urban-stormwater-solution.png",
                  alt: "Storm water management by Ohio Site Works",
                },
                {
                  title: "Land Clearing",
                  src: "/forestry-clearing-operation.png",
                  alt: "Land clearing by Ohio Site Works",
                },
              ]}
            />
          </div>
        </section>

        <section id="services" className="py-20 bg-white relative">
          <div className="absolute inset-0 overflow-hidden">
            {/* Diagonal lines */}
            <svg className="absolute top-0 left-0 w-full h-full opacity-5" width="100%" height="100%">
              <pattern
                id="diagonalLines"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line x1="0" y1="0" x2="0" y2="40" stroke="black" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#diagonalLines)" />
            </svg>
            {/* Circles */}
            <div className="absolute -right-20 top-20 w-40 h-40 border border-black/10 rounded-full"></div>
            <div className="absolute -left-40 bottom-40 w-80 h-80 border border-black/5 rounded-full"></div>
          </div>
          <div className="container relative z-10">
            <div className="flex flex-col items-center mb-16">
              <div className="inline-flex items-center justify-center mb-3">
                <div className="h-px w-8 bg-black/20"></div>
                <span className="mx-3 text-black/60 text-sm font-medium uppercase tracking-wider">What We Do</span>
                <div className="h-px w-8 bg-black/20"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center">Our Primary Services</h2>
            </div>

            {/* New Service Cards with Background Gradient */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Excavating & Grading",
                  description:
                    "Professional excavation and precision grading services for residential and commercial projects.",
                  icon: "🚜",
                },
                {
                  title: "Storm & Sanitary Sewers",
                  description: "Complete installation and maintenance of storm and sanitary sewer systems.",
                  icon: "🌧️",
                },
                {
                  title: "Underground Drainage",
                  description: "Effective underground drainage solutions to prevent water damage and flooding.",
                  icon: "💧",
                },
                {
                  title: "Water Line Installation",
                  description:
                    "Expert installation of underground water lines for residential and commercial properties.",
                  icon: "🚿",
                },
                {
                  title: "Erosion Control",
                  description: "Comprehensive erosion control measures to protect your property and the environment.",
                  icon: "🌱",
                },
                {
                  title: "Lakes, Ponds and Dams",
                  description: "Custom design and construction of lakes, ponds, and dams for various applications.",
                  icon: "🏞️",
                },
              ].map((service, index) => (
                <BackgroundGradient key={index} containerClassName="h-full">
                  <div className="bg-white p-8 h-full rounded-3xl flex flex-col transition-all duration-300 hover:shadow-xl">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="h-14 w-14 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-2xl">
                        {service.icon}
                      </div>
                      <div className="h-10 w-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center">
                        <ChevronRight className="h-5 w-5 text-black/50" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-black/80 to-black/20 mb-4"></div>
                    <p className="text-black/70 flex-grow">{service.description}</p>
                    <div className="mt-6">
                      <a href="#contact" className="text-sm font-medium text-black inline-flex items-center group">
                        Request Quote
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </BackgroundGradient>
              ))}
            </div>
          </div>
        </section>

        <section id="counties" className="py-20 bg-[#f5f5f5] relative">
          <div className="absolute inset-0 overflow-hidden">
            {/* Map outline of Ohio - simplified */}
            <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M30,20 L70,25 L75,80 L25,75 Z" stroke="black" strokeWidth="0.5" fill="none" />
            </svg>
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/5 to-transparent"></div>
          </div>
          <div className="container relative z-10">
            <div className="flex flex-col items-center mb-12">
              <div className="inline-flex items-center justify-center mb-3">
                <div className="h-px w-8 bg-black/20"></div>
                <span className="mx-3 text-black/60 text-sm font-medium uppercase tracking-wider">Service Areas</span>
                <div className="h-px w-8 bg-black/20"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center">Ohio Counties We Serve</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="relative p-8 border border-black/10 rounded-lg bg-white shadow-sm">
                <div className="absolute -inset-1 bg-gradient-to-r from-black/0 via-black/5 to-black/0 blur"></div>
                <div className="relative flex flex-wrap justify-center gap-4">
                  {["Ashtabula", "Cuyahoga", "Lorain", "Medina", "Summit", "Wayne"].map((county, index) => (
                    <div
                      key={index}
                      className="bg-black/5 backdrop-blur-sm rounded-lg px-6 py-3 border border-black/10 flex items-center gap-2 transition-all hover:bg-black/10 hover:border-black/20"
                    >
                      <MapPin className="h-4 w-4 text-black/70" />
                      <span>{county}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-black/70 text-center">
                  Based in Ohio, we provide our services across these counties. If you're outside these areas, please
                  contact us to discuss your project.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white relative">
          <div className="absolute inset-0 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 border-l border-t border-black/5 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 border-r border-b border-black/5 rounded-tr-3xl"></div>
            {/* Dots pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-5" width="100%" height="100%">
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="black" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
              <div>
                <div className="inline-flex items-center mb-3">
                  <div className="h-px w-8 bg-black/20"></div>
                  <span className="ml-3 text-black/60 text-sm font-medium uppercase tracking-wider">Contact Us</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch With Us</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-black to-black/20 mb-6"></div>
                <p className="text-black/70 mb-8">
                  Fill out the form or contact us by phone or email. We'll get back to you as soon as possible.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-black/70" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-black/70">
                        <a href="tel:2162734447" className="hover:text-black transition-colors">
                          216-273-4447
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-black/70" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-black/70">
                        <a href="mailto:sales@ohiositeworks.com" className="hover:text-black transition-colors">
                          sales@ohiositeworks.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-black/70" />
                    </div>
                    <div>
                      <h3 className="font-medium">Office</h3>
                      <p className="text-black/70">123 Construction Way, Cleveland, OH 44101</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-black/0 via-black/5 to-black/0 blur"></div>
                <div className="relative bg-white p-6 rounded-lg border border-black/10 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium text-black/70">
                          First name
                        </label>
                        <Input
                          id="first-name"
                          placeholder="John"
                          className="bg-black/5 border-black/10 text-black placeholder:text-black/40 focus:border-black/30"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium text-black/70">
                          Last name
                        </label>
                        <Input
                          id="last-name"
                          placeholder="Doe"
                          className="bg-black/5 border-black/10 text-black placeholder:text-black/40 focus:border-black/30"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-black/70">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        className="bg-black/5 border-black/10 text-black placeholder:text-black/40 focus:border-black/30"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-black/70">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="bg-black/5 border-black/10 text-black placeholder:text-black/40 focus:border-black/30"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-black/70">
                        Project Details
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        className="min-h-[120px] bg-black/5 border-black/10 text-black placeholder:text-black/40 focus:border-black/30"
                      />
                    </div>

                    <ShimmerButton type="submit" className="w-full font-medium">
                      Send Message
                    </ShimmerButton>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* New Stacked Circular Footer */}
      <StackedCircularFooter />
    </div>
  )
}
