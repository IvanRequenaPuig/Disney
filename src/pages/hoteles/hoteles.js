import $ from 'jquery'

// Interactividad de la página Hotel + Entradas (jQuery, con delegación para que funcione tras cada render de React)
export function initHoteles() {
  const ns = '.hot', $r = $('#hoteles'), $w = $(window)

  // 1) Barra de fechas: Modificar / Cerrar
  $r.on('click' + ns, '#h-mod', function () {
    $('#h-panel').stop(true, true).slideToggle(200)
    $(this).toggleClass('open').find('b').text($(this).hasClass('open') ? 'Cerrar' : 'Modificar')
  })
  $r.on('click' + ns, '#h-buscar', () => { $('#h-panel').slideUp(200); $('#h-mod').removeClass('open').find('b').text('Modificar') })

  // 2) Carrusel de fotos de cada hotel
  const goPhoto = ($s, i) => {
    const $sl = $s.find('.hs-slide'); i = (i + $sl.length) % $sl.length
    $s.data('i', i); $sl.removeClass('on').eq(i).addClass('on'); $s.find('.hs-dot').removeClass('on').eq(i).addClass('on')
  }
  $r.on('click' + ns, '.hs-next', function () { const $s = $(this).closest('.hs'); goPhoto($s, ($s.data('i') || 0) + 1) })
  $r.on('click' + ns, '.hs-dot', function () { goPhoto($(this).closest('.hs'), $(this).index()) })

  // 3) Mostrar más / menos
  $r.on('click' + ns, '.h-more-btn', function (e) {
    e.preventDefault(); const $c = $(this).closest('.hcard')
    $c.find('.h-more').stop(true, true).slideToggle(180)
    $(this).text($(this).text() === 'Mostrar más' ? 'Mostrar menos' : 'Mostrar más')
  })

  // 4) Ventanas (comparador, precios, mapa): se abren con data-open="#id"
  const closeAll = () => { $('.hm').removeClass('open'); $('body').removeClass('hm-lock') }
  $r.on('click' + ns, '[data-open]', function (e) { e.preventDefault(); $($(this).data('open')).addClass('open'); $('body').addClass('hm-lock') })
  $r.on('click' + ns, '.hm-close', closeAll)
  $w.on('keydown' + ns, e => { if (e.key === 'Escape') closeAll() })

  // 5) Pestañas de la ventana de precios y del pie de página
  const tabs = (tab, pane) => $r.on('click' + ns, tab, function () {
    const i = $(this).data('pane'), $p = $(this).parent().parent()
    $(tab).removeClass('on'); $(this).addClass('on')
    $r.find(pane).removeClass('on').eq(i).addClass('on')
  })
  tabs('.pt-tab', '.pt-pane'); tabs('.ft-tab', '.ft-pane')

  // 6) Mapa: al pasar por un pin aparece el hotel con sus datos
  $r.on('mouseenter' + ns, '.pin', function () { $(this).addClass('hot').find('.tip').stop(true, true).fadeIn(120) })
  $r.on('mouseleave' + ns, '.pin', function () { $(this).removeClass('hot').find('.tip').stop(true, true).fadeOut(100) })

  // 7) Ver las habitaciones (siguiente paso: Extras)
  $r.on('click' + ns, '.hroom', () => alert('Siguiente paso: Extras (próxima página).'))

  // 8) Panel "Comentarios"
  const $ov = $('.fb-overlay'), close = () => $ov.fadeOut(150)
  $('.fb-tab').on('click' + ns, () => { $('.fb-form, .fb-thanks').prop('hidden', true); $ov.prop('hidden', false).hide().fadeIn(200) })
  $('.fb-close').on('click' + ns, close)
  $ov.on('click' + ns, e => e.target === $ov[0] && close())
  $w.on('keydown' + ns, e => { if (e.key === 'Escape') close() })
  $('.fb-opt').on('click' + ns, function () {
    if ($(this).parent().index() === 2) return window.open('https://www.disneylandparis.com', '_blank')
    $('.fb-form').prop('hidden', false).hide().slideDown(150)
  })
  $('.fb-send').on('click' + ns, () => { $('.fb-form').slideUp(150); $('.fb-thanks').prop('hidden', false); setTimeout(close, 1500) })

  return () => { $r.off(ns); $w.off(ns); $('.fb-tab, .fb-close, .fb-overlay, .fb-opt, .fb-send').off(ns); $('body').removeClass('hm-lock') }
}
