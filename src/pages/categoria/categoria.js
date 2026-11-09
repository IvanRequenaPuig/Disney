import $ from 'jquery'
import { initHeader } from '../../components/header.js'
import { initFeedback } from '../../components/feedback.js'

// Interactividad de las páginas de categoría (jQuery): buscador de tarjetas, aparición al hacer scroll, anclas y pie de página
export function initCategoria() {
  const ns = '.ct', $r = $('#cat'), $w = $(window)
  const offHeader = initHeader(), offFb = initFeedback()
  const norm = s => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

  // 1) Buscador: oculta las tarjetas que no coinciden y actualiza el contador
  $r.on('input' + ns, '#ct-q', function () {
    const q = norm(this.value.trim()); let n = 0
    $('.ct-cardw').each(function () { const ok = !q || norm($(this).attr('data-s')).includes(q); $(this).toggleClass('ct-off', !ok); if (ok) n++ })
    $('.ct-count b').text(n); $('.ct-empty').toggleClass('on', n === 0)
  })

  // 2) Aparición suave de los bloques al hacer scroll
  const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && $(e.target).addClass('in')), { threshold: 0.12 })
  $('.ct-rev').each((_, el) => io.observe(el))

  // 3) Enlaces con ancla desde el menú lateral (/peliculas#animacion-clasica): baja hasta la tarjeta y la resalta
  const goHash = () => {
    const h = decodeURIComponent(window.location.hash.slice(1)); if (!h) return
    const $t = $(document.getElementById(h)); if (!$t.length) return
    $t.addClass('in ct-flash'); $('html, body').animate({ scrollTop: $t.offset().top - 120 }, 500)
    setTimeout(() => $t.removeClass('ct-flash'), 2400)
  }
  const t = setTimeout(goHash, 350); $w.on('hashchange' + ns, goHash)

  // 4) Pestañas del pie de página
  $r.on('click' + ns, '.ft-tab', function () { const i = $(this).data('pane'); $('.ft-tab').removeClass('on'); $(this).addClass('on'); $('.ft-pane').removeClass('on').eq(i).addClass('on') })

  return () => { clearTimeout(t); offHeader(); offFb(); io.disconnect(); $r.off(ns); $w.off(ns) }
}
