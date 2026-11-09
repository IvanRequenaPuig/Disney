import $ from 'jquery'

// Lógica jQuery del botón lateral "Comentarios" (el HTML está en Feedback.jsx)
export function initFeedback() {
  const ns = '.fbk', $ov = $('.fb-overlay'), close = () => $ov.fadeOut(150)
  $('.fb-tab').on('click' + ns, () => { $('.fb-form, .fb-thanks').prop('hidden', true); $ov.prop('hidden', false).hide().fadeIn(200) })
  $('.fb-close').on('click' + ns, close); $ov.on('click' + ns, e => e.target === $ov[0] && close())
  $('.fb-opt').on('click' + ns, function () { if ($(this).parent().index() === 2) return window.open('https://www.disneylandparis.com', '_blank'); $('.fb-form').prop('hidden', false).hide().slideDown(150) })
  $('.fb-send').on('click' + ns, () => { $('.fb-form').slideUp(150); $('.fb-thanks').prop('hidden', false); setTimeout(close, 1500) })
  $(window).on('keydown' + ns, e => { if (e.key === 'Escape') close() })
  return () => { $('.fb-tab, .fb-close, .fb-overlay, .fb-opt, .fb-send').off(ns); $(window).off(ns) }
}
