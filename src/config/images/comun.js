// Rutas de imágenes de la página/sección: comun
const R = '/img'

export default {
  comun: {
    // Logo (cabecera de todas las páginas y ventana de Comentarios)
    logo: `${R}/comun/logo.jpg`,
    // Logo original en negro (guardado, no se usa en el código)
    logoNegro: `${R}/comun/logo-negro-original.png`,
    // Castillo de la cabecera (abre el menú lateral Mundo Disney) y cabecera del menú. Fondo transparente
    castillo: `${R}/comun/castillo.png`,
    // Logos a los lados del logo de Disneyland Paris en la cabecera (enlazan a tus webs de Marvel y Star Wars). Recortados de public/img/Webs/
    marvel: `${R}/comun/marvel.png`,
    starwars: `${R}/comun/starwars.png`,
    // Tarjetas del submenú desplegable (Los 2 Parques, Alojamientos, Restaurantes, Reserva tu viaje, Antes de venir)
    menu: { adventure: `${R}/comun/menu-adventure.jpg`, frozen: `${R}/comun/menu-frozen.jpg`, hotel: `${R}/comun/menu-hotel.jpg`, tranquilidad: `${R}/comun/menu-tranquilidad.jpg`, regal: `${R}/comun/menu-regal.jpg`, personajes: `${R}/comun/menu-personajes.jpg`, paris: `${R}/comun/menu-paris.jpg`, premier: `${R}/comun/menu-premier.jpg`, iberia: `${R}/comun/menu-iberia.jpg`, dory: `${R}/comun/menu-dory.jpg` },
  },
  // ---- carpeta public/img/inicio/ ----
}
