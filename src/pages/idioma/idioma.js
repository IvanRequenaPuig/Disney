import $ from 'jquery'
import { setSite, webActual } from '../../components/translate.js'

// Selector de idioma (jQuery): resalta la web actual y, al elegir una, traduce toda la web a ese idioma y vuelve al inicio
export function initIdioma() {
  const ns = '.idi'
  $(`[data-site="${webActual()}"]`).addClass('current')
  $('#idioma').on('click' + ns, '[data-site]', function (e) {
    e.preventDefault()
    setSite($(this).data('site'))
    window.location.assign('/')
  })
  return () => { $('#idioma').off(ns) }
}
