import { useEffect } from 'react'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import Feedback from '../../components/Feedback.jsx'
import { IMG } from '../../config/images.js'
import './entradas.css'
import { initEntradas } from './entradas.js'

// 🖼️ Todas las imágenes de esta página se definen en src/config/images.js (bloque "entradas")
const E = IMG.entradas
const bg = u => ({ '--img': `url(${u})` })
const TABS = [['flex', 'Entradas Flexibles para los Parques Disney', '🎟'], ['otras', 'Otras Entradas a los Parques Disney', '🎫'], ['extras', 'Extras mágicos', '🪄'], ['tarifas', 'Entradas con tarifas especiales', '🏷']]
// [días, etiqueta, precio adulto, precio niño]  (precios de ejemplo)
const PACKS = { 1: [[1, '1 Parque', 59, 52], [1, '2 Parques', 89, 79]], 2: [[2, '2 Parques', 120, 106], [3, '2 Parques', 165, 145], [4, '2 Parques', 205, 180]] }
const VENT = [['📅', '#ecdfe6', 'Entradas flexibles', '¡Las Entradas con fecha pueden cancelarse hasta 3 días antes de la llegada⁽¹⁾ (excepto las Entradas Básicas con fecha) y las Entradas sin fecha son válidas durante todo 1 año!'], ['€', '#e3e9f6', 'Nuestro Mejor Precio Garantizado', '¡Si en 24 horas encuentras un precio más bajo para las mismas Entradas de los Parques Disney, te reembolsaremos la diferencia!'], ['🎵', '#e8ebf8', 'Acceso a toda la magia', '¡Disfruta de todas nuestras atracciones, espectáculos, Encuentros con Personajes y mucho más!'], ['🧒', '#dcecea', 'Tarifas especiales para niños', 'Disponibles para niños de 3 a 11 años (excepto las Entradas Básicas con fecha). ¡Los menores de 3 años entran gratis!']]
const PARKS = {
  disneyland: ['Parque Disneyland', '¡Descubre la magia del Parque Disneyland con tu Entrada!', [['Un recorrido por Fantasyland', 'Pasea por los mundos de los cuentos de hadas.'], ['Atracciones emblemáticas', 'Big Thunder Mountain, Peter Pan y mucho más.'], ['Conoce a los Personajes Disney', 'Encuentros con Mickey, las Princesas y sus amigos.'], ['No te pierdas los espectáculos', 'Desfiles y espectáculos nocturnos en el Castillo.']]],
  dos: ['Disfruta de los 2 Parques', '¡Exprime al máximo tu experiencia Disney con una Entrada para los 2 Parques!', [['Un recorrido por los 2 Parques', 'Pasa de un Parque a otro cuando quieras.'], ['Atracciones emblemáticas', 'Space Mountain, Big Thunder Mountain y más.'], ['Conoce a los Personajes Disney y MARVEL', 'Encuentros con Mickey, Spider-Man y sus amigos.'], ['No te pierdas los espectáculos', 'Espectáculos nocturnos en cada Parque.']]],
  adventure: ['Disney Adventure World', '¡Vive la aventura en Disney Adventure World con tu Entrada!', [['Un recorrido por los Estudios', 'Descubre los mundos de Toy Story, MARVEL y más.'], ['Atracciones de vértigo', 'Avengers Assemble: Flight Force y otras.'], ['Conoce a los Superhéroes', 'Encuentros con Spider-Man y los Vengadores.'], ['Espectáculos únicos', 'Música, acrobacias y efectos especiales.']]],
}
const EXTRAS = [['Disney Premier Access Ultimate', '¡Sáltate la cola una vez en todas las atracciones incluidas en Disney Premier Access (excepto Orbitron)!'], ['Zona reservada⁽²⁾', '¡Disfruta de unas vistas espectaculares de Disney Stars on Parade y de nuestros espectáculos nocturnos!'], ['Acceso garantizado⁽³⁾ a nuestros espectáculos', '¡Compra tranquilidad asegurando tu acceso a determinados espectáculos con antelación!']]
const FAQ = [['¿Puedo comprar las Entradas para los Parques Disney en la taquilla de Entrada de los Parques Disney?', 'Las Entradas no se pueden comprar en las taquillas de entrada de los Parques Disney, salvo en determinados casos. Te recomendamos comprarlas con antelación.'], ['¿Tengo que registrar por adelantado las fechas de mi visita?', 'Sí, para las Entradas sin fecha debes registrar tus fechas de visita con antelación (sujeto a disponibilidad).'], ['¿Qué métodos de pago se aceptan en Disneyland Paris?', 'Visa, Mastercard, Apple Pay, PayPal, American Express, Klarna, Diners Club, Discover, JCB, UnionPay, AliPay y WeChat Pay.']]
const COND = [['(1) Condiciones de cambio o devolución de las Entradas con fecha de 1-4 días', 'Las Entradas con fecha se pueden cancelar gratuitamente hasta 3 días antes de la fecha de la visita. (Texto de ejemplo)'], ['(2) Condiciones de la zona reservada', 'La zona reservada está sujeta a disponibilidad y a las condiciones de cada espectáculo. (Texto de ejemplo)'], ['(3) Condiciones del acceso garantizado', 'El acceso garantizado se aplica solo a los espectáculos indicados y a la fecha elegida. (Texto de ejemplo)']]

const Div = ({ i }) => <div className="dl-divider"><span>{i}</span></div>
const Tabs = ({ cls }) => <div className={cls}>{TABS.map((t, i) => <button key={t[0]} data-go={t[0]} className={'en-tab' + (i ? '' : ' on')}><span className="ic">{t[2]}</span>{t[1]}</button>)}</div>
const Split = ({ img, title, children, rev }) => (
  <div className={'split' + (rev ? ' rev' : '')}><div className="split-t"><h3>{title}</h3>{children}</div><div className="split-i" style={bg(img)} /></div>
)
const Acc = ({ title, items }) => (
  <div className="acc"><h4>{title}</h4>{items.map(q => <div key={q[0]} className="acc-i"><button className="acc-q"><span>{q[0]}</span><b>+</b></button><div className="acc-a" style={{ display: 'none' }}>{q[1]}</div></div>)}</div>
)

export default function Entradas() {
  useEffect(() => initEntradas(), [])
  return (
    <div id="entradas">
      {/* Barra fija que aparece al bajar más allá de las pestañas (sustituye a la cabecera) */}
      <Tabs cls="en-sub" />
      <Header />
      {/* 🖼️ IMAGEN HEADER → src/config/images.js (entradas.header) */}
      <div className="en-hero" style={{ '--hero': `url(${E.header})` }} />
      <Tabs cls="en-tabs" />

      <div className="en-wrap">
        <section id="flex" className="en-sec">
          <h2 className="en-h">Nuestras Entradas a los Parques Disney</h2>
        </section>
      </div>
      <div className="dias">
        <h3>¿Cuántos días dura tu visita?</h3>
        <p>Los tipos de Entrada disponibles para la compra dependen del número de días que selecciones.</p>
        <div className="dias-opts">
          <button className="dias-opt" data-d="1"><i className="rad" /><div><strong>1 día</strong><span>¡Disfruta de un adelanto de la magia y descubre lo mejor de uno o de los dos Parques Disney!</span></div></button>
          <button className="dias-opt on" data-d="2"><i className="rad" /><div><strong>De 2 a 4 días</strong><span>Tómate el tiempo para descubrir los dos Parques Disney y disfruta de la magia a tu propio ritmo.</span></div></button>
        </div>
        <h4>¡Date más tiempo para descubrir!</h4>
        <div className="dias-perks"><span>🏰<br />Disfruta de acceso a los 2 Parques Disney</span><span>🎵<br />Vive los 2 increíbles espectáculos nocturnos, 1 en cada Parque</span><span>🪄<br />¡Descubre todas las atracciones, espectáculos y mucho más a tu ritmo!</span></div>
        {Object.entries(PACKS).map(([k, list]) => (
          <div key={k} className={'dias-pane' + (k === '2' ? ' on' : '')} data-d={k}>
            {list.map((p, i) => (
              <div className="pack" key={i}>
                <div className="pack-h"><span className="pack-n"><b>{p[0]}</b>día{p[0] > 1 ? 's' : ''}</span><strong>Entrada con fecha{k === '1' ? ' · ' + p[1] : ''}</strong><span className="pack-i">📅</span></div>
                <p>✔ Cancelación gratuita hasta 3 días antes de la fecha de tu visita⁽¹⁾</p>
                <button className="btn-dl" data-price data-title={`Entrada con fecha · ${p[0]} día${p[0] > 1 ? 's' : ''} · ${p[1]}`} data-a={p[2]} data-c={p[3]}>Ver precios</button>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="en-wrap">
        <Split img={E.calendario} title="Importante: Entradas sin fecha 1 Día">
          <p>Debes registrar tus fechas de visita con antelación (sujeto a disponibilidad dependiendo de la <a href="#">capacidad de los Parques Disney</a>) para acceder a los Parques Disney.</p>
          <button className="btn-outline-dl" onClick={() => alert('Comprobar disponibilidad (próximamente)')}>Comprobar disponibilidad</button>
        </Split>
        <h2 className="en-h mt-5">Descubre las ventajas de las entradas a los Parques Disney</h2>
        <p className="en-sub2">Compra con confianza en Disneyland Paris.</p>
        <div className="vent">{VENT.map(v => <div key={v[2]}><div className="vent-i" style={{ background: v[1] }}>{v[0]}</div><h4>{v[2]}</h4><p>{v[3]}</p></div>)}</div>

        <Div i="🎫" />
        <section id="otras" className="en-sec">
          <h2 className="en-h">Otras Entradas a los Parques Disney</h2>
          <div className="basic"><div className="basic-i" style={bg(E.basica)} /><div className="basic-t"><h3>Entrada Básica con Fecha (1 día)</h3><p>Se puede comprar para determinadas fechas con entre 60 y 90 días de antelación (disponibilidad limitada).</p>
            <div className="chips"><span>🚫 No reembolsable, no modificable y no cancelable</span><span>🏰 1 o 2 Parques Disney</span><span>👨‍👩‍👧 Mismo precio para adultos y niños (de 3 a 11 años)</span></div>
            <button className="btn-dl float-end" data-price data-title="Entrada Básica con Fecha (1 día)" data-a="55" data-c="55">Ver precios</button></div></div>
        </section>
        <Div i="🎫" />
      </div>

      <div className="parks">
        <div className="parks-banner" data-sel="dos"><div className="pb pb-l" style={bg(E.parques.disneyland)} /><div className="pb pb-r" style={bg(E.parques.adventure)} />
          <div className="park-tabs">{Object.entries(PARKS).map(([k, p]) => <button key={k} data-park={k} className={'park-tab' + (k === 'dos' ? ' on' : '')}>{p[0]}</button>)}</div></div>
        {Object.entries(PARKS).map(([k, p]) => (
          <div key={k} className={'park-pane' + (k === 'dos' ? ' on' : '')} data-park={k}>
            <h3>{p[1]}</h3>
            <div className="park-cards">{p[2].map((c, i) => <div key={i}><div className="park-img" style={bg(E.exp[k][i])} /><strong>{c[0]}</strong><p>{c[1]}</p></div>)}</div>
          </div>
        ))}
      </div>

      <div className="en-wrap">
        <section id="extras" className="en-sec">
          <h2 className="en-h">¡Mejora tu viaje con extras mágicos!</h2>
          <p className="en-sub2">Descubre cómo hacer que tu visita sea aún más mágica y crear recuerdos todavía más increíbles con estos servicios de pago.</p>
          <div className="extras">{EXTRAS.map((x, i) => <a href="#" className="mini" key={i}><div className="mini-img thumb" style={bg(E.extras[i])} /><div className="mini-txt"><strong>{x[0]}</strong><p>{x[1]}</p></div><i className="mini-arrow">›</i></a>)}</div>
        </section>
        <Div i="ℹ️" />
        <h2 className="en-h">Antes de venir</h2>
        <div className="antes"><div><div className="antes-i">🏰</div><h4>¡Compra tus Entradas para los Parques Disney por adelantado!</h4><p>Las Entradas para los Parques Disney no se pueden comprar en las taquillas de entrada de los Parques Disney, salvo en determinados casos. Ver detalles y precios <a href="#">aquí</a>.</p></div>
          <div><div className="antes-i">📱</div><h4>¡Descarga nuestra app oficial!</h4><p>¡Reserva mesa, compra tu Disney Premier Access, entra en los Parques Disney y mucho más!</p></div></div>
        <Div i="🎫" />
        <section id="tarifas" className="en-sec">
          <h2 className="en-h">Descubre nuestras tarifas especiales</h2>
          <Split img={E.discapacidad} title="Entradas a los Parques de Disney con tarifa especial para visitantes con discapacidad">
            <p>Los visitantes con discapacidad pueden beneficiarse de un descuento del 25 % en determinadas entradas para los parques de Disney, tanto para ellos mismos como para un acompañante, siempre que presenten el original de un documento acreditativo de discapacidad válido y un documento de identidad con fotografía el día de la visita.</p>
            <button className="btn-outline-dl">Saber más</button></Split>
        </section>
        <Div i="🧳" />
        <Split rev img={E.dias} title="¿Cuántos días necesitas para visitar Disneyland Paris?">
          <p>Descubre lo que puedes hacer en 1, 2, 3 o 4 días y elige la duración que mejor se ajuste a tus tiempos, tu presupuesto y tus preferencias de visita.</p><button className="btn-outline-dl">Descubre más</button></Split>
        <h2 className="en-h mt-5">¡Haz que la magia dure día y noche!</h2>
        <Split img={E.hotelesTematicos} title="Descubre nuestros Hoteles Disney temáticos">
          <p>¡Compra un Paquete Hotel Disney + Entradas y disfruta de ventajas exclusivas, como Encuentros con Personajes, aparcamiento gratuito o entrar en los Parques Disney antes del horario oficial de apertura!</p><a className="btn-outline-dl" href="/hoteles">Saber más</a></Split>
        <Acc title="¿Tienes dudas...? ¡Te las resolvemos!" items={FAQ} />
        <Acc title="Condiciones" items={COND} />
      </div>
      <Footer />

      <div className="en-modal" id="en-price"><div className="en-box"><button className="en-x">✕</button><h3 id="en-t" /><table><tbody><tr><td>Adulto (12 años y más)</td><td id="en-a" /></tr><tr><td>Niño (de 3 a 11 años)</td><td id="en-c" /></tr></tbody></table><p className="tiny">Precios de ejemplo. Se confirmarán al elegir la fecha.</p><button className="btn-dl" onClick={() => alert('Elegir fecha (próxima página)')}>Elegir fecha</button></div></div>
      <Feedback />
    </div>
  )
}
