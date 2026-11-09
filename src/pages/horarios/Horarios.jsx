import { useEffect, useState } from 'react'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import Feedback from '../../components/Feedback.jsx'
import { IMG } from '../../config/images.js'
import './horarios.css'
import { initHorarios } from './horarios.js'

// 🖼️ Imágenes → src/config/images.js (bloque horarios)
const H = IMG.horarios
const bg = u => ({ '--img': `url(${u})` })
const MESES = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE']
const DIAS = ['DOMINGO', 'LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO']
// [nombre, descripción, zona, abierta(1/0), interés]  (datos de ejemplo: cámbialos por los reales)
const CARDS = {
  disneyland: {
    atracciones: [[`"it's a small world"`, '¡Pon viento en popa a toda vela y embárcate en una mágica vuelta al mundo con esta atracción icónica que no te puedes perder y que …', 'Fantasyland', 1, 'familia'], ['Adventure Isle', '¡Diversión en familia a la vista! Reunid mucha valentía y preparaos para explorar estas tierras misteriosas, y veamos si podéis descifrar los …', 'Adventureland', 1, 'familia'], [`Alice's Curious Labyrinth`, 'Cread vuestra propia aventura en el País de las Maravillas, donde el gato Cheshire de la gran sonrisa os estará esperando en cada esquina.', 'Fantasyland', 1, 'familia'], ['Autopia', 'Ponte al volante de un coche y recorre una carretera del futuro.', 'Discoveryland', 1, 'familia'], ['Big Thunder Mountain', 'Sube al tren más loco del Salvaje Oeste y atraviesa la mina embrujada.', 'Frontierland', 1, 'emociones'], ['Space Mountain', 'Despega hacia las estrellas en una misión de alta velocidad.', 'Discoveryland', 0, 'emociones']],
    personajes: [['Mickey Mouse', 'Conoce al ratón más famoso del mundo y hazte una foto con él.', 'Main Street, U.S.A.', 1, 'familia'], ['Minnie Mouse', 'Un encuentro lleno de lunares y diversión.', 'Fantasyland', 1, 'familia'], ['Princesas Disney', 'Un momento de cuento de hadas con tus princesas favoritas.', 'Fantasyland', 1, 'familia'], ['Peter Pan', 'Vuela con Peter Pan hasta el País de Nunca Jamás.', 'Fantasyland', 0, 'familia']],
    shows: [['Disney Stars on Parade', 'Una cabalgata llena de color con tus personajes favoritos.', 'Main Street, U.S.A.', 1, 'familia'], ['Mickey and the Magician', 'Un espectáculo musical lleno de magia y humor.', 'Fantasyland', 1, 'familia'], ['Espectáculo nocturno del Castillo', 'Luces, música y proyecciones sobre el Castillo de la Bella Durmiente.', 'Main Street, U.S.A.', 1, 'emociones'], ['Cine con los Personajes', 'Revive las grandes escenas del cine Disney.', 'Discoveryland', 1, 'familia']],
  },
  adventure: {
    atracciones: [['Avengers Assemble: Flight Force', 'Únete a los Vengadores y vuela a toda velocidad en esta montaña rusa.', 'Avengers Campus', 1, 'emociones'], [`Crush's Coaster`, 'Atrapa la corriente con Crush y vive una aventura submarina.', 'Worlds of Pixar', 1, 'emociones'], ['Cars Road Trip', 'Una divertida vuelta en coche por la Ruta 66 con Rayo McQueen.', 'Worlds of Pixar', 1, 'familia'], ['Ratatouille: L\'Aventure Totalement Toquée', 'Reduce tu tamaño y corre por la cocina de Gusteau.', 'Worlds of Pixar', 1, 'familia'], ['Tower of Terror', 'Sube al ascensor más misterioso de Hollywood.', 'Hollywood Boulevard', 1, 'emociones'], ['RC Racer', 'Salta de un lado a otro en esta pista de Toy Story.', 'Toy Story Playland', 0, 'familia']],
    personajes: [['Spider-Man', 'Conoce al trepamuros favorito de todos.', 'Avengers Campus', 1, 'emociones'], ['Woody y Jessie', 'Un encuentro con los vaqueros de Toy Story.', 'Toy Story Playland', 1, 'familia'], ['Buzz Lightyear', 'Hasta el infinito y más allá con Buzz.', 'Toy Story Playland', 1, 'familia'], ['Iron Man', 'Conoce a Tony Stark en el Campus.', 'Avengers Campus', 0, 'emociones']],
    shows: [['Disney Junior Dream Factory', 'Un espectáculo para los más pequeños con sus personajes favoritos.', 'Hollywood Boulevard', 1, 'familia'], ['Frozen: Una Celebración Musical', 'Canta con Anna, Elsa y Olaf.', 'Arendelle', 1, 'familia'], ['Marvel Super Heroes United', 'Superhéroes, acrobacias y efectos especiales.', 'Avengers Campus', 1, 'emociones'], ['Espectáculo nocturno de Adventure World', 'Música y luces para cerrar el día.', 'Hollywood Boulevard', 1, 'emociones']],
  },
}
const hours = d => (d.getDay() === 0 || d.getDay() === 6 ? ['9:00 a 22:00', '8:00 a 9:00'] : ['9:30 a 21:00', '8:30 a 9:30'])
const pad = n => String(n).padStart(2, '0')

export default function Horarios() {
  const today = new Date(); today.setHours(0, 0, 0, 0)
  const [sel, setSel] = useState(today)
  const [month, setMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1))
  const [park, setPark] = useState('disneyland')
  const [type, setType] = useState('atracciones')
  const [f, setF] = useState({ open: 'open', int: 'all', sort: 'n' })
  useEffect(() => initHorarios(), [])

  const first = (month.getDay() + 6) % 7, dim = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate()
  const cells = [...Array(first).fill(null), ...Array.from({ length: dim }, (_, i) => new Date(month.getFullYear(), month.getMonth(), i + 1))]
  const canPrev = month > new Date(today.getFullYear(), today.getMonth(), 1)
  const [hDay, hEmt] = hours(sel)
  const parks = [['PARQUE DISNEYLAND', '🏰', 'disneyland'], ['DISNEY ADVENTURE WORLD', '✦', 'adventure']]
  const list = CARDS[park][type].map((c, i) => ({ n: c[0], d: c[1], z: c[2], o: c[3], t: c[4], img: H.cards[park][type][i] }))
    .filter(c => (f.open === 'all' || c.o) && (f.int === 'all' || c.t === f.int))
    .sort((a, b) => (f.sort === 'n' ? a.n.localeCompare(b.n) : a.z.localeCompare(b.z)))
  const sf = k => e => setF({ ...f, [k]: e.target.value })

  return (
    <div id="horarios">
      <Header />
      {/* 🖼️ IMAGEN HEADER → src/config/images.js (horarios.header) */}
      <section className="hz-hero" style={{ '--hero': `url(${H.header})` }}><h1>Horarios de los Parques</h1></section>
      <div className="hz-wrap">
        <p className="hz-intro">Elije la fecha de tu visita para ver el horario de apertura de los Parques Disney*,<br />así como la disponibilidad de atracciones y actividades.</p>
        <div className="hz-top">
          <div className="hz-day"><h2>{DIAS[sel.getDay()]}, {pad(sel.getDate())} {MESES[sel.getMonth()]} {sel.getFullYear()}</h2>
            <div className="hz-parks">{parks.map(p => (
              <div key={p[0]}><div className="hz-ico">{p[1]}</div><strong>{p[0]}</strong><p className="hz-h">🕒 <b>{hDay}</b></p><i className="hz-line" /><a href="#">Extra Magic Time</a><p className="hz-h">⏰ <b>{hEmt}</b></p></div>
            ))}</div></div>
          <div className="cal">
            <div className="cal-h"><button className="cal-prev" disabled={!canPrev} onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}>‹</button><strong>{MESES[month.getMonth()]} {month.getFullYear()}</strong><button className="cal-next" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}>›</button></div>
            <div className="cal-g">{['lu', 'ma', 'mi', 'ju', 'vi', 'sá', 'do'].map(d => <small key={d}>{d}</small>)}
              {cells.map((d, i) => d ? <button key={i} disabled={d < today} className={'cal-d' + (d.getTime() === sel.getTime() ? ' on' : '')} onClick={() => setSel(d)}>{d.getDate()}</button> : <span key={i} />)}</div>
          </div>
        </div>

        <div className="hz-info"><div><h3>¿No puedes esperar? Información importante</h3><p>Debido a la alta demanda, los Parques Disney están llenos en muchas fechas. Para ingresar a los Parques Disney, debes tener una entrada con fecha o, si tienes una entrada, pase anual sin fecha o Disneyland Pass, registrar con antelación tu entrada para el día de tu visita. Puedes consultar regularmente nuestra página web para ver la disponibilidad. Te recordamos que las entradas no estarán a la venta en las taquillas en la entrada de los Parques Disney. ¡Estamos deseando darte la bienvenida a Disneyland Paris!</p>
          <div className="d-flex gap-3"><a className="btn-dl" href="/entradas">Comprar una entrada</a><a className="btn-outline-dl" href="/registro">Registrarse ahora</a></div></div><div className="hz-clock"><img src={IMG.inicio.tiempo} alt="Información importante sobre tu visita" /></div></div>

        <p className="hz-intro mt-5">Para las fechas seleccionadas, tenemos el placer de abrir las puertas de más<br />de 50 atracciones y actividades para que disfrutes</p>
        <div className="hz-sel">
          <div><h3>ELIGE UN PARQUE</h3><div className="seg">{parks.map(p => <button key={p[2]} data-park={p[2]} className={park === p[2] ? 'on' : ''} onClick={() => setPark(p[2])}><span>{p[1]}</span>{p[0].replace('PARQUE ', 'Parque ').replace('DISNEY ADVENTURE WORLD', 'Disney Adventure World')}</button>)}</div></div>
          <div><h3>¿QUÉ ESTÁS BUSCANDO?</h3><div className="seg seg2">{[['atracciones', '⭐ Atracciones'], ['personajes', '🐭 Personajes'], ['shows', '✨ Entretenimiento']].map(t => <button key={t[0]} className={type === t[0] ? 'on' : ''} onClick={() => setType(t[0])}>{t[1]}</button>)}</div></div>
        </div>
        <div className="hz-filters">
          <div><label>Filtrar por :</label><div className="d-flex gap-2"><select value={f.open} onChange={sf('open')}><option value="open">{type === 'atracciones' ? 'Atracciones Abiertas' : 'Abiertos'}</option><option value="all">Todos</option></select>
            <select value={f.int} onChange={sf('int')}><option value="all">Intereses</option><option value="familia">Familia</option><option value="emociones">Emociones fuertes</option></select></div></div>
          <div><label>Ordenar por :</label><select value={f.sort} onChange={sf('sort')}><option value="n">Nombre</option><option value="z">Zona</option></select></div>
        </div>

        <div className="cs" key={park + type + f.open + f.int + f.sort}>
          <div className="cs-arrows"><button className="cs-prev" aria-label="Anterior">‹</button><button className="cs-next" aria-label="Siguiente">›</button></div>
          {list.length === 0 && <p className="text-center">No hay resultados con estos filtros.</p>}
          <div className="cs-view"><div className="cs-track">{list.map(c => (
            <article className="cs-card" key={c.n}><div className="cs-img" style={bg(c.img)} /><h4>{c.n}</h4><p>{c.d}</p><span className="cs-zone">📍 {c.z}</span></article>
          ))}</div></div>
          <div className="cs-dots">{Array.from({ length: Math.max(1, list.length - 2) }, (_, i) => <i key={i} className={'cs-dot' + (i ? '' : ' on')} />)}</div>
        </div>
        {/* Botón "Ver todos…" → página Explorar con el tipo y el parque que se están viendo */}
        <div className="text-center mt-4"><a className="btn-outline-dl" href={`/explorar?tipo=${type === 'atracciones' ? 'atracciones' : 'entretenimiento'}&parque=${park}${type === 'personajes' ? '&interes=personajes' : type === 'shows' ? '&interes=espectaculos,cabalgatas' : ''}`}>{type === 'atracciones' ? 'Ver todas las atracciones' : type === 'personajes' ? 'Ver todos los Encuentros con Personajes' : 'Ver todos los espectáculos'}</a></div>

        <h2 className="hz-h2">Reserva tu estancia o tu visita en el corazón de la magia</h2>
        <div className="hz-res">
          <a href="/hoteles" className="hz-rc"><img className="hz-ri-img" src={H.reservas[0]} alt="" /><strong>Descubre nuestros paquetes (Hotel + Entradas para los Parques Disney)</strong><i>›</i></a>
          <a href="/entradas" className="hz-rc"><img className="hz-ri-img" src={H.reservas[1]} alt="" /><strong>Descubre nuestras Entradas para los Parques Disney</strong><i>›</i></a>
        </div>
        <p className="text-center small mt-4">*Horarios sujetos a modificaciones</p>
      </div>
      <Footer />
      <Feedback />
    </div>
  )
}
