export type Offer = { slug:string; title:string; destination:string; country:string; category:string; description:string; image:string; price?:string; duration?:string; demo?:boolean }
export const phone = '+213654838553'
export const whatsapp = (message='Bonjour Eternel Voyages, je souhaite recevoir des informations sur vos voyages.') => `https://wa.me/213654838553?text=${encodeURIComponent(message)}`
export const email = 'eternelvoyages@gmail.com'
export const address = 'Rue Cheraga Laid, La Gare de Train, Sétif — Algérie'
export const offers: Offer[] = [
 {slug:'circuit-culturel-constantine',title:'Circuit Culturel au Cœur de Constantine',destination:'Constantine',country:'Algérie',category:'Circuits culturels',description:'Une inspiration de voyage dédiée à la découverte culturelle de Constantine.',image:'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1400&q=85',price:'À partir de 2300 DA'},
 {slug:'djemila',title:'Djemila — Patrimoine & Histoire',destination:'Djemila',country:'Algérie',category:'Culture',description:'Une escapade à imaginer autour du patrimoine exceptionnel de Djemila.',image:'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1400&q=85',demo:true},
 {slug:'turquie',title:'Évasion en Turquie',destination:'Turquie',country:'Turquie',category:'Séjours',description:'Découvrez une idée de séjour international, à confirmer selon programme et disponibilité.',image:'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1400&q=85',demo:true},
 {slug:'tunisie',title:'Escapade en Tunisie',destination:'Tunisie',country:'Tunisie',category:'Séjours',description:'Une proposition de voyage à personnaliser selon vos dates et envies.',image:'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1400&q=85',demo:true},
 {slug:'egypte',title:'Égypte — Histoire & Évasion',destination:'Égypte',country:'Égypte',category:'Culture',description:'Une inspiration internationale, avec détails et disponibilité sur demande.',image:'https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1400&q=85',demo:true},
 {slug:'sahara',title:'Sahara Algérien',destination:'Sahara',country:'Algérie',category:'Aventure',description:'Imaginez votre prochaine expérience saharienne avec un programme sur mesure.',image:'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85',demo:true}
]
export const destinations = [
 {name:'Constantine',country:'Algérie',type:'Culture',image:'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=85',slug:'constantine'},
 {name:'Djemila',country:'Algérie',type:'Patrimoine',image:'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85',slug:'djemila'},
 {name:'Sahara',country:'Algérie',type:'Aventure',image:'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1200&q=85',slug:'sahara'},
 {name:'Istanbul',country:'Turquie',type:'International',image:'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85',slug:'istanbul'},
 {name:'Tunis',country:'Tunisie',type:'Évasion',image:'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=85',slug:'tunis'},
 {name:'Le Caire',country:'Égypte',type:'Culture',image:'https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1200&q=85',slug:'caire'}
]
export const services = [
 {slug:'voyages-sur-mesure',title:'Voyages sur mesure',desc:'Construisez un voyage qui correspond à vos envies, dates et budget.'},
 {slug:'circuits',title:'Circuits & excursions',desc:'Des idées de circuits et d’expériences à personnaliser.'},
 {slug:'vols',title:'Réservation de vols',desc:'Une assistance pour rechercher et réserver vos vols.'},
 {slug:'hotels',title:'Hôtels & hébergements',desc:'Trouvez une solution d’hébergement adaptée à votre séjour.'},
 {slug:'visa',title:'Accompagnement visa',desc:'Informations et assistance selon votre destination, sans garantie de résultat.'},
 {slug:'assistance',title:'Assistance',desc:'Un accompagnement avant et pendant votre projet de voyage.'}
]
