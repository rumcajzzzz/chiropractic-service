"use client"

import { useEffect, useRef } from "react"

export default function Services() {
  const servicesRef = useRef<HTMLElement>(null)

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

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: "Kręgarstwo",
      description:
        "Profesjonalne korekcje kręgosłupa i stawów. Skuteczne leczenie bólów pleców, szyi i kręgosłupa metodami manualnymi.",
      icon: "🦴",
      image: "12.jpg",
    },
    {
      title: "Hirudoterapia – stawianie pijawek",
      description:
        "Naturalna metoda leczenia pijawkami medycznymi, wspomagająca oczyszczanie organizmu, poprawę krążenia i regenerację tkanek.",
      icon: "🩺",
      image: "10.jpg",
    },
    {
      title: "Terapia manualna",
      description:
        "Delikatne techniki manualne wspierające naturalne procesy regeneracyjne organizmu. Leczenie napięć mięśniowych.",
      icon: "👐",
      image: "9.jpg",
    },
    {
      title: "Konsultacje",
      description:
        "Kompleksowa diagnostyka i dobór odpowiedniej terapii. Indywidualne podejście do każdego pacjenta.",
      icon: "💬",
      image: "11.jpg",
    }
  ]

  return (
    <section id="uslugi" ref={servicesRef} className="fade-in section-padding bg-gray-50">
      <div className="container-max">
        <h2 className="section-title">Nasze usługi</h2>
        <p className="section-subtitle">
          Kompleksowe terapie naturalne dostosowane do Twoich potrzeb
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {services.map((service, index) => (
            <div key={index} className="card text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-green-600 font-semibold mb-4">
            Polub naszą stronę i otrzymaj 25% rabatu!
          </p>
          <a href="#kontakt" className="btn-primary">
            Umów konsultację
          </a>
        </div>
      </div>
    </section>
  )
}
