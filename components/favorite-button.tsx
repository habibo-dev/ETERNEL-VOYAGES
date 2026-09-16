'use client'
import { useState } from 'react'
import { Heart } from 'lucide-react'
export default function FavoriteButton({slug}:{slug:string}){const [saved,setSaved]=useState(false);function toggle(){const current=JSON.parse(localStorage.getItem('eternel-favorites')||'[]') as string[];const next=current.includes(slug)?current.filter(x=>x!==slug):[...current,slug];localStorage.setItem('eternel-favorites',JSON.stringify(next));setSaved(next.includes(slug))}return <button onClick={toggle} aria-label={saved?'Retirer des favoris':'Ajouter aux favoris'} style={{border:0,background:'#fff',width:38,height:38,borderRadius:'50%',display:'grid',placeItems:'center'}}><Heart size={17} fill={saved?'currentColor':'none'}/></button>}
