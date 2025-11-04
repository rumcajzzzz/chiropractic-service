import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fizjoterapia',
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}
