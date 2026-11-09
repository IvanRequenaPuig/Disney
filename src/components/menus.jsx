// Datos del submenú desplegable y la miniatura con imagen (compartidos por varias páginas)
import { IMG } from '../config/images.js'

// 🖼️ Rutas de las imágenes → src/config/images.js (explicado en RUTAS-IMAGENES.md)
// Formato de promo: [imagen, título, etiqueta o null]
export const MENUS = {
  parques: { label: 'Los 2 Parques',
    main: [['🏰', 'Parque Disneyland', 'Déjate inspirar y encantar. ¡La magia está en el aire!'], ['✦', 'Disney Adventure World', 'Descubre un mundo lleno de aventuras!']],
    side: [['🎢', 'Atracciones para todos'], ['🎵', 'Espectáculos y Cabalgatas'], ['🐭', 'Encuentros con Personajes'], ['📅', 'Las temporadas en Disneyland Paris']],
    links: ['Nuestros mundos: Disney, Pixar, MARVEL, ¡y mucho más!', 'Si visitas con niños de 0 a 6 años', '¿Vienes con tu pareja o con amigos?', 'Disney Village: diversión todo el día'], more: 'La experiencia Disneyland Paris',
    promos: [[IMG.comun.menu.adventure, 'Disney Adventure World', '¡Explora ahora!'], [IMG.comun.menu.frozen, 'World of Frozen', '¡Nuevo!']] },
  alojamientos: { label: 'Alojamientos',
    main: [['🛏', 'Hoteles Disney', 'Alójate en el corazón de la magia con ventajas únicas.']],
    side: [['🛏', 'Center Parcs Villages Nature Paris'], ['🧳', 'Servicio de equipaje Disney Express'], ['🛏', 'Hoteles Asociados']],
    links: ['Actividades y experiencias en Hoteles Disney', 'Cómo pagar tu reserva a plazos', 'Las ventajas de un Paquete Disney'], more: 'Ver todos los Hoteles',
    promos: [[IMG.comun.menu.hotel, 'Descubre el Disneyland Hotel', null], [IMG.comun.menu.tranquilidad, 'Tranquilidad garantizada', null]] },
  restaurantes: { label: 'Restaurantes',
    main: [['🥗', 'Dónde comer en Disneyland Paris', 'Todo lo que necesitas saber sobre las comidas en Disneyland Paris.'], ['🥣', 'Nuestros Planes de Comidas', 'Añade esta opción a tu paquete Hotel + Entradas']],
    side: [['🍽', 'En los Parques'], ['🍽', 'En Disney Village'], ['🍽', 'En los Hoteles']],
    links: ['Reservar mesa en un restaurante', 'Pide tu comida con antelación', 'Necesidades alimenticias especiales'], more: 'Ver todos los restaurantes',
    promos: [[IMG.comun.menu.regal, 'The Regal View Restaurant', 'NUEVO!'], [IMG.comun.menu.personajes, 'Comparte una comida con los entrañables Personajes Disney', null]] },
  reserva: { label: 'Reserva tu viaje',
    main: [['🏰', 'Entradas con fecha y Paquetes de Hotel para Disneyland Paris', null]],
    side: [['🧳', 'Reservar un Paquete Hotel + Entradas'], ['🎟', 'Comprar Entradas a los Parques Disney'], ['🎫', 'Disneyland Pass'], ['🪄', 'Extras mágicos']],
    links: ['Todos los métodos de pago', 'Servicio Disney PhotoPass™: fotos de tu visita', 'Descubre la mejor época para visitar Disneyland Paris', '¿Cuántos días necesito para mi visita?'], more: 'Eventos en Disneyland Paris',
    promos: [[IMG.comun.menu.paris, 'París y Disneyland Paris', null], [IMG.comun.menu.premier, 'Disney Premier Access: ¡Accede a la fila rápida!', null]] },
  antes: { label: 'Antes de venir',
    row: [['📍', 'Mapa de Disneyland Paris'], ['♿', 'Accesibilidad en Disneyland Paris'], ['🪪', 'Solicita una Tarjeta Prioritaria'], ['📱', 'La app móvil oficial'], ['✈️', 'Cómo llegar']],
    links: ['Shopping', 'Preguntas Más Frecuentes', 'Ayuda y Contacto', 'Nuestro folleto digital'], more: 'Información importante antes de tu llegada',
    promos: [[IMG.comun.menu.iberia, 'Cómo llegar a Disneyland Paris', null], [IMG.comun.menu.dory, 'Registra tu acceso a los Parques Disney', null]] },
}

export const Thumb = ({ img, cls = '' }) => <div className={`thumb ${cls}`} style={{ '--img': `url(${img})` }} />
