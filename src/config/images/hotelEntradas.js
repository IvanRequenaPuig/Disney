// Rutas de imágenes de la página/sección: hotelEntradas
const R = '/img'

export default {
  hotelEntradas: {
    // Hotel + Entradas: mapa del parque (miniatura "Ver mapa" y mapa grande)
    map: `${R}/HotelEntradas/map.png`,
    // Hoteles: iconos de "¿Necesitas comparar los Hoteles Disney?" y "¿Necesitas comparar alojamientos asociados?"
    compare: [`${R}/HotelEntradas/comparar-hoteles-disney.png`, `${R}/HotelEntradas/comparar-alojamientos-asociados.png`],
    // Hotel + Entradas: 3 fotos por hotel (carrusel de la tarjeta; la 1ª sale también en el mapa). 1 Disneyland Hotel, 2 New York, 3 Newport Bay, 4 Sequoia, 5 Cheyenne, 6 Santa Fe
    hotels: { 1: [`${R}/HotelEntradas/hotel1.jpg`, `${R}/HotelEntradas/hotel1-2.jpg`, 
      `${R}/HotelEntradas/hotel1-3.jpg`], 2: [`${R}/HotelEntradas/hotel2.jpg`, `${R}/HotelEntradas/hotel2-2.jpg`,
         `${R}/HotelEntradas/hotel2-3.jpg`], 3: [`${R}/HotelEntradas/hotel3.jpg`, `${R}/HotelEntradas/hotel3-2.jpg`,
           `${R}/HotelEntradas/hotel3-3.jpg`], 4: [`${R}/HotelEntradas/hotel4.jpg`, `${R}/HotelEntradas/hotel4-2.jpg`, 
            `${R}/HotelEntradas/hotel4-3.jpg`], 5: [`${R}/HotelEntradas/hotel5.jpg`, `${R}/HotelEntradas/hotel5-2.jpg`, 
              `${R}/HotelEntradas/hotel5-3.jpg`], 6: [`${R}/HotelEntradas/hotel6.jpg`, `${R}/HotelEntradas/hotel6-2.jpg`,
                 `${R}/HotelEntradas/hotel6-3.jpg`] },
  },




  // ---- carpeta public/img/Entradas/ ----
}
