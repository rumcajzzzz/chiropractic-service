"use client"

import { useEffect, useRef } from "react"

export default function Testimonials() {
  const testimonialsRef = useRef<HTMLElement>(null)

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

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: "Anna Kowalska",
      text: "Po latach problemów z kręgosłupem, terapia manualna przyniosła mi ogromną ulgę. Profesjonalne podejście i skuteczne leczenie.",
      rating: 5,
      treatment: "Terapia manualna",
    },
    {
      name: "Marek Nowak",
      text: "Hirudoterapia pomogła mi w problemach z krążeniem. Czuję się znacznie lepiej, a efekty są długotrwałe.",
      rating: 5,
      treatment: "Hirudoterapia",
    },
    {
      name: "Katarzyna Wiśniewska",
      text: "Kręgarstwo to była najlepsza decyzja. Bóle pleców, które męczyły mnie latami, w końcu ustąpiły.",
      rating: 5,
      treatment: "Kręgarstwo",
    },
  ]

  return (
    <section ref={testimonialsRef} className="fade-in section-padding bg-white">
      <div className="container-max">
        <h2 className="section-title">Opinie pacjentów</h2>
        <p className="section-subtitle">Zobacz, co mówią o nas nasi pacjenci</p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-green-600">{testimonial.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
