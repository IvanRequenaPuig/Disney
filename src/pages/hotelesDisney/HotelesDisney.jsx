import { useEffect } from 'react'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import Feedback from '../../components/Feedback.jsx'
import PriceCalendar from '../../components/PriceCalendar.jsx'
import { IMG } from '../../config/images.js'
import './hotelesDisney.css'
import { initHotelesDisney } from './hotelesDisney.js'

// 🖼️ Imágenes → src/config/images.js (bloque "hotelesDisney"; las fotos de los hoteles reutilizan IMG.inicio.hotel)
const H = IMG.hotelesDisney
const bg = u => ({ '--img': `url(${u})` })

// Pestañas bajo el header (id de sección, texto, icono). Al bajar, la cabecera se sustituye por esta misma barra fija
const TABS = [['hd-hoteles', 'Nuestros hoteles', '🛎'], ['hd-restaurantes', 'Restaurantes y más', '🪄'], ['hd-reserva', 'Reserva tu estancia', '🧳']]

// Hoteles: [foto, nombre, estrellas, distancia, ¿autobús?, texto, botón]
const HOTELES = [
  [IMG.inicio.hotel[0], 'Disneyland Hotel', 5, 'En la entrada del Parque Disneyland', false, 'Celebra la magia de las historias de la realeza Disney... ¡y escribe la tuya propia!', 'Descubrir el Hotel'],
  [IMG.inicio.hotel[1], 'Disney Hotel New York - The Art of Marvel', 4, '10 min a pie', true, 'Siéntete un Superhéroe en este Hotel cosmopolita ambientado en Nueva York.', 'Conocer el Hotel'],
  [IMG.inicio.hotel[2], 'Disney Newport Bay Club', 4, '15 min a pie', true, 'Despierta en un espléndido ambiente marinero que hace alusión a las aventuras marítimas de Mickey.', 'Conocer el Hotel'],
  [IMG.inicio.hotel[3], 'Disney Sequoia Lodge', 3, '15 min a pie', true, 'Relájate en un marco forestal con un toque mágico de montaña canadiense.', 'Conocer el Hotel'],
  [IMG.inicio.hotel[4], 'Disney Hotel Cheyenne', 3, '20 min a pie', true, 'Vive el Salvaje Oeste con Woody en un rancho de película.', 'Conocer el Hotel'],
  [IMG.inicio.hotel[5], 'Disney Hotel Santa Fe', 2, '20 min a pie', true, 'Un hotel inspirado en el desierto de Nuevo México y la película Cars.', 'Conocer el Hotel'],
]

// Experiencia inmersiva: [título, texto (puede llevar <sup>), botón o null]
const EXPERIENCIA = [
  ['Restaurantes y bares temáticos Disney', '¡Disfruta de comidas Disneyliciosas en los restaurantes y bares temáticos de tu hotel!', 'Ver todos los restaurantes'],
  ['Encuentros con Personajes en tu hotel', 'Empieza el día con un momento inolvidable con los Personajes Disney antes de ir a los Parques Disney<sup>(1)</sup>.', null],
  ['Un festín para los ojos', '¡Abre bien los ojos y estate atento! Hasta el último rincón de nuestros hoteles está ambientado y decorado con sutiles e ingeniosos toques Disney.', null],
  ['Magia para toda la familia', 'Alarga la magia con la piscina, gimnasio y las actividades de nuestros hoteles. ¡Para los niños, diversión sin fin!', null],
]

// Ventajas: [icono, título, texto]
const VENTAJAS = [
  ['🪄', 'Extra Magic Time', 'Entra en los Parques antes de que abran y saluda a los Personajes Disney en el hotel<sup>(1)</sup>.'],
  ['🎟', 'Acceso a los dos Parques', 'Disfruta de los Parques de la mañana a la noche todos los días de tu estancia.'],
  ['🛏', 'La magia nunca queda lejos', 'En nuestros hoteles estarás muy cerca de los Parques<sup>(2)</sup>, a solo unos pocos minutos andando o en autobús gratuito.'],
  ['🅿', 'Aparcamiento gratuito', 'Aparca gratis junto a tu alojamiento y en la entrada de los Parques.'],
]

// Servicios: [icono, texto]
const SERVICIOS = [['👶', 'Cunas gratuitas'], ['🛎', 'Servicio de conserjería'], ['🎟', 'MagicPass'], ['📲', 'Registro antes de tu llegada'], ['📶', 'Wi-Fi gratuito'], ['🛍', 'Servicio de compras'], ['🏊', 'Piscina'], ['🚌', 'Servicio de autobús gratuito']]

// ¿Por qué comprar directamente?: [color, color claro, icono, título, texto]
const WHY = [
  ['#b0608f', '#f1dbe8', '📅', 'Reservas flexibles', '¿Has cambiado de opinión? Cambia o cancela tu reserva sin cargos.'],
  ['#12958f', '#c9efec', '💳', 'Pago a plazos', 'Paga un depósito al hacer la reserva, y el resto en hasta 5 cuotas.'],
  ['#3f7fbf', '#d9e7f6', '🧾', 'Mejor Precio Garantizado', 'Si encuentras un precio más bajo para un paquete Hotel Disney + Entradas, ¡te reembolsaremos la diferencia!'],
  ['#c4693a', '#fde6c3', '0€', 'Sin gastos de reserva', 'El precio que ves es el precio que pagarás.'],
  ['#e0245e', '#fddde6', '💬', 'Expertos Disney a tu lado', 'Planifica tu inolvidable visita con la ayuda de nuestros Expertos Disney.'],
]

// Preguntas frecuentes (textos de ejemplo: sustitúyelos por los definitivos)
const FAQ = [
  ['¿Los hoteles están equipados para alojar a personas con discapacidad o con necesidades especiales?', 'Todos los Hoteles Disney cuentan con habitaciones adaptadas y servicios de accesibilidad. Indícanos tus necesidades al reservar o contacta con nuestros Expertos Disney para que preparemos tu estancia.'],
  ['¿También los adultos se divertirán en los hoteles o están pensados solo para los niños?', '¡Para todas las edades! Bares temáticos, restaurantes, habitaciones Club y mucho más para que los adultos también disfruten de la magia.'],
  ['¿Qué servicios hay disponibles para niños y bebés en los hoteles Disney?', 'Cunas gratuitas, tronas en los restaurantes, encuentros con Personajes Disney y actividades para los más pequeños, entre otros servicios.'],
  ['¿Puedo salir de un Parque Disney® y volver más tarde ese mismo día?', 'Sí. Con tu entrada de varios Parques o de día completo puedes salir y volver a entrar el mismo día, según las condiciones de tu entrada.'],
  ['¿Qué debo saber sobre el check-in y check-out de los Hoteles Disney?', 'Puedes hacer el registro antes de tu llegada. Consulta en tu confirmación de reserva las horas de entrada y salida de tu hotel.'],
  ['¿Cómo llegamos a los Parques Disney desde el hotel?', 'Andando en pocos minutos o con el servicio de autobús gratuito (según el hotel). El Disneyland Hotel está en la entrada del Parque Disneyland.'],
  ['¿Qué diferencias hay entre los Hoteles Disney?', 'Cada hotel tiene su temática, categoría y distancia a los Parques. Usa el comparador de hoteles para ver las diferencias de un vistazo.'],
  ['¿Qué servicios puedo encontrar en cada hotel?', 'Wi-Fi gratuito, conserjería, servicio de compras y MagicPass en todos los hoteles. Otros servicios, como la piscina, varían según el hotel.'],
  ['¿Están abiertas las piscinas de los Hoteles Disney?', 'Los horarios y la disponibilidad de las piscinas pueden variar según la temporada. Consulta la información de cada hotel antes de tu llegada.'],
]

const Tabs = ({ cls }) => <div className={cls}>{TABS.map((t, i) => <button key={t[0]} type="button" data-go={t[0]} className={'hd-tab' + (i ? '' : ' on')}><span className="ic">{t[2]}</span>{t[1]}</button>)}</div>
const Carousel = ({ children }) => (
  <div className="hd-carwrap">
    <div className="hd-car"><button className="hd-arrow hd-prev" type="button" aria-label="Anterior" hidden>‹</button><div className="hd-track">{children}</div><button className="hd-arrow hd-next" type="button" aria-label="Siguiente">›</button></div>
    <div className="hd-dots" />
  </div>
)
const Html = ({ t, tag: T = 'p' }) => <T dangerouslySetInnerHTML={{ __html: t }} />

export default function HotelesDisney() {
  useEffect(() => initHotelesDisney(), [])
  return (
    <div id="hdisney">
      <Tabs cls="hd-sub" />
      <Header />

      {/* 🖼️ IMAGEN HEADER → src/config/images.js (hotelesDisney.hero) */}
      <section className="hd-hero" style={{ '--hero': `url(${H.hero})` }}><h1>Hoteles en Disneyland Paris</h1></section>
      <Tabs cls="hd-tabs" />

      {/* ───────── 1. Nuestros hoteles ───────── */}
      <section id="hd-hoteles" className="hd-sec">
        <div className="hd-intro"><h2>¡Haz que la magia dure día y noche!</h2><p>Alójate en un Hotel Disney y disfruta de una experiencia inmersiva y de ventajas exclusivas. La elección ideal para todas las edades.</p></div>
        <div className="hd-wrap hd-center">
          <h2 className="hd-h">Hoteles temáticos</h2>
          <p className="hd-sub2">Cada Hotel Disney te sumerge en una emblemática historia. Mundos maravillosos para todos los gustos, todas las edades y todos los presupuestos.</p>
          <Carousel>{HOTELES.map(h => (
            <article className="hd-card" key={h[1]}>
              <div className="hd-card-img" style={bg(h[0])} />
              <div className="hd-card-b">
                <h3>{h[1]} <span className="hd-stars">{'★'.repeat(h[2])}</span></h3>
                <div className="hd-tags"><span className="hd-tag">🚶 {h[3]}</span>{h[4] && <span className="hd-tag">🚌 Servicio de autobús gratuito</span>}</div>
                <p>{h[5]}</p>
                <a className="hd-btn-o" href="#">{h[6]}</a>
              </div>
            </article>))}
          </Carousel>
          <a className="hd-btn-o hd-compare" href="#hd-reserva" data-go="hd-reserva">Comparar precios</a>
        </div>
      </section>

      {/* ───────── 2. Restaurantes y más ───────── */}
      <section id="hd-restaurantes" className="hd-sec">
        <div className="hd-wrap hd-center">
          <h2 className="hd-h">Una experiencia inmersiva y única como solo Disney sabe hacerlo</h2>
          <p className="hd-sub2">¡La magia no termina cuando sales de los Parques Disney! Disfruta de ventajas únicas y momentos llenos de diversión alojándote en un Hotel Disney.</p>
          <Carousel>{EXPERIENCIA.map((e, i) => (
            <article className="hd-card hd-card-s" key={e[0]}>
              <div className="hd-card-img" style={bg(H.experiencia[i])} />
              <div className="hd-card-b"><h3>{e[0]}</h3><Html t={e[1]} />{e[2] && <a className="hd-btn-o" href="/explorar?tipo=restaurantes&parque=hoteles">{e[2]}</a>}</div>
            </article>))}
          </Carousel>
          <div className="hd-did"><strong>¿Sabías que...?</strong><p>El 75 % de los equipamientos de los Hoteles Disney cuentan con luces LED en las zonas accesibles a los clientes.</p></div>

          <h2 className="hd-h">Ventajas Disney únicas solo para ti</h2>
          <p className="hd-sub2">¡Alójate en un Hotel Disney y disfruta de ventajas especiales para vivir la magia día y noche!</p>
          <div className="hd-cols4">{VENTAJAS.map(v => <div key={v[1]}><span className="hd-ic">{v[0]}</span><h4>{v[1]}</h4><Html t={v[2]} /></div>)}</div>
          <a className="hd-btn-o" href="#">Más información</a>
        </div>
      </section>

      {/* ───────── 3. Reserva tu estancia ───────── */}
      <section id="hd-reserva" className="hd-sec">
        <div className="hd-wrap hd-center">
          <h2 className="hd-h">Planifica tu estancia con nuestro calendario estimado de precios</h2>
          <p className="hd-sub2">¡Compara diferentes fechas* y utiliza nuestro calendario para encontrar el momento ideal para visitar el corazón de la Magia!</p>
          <div className="hd-info">
            <div><span>📅</span>El precio del paquete se basa en la fecha de llegada.</div>
            <div><span>🔄</span>Estimaciones de precios basadas en los precios registrados cada mañana a las 8 a.m. y actualizados una vez al día.</div>
          </div>
        </div>
        <div className="hd-cal"><PriceCalendar /></div>
        <p className="hd-note">*Los precios pueden variar según el momento de la reserva. Los precios indicados en el calendario son estimaciones basadas en los precios registrados cada mañana y se actualizan una vez al día. Los precios están sujetos a cambios según el momento de la reserva. El calendario es únicamente informativo y no contractual. Todos los precios están indicados en Euros redondeado a más.</p>

        <div className="hd-wrap hd-center">
          <h2 className="hd-h">¡Encuentra el alojamiento ideal para ti!</h2>
          <p className="hd-sub2">Habitación, bungalow o suite Disney, ¡hay opciones para todos los gustos y bolsillos!</p>
          <div className="hd-rooms">
            <article className="hd-room"><div className="hd-room-img" style={bg(H.alojamiento[0])} /><div className="hd-room-t"><h3>Habitaciones familiares y cabañas</h3><p>Habitación familiar o individual, con o sin vistas al lago, con terraza, con acceso al jardín, o incluso una acogedora cabaña en pleno bosque... Sea cual sea tu elección ¡cada detalle te sumergirá en la magia como solo Disney sabe hacerlo!</p></div></article>
            <article className="hd-room hd-room-r"><div className="hd-room-img" style={bg(H.alojamiento[1])} /><div className="hd-room-t"><h3>Habitaciones y suites Club</h3><p>Únete al club y disfruta de habitaciones premium y servicios exclusivos.</p><p>¡Alójate en una habitación o en una suite Club y disfruta de trato VIP con mostrador de recepción privado, salón exclusivo, servicio de aparcacoches y muchos más servicios!</p><a className="hd-btn-o" href="#">Más información</a></div></article>
          </div>

          <h2 className="hd-h">Descubre las instalaciones y los servicios de nuestros hoteles</h2>
          <p className="hd-sub2">En todos los hoteles encontrarás una serie de servicios e instalaciones para que te sientas como en casa.</p>
          <div className="hd-serv">{SERVICIOS.map(s => <div key={s[1]}><span>{s[0]}</span>{s[1]}</div>)}</div>

          <h2 className="hd-h">¿Por qué comprar tu paquete Hotel Disney + Entradas directamente con Disneyland Paris?</h2>
          <p className="hd-sub2">¡Reserva con tranquilidad al comprar tu paquete a través de DisneylandParis.com o con nuestros expertos Disney!</p>
          <div className="hd-why">{WHY.map((w, i) => (
            <div key={w[3]}><img className="hd-why-img" src={IMG.inicio.why[i]} alt={w[3]} /><h4>{w[3]}</h4><p>{w[4]}</p></div>))}
          </div>
          <a className="hd-btn-o" href="#">Descubre nuestras condiciones de reserva</a>
        </div>

        <div className="hd-faq">
          <h4>❓ Tus preguntas</h4>
          {FAQ.map(q => <div className="hd-q" key={q[0]}><button type="button" className="hd-q-b" aria-expanded="false"><span>{q[0]}</span><i>+</i></button><div className="hd-q-a" hidden><p>{q[1]}</p></div></div>)}
        </div>

        <div className="hd-cond">
          <h2>Condiciones</h2>
          <p>(1) Algunas experiencias están sujetas a cambios, retrasos o cancelaciones sin previo aviso, especialmente en caso de mal tiempo o por motivos de seguridad. Los Personajes Disney no están presentes en Disney Davy Crockett Ranch.</p>
          <p>(2) No aplicable al Disney Davy Crockett Ranch. Es posible que algunos Hoteles Disney no tengan disponibilidad en la fecha en que deseas reservar. Si el hotel no está disponible en la fecha solicitada, te propondremos una alternativa adecuada.</p>
          <p>(3) Ten en cuenta lo siguiente: Para recoger Disney® PhotoPass™+, cupones, Tarjetas Regalo o vales de excursiones reservadas con antelación, o para solicitar una tarjeta de cargo del Hotel,* dirígete a la Recepción de tu Hotel Disney.</p>
          <p>Si reservas tu estancia 3 días o menos antes de tu llegada, no podrás acceder a tu Digital MagicPass antes de tu estancia. Tendrás que dirigirte al Mostrador de Recepción de tu Hotel para activarlos y recoger tus Entradas a los Parques Disney o Vales de Comida (si procede).</p>
          <p>*Puedes activar la función de pago de tu MagicPass físico en Recepción para añadir a tu factura del Hotel las compras realizadas en los Parques Disney, Hoteles Disney y Disney Village. Para utilizar este servicio, los Huéspedes deben dejar una tarjeta de crédito registrada en Recepción que se utilizará para liquidar la factura. Para más información, consulta con el equipo de Recepción.</p>
        </div>
      </section>

      <Footer />
      <Feedback />
    </div>
  )
}
