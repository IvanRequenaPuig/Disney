// Contenido del menú lateral "Mundo Disney" (se abre con el castillo de la cabecera).
// Cada categoría: { id, label, icon, items: [ [texto, subtítulo, enlace(opcional)], ... ] }
// Para añadir una categoría o un elemento basta con editar este archivo.
const RAW = [
  { id: 'parques', label: 'Parques', icon: '🏰', items: [
    ['Disneyland Paris', 'Francia · Marne-la-Vallée', '/parque-disneyland', 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=900&q=85'], ['Walt Disney World', 'Orlando · Florida, EE. UU.', '#', 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85'], ['Disneyland Resort', 'Anaheim · California, EE. UU.', '#', 'https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=900&q=85'],
    ['Tokyo Disney Resort', 'Urayasu · Japón', '#', 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=85'], ['Hong Kong Disneyland', 'Isla de Lantau · China', '#', 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=900&q=85'], ['Shanghai Disney Resort', 'Pudong · China', '#', 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=900&q=85'], ['Aulani, a Disney Resort', 'Ko Olina · Hawái, EE. UU.', '#', 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85'], ['Disney Cruise Line', 'Cruceros Disney', '#', 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=900&q=85'] ] },
  { id: 'peliculas', label: 'Películas', icon: '🎬', items: [
    ['Animación clásica', 'Blancanieves, Bambi, La Bella Durmiente…'], ['Aventuras', ''], ['Fantasía', ''], ['Comedia', ''], ['Musicales', 'El Rey León, Frozen, Encanto…'],
    ['Familiares', ''], ['Acción y superhéroes', 'Marvel, Star Wars'], ['Ciencia ficción', ''], ['Drama', ''], ['Documentales', 'Disneynature, National Geographic'] ] },
  { id: 'series', label: 'Series', icon: '📺', items: [
    ['Animación', ''], ['Comedia', ''], ['Drama', ''], ['Ciencia ficción y fantasía', ''], ['Acción y aventuras', ''], ['Superhéroes', 'Series de Marvel'], ['Star Wars', 'The Mandalorian, Andor…'], ['Infantiles', 'Disney Junior'], ['Docuseries', ''] ] },
  { id: 'productoras', label: 'Productoras', icon: '🎞', items: [
    ['Walt Disney Pictures', ''], ['Walt Disney Animation Studios', ''], ['Pixar', 'Adquirida en 2006'], ['Marvel Studios', 'Adquirida en 2009'], ['Lucasfilm · Star Wars', 'Adquirida en 2012'],
    ['20th Century Studios (Fox)', 'Adquirida en 2019'], ['Searchlight Pictures', ''], ['Touchstone Pictures', ''], ['Hollywood Pictures', ''], ['ABC', ''], ['ESPN', ''], ['Hulu', ''], ['National Geographic', ''], ['FX', ''] ] },
  { id: 'videojuegos', label: 'Videojuegos', icon: '🎮', items: [
    ['PlayStation', 'PS5 · PS4'], ['Xbox', 'Series X|S · One'], ['Nintendo Switch', ''], ['PC', 'Steam · Epic Games'], ['Móvil', 'iOS · Android'], ['LEGO', 'Star Wars, Marvel, Disney…'], ['Kingdom Hearts', ''], ['Disney Dreamlight Valley', ''], ['Clásicos retro', 'Mega Drive · Super Nintendo'] ] },
  { id: 'personajes', label: 'Personajes', icon: '🐭', items: [
    ['Mickey y sus amigos', ''], ['Princesas Disney', ''], ['Villanos Disney', ''], ['Personajes Pixar', ''], ['Superhéroes Marvel', ''], ['Jedi y Sith', 'Star Wars'], ['Frozen', 'Anna, Elsa y Olaf'] ] },
  { id: 'historia', label: 'Historia de Disney', icon: '📜', items: [
    ['Walt Disney, el fundador', '1901 – 1966'], ['Roy O. Disney', 'Cofundador y hermano de Walt'], ['Los inicios (1923)', 'Disney Brothers Cartoon Studio'], ['Nace Mickey Mouse (1928)', 'Steamboat Willie'],
    ['Blancanieves (1937)', 'Primer largometraje de animación'], ['Disneyland abre sus puertas (1955)', 'Anaheim, California'], ['Walt Disney World (1971)', 'Orlando, Florida'], ['Disneyland Paris (1992)', 'Abre como Euro Disney'], ['Las grandes adquisiciones', 'Pixar, Marvel, Lucasfilm y Fox'], ['Cronología completa', ''] ] },
  { id: 'mas', label: 'Más del mundo Disney', icon: '✨', items: [
    ['Disney+', 'Plataforma de streaming'], ['Música y bandas sonoras', ''], ['Premios Óscar de Disney', ''], ['Tienda Disney', ''], ['Curiosidades', ''] ] },
]

// ---- Páginas de categoría (una por categoría del menú; ver src/pages/categoria/) ----
// Ruta (URL) de la página de cada categoría
export const RUTAS = { parques: 'parques', peliculas: 'peliculas', series: 'series', productoras: 'productoras', videojuegos: 'videojuegos', personajes: 'personajes', historia: 'historia-de-disney', mas: 'mas-del-mundo-disney' }
// Convierte un nombre en identificador de ancla/imagen: 'Acción y superhéroes' -> 'accion-y-superheroes'
export const slug = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
// Todo elemento sin enlace propio ('#' o vacío) lleva a su categoría, a la tarjeta que le corresponde: /peliculas#animacion-clasica
export const DRAWER = RAW.map(c => ({ ...c, items: c.items.map(it => [it[0], it[1], it[2] && it[2] !== '#' ? it[2] : `/${RUTAS[c.id]}#${slug(it[0])}`, it[3]]) }))
