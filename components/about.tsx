"use client"

import { useEffect, useRef } from "react"

export default function About() {
  const aboutRef = useRef<HTMLElement>(null)

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="o-nas" ref={aboutRef} className="fade-in section-padding bg-white">
      <div className="container-max">
        <h2 className="section-title">O nas</h2>
        <p className="section-subtitle">Doświadczenie i holistyczne podejście do zdrowia</p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="3.jpg" alt="Nasz gabinet" className="rounded-2xl shadow-lg w-full h-auto" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Ponad 15 lat doświadczenia w naturalnym leczeniu</h3>
            <p className="text-gray-600 text-lg">
              pół składa się z wykwalifikowanych terapeutów z wieloletnim doświadczeniem w dziedzinie medycyny
              naturalnej. Specjalizujemy się w holistycznym podejściu do zdrowia, łącząc tradycyjne metody z
              nowoczesnymi technikami terapeutycznymi.
            </p>
            <p className="text-gray-600 text-lg">
              Wierzymy, że ciało ma naturalną zdolność do samouzdrawiania. Naszą rolą jest wspieranie tego procesu
              poprzez delikatne, ale skuteczne terapie, które przywracają równowagę i harmonię w organizmie.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-green-100 px-4 py-2 rounded-full">
                <span className="text-green-800 font-semibold">Certyfikowani terapeuci</span>
              </div>
              <div className="bg-blue-100 px-4 py-2 rounded-full">
                <span className="text-blue-800 font-semibold">Indywidualne podejście</span>
              </div>
              <div className="bg-purple-100 px-4 py-2 rounded-full">
                <span className="text-purple-800 font-semibold">Naturalne metody</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
