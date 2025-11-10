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
          {/* Formularz */}
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

          {/* Dane kontaktowe */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Dane kontaktowe</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-green-600 text-xl">📍</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Adres</h4>
                  <p className="text-gray-600">
                    Strobów 2 n
                    <br />
                    96-100 Skierniewice
                  </p>
                </div>
              </div>

              <a href="tel:+48605346966" className="block no-underline text-inherit">
                <div className="flex items-start space-x-4 hover:bg-gray-100 p-2 rounded-lg transition">
                  <div className="text-green-600 text-xl">📞</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefon</h4>
                    <p className="text-gray-600">605 346 966</p>
                  </div>
                </div>
              </a>

              <a href="mailto:kontakt@naturalneleczenie.pl" className="block no-underline text-inherit">
                <div className="flex items-start space-x-4 hover:bg-gray-100 p-2 rounded-lg transition">
                  <div className="text-green-600 text-xl">✉️</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">kontakt@naturalneleczenie.pl</p>
                  </div>
                </div>
              </a>

              <div className="flex items-start space-x-4">
                <div className="text-green-600 text-xl">🕒</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Godziny otwarcia</h4>
                  <p className="text-gray-600">
                    Pon-Pt: 17:00 - 20:00
                    <br />
                    Sob: po uzgodnieniu
                  </p>
                </div>
              </div>
            </div>

            {/* Mapa Google */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2581.965753127464!2d20.1825412!3d51.9662065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471d8e6e5d1e24d9%3A0x6d29b4d0a0e2d3fa!2sStrob%C3%B3w%202%20n%2C%2096-100%20Skierniewice!5e0!3m2!1spl!2spl!4v1762787393843!5m2!1spl!2spl"
                className="w-full h-[240px] rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
