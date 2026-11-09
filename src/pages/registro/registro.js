import $ from 'jquery'
import { initHeader } from '../../components/header.js'
import { initFeedback } from '../../components/feedback.js'

// Registro / inicio de sesión (jQuery): "Crear cuenta" y "Registrarse" abren la MISMA ventana MyDisney
export function initRegistro() {
  const ns = '.reg', $r = $('#registro'), $w = $(window)
  const offHeader = initHeader(), offFb = initFeedback()
  const open = () => { $('.lg-err, .lg-ok').prop('hidden', true); $('#login').addClass('open'); $('body').addClass('reg-lock'); setTimeout(() => $('#lg-mail').trigger('focus'), 60) }
  const close = () => { $('#login').removeClass('open'); $('body').removeClass('reg-lock') }
  $r.on('click' + ns, '[data-login]', open).on('click' + ns, '.lg-x', close)
  $w.on('keydown' + ns, e => { if (e.key === 'Escape') close() })
  const go = () => {
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test($('#lg-mail').val().trim())
    $('.lg-err').prop('hidden', ok); $('.lg-ok').prop('hidden', !ok); $('.lg-f').toggleClass('bad', !ok)
  }
  $r.on('click' + ns, '#lg-go', go).on('keydown' + ns, '#lg-mail', e => { if (e.key === 'Enter') go() })
  return () => { offHeader(); offFb(); $r.off(ns); $w.off(ns); $('body').removeClass('reg-lock') }
}
