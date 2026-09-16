import Link from 'next/link'
import { ArrowRight, Facebook, Instagram, Mail, MapPin, Menu, Phone, Plane, Search, Send, Star, X } from 'lucide-react'
import { phone, whatsapp, address } from '@/lib/data'

export function Header() {
  return (
    <header className="header">
      <div className="nav-wrap">
        <Link href="/" className="brand" aria-label="Eternel Voyages accueil">
          <span className="brand-mark"><Plane size={18} strokeWidth={1.8} /></span>
          <span className="brand-copy"><strong>ETERNEL</strong><small>VOYAGES</small></span>
        </Link>

        <nav className="desktop-nav" aria-label="Navigation principale">
          <Link href="/voyages">Voyages</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/offres">Offres</Link>
          <Link href="/services">Services</Link>
          <Link href="/agence">Notre agence</Link>
        </nav>

        <div className="nav-actions">
          <Link className="lang" href="/ar">AR</Link>
          <Link className="nav-cta" href="/demande">Créer mon voyage <ArrowRight size={14} /></Link>
          <details className="mobile-menu">
            <summary aria-label="Ouvrir le menu"><Menu size={21} /></summary>
            <div className="mobile-menu-panel">
              <Link href="/">Accueil</Link>
              <Link href="/voyages">Voyages</Link>
              <Link href="/destinations">Destinations</Link>
              <Link href="/offres">Offres</Link>
              <Link href="/services">Services</Link>
              <Link href="/agence">Notre agence</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}

export function MobileBar() {
  return (
    <div className="mobile-bar">
      <a href={whatsapp()}><Send size={15} /> WhatsApp</a>
      <Link href="/demande"><Star size={15} /> Demander</Link>
      <a href={`tel:${phone}`}><Phone size={15} /> Appeler</a>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-intro">
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark"><Plane size={18} /></span>
            <span className="brand-copy"><strong>ETERNEL</strong><small>VOYAGES</small></span>
          </Link>
          <p>Discover. Plan. Travel.<br />Une expérience de voyage pensée autour de vos envies, depuis Sétif.</p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
          </div>
        </div>
        <div>
          <b>Explorer</b>
          <Link href="/voyages">Voyages</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/offres">Offres</Link>
          <Link href="/favoris">Mes favoris</Link>
        </div>
        <div>
          <b>Services</b>
          <Link href="/services/voyages-sur-mesure">Sur mesure</Link>
          <Link href="/services/circuits">Circuits</Link>
          <Link href="/services/vols">Vols</Link>
          <Link href="/services/hotels">Hôtels</Link>
          <Link href="/services/visa">Visa</Link>
        </div>
        <div>
          <b>Nous contacter</b>
          <span><MapPin size={15} /> Sétif, Algérie</span>
          <a href={`tel:${phone}`}><Phone size={15} /> {phone}</a>
          <a href={whatsapp()}><Send size={15} /> WhatsApp</a>
          <a href="mailto:eternelvoyages@gmail.com"><Mail size={15} /> eternelvoyages@gmail.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Eternel Voyages. Tous droits réservés.</span>
        <span>{address}</span>
      </div>
    </footer>
  )
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><Header />{children}<MobileBar /><Footer /></>
}

export function SectionTitle({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="section-title">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export function SearchIconButton() {
  return <button className="icon-button" aria-label="Rechercher"><Search size={17} /></button>
}
