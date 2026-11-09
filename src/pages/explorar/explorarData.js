// Contenido de la página "Explorar Disneyland Paris" (la que abren TODOS los botones "Ver todos…" del sitio).
// Se usa la URL para elegir qué se ve:  /explorar?tipo=atracciones&parque=disneyland
//   tipo   → todo | atracciones | restaurantes | entretenimiento | eventos | servicios | hoteles | parques | tiendas | spas | deportes | tours
//   parque → todos | disneyland | adventure | village | hoteles (todos los hoteles) | varios separados por coma (disneyland,adventure)
//   interes→ (opcional) filtro de Intereses ya marcado, p. ej. interes=personajes o interes=espectaculos,cabalgatas
// 🖼️ Imágenes → public/img/Explorar/<tipo>/<slug>.jpg  (ruta definida en src/config/images.js, bloque "explorar")

export const TIPOS = [
  { id: 'todo', label: 'Todas las actividades', icon: '🐭' },
  { id: 'atracciones', label: 'Atracciones', icon: '⭐' },
  { id: 'restaurantes', label: 'Restaurantes', icon: '🍴' },
  { id: 'entretenimiento', label: 'Entretenimiento', icon: '🎩' },
  { id: 'eventos', label: 'Eventos', icon: '✨' },
  { id: 'servicios', label: 'Servicios para visitantes', icon: 'ℹ️' },
  { id: 'hoteles', label: 'Hoteles', icon: '🛏' },
  { id: 'parques', label: 'Parques y Destinos', icon: '🌀' },
  { id: 'tiendas', label: 'Tiendas', icon: '🛍' },
  { id: 'spas', label: 'Spas y Centros de Fitness', icon: '💆' },
  { id: 'deportes', label: 'Deportes y Ocio', icon: '🎾' },
  { id: 'tours', label: 'Tours', icon: '🚂' },
]

// Ubicaciones del primer desplegable (id, nombre). Los grupos salen igual que en la web original.
export const GRUPOS = [
  ['Parques Temáticos', [['disneyland', 'Parque Disneyland'], ['adventure', 'Disney Adventure World']]],
  ['Otros Destinos', [['village', 'Disney Village']]],
  ['Hoteles', [['valdeurope', 'All Suites Appart Hotel Val d’Europe'], ['bb', 'B&B Hotel'], ['cheyenne', 'Disney Hotel Cheyenne'], ['santafe', 'Disney Hotel Santa Fe'], ['newport', 'Disney Newport Bay Club'], ['sequoia', 'Disney Sequoia Lodge'], ['newyork', 'Disney Hotel New York – The Art of Marvel'], ['davy', 'Disney Davy Crockett Ranch'], ['dlhotel', 'Disneyland Hotel']]],
]
export const HOTELES_IDS = GRUPOS[2][1].map(h => h[0])
export const NOMBRE = Object.fromEntries(GRUPOS.flatMap(g => g[1]))

// Filtros "Intereses" según el tipo elegido (código → texto)
export const INTERESES = {
  atracciones: [['emo', 'Atracciones emocionantes'], ['pa', 'Disney Premier Access'], ['p1', 'Disney Premier Access One'], ['pu', 'Disney Premier Access Ultimate'], ['fam', 'Aventura en familia'], ['peq', 'Diversión para los más pequeños'], ['mie', 'Puede dar miedo a los más pequeños'], ['tra', 'Paseo tranquilo'], ['nop', 'No debes perderte']],
  restaurantes: [['mesa', 'Servicio de mesa'], ['rapido', 'Servicio rápido'], ['pers', 'Comida con Personajes'], ['buffet', 'Buffet']],
  entretenimiento: [['espectaculos', 'Espectáculos'], ['cabalgatas', 'Cabalgatas'], ['personajes', 'Encuentros con Personajes']],
  hoteles: [['disney', 'Hoteles Disney'], ['asociado', 'Hoteles Asociados']],
}
export const ALTURAS = [[81, '81 cm'], [102, '1,02 m'], [107, '1,07 m'], [120, '1,20 m'], [132, '1,32 m'], [140, '1,40 m'], [0, 'Cualquier altura']]
export const EDADES = [['np', 'Niños pequeños'], ['n', 'Niños'], ['pr', 'Preadolescentes'], ['ad', 'Adolescentes'], ['a', 'Adultos'], ['all', 'Todas las edades']]
export const ACCESO = [['ds', 'Atracción con poco o ningún destello'], ['em', 'Accesible para mujeres embarazadas'], ['sr', 'Posibilidad de embarcar en silla de ruedas'], ['tr', 'Transferencia de su silla de ruedas esencial'], ['es', 'Accesible para personas con la capacidad necesaria para caminar y para subir y bajar escaleras'], ['pg', 'Se admiten perros guía y de asistencia'], ['bi', 'Hay bucle de inducción magnética']]
export const ORDENES = [['disney', 'Selecciones de Disney'], ['az', 'Nombre (A-Z)'], ['za', 'Nombre (Z-A)']]

const L = s => (s ? s.split(' ') : [])
const slug = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
// Atracción: nombre, ubicación, zona, altura mínima en cm (0 = cualquier altura), intereses, edades, accesibilidad
const A = (n, loc, zona, alt, int, ed = 'all', ac = 'sr es pg') => ({ tipo: 'atracciones', n, loc, zona, alt, int: L(int), ed: L(ed), ac: L(ac) })
// Resto de elementos: tipo, nombre, ubicación, zona, intereses
const X = (tipo, n, loc, zona = '', int = '') => ({ tipo, n, loc, zona, int: L(int), ed: [], ac: [] })

const ITEMS = [
  // ───────── Atracciones · Parque Disneyland ─────────
  A(`"it's a small world"`, 'disneyland', 'Fantasyland', 0, 'peq pa p1 pu', 'all', 'ds sr es pg bi'),
  A('Adventure Isle', 'disneyland', 'Adventureland', 0, 'fam tra', 'all', 'sr es pg'),
  A(`Alice's Curious Labyrinth`, 'disneyland', 'Fantasyland', 0, 'peq tra', 'all', 'ds es pg'),
  A('Autopia', 'disneyland', 'Discoveryland', 81, 'fam', 'all', 'es pg'),
  A('Big Thunder Mountain', 'disneyland', 'Frontierland', 102, 'emo pa p1 pu nop', 'n pr ad a', 'tr es pg'),
  A('Buzz Lightyear Laser Blast', 'disneyland', 'Discoveryland', 0, 'fam pa p1 pu', 'all', 'sr es pg'),
  A('Casey Jr. – le Petit Train du Cirque', 'disneyland', 'Fantasyland', 0, 'peq tra', 'np n', 'es pg'),
  A('Disneyland Railroad', 'disneyland', 'Main Street, U.S.A.', 0, 'tra fam', 'all', 'sr es pg'),
  A('Dumbo the Flying Elephant', 'disneyland', 'Fantasyland', 0, 'peq', 'np n', 'tr es pg'),
  A('Indiana Jones™ and the Temple of Peril', 'disneyland', 'Adventureland', 140, 'emo', 'pr ad a', 'tr es pg'),
  A('La Cabane des Robinson', 'disneyland', 'Adventureland', 0, 'fam tra', 'all', 'es pg'),
  A('Le Carrousel de Lancelot', 'disneyland', 'Fantasyland', 0, 'peq tra', 'all', 'sr es pg'),
  A('Les Mystères du Nautilus', 'disneyland', 'Discoveryland', 0, 'fam tra', 'all', 'es pg'),
  A('Les Voyages de Pinocchio', 'disneyland', 'Fantasyland', 0, 'peq tra', 'np n', 'sr es pg'),
  A('Mad Hatter’s Tea Cups', 'disneyland', 'Fantasyland', 0, 'peq fam', 'all', 'tr es pg'),
  A('Mickey’s PhilharMagic', 'disneyland', 'Fantasyland', 0, 'fam nop', 'all', 'sr es pg bi'),
  A('Orbitron', 'disneyland', 'Discoveryland', 0, 'fam', 'all', 'tr es pg'),
  A('Peter Pan’s Flight', 'disneyland', 'Fantasyland', 0, 'fam pa p1 pu nop', 'all', 'tr es pg'),
  A('Phantom Manor', 'disneyland', 'Frontierland', 0, 'mie fam nop', 'n pr ad a', 'sr es pg'),
  A('Pirates of the Caribbean', 'disneyland', 'Adventureland', 0, 'fam pa p1 pu nop', 'all', 'sr es pg'),
  A('Star Tours: The Adventures Continue', 'disneyland', 'Discoveryland', 102, 'emo pa p1 pu', 'n pr ad a', 'tr es pg'),
  A('Star Wars Hyperspace Mountain', 'disneyland', 'Discoveryland', 102, 'emo pa p1 pu nop', 'pr ad a', 'tr es pg'),
  A('Thunder Mesa Riverboat Landing', 'disneyland', 'Frontierland', 0, 'tra fam', 'all', 'sr es pg'),
  // ───────── Atracciones · Disney Adventure World ─────────
  A('Avengers Assemble: Flight Force', 'adventure', 'Avengers Campus', 102, 'emo pa p1 pu nop', 'n pr ad a', 'tr es pg'),
  A('Anna & Elsa’s Frozen Journey', 'adventure', 'World of Frozen', 0, 'fam peq pa p1 pu nop', 'all', 'sr es pg'),
  A('Cars Quatre Roues Rallye', 'adventure', 'Worlds of Pixar', 0, 'fam peq', 'all', 'tr es pg'),
  A('Cars Road Trip', 'adventure', 'Worlds of Pixar', 0, 'fam tra', 'all', 'sr es pg'),
  A('Crush’s Coaster', 'adventure', 'Worlds of Pixar', 107, 'emo pa p1 pu nop', 'n pr ad a', 'tr es pg'),
  A('Frozen Ever After', 'adventure', 'World of Frozen', 0, 'fam peq nop', 'all', 'sr es pg'),
  A('RC Racer', 'adventure', 'Toy Story Playland', 120, 'emo', 'pr ad a', 'tr es pg'),
  A('Ratatouille: L’Aventure Totalement Toquée de Rémy', 'adventure', 'Worlds of Pixar', 0, 'fam pa p1 pu nop', 'all', 'sr es pg'),
  A('Rock ’n’ Roller Coaster avec Aerosmith', 'adventure', 'Hollywood Boulevard', 120, 'emo pa p1 pu nop', 'pr ad a', 'tr es pg'),
  A('Slinky Dog Zigzag Spin', 'adventure', 'Toy Story Playland', 81, 'peq fam', 'np n', 'tr es pg'),
  A('Spider-Man W.E.B. Adventure', 'adventure', 'Avengers Campus', 102, 'fam pa p1 pu', 'all', 'tr es pg'),
  A('Toy Soldiers Parachute Drop', 'adventure', 'Toy Story Playland', 81, 'peq fam', 'np n', 'tr es pg'),
  A('The Twilight Zone Tower of Terror™', 'adventure', 'Hollywood Boulevard', 102, 'emo mie pa p1 pu', 'pr ad a', 'tr es pg'),
  A('Les Tapis Volants – Flying Carpets Over Agrabah', 'adventure', 'Adventure Way', 0, 'peq fam', 'np n', 'tr es pg'),
  // ───────── Restaurantes ─────────
  X('restaurantes', 'Auberge de Cendrillon', 'disneyland', 'Fantasyland', 'mesa pers'),
  X('restaurantes', 'Blue Lagoon Restaurant', 'disneyland', 'Adventureland', 'mesa'),
  X('restaurantes', 'Café Hyperion', 'disneyland', 'Discoveryland', 'rapido'),
  X('restaurantes', 'Casey’s Corner', 'disneyland', 'Main Street, U.S.A.', 'rapido'),
  X('restaurantes', 'Silver Spur Steakhouse', 'disneyland', 'Frontierland', 'mesa'),
  X('restaurantes', 'Walt’s – an American Restaurant', 'disneyland', 'Main Street, U.S.A.', 'mesa'),
  X('restaurantes', 'Bistrot Chez Rémy', 'adventure', 'Worlds of Pixar', 'mesa'),
  X('restaurantes', 'Hakuna Matata', 'adventure', 'Adventure Way', 'rapido'),
  X('restaurantes', 'Stark Factory', 'adventure', 'Avengers Campus', 'rapido'),
  X('restaurantes', 'The Regal View Restaurant', 'adventure', 'World of Frozen', 'mesa pers'),
  X('restaurantes', 'Annette’s Diner', 'village', 'Disney Village', 'mesa'),
  X('restaurantes', 'Rainforest Café', 'village', 'Disney Village', 'mesa'),
  X('restaurantes', 'Earl of Sandwich', 'village', 'Disney Village', 'rapido'),
  X('restaurantes', 'Cape Cod', 'newport', 'Disney Newport Bay Club', 'buffet'),
  X('restaurantes', 'Chuck Wagon Café', 'cheyenne', 'Disney Hotel Cheyenne', 'buffet'),
  X('restaurantes', 'Rio Grande Diner', 'santafe', 'Disney Hotel Santa Fe', 'buffet'),
  X('restaurantes', 'Hunter’s Grill', 'sequoia', 'Disney Sequoia Lodge', 'mesa'),
  X('restaurantes', 'Parkside Diner', 'newyork', 'Disney Hotel New York', 'mesa'),
  // ───────── Entretenimiento ─────────
  X('entretenimiento', 'Disney Tales of Magic', 'disneyland', 'Castillo de la Bella Durmiente', 'espectaculos'),
  X('entretenimiento', 'Disney Stars on Parade', 'disneyland', 'Main Street, U.S.A.', 'cabalgatas'),
  X('entretenimiento', 'The Lion King: Rhythms of the Pride Lands', 'disneyland', 'Frontierland Theater', 'espectaculos'),
  X('entretenimiento', 'Mickey and the Magician', 'disneyland', 'Fantasyland', 'espectaculos'),
  X('entretenimiento', 'Encuentro con Mickey', 'disneyland', 'Fantasyland', 'personajes'),
  X('entretenimiento', 'Princess Pavilion', 'disneyland', 'Fantasyland', 'personajes'),
  X('entretenimiento', 'Starport', 'disneyland', 'Discoveryland', 'personajes'),
  X('entretenimiento', 'Disney Junior Dream Factory', 'adventure', 'Hollywood Boulevard', 'espectaculos'),
  X('entretenimiento', 'Frozen: Una Celebración Musical', 'adventure', 'World of Frozen', 'espectaculos'),
  X('entretenimiento', 'Marvel Super Heroes United', 'adventure', 'Avengers Campus', 'espectaculos'),
  X('entretenimiento', 'Spider-Man', 'adventure', 'Avengers Campus', 'personajes'),
  X('entretenimiento', 'Woody y Jessie', 'adventure', 'Toy Story Playland', 'personajes'),
  X('entretenimiento', 'Buffalo Bill’s Wild West Show', 'village', 'Disney Village', 'espectaculos'),
  // ───────── Eventos ─────────
  X('eventos', 'Festival Disney Halloween', 'disneyland', 'Parque Disneyland'),
  X('eventos', 'Navidad Encantada Disney', 'disneyland', 'Parque Disneyland'),
  X('eventos', 'Navidad Encantada Disney', 'adventure', 'Disney Adventure World'),
  X('eventos', 'Noches Mágicas en Disney Village', 'village', 'Disney Village'),
  // ───────── Servicios para visitantes ─────────
  X('servicios', 'Consigna y guardarropa', 'disneyland', 'Main Street, U.S.A.'),
  X('servicios', 'Alquiler de sillas de ruedas y scooters', 'disneyland', 'Main Street, U.S.A.'),
  X('servicios', 'Baby Care y cambiadores', 'disneyland', 'Fantasyland'),
  X('servicios', 'Atención al visitante – City Hall', 'disneyland', 'Main Street, U.S.A.'),
  X('servicios', 'Primeros auxilios', 'adventure', 'Hollywood Boulevard'),
  X('servicios', 'Objetos perdidos', 'adventure', 'Disney Adventure World'),
  X('servicios', 'Cajeros automáticos', 'village', 'Disney Village'),
  // ───────── Hoteles ─────────
  X('hoteles', 'Disneyland Hotel', 'dlhotel', 'Disney', 'disney'),
  X('hoteles', 'Disney Hotel New York – The Art of Marvel', 'newyork', 'Disney', 'disney'),
  X('hoteles', 'Disney Newport Bay Club', 'newport', 'Disney', 'disney'),
  X('hoteles', 'Disney Sequoia Lodge', 'sequoia', 'Disney', 'disney'),
  X('hoteles', 'Disney Hotel Cheyenne', 'cheyenne', 'Disney', 'disney'),
  X('hoteles', 'Disney Hotel Santa Fe', 'santafe', 'Disney', 'disney'),
  X('hoteles', 'Disney Davy Crockett Ranch', 'davy', 'Disney', 'disney'),
  X('hoteles', 'All Suites Appart Hotel Val d’Europe', 'valdeurope', 'Asociado', 'asociado'),
  X('hoteles', 'B&B Hotel', 'bb', 'Asociado', 'asociado'),
  // ───────── Parques y Destinos ─────────
  X('parques', 'Parque Disneyland', 'disneyland', 'Parque temático'),
  X('parques', 'Disney Adventure World', 'adventure', 'Parque temático'),
  X('parques', 'Disney Village', 'village', 'Otros destinos'),
  // ───────── Tiendas ─────────
  X('tiendas', 'Emporium', 'disneyland', 'Main Street, U.S.A.'),
  X('tiendas', 'Boutique du Château', 'disneyland', 'Fantasyland'),
  X('tiendas', 'Star Trader', 'disneyland', 'Discoveryland'),
  X('tiendas', 'Frozen Boutique', 'adventure', 'World of Frozen'),
  X('tiendas', 'Stark Industries Store', 'adventure', 'Avengers Campus'),
  X('tiendas', 'World of Disney', 'village', 'Disney Village'),
  X('tiendas', 'Disney Fashion', 'village', 'Disney Village'),
  // ───────── Spas y Fitness ─────────
  X('spas', 'Spa del Disneyland Hotel', 'dlhotel', 'Disneyland Hotel'),
  X('spas', 'Spa de Disney Newport Bay Club', 'newport', 'Disney Newport Bay Club'),
  X('spas', 'Gimnasio del Disney Hotel New York', 'newyork', 'Disney Hotel New York'),
  X('spas', 'Gimnasio de Disney Sequoia Lodge', 'sequoia', 'Disney Sequoia Lodge'),
  // ───────── Deportes y Ocio ─────────
  X('deportes', 'Golf Disneyland', 'village', 'Disney Village'),
  X('deportes', 'Cine Gaumont', 'village', 'Disney Village'),
  X('deportes', 'Alquiler de bicicletas', 'davy', 'Disney Davy Crockett Ranch'),
  X('deportes', 'Piscina cubierta', 'newport', 'Disney Newport Bay Club'),
  // ───────── Tours ─────────
  X('tours', 'Visita guiada a París', 'village', 'Disney Village'),
  X('tours', 'Excursión a Versalles', 'village', 'Disney Village'),
  X('tours', 'Tour de París en autobús', 'village', 'Disney Village'),
]
export const ITEMS_ALL = ITEMS.map((x, i) => ({ ...x, id: i, slug: slug(x.n) }))
