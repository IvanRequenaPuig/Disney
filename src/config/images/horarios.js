// Rutas de imágenes de la página/sección: horarios
const R = '/img'

export default {
  horarios: {
    // Horarios de los Parques: imagen del HEADER (reloj de Mickey)
    header: `${R}/Horarios/header.jpg`,
    // Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento)


    cards: { disneyland: { atracciones: [`${R}/Horarios/d-atr-1.jpg`, `${R}/Horarios/d-atr-2.jpg`, `${R}/Horarios/d-atr-3.jpg`, `${R}/Horarios/d-atr-4.jpg`, `${R}/Horarios/d-atr-5.jpg`,
       `${R}/Horarios/d-atr-6.jpg`], personajes: [`${R}/Horarios/d-per-1.jpg`, `${R}/Horarios/d-per-2.jpg`, 
        `${R}/Horarios/d-per-3.jpg`, `${R}/Horarios/d-per-4.jpg`], shows: [`${R}/Horarios/d-show-1.jpg`, 
          `${R}/Horarios/d-show-2.jpg`, `${R}/Horarios/d-show-3.jpg`, 
          `${R}/Horarios/d-show-4.jpg`] 
          
        }, adventure: { atracciones: [`${R}/Horarios/a-atr-1.jpg`, 
            `${R}/Horarios/a-atr-2.jpg`, `${R}/Horarios/a-atr-3.jpg`, `${R}/Horarios/a-atr-4.jpg`, 
            `${R}/Horarios/a-atr-5.jpg`, `${R}/Horarios/a-atr-6.jpg`], personajes: [`${R}/Horarios/a-per-1.jpg`,
               `${R}/Horarios/a-per-2.jpg`, `${R}/Horarios/a-per-3.jpg`, `${R}/Horarios/a-per-4.jpg`], shows: [`${R}/Horarios/a-show-1.jpg`,
                 `${R}/Horarios/a-show-2.jpg`, `${R}/Horarios/a-show-3.jpg`, `${R}/Horarios/a-show-4.jpg`] } },


    // Horarios: iconos "Reserva tu estancia o tu visita" (paquetes y entradas)
    reservas: [`${R}/Horarios/reserva-paquetes.png`, `${R}/Horarios/reserva-entradas.png`],
  },
  // ---- carpeta public/img/Buscar/ ----
}
