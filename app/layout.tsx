import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Forensleuth',
  description: 'Your Trusted Partner in Forensic',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
