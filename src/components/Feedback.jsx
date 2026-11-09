// Botón lateral "Comentarios" + ventana (la lógica jQuery está en el .js de cada página)
import { IMG } from '../config/images.js'
export default function Feedback() {
  const opts = [['Sobre una sección específica', 'Deja un comentario sobre un apartado específico de la web'], ['Sobre el conjunto de la web', 'Deja un comentario sobre la web en general'], ['¿Alguna pregunta sobre tu reserva?', 'Modifica tu reserva a través de nuestro formulario online']]
  return (<>
    <button className="fb-tab">Comentarios</button>
    <div className="fb-overlay" hidden>
      <div className="fb-modal" role="dialog" aria-modal="true">
        <button className="fb-close" aria-label="Cerrar">×</button>
        {/* 🖼️ Imagen → src/config/images.js */}
        <div className="logo mb-3"><img src={IMG.comun.logo} alt="Disneyland Paris" className="logo-img" /><small>PARIS</small></div>
        <h3>¡Tu opinión nos interesa!</h3>
        <p>Tus comentarios nos ayudan a mejorar continuamente la experiencia de navegación en Disneylandparis.com</p>
        <div className="row g-3">{opts.map(o => <div className="col-4" key={o[0]}><button className="fb-opt"><span className="fb-ico" /><strong>{o[0]}</strong><small>{o[1]}</small></button></div>)}</div>
        <div className="fb-form" hidden><textarea className="form-control" rows="3" placeholder="Escribe tu comentario..." /><button className="btn-dl mt-2 fb-send">Enviar</button></div>
        <p className="fb-thanks" hidden>¡Gracias por tu opinión!</p>
      </div>
    </div>
  </>)
}
