import $ from 'jquery'
import { initHeader } from '../../components/header.js'

// Interactividad de la página Entradas (jQuery, con delegación de eventos)
export function initEntradas() {
  const ns = '.ent', $r = $('#entradas'), $w = $(window)
  const ids = ['flex', 'otras', 'extras', 'tarifas']
  const offHeader = initHeader() // submenú + buscador de la cabecera

  // 2) Al pasar las pestañas, la cabecera cambia por la barra fija; además marca la sección activa (scroll-spy)
  const onScroll = () => {
    const $t = $('.en-tabs'), past = window.scrollY > $t.offset().top + $t.outerHeight() - 10
    $r.toggleClass('stuck', past)
    let cur = ids[0]; ids.forEach(id => { if ($('#' + id).offset().top - 140 <= window.scrollY) cur = id })
    $('.en-tab').removeClass('on').filter(`[data-go="${cur}"]`).addClass('on')
  }
  $w.on('scroll' + ns, onScroll); onScroll()

  // 3) Clic en una pestaña: scroll suave hasta su sección
  $r.on('click' + ns, '.en-tab', function () { $('html, body').stop().animate({ scrollTop: $('#' + $(this).data('go')).offset().top - 80 }, 500) })

  // 4) Duración de la visita (1 día / 2 a 4 días)
  $r.on('click' + ns, '.dias-opt', function () {
    const d = $(this).data('d'); $('.dias-opt').removeClass('on'); $(this).addClass('on')
    $('.dias-pane').hide().removeClass('on').filter(`[data-d="${d}"]`).addClass('on').fadeIn(200)
  })

  // 5) Ver precios (ventana con precios de ejemplo)
  const fmt = n => Number(n).toLocaleString('es-ES', { minimumFractionDigits: 2 }) + ' €'
  $r.on('click' + ns, '[data-price]', function () {
    $('#en-t').text($(this).data('title')); $('#en-a').text(fmt($(this).data('a'))); $('#en-c').text(fmt($(this).data('c'))); $('#en-price').addClass('open')
  })
  const closeModal = () => $('#en-price').removeClass('open')
  $r.on('click' + ns, '.en-x', closeModal).on('click' + ns, '#en-price', e => e.target.id === 'en-price' && closeModal())

  // 6) Pestañas del banner de Parques (Disneyland / 2 Parques / Adventure World)
  $r.on('click' + ns, '.park-tab', function () {
    const k = $(this).data('park'); $('.park-tab').removeClass('on'); $(this).addClass('on')
    $('.parks-banner').attr('data-sel', k)
    $('.park-pane').removeClass('on').hide().filter(`[data-park="${k}"]`).addClass('on').fadeIn(250)
  })

  // 7) Preguntas frecuentes / condiciones (acordeón)
  $r.on('click' + ns, '.acc-q', function () { $(this).next('.acc-a').stop(true, true).slideToggle(180); const $b = $(this).find('b'); $b.text($b.text() === '+' ? '−' : '+') })

  // 8) Pestañas del pie de página
  $r.on('click' + ns, '.ft-tab', function () { const i = $(this).data('pane'); $('.ft-tab').removeClass('on'); $(this).addClass('on'); $('.ft-pane').removeClass('on').eq(i).addClass('on') })

  // 9) Comentarios
  const $ov = $('.fb-overlay'), close = () => $ov.fadeOut(150)
  $('.fb-tab').on('click' + ns, () => { $('.fb-form, .fb-thanks').prop('hidden', true); $ov.prop('hidden', false).hide().fadeIn(200) })
  $('.fb-close').on('click' + ns, close); $ov.on('click' + ns, e => e.target === $ov[0] && close())
  $('.fb-opt').on('click' + ns, function () { if ($(this).parent().index() === 2) return window.open('https://www.disneylandparis.com', '_blank'); $('.fb-form').prop('hidden', false).hide().slideDown(150) })
  $('.fb-send').on('click' + ns, () => { $('.fb-form').slideUp(150); $('.fb-thanks').prop('hidden', false); setTimeout(close, 1500) })
  $w.on('keydown' + ns, e => { if (e.key === 'Escape') { close(); closeModal() } })

  return () => { offHeader(); $r.off(ns); $w.off(ns); $('.nav-item, .dl-header, .fb-tab, .fb-close, .fb-overlay, .fb-opt, .fb-send').off(ns) }
}
