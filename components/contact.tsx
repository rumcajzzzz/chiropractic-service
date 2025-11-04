"use client"

import Link from "next/link"
import type React from "react"

import { useEffect, useRef, useState } from "react"

export default function Contact() {
  const contactRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

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

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="kontakt" ref={contactRef} className="fade-in section-padding bg-white">
      <div className="container-max">
        <h2 className="section-title">Kontakt</h2>
        <p className="section-subtitle">Skontaktuj się z nami, aby umówić wizytę lub zadać pytanie</p>

        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Napisz do nas</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Wyślij wiadomość
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Dane kontaktowe</h3>
            <div className="space-y-6">
              <Link
                target="_blank"
                href="https://www.google.com/maps/place/Warszawa/@52.2330969,20.8962727,47744m/data=!3m2!1e3!4b1!4m6!3m5!1s0x471ecc669a869f01:0x72f0be2a88ead3fc!8m2!3d52.2296756!4d21.0122287!16zL20vMDgxbV8?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
                className="block no-underline text-inherit"
              >
                <div className="flex items-start space-x-4 hover:bg-gray-100 p-2 rounded-lg transition">
                  <div className="text-green-600 text-xl">📍</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Adres</h4>
                    <p className="text-gray-600">
                      ul. Zdrowia 123
                      <br />
                      00-001 Warszawa
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="tel:+48123456789" className="block no-underline text-inherit">
                <div className="flex items-start space-x-4 hover:bg-gray-100 p-2 rounded-lg transition">
                  <div className="text-green-600 text-xl">📞</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefon</h4>
                    <p className="text-gray-600">+48 123 456 789</p>
                  </div>
                </div>
              </Link>

              <Link href="mailto:kontakt@naturalneleczenie.pl" className="block no-underline text-inherit">
                <div className="flex items-start space-x-4 hover:bg-gray-100 p-2 rounded-lg transition">
                  <div className="text-green-600 text-xl">✉️</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">kontakt@naturalneleczenie.pl</p>
                  </div>
                </div>
              </Link>

              <div className="flex items-start space-x-4">
                <div className="text-green-600 text-xl">🕒</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Godziny otwarcia</h4>
                  <p className="text-gray-600">
                    Pon-Pt: 9:00 - 18:00
                    <br />
                    Sob: 9:00 - 14:00
                    <br />
                    Ndz: zamknięte
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207906.7659373782!2d20.896272716687566!3d52.23309689902131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e1!3m2!1spl!2spl!4v1753012885933!5m2!1spl!2spl"
                className="w-full h-[240px] rounded-lg shadow-lg"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
