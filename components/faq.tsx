"use client"

import { useEffect, useRef, useState } from "react"

export default function FAQ() {
  const faqRef = useRef<HTMLElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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

    if (faqRef.current) {
      observer.observe(faqRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const faqs = [
    {
      question: "Czy pijawki są bezpieczne?",
      answer:
        "Tak, hirudoterapia jest całkowicie bezpieczna gdy wykonywana przez wykwalifikowanego terapeutę. Używamy wyłącznie pijawki medyczne hodowane w sterylnych warunkach.",
    },
    {
      question: "Ile trwa jedna sesja terapii?",
      answer:
        "Sesja terapii trwa zazwyczaj 45-60 minut, w zależności od rodzaju terapii i indywidualnych potrzeb pacjenta.",
    },
    {
      question: "Czy terapie są bolesne?",
      answer:
        "Nasze terapie są delikatne i zazwyczaj bezbolesne. Niektórzy pacjenci mogą odczuwać lekki dyskomfort, który szybko mija.",
    },
    {
      question: "Ile sesji potrzebuję?",
      answer:
        "Liczba sesji zależy od rodzaju problemu i jego zaawansowania. Zazwyczaj pierwsze efekty widoczne są już po 2-3 sesjach.",
    },
  ]

  return (
    <section ref={faqRef} className="fade-in section-padding bg-gray-50">
      <div className="container-max">
        <h2 className="section-title">Często zadawane pytania</h2>
        <p className="section-subtitle">Odpowiedzi na najczęściej zadawane pytania o nasze terapie</p>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card">
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <span className="text-2xl text-green-600">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="mt-4 pt-4 border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
