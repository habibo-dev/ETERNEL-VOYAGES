import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { offers } from '@/lib/data'
import { PageShell, SectionTitle } from '@/components/site'
import { TravelCatalog } from '@/components/travel-catalog'
export default function Voyages(){return <PageShell><main><section className="page-hero"><div className="container"><span className="eyebrow">TRAVEL DISCOVERY</span><h1>Explorez les voyages.</h1><p>Trouvez une inspiration, ouvrez sa fiche et demandez les disponibilités ou un programme personnalisé.</p></div></section><section className="section"><div className="container"><div className="toolbar"><SectionTitle eyebrow="CATALOGUE" title="Des idées, pas des prix inventés." description="Les tarifs affichés uniquement lorsqu’ils sont connus. Sinon : prix sur demande."/><Link className="btn btn-primary" href="/demande">Planifier mon voyage <ArrowRight size={16}/></Link></div><TravelCatalog offers={offers}/></div></section></main></PageShell>}
