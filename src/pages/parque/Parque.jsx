import { useEffect } from 'react'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import Feedback from '../../components/Feedback.jsx'
import PriceCalendar from '../../components/PriceCalendar.jsx'
import { IMG } from '../../config/images.js'
import './parque.css'
import { initParque } from './parque.js'

// Plantilla de la página de un parque: recibe el objeto de datos (parqueDisneylandData.js). 🖼️ Imágenes → src/config/images.js
const bg = u => ({ '--img': `url(${u})` })
const html = t => ({ __html: t })
const PARKS = [['Parque Disneyland', '/parque-disneyland', 'disneyland'], ['Disney Adventure World', '/disney-adventure-world', 'adventure']]
const GRAD = [['#ffb08a', '#c58be0'], ['#c6a0f0', '#7b62c8'], ['#7fb6ee', '#c8def6']]
const Comp = () => <svg className="pk-orn comp" viewBox="0 0 500 50" aria-hidden="true"><defs><linearGradient id="cgL"><stop offset="0" stopColor="#5a9af0" stopOpacity="0" /><stop offset="1" stopColor="#2b2470" /></linearGradient><linearGradient id="cgR"><stop offset="0" stopColor="#d04a8a" /><stop offset="1" stopColor="#d04a8a" stopOpacity="0" /></linearGradient><linearGradient id="cgS" x1="0" x2="1"><stop offset="0" stopColor="#2b8cf0" /><stop offset="1" stopColor="#e83e8c" /></linearGradient></defs><path d="M20 26H236" stroke="url(#cgL)" strokeWidth="2.5" /><path d="M264 26H480" stroke="url(#cgR)" strokeWidth="2.5" /><path d="M250 2l5 19 20 4-20 4-5 19-5-19-20-4 20-4z" fill="url(#cgS)" /></svg>
const Orn = () => <svg className="pk-orn" viewBox="0 0 500 50" aria-hidden="true"><g fill="none" stroke="#e0b24a" strokeWidth="1.6" strokeLinecap="round"><path d="M12 30c0-9 12-9 12 0M24 30h200c10 0 16-5 22-12M488 30c0-9-12-9-12 0M476 30H276c-10 0-16-5-22-12" /><path d="M250 4v26M245 14l5-10 5 10M250 30c-6 4-6 10 0 14 6-4 6-10 0-14" /></g></svg>
const Div = ({ k }) => (k === 'compass' ? <Comp /> : <Orn />)
const Switch = ({ id }) => <div className="pk-switch">{PARKS.map(p => <a key={p[2]} href={p[1]} className={p[2] === id ? 'on' : ''}>{p[0]}</a>)}</div>

export default function Parque({ data: d }) {
  // Enlace de los botones "Ver todos…" → página Explorar con el tipo y el parque de esta página
  const ver = (tipo, interes) => `/explorar?tipo=${tipo}&parque=${d.id}${interes ? '&interes=' + interes : ''}`
  useEffect(() => initParque(), [])
  const Map = ({ extra }) => d.zonas ? (
    <div className={'pk-mapbox aw-map' + (extra ? ' big' : '')}>
      <img className="aw-base" src={d.mapa} alt={`Mapa de ${d.nombre}`} />
      {d.zonas.map(z => (
        <div className="aw-z" key={z.n} style={{ '--poly': z.poly, '--c': z.c }}>
          <div className="aw-lift"><div className="aw-clip"><img src={d.mapa} alt="" /></div>
            <span className="aw-pin" style={{ left: z.pin[0] + '%', top: z.pin[1] + '%' }}><i /><span className="aw-lab">{z.n} ›</span></span></div>
          <div className="aw-hit" aria-label={z.n} />
        </div>))}
    </div>
  ) : (
    <div className={'pk-mapbox' + (extra ? ' big' : '')}>
      <img src={d.mapa} alt={`Mapa del ${d.nombre}`} />
      {d.tierras.map((t, i) => (
        <button className="pk-pin" key={t.n} style={{ left: t.pos[0] + '%', top: t.pos[1] + '%', '--c': t.c }} aria-label={t.n}>
          <i /><div className="pk-tip"><b style={{ color: t.c }}>{t.n}</b><span>{t.t}</span></div>
        </button>
      ))}
    </div>
  )
  return (
    <div id="parque" className={d.tema || ''}>
      <div className="pk-bar"><Switch id={d.id} /></div>
      <Header />
      {/* 🖼️ HEADER del parque → src/config/images.js (parqueDisneyland.hero) */}
      <section className="pk-hero" style={{ '--hero': `url(${d.hero})` }}>
        {d.heroVideo && <video className="pk-video" src={d.heroVideo} poster={d.hero} autoPlay muted loop playsInline onError={e => { e.currentTarget.style.display = 'none' }} />}
        {d.heroLogo && <><img className="pk-herologo" src={d.heroLogo} alt={d.nombre} onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'block' }} /><span className="pk-herotext" style={{ display: 'none' }}>{d.nombre}</span></>}
        {d.heroVideo && <button className="pk-pause" aria-label="Pausar vídeo">⏸</button>}
        <div className="pk-heroswitch"><Switch id={d.id} /></div></section>

      <section className="pk-intro pk-rev"><h1 dangerouslySetInnerHTML={html(d.intro.titulo)} /><p dangerouslySetInnerHTML={html(d.intro.texto)} />
        <div className="pk-feats">{d.intro.items.map((x, i) => <div key={i}><span>{x[0]}</span><p dangerouslySetInnerHTML={html(x[1])} /></div>)}</div>
        <a className="pk-link" href={d.intro.enlace[1]}>{d.intro.enlace[0]}</a></section>

      <section className="pk-map" id="mapa"><h2>{d.tierraTitulo}</h2><Map />
        <button className="btn-dl" data-open="#pk-modal">Ver el mapa</button></section>

      <section className="pk-wrap" id="atracciones"><Div k={d.divisor} /><h2 className="pk-h">{d.atracciones.titulo}</h2>
        <div className="pk-cs"><div className="pk-view"><div className="pk-track">{d.atracciones.items.map((a, i) => (
          <article className="pk-cardw" key={a[0]}><div className="pk-card" style={{ '--g1': GRAD[i % 3][0], '--g2': GRAD[i % 3][1] }}>
            <div className="pk-cimg" style={bg(IMG_AT(d, i))} /><div className="pk-cbody"><h3 dangerouslySetInnerHTML={html(a[0])} /><p dangerouslySetInnerHTML={html(a[1])} /><a href="#">{d.atracciones.enlace}</a></div></div></article>
        ))}</div></div>
          <div className="pk-arrows"><button className="pk-prev" aria-label="Anterior">‹</button><button className="pk-next" aria-label="Siguiente">›</button></div>
          <div className="pk-dots">{Array.from({ length: Math.max(1, d.atracciones.items.length - 2) }, (_, i) => <i key={i} className={'pk-dot' + (i ? '' : ' on')} />)}</div></div>
        {d.atracciones.boton && <div className="text-center mt-4"><a className="btn-outline-dl" href={ver('atracciones')}>{d.atracciones.boton}</a></div>}
      </section>

      <div className="pk-banner" style={bg(d.banner)} />

      <section className="pk-wrap" id="espectaculos"><h2 className="pk-h" dangerouslySetInnerHTML={html(d.espectaculos.titulo)} />
        {(() => {
          const cards = d.espectaculos.items.map((s, i) => (
            <article className="pk-show pk-rev" key={s[0]}><div className="pk-simg" style={bg(IMG_LIST(d, 'espectaculos', i))} /><h3>{s[0]}</h3><p dangerouslySetInnerHTML={html(s[1])} /><a href="#">{s[2]}</a></article>))
          return d.espectaculos.carrusel
            ? <div className="pk-cs pk-cs2"><div className="pk-view"><div className="pk-track">{cards.map((c, i) => <div className="pk-cardw" key={i}>{c}</div>)}</div></div>
              <div className="pk-arrows"><button className="pk-prev" aria-label="Anterior">‹</button><button className="pk-next" aria-label="Siguiente">›</button></div></div>
            : <div className="pk-3">{cards}</div>
        })()}
        <div className="text-center mt-4"><a className="btn-outline-dl" href={ver('entretenimiento', 'espectaculos,cabalgatas')}>{d.espectaculos.boton}</a></div></section>

      <section className="pk-wrap pk-chars" id="personajes"><h2 className="pk-h">{d.personajes.titulo}</h2><p className="pk-sub" dangerouslySetInnerHTML={html(d.personajes.sub)} />
        <div className="pk-3 pk-circles">{d.personajes.items.map((c, i) => (
          <a href="#" className="pk-circ pk-rev" key={c[0]}><div className="pk-cimgc" style={bg(IMG_LIST(d, 'personajes', i))} /><b>{c[0]}{c[1] ? ' ›' : ''}</b>{c[1] && <small>{c[1]}</small>}</a>))}</div>
        <div className="text-center mt-4"><a className="btn-outline-dl" href={ver('entretenimiento', 'personajes')}>{d.personajes.boton}</a></div>
        <p className="pk-note" dangerouslySetInnerHTML={html(d.personajes.nota)} /><p className="pk-note">{d.personajes.nota2}</p></section>

      <section className="pk-pink"><div className="pk-wrap">
        {[d.restaurantes, d.tiendas].map((b, i) => (
          <div className={'pk-split pk-rev' + (i ? ' rev' : '')} key={b.titulo}><div><h3>{b.titulo}</h3><p>{b.texto}</p><a className="btn-outline-dl" href={ver(i ? 'tiendas' : 'restaurantes')}>{b.boton}</a></div><div className="pk-simg2" style={bg(b.img)} /></div>))}
        {!d.temporadas && <Div k={d.divisor} />}
      </div></section>

      {d.temporadas && <section className="pk-white" id="temporadas"><div className="pk-wrap"><div className="pk-split pk-rev"><div><h3>{d.temporadas.titulo}</h3><p>{d.temporadas.texto}</p><a className="btn-outline-dl" href="#">{d.temporadas.boton}</a></div><div className="pk-simg2" style={bg(d.temporadas.img)} /></div><Orn /></div></section>}

      <section className="pk-plan" id="calendario"><div className="pk-wrap"><h2 className="pk-h">{d.calendario.titulo}</h2><p className="pk-sub">{d.calendario.texto}</p>
        <div className="pk-chips">{d.calendario.notas.map(n => <div key={n[1]}><span>{n[0]}</span>{n[1]}</div>)}</div>
        <PriceCalendar /><p className="pk-note left">{d.calendario.pie}</p>
        {[d.entradas, d.dias].map((b, i) => (
          <div className={'pk-split pk-rev' + (i ? '' : ' rev')} key={b.titulo}><div><h3>{b.titulo}</h3><p>{(b.lineas || [b.texto]).map((l, k) => <span key={k}>{l}<br /></span>)}</p><a className="btn-outline-dl" href={b.enlace}>{b.boton}</a></div><div className="pk-simg2" style={bg(b.img)} /></div>))}
      </div></section>

      <section className="pk-faqband"><div className="pk-faq"><h4>❓ {d.faqTitulo}</h4>{d.faq.map(q => (
        <div className="acc-i" key={q[0]}><button className="acc-q"><span>{q[0]}</span><b>+</b></button><div className="acc-a" style={{ display: 'none' }} dangerouslySetInnerHTML={html(q[1])} /></div>))}</div>
        <div className="pk-cond"><h3>CONDICIONES</h3>{d.condiciones.map(c => <p key={c}>{c}</p>)}</div></section>

      <Footer />

      <div className="pk-modal" id="pk-modal"><div className="pk-mbox"><button className="pk-x" aria-label="Cerrar">✕</button><h3>Mapa del {d.nombre}</h3><Map extra />
        <ul className="pk-legend">{(d.tierras || d.zonas).map(t => <li key={t.n}><i style={{ background: t.c }} />{t.n}</li>)}</ul></div></div>
      <Feedback />
    </div>
  )
}
// imágenes por índice (definidas en src/config/images.js)
function IMG_AT(d, i) { return d.imgs?.atracciones?.[i] || IMG.parqueDisneyland.atracciones[i] }
function IMG_LIST(d, k, i) { return d.imgs?.[k]?.[i] || IMG.parqueDisneyland[k][i] }
