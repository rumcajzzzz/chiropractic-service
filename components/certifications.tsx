"use client"

import { useEffect, useRef } from "react"

export default function Certifications() {
  const certificationsRef = useRef<HTMLElement>(null)

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

    if (certificationsRef.current) {
      observer.observe(certificationsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const therapists = [
    {
      name: "Dr Anna Kowalczyk",
      title: "Główny terapeuta, specjalista kręgarstwa",
      photo: "/6.jpg",
      experience: "15 lat doświadczenia",
      specializations: ["Kręgarstwo", "Terapia manualna", "Rehabilitacja"],
    },
    {
      name: "Mgr Piotr Nowak",
      title: "Terapeuta manualny, specjalista hirudoterapii",
      photo: "/5.jpg",
      experience: "12 lat doświadczenia",
      specializations: ["Hirudoterapia", "Masaż leczniczy", "Akupunktura"],
    },
  ]

  const certifications = [
    {
      title: "Certyfikat Polskiego Towarzystwa Kręgarskiego",
      institution: "Polskie Towarzystwo Kręgarskie",
      year: "2023",
      image: "7.png",
      therapist: "Dr Anna Kowalczyk",
    },
    {
      title: "Dyplom Terapii Manualnej",
      institution: "Akademia Medyczna w Warszawie",
      year: "2022",
      image: "7.png",
      therapist: "Dr Anna Kowalczyk",
    },
    {
      title: "Certyfikat Hirudoterapii",
      institution: "Europejskie Centrum Hirudoterapii",
      year: "2023",
      image: "7.png",
      therapist: "Mgr Piotr Nowak",
    },
    {
      title: "Kurs Akupunktury Tradycyjnej",
      institution: "Instytut Medycyny Chińskiej",
      year: "2021",
      image: "7.png",
      therapist: "Mgr Piotr Nowak",
    },
  ] 

  const licenses = [
    {
      title: "Licencja na prowadzenie praktyki kręgarskiej",
      number: "LPK/2023/001",
      validUntil: "2026",
      icon: "📋",
    },
    {
      title: "Zezwolenie na hirudoterapię",
      number: "ZH/2023/015",
      validUntil: "2025",
      icon: "🏥",
    },
    {
      title: "Certyfikat BHP w gabinecie medycznym",
      number: "BHP/2023/089",
      validUntil: "2024",
      icon: "🛡️",
    },
  ]

  return (
    <section ref={certificationsRef} className="fade-in section-padding bg-gray-50">
      <div className="container-max">
        <h2 className="section-title">Certyfikaty i kwalifikacje</h2>
        <p className="section-subtitle">
          Nasi terapeuci posiadają wszystkie niezbędne kwalifikacje i regularnie podnoszą swoje umiejętności
        </p>

        {/* Sekcja terapeutów */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Nasz zespół</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {therapists.map((therapist, index) => (
              <div key={index} className="card text-center">
                <img
                  src={therapist.photo || "/placeholder.svg"}
                  alt={therapist.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-green-100"
                />
                <h4 className="text-xl font-bold text-gray-900 mb-2">{therapist.name}</h4>
                <p className="text-green-600 font-semibold mb-2">{therapist.title}</p>
                <p className="text-gray-600 mb-4">{therapist.experience}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {therapist.specializations.map((spec, specIndex) => (
                    <span
                      key={specIndex}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sekcja certyfikatów */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Certyfikaty i dyplomy</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="card">
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-gray-900 mb-2 text-sm">{cert.title}</h4>
                <p className="text-gray-600 text-sm mb-1">{cert.institution}</p>
                <p className="text-green-600 font-semibold text-sm mb-2">Rok: {cert.year}</p>
                <p className="text-gray-500 text-xs">{cert.therapist}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sekcja licencji */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Licencje i zezwolenia</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {licenses.map((license, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl mb-4">{license.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{license.title}</h4>
                <p className="text-gray-600 text-sm mb-1">Nr: {license.number}</p>
                <p className="text-green-600 font-semibold text-sm">Ważne do: {license.validUntil}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sekcja członkostwa */}
        {/* <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Członkostwa w organizacjach</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏛️</span>
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Polskie Towarzystwo Kręgarskie</h4>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Stowarzyszenie Terapeutów Manualnych</h4>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🌍</span>
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Europejskie Centrum Hirudoterapii</h4>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚕️</span>
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">Izba Lekarska</h4>
            </div>
          </div>
        </div> */}

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Wszystkie nasze certyfikaty i licencje są aktualne i regularnie odnawiane zgodnie z wymogami prawa.
          </p>
          {/* <a href="#kontakt" className="btn-primary">
            Sprawdź nasze kwalifikacje
          </a> */}
        </div>
      </div>
    </section>
  )
}
