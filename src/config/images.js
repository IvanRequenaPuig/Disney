// Índice central de imágenes. Cada página tiene su propio archivo en ./images/.
// Conserva la API IMG.<pagina> para que los componentes existentes no se rompan.
import comun from './images/comun.js'
import inicio from './images/inicio.js'
import hotelEntradas from './images/hotelEntradas.js'
import entradas from './images/entradas.js'
import horarios from './images/horarios.js'
import buscar from './images/buscar.js'
import registro from './images/registro.js'
import parqueDisneyland from './images/parqueDisneyland.js'
import reserva from './images/reserva.js'
import comer from './images/comer.js'
import hotelesDisney from './images/hotelesDisney.js'
import parqueAdventure from './images/parqueAdventure.js'
import explorar from './images/explorar.js'
import categorias from './images/categorias.js'

export const IMG = {
  ...comun, ...inicio, ...hotelEntradas, ...entradas, ...horarios, ...buscar, ...registro, ...parqueDisneyland, ...reserva, ...comer, ...hotelesDisney, ...parqueAdventure, ...explorar, ...categorias,
}
