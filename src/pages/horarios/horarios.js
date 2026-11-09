import $ from 'jquery'
import { initHeader } from '../../components/header.js'
import { initFeedback } from '../../components/feedback.js'

// Interactividad de Horarios de los Parques (jQuery). Calendario, pestañas y filtros se pintan en React.
export function initHorarios() {
  const ns = '.hor', $r = $('#horarios'), $w = $(window)
  const offHeader = initHeader(), offFb = initFeedback()

  // Carrusel de tarjetas: flechas y puntos (se vuelve a montar al cambiar de parque, pestaña o filtro)
  const vis = () => (window.innerWidth < 768 ? 1 : 3)
  const go = ($c, k) => {
    const $t = $c.find('.cs-track'), n = $t.children().length, max = Math.max(0, n - vis())
    const i = k > max ? 0 : k < 0 ? max : k
    $c.data('i', i); $t.css('transform', `translateX(-${i * $t.children().first().outerWidth(true)}px)`)
    $c.find('.cs-dot').removeClass('on').eq(Math.min(i, $c.find('.cs-dot').length - 1)).addClass('on')
  }
  $r.on('click' + ns, '.cs-next', function () { const $c = $(this).closest('.cs'); go($c, ($c.data('i') || 0) + 1) })
  $r.on('click' + ns, '.cs-prev', function () { const $c = $(this).closest('.cs'); go($c, ($c.data('i') || 0) - 1) })
  $r.on('click' + ns, '.cs-dot', function () { go($(this).closest('.cs'), $(this).index()) })
  $w.on('resize' + ns, () => $('.cs').each(function () { go($(this), $(this).data('i') || 0) }))

  // Animación suave de los horarios al elegir otro día del calendario
  $r.on('click' + ns, '.cal-d', () => $('.hz-parks').stop(true).css('opacity', 0).animate({ opacity: 1 }, 250))

  return () => { offHeader(); offFb(); $r.off(ns); $w.off(ns) }
}
