import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

import { Header } from './components/header'
import { Footer } from './components/footer'


const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BookMark - A Simple Bookmark Manager',
  description: 'A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
