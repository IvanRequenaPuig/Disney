import { useEffect } from 'react'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import Feedback from '../../components/Feedback.jsx'
import PriceCalendar from '../../components/PriceCalendar.jsx'
import { IMG } from '../../config/images.js'
import './reserva.css'
import { initReserva } from './reserva.js'

// 🖼️ Imágenes → src/config/images.js (bloque reserva)
const R = IMG.reserva
const bg = u => ({ '--img': `url(${u})` })
const OPT = [
  { cls: 'a', ic: '🎟', t: 'Entradas con fecha a los Parques Disney', h: 'Disfruta de la magia 1 o más días', ok: ['1 o ambos Parques Disney', 'Acceso desde 1 hasta 4 días', 'Las entradas con fecha se pueden anular hasta 3 días antes (excepto las Entradas Básicas con fecha)'], b: 'Descubre nuestras entradas', href: '/entradas' },
  { cls: 'b', ic: '🧳', t: 'Paquete Hotel + Entradas', h: 'Disfruta de la magia las 24 horas del día', ok: ['Hotel de calidad cerca de los Parques Disney', 'Acceso a los dos Parques Disney', 'Modifica o cancela tu reserva gratis hasta 7 días antes de tu llegada'], b: 'Descubre nuestros paquetes', href: '/hoteles' },
]
const WHY = [['#b0608f', '#f1dbe8', '📅', 'Reservas flexibles', '¿Has cambiado de opinión? Cambia o cancela tu reserva sin cargos.'], ['#12958f', '#c9efec', '💳', 'Pago a plazos', 'Paga un depósito al hacer la reserva, y el resto en hasta 5 cuotas.'], ['#4a86c0', '#dce9f7', '€', 'Mejor Precio Garantizado', 'Si encuentras un precio más bajo para un paquete Hotel Disney + Entradas, ¡te reembolsaremos la diferencia!'], ['#c9733a', '#fde7c9', '0€', 'Sin gastos de reserva', 'El precio que ves es el precio que pagarás.'], ['#e0294f', '#ffd8e0', '❓', 'Expertos Disney a tu lado', 'Planifica tu inolvidable visita con la ayuda de nuestros Expertos Disney.']]
// Comparador (texto de ejemplo basado en las condiciones de las demás páginas)
const COMP = [['Duración', '1 o más días', 'De 1 noche a varias noches'], ['Parques Disney', '1 o ambos Parques', 'Acceso a los dos Parques'], ['Hotel Disney', '—', '✔ Hotel de calidad cerca de los Parques'], ['Cancelar o modificar', 'Hasta 3 días antes (excepto Entrada Básica)', 'Gratis hasta 7 días antes de la llegada'], ['Extra Magic Time y parking', '—', '✔ Incluidos'], ['Pago a plazos', '—', '✔ Depósito y hasta 5 cuotas']]
const FAQ = [
  ['¿Cuál es la diferencia entre una Entrada con fecha y un Paquete Hotel + Entradas?', 'La Entrada con fecha te da acceso a los Parques Disney. El Paquete Hotel + Entradas añade además tu estancia en un Hotel Disney con ventajas exclusivas. (Texto de ejemplo)'],
  ['¿Puedo cancelar o modificar mi reserva?', 'Las Entradas con fecha se pueden anular hasta 3 días antes de la visita (excepto las Entradas Básicas) y los Paquetes hasta 7 días antes de la llegada. (Texto de ejemplo)'],
  ['¿Qué métodos de pago se aceptan en Disneyland Paris?', 'Para más información sobre el pago, consulta nuestra página donde podrás <a href="/hoteles">pagar online</a> tu viaje a Disneyland Paris.', true],
]
const Stars = ({ icon }) => (
  <div className="rv-stars" aria-hidden="true"><i className="l" />
    {icon ? <span className="ic">{icon}</span> : <svg viewBox="0 0 120 50"><g fill="#2b2470"><path d="M12 25c3 0 6-3 6-6 0 3 3 6 6 6-3 0-6 3-6 6 0-3-3-6-6-6z" /><path d="M60 3c2 14 6 18 18 22-12 4-16 8-18 22-2-14-6-18-18-22 12-4 16-8 18-22z" /><path d="M104 25c3 0 6-3 6-6 0 3 3 6 6 6-3 0-6 3-6 6 0-3-3-6-6-6z" /></g></svg>}
    <i className="r" /></div>
)

export default function Reserva() {
  useEffect(() => initReserva(), [])
  return (
    <div id="reserva">
      <div className="rv-blobs" />
      <Header />
      {/* 🖼️ IMAGEN DE FONDO DE LA CABECERA → src/config/images.js (reserva.header) */}
      <section className="rv-hero" style={{ '--hero': `url(${R.header})` }}>
        <h1>Entradas con fecha y Paquetes para Disneyland Paris</h1>
        <p>¿Estás pensando en viajar al corazón de la magia?<br />¡Explora las diferentes opciones!</p>
        <div className="rv-cards">{OPT.map(o => (
          <article className={'rv-card ' + o.cls} key={o.t}><div className="rv-ct"><span>{o.ic}</span></div><h2>{o.t}</h2><h3>{o.h}</h3>
            <ul>{o.ok.map(x => <li key={x}>{x}</li>)}</ul><a className="btn-dl" href={o.href}>{o.b}</a></article>))}</div>
        <button className="btn-outline-dl rv-compare" data-open="#rv-compare">Compara todas las ventajas</button>
      </section>

      <section className="rv-wrap rv-rev" id="opciones"><Stars /><h2 className="rv-h">¡Personaliza tu visita con nuestras opciones mágicas!</h2>
        <div className="rv-split"><div><h3>Mejora tu visita con nuestros mágicos Extras</h3><p>Consigue acceso rápido a algunas de nuestras atracciones más populares con Disney Premier Access, asegura tu asiento para nuestros increíbles espectáculos estilo Broadway, disfruta de una comida con los Personajes Disney, ¡y mucho más!</p><a className="btn-outline-dl" href="/entradas#extras">Más información</a></div><div className="rv-img" style={bg(R.extras)} /></div>
        <div className="rv-split rev"><div><h3>Nuestros Planes de Comidas</h3><p>¿Te alojas en un Hotel Disney? ¡Organiza tus momentos Disneyliciosos con tiempo!</p><a className="btn-outline-dl" href="#">Más información</a></div><div className="rv-img" style={bg(R.comidas)} /></div>
      </section>

      <section className="rv-wrap rv-plan" id="calendario"><Stars icon="👍" /><h2 className="rv-h">Planifica tu estancia con nuestro calendario estimado de precios</h2>
        <p className="rv-sub">¡Compara diferentes períodos* y utiliza nuestro práctico calendario para encontrar el momento ideal para tu viaje al corazón de la magia!</p>
        <div className="rv-chips"><div><span>📅</span>El precio del paquete se basa en la fecha de llegada.</div><div><span>🔄</span>Estimaciones de precios basadas en los precios registrados cada mañana a las 8 a.m. y actualizados una vez al día.</div></div>
        <PriceCalendar />
        <p className="rv-note">*Los precios pueden variar según el momento de la reserva. Los precios indicados en el calendario son estimaciones basadas en los precios registrados cada mañana y se actualizan una vez al día. Los precios están sujetos a cambios según el momento de la reserva. El calendario es únicamente informativo y no contractual. Todos los precios están indicados en Euros redondeado a más.</p></section>

      <section className="rv-wrap rv-rev" id="ventajas"><Stars icon="✦" />
        <h2 className="rv-h">¿Por qué comprar tu paquete Hotel Disney + Entradas directamente con Disneyland Paris?</h2><p className="rv-sub">¡Reserva con tranquilidad al comprar tu paquete a través de DisneylandParis.com o con nuestros expertos Disney!</p>
        <div className="rv-why">{WHY.map((w, i) => (<div className="rv-wc" key={w[3]}><img className="rv-wimg" src={IMG.inicio.why[i]} alt={w[3]} /><h4>{w[3]}</h4><p>{w[4]}</p></div>))}</div>
        <div className="text-center mt-4"><button className="btn-outline-dl" data-open="#rv-cond">Descubre nuestras condiciones de reserva</button></div>
        <div className="rv-split rev rv-last"><div><h3>¿Cuántos días necesitas para visitar Disneyland Paris?</h3><p>Descubre lo que puedes hacer en 1, 2, 3 o 4 días y elige la duración que mejor se ajuste a tus tiempos, tu presupuesto y tus preferencias de visita.</p><a className="btn-outline-dl" href="/entradas">Descubre más</a></div><div className="rv-img" style={bg(R.dias)} /></div>
      </section>

      <section className="rv-faq"><div className="rv-faqbox"><div className="rv-faqh" />{FAQ.map(q => (
        <div className="acc-i" key={q[0]}><button className="acc-q"><span>{q[0]}</span><b>{q[2] ? '−' : '+'}</b></button><div className="acc-a" style={{ display: q[2] ? 'block' : 'none' }} dangerouslySetInnerHTML={{ __html: q[1] }} /></div>))}</div></section>

      <Footer />

      <div className="rv-modal" id="rv-compare"><div className="rv-mbox"><button className="rv-x" aria-label="Cerrar">✕</button><h3>Compara todas las ventajas</h3>
        <table><thead><tr><th /><th>Entradas con fecha</th><th>Paquete Hotel + Entradas</th></tr></thead><tbody>{COMP.map(r => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>)}</tbody></table>
        <div className="d-flex gap-2 justify-content-center mt-3"><a className="btn-dl" href="/entradas">Ver entradas</a><a className="btn-dl" href="/hoteles">Ver paquetes</a></div></div></div>
      <div className="rv-modal" id="rv-cond"><div className="rv-mbox"><button className="rv-x" aria-label="Cerrar">✕</button><h3>Condiciones de reserva</h3>
        <p>Reservas flexibles: cambia o cancela tu paquete sin cargos hasta 7 días antes de la llegada. Pago a plazos: depósito del 15 % y el resto en hasta 5 cuotas. Mejor precio garantizado y sin gastos de reserva. <i>(Texto de ejemplo)</i></p></div></div>
      <Feedback />
    </div>
  )
}
