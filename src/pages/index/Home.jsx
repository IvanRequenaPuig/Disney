import { useEffect } from 'react'
import './index.css'
import { initIndex } from './index.js'
import { IMG } from '../../config/images.js'
import Header from '../../components/Header.jsx'
import { Thumb } from '../../components/menus.jsx'


// 🖼️ Rutas de las imágenes → src/config/images.js (explicado en RUTAS-IMAGENES.md)
const plan = [
  [IMG.inicio.plan[0], 'En 2027, prepárate para un viaje inolvidable', 'Reserva ahora tu escapada para primavera o verano y disfruta de mayor disponibilidad en nuestros Paquetes Hotel + Entradas.', 'Descubre más'],
  [IMG.inicio.plan[1], 'Una entrada a la magia', 'Descubre nuestra gama de entradas y encuentra la opción que más te convenga para vivir una experiencia mágica en los Parques Disney.', 'Descubre más'],
  [IMG.inicio.plan[2], 'Descubre el pago a plazos', 'Paga tu paquete de Hotel + Entradas en hasta 6 plazos: paga un depósito del 15 % al hacer la reserva, y el resto en hasta 5 cuotas. ¡Flexible, seguro y sin ningún cargo!', 'Descubre más'],
]
// 🖼️ Rutas de las imágenes → src/config/images.js (explicado en RUTAS-IMAGENES.md)
const exp = [
  [IMG.inicio.exp[0], '¡Accede a la fila rápida con Disney Premier Access!', '¡Accede a la fila rápida y adelanta la fila habitual de algunas de nuestras atracciones más populares!', 'Más información'],
  [IMG.inicio.exp[1], 'Comidas con Personajes Disney', '¡Disfruta de una comida única y divertida con los entrañables Personajes Disney! Reserva ahora y añade a tu visita un momento inolvidable y lleno de magia.', '¡No te lo pierdas!'],
  [IMG.inicio.exp[2], 'Deslumbrantes espectáculos y cabalgatas', 'No te pierdas los espectáculos inmersivos y los impresionantes desfiles... ¡una parte esencial de cualquier visita a Disneyland Paris!', 'Saber más'],
]
// 🖼️ Rutas de las imágenes → src/config/images.js (explicado en RUTAS-IMAGENES.md)
const hotels = [
  [IMG.inicio.hotel[0], 'Disneyland Hotel', '★★★★★', 'En la entrada del Parque Disneyland', null, 'Celebra la magia de las historias de la realeza Disney... ¡y escribe la tuya propia!', 'Descubrir el Hotel'],
  [IMG.inicio.hotel[1], 'Disney Hotel New York - The Art of Marvel', '★★★★', '10 min a pie', 1, 'Siéntete un Superhéroe en este Hotel cosmopolita ambientado en Nueva York.', 'Conocer el Hotel'],
  [IMG.inicio.hotel[2], 'Disney Newport Bay Club', '★★★★', '15 min a pie', 1, 'Despierta en un espléndido ambiente marinero que hace alusión a las aventuras marítimas de Mickey.', 'Conocer el Hotel'],
  [IMG.inicio.hotel[3], 'Disney Sequoia Lodge', '★★★', '15 min a pie', 1, 'Relájate en un marco forestal con un toque mágico de montaña canadiense.', 'Conocer el Hotel'],
  [IMG.inicio.hotel[4], 'Disney Cheyenne Hotel', '★★★', '20 min a pie', 1, 'Vive el Salvaje Oeste con Woody en un rancho de película.', 'Conocer el Hotel'],
  [IMG.inicio.hotel[5], 'Disney Santa Fe Hotel', '★★★', '20 min a pie', 1, 'Un hotel inspirado en el desierto de Nuevo México y la película Cars.', 'Conocer el Hotel'],
]
const why = [
  ['#b0608f', '📅', 'Reservas flexibles', '¿Has cambiado de opinión? Cambia o cancela tu reserva sin cargos.'],
  ['#12958f', '💳', 'Pago a plazos', 'Paga un depósito al hacer la reserva, y el resto en hasta 5 cuotas.'],
  ['#4a86c0', '€', 'Mejor Precio Garantizado', 'Si encuentras un precio más bajo para un paquete Hotel Disney + Entradas, ¡te reembolsaremos la diferencia!'],
  ['#c9733a', '0€', 'Sin gastos de reserva', 'El precio que ves es el precio que pagarás.'],
  ['#e0294f', '❓', 'Expertos Disney a tu lado', 'Planifica tu inolvidable visita con la ayuda de nuestros Expertos Disney.'],
]
// 🖼️ Rutas de las imágenes → src/config/images.js (explicado en RUTAS-IMAGENES.md)
const day = [
  [IMG.inicio.day[0], '¿Vienes con tu pareja o con amigos?', '¡Descubre nuestras atracciones, restaurantes, tiendas y muchas cosas más y organiza tu día para que sea perfecto!'],
  [IMG.inicio.day[1], '¿Vienes con niños de 0 a 6 años?', '¡Planifica la visita para que todo salga perfecto y sea un día de diversión inolvidable para toda la familia!'],
  [IMG.inicio.day[2], '¿1, 2, 3 o 4+ días?', 'Encuentra la duración ideal para tu estancia.'],
  [IMG.inicio.day[3], '¿Cuándo visitar Disneyland Paris?', 'Descubre la mejor época para disfrutar de una escapada mágica.'],
]
// 🖼️ Rutas de las imágenes → src/config/images.js (explicado en RUTAS-IMAGENES.md)
const worlds = [
  [IMG.inicio.mundo[0], 'Las historias Disney', 'Disfruta de los espectáculos, los Encuentros con Personajes y las atracciones inspiradas en El Rey León, Lilo y Stitch, ¡y mucho más!'],
  [IMG.inicio.mundo[1], 'Princesas Disney', '¡Disfruta de momentos únicos de cuento de hadas con Encuentros mágicos, espectáculos, desfiles y más!'],
  [IMG.inicio.mundo[2], 'Mickey y sus Amigos', 'Descubre dónde encontrar Espectáculos, Encuentros con Personajes, souvenirs y mucho más!'],
  [IMG.inicio.mundo[3], 'Frozen', 'Sumérgete en la magia de Frozen con Anna, Elsa, Olaf y sus amigos de Arendelle.'],
  [IMG.inicio.mundo[4], 'Marvel', 'Te esperan épicas aventuras... ¡Prepárate para comer, dormir y divertirte al más puro estilo MARVEL!'],
  [IMG.inicio.mundo[5], 'Star Wars', 'Jedi, Padawans, droides, Sith, contrabandistas... están todos invitados a disfrutar con nosotros de Star Wars en el Parque Disneyland.'],
  [IMG.inicio.mundo[6], 'Pixar', '¡Descubre experiencias inspiradas en Toy Story, Ratatouille, Buscando a Nemo, Cars y ¡mucho más!'],
]

const Card = ({ img, title, text, cta }) => (
  <div className="col-12 col-md-4 reveal">
    <article className="dl-card h-100">
      <Thumb img={img} cls="curve" />
      <div className="dl-card-body"><h3>{title}</h3><p>{text}</p><button className="btn-outline-dl">{cta}</button></div>
    </article>
  </div>
)
const Divider = ({ icon }) => <div className="dl-divider"><span>{icon}</span></div>
const MiniCard = ({ img, title, text }) => (
  <div className="col-12 col-md-6"><a href="#" className="mini">
    <Thumb img={img} cls="mini-img" /><div className="mini-txt"><strong>{title}</strong><p>{text}</p></div><i className="mini-arrow">›</i>
  </a></div>
)

export default function Home() {
  useEffect(() => initIndex(), [])
  return (
    <div id="home">
      <Header />

      <section className="hero" style={{ '--hero': `url(${IMG.inicio.hero})` }}>
        <div className="hero-text"><strong>La Navidad Encantada Disney</strong><br /><strong>Del 7 de noviembre al 6 de enero</strong><br />
          <a className="btn-dl mt-2" href="#">Reserva ya</a></div>
        <div className="booking">
          <div className="bk-tabs">
            <button className="bk-tab active" data-tab="hotel">🏨 Hotel + Entradas</button>
            <button className="bk-tab" data-tab="tickets">🎟 Entradas</button>
          </div>
          <div className="row g-3 align-items-end px-3">
            <div className="col-md-4"><label>Elige Fechas</label>
              <div className="d-flex"><input type="date" className="form-control form-control-sm" id="bk-in" /><input type="date" className="form-control form-control-sm" id="bk-out" /></div></div>
            <div className="col-md-3 bk-hotel-only"><label>Hoteles y Resorts</label>
              <select className="form-select form-select-sm"><option>Todos los Hoteles</option>{hotels.map(h => <option key={h[1]}>{h[1]}</option>)}</select></div>
            <div className="col-md-3"><label>Habitaciones y Huéspedes</label>
              <select className="form-select form-select-sm"><option>1 Habitación / 2 Huéspedes</option><option>1 Habitación / 3 Huéspedes</option><option>2 Habitaciones / 4 Huéspedes</option></select></div>
            <div className="col-md-2"><button className="btn-dl w-100" id="bk-go">Reservar</button></div>
          </div>
          <p className="text-center small mt-3 mb-2">¿Buscas el momento ideal para venir? <a href="#">¡Compara diferentes periodos!</a></p>
        </div>
      </section>

      <main className="container-xl dl-main">
        <h2 className="sec-title">Planifica tu viaje a Disneyland Paris</h2>
        <p className="sec-sub">Descubre cuál es el mejor momento para tu visita y cómo aprovechar al máximo tus vacaciones.</p>
        <div className="row g-3 justify-content-center">{plan.map(p => <Card key={p[1]} img={p[0]} title={p[1]} text={p[2]} cta={p[3]} />)}</div>
        <Divider icon="✨" />

        <h2 className="sec-title">La experiencia de Disneyland Paris</h2>
        <p className="sec-sub">¡Disfruta de increíbles espectáculos, cabalgatas, encuentros con Personajes y un sinfín de actividades para todas las edades y todos los gustos!</p>
        <div className="row g-3 justify-content-center">{exp.map(p => <Card key={p[1]} img={p[0]} title={p[1]} text={p[2]} cta={p[3]} />)}</div>
        <div className="text-center mt-4"><a className="btn-dl" href="#">Descubre la experiencia de Disneyland Paris</a></div>
        <Divider icon="🏰" />

        <h2 className="sec-title">¡Descubre la magia de los Hoteles Disney!</h2>
        <p className="sec-sub">Cada Hotel Disney te sumerge en una temática emblemática con una historia propia para contar. Te esperan mundos maravillosos para todas las edades, presupuestos y sueños.</p>
        <div className="hc">
          <div className="hc-view"><div className="hc-track">
            {hotels.map(h => (
              <div className="hc-card" key={h[1]}><article className="dl-card h-100">
                <Thumb img={h[0]} cls="curve" />
                <div className="dl-card-body"><h3>{h[1]} <small>{h[2]}</small></h3>
                  <span className="tag">{h[3]}</span>{h[4] && <span className="tag">🚌 Servicio de autobús gratuito</span>}
                  <p>{h[5]}</p><button className="btn-outline-dl">{h[6]}</button></div>
              </article></div>
            ))}
          </div></div>
          <button className="hc-next" aria-label="Siguiente">›</button>
          <button className="hc-prev" aria-label="Anterior">‹</button>
        </div>
        <div className="hc-dots">{hotels.slice(2).map((_, i) => <i key={i} className="hc-dot" />)}</div>
        <div className="text-center mt-3"><a className="btn-dl" href="/explorar?tipo=hoteles">Ver todos los hoteles</a></div>
        <Divider icon="🛏" />

        <h2 className="sec-title">¿Por qué comprar tu paquete Hotel Disney + Entradas directamente con Disneyland Paris?</h2>
        <p className="sec-sub">¡Reserva con tranquilidad al comprar tu paquete a través de DisneylandParis.com o con nuestros expertos Disney!</p>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {why.map((w, i) => (
            <div className="why reveal" key={w[2]}><div className="why-top"><img className="why-img" src={IMG.inicio.why[i]} alt={w[2]} /></div><h4>{w[2]}</h4><p>{w[3]}</p></div>
          ))}
        </div>
        <div className="text-center mt-4"><a className="btn-outline-dl" href="#">Descubre nuestras condiciones de reserva</a></div>
        <Divider icon="✨" />

        <section className="mini-section mini-section-day" aria-labelledby="mini-day-title">
          <h2 id="mini-day-title" className="sec-title mini-section-title">Planifica tu día perfecto</h2>
          <div className="row g-3 mb-4 mx-auto mini-section-grid">{day.map(d => <MiniCard key={d[1]} img={d[0]} title={d[1]} text={d[2]} />)}</div>
        </section>
        <Divider icon="Ⓓ" />
        <section className="mini-section mini-section-worlds" aria-labelledby="mini-worlds-title">
          <h2 id="mini-worlds-title" className="sec-title mini-section-title">Explora nuestros mágicos mundos</h2>
          <div className="row g-3 mb-3 mx-auto mini-section-grid">{worlds.map(d => <MiniCard key={d[1]} img={d[0]} title={d[1]} text={d[2]} />)}</div>
        </section>
        <div className="text-center mb-5"><a className="btn-dl" href="#">Explora todos nuestros mundos</a></div>

        <section className="row g-4 align-items-center mb-5">
          <div className="col-md-6"><h3 className="fs-6 fw-bold">¿No puedes esperar? Información importante</h3>
            <p className="small">Debido a la alta demanda, los Parques Disney están llenos en muchas fechas. Para acceder a los Parques Disney, debes tener una entrada con fecha o, si tienes una entrada, pase anual sin fecha o un Disneyland Pass. Registrar con antelación tu entrada para el día de tu visita.</p>
            <div className="d-flex gap-2"><a className="btn-outline-dl" href="#">Comprar una entrada</a><a className="btn-outline-dl" href="#">Registrarse ahora</a></div></div>
          <div className="col-md-6"><div className="clock-box"><img src={IMG.inicio.tiempo} alt="Información importante sobre tu visita" /></div></div>
          {/* 🖼️ Imagen → src/config/images.js */}
          <div className="col-md-6"><Thumb img={IMG.inicio.access} cls="access" /></div>
          <div className="col-md-6"><h3 className="fs-6 fw-bold">Entradas a tarifa reducida para Visitantes con discapacidad disponibles online</h3>
            <p className="small">Los Visitantes con discapacidad pueden beneficiarse de un 25% descuento en el precio de las Entradas a los Parques Disney compradas online, tanto para ellos como para su acompañante.</p>
            <a className="btn-outline-dl" href="#">Más información</a></div>
        </section>
        <Divider icon="🪄" />

        <h2 className="sec-title fs-6">La información más completa sobre Disneyland Paris</h2>
        <p className="sec-sub">Si quieres saber todos los secretos sobre el Parque descárgate la app, suscríbete a nuestra Newsletter o consulta nuestro nuevo folleto digital. ¡Podrás aprovechar al máximo tu próxima visita!</p>
        <div className="row g-3 justify-content-center mb-5">
          {/* 🖼️ Imagen → src/config/images.js */}
          <Card img={IMG.inicio.app} title="¡Toda la magia de los Parques al alcance de tu mano!" text="Descubre nuestra app móvil oficial y reserva mesa en nuestros restaurantes, consulta tiempos de espera en las atracciones y mucho más..." cta="Descubre la aplicación móvil" />
          <Card img={IMG.inicio.news} title="¡Magia y un regalo en tu bandeja de entrada!" text="Regístrate para recibir vía email ofertas especiales y novedades sobre Disneyland Paris y otros productos y servicios del Grupo de empresas de Walt Disney." cta="Registrarse ahora" />
        </div>
      </main>

      <button className="fb-tab">Comentarios</button>
      <div className="fb-overlay" hidden>
        <div className="fb-modal" role="dialog" aria-modal="true">
          <button className="fb-close" aria-label="Cerrar">×</button>
          {/* 🖼️ Imagen → src/config/images.js */}
          <div className="logo mb-3"><img src={IMG.comun.logo} alt="Disneyland Paris" className="logo-img" /><small>PARIS</small></div>
          <h3>¡Tu opinión nos interesa!</h3>
          <p>Tus comentarios nos ayudan a mejorar continuamente la experiencia de navegación en Disneylandparis.com</p>
          <div className="row g-3">
            {[['Sobre una sección específica', 'Deja un comentario sobre un apartado específico de la web'], ['Sobre el conjunto de la web', 'Deja un comentario sobre la web en general'], ['¿Alguna pregunta sobre tu reserva?', 'Modifica tu reserva a través de nuestro formulario online']].map(o => (
              <div className="col-4" key={o[0]}><button className="fb-opt"><span className="fb-ico" /><strong>{o[0]}</strong><small>{o[1]}</small></button></div>
            ))}
          </div>
          <div className="fb-form" hidden>
            <textarea className="form-control" rows="3" placeholder="Escribe tu comentario..." />
            <button className="btn-dl mt-2 fb-send">Enviar</button>
          </div>
          <p className="fb-thanks" hidden>¡Gracias por tu opinión!</p>
        </div>
      </div>
    </div>
  )
}
