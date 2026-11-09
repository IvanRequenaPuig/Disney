// Traducción de TODA la web al idioma elegido en la página "Idioma" (/idioma).
// Usa el traductor web de Google (necesita internet): se activa con la cookie "googtrans" y traduce lo que se ve en cada página.
// Para cambiar qué idioma se usa en cada país, edita IDIOMA_DE_CADA_WEB.
import './translate.css'

// código de la web elegida → idioma al que se traduce (la web está escrita en español)
export const IDIOMA_DE_CADA_WEB = { es: 'es', fr: 'fr', be: 'fr', de: 'de', at: 'de', ch: 'de', it: 'it', pt: 'pt', nl: 'nl', dk: 'da', ie: 'en', gb: 'en', eur: 'en', usd: 'en' }
const ORIGEN = 'es'

const leer = () => { try { return localStorage.getItem('site') || 'es' } catch (e) { return 'es' } }
export const webActual = leer

// Cookie que lee el traductor (se pone en la ruta / y, si hay dominio, también en el dominio)
function cookie(valor) {
  const h = window.location.hostname, dom = h.includes('.') ? `;domain=${h}` : ''
  const caduca = valor ? '' : ';expires=Thu, 01 Jan 1970 00:00:00 GMT'
  const v = valor || ''
  document.cookie = `googtrans=${v};path=/${caduca}`
  if (dom) document.cookie = `googtrans=${v};path=/${dom}${caduca}`
}

// Al pulsar un país en la página de idiomas: guarda la elección y aplica (o quita) la traducción
export function setSite(code) {
  try { localStorage.setItem('site', code) } catch (e) { /* sin almacenamiento */ }
  const lang = IDIOMA_DE_CADA_WEB[code] || 'es'
  cookie(lang === ORIGEN ? '' : `/${ORIGEN}/${lang}`)
}

// Se llama una vez al arrancar la web (main.jsx). Si el idioma no es el español, carga el traductor.
export function initTranslate() {
  const lang = IDIOMA_DE_CADA_WEB[leer()] || 'es'
  document.documentElement.lang = lang
  if (lang === ORIGEN) return
  cookie(`/${ORIGEN}/${lang}`)

  // El traductor cambia el texto de la página y React se pierde al actualizarla: estos dos ajustes lo evitan
  const rc = Node.prototype.removeChild
  Node.prototype.removeChild = function (hijo) { return hijo.parentNode !== this ? hijo : rc.apply(this, arguments) }
  const ib = Node.prototype.insertBefore
  Node.prototype.insertBefore = function (nuevo, ref) { return ref && ref.parentNode !== this ? nuevo : ib.apply(this, arguments) }

  const caja = document.createElement('div'); caja.id = 'google_translate_element'; document.body.appendChild(caja)
  window.googleTranslateElementInit = () => new window.google.translate.TranslateElement({ pageLanguage: ORIGEN, autoDisplay: false }, 'google_translate_element')
  const s = document.createElement('script'); s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'; s.async = true
  document.body.appendChild(s)
}
