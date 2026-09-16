import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata={title:'Eternel Voyages — Agence de Voyage à Sétif | Circuits, Séjours & Voyages sur Mesure',description:'Découvrez Eternel Voyages à Sétif : circuits touristiques, voyages sur mesure, réservations de vols et hôtels, assistance visa et expériences personnalisées.',openGraph:{title:'Eternel Voyages — Le monde commence ici',description:'Circuits, séjours, voyages sur mesure et accompagnement personnalisé depuis Sétif.',type:'website',locale:'fr_DZ'},robots:{index:true,follow:true}}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
