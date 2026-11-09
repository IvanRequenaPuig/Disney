import { useState } from 'react'
import './priceCalendar.css'

// Calendario de precios estimados (datos de ejemplo: los precios se calculan con una fórmula, no son reales)
const HOTELS = [['Disneyland Hotel ★★★★★', 340], ['Disney Hotel New York - The Art of Marvel ★★★★', 255], ['Disney Newport Bay Club ★★★★', 225], ['Disney Sequoia Lodge ★★★', 190], ['Disney Hotel Cheyenne ★★★', 150], ['Disney Hotel Santa Fe ★★', 135]]
const GUESTS = [[1, 2], [1, 3], [1, 4], [2, 4], [2, 6]]
const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const SEASON = [1, .95, 1.04, 1.1, 1.12, 1.18, 1.3, 1.32, 1.12, 1.08, 1, 1.2]
const COLORS = ['#8fd8f0', '#7b96e0', '#0a40e0', '#8a3fa8', '#ff2d8f']
const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
const price = (d, base) => { const w = d.getDay(); const f = 1 + (w === 5 || w === 6 ? .12 : w === 0 ? .04 : 0); const j = (((d.getDate() * 13 + d.getMonth() * 7) % 9) - 4) / 100; return Math.round(base * f * SEASON[d.getMonth()] * (1 + j)) }

export default function PriceCalendar() {
  const today = new Date(); today.setHours(0, 0, 0, 0)
  const [nights, setNights] = useState(3)
  const [hotel, setHotel] = useState(4)
  const [g, setG] = useState(2)
  const [mode, setMode] = useState('pers')
  const [off, setOff] = useState(3)
  const [sel, setSel] = useState(null)
  const [rng, setRng] = useState([0, 100])
  const base = HOTELS[hotel][1], [rooms, guests] = GUESTS[g]
  const marks = [95, 145, 173, 190, 224, 274].map(v => Math.round(v * base / 150))
  const tier = p => (p < marks[1] ? 0 : p < marks[2] ? 1 : p < marks[3] ? 2 : p < marks[4] ? 3 : 4)
  const val = p => (mode === 'pers' ? p : p * nights * guests)
  const lo = marks[0] + (marks[5] - marks[0]) * rng[0] / 100, hi = marks[0] + (marks[5] - marks[0]) * rng[1] / 100
  const noEstimate = d => (d - today) / 864e5 < 90
  const month = k => new Date(today.getFullYear(), today.getMonth() + off + k, 1)
  const Cal = ({ m }) => {
    const first = (m.getDay() + 6) % 7, dim = new Date(m.getFullYear(), m.getMonth() + 1, 0).getDate()
    const cells = [...Array(first).fill(null), ...Array.from({ length: dim }, (_, i) => new Date(m.getFullYear(), m.getMonth(), i + 1))]
    return (
      <div className="pc-m"><h4>{MESES[m.getMonth()]} {m.getFullYear()}</h4>
        <div className="pc-g">{['lu', 'ma', 'mi', 'ju', 'vi', 'sá', 'do'].map(x => <small key={x}>{x}</small>)}
          {cells.map((d, i) => {
            if (!d) return <span key={i} />
            const past = d < today, ne = noEstimate(d), p = price(d, base), inSel = sel && d >= sel && d <= new Date(sel.getTime() + nights * 864e5)
            const dimmed = !ne && (p < lo || p > hi)
            return (
              <button key={i} disabled={past} className={'pc-d' + (past ? ' past' : '') + (ne ? ' ne' : '') + (inSel ? ' sel' : '') + (dimmed ? ' dim' : '')} style={!ne && !past ? { background: COLORS[tier(p)] } : undefined} onClick={() => setSel(d)} title={ne ? 'Ver disponibilidad en el siguiente paso' : `${val(p)} €`}>
                <b>{d.getDate()}</b>{ne ? <i>🔍</i> : <span>{val(p)}€</span>}
              </button>
            )
          })}</div></div>
    )
  }
  return (
    <div className="pc">
      <aside className="pc-side">
        <div className="pc-box">
          <label>Duración de la estancia</label>
          <select value={nights} onChange={e => setNights(+e.target.value)}>{[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n + 1} días / {n} noche{n > 1 ? 's' : ''}</option>)}</select>
          <label>Hoteles y Resorts</label>
          <select value={hotel} onChange={e => setHotel(+e.target.value)}>{HOTELS.map((h, i) => <option key={h[0]} value={i}>{h[0]}</option>)}</select>
          <label className={guests > 2 ? 'warn' : ''}>Habitaciones y Huéspedes</label>
          <select className={guests > 2 ? 'warn' : ''} value={g} onChange={e => setG(+e.target.value)}>{GUESTS.map((x, i) => <option key={i} value={i}>{x[0]} Habitación{x[0] > 1 ? 'es' : ''} / {x[1]} Huéspedes</option>)}</select>
        </div>
        <div className="pc-box">
          <div className="pc-mode"><button className={mode === 'pers' ? 'on' : ''} onClick={() => setMode('pers')}>Precio por pers. /noche</button><button className={mode === 'total' ? 'on' : ''} onClick={() => setMode('total')}>Coste total</button></div>
          <p className="pc-help">🎟 Precio {mode === 'pers' ? 'por persona para' : 'total para'} <b>{nights} noches</b> y <b>{nights + 1} días</b> en ambos Parques Disney</p>
          <div className="pc-marks">{marks.map(m => <b key={m}>{mode === 'pers' ? m : m * nights * guests}€</b>)}</div>
          <div className="pc-bar"><i style={{ background: `linear-gradient(90deg, ${COLORS.join(',')})` }} />
            <input type="range" min="0" max="100" value={rng[0]} onChange={e => setRng([Math.min(+e.target.value, rng[1] - 5), rng[1]])} aria-label="Precio mínimo" />
            <input type="range" min="0" max="100" value={rng[1]} onChange={e => setRng([rng[0], Math.max(+e.target.value, rng[0] + 5)])} aria-label="Precio máximo" /></div>
        </div>
      </aside>
      <div className="pc-main">
        {guests > 2 && <div className="pc-alert">ⓘ Por favor, proporciona la edad de cada niño de tu grupo.</div>}
        <div className="pc-cals">
          <button className="pc-nav pc-prev" disabled={off <= 0} onClick={() => setOff(off - 1)} aria-label="Mes anterior">‹</button>
          <Cal m={month(0)} /><Cal m={month(1)} />
          <button className="pc-nav pc-next" onClick={() => setOff(off + 1)} aria-label="Mes siguiente">›</button>
        </div>
        <div className="pc-foot"><span>🔍 Ver disponibilidad en el siguiente paso</span>
          <button className="btn-dl pc-go" disabled={!sel} onClick={() => { window.location.href = `/hoteles?in=${iso(sel)}&out=${iso(new Date(sel.getTime() + nights * 864e5))}` }}>Continuar con la selección</button></div>
      </div>
    </div>
  )
}
