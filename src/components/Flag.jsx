// Banderas en SVG (no dependen del sistema: en Windows los emojis de bandera se ven como "FR", "PT"...).
// Uso: <Flag code="fr" />  · códigos: be dk de es fr ie it nl at pt ch gb
const V = (a, b, c) => <><rect width="10" height="20" fill={a} /><rect x="10" width="10" height="20" fill={b} /><rect x="20" width="10" height="20" fill={c} /></>
const H = (a, b, c) => <><rect width="30" height="7" fill={a} /><rect y="7" width="30" height="6" fill={b} /><rect y="13" width="30" height="7" fill={c} /></>

const FLAGS = {
  be: V('#000', '#FAE042', '#ED2939'),
  fr: V('#0055A4', '#fff', '#EF4135'),
  ie: V('#169B62', '#fff', '#FF883E'),
  it: V('#009246', '#fff', '#CE2B37'),
  de: H('#000', '#DD0000', '#FFCE00'),
  nl: H('#AE1C28', '#fff', '#21468B'),
  at: H('#ED2939', '#fff', '#ED2939'),
  es: <><rect width="30" height="20" fill="#AA151B" /><rect y="5" width="30" height="10" fill="#F1BF00" /></>,
  dk: <><rect width="30" height="20" fill="#C8102E" /><rect x="9" width="3.5" height="20" fill="#fff" /><rect y="8.25" width="30" height="3.5" fill="#fff" /></>,
  pt: <><rect width="30" height="20" fill="#FF0000" /><rect width="12" height="20" fill="#006600" /><circle cx="12" cy="10" r="3.6" fill="#FFE000" /><circle cx="12" cy="10" r="1.8" fill="#fff" /></>,
  ch: <><rect width="30" height="20" fill="#D52B1E" /><rect x="13.25" y="4" width="3.5" height="12" fill="#fff" /><rect x="9" y="8.25" width="12" height="3.5" fill="#fff" /></>,
  gb: <><rect width="30" height="20" fill="#012169" /><path d="M0 0L30 20M30 0L0 20" stroke="#fff" strokeWidth="4" /><path d="M0 0L30 20M30 0L0 20" stroke="#C8102E" strokeWidth="1.3" /><path d="M15 0V20M0 10H30" stroke="#fff" strokeWidth="6" /><path d="M15 0V20M0 10H30" stroke="#C8102E" strokeWidth="3.4" /></>,
}

export default function Flag({ code }) {
  return <svg className="flag" viewBox="0 0 30 20" preserveAspectRatio="xMidYMid slice" aria-hidden="true">{FLAGS[code] || FLAGS.es}</svg>
}
