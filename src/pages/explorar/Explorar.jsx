import { useEffect, useState } from 'react'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import Feedback from '../../components/Feedback.jsx'
import { IMG } from '../../config/images.js'
import { fotosExplorar, fondo } from '../../data/fotos.js'
import { TIPOS, GRUPOS, HOTELES_IDS, NOMBRE, INTERESES, ALTURAS, EDADES, ACCESO, ORDENES, ITEMS_ALL } from './explorarData.js'
import './explorar.css'
import { initExplorar } from './explorar.js'

// Página "Explorar Disneyland Paris": la abren TODOS los botones "Ver todos…" del sitio.
// Qué muestra se decide por la URL (ver explorarData.js): /explorar?tipo=atracciones&parque=disneyland
// Textos y elementos → explorarData.js · Imágenes → src/config/images.js (bloque "explorar") y carpeta public/img/Explorar/
const bg = u => ({ '--img': `url(${u})` })
const norm = s => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
const csv = v => (v ? v.split(',').filter(Boolean) : [])
const tog = (arr, v) => (arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v])
const alt = c => (c ? (c >= 100 ? (c / 100).toFixed(2).replace('.', ',') + ' m' : c + ' cm') : 'Cualquier altura')

function leerUrl() {
  const p = new URLSearchParams(window.location.search)
  const tipo = TIPOS.some(t => t.id === p.get('tipo')) ? p.get('tipo') : 'atracciones'
  const par = p.get('parque') || 'todos'
  const locs = par === 'hoteles' ? HOTELES_IDS : par === 'todos' ? [] : csv(par).filter(x => NOMBRE[x])
  const validos = (INTERESES[tipo] || []).map(i => i[0])
  return { tipo, locs, fi: csv(p.get('interes')).filter(c => validos.includes(c)) }
}

// Enlace de cada fila: a la página que ya existe en el sitio
function enlace(it) {
  const park = it.loc === 'disneyland' ? '/parque-disneyland' : it.loc === 'adventure' ? '/disney-adventure-world' : null
  if (it.tipo === 'atracciones' && park) return park + '#atracciones'
  if (it.tipo === 'entretenimiento' && park) return park + (it.int.includes('personajes') ? '#personajes' : '#espectaculos')
  if (it.tipo === 'parques') return park || '/'
  if (it.tipo === 'hoteles') return '/hoteles-disney'
  if (it.tipo === 'restaurantes') return '/donde-comer'
  return '#'
}

// Desplegable de filtro (se abre/cierra con jQuery en explorar.js; el contenido lo pinta React)
const Filtro = ({ titulo, opts, sel, onTog, onClear }) => (
  <div className="ex-dd ex-fg">
    <button type="button" className="ex-dd-btn"><span className="ex-dd-t">{titulo}</span><i className="ex-car" /></button>
    <div className="ex-pop">
      <div className="ex-pop-in">{opts.map(o => (
        <label key={o[0]} className="ex-chk"><input type="checkbox" checked={sel.includes(o[0])} onChange={() => onTog(o[0])} /><span>{o[1]}</span></label>))}
      </div>
      <button type="button" className="ex-reset" onClick={onClear}>Restablecer filtros</button>
    </div>
  </div>
)

export default function Explorar() {
  const ini = leerUrl()
  const [tipo, setTipo] = useState(ini.tipo)
  const [locs, setLocs] = useState(ini.locs)
  const [vista, setVista] = useState('lista')
  const [orden, setOrden] = useState('disney')
  const [q, setQ] = useState('')
  const [fi, setFi] = useState(ini.fi)   // intereses
  const [fa, setFa] = useState([])       // altura
  const [fe, setFe] = useState([])       // edades
  const [fc, setFc] = useState([])       // accesibilidad
  useEffect(() => initExplorar(), [])

  const T = TIPOS.find(t => t.id === tipo)
  const base = ITEMS_ALL.filter(it => tipo === 'todo' || it.tipo === tipo)
  const hayEn = id => base.some(it => it.loc === id)
  const lista = base
    .filter(it => !locs.length || locs.includes(it.loc))
    .filter(it => !q || norm(it.n + ' ' + it.zona).includes(norm(q)))
    .filter(it => !fi.length || fi.some(c => it.int.includes(c)))
    .filter(it => !fa.length || fa.some(h => (h === 0 ? it.alt === 0 : it.alt <= h)))
    .filter(it => !fe.length || fe.some(c => it.ed.includes(c) || it.ed.includes('all')))
    .filter(it => fc.every(c => it.ac.includes(c)))
    .sort((a, b) => (orden === 'az' ? a.n.localeCompare(b.n) : orden === 'za' ? b.n.localeCompare(a.n) : a.id - b.id))

  // La URL siempre refleja lo elegido (se puede copiar y compartir)
  useEffect(() => {
    const p = new URLSearchParams({ tipo, parque: locs.length ? locs.join(',') : 'todos' })
    if (fi.length) p.set('interes', fi.join(','))
    window.history.replaceState(null, '', '?' + p.toString())
  }, [tipo, locs, fi])

  const cambiaTipo = id => {
    setTipo(id); setFi([]); setFa([]); setFe([]); setFc([]); setQ('')
    const nuevos = ITEMS_ALL.filter(it => id === 'todo' || it.tipo === id)
    setLocs(l => l.filter(x => nuevos.some(it => it.loc === x)))
  }
  const locLabel = !locs.length ? 'Todos los Parques y los Hoteles' : locs.length === 1 ? NOMBRE[locs[0]] : locs.length === 2 ? locs.map(x => NOMBRE[x]).join(' y ') : locs.length + ' ubicaciones'
  const de = n => (/^(Parque |Disneyland Hotel)/.test(n) ? 'del ' : 'de ')
  const cuenta = tipo === 'todo' ? 'Actividades' : T.label

  const grupos = tipo === 'atracciones'
    ? [['Intereses', INTERESES.atracciones, fi, setFi], ['Altura', ALTURAS.map(a => [a[0], a[1]]), fa, setFa], ['Edades', EDADES, fe, setFe], ['Accesibilidad y Consejos', ACCESO, fc, setFc]]
    : INTERESES[tipo] ? [['Intereses', INTERESES[tipo], fi, setFi]] : []

  const parquesMapa = [['disneyland', 'Parque Disneyland', IMG.parqueDisneyland.mapa], ['adventure', 'Disney Adventure World', IMG.parqueAdventure.mapa]].filter(m => !locs.length || locs.includes(m[0]) || !locs.some(x => x === 'disneyland' || x === 'adventure'))

  const fila = it => {
    const ints = (INTERESES[it.tipo] || []).filter(i => it.int.includes(i[0])).map(i => i[1])
    const lugar = it.tipo === 'hoteles' || it.tipo === 'parques' ? '' : [NOMBRE[it.loc], it.zona].filter((x, i, a) => x && a.indexOf(x) === i && x !== it.n).join(', ')
    return (
      <a key={it.id} className="ex-row" href={enlace(it)}>
        <div className="ex-img" style={{ '--img': fondo(fotosExplorar(it)) }} />
        <div className="ex-info">
          <h2>{it.n}</h2>
          {it.tipo === 'atracciones' && <p>Altura: {alt(it.alt)}</p>}
          {ints.length > 0 && <p>{ints.join(', ')}</p>}
          {lugar && <p>{lugar}</p>}
        </div>
        <i className="ex-chev" />
      </a>)
  }

  return (
    <div id="explorar">
      <Header />
      <main className="ex-main">
        <nav className="ex-crumb" aria-label="Migas de pan">
          <a href="/">🏠 Inicio</a><span>›</span>
          <a href={`/explorar?tipo=${tipo}`}>{T.label}</a>
          {locs.length === 1 && <><span>›</span><em>{T.label} {de(NOMBRE[locs[0]])}{NOMBRE[locs[0]]}</em></>}
        </nav>
        <div className="ex-titlebar">
          <h1>Explorar Disneyland Paris</h1>
          <div className="ex-view" role="tablist">
            <button type="button" className={vista === 'lista' ? 'on' : ''} onClick={() => setVista('lista')}>Lista</button>
            <button type="button" className={vista === 'mapa' ? 'on' : ''} onClick={() => setVista('mapa')}>Mapa</button>
          </div>
        </div>

        {/* Barra: ubicación · tipo de actividad · buscador */}
        <section className="ex-card ex-bar">
          <div className="ex-dd ex-loc">
            <button type="button" className="ex-dd-btn"><span className="ex-circ">🐭</span><span className="ex-dd-t">{locLabel}</span><i className="ex-car" /></button>
            <div className="ex-pop ex-pop-loc">
              <div className="ex-pop-in">
                <h4>Ubicaciones</h4>
                <label className="ex-chk"><input type="checkbox" checked={!locs.length} onChange={() => setLocs([])} /><span>Todos los Parques y los Hoteles</span></label>
                {GRUPOS.map(g => (
                  <div key={g[0]}><h4>{g[0]}</h4>{g[1].map(o => (
                    <label key={o[0]} className={'ex-chk' + (hayEn(o[0]) ? '' : ' off')}><input type="checkbox" disabled={!hayEn(o[0])} checked={locs.includes(o[0])} onChange={() => setLocs(tog(locs, o[0]))} /><span>{o[1]}</span></label>))}</div>))}
              </div>
              <button type="button" className="ex-reset ex-borrar" onClick={() => setLocs([])}>⊖ Borrar – <em>Todos los Parques y los Hoteles</em></button>
            </div>
          </div>
          <div className="ex-dd ex-tipo">
            <button type="button" className="ex-dd-btn"><span className="ex-circ2">{T.icon}</span><span className="ex-dd-t">{T.label}</span><i className="ex-car" /></button>
            <ul className="ex-pop ex-pop-tipo">{TIPOS.map(t => (
              <li key={t.id}><button type="button" className={'ex-opt' + (t.id === tipo ? ' sel' : '')} onClick={() => cambiaTipo(t.id)}><span>{t.icon}</span>{t.label}</button></li>))}
            </ul>
          </div>
          <div className="ex-search"><span aria-hidden="true">🔍</span><input type="search" value={q} onChange={e => setQ(e.target.value)} placeholder={'Buscar en ' + (tipo === 'todo' ? 'las actividades' : 'las ' + T.label.toLowerCase())} aria-label="Buscar" /></div>
        </section>

        {/* Resultados */}
        <section className="ex-card ex-res">
          <div className="ex-count">{lista.length} {cuenta}</div>
          {grupos.length > 0 && (
            <div className="ex-filters"><b>Filtrar por</b>
              {grupos.map(g => <Filtro key={g[0]} titulo={g[0]} opts={g[1]} sel={g[2]} onTog={v => g[3](tog(g[2], v))} onClear={() => g[3]([])} />)}
            </div>)}
          <div className="ex-sort"><label htmlFor="ex-ord">Ordenar por</label>
            <select id="ex-ord" value={orden} onChange={e => setOrden(e.target.value)}>{ORDENES.map(o => <option key={o[0]} value={o[0]}>{o[1]}</option>)}</select></div>

          {lista.length === 0 && <p className="ex-empty">No hemos encontrado resultados con estos filtros. Prueba a restablecerlos.</p>}
          {vista === 'lista' && <div className="ex-list">{lista.map(fila)}</div>}
          {vista === 'mapa' && (
            <div className="ex-mapview">
              <div className="ex-list ex-list-s">{lista.map(it => <a key={it.id} className="ex-row ex-row-s" href={enlace(it)}><div className="ex-info"><h2>{it.n}</h2><p>{[NOMBRE[it.loc], it.zona].filter((x, i, a) => x && a.indexOf(x) === i).join(', ')}</p></div><i className="ex-chev" /></a>)}</div>
              <div className="ex-maps">{parquesMapa.map(m => <figure key={m[0]}><figcaption>{m[1]}</figcaption><img src={m[2]} alt={`Mapa de ${m[1]}`} /></figure>)}</div>
            </div>)}
        </section>
      </main>
      <Footer />
      <Feedback />
    </div>
  )
}
