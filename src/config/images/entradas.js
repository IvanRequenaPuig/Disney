// Rutas de imágenes de la página/sección: entradas
const R = '/img'

export default {
  entradas: {
    // Entradas: imagen del HEADER (hueco entre el menú y las pestañas)
    header: `${R}/Entradas/header.jpg`,
    // Entradas: imagen "Importante: Entradas sin fecha" (Dory con calendario)
    calendario: `${R}/Entradas/calendario-dory.jpg`,
    // Entradas: "Entrada Básica con Fecha"
    basica: `${R}/Entradas/entrada-basica.jpg`,
    // Entradas: banner partido (izquierda Parque Disneyland, derecha Disney Adventure World)
    parques: { disneyland: `${R}/Entradas/parque-disneyland.jpg`, adventure: `${R}/Entradas/parque-adventure.jpg` },
    // Entradas: 4 tarjetas bajo el banner, una serie por pestaña (2 Parques / Disneyland / Adventure World)
    
    exp: { dos: [`${R}/Entradas/parque-2-1.jpg`, `${R}/Entradas/parque-2-2.jpg`, `${R}/Entradas/parque-2-3.jpg`,
       `${R}/Entradas/parque-2-4.jpg`], disneyland: [`${R}/Entradas/parque-d-1.jpg`, `${R}/Entradas/parque-d-2.jpg`, 
        `${R}/Entradas/parque-d-3.jpg`, `${R}/Entradas/parque-d-4.jpg`], adventure: [`${R}/Entradas/parque-a-1.jpg`,
           `${R}/Entradas/parque-a-2.jpg`, `${R}/Entradas/parque-a-3.jpg`, `${R}/Entradas/parque-a-4.jpg`] },

           
    // Entradas: Extras mágicos (Premier Access Ultimate, Zona reservada, Acceso garantizado)
    extras: [`${R}/Entradas/extra-1.jpg`, `${R}/Entradas/extra-2.jpg`, `${R}/Entradas/extra-3.jpg`],
    // Entradas: tarifa especial visitantes con discapacidad
    discapacidad: `${R}/Entradas/tarifa-discapacidad.jpg`,
    // Entradas: "¿Cuántos días necesitas para visitar Disneyland Paris?"
    dias: `${R}/Entradas/dias-visita.jpg`,
    // Entradas: "Descubre nuestros Hoteles Disney temáticos"
    hotelesTematicos: `${R}/Entradas/hoteles-tematicos.jpg`,
  },




  
  
  // ---- carpeta public/img/Horarios/ ----
}
