import { useEffect } from 'react'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import Feedback from '../../components/Feedback.jsx'
import { IMG } from '../../config/images.js'
import './comer.css'
import { initComer } from './comer.js'

// 🖼️ Todas las imágenes de esta página se definen en src/config/images.js (bloque "comer")
const C = IMG.comer
const bg = u => ({ '--img': `url(${u})` })

// Pestañas de la tarjeta bajo el header (id de sección, texto, icono)
const TABS = [['tematicos', 'Nuestros restaurantes temáticos', '🍽'], ['cocina', 'Nuestra deliciosa cocina', '👨‍🍳'], ['personajes', 'Comidas con Personajes', '🐭'], ['planes', 'Nuestros Planes de comidas', '🥣']]

// Opciones para comer: [título, texto, botón, ¿reserva online?]
const OPCIONES = [
  ['Restaurantes con servicio de mesa', '¡Come a la luz de las antorchas en el escondite del Captain Jack’s, saborea deliciosos platos en el famoso Bistrot Chez Rémy o dirígete a Silver Spur Steakhouse y disfruta de una suculenta carne a la brasa!', 'Ver todos los restaurantes con servicio de mesa', true],
  ['Buffet libre', 'Cada uno de nuestros 7 Hoteles Disney tiene su propio buffet libre: deléitate con una especialidad de China Town en el restaurante Downtown, o toma asiento en un carruaje real en el Chuck Wagon Café … ¡Yeehaw!', 'Ver los restaurantes con servicio buffet', true],
  ['Restaurantes de servicio rápido', '¡Haz tu pedido en el mostrador y busca sitio para sentarte! ¿Qué te apetece? ¿Un Chakalaka en Hakuna Matata, una pizza en Stark Factory o unos espaguetis para dos en Pizzeria Bella Notte?', 'Ver todos los restaurantes de servicio rápido', false],
  ['Comida para llevar', 'Disfruta de un Croque McQueen en Laugh’N’Go! en Disney Adventure World, date un capricho con un Pawsome Delight en el Café de la Brousse en el Parque Disneyland o, si te apetece algo más ligero, puedes tomar un té y dulces en March Hare Refreshments.', 'Ver comida para llevar', false],
]

// Iconos de la app (círculos rojos)
const APP = [['📖', 'Consulta nuestra carta de comidas y bebidas'], ['📅', 'Reserva tu mesa en un restaurante con antelación', 'Reservar'], ['📱', 'Reserva comida con antelación el día de tu visita y recógela más tarde', 'Saber más'], ['🧭', 'Encuentra un restaurante con el mapa interactivo']]

// Sin entrada a los Parques: [título, texto]
const SIN_ENTRADA = [['Disney Village', '¡Sal a comer, ve al cine y después da un paseo por Disney Village hasta tarde!'], ['Restaurantes de los Hoteles', '¡Los restaurantes de nuestros Hoteles están todos ambientados en Disney! ¿Cuál es tu favorito?'], ['Bares de los Hoteles', 'Con nuevos cócteles y bebidas temáticas cada temporada.']]

// Valores de Disneyland Paris: [icono, título, texto]
const VALORES = [['🥕', 'Productos de calidad', 'Todos nuestros platos se elaboran con cariño y el máximo cuidado, eligiendo los mejores ingredientes para realzar su calidad y sabor.'], ['🐭', '100% Disney', '¡Nuestros chefs siempre están ideando recetas cada vez más creativas inspiradas en diferentes Personajes e historias Disney!'], ['🌿', 'Variedad de cocinas', 'Nuestros restaurantes ofrecen gran variedad de platos y sabores de todo el mundo. ¡Un deleite para todos los paladares!'], ['👨‍👩‍👧', 'Menús para todos', 'Ofrecemos una selección de platos para visitantes con necesidades dietéticas especiales, como vegetarianos, halal, kosher y platos sin los alérgenos más comunes.']]

// "En Disneyland Paris, encontrarás…": [título, texto]
const ENCONTRARAS = [['Platos caseros', '¡Muchos de nuestros platos se elaboran al momento, como las costillas ahumadas del Hotel Cheyenne, el pollo asado con paprika del Chalet de la Marionnette o los postres de nuestra pastelería secreta (que luego se venden en los Parques Disney)!'], ['Vegetariano y vegano', 'Prueba el Colombo en Captain Jack’s, el Couscous Real en Agrabah Café Restaurant, el Tex-Mex picante en Casa de Coco – Restaurante de Familia, una hamburguesa en Annette’s Diner, o el famoso ratatouille en Bistrot Chez Rémy.'], ['Opciones ecológicas', 'En nuestros restaurantes de servicio rápido encontrarás una amplia selección de productos ecológicos para niños: compota, quesos, sorbetes y bebidas. El vino de Disneyland Paris también es ecológico con la certificación Demeter.'], ['Vinos excelentes', 'Los amantes del vino tienen a su disposición una amplia gama de vinos de calidad procedentes de todo el mundo. Pueden degustarse exquisitos maridajes de vino y comida en el Manhattan Restaurant (Disney Hotel New York - The Art of Marvel) y el Yacht Club (Disney Newport Bay Club).']]

// Para los padres: [icono, título, texto]
const PADRES = [['✅', 'El símbolo Disney Check para comidas saludables', '¡Con el símbolo Disney Check en los menús infantiles de nuestros restaurantes de servicio rápido encontrarás fácilmente las comidas bajas en grasa y que incluyen al menos 2 porciones de fruta y verdura!'], ['🎂', '¡Tartas de cumpleaños: sorpréndelos!', 'Pide una tarta de cumpleaños (hasta 8 porciones) en cualquiera de nuestros restaurantes con servicio de mesa o come lo que quieras. ¡Pide la tarta al reservar tu mesa a través de nuestra app o cuando llegues!'], ['🍼', '¿Y para los más pequeños? ¡También tenemos opciones!', 'En todos nuestros restaurantes encontrarás tronas. Además, los dos Parques Disney cuentan con una sala de lactancia con microondas. También puedes comprar potitos, pañales y muchos más artículos.']]

// Con un plan de comidas…: [título, texto]
const PLAN = [['Disfruta de la tranquilidad', 'Tendrás resueltas las comidas por adelantado y el presupuesto para todo. ¡Lo único que tienes que hacer es disfrutar de cada momento de tu estancia!'], ['Con opciones flexibles', 'Desde solo desayuno hasta pensión completa, elige el ritmo y el grado de flexibilidad que más te convenga.'], ['Disfruta de la variedad con total libertad', 'Podrás elegir restaurantes con servicio de mesa, buffet libre o servicio rápido en nuestros Parques y Hoteles Disney e incluso Disney Village.'], ['¡Aprovecha al máximo tu estancia!', 'Ambientes temáticos y magnífica comida: ¡con nuestros Planes de comidas podrás descubrir la mejor cocina Disney!']]

const FACES = [['😢', 'Muy mal'], ['😞', 'Mal'], ['😐', 'Normal'], ['🙂', 'Bien'], ['😄', 'Muy bien']]

const Div = ({ i }) => <div className="dl-divider"><span>{i}</span></div>
const Tabs = ({ cls }) => <div className={cls}>{TABS.map((t, i) => <button key={t[0]} type="button" data-go={t[0]} className={'cm-tab' + (i ? '' : ' on')}><span className="ic">{t[2]}</span>{t[1]}</button>)}</div>
const Mini = ({ img, title, text, href = '#' }) => (
  <a href={href} className="cm-mini"><div className="cm-mini-img" style={bg(img)} /><div className="cm-mini-txt"><strong>{title}</strong>{text && <p>{text}</p>}</div><i className="cm-mini-arrow">›</i></a>
)

export default function Comer() {
  useEffect(() => initComer(), [])
  return (
    <div id="comer">
      {/* Barra fija que aparece al bajar más allá de las pestañas (sustituye a la cabecera) */}
      <Tabs cls="cm-sub" />
      <Header />

      {/* 🖼️ IMAGEN HEADER → src/config/images.js (comer.hero) */}
      <section className="cm-hero" style={{ '--hero': `url(${C.hero})` }}><h1>Comer en Disneyland Paris</h1></section>
      <Tabs cls="cm-tabs" />

      {/* ───────── 1. Restaurantes temáticos ───────── */}
      <section id="tematicos" className="cm-sec">
        <div className="cm-intro">
          <h2>¡Haz que sea una estancia mmm...mágica!</h2>
          <p>Disfruta de momentos Disneyliciosos en los Parques y Hoteles Disney o en Disney Village y pon un poco de magia en tu plato. ¡Qué rico!</p>
        </div>
        <div className="cm-wrap"><Div i="🍽" /></div>

        <div className="cm-wrap cm-center">
          <h2 className="cm-h">¡Dale sabor a tu visita en nuestros restaurantes temáticos!</h2>
          <p className="cm-sub2">Ambientados en los universos de Disney, Pixar y MARVEL, con sabores de todo el mundo y menús para todos los bolsillos... ¡Te espera una increíble aventura culinaria!</p>
          <div className="cm-trio">{C.tematicos.map((u, i) => <div key={i} className="cm-ph" style={bg(u)} />)}</div>
          <a className="btn-dl" href="/explorar?tipo=restaurantes">Ver todos los restaurantes</a>
        </div>

        <div className="cm-wrap cm-center">
          <h2 className="cm-h cm-h2">Descubre las diferentes opciones para comer en Disneyland Paris</h2>
          <div className="cm-opts">{OPCIONES.slice(0, 2).map((o, i) => (
            <article className="cm-opt" key={o[0]}><div className="cm-opt-img" style={bg(C.opciones[i])} /><div className="cm-opt-b"><h3>{o[0]}</h3>{o[3] && <span className="cm-tag">Reserva online</span>}<p>{o[1]}</p><a className="cm-btn-o" href="#">{o[2]}</a></div></article>))}
          </div>
          <div className="cm-book"><Mini img={C.reservaIcono} title="¡Reserva ya tu mesa!" text="Reserva en un restaurante a través de nuestra página web o nuestra aplicación móvil." /></div>
          <p className="cm-note">Nuestros restaurantes con servicio de mesa y buffet libre están muy solicitados, así que no tardes en hacer tu reserva (en cuanto reserves tu estancia en un Hotel Disney o con 2 meses de antelación para el resto de Visitantes).</p>
          <div className="cm-opts">{OPCIONES.slice(2).map((o, i) => (
            <article className="cm-opt" key={o[0]}><div className="cm-opt-img" style={bg(C.opciones[i + 2])} /><div className="cm-opt-b"><h3>{o[0]}</h3><p>{o[1]}</p><a className="cm-btn-o" href="#">{o[2]}</a></div></article>))}
          </div>
        </div>

        <div className="cm-app">
          <div className="cm-wrap cm-center">
            <h2 className="cm-h">Nuestra app móvil oficial: tu compañera indispensable</h2>
            <p className="cm-sub2">¡Descarga ya la app y prepárate para tu viaje!</p>
            <div className="cm-app-row">{APP.map((a, i) => (
              <div key={a[1]}><img className="cm-circle-img" src={C.app[i]} alt="" /><strong>{a[1]}</strong>{a[2] && <a href="#">{a[2]}</a>}</div>))}
            </div>
            <a className="btn-dl" href="#">Explora la App</a>
          </div>
        </div>

        <div className="cm-wrap cm-center">
          <h2 className="cm-h cm-narrow">Disfruta de una comida Disneyliciosa... aunque no tengas entrada para los Parques</h2>
          <p className="cm-sub2">¿Sabías que puedes visitar Disney Village, y los restaurantes, cafeterías y bares de nuestros Hoteles Disney, tanto si tienes entradas para los Parques como si no? ¡A qué esperas!</p>
          <div className="cm-minis">{SIN_ENTRADA.map((s, i) => <Mini key={s[0]} img={C.sinEntrada[i]} title={s[0]} text={s[1]} />)}</div>
        </div>
      </section>

      {/* ───────── 2. Cocina y filosofía ───────── */}
      <section id="cocina" className="cm-sec">
        <div className="cm-wrap"><Div i="👨‍🍳" /></div>
        <div className="cm-wrap cm-center">
          <h2 className="cm-h">Explora nuestra cocina y nuestra filosofía</h2>
          <p className="cm-sub2">Nuestro compromiso es ofrecer una experiencia culinaria excepcional para todos los gustos, con productos de calidad, variedad de sabores, productos caseros y ecológicos y menús infantiles.</p>
          <div className="cm-trio cm-tall">{C.cocina.map((u, i) => <div key={i} className="cm-ph" style={bg(u)} />)}</div>

          <h3 className="cm-h cm-h3">Valores de Disneyland Paris</h3>
          <div className="cm-cols4">{VALORES.map(v => <div key={v[1]}><span className="cm-ic">{v[0]}</span><h4>{v[1]}</h4><p>{v[2]}</p></div>)}</div>

          <div className="cm-split">
            <div className="cm-split-img" style={bg(C.gustos)} />
            <div className="cm-split-t"><h3>¡Para todos los gustos!</h3>
              <p>Cocina francesa, italiana, de Oriente Medio, asiática, africana, mexicana... ¿intergaláctica? ¿Qué te apetece?</p>
              <p>¡Prueba el Colombo en Captain Jack's, el Royal Cuscous en Agrabah Café Restaurant, el Tex-Mex picante en Casa de Coco – Restaurante de Familia o el famoso ratatouille en Bistrot Chez Rémy!</p>
              <a className="btn-dl" href="#">Consulta nuestros menús</a></div>
          </div>

          <div className="cm-book"><Mini img={C.audio} title="¡NUEVO! Descubre los menús de nuestros restaurantes con audiodescripción" text="(servicio para visitantes con discapacidad visual)" /></div>

          <h3 className="cm-h cm-h3">En Disneyland Paris, encontrarás...</h3>
          <div className="cm-cols4 cm-found">{ENCONTRARAS.map((e, i) => <div key={e[0]}><div className="cm-ph cm-ph-s" style={bg(C.encontraras[i])} /><h4>{e[0]}</h4><p>{e[1]}</p></div>)}</div>

          <div className="cm-did"><strong>¿Sabías que...?</strong><p>Todos nuestros restaurantes con servicio de mesa ofrecen vajillas y cubiertos reutilizables.</p></div>
        </div>

        {/* Sección de los niños: la imagen central ya no se pega al texto (ver .cm-kids en comer.css) */}
        <div className="cm-wrap cm-center cm-kids">
          <h2 className="cm-h">¡Tus niños se chuparán los dedos!</h2>
          <p className="cm-sub2">¡A los niños les encantan los restaurantes temáticos con divertidos menús adaptados para edades entre 3 y 11 años y los Disneyliciosos snacks que encontrarán en cada rincón del Parque!</p>
          <div className="cm-kgrid">
            <div className="cm-kcol"><div className="cm-ph" style={bg(C.ninos[0])} /><div className="cm-ph" style={bg(C.ninos[3])} /></div>
            <div className="cm-kcol cm-kmid"><div className="cm-ph cm-k-tall" style={bg(C.ninos[1])} /><div className="cm-ph" style={bg(C.ninos[4])} /></div>
            <div className="cm-kcol"><div className="cm-ph" style={bg(C.ninos[2])} /><div className="cm-ph" style={bg(C.ninos[5])} /></div>
          </div>

          <h3 className="cm-h cm-h3">Llamando a todos los padres...</h3>
          <div className="cm-cols3">{PADRES.map(p => <div key={p[1]}><span className="cm-ic">{p[0]}</span><h4>{p[1]}</h4><p>{p[2]}</p></div>)}</div>
        </div>
      </section>

      {/* ───────── 3. Comidas con Personajes ───────── */}
      <section id="personajes" className="cm-sec">
        <div className="cm-wrap"><Div i="🐭" /></div>
        <div className="cm-wrap">
          <div className="cm-split cm-split-p">
            <div className="cm-split-img" style={bg(C.personajes)} />
            <div className="cm-split-t"><h3>Disfruta de una comida en compañía de Personajes Disney</h3>
              <p>Disfruta de un delicioso desayuno, comida o cena acompañado de los Personajes Disney. ¡Será un recuerdo inolvidable para toda la vida!</p>
              <a className="btn-outline-dl cm-btn-pill" href="#">Saber más</a></div>
          </div>
        </div>
      </section>

      {/* ───────── 4. Planes de comidas ───────── */}
      <section id="planes" className="cm-sec">
        <div className="cm-wrap"><Div i="🥣" /></div>
        <div className="cm-wrap cm-center">
          <h2 className="cm-h">¿Te alojas en un Hotel Disney? ¡Consulta nuestros Planes de comidas!</h2>
          <p className="cm-sub2">Pon la guinda a tu experiencia Disney con un Plan de comidas, exclusivo para los huéspedes que se alojan en nuestros Hoteles Disney. ¡No te los pierdas!</p>
          <div className="cm-trio cm-wide">{C.planes.map((u, i) => <div key={i} className="cm-ph" style={bg(u)} />)}</div>

          <h3 className="cm-h cm-h3">Con un plan de comidas...</h3>
          <div className="cm-cols4 cm-plan">{PLAN.map(p => <div key={p[0]}><h4>{p[0]}</h4><p>{p[1]}</p></div>)}</div>
          <a className="btn-dl" href="/entradas-y-paquetes#opciones">Descubre nuestros Planes de comidas</a>
        </div>

        <div className="cm-rate">
          <p>¿Te ha parecido útil esta página?</p>
          <div className="cm-faces" role="group" aria-label="Valora esta página">{FACES.map(f => <button key={f[1]} type="button" className="cm-face" aria-label={f[1]} title={f[1]}>{f[0]}</button>)}</div>
          <p className="cm-thanks" hidden>¡Gracias por tu opinión!</p>
        </div>
      </section>

      <Footer />
      <Feedback />
    </div>
  )
}
