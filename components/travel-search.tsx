'use client'

import Link from 'next/link'
import { CalendarDays, ChevronDown, Hotel, MapPin, Plane, Search, Sparkles, Users } from 'lucide-react'
import { useMemo, useState } from 'react'
import { destinations, offers } from '@/lib/data'

const tabs = [
  {key:'sejours',label:'Séjours',icon:Sparkles},
  {key:'circuits',label:'Circuits',icon:MapPin},
  {key:'vols',label:'Vols',icon:Plane},
  {key:'hotels',label:'Hôtels',icon:Hotel},
  {key:'activites',label:'Activités',icon:Sparkles},
] as const

type TabKey = typeof tabs[number]['key']

export function TravelSearch({ compact=false }: { compact?: boolean }) {
  const [active,setActive] = useState<TabKey>('sejours')
  const [query,setQuery] = useState('')
  const [travelers,setTravelers] = useState('2 voyageurs')
  const matches = useMemo(() => {
    const q=query.trim().toLowerCase()
    if(!q) return []
    return [...destinations.map(d=>({label:d.name,meta:d.country,href:`/destinations/${d.slug}`})), ...offers.map(o=>({label:o.title,meta:o.destination,href:`/voyages/${o.slug}`}))]
      .filter(x=>`${x.label} ${x.meta}`.toLowerCase().includes(q)).slice(0,5)
  },[query])

  return <div className={`travel-search ${compact?'travel-search-compact':''}`}>
    <div className="travel-tabs" role="tablist" aria-label="Type de recherche">
      {tabs.map(({key,label,icon:Icon}) => <button key={key} role="tab" aria-selected={active===key} className={active===key?'active':''} onClick={()=>setActive(key)}><Icon size={16}/>{label}</button>)}
    </div>
    <div className="travel-fields">
      <div className="search-field search-destination">
        <label>{active==='vols'?'Départ':'Destination'}</label>
        <div className="search-input-wrap"><MapPin size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={active==='vols'?'Ville ou aéroport':'Où souhaitez-vous partir ?'} /></div>
        {matches.length>0 && <div className="search-suggestions">{matches.map(m=><Link href={m.href} key={m.href} onClick={()=>setQuery(m.label)}><MapPin size={15}/><span><b>{m.label}</b><small>{m.meta}</small></span></Link>)}</div>}
      </div>
      {active==='vols' ? <div className="search-field"><label>Destination</label><div className="search-input-wrap"><Plane size={17}/><input placeholder="Ville ou aéroport" /></div></div> : <div className="search-field"><label>{active==='hotels'?'Arrivée':'Dates'}</label><div className="search-input-wrap"><CalendarDays size={17}/><input type="date" aria-label="Date" /></div></div>}
      <div className="search-field"><label>Voyageurs</label><div className="search-input-wrap"><Users size={17}/><select value={travelers} onChange={e=>setTravelers(e.target.value)}><option>1 voyageur</option><option>2 voyageurs</option><option>3 voyageurs</option><option>4 voyageurs</option><option>5+ voyageurs</option></select><ChevronDown size={14}/></div></div>
      <Link className="search-main-button" href={`/voyages${query?`?q=${encodeURIComponent(query)}`:''}`}><Search size={18}/> Rechercher</Link>
    </div>
    <p className="search-note"><Sparkles size={14}/> Recherche de découverte — disponibilités, dates et tarifs sont confirmés par l’agence.</p>
  </div>
}
