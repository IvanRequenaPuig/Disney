import $ from 'jquery'
import { initHeader } from '../../components/header.js'
import { initFeedback } from '../../components/feedback.js'

// Interactividad de Dónde comer en Disneyland Paris (jQuery, con delegación de eventos)
export function initComer() {
  const ns = '.cmr', $r = $('#comer'), $w = $(window)
  const ids = ['tematicos', 'cocina', 'personajes', 'planes']
  const offHeader = initHeader(), offFb = initFeedback()

  // 1) Al pasar la tarjeta de pestañas, la cabecera se sustituye por la barra fija; marca la sección activa (scroll-spy)
  const onScroll = () => {
    const $t = $('.cm-tabs'); if (!$t.length) return
    $r.toggleClass('stuck', window.scrollY > $t.offset().top + $t.outerHeight() - 10)
    let cur = null
    ids.forEach(id => { const $s = $('#' + id); if ($s.length && $s.offset().top - 140 <= window.scrollY) cur = id })
    $('.cm-tab').removeClass('on'); if (cur) $('.cm-tab').filter(`[data-go="${cur}"]`).addClass('on')
  }
  $w.on('scroll' + ns, onScroll); onScroll()

  // 2) Clic en una pestaña: scroll suave hasta su sección
  $r.on('click' + ns, '.cm-tab', function () { $('html, body').stop().animate({ scrollTop: $('#' + $(this).data('go')).offset().top - 70 }, 500) })

  // 3) Valoración de la página (caritas)
  $r.on('click' + ns, '.cm-face', function () { $('.cm-face').removeClass('on'); $(this).addClass('on'); $('.cm-thanks').prop('hidden', false) })

  // 4) Pestañas del pie de página
  $r.on('click' + ns, '.ft-tab', function () { const i = $(this).data('pane'); $('.ft-tab').removeClass('on'); $(this).addClass('on'); $('.ft-pane').removeClass('on').eq(i).addClass('on') })

  // 5) Enlaces con ancla desde el menú (/donde-comer#planes)
  if (window.location.hash) setTimeout(() => { const $t = $(window.location.hash); if ($t.length) $('html, body').animate({ scrollTop: $t.offset().top - 60 }, 500) }, 350)

  return () => { offHeader(); offFb(); $r.off(ns); $w.off(ns) }
}
