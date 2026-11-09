import { useEffect } from 'react'
import Header from '../../components/Header.jsx'
import Feedback from '../../components/Feedback.jsx'
import { IMG } from '../../config/images.js'
import './registro.css'
import { initRegistro } from './registro.js'

// 🖼️ Imágenes → src/config/images.js (bloque registro): header y fondo estrellado de la ventana de inicio de sesión
const R = IMG.registro
const BRANDS = ['Disney', 'abc', 'ESPN', 'MARVEL', 'STAR WARS', 'hulu', 'NATIONAL GEOGRAPHIC', 'Disney Parks']

export default function Registro() {
  useEffect(() => initRegistro(), [])
  return (
    <div id="registro">
      <Header />
      <section className="rg-hero" style={{ '--hero': `url(${R.header})` }}><span className="rg-mickey" /></section>
      <section className="rg-card">
        <div className="rg-l"><h2>¡Deja que la magia fluya!</h2>
          <p>Gestiona tus reservas y entradas en un único lugar y añade complementos extra en cualquier momento.</p>
          <p>Guarda tus entradas, reserva mesa, compra un Disney Premier Access, y muchas cosas más...todo en nuestra app móvil oficial.</p>
          <p>¡Usa tu cuenta para preparar tu visita tanto por adelantado como el mismo día!</p>
          <div className="text-center"><button className="btn-dl" data-login>Crear cuenta</button></div></div>
        <div className="rg-r"><h3>¿Ya tienes cuenta?</h3><button className="btn-outline-dl" data-login>Registrarse</button></div>
      </section>

      {/* Ventana de inicio de sesión MyDisney: la abren "Crear cuenta" y "Registrarse" */}
      <div className="lg" id="login" style={{ '--bg': `url(${R.fondoLogin})` }}>
        <button className="lg-x" aria-label="Cerrar">✕</button>
        <div className="lg-top">My<i>Disney</i></div>
        <div className="lg-box">
          <div className="lg-logo">My<i>Disney</i></div>
          <h2>Escribe tu dirección de correo electrónico para continuar</h2>
          <p>Inicia sesión en Disneyland Paris con tu cuenta MyDisney. Si no tienes una, tendrás que crearla.</p>
          <label className="lg-f"><span>Correo</span><input id="lg-mail" type="email" autoComplete="email" /></label>
          <p className="lg-err" hidden>Introduce un correo electrónico válido.</p>
          <p className="lg-ok" hidden>Demo: no se envía ningún dato. Aquí continuaría el inicio de sesión.</p>
          <button className="lg-go" id="lg-go">Continuar</button>
          <hr />
          <strong>Disneyland Paris forma parte de la Familia de Compañías Walt Disney.</strong>
          <small>Con MyDisney, podrás iniciar sesión sin problemas en los servicios y las experiencias de la Familia de empresas de Walt Disney, como Disney+, ESPN, Walt Disney World y <a href="#">otros</a>.</small>
          <div className="lg-brands">{BRANDS.map(b => <span key={b}>{b}</span>)}</div>
        </div>
      </div>
      <Feedback />
    </div>
  )
}
