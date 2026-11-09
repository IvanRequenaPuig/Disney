import $ from 'jquery'
import { initHeader } from '../../components/header.js'

// Toda la interactividad de la página de inicio (jQuery). Devuelve una función de limpieza.
export function initIndex() {
  const ns = '.home'
  const $w = $(window)
  const offHeader = initHeader() // submenú + buscador de la cabecera

  // 1) Cabecera con sombra al hacer scroll
  $w.on('scroll' + ns, () => $('.dl-header').toggleClass('scrolled', window.scrollY > 10))

  // 2) Animación de entrada al hacer scroll
  const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && $(e.target).addClass('in')), { threshold: 0.15 })
  $('.reveal').each((_, el) => io.observe(el))

  // 3) Pestañas del buscador (Hotel + Entradas / Entradas)
  $('#home').on('click' + ns, '.bk-tab', function () {
    $('.bk-tab').removeClass('active'); $(this).addClass('active')
    $('.bk-hotel-only').toggle($(this).data('tab') === 'hotel')
  })

  // 4) Botón Reservar: valida fechas
  $('#home').on('click' + ns, '#bk-go', () => {
    const a = $('#bk-in').val(), b = $('#bk-out').val()
    if (!a || !b) return alert('Elige la fecha de llegada y de salida.')
    if (b <= a) return alert('La salida debe ser posterior a la llegada.')
    window.location.href = `/hoteles?in=${a}&out=${b}`
  })
  const today = new Date().toISOString().slice(0, 10)
  $('#bk-in, #bk-out').attr('min', today)

  // 5) Carrusel de hoteles: automático, flechas, puntos, pausa al pasar el ratón
  const $track = $('.hc-track'), $cards = $('.hc-card'), $dots = $('.hc-dot')
  let i = 0, timer
  const vis = () => (window.innerWidth < 768 ? 1 : 3)
  const max = () => $cards.length - vis()
  const go = k => {
    i = k > max() ? 0 : k < 0 ? max() : k
    $track.css('transform', `translateX(-${i * $cards.outerWidth(true)}px)`)
    $dots.removeClass('on').eq(Math.min(i, $dots.length - 1)).addClass('on')
  }
  const stop = () => clearInterval(timer)
  const start = () => { stop(); timer = setInterval(() => go(i + 1), 3500) }
  $('.hc-next').on('click' + ns, () => { go(i + 1); start() })
  $('.hc-prev').on('click' + ns, () => { go(i - 1); start() })
  $dots.each((k, d) => $(d).on('click' + ns, () => { go(k); start() }))
  $('.hc').on('mouseenter' + ns, stop).on('mouseleave' + ns, start)
  $w.on('resize' + ns, () => go(Math.min(i, max())))
  go(0); start()

  // 6) Panel "Comentarios"
  const $ov = $('.fb-overlay')
  const reset = () => { $('.fb-form, .fb-thanks').prop('hidden', true); $('.fb-form textarea').val('') }
  $('.fb-tab').on('click' + ns, () => { reset(); $ov.prop('hidden', false).hide().fadeIn(200) })
  const close = () => $ov.fadeOut(150)
  $('.fb-close').on('click' + ns, close)
  $ov.on('click' + ns, e => e.target === $ov[0] && close())
  $w.on('keydown' + ns, e => { if (e.key === 'Escape') close() })
  $('.fb-opt').on('click' + ns, function () {
    if ($(this).parent().index() === 2) return window.open('https://www.disneylandparis.com', '_blank')
    $('.fb-form').prop('hidden', false).hide().slideDown(150)
  })
  $('.fb-send').on('click' + ns, () => {
    $('.fb-form').slideUp(150); $('.fb-thanks').prop('hidden', false)
    setTimeout(close, 1500)
  })

  return () => { offHeader(); stop(); io.disconnect(); $w.off(ns); $('#home').off(ns); $('.nav-item, .dl-header').off(ns); $('.hc, .hc-next, .hc-prev, .fb-tab, .fb-close, .fb-opt, .fb-send, .fb-overlay').off(ns) }
}
