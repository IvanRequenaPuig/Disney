import { initHeader } from '../../components/header.js'
import { initFeedback } from '../../components/feedback.js'

// Interactividad de la página de búsqueda. El texto, los filtros y los resultados los gestiona Buscar.jsx (React);
// aquí solo se activan la cabecera y el botón Comentarios.
export function initBuscar() {
  const offHeader = initHeader(), offFb = initFeedback()
  return () => { offHeader(); offFb() }
}
