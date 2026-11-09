// Rutas de imágenes de la página/sección: hotelesDisney
const R = '/img'

export default {
  hotelesDisney: {
    // HEADER de la página Hoteles Disney (el castillo tras las cortinas azules)
    hero: `${R}/HotelesDisney/header.jpg`,
    // "Una experiencia inmersiva..." (4): restaurantes, encuentros con Personajes, festín para los ojos, magia para toda la familia
    experiencia: [`${R}/HotelesDisney/experiencia-1.jpg`, `${R}/HotelesDisney/experiencia-2.jpg`, `${R}/HotelesDisney/experiencia-3.jpg`, `${R}/HotelesDisney/experiencia-4.jpg`],
    // "Encuentra el alojamiento ideal" (2): habitaciones familiares y cabañas, habitaciones y suites Club
    alojamiento: [`${R}/HotelesDisney/alojamiento-1.jpg`, `${R}/HotelesDisney/alojamiento-2.jpg`],
    // (las 6 fotos del carrusel "Hoteles temáticos" son IMG.inicio.hotel)
  },
  // ---- carpeta public/img/ParqueAdventureWorld/ ----
  // (las fotos de 'Entradas' y '¿Cuántos días?' se comparten con ParqueDisneyland: IMG.parqueDisneyland.entradas / .dias)
}
