import Link from 'next/link'
import { ArrowRight, Check, Compass, Hotel, Map, Plane, ShieldCheck } from 'lucide-react'
import { services, destinations } from '@/lib/data'
import { PageShell } from '@/components/site'
export function generateStaticParams(){return services.map(s=>({slug:s.slug}))}
const images={
 'voyages-sur-mesure':destinations.find(d=>d.slug==='istanbul')?.image,
 circuits:destinations.find(d=>d.slug==='constantine')?.image,
 vols:'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=85',
 hotels:'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
 visa:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=85',
 assistance:'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=85'
}
const icons={
 'voyages-sur-mesure':Compass,circuits:Map,vols:Plane,hotels:Hotel,visa:ShieldCheck,assistance:ShieldCheck
}
export default async function Service({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const s=services.find(x=>x.slug===slug);if(!s)return <PageShell><section className="section"><div className="container"><h1>Service introuvable</h1></div></section></PageShell>;const Icon=icons[s.slug as keyof typeof icons]||Compass;return <PageShell><main>
 <section className="service-detail-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(5,18,29,.9),rgba(5,18,29,.38)),url(${images[s.slug as keyof typeof images]})`}}><div className="container"><span className="eyebrow">ETERNEL VOYAGES · SÉTIF</span><div className="service-hero-icon"><Icon size={24}/></div><h1>{s.title}</h1><p>{s.desc}</p><div className="hero-actions"><Link className="btn btn-light" href={`/demande?service=${encodeURIComponent(s.title)}`}>Créer ma demande <ArrowRight size={16}/></Link><Link className="hero-secondary" href="/contact">Contacter l'agence <ArrowRight size={15}/></Link></div></div></section>
 <section className="section"><div className="container service-process"><div><span className="eyebrow">COMMENT ÇA MARCHE ?</span><h2>Un processus simple, clair et personnalisé.</h2><p>Chaque demande commence par vos besoins. Les prestations, disponibilités et tarifs sont confirmés avant toute décision.</p></div><div className="process-list"><div><b>01</b><span><strong>Vous nous expliquez votre besoin</strong><small>Destination, dates, voyageurs et préférences.</small></span></div><div><b>02</b><span><strong>Nous construisons une proposition</strong><small>Nous étudions les options disponibles pour votre projet.</small></span></div><div><b>03</b><span><strong>Vous validez les détails</strong><small>Programme, prix et disponibilités sont confirmés avec vous.</small></span></div><div><b>04</b><span><strong>Nous vous accompagnons</strong><small>Vous gardez un point de contact avec l’agence.</small></span></div></div></div></section>
 <section className="section section-alt"><div className="container service-benefit-grid"><div className="service-benefit-image" style={{backgroundImage:`url(${images[s.slug as keyof typeof images]})`}}/><div className="service-benefit-copy"><span className="eyebrow">POUR VOTRE PROJET</span><h2>Une réponse adaptée à votre voyage.</h2><ul><li><Check size={17}/> Informations adaptées à votre destination</li><li><Check size={17}/> Détails et disponibilité à confirmer</li><li><Check size={17}/> Budget indicatif facultatif</li><li><Check size={17}/> Contact direct avec Eternel Voyages</li></ul><Link className="btn btn-primary" href="/demande">Commencer ma demande <ArrowRight size={16}/></Link></div></div></section>
 </main></PageShell>}
