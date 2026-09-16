import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/data'
import { PageShell, SectionTitle } from '@/components/site'
export default function Services(){return <PageShell><main><section className="page-hero"><div className="container"><span className="eyebrow">SERVICES</span><h1>Votre voyage, accompagné de bout en bout.</h1><p>Voyages sur mesure, circuits, vols, hôtels, visa et assistance : choisissez votre besoin et construisons la suite.</p></div></section><section className="section"><div className="container"><SectionTitle eyebrow="EXPERTISE" title="Des services autour de votre projet."/><div className="service-grid">{services.map(s=><Link className="service-card" href={`/services/${s.slug}`} key={s.slug}><ArrowRight size={19}/><h3>{s.title}</h3><p>{s.desc}</p><span className="text-link">Découvrir <ArrowRight size={15}/></span></Link>)}</div></div></section></main></PageShell>}
