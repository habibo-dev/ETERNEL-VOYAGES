export type GalleryImage = { src: string; alt: string }
export type ItineraryDay = { day: string; title: string; description: string }
export type Offer = {
  slug: string
  title: string
  destination: string
  country: string
  category: string
  description: string
  image: string
  gallery?: GalleryImage[]
  price?: string
  duration?: string
  type?: string
  included?: string[]
  excluded?: string[]
  itinerary?: ItineraryDay[]
  demo?: boolean
}
export type Destination = {
  slug: string
  name: string
  country: string
  type: string
  image: string
  bestTime: string
  description: string
  activities: string[]
  gallery: GalleryImage[]
}

export const phone = '+213654838553'
export const email = 'eternelvoyages@gmail.com'
export const address = 'Rue Cheraga Laid, La Gare de Train, Sétif — Algérie'
export const whatsapp = (message='Bonjour Eternel Voyages, je souhaite recevoir des informations sur un voyage.') => `https://wa.me/213654838553?text=${encodeURIComponent(message)}`

const istanbulGallery: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1800&q=85', alt: 'Istanbul et le Bosphore' },
  { src: 'https://images.unsplash.com/photo-1541432901042-2d8fe7b8c9a9?auto=format&fit=crop&w=1200&q=85', alt: 'Mosquée à Istanbul' },
  { src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=85', alt: 'Vue sur Istanbul' },
  { src: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85', alt: 'Bosphore' },
]

export const offers: Offer[] = [
  {
    slug:'circuit-culturel-constantine', title:'Circuit culturel au cœur de Constantine', destination:'Constantine', country:'Algérie', category:'Circuits culturels',
    description:'Une inspiration de voyage dédiée à la découverte culturelle de Constantine. Programme et disponibilité à confirmer avec l’agence.',
    image:'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1600&q=85', demo:true,
    duration:'À confirmer', type:'Circuit culturel', gallery:[{src:'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1800&q=85',alt:'Constantine' }],
    included:['Programme à confirmer','Accompagnement selon la demande'], excluded:['Dépenses personnelles','Prestations non confirmées']
  },
  {
    slug:'djemila', title:'Djemila — Patrimoine & histoire', destination:'Djemila', country:'Algérie', category:'Patrimoine',
    description:'Une escapade autour du patrimoine de Djemila, à construire selon vos dates et le format souhaité.',
    image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=85', demo:true, duration:'À confirmer', type:'Culture',
    gallery:[{src:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1800&q=85',alt:'Patrimoine' }]
  },
  {
    slug:'turquie', title:'Évasion en Turquie', destination:'Turquie', country:'Turquie', category:'Séjours',
    description:'Une idée de séjour international à personnaliser selon les dates, l’hôtel, les vols et les disponibilités.',
    image:'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1600&q=85', demo:true, duration:'À confirmer', type:'Séjour', gallery:istanbulGallery,
    itinerary:[
      {day:'01',title:'Arrivée & installation',description:'Accueil et installation selon les prestations confirmées.'},
      {day:'02',title:'Istanbul à votre rythme',description:'Découverte libre ou activité sélectionnée avec l’agence.'},
      {day:'03',title:'Bosphore & quartiers emblématiques',description:'Programme indicatif à adapter à vos envies et à la disponibilité.'},
      {day:'04',title:'Expérience locale',description:'Temps libre ou activité optionnelle à confirmer.'}
    ],
    included:['Prestations selon le programme confirmé','Assistance de l’agence'], excluded:['Dépenses personnelles','Activités optionnelles non incluses']
  },
  {
    slug:'tunisie', title:'Escapade en Tunisie', destination:'Tunisie', country:'Tunisie', category:'Séjours',
    description:'Une proposition de voyage à personnaliser selon vos dates, votre hébergement et le type de séjour recherché.',
    image:'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1600&q=85', demo:true, duration:'À confirmer', type:'Séjour'
  },
  {
    slug:'egypte', title:'Égypte — Histoire & évasion', destination:'Égypte', country:'Égypte', category:'Culture',
    description:'Une inspiration internationale avec détails, programme et disponibilité sur demande.',
    image:'https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1600&q=85', demo:true, duration:'À confirmer', type:'Circuit culturel'
  },
  {
    slug:'sahara', title:'Sahara algérien', destination:'Sahara', country:'Algérie', category:'Aventure',
    description:'Imaginez votre prochaine expérience saharienne avec un programme à construire selon votre période et votre style de voyage.',
    image:'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1600&q=85', demo:true, duration:'À confirmer', type:'Aventure'
  }
]

export const destinations: Destination[] = [
  {slug:'constantine',name:'Constantine',country:'Algérie',type:'Culture',bestTime:'À définir selon votre programme',description:'Une ville de caractère entre patrimoine, architecture et paysages spectaculaires.',activities:['Patrimoine et culture','Découverte de la ville','Gastronomie locale'],image:'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1600&q=85',gallery:[{src:'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1800&q=85',alt:'Constantine'}]},
  {slug:'djemila',name:'Djemila',country:'Algérie',type:'Patrimoine',bestTime:'À définir selon votre programme',description:'Un voyage au cœur d’un patrimoine historique remarquable.',activities:['Site historique','Culture','Excursion'],image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=85',gallery:[{src:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1800&q=85',alt:'Djemila'}]},
  {slug:'sahara',name:'Sahara',country:'Algérie',type:'Aventure',bestTime:'À définir selon la saison',description:'Des paysages désertiques et des expériences à composer avec un accompagnement adapté.',activities:['Désert','Paysages','Expérience locale'],image:'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1600&q=85',gallery:[{src:'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1800&q=85',alt:'Sahara algérien'}]},
  {slug:'istanbul',name:'Istanbul',country:'Turquie',type:'International',bestTime:'À définir selon votre programme',description:'Une destination entre Bosphore, patrimoine, quartiers vivants, gastronomie et expériences urbaines.',activities:['Bosphore','Patrimoine','Gastronomie','Shopping'],image:istanbulGallery[0].src,gallery:istanbulGallery},
  {slug:'tunis',name:'Tunis',country:'Tunisie',type:'Évasion',bestTime:'À définir selon votre programme',description:'Une escapade méditerranéenne à personnaliser selon vos envies.',activities:['Culture','Méditerranée','Gastronomie'],image:'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1600&q=85',gallery:[{src:'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1800&q=85',alt:'Tunisie'}]},
  {slug:'caire',name:'Le Caire',country:'Égypte',type:'Culture',bestTime:'À définir selon votre programme',description:'Une destination culturelle forte, à organiser selon les dates et le programme souhaités.',activities:['Histoire','Culture','Patrimoine'],image:'https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1600&q=85',gallery:[{src:'https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1800&q=85',alt:'Le Caire'}]}
]

export const services = [
 {slug:'voyages-sur-mesure',title:'Voyages sur mesure',desc:'Expliquez-nous votre projet et nous préparons une proposition adaptée.',icon:'compass'},
 {slug:'circuits',title:'Circuits & excursions',desc:'Des idées de programmes culturels, découverte et aventure à personnaliser.',icon:'map'},
 {slug:'vols',title:'Réservation de vols',desc:'Une assistance pour rechercher et organiser vos vols selon votre projet.',icon:'plane'},
 {slug:'hotels',title:'Hôtels & hébergements',desc:'Choisissez le niveau et le style d’hébergement qui vous correspondent.',icon:'hotel'},
 {slug:'visa',title:'Accompagnement visa',desc:'Informations et accompagnement selon la destination, sans garantie de résultat.',icon:'file'},
 {slug:'assistance',title:'Assistance',desc:'Un accompagnement avant et pendant votre projet de voyage.',icon:'shield'}
]
