// Índice del buscador: reúne TODO el contenido de la web en una sola lista para poder buscar en ella.
// Fuentes: Explorar (atracciones, restaurantes, hoteles, tiendas…), menú Mundo Disney (películas, series, parques…) y páginas principales.
// Para que aparezca algo nuevo en el buscador basta con añadirlo en su archivo de datos (o en PAGINAS, abajo).
import { ITEMS_ALL, TIPOS, NOMBRE } from '../pages/explorar/explorarData.js'
import { CATEGORIAS, ORDEN } from '../pages/categoria/categoriaData.js'
import { DRAWER } from '../components/drawerData.js'
import { IMG } from '../config/images.js'
import { fotosExplorar } from './fotos.js'

const TIPO = Object.fromEntries(TIPOS.map(t => [t.id, t]))

// 1) Contenido de Explorar Disneyland Paris
const explorar = ITEMS_ALL.map(x => ({
  grupo: x.tipo, tipo: TIPO[x.tipo]?.label || x.tipo, icono: TIPO[x.tipo]?.icon || '✨',
  n: x.n, sub: [NOMBRE[x.loc] || x.loc, x.zona].filter(Boolean).join(' · '), t: '', fotos: fotosExplorar(x),
  enlace: `/explorar?tipo=${x.tipo}&parque=${x.loc}`,
}))

// 2) Menú lateral Mundo Disney (parques del mundo, películas, series, productoras, videojuegos…)
const mundo = ORDEN.flatMap(k => {
  const c = CATEGORIAS[k]
  const dr = DRAWER.find(d => d.id === k)
  // foto: la de Categorias/<id>/<slug>.jpg si existe y, si no, la del propio menú del castillo
  return c.items.map((it, i) => ({ grupo: 'mundo-' + k, tipo: c.label, icono: c.icon, n: it.n, sub: it.s, t: it.t, enlace: it.enlace || `/${c.ruta}#${it.slug}`, fotos: [IMG.categorias?.[k]?.item?.(it.slug), dr?.items[i]?.[3]].filter(Boolean) }))
})

// 3) Páginas principales de la web
const PAGINAS = [
  ['Parque Disneyland', 'Atracciones, espectáculos, personajes y mapa', '/parque-disneyland', '🏰', IMG.parqueDisneyland?.hero],
  ['Disney Adventure World', 'El segundo parque de Disneyland Paris', '/disney-adventure-world', '🎢', IMG.parqueAdventure?.hero],
  ['Hoteles Disney', 'Alójate en el corazón de la magia', '/hoteles-disney', '🛏', IMG.hotelesDisney?.hero],
  ['Hotel + Entradas', 'Reserva tu paquete con hotel y entradas', '/hoteles', '🏨', IMG.hotelEntradas?.hotels?.[1]?.[0] || IMG.inicio?.hotel?.[0]],
  ['Entradas', 'Compra entradas a los Parques Disney', '/entradas', '🎟', IMG.entradas?.header],
  ['Entradas con fecha y Paquetes de Hotel', 'Calendario de precios y paquetes', '/entradas-y-paquetes', '🎟', IMG.parqueDisneyland?.entradas],
  ['Horarios de los Parques', 'Calendario y horarios de cada parque', '/horarios', '🕘', IMG.horarios?.header],
  ['Dónde comer en Disneyland Paris', 'Restaurantes y planes de comidas', '/donde-comer', '🍴', IMG.comer?.hero],
  ['Registrarse', 'Crea tu cuenta MyDisney', '/registro', '👤'],
  ['Idioma', 'Elige el idioma de la web', '/idioma', '🌐'],
].map(p => ({ grupo: 'paginas', tipo: 'Páginas', icono: p[3], n: p[0], sub: p[1], t: '', enlace: p[2], fotos: [p[4]].filter(Boolean) }))

export const INDICE = [...PAGINAS, ...explorar, ...mundo]

const norm = s => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
INDICE.forEach(r => { r._n = norm(r.n); r._o = norm([r.sub, r.tipo, r.t].join(' ')) })

// Busca por palabras (todas deben aparecer) y ordena: nombre empieza por… > nombre contiene… > resto de campos
export function buscar(texto) {
  const toks = norm(texto).split(/\s+/).filter(Boolean)
  if (!toks.length) return INDICE
  return INDICE.map(r => {
    let s = 0
    for (const t of toks) {
      if (r._n.startsWith(t)) s += 4
      else if (r._n.includes(' ' + t)) s += 3
      else if (r._n.includes(t)) s += 2
      else if (r._o.includes(t)) s += 1
      else return null
    }
    return [s, r]
  }).filter(Boolean).sort((a, b) => b[0] - a[0] || a[1].n.localeCompare(b[1].n)).map(x => x[1])
}
