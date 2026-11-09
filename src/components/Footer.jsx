// Métodos de pago + pie de página con pestañas (estilos .h-pay / .ft-* en pages/hoteles/hoteles.css; lógica de pestañas en el .js de cada página)
const FOOT = {
  'Información legal': ['Términos y condiciones', 'Política de cookies', 'Reglamento Interno de los Parques Disney', 'Reglamento Interno del Parking de Visitantes', 'Política de privacidad', 'Administrar preferencias', 'Reglamento interno de los Hoteles Disney', 'Información legal y Condiciones del sitio web', 'Privacidad en R.U. y en la U.E.', 'Video Protection', 'Reglamento Interno de Disney Village', 'Copyrights', 'Sobre privacidad en Disneyland Paris', 'Fotografías en los tornos del Parque', 'Reglamento interno del centro de cuidado de animales'],
  'Ayuda': ['Nuestro folleto digital', 'Preguntas más frecuentes', 'Ayuda del sitio web', 'Visitas de grupos', 'Servicios para visitantes', 'Huéspedes con discapacidades', 'Retirada de productos', 'Contáctanos', 'Información de producto'],
  'Más sobre Disneyland Paris': ['Los 2 Parques', 'Hoteles Disney', 'Restaurantes', 'Disney Village', 'Entradas', 'Eventos en Disneyland Paris'],
  'Sitios web Disney relacionados': ['The Walt Disney Company', 'Disney+', 'Disney Store', 'Marvel', 'Lucasfilm', 'Pixar'],
}
const PAY = ['VISA', 'Mastercard', 'Apple Pay', 'PayPal', 'AMEX', 'Klarna', 'Diners', 'Discover', 'JCB', 'UnionPay', 'Alipay', 'WeChat Pay']

export default function Footer() {
  return (<>
    <section className="h-pay">
        {/* 🖼️ Imagen → src/config/images.js */}
        <div className="visa"><b>VISA</b> | <i>Disneyland</i><br /><small>Official Payment Partner</small></div><hr />
        <h3>🔒 Métodos de pago aceptados</h3>
        <div className="paychips">{PAY.map(p => <span key={p}>{p}</span>)}</div>
        <p className="tiny">Visa, Mastercard, Apple Pay, PayPal, Maestro, American Express, Klarna, Diners Club, Discover, JCB, UnionPay, AliPay, WeChat Pay. Se acepta cualquier tarjeta asociada a uno de los métodos de pago mencionados anteriormente. Te recomendamos verificar si tu tarjeta está asociada a alguno de estos métodos de pago.</p>
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
  </>)
}
