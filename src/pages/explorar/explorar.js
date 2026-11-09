import $ from 'jquery'
import { initHeader } from '../../components/header.js'
import { initFeedback } from '../../components/feedback.js'

// Interactividad de la página Explorar (jQuery): abrir/cerrar desplegables y pestañas del pie.
// (Los filtros y la lista los gestiona React en Explorar.jsx)
export function initExplorar() {
  const ns = '.ex', $r = $('#explorar'), $d = $(document)
  const offHeader = initHeader(), offFb = initFeedback()

  // Desplegables: se abre uno cada vez; se cierra al pulsar fuera, con Escape o al elegir un tipo de actividad
  // (no se usa stopPropagation: así los clics también llegan a React)
  $r.on('click' + ns, '.ex-dd-btn', function () {
    const $dd = $(this).closest('.ex-dd'), abrir = !$dd.hasClass('open')
    $('.ex-dd').removeClass('open'); if (abrir) $dd.addClass('open')
  })
  $r.on('click' + ns, '.ex-opt', () => $('.ex-dd').removeClass('open'))
  $d.on('click' + ns, e => { if (!$(e.target).closest('.ex-dd').length) $('.ex-dd').removeClass('open') })
  $d.on('keydown' + ns, e => { if (e.key === 'Escape') $('.ex-dd').removeClass('open') })

  // Pestañas del pie de página
  $r.on('click' + ns, '.ft-tab', function () { const i = $(this).data('pane'); $('.ft-tab').removeClass('on'); $(this).addClass('on'); $('.ft-pane').removeClass('on').eq(i).addClass('on') })

  return () => { offHeader(); offFb(); $r.off(ns); $d.off(ns) }
}
