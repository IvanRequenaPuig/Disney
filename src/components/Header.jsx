// Cabecera común: menú centrado, accesos rápidos, buscador y submenú.
import { MENUS, Thumb } from './menus.jsx'
import { IMG } from '../config/images.js'
import Drawer from './Drawer.jsx'
import Flag from './Flag.jsx'
import './header.css'
import { webActual } from './translate.js'

// Enlaces de los elementos del submenú que ya tienen página (el resto apunta a # de momento)
// Webs externas de la cabecera (logo de Marvel a la izquierda del logo de Disneyland Paris y logo de Star Wars a la derecha)
const WEB_MARVEL = 'https://marvelwebfan.netlify.app/'
const WEB_STARWARS = 'https://ivanrequenapuig.github.io/StarWars/'

const PAGES = { 'Hoteles Disney': '/hoteles-disney', 'Ver todos los Hoteles': '/explorar?tipo=hoteles', 'Ver todos los restaurantes': '/explorar?tipo=restaurantes', 'Entradas con fecha y Paquetes de Hotel para Disneyland Paris': '/entradas-y-paquetes', 'Reservar un Paquete Hotel + Entradas': '/hoteles', 'Comprar Entradas a los Parques Disney': '/entradas', 'Parque Disneyland': '/parque-disneyland', 'Disney Adventure World': '/disney-adventure-world', 'Atracciones para todos': '/parque-disneyland#atracciones', 'Espectáculos y Cabalgatas': '/parque-disneyland#espectaculos', 'Encuentros con Personajes': '/parque-disneyland#personajes', 'Las temporadas en Disneyland Paris': '/parque-disneyland#temporadas', 'Dónde comer en Disneyland Paris': '/donde-comer', 'Nuestros Planes de Comidas': '/donde-comer#planes' }

// Bandera del botón de idioma: la de la web elegida (International → Reino Unido)
const BANDERA = { eur: 'gb', usd: 'gb' }

export default function Header() {
  return (
    <>
      <header className="dl-header">
        <div className="dl-top">
          {/* Izquierda: botones Entradas y Hotel + Entradas (a la altura de los logos) */}
          <div className="dl-cta"><a className="btn-dl" href="/entradas">🎟 Entradas</a><a className="btn-dl" href="/hoteles">🏨 Hotel + Entradas</a></div>
          {/* Centro: logo de Marvel · logo de Disneyland Paris · logo de Star Wars */}
          <div className="dl-brand">
            <a href={WEB_MARVEL} className="dl-side dl-marvel" target="_blank" rel="noopener noreferrer" aria-label="Web de Marvel" title="Web de Marvel">
              <img src={IMG.comun.marvel} alt="Marvel" />
            </a>
            <a href="/" className="logo" aria-label="Disneyland Paris - Inicio">
              <img src={IMG.comun.logo} alt="Disneyland Paris" className="logo-img" />
              <small>PARIS</small>
            </a>
            <a href={WEB_STARWARS} className="dl-side dl-starwars" target="_blank" rel="noopener noreferrer" aria-label="Web de Star Wars" title="Web de Star Wars">
              <img src={IMG.comun.starwars} alt="Star Wars" />
            </a>
          </div>
          {/* Derecha: castillo (abre el menú Mundo Disney) + Horarios, lupa, idioma y Registrarse */}
          <div className="dl-tools">
            <button className="dl-castle" aria-label="Abrir menú Mundo Disney" type="button">
              <img src={IMG.comun.castillo} alt="" />
            </button>
            <a href="/horarios" className="dl-tool dl-hours"><span className="dl-tool-icon">◷</span><span>Horarios de los Parques</span></a>
            <a href="/buscar" className="dl-tool dl-search-btn" aria-label="Abrir página de búsqueda" title="Buscar"><span className="dl-tool-icon dl-search-glyph" /></a>
            <a href="/idioma" className="dl-tool dl-language" aria-label="Cambiar idioma" title="Cambiar idioma"><span data-current-flag><Flag code={BANDERA[webActual()] || webActual()} /></span></a>
            <a href="/registro" className="dl-tool dl-reg"><span className="dl-tool-icon dl-user-glyph" /><span>Registrarse</span></a>
          </div>
        </div>
        <nav className="dl-nav" aria-label="Navegación principal">
          <ul className="nav gap-4">{Object.entries(MENUS).map(([k, m]) => <li key={k} data-menu={k} className="nav-item">{m.label}</li>)}</ul>
        </nav>
        <div className="mega">
          {Object.entries(MENUS).map(([k, m]) => (
            <div className="mega-panel" data-menu={k} key={k}>
              <div className="mega-top">
                {m.main && <div className="mega-main">{m.main.map(i => <a href={PAGES[i[1]] || '#'} key={i[1]}><span className="mi">{i[0]}</span><strong>{i[1]}</strong>{i[2] && <small>{i[2]}</small>}</a>)}</div>}
                {m.side && <div className="mega-side">{m.side.map(i => <a href={PAGES[i[1]] || '#'} key={i[1]}><span className="mi">{i[0]}</span><strong>{i[1]}</strong></a>)}</div>}
                {m.row && <div className="mega-row">{m.row.map(i => <a href={PAGES[i[1]] || '#'} key={i[1]}><span className="mi">{i[0]}</span><strong>{i[1]}</strong></a>)}</div>}
              </div>
              <div className="mega-bottom">
                <ul>{m.links.map(l => <li key={l}><a href="#">{l}</a></li>)}<li><a href={PAGES[m.more] || '#'} className="more">{m.more}</a></li></ul>
                <div className="mega-promos">{m.promos.map(p => (
                  <a href="#" className="promo" key={p[1]}><Thumb img={p[0]} cls="promo-img" />{p[2] && <em>{p[2]}</em>}<span>{p[1]}</span></a>
                ))}</div>
              </div>
            </div>
          ))}
        </div>
      </header>
      <Drawer />
    </>
  )
}
