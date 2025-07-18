"use client"

import { useEffect, useRef } from "react"

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="fade-in min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 container-max text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Naturalne metody leczenia</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Profesjonalne terapie manualne, kręgarstwo i leczenie pijawkami w Twoim mieście
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#kontakt" className="btn-primary">
            Umów wizytę
          </a>
          <a href="#uslugi" className="btn-secondary">
            Nasze usługi
          </a>
        </div>
      </div>
    </section>
  )
}
