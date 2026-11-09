import { useEffect, useMemo, useRef, useState } from 'react'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import Feedback from '../../components/Feedback.jsx'
import { IMG } from '../../config/images.js'
import { buscar } from '../../data/searchIndex.js'
import { fondo } from '../../data/fotos.js'
import './buscar.css'
import { initBuscar } from './buscar.js'

// 🖼️ Imagen del header → src/config/images.js (buscar.header)
// El contenido que se busca sale de src/data/searchIndex.js (atracciones, restaurantes, hoteles, películas, series, páginas…)
const F = IMG.buscar
const SUGERENCIAS = ['Big Thunder Mountain', 'Space Mountain', 'Restaurantes', 'Hoteles', 'Star Wars', 'Frozen', 'Fantasyland', 'Disney Village']
const PAGINA = 36

export default function Buscar() {
  const [texto, setTexto] = useState(() => (new URLSearchParams(window.location.search).get('q') || '').trim())
  const [filtro, setFiltro] = useState('all')
  const [max, setMax] = useState(PAGINA)
  const inputRef = useRef(null)

  useEffect(() => initBuscar(), [])
  useEffect(() => { if (!texto) inputRef.current?.focus() }, [])

  const q = texto.trim()
  const res = useMemo(() => buscar(q), [q])
  // Pestañas según los tipos que tengan resultados (Todo + cada tipo con su número)
  const tabs = useMemo(() => {
    const m = new Map(); res.forEach(r => m.set(r.tipo, (m.get(r.tipo) || 0) + 1))
    return [['all', 'Todo', res.length], ...[...m].sort((a, b) => b[1] - a[1]).map(([t, n]) => [t, t, n])]
  }, [res])
  const activo = tabs.some(t => t[0] === filtro) ? filtro : 'all'
  const lista = activo === 'all' ? res : res.filter(r => r.tipo === activo)

  // Escribir: se busca al momento y la dirección se actualiza sin recargar la página
  const cambia = v => {
    setTexto(v); setMax(PAGINA); setFiltro('all')
    const u = v.trim() ? `/buscar?q=${encodeURIComponent(v.trim())}` : '/buscar'
    window.history.replaceState(null, '', u)
  }
  const elegir = v => { cambia(v); inputRef.current?.focus() }

  return (
    <div id="buscar">
      <Header />
      <section className="bs-hero" style={{ '--hero': `url(${F.header})` }}>
        <div className="bs-hero-in">
          <span className="bs-kicker">✦ Disneyland Paris ✦</span>
          <h1>¿Qué quieres descubrir?</h1>
          <p>Atracciones, tiendas, restaurantes, hoteles, películas y mucho más, en un solo lugar.</p>
          <form className="bs-form" role="search" onSubmit={e => { e.preventDefault(); inputRef.current?.blur() }}>
            <span className="bs-lupa" aria-hidden="true" />
            <input
              type="text"
              ref={inputRef}
              value={texto}
              onChange={e => cambia(e.target.value)}
              placeholder="Busca atracciones, restaurantes, hoteles, películas…"
              autoComplete="off"
              aria-label="Buscar"
            />
            {texto && <button className="bs-clear" type="button" aria-label="Borrar búsqueda" onClick={() => elegir('')}>×</button>}
            <button type="submit">Buscar</button>
          </form>
          <div className="bs-sug"><span>Prueba con:</span>{SUGERENCIAS.map(s => <button type="button" key={s} onClick={() => elegir(s)}>{s}</button>)}</div>
        </div>
        <svg className="bs-wave" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 60V28C240 0 480 0 720 22s480 30 720 6v32z" fill="#f6f6f6" /></svg>
      </section>

      <div className="bs-wrap">
        <nav className="bs-crumb" aria-label="Ruta"><a href="/">Inicio</a><i>›</i><span>Buscar</span></nav>
        <div className="bs-top">
          <h2>{q ? <>Resultados para <em>“{q}”</em></> : 'Explora todo Disneyland Paris'}</h2>
          <span className="bs-count"><b>{lista.length}</b> resultado{lista.length === 1 ? '' : 's'}</span>
        </div>
        <div className="bs-tabs" role="tablist">{tabs.map(t => <button key={t[0]} type="button" className={'bs-tab' + (t[0] === activo ? ' on' : '')} role="tab" onClick={() => { setFiltro(t[0]); setMax(PAGINA) }}><span>{t[1]}</span><b>{t[2]}</b></button>)}</div>

        {res.length === 0 && (
          <div className="bs-empty"><div>🔍</div><h3>No hemos encontrado nada</h3><p>Prueba con otra palabra o explora estas ideas:</p>
            <div className="bs-sug dark">{SUGERENCIAS.map(s => <button type="button" key={s} onClick={() => elegir(s)}>{s}</button>)}</div></div>
        )}

        <div className="bs-grid">
          {lista.slice(0, max).map(r => (
            <a href={r.enlace} className="bs-card" data-t={r.grupo} key={r.grupo + r.n + r.enlace}>
              <div className="bs-img" style={{ '--img': fondo(r.fotos) }}><span className="bs-badge">{r.icono} {r.tipo}</span></div>
              <div className="bs-body">
                <h3>{r.n}</h3>
                {r.sub && <div className="bs-det"><small>{r.sub}</small></div>}
                {r.t && <p>{r.t}</p>}
                <span className="bs-more">Ver más <i>›</i></span>
              </div>
            </a>
          ))}
        </div>
        {lista.length > max && <div className="text-center mt-4"><button type="button" className="btn-dl" onClick={() => setMax(max + PAGINA)}>Ver más resultados</button></div>}
      </div>
      <Footer />
      <Feedback />
    </div>
  )
}
