import $ from 'jquery'
import { initHeader } from '../../components/header.js'
import { initFeedback } from '../../components/feedback.js'

// Interactividad de Entradas con fecha y Paquetes (jQuery). El calendario de precios se pinta en React (PriceCalendar.jsx).
export function initReserva() {
  const ns = '.rsv', $r = $('#reserva'), $w = $(window)
  const offHeader = initHeader(), offFb = initFeedback()

  // 1) Ventanas (comparador y condiciones): se abren con data-open="#id"
  const closeM = () => { $('.rv-modal').removeClass('open'); $('body').removeClass('rv-lock') }
  $r.on('click' + ns, '[data-open]', function () { $($(this).data('open')).addClass('open'); $('body').addClass('rv-lock') })
  $r.on('click' + ns, '.rv-x', closeM).on('click' + ns, '.rv-modal', e => e.target.classList.contains('rv-modal') && closeM())
  $w.on('keydown' + ns, e => { if (e.key === 'Escape') closeM() })

  // 2) Preguntas frecuentes (acordeón)
  $r.on('click' + ns, '.acc-q', function () { $(this).next('.acc-a').stop(true, true).slideToggle(180); const $b = $(this).find('b'); $b.text($b.text() === '+' ? '−' : '+') })

  // 3) Pestañas del pie de página
  $r.on('click' + ns, '.ft-tab', function () { const i = $(this).data('pane'); $('.ft-tab').removeClass('on'); $(this).addClass('on'); $('.ft-pane').removeClass('on').eq(i).addClass('on') })

  // 4) Aparición suave de los bloques y destellos de las cabeceras con estrellas
  const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && $(e.target).addClass('in')), { threshold: 0.1 })
  $('.rv-rev').each((_, el) => io.observe(el))

  // 5) Enlaces con ancla (/entradas-y-paquetes#calendario)
  if (window.location.hash) setTimeout(() => { const $t = $(window.location.hash); if ($t.length) $('html, body').animate({ scrollTop: $t.offset().top - 40 }, 500) }, 350)

  return () => { offHeader(); offFb(); io.disconnect(); $r.off(ns); $w.off(ns); $('body').removeClass('rv-lock') }
}
