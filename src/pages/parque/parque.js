import $ from 'jquery'
import { initHeader } from '../../components/header.js'
import { initFeedback } from '../../components/feedback.js'

// Interactividad de la página del parque (jQuery): barra fija, carrusel, mapa con pines, acordeón y pie de página
export function initParque() {
  const ns = '.pk', $r = $('#parque'), $w = $(window)
  const offHeader = initHeader(), offFb = initFeedback()

  // 1) Al bajar más allá del selector de parques, la cabecera se sustituye por la barra fija
  const onScroll = () => {
    const $s = $('.pk-heroswitch'); if (!$s.length) return
    $r.toggleClass('stuck', window.scrollY > $s.offset().top + $s.outerHeight() - 10)
  }
  $w.on('scroll' + ns, onScroll); onScroll()

  // 2) Carrusel de atracciones (flechas y puntos)
  const vis = () => (window.innerWidth < 768 ? 1 : window.innerWidth < 1100 ? 2 : 3)
  const go = ($c, k) => {
    const $t = $c.find('.pk-track'), n = $t.children().length, max = Math.max(0, n - vis()), i = k > max ? 0 : k < 0 ? max : k
    $c.data('i', i); $t.css('transform', `translateX(-${i * $t.children().first().outerWidth(true)}px)`)
    $c.find('.pk-dot').removeClass('on').eq(Math.min(i, $c.find('.pk-dot').length - 1)).addClass('on')
  }
  $r.on('click' + ns, '.pk-next', function () { const $c = $(this).closest('.pk-cs'); go($c, ($c.data('i') || 0) + 1) })
  $r.on('click' + ns, '.pk-prev', function () { const $c = $(this).closest('.pk-cs'); go($c, ($c.data('i') || 0) - 1) })
  $r.on('click' + ns, '.pk-dot', function () { go($(this).closest('.pk-cs'), $(this).index()) })
  $w.on('resize' + ns, () => $('.pk-cs').each(function () { go($(this), $(this).data('i') || 0) }))

  // 3) Mapa: la información de cada tierra aparece al pasar el ratón (o al pulsar) sobre su pin
  $r.on('mouseenter' + ns, '.pk-pin', function () { $(this).addClass('hot').find('.pk-tip').stop(true, true).fadeIn(140) })
  $r.on('mouseleave' + ns, '.pk-pin', function () { $(this).removeClass('hot').find('.pk-tip').stop(true, true).fadeOut(100) })
  $r.on('click' + ns, '.pk-pin', function () { $('.pk-pin').not(this).removeClass('hot').find('.pk-tip').hide(); $(this).toggleClass('hot').find('.pk-tip').stop(true, true).fadeToggle(120) })
  const closeM = () => { $('.pk-modal').removeClass('open'); $('body').removeClass('pk-lock') }
  $r.on('click' + ns, '[data-open]', function () { $($(this).data('open')).addClass('open'); $('body').addClass('pk-lock') })
  $r.on('click' + ns, '.pk-x', closeM).on('click' + ns, '.pk-modal', e => e.target.classList.contains('pk-modal') && closeM())
  $w.on('keydown' + ns, e => { if (e.key === 'Escape') closeM() })

  // 4) Preguntas frecuentes (acordeón)
  $r.on('click' + ns, '.acc-q', function () { $(this).next('.acc-a').stop(true, true).slideToggle(180); const $b = $(this).find('b'); $b.text($b.text() === '+' ? '−' : '+') })

  // 5) Pestañas del pie de página
  $r.on('click' + ns, '.ft-tab', function () { const i = $(this).data('pane'); $('.ft-tab').removeClass('on'); $(this).addClass('on'); $('.ft-pane').removeClass('on').eq(i).addClass('on') })

  // 6) Aparición suave de los bloques al hacer scroll
  const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && $(e.target).addClass('in')), { threshold: 0.12 })
  $('.pk-rev').each((_, el) => io.observe(el))

  // 6b) Disney Adventure World: botón de pausa del vídeo y mundos del mapa (en pantallas táctiles se levantan al pulsar)
  $r.on('click' + ns, '.pk-pause', function () { const v = $('.pk-video')[0]; if (!v) return; if (v.paused) { v.play(); $(this).text('⏸') } else { v.pause(); $(this).text('▶') } })
  $r.on('click' + ns, '.aw-hit', function () { const $z = $(this).closest('.aw-z'); $('.aw-z').not($z).removeClass('hot'); $z.toggleClass('hot') })

  // 7) Enlaces con ancla desde el menú (/parque-disneyland#espectaculos...)
  if (window.location.hash) setTimeout(() => { const $t = $(window.location.hash); if ($t.length) $('html, body').animate({ scrollTop: $t.offset().top - 70 }, 500) }, 350)

  return () => { offHeader(); offFb(); io.disconnect(); $r.off(ns); $w.off(ns); $('body').removeClass('pk-lock') }
}
