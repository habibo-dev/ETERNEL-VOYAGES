import Link from 'next/link'
import { ArrowRight, CalendarDays, Check, ChevronDown, Compass, Globe2, Heart, MapPin, Plane, Search, ShieldCheck, Sparkles, Star, Users } from 'lucide-react'
import { PageShell, SectionTitle } from '@/components/site'
import { destinations, offers, services } from '@/lib/data'

const searchTabs = ['Hôtels', 'Séjours', 'Circuits', 'Vols', 'Vol + Hôtel', 'Activités']

export default function Home() {
  return (
    <PageShell>
      <main>
        <section className="hero hero-premium">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="hero-badge"><Sparkles size={13} /> Votre prochaine histoire commence ici</div>
              <span className="eyebrow">ETERNEL VOYAGES · SÉTIF</span>
              <h1>Voyagez plus loin.<br /><em>Vivez plus.</em></h1>
              <p>Des séjours soigneusement imaginés, des destinations inspirantes et un accompagnement humain de Sétif jusqu'à votre retour.</p>
              <div className="hero-buttons">
                <Link className="btn btn-light" href="/voyages">Explorer les voyages <ArrowRight size={16} /></Link>
                <Link className="hero-text-link" href="/demande">Créer un voyage sur mesure <ArrowRight size={15} /></Link>
              </div>
            </div>
          </div>
          <div className="hero-scroll"><span /> Faites défiler</div>
        </section>

        <section className="search-panel search-panel-premium">
          <div className="container">
            <div className="search-box">
              <div className="search-tabs">
                {searchTabs.map((tab, index) => <button key={tab} className={index === 0 ? 'active' : ''}>{tab}</button>)}
              </div>
              <div className="search-fields">
                <div className="field field-wide"><label>Où allez-vous ?</label><div className="field-value"><MapPin size={17} /><input placeholder="Destination, ville ou hôtel" /></div></div>
                <div className="field"><label>Départ</label><div className="field-value"><CalendarDays size={17} /><span>Choisir une date</span></div></div>
                <div className="field"><label>Voyageurs</label><div className="field-value"><Users size={17} /><span>2 voyageurs</span><ChevronDown size={14} /></div></div>
                <Link className="search-submit" href="/voyages"><Search size={18} /><span>Rechercher</span></Link>
              </div>
              <div className="search-footer"><span><ShieldCheck size={14} /> Assistance personnalisée</span><span><Check size={14} /> Réponse rapide</span><span><Globe2 size={14} /> Départs depuis l'Algérie</span></div>
            </div>
          </div>
        </section>

        <section className="section section-tight">
          <div className="container">
            <div className="trust-row">
              <div><strong>+100</strong><span>idées de voyages</span></div>
              <div><strong>4.9/5</strong><span>expérience client</span></div>
              <div><strong>24/7</strong><span>assistance voyage</span></div>
              <div><strong>100%</strong><span>accompagnement humain</span></div>
            </div>
          </div>
        </section>

        <section className="section section-alt destinations-section">
          <div className="container">
            <div className="section-heading-row">
              <SectionTitle eyebrow="DESTINATIONS" title="Partir, mais surtout ressentir." description="Des destinations choisies pour leur caractère, leur culture et les expériences qu'elles offrent." />
              <Link className="view-all" href="/destinations">Toutes les destinations <ArrowRight size={15} /></Link>
            </div>
            <div className="destination-mosaic">
              {destinations.slice(0, 5).map((d, index) => (
                <Link href={`/destinations/${d.slug}`} className={`destination-card destination-card-${index + 1}`} key={d.slug}>
                  <div className="destination-image" style={{ backgroundImage: `url(${d.image})` }} />
                  <div className="destination-overlay" />
                  <div className="destination-content"><span>{d.country} · {d.type}</span><h3>{d.name}</h3><div>Explorer <ArrowRight size={14} /></div></div>
                  <span className="destination-heart"><Heart size={16} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading-row">
              <SectionTitle eyebrow="NOS SÉLECTIONS" title="Des voyages qui donnent envie de partir." description="Découvrez nos inspirations et demandez les disponibilités auprès de notre équipe." />
              <Link className="view-all" href="/voyages">Voir tous les voyages <ArrowRight size={15} /></Link>
            </div>
            <div className="travel-grid">
              {offers.slice(0, 3).map((o) => (
                <Link href={`/voyages/${o.slug}`} className="travel-card" key={o.slug}>
                  <div className="travel-image"><div className="visual" style={{ backgroundImage: `url(${o.image})` }} /><span className="travel-tag">{o.category}</span><button className="card-heart" aria-label="Ajouter aux favoris"><Heart size={17} /></button></div>
                  <div className="travel-body">
                    <div className="travel-meta"><span>{o.destination}</span><span className="rating"><Star size={13} fill="currentColor" /> 4.9</span></div>
                    <h3>{o.title}</h3>
                    <p>{o.description}</p>
                    <div className="travel-bottom"><span>{o.price || 'Prix sur demande'}</span><b>Découvrir <ArrowRight size={14} /></b></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience-section">
          <div className="container experience-wrap">
            <div className="experience-image" />
            <div className="experience-copy">
              <span className="eyebrow">L'EXPÉRIENCE ETERNEL</span>
              <h2>Un voyage pensé pour vous, pas simplement vendu.</h2>
              <p>Notre rôle ne s'arrête pas à une réservation. Nous vous aidons à choisir, organiser et vivre un voyage qui correspond réellement à vos envies.</p>
              <div className="experience-points">
                <div><span><Compass size={17} /></span><b>Conseil personnalisé</b><small>Un interlocuteur qui comprend votre projet.</small></div>
                <div><span><ShieldCheck size={17} /></span><b>Accompagnement</b><small>Une équipe disponible avant et pendant le départ.</small></div>
                <div><span><Sparkles size={17} /></span><b>Expériences soigneusement choisies</b><small>Des idées adaptées à votre style de voyage.</small></div>
              </div>
              <Link className="btn btn-primary" href="/agence">Découvrir Eternel Voyages <ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>

        <section className="section section-alt services-section">
          <div className="container">
            <SectionTitle eyebrow="NOS SERVICES" title="Tout ce dont vous avez besoin pour partir sereinement." />
            <div className="service-grid service-grid-premium">
              {services.map((s, index) => (
                <Link className="service-card" href={`/services/${s.slug}`} key={s.slug}>
                  <span className="service-number">0{index + 1}</span><Plane size={19} /><h3>{s.title}</h3><p>{s.desc}</p><span className="text-link">En savoir plus <ArrowRight size={15} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonial-section">
          <div className="container testimonial-inner">
            <span className="eyebrow">ILS PARTENT AVEC NOUS</span>
            <div className="testimonial-stars"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
            <blockquote>“Une équipe à l'écoute, des conseils clairs et un voyage préparé sans stress. C'est exactement ce que nous recherchions.”</blockquote>
            <span className="testimonial-author">Client Eternel Voyages · Sétif</span>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-inner">
            <div><span className="eyebrow">PRÊT À PARTIR ?</span><h2>Votre prochaine destination<br /><em>n'attend que vous.</em></h2></div>
            <div><p>Parlez-nous de votre projet. Nous nous occupons du reste.</p><div className="hero-buttons"><Link className="btn btn-light" href="/demande">Créer mon voyage <ArrowRight size={16} /></Link><Link className="btn btn-outline" href="https://wa.me/213654838553">WhatsApp</Link></div></div>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
