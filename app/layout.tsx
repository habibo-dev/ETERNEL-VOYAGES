import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display', display: 'swap' })

export const metadata: Metadata = {
  title: 'Eternel Voyages — Agence de Voyage à Sétif | Circuits, Séjours & Voyages sur Mesure',
  description: 'Découvrez Eternel Voyages à Sétif : circuits touristiques, voyages sur mesure, réservations de vols et hôtels, assistance visa et expériences personnalisées.',
  keywords: ['Eternel Voyages', 'agence de voyage Sétif', 'voyage Algérie', 'voyages sur mesure', 'circuits touristiques', 'réservation hôtel', 'visa Algérie'],
  openGraph: {
    title: 'Eternel Voyages — Le monde commence ici',
    description: 'Circuits, séjours, voyages sur mesure et accompagnement personnalisé depuis Sétif.',
    type: 'website',
    locale: 'fr_DZ',
    siteName: 'Eternel Voyages',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eternel Voyages — Le monde commence ici',
    description: 'Voyages, circuits et séjours sur mesure depuis Sétif.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
