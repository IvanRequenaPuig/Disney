// Rutas de imágenes de la página/sección: parqueAdventure
const R = '/img'

export default {
  parqueAdventure: {
    // Logo "Disney Adventure World" del header (PNG transparente, centrado)
    logo: `${R}/ParqueAdventureWorld/logo-adventure-world.png`,
    // Vídeo del header (opcional; si falta se ve la imagen). Botón de pausa incluido
    video: `${R}/ParqueAdventureWorld/hero.mp4`,
    // Imagen del HEADER (fondo oscuro; también es el póster del vídeo)
    hero: `${R}/ParqueAdventureWorld/hero.jpg`,
    // Mapa del parque con FONDO TRANSPARENTE (cada mundo se levanta al pasar el ratón)
    mapa: `${R}/ParqueAdventureWorld/mapa.png`,
    // Banner ancho tras las atracciones (espectáculo de agua)
    banner: `${R}/ParqueAdventureWorld/banner-mulan.jpg`,
    // "Experiencias de restaurantes para todo aventurero"
    restaurantes: `${R}/ParqueAdventureWorld/restaurantes.jpg`,
    // "Llévate a casa un recuerdo de tu aventura"
    tiendas: `${R}/ParqueAdventureWorld/tiendas.jpg`,
    // Carrusel de atracciones (6): Frozen Ever After, Ratatouille, Avengers Assemble: Flight Force, Raiponce Tangled Spin, Crush's Coaster, Cars Road Trip
    atracciones: [`${R}/ParqueAdventureWorld/atraccion-1.jpg`, `${R}/ParqueAdventureWorld/atraccion-2.jpg`, `${R}/ParqueAdventureWorld/atraccion-3.jpg`, `${R}/ParqueAdventureWorld/atraccion-4.jpg`, `${R}/ParqueAdventureWorld/atraccion-5.jpg`, `${R}/ParqueAdventureWorld/atraccion-6.jpg`],
    // Espectáculos (3): Disney Cascade of Lights, Disney Princess Cavalcade, Mickey and the Magician
    espectaculos: [`${R}/ParqueAdventureWorld/espectaculo-1.jpg`, `${R}/ParqueAdventureWorld/espectaculo-2.jpg`, `${R}/ParqueAdventureWorld/espectaculo-3.jpg`],
    // Encuentros con Personajes (3, redondas): Hero Training Center, Encuentro de la Realeza, Encuentro con Woody
    personajes: [`${R}/ParqueAdventureWorld/personaje-1.jpg`, `${R}/ParqueAdventureWorld/personaje-2.jpg`, `${R}/ParqueAdventureWorld/personaje-3.jpg`],
  },
  // ---- carpeta public/img/Categorias/<id>/ : páginas del menú lateral (parques, peliculas, series, productoras, videojuegos, personajes, historia, mas) ----
  // Cada categoría usa: hero.jpg (header), banner.jpg (banner final) y una imagen por tarjeta con el nombre del elemento: IMG.categorias.peliculas.item('animacion-clasica')
  // La lista exacta de nombres de archivo de cada carpeta está en su LEEME.txt (si una imagen falta, se ve un degradado)
  // ---- carpeta public/img/Explorar/<tipo>/ ---- (página Explorar: la que abren los botones "Ver todos…")
  // Una foto por elemento de la lista: public/img/Explorar/atracciones/adventure-isle.jpg, .../restaurantes/stark-factory.jpg ...
  // El nombre del archivo es el nombre del elemento en minúsculas y con guiones (ver explorarData.js). Si falta, sale un degradado.
}
