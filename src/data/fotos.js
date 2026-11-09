// Fotos que REUTILIZA el buscador y la página Explorar: así no hay que poner cada imagen dos veces.
// Salen de las que ya has puesto en las demás páginas (src/config/images/*.js): hoteles, parques, restaurantes, tiendas, menú Mundo Disney…
// Cada elemento tiene una LISTA de fotos candidatas: se ve la primera que exista (las demás quedan detrás como alternativa).
// Para dar una foto propia a algo concreto, ponla en public/img/Explorar/<tipo>/<slug>.jpg y gana a todas las demás.
import { IMG } from '../config/images.js'
import dl from '../pages/parque/parqueDisneylandData.js'
import aw from '../pages/parque/parqueAdventureData.js'

const limpia = s => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '')

// Hoteles de Explorar → número del hotel (1 Disneyland Hotel, 2 New York, 3 Newport Bay, 4 Sequoia, 5 Cheyenne, 6 Santa Fe).
// Sus fotos son las de Hotel + Entradas (IMG.hotelEntradas.hotels) y las del carrusel de hoteles del inicio (IMG.inicio.hotel)
const HOTEL_N = { dlhotel: 1, newyork: 2, newport: 3, sequoia: 4, cheyenne: 5, santafe: 6 }

// Nombres que ya aparecen en las páginas de cada parque (atracciones, espectáculos, personajes) con su foto
const desdeParque = (d, I) => ['atracciones', 'espectaculos', 'personajes'].flatMap(k =>
  (d[k]?.items || []).map((x, i) => ({ k: limpia(x[0]), img: (d.imgs?.[k] || I?.[k] || [])[i] })).filter(x => x.img))
const PARQUE = [...desdeParque(dl, IMG.parqueDisneyland), ...desdeParque(aw, IMG.parqueAdventure)]
const delParque = n => { const k = limpia(n); return k.length > 3 ? PARQUE.find(p => p.k === k || p.k.includes(k) || k.includes(p.k))?.img : undefined }

// Foto general de un parque / destino
const hero = loc => loc === 'disneyland' ? IMG.parqueDisneyland?.hero : loc === 'adventure' ? IMG.parqueAdventure?.hero : loc === 'village' ? IMG.comer?.sinEntrada?.[0] : undefined
// Foto de la sección de restaurantes / tiendas de cada parque
const seccion = (tipo, loc) => loc === 'disneyland' ? IMG.parqueDisneyland?.[tipo] : loc === 'adventure' ? IMG.parqueAdventure?.[tipo] : tipo === 'restaurantes' ? IMG.comer?.sinEntrada?.[loc === 'village' ? 0 : 1] : undefined

// Fotos candidatas de un elemento de Explorar: { tipo, n, loc, slug }
export function fotosExplorar(it) {
  const c = [IMG.explorar?.item?.(it.tipo, it.slug)]
  if (it.tipo === 'hoteles') { const n = HOTEL_N[it.loc]; c.push(IMG.hotelEntradas?.hotels?.[n]?.[0], IMG.inicio?.hotel?.[n - 1], IMG.hotelesDisney?.alojamiento?.[0]) }
  else {
    c.push(delParque(it.n))
    if (it.tipo === 'restaurantes' || it.tipo === 'tiendas') c.push(seccion(it.tipo, it.loc))
    c.push(hero(it.loc))
  }
  return c.filter(Boolean)
}

// Convierte la lista de fotos en el valor CSS de varias imágenes de fondo (la primera que cargue, se ve)
export const fondo = lista => (lista || []).filter(Boolean).map(u => `url("${u}")`).join(', ') || 'none'
