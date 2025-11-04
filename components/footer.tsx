"use client"

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-12">
      <div className="container-max">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-16 h-16 m-auto">
                <Image src="/logo.png" alt="Naturalne Leczenie Logo" fill className="object-contain" />
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Profesjonalne terapie naturalne dla Twojego zdrowia i dobrego samopoczucia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Usługi</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#uslugi" className="hover:text-white transition-colors">
                  Kręgarstwo
                </a>
              </li>
              <li>
                <a href="#uslugi" className="hover:text-white transition-colors">
                  Terapia manualna
                </a>
              </li>
              <li>
                <a href="#uslugi" className="hover:text-white transition-colors">
                  Hirudoterapia
                </a>
              </li>
              <li>
                <a href="#uslugi" className="hover:text-white transition-colors">
                  Konsultacje
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-gray-300">
              <p>ul. Zdrowia 123, 00-001 Warszawa</p>
              <p>Tel: +48 123 456 789</p>
              <p>Email: kontakt@naturalneleczenie.pl</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Naturalne Leczenie. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
              Polityka prywatności
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
              Regulamin
            </a>
          </div>
        </div>

        <div className="flex justify-center my-4">
          <Link href="https://rumcajzdev.netlify.app" className="underline">
            Designed and developed by rumcajzdev
          </Link>
        </div>
      </div>
    </footer>
  )
}
