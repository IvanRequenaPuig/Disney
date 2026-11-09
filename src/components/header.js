import $ from 'jquery'

// Lógica jQuery de la cabecera: submenú desplegable, buscador (lupa) y menú lateral del castillo. Devuelve la limpieza.
export function initHeader() {
  const ns = '.hdr', $hd = $('.dl-header')

  // 1) Submenú desplegable (hover en escritorio, clic para abrir/cerrar)
  const openMenu = k => {
    $hd.addClass('open')
    $('.nav-item').removeClass('on').filter(`[data-menu="${k}"]`).addClass('on')
    $('.mega-panel').removeClass('on').filter(`[data-menu="${k}"]`).addClass('on')
  }
  const closeMenu = () => { $hd.removeClass('open'); $('.nav-item, .mega-panel').removeClass('on') }
  $('.nav-item').on('mouseenter' + ns, function () { openMenu($(this).data('menu')) })
    .on('click' + ns, function () { $(this).hasClass('on') ? closeMenu() : openMenu($(this).data('menu')) })
  $hd.on('mouseleave' + ns, closeMenu)

  // 3) Menú lateral Mundo Disney: panel horizontal con categorías y tarjetas visuales.
  const openDr = () => { closeMenu(); $('body').addClass('dr-open') }
  const closeDr = () => $('body').removeClass('dr-open')
  $('.dl-castle').on('click' + ns, openDr)
  $('.dr-x, .dr-ov').on('click' + ns, closeDr)


  $(window).on('keydown' + ns, e => { if (e.key === 'Escape') { closeMenu(); closeDr() } })
  return () => { $('.nav-item, .dl-header, .dl-castle, .dr-x, .dr-ov').off(ns); $(window).off(ns); $('body').removeClass('dr-open') }
}
