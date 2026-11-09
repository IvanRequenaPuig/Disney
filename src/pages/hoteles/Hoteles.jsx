import { useEffect, useState } from 'react'
import Feedback from '../../components/Feedback.jsx'
import { IMG } from '../../config/images.js'
import './hoteles.css'
import { initHoteles } from './hoteles.js'

// 🖼️ Imágenes → src/config/images.js (bloque hotelEntradas.hotels). pos = posición del pin en el mapa (% izquierda, % arriba)
const HOTELS = [
  { n: 1, name: 'Disneyland Hotel', stars: 5, dist: 'En la entrada del Parque Disneyland', walk: 0, bus: false, theme: 'Historias de la Realeza Disney', meet: 'Encuentros Realeza Disney', base: 1833.18, crest: '🏰', c: '#e8b9a4', inc: 'Desayuno Buffet incluido | Wi-Fi gratuito', pos: [37, 50] },
  { n: 2, name: 'Disney Hotel New York - The Art of Marvel', stars: 4, dist: '10 min a pie', walk: 10, bus: true, theme: 'Temática de Nueva York y MARVEL', meet: 'Encuentros Superhéroes Marvel', base: 1290.5, crest: '🅰', c: '#b9c4d6', inc: 'Wi-Fi gratuito', pos: [55, 45] },
  { n: 3, name: 'Disney Newport Bay Club', stars: 4, dist: '15 min a pie', walk: 15, bus: true, theme: 'Temática náutica con Mickey', meet: 'Encuentros con Mickey o sus amigos', base: 1150.2, crest: '⚓', c: '#a9c6e8', inc: 'Wi-Fi gratuito', pos: [62, 57] },
  { n: 4, name: 'Disney Sequoia Lodge', stars: 3, dist: '15 min a pie', walk: 15, bus: true, theme: 'Lodge inspirado en el universo de Bambi', meet: 'Personajes Disney', base: 980.4, crest: '🌲', c: '#b5cfb0', inc: 'Wi-Fi gratuito', pos: [59, 70] },
  { n: 5, name: 'Disney Hotel Cheyenne', stars: 3, dist: '20 min a pie', walk: 20, bus: true, theme: 'Temática del Lejano Oeste, con Woody y Jessie', meet: 'Personajes Pixar', base: 870.3, crest: '🤠', c: '#e3b98f', inc: 'Wi-Fi gratuito', pos: [72, 40] },
  { n: 6, name: 'Disney Hotel Santa Fe', stars: 2, dist: '20 min a pie', walk: 20, bus: true, theme: 'Temática del suroeste americano inspirado en Cars', meet: 'Personajes Disney', base: 790.9, crest: '🌵', c: '#e6c8a0', inc: 'Wi-Fi gratuito', pos: [62, 32] },
]
// Comparador: [nombre, estrellas, tipo(d=Disney,c=Center Parcs,a=asociado), tema, distancia, autobús, Extra Magic Time, encuentros, MagicPass]
const COMP = [
  ['Disneyland Hotel', 5, 'd', 'Historias de la realeza Disney', '0 min a pie', 0, 1, 'Princesas Disney', 1],
  ['Disney Hotel New York - The Art of Marvel', 4, 'd', 'Manhattan y Superhéroes MARVEL', '10 min a pie', 1, 1, 'Superhéroes MARVEL', 1],
  ['Disney Newport Bay Club', 4, 'd', 'Estilo náutico inspirado en las aventuras de Mickey', '15 min a pie', 1, 1, 'Personajes Disney', 1],
  ['Disney Sequoia Lodge', 3, 'd', 'Elegante lodge inspirado en el universo de Bambi', '15 min a pie', 1, 1, 'Personajes Disney', 1],
  ['Disney Hotel Cheyenne', 3, 'd', 'Temática del Lejano Oeste, con Woody y Jessie', '20 min a pie', 1, 1, 'Personajes Pixar', 1],
  ['Disney Hotel Santa Fe', 2, 'd', 'Temática del suroeste americano inspirado en el universo de Cars', '20 min a pie', 1, 1, 'Personajes Disney', 1],
  ['Disney Davy Crockett Ranch', 0, 'd', 'Bungalows en el corazón del bosque', '15 min en coche', 0, 1, 0, 1],
  ['Center Parcs Villages Nature Paris', 4, 'c', 0, '15 min en coche', 0, 1, 0, 1],
  ['Hotel Asociado', 0, 'a', 0, '10 min en coche', 1, 0, 0, 0],
]
const ROWS = [['✨', 'Tema Disney', 3], ['🚶', 'Tiempo de distancia hasta los Parques Disney', 4], ['🚌', 'Servicio de autobús gratuito a los Parques Disney', 5], ['🐭', 'Extra Magic Time', 6], ['👥', 'Encuentros con Personajes', 7], ['🎟', 'MagicPass', 8]]
const FOOT = {
  'Información legal': ['Términos y condiciones', 'Política de cookies', 'Reglamento Interno de los Parques Disney', 'Reglamento Interno del Parking de Visitantes', 'Política de privacidad', 'Administrar preferencias', 'Reglamento interno de los Hoteles Disney', 'Información legal y Condiciones del sitio web', 'Privacidad en R.U. y en la U.E.', 'Video Protection', 'Reglamento Interno de Disney Village', 'Copyrights', 'Sobre privacidad en Disneyland Paris', 'Fotografías en los tornos del Parque', 'Reglamento interno del centro de cuidado de animales'],
  'Ayuda': ['Nuestro folleto digital', 'Preguntas más frecuentes', 'Ayuda del sitio web', 'Visitas de grupos', 'Servicios para visitantes', 'Huéspedes con discapacidades', 'Retirada de productos', 'Contáctanos', 'Información de producto'],
  'Más sobre Disneyland Paris': ['Los 2 Parques', 'Hoteles Disney', 'Restaurantes', 'Disney Village', 'Entradas', 'Eventos en Disneyland Paris'],
  'Sitios web Disney relacionados': ['The Walt Disney Company', 'Disney+', 'Disney Store', 'Marvel', 'Lucasfilm', 'Pixar'],
}
const PAY = ['VISA', 'Mastercard', 'Apple Pay', 'PayPal', 'AMEX', 'Klarna', 'Diners', 'Discover', 'JCB', 'UnionPay']
const GUESTS = [[1, 2], [1, 3], [1, 4], [2, 4], [2, 6]]
const iso = d => d.toISOString().slice(0, 10)
const day = (s, o) => new Date(s + 'T12:00').toLocaleDateString('es-ES', o).replace(/\./g, '')
const stars = n => '★'.repeat(n)

export default function Hoteles() {
  const q = new URLSearchParams(window.location.search)
  const d0 = new Date(); d0.setDate(d0.getDate() + 1); const d1 = new Date(d0); d1.setDate(d1.getDate() + 1)
  const init = { in: q.get('in') || iso(d0), out: q.get('out') || iso(d1), hotel: 'all', g: 0 }
  const [form, setForm] = useState(init)
  const [s, setS] = useState(init)
  const set = k => e => setForm({ ...form, [k]: e.target.value })
  useEffect(() => initHoteles(), [])
  const nights = Math.max(1, Math.round((new Date(s.out) - new Date(s.in)) / 864e5))
  const d = new Date(s.in + 'T12:00').getDate()
  const list = HOTELS.map((h, i) => ({ ...h, ok: (d + i) % 3 === 0 })).filter(h => s.hotel === 'all' || String(h.n) === s.hotel)
  const [rooms, guests] = GUESTS[s.g]
  const price = h => (h.base * nights).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  const Slider = ({ n }) => (
    <div className="hs">
      {IMG.hotelEntradas.hotels[n].map((f, i) => <div key={f} className={'hs-slide' + (i ? '' : ' on')} style={{ '--img': `url(${f})` }} />)}
      <button className="hs-next" aria-label="Siguiente foto">›</button>
      <div className="hs-dots">{[0, 1, 2].map(i => <i key={i} className={'hs-dot' + (i ? '' : ' on')} />)}</div>
    </div>
  )
  return (
    <div id="hoteles">
      <header className="h-head">
        <div className="d-flex justify-content-between align-items-center px-4 pt-3">
          <span />
          {/* 🖼️ Imagen → src/config/images.js */}
          <a href="/" className="logo"><img src={IMG.comun.logo} alt="Disneyland Paris" className="logo-img" /><small>PARIS</small></a>
          <div className="d-flex gap-3 small align-items-center"><span>🇪🇸</span><span>👤 <b>Registrarse</b></span></div>
        </div>
        <ol className="stepper">{['Hotel', 'Extras', 'Contacto', 'Resumen'].map((t, i) => <li key={t} className={i ? '' : 'on'}><b>{i + 1}</b>{t}</li>)}</ol>
      </header>

      <section className="h-bar">
        <div className="h-bar-row">
          <span>📅</span>
          <div className="h-dates">
            <div><small>{day(s.in, { weekday: 'long' })}</small><strong>{day(s.in, { day: '2-digit', month: 'short', year: 'numeric' })}</strong></div>
            <div><small>{day(s.out, { weekday: 'long' })}</small><strong>{day(s.out, { day: '2-digit', month: 'short', year: 'numeric' })}</strong></div>
          </div>
          <span>👨‍👩‍👧</span><div className="h-guests"><strong>{rooms} habitación{rooms > 1 ? 'es' : ''}</strong><strong>{guests} huéspedes</strong></div>
          <button id="h-mod" className="h-mod"><b>Modificar</b> <i>⌄</i></button>
        </div>
        <div id="h-panel" className="h-panel" style={{ display: 'none' }}>
          <div className="row g-3">
            <div className="col-md-3"><label>Fecha de llegada</label><input type="date" className="form-control" value={form.in} onChange={set('in')} /></div>
            <div className="col-md-3"><label>Fecha de salida</label><input type="date" className="form-control" value={form.out} onChange={set('out')} /></div>
            <div className="col-md-3"><label>Hotel</label><select className="form-select" value={form.hotel} onChange={set('hotel')}><option value="all">Todos los Hoteles</option>{HOTELS.map(h => <option key={h.n} value={h.n}>{h.name}</option>)}</select></div>
            <div className="col-md-3"><label>Habitaciones</label><select className="form-select" value={form.g} onChange={e => setForm({ ...form, g: +e.target.value })}>{GUESTS.map((g, i) => <option key={i} value={i}>{g[0]} habitación{g[0] > 1 ? 'es' : ''}, {g[1]} huéspedes</option>)}</select></div>
          </div>
          <p className="small mt-3 mb-1">¡Disfruta de una estancia aún más cómoda añadiendo una segunda habitación a tu búsqueda!<br />¿Reservas para más de 12 personas? ¿Reservas más de 2 habitaciones? <a href="#">Por favor contáctanos</a>.</p>
          <div className="text-center"><button id="h-buscar" className="btn-dl px-5" onClick={() => form.out > form.in ? setS(form) : alert('La salida debe ser posterior a la llegada.')}>Buscar</button></div>
        </div>
      </section>

      <div className="h-wrap">
        <main>
          <h1>Tu estancia</h1>
          <p className="small">Los precios mostrados en esta página están sujetos a disponibilidad, pendientes de confirmación en el paso de Resumen, y pueden variar* según el momento en que se realice la reserva.</p>
          <h2>Hoteles Disney</h2>
          <div className="h-cmp"><img className="h-cmp-img" src={IMG.hotelEntradas.compare[0]} alt="" /><strong>¿Necesitas comparar los Hoteles Disney?</strong><a href="#" data-open="#m-compare">Compara todo</a></div>

          {list.length === 0 && <p>No hay hoteles para esta búsqueda.</p>}
          {list.map(h => (
            <article className="hcard" key={h.n} style={{ '--c': h.c }}>
              <Slider n={h.n} />
              <div className="hinfo">
                <div className="hcrest">{h.crest}</div>
                <div className="hstars">{stars(h.stars)}</div>
                <h3>{h.name}</h3>
                <div className="hdist"><span>{h.walk ? '🚶 ' : '🚶 '}{h.dist}{h.bus && ' · 🚌 Servicio de autobús gratuito'}</span><a href="#" data-open="#m-map">📍 Ver en el mapa</a></div>
                <div className="htags"><span>{h.theme}</span><span>👥 {h.meet}</span><a href="#" className="h-more-btn">Mostrar más</a></div>
                <div className="h-more" style={{ display: 'none' }}>
                  <ul><li>{h.inc}</li><li>Aparcamiento gratuito en el hotel y en los Parques Disney</li><li>Extra Magic Time (acceso anticipado a los Parques Disney)</li></ul>
                </div>
                <hr />
                {h.ok ? (
                  <div>
                    <strong>Hotel y Entradas a los Parques</strong>
                    <p className="hnight">🛏 {nights} noche{nights > 1 ? 's' : ''} + 🎟 {nights + 1} días - 2 Parques</p>
                    <div className="d-flex justify-content-between small"><span>{h.inc}</span><a href="#" data-open="#m-price">Más detalles</a></div>
                    <div className="hprice"><div><strong>Total a partir de</strong><div className="hp-n">{price(h)} €</div><small>(Impuestos y tasas incluidos)</small></div>
                      <button className="btn-dl hroom">Ver las habitaciones</button></div>
                  </div>
                ) : <p className="mb-0">No es posible realizar una reserva en esta fecha.</p>}
              </div>
            </article>
          ))}

          <h2 className="mt-5">Alojamientos Asociados</h2>
          <div className="h-cmp"><img className="h-cmp-img" src={IMG.hotelEntradas.compare[1]} alt="" /><strong>¿Necesitas comparar alojamientos asociados?</strong><a href="#" data-open="#m-compare">Compara todo</a></div>
          <p>No se ha encontrado ningún otro paquete alternativo.</p>
          <p className="tiny">*Los precios de nuestros paquetes de Hotel + Entradas están sujetos a cambios. Los precios mostrados para la misma estancia y fecha de llegada pueden cambiar en función de factores como la temporada y la demanda.</p>
        </main>
        <aside>
          <div className="mapcard" data-open="#m-map">
            {/* 🖼️ Imagen → src/config/images.js */}
            <div className="mapmini" style={{ '--map': `url(${IMG.hotelEntradas.map})` }} /><button>Ver mapa</button>
          </div>
        </aside>
      </div>

      <section className="h-pay">
        {/* 🖼️ Imagen → src/config/images.js */}
        <div className="visa"><b>VISA</b> | <i>Disneyland</i><br /><small>Official Payment Partner</small></div><hr />
        <h3>🔒 Métodos de pago aceptados</h3>
        <div className="paychips">{PAY.map(p => <span key={p}>{p}</span>)}</div>
        <p className="tiny">Visa, Mastercard, Apple Pay, PayPal, American Express, Klarna, Diners Club, Discover, JCB, UnionPay, AliPay, WeChat Pay.<br />Aceptamos todas las tarjetas de pago asociadas con las redes indicadas arriba.</p>
      </section>

      <footer className="h-foot">
        <div className="ft-box">
          <div className="ft-tabs">{Object.keys(FOOT).map((t, i) => <button key={t} className={'ft-tab' + (i ? '' : ' on')} data-pane={i}>{t}</button>)}</div>
          {Object.values(FOOT).map((l, i) => <div key={i} className={'ft-pane' + (i ? '' : ' on')}>{l.map(x => <a key={x} href="#">{x}</a>)}</div>)}
          <div className="ft-contact">
            <div><strong>Sigue conectado</strong><div className="soc"><i style={{ background: '#3b5998' }}>f</i><i style={{ background: '#e00' }}>▶</i><i style={{ background: 'linear-gradient(45deg,#f9a03f,#c13584)' }}>◎</i><i style={{ background: '#000' }}>X</i></div></div>
            <p>¿Tienes alguna pregunta sobre los productos y ofertas disponibles? Pídele asesoramiento a uno de nuestros expertos con sede en el corazón de los Parques Disney. Contacta con ellos llamando al</p>
            <div><span className="phone">📞 912 158 655</span><small>Precio de una llamada local desde una línea fija. El precio de las llamadas desde una línea móvil puede variar dependiendo de su compañía telefónica.</small></div>
          </div>
        </div>
        <div className="ft-copy"><a href="#">Accesibilidad digital</a><br />© Disney • Pixar &amp; TM Lucasfilm Ltd. MARVEL. Todos los derechos reservados</div>
      </footer>

      {/* ---- Ventana: comparador ---- */}
      <div className="hm" id="m-compare"><div className="hm-top"><button className="hm-close">✕</button><strong>Compara los Hoteles Disney</strong></div>
        <div className="hm-body"><div className="cmp" style={{ gridTemplateColumns: `210px repeat(${COMP.length}, 180px)` }}>
          <div />{COMP.map(c => <div key={c[0]} className={'cc c-' + c[2] + ' ch'}><span>{stars(c[1])}</span>{c[0]}</div>)}
          <div className="cmp-sec">Beneficios de los Hoteles Disney</div>
          {ROWS.map(r => [<div key={r[1]} className="cl"><span>{r[0]}</span>{r[1]}</div>, ...COMP.map(c => {
            const v = c[r[2]]; const txt = v === 1 ? '✔' : v === 0 ? '—' : (r[2] === 4 ? (v.includes('coche') ? '🚗 ' : '🚶 ') : '') + v
            return <div key={c[0] + r[1]} className={'cc c-' + (v === 0 ? '0' : c[2])}>{txt}</div>
          })])}
        </div></div></div>

      {/* ---- Ventana: información de precios ---- */}
      <div className="hm hm-sm" id="m-price"><div className="hm-top"><button className="hm-close">✕</button><strong>Información de precios</strong></div>
        <div className="hm-body">
          <div className="pt-tabs"><button className="pt-tab on" data-pane="0">Resumen</button><button className="pt-tab" data-pane="1">Condiciones de reserva</button></div>
          <div className="pt-pane on">
            <h4>Incluido en tu estancia</h4>
            <p>+ Habitación<br />+ Entradas a los Parques Disney<br />+ Acceso a todas las atracciones y espectáculos<br />+ Encuentros con Personajes Disney en tu Hotel y en los Parques<br />+ Extra Magic Time (acceso anticipado a los Parques Disney)<br />+ Aparcamiento en el Hotel Disney y en los Parques Disney<br />+ Traslado en autobús gratuito a los Parques Disney<br />+ WiFi gratis en tu Hotel</p>
            <p><b>Importante:</b><br />• El precio del desayuno no está incluido si no has reservado una habitación Deluxe, o una habitación o suite en el Castle Club, Empire State Club, Compass Club o Golden Forest Club.<br />• Los impuestos locales están incluidos en el precio mostrado.<br />• Los precios se establecen sobre la base del inventario disponible en el momento de la reserva y están sujetos a cambios.</p>
            <hr /><h5>🕒 Acceso anticipado a los Parques Disney</h5><p>Los huéspedes que se alojen en un Hotel Disney, en Les Villages Nature Paris o que dispongan de un Disneyland Pass Gold pueden acceder a uno o a ambos Parques Disney antes del horario oficial de apertura. Los Hoteles Asociados no tienen derecho al servicio Extra Magic Time.</p>
            <hr /><h5>🅿 Parking gratuito</h5><p>¡Disfruta del aparcamiento gratuito en tu Hotel y en la entrada de los Parques Disney (podrás ahorrar hasta 30 € al día)!</p>
            <hr /><h5>🎫 MagicPass</h5><p>Disponible en formato digital o físico, incluye Entradas a los Parques Disney (si aplica), cupones de comidas (si aplica), acceso al parking de los Huéspedes, y mucho más.</p>
          </div>
          <div className="pt-pane"><h4>Condiciones de reserva</h4><p>Reservas flexibles: cambia o cancela tu reserva sin cargos según las condiciones de tu tarifa. Paga un depósito del 15 % al reservar y el resto en hasta 5 cuotas. Sin gastos de reserva.</p></div>
        </div></div>

      {/* ---- Ventana: mapa de alojamientos ---- */}
      <div className="hm" id="m-map"><div className="hm-top"><button className="hm-close">✕</button><strong>Mapa de alojamientos</strong></div>
        <div className="hm-body"><div className="bigmap" style={{ '--map': `url(${IMG.hotelEntradas.map})` }}>
          {HOTELS.map(h => (
            <div className="pin" key={h.n} style={{ left: h.pos[0] + '%', top: h.pos[1] + '%' }}>
              <span>🛏</span>
              <div className="tip" style={{ display: 'none' }}>
                <div className="tip-img" style={{ '--img': `url(${IMG.hotelEntradas.hotels[h.n][0]})` }} />
                <strong>{h.name}</strong>
                <span className="tg">{h.walk ? '🚶 ' : '🚶 '}{h.dist}</span>{h.bus && <span className="tg">🚌 Servicio de autobús gratuito</span>}
              </div>
            </div>
          ))}
        </div></div></div>

      <Feedback />
    </div>
  )
}
