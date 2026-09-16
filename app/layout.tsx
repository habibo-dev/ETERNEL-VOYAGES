import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import './premium.css'
import './redesign.css'
import './service-pages.css'
import './contact-ui.css'
const dmSans=DM_Sans({subsets:['latin'],variable:'--font-sans',display:'swap'})
const playfair=Playfair_Display({subsets:['latin'],variable:'--font-display',display:'swap'})
export const metadata:Metadata={title:'ETERNEL VOYAGES — Découvrez votre prochaine destination',description:'ETERNEL VOYAGES à Sétif : destinations, séjours, circuits, vols, hôtels et voyages sur mesure. Inspirez-vous puis demandez un programme personnalisé.',keywords:['Eternel Voyages','agence de voyage Sétif','voyage Algérie','voyage sur mesure','séjours','circuits','réservation vols','hôtels'],openGraph:{title:'ETERNEL VOYAGES — Découvrez votre prochaine destination',description:'Destinations, séjours, circuits et voyages sur mesure depuis Sétif.',type:'website',locale:'fr_DZ',siteName:'ETERNEL VOYAGES'},twitter:{card:'summary_large_image',title:'ETERNEL VOYAGES — Découvrez votre prochaine destination',description:'Voyages, destinations et accompagnement personnalisé depuis Sétif.'},robots:{index:true,follow:true}}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr" className={`${dmSans.variable} ${playfair.variable}`}><body>{children}</body></html>}
