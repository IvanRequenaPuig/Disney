import { useEffect } from 'react'
import Flag from '../../components/Flag.jsx'
import { IMG } from '../../config/images.js'
import './idioma.css'
import { initIdioma } from './idioma.js'

// [código, nombre, bandera]  Cada columna se lee de arriba abajo. Al elegir un país, toda la web se traduce a su idioma (ver src/components/translate.js).
const COLS = [
  [['be', 'Belgique / België', '🇧🇪'], ['dk', 'Danmark', '🇩🇰'], ['de', 'Deutschland', '🇩🇪'], ['es', 'España', '🇪🇸']],
  [['fr', 'France', '🇫🇷'], ['ie', 'Ireland', '🇮🇪'], ['it', 'Italia', '🇮🇹'], ['nl', 'Nederland', '🇳🇱']],
  [['at', 'Österreich', '🇦🇹'], ['pt', 'Portugal', '🇵🇹'], ['ch', 'Suisse / Schweiz', '🇨🇭'], ['gb', 'United Kingdom', '🇬🇧']],
]
const INTL = [['eur', 'International (EUR)'], ['usd', 'International (USD)']]

export default function Idioma() {
  useEffect(() => initIdioma(), [])
  return (
    <div id="idioma" translate="no">
      {/* 🖼️ LOGO → src/config/images.js (comun.logo). Vuelve a la página de inicio */}
      <a href="/" className="id-logo"><img src={IMG.comun.logo} alt="Disneyland Paris" /><small>PARIS</small></a>
      <section className="id-card">
        <h1>Choose one of our websites</h1>
        <div className="id-cols">{COLS.map((col, i) => <ul key={i}>{col.map(c => <li key={c[0]}><a href="/" data-site={c[0]}><span className="fl"><Flag code={c[0]} /></span>{c[1]}</a></li>)}</ul>)}</div>
        <div className="id-intl">{INTL.map(c => <a key={c[0]} href="/" data-site={c[0]}><span className="fl">🌐</span>{c[1]}</a>)}</div>
      </section>
      <p className="id-copy">© Disney/Pixar © &amp; TM Lucasfilm Ltd. © MARVEL. All Rights Reserved</p>
    </div>
  )
}
