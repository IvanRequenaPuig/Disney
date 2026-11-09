// Rutas de imágenes de la página/sección: categorias
const R = '/img'

export default {
  categorias: Object.fromEntries(['parques', 'peliculas', 'series', 'productoras', 'videojuegos', 'personajes', 'historia', 'mas'].map(id => [id, {
    hero: `${R}/Categorias/${id}/hero.jpg`,
    banner: `${R}/Categorias/${id}/banner.jpg`,
    item: slug => `${R}/Categorias/${id}/${slug}.jpg`,
  }]))
}
