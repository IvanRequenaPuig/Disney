import $ from 'jquery'
import { initHeader } from '../../components/header.js'
import { initFeedback } from '../../components/feedback.js'

// Interactividad de Hoteles Disney (jQuery, con delegación de eventos)
export function initHotelesDisney() {
  const ns = '.hdy', $r = $('#hdisney'), $w = $(window)
  const ids = ['hd-hoteles', 'hd-restaurantes', 'hd-reserva']
  const offHeader = initHeader(), offFb = initFeedback()

  // 1) Al pasar la tarjeta de pestañas, la cabecera se sustituye por la barra fija; marca la sección activa (scroll-spy)
  const onScroll = () => {
    const $t = $('.hd-tabs'); if (!$t.length) return
    $r.toggleClass('stuck', window.scrollY > $t.offset().top + $t.outerHeight() - 10)
    let cur = ids[0]
    ids.forEach(id => { const $s = $('#' + id); if ($s.length && $s.offset().top - 140 <= window.scrollY) cur = id })
    $('.hd-tab').removeClass('on').filter(`[data-go="${cur}"]`).addClass('on')
  }
  $w.on('scroll' + ns, onScroll); onScroll()

  // 2) Clic en una pestaña (o en un enlace con data-go): scroll suave hasta su sección
  const goTo = id => $('html, body').stop().animate({ scrollTop: $('#' + id).offset().top - 70 }, 500)
  $r.on('click' + ns, '[data-go]', function (e) { e.preventDefault(); goTo($(this).data('go')) })

  // 3) Carruseles: una tarjeta por paso; puntos = posiciones posibles; flechas se ocultan en los extremos
  const cars = () => $r.find('.hd-carwrap').toArray().map(el => $(el))
  const step = $c => { const $k = $c.find('.hd-card').eq(0); return $k.outerWidth() + (parseFloat($c.find('.hd-track').css('column-gap')) || 16) }
  const info = $c => { const $t = $c.find('.hd-track'), n = $c.find('.hd-card').length, vis = Math.max(1, Math.floor(($t.innerWidth() + 16) / step($c))); return { $t, n, pos: Math.max(1, n - vis + 1) } }
  const paint = $c => {
    const { $t, pos } = info($c), i = Math.min(pos - 1, Math.round($t.scrollLeft() / step($c)))
    const $d = $c.find('.hd-dots')
    if ($d.children().length !== pos) $d.empty().append(Array.from({ length: pos }, (_, k) => $('<i class="hd-dot">').attr('data-i', k)))
    $d.children().removeClass('on').eq(i).addClass('on')
    $c.find('.hd-prev').prop('hidden', i <= 0); $c.find('.hd-next').prop('hidden', i >= pos - 1)
    $d.prop('hidden', pos < 2)
  }
  const to = ($c, i) => { const { $t, pos } = info($c); $t.stop().animate({ scrollLeft: Math.max(0, Math.min(pos - 1, i)) * step($c) }, 300, () => paint($c)) }
  const cur = $c => Math.round(info($c).$t.scrollLeft() / step($c))
  $r.on('click' + ns, '.hd-next', function () { const $c = $(this).closest('.hd-carwrap'); to($c, cur($c) + 1) })
  $r.on('click' + ns, '.hd-prev', function () { const $c = $(this).closest('.hd-carwrap'); to($c, cur($c) - 1) })
  $r.on('click' + ns, '.hd-dot', function () { to($(this).closest('.hd-carwrap'), +$(this).data('i')) })
  $r.find('.hd-track').on('scroll' + ns, function () { paint($(this).closest('.hd-carwrap')) })
  const repaint = () => cars().forEach(paint)
  $w.on('resize' + ns, repaint); repaint()

  // 4) Preguntas frecuentes (acordeón)
  $r.on('click' + ns, '.hd-q-b', function () {
    const $b = $(this), open = $b.attr('aria-expanded') === 'true', $a = $b.next('.hd-q-a')
    $b.attr('aria-expanded', !open).find('i').text(open ? '+' : '−')
    open ? $a.slideUp(180, () => $a.prop('hidden', true)) : $a.hide().prop('hidden', false).slideDown(180)
  })

  // 5) Pestañas del pie de página
  $r.on('click' + ns, '.ft-tab', function () { const i = $(this).data('pane'); $('.ft-tab').removeClass('on'); $(this).addClass('on'); $('.ft-pane').removeClass('on').eq(i).addClass('on') })

  // 6) Enlaces con ancla desde otras páginas (/hoteles-disney#hd-reserva)
  const h = window.location.hash.slice(1)
  if (h && $('#' + h).length) setTimeout(() => goTo(h), 350)

  return () => { offHeader(); offFb(); $r.off(ns); $r.find('.hd-track').off(ns); $w.off(ns) }
}
