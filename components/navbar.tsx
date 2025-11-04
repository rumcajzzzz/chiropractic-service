"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container-max px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Naturalne Leczenie Logo"
              width={50}
              height={50}
              className="w-auto h-12"
              priority
            />
            <span className="text-xl font-bold text-gray-900">Naturalne Leczenie</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#o-nas" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              O nas
            </a>
            <a href="#uslugi" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Usługi
            </a>
            <a href="#opinie" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Opinie
            </a>
            <a href="#kontakt" className="btn-primary">
              Kontakt
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a
              href="#o-nas"
              className="block text-gray-700 hover:text-green-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              O nas
            </a>
            <a
              href="#uslugi"
              className="block text-gray-700 hover:text-green-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Usługi
            </a>
            <a
              href="#opinie"
              className="block text-gray-700 hover:text-green-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Opinie
            </a>
            <a href="#kontakt" className="block btn-primary text-center" onClick={() => setIsMenuOpen(false)}>
              Kontakt
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
