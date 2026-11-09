import { useEffect } from 'react'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import Feedback from '../../components/Feedback.jsx'
import { IMG } from '../../config/images.js'
import { CATEGORIAS, ORDEN } from './categoriaData.js'
import './categoria.css'
import { initCategoria } from './categoria.js'

// Plantilla ÚNICA de las páginas del menú lateral (Parques, Películas, Series, Productoras, Videojuegos, Personajes, Historia, Más).
// Recibe el id de la categoría (<Categoria cat="peliculas" />). Textos → categoriaData.js · Imágenes → src/config/images.js (bloque "categorias")
const bg = u => ({ '--img': `url(${u})` })
const Orn = () => <svg className="ct-orn" viewBox="0 0 500 50" aria-hidden="true"><g fill="none" stroke="#e0b24a" strokeWidth="1.6" strokeLinecap="round"><path d="M12 30c0-9 12-9 12 0M24 30h200c10 0 16-5 22-12M488 30c0-9-12-9-12 0M476 30H276c-10 0-16-5-22-12" /><path d="M250 4v26M245 14l5-10 5 10M250 30c-6 4-6 10 0 14 6-4 6-10 0-14" /></g></svg>

export default function Categoria({ cat }) {
  const d = CATEGORIAS[cat]
  useEffect(() => initCategoria(), [cat])
  if (!d) return null
  const I = IMG.categorias[cat]
  const tl = d.vista === 'timeline'

  const cards = d.items.map((it, i) => {
    const card = (
      <div className="ct-card">
        <div className="ct-img" style={bg(I.item(it.slug))}><span className="ct-num">{String(i + 1).padStart(2, '0')}</span></div>
        <div className="ct-body"><h3>{it.n}</h3>{it.s && <em>{it.s}</em>}<p>{it.t}</p>{it.enlace && <a href={it.enlace}>Ver la página ›</a>}</div>
      </div>)
    const common = { id: it.slug, 'data-s': `${it.n} ${it.s} ${it.t}` }
    return tl
      ? <li key={it.slug} {...common} className={'ct-cardw ct-rev' + (i % 2 ? ' r' : '')}><span className="ct-dot" />{card}</li>
      : <article key={it.slug} {...common} className="ct-cardw ct-rev">{card}</article>
  })

  return (
    <div id="cat" style={{ '--c1': d.c1, '--c2': d.c2 }}>
      <Header />

      {/* 🖼️ HEADER de la página → src/config/images.js (categorias.<id>.hero) */}
      <section className="ct-hero" style={bg(I.hero)}>
        <div className="ct-hero-in"><span className="ct-eyebrow">{d.icon} EXPLORA EL UNIVERSO DISNEY</span><h1>{d.titulo}</h1></div>
        <nav className="ct-switch" aria-label="Categorías del mundo Disney"><div className="ct-pills">
          {ORDEN.map(k => <a key={k} href={'/' + CATEGORIAS[k].ruta} className={k === cat ? 'on' : ''}>{CATEGORIAS[k].icon} {CATEGORIAS[k].label}</a>)}
        </div></nav>
      </section>

      <section className="ct-intro ct-rev">
        <p>{d.texto}</p>
        <div className="ct-feats">{d.datos.map((x, i) => <div key={i}><span>{x[0]}</span><p>{x[1]}</p></div>)}</div>
        <a className="ct-link" href="#lista">Explorar ahora ↓</a>
      </section>

      <section className="ct-wrap" id="lista">
        <Orn /><h2 className="ct-h">{d.lista}</h2>
        <div className="ct-filter">
          <input id="ct-q" type="search" placeholder={`Buscar en ${d.label}…`} autoComplete="off" aria-label={`Buscar en ${d.label}`} />
          <span className="ct-count"><b>{d.items.length}</b> resultados</span>
        </div>
        {tl ? <ol className="ct-tl">{cards}</ol> : <div className="ct-grid">{cards}</div>}
        <p className="ct-empty">No hemos encontrado nada con esa búsqueda. ¡Prueba con otra palabra!</p>
      </section>

      <section className="ct-sab"><div className="ct-wrap">
        <h2 className="ct-h">¿Sabías que…?</h2>
        <div className="ct-3">{d.sabias.map(s => <div className="ct-sabc ct-rev" key={s[0]}><span>✨</span><b>{s[0]}</b><p>{s[1]}</p></div>)}</div>
      </div></section>

      {/* 🖼️ Banner final → src/config/images.js (categorias.<id>.banner) */}
      <section className="ct-wrap"><div className="ct-cta ct-rev" style={bg(I.banner)}>
        <h2>{d.cta.titulo}</h2><p>{d.cta.texto}</p><a className="ct-btn" href={d.cta.enlace}>{d.cta.boton}</a>
      </div></section>

      <section className="ct-more"><div className="ct-wrap">
        <h2 className="ct-h">Sigue explorando el mundo Disney</h2>
        <div className="ct-mg">{ORDEN.filter(k => k !== cat).map(k => (
          <a href={'/' + CATEGORIAS[k].ruta} className="ct-mc ct-rev" key={k} style={{ '--c1': CATEGORIAS[k].c1, '--c2': CATEGORIAS[k].c2 }}>
            <span>{CATEGORIAS[k].icon}</span><b>{CATEGORIAS[k].label}</b><small>{CATEGORIAS[k].items.length} elementos</small></a>))}</div>
      </div></section>

      <Footer />
      <Feedback />
    </div>
  )
}
