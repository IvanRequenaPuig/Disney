// Contenido de la página de Disney Adventure World (misma plantilla Parque.jsx que el Parque Disneyland).
// Las imágenes se definen en src/config/images.js (bloque parqueAdventure). Los textos sin "(Texto de ejemplo)" salen de tus capturas.
import { IMG } from '../../config/images.js'
const A = IMG.parqueAdventure || {}, P = IMG.parqueDisneyland

export default {
  id: 'adventure', nombre: 'Disney Adventure World', tema: 'adv', divisor: 'compass',
  hero: A.hero, heroLogo: A.logo, heroVideo: A.video, mapa: A.mapa, banner: A.banner,
  imgs: { atracciones: A.atracciones, espectaculos: A.espectaculos, personajes: A.personajes },
  intro: {
    titulo: 'Disney Adventure World: donde tus historias favoritas se convierten en aventuras inolvidables.',
    texto: '¡Vive como un ciudadano de Arendelle, únete a los Superhéroes de Marvel, juega con los amigos Pixar y descubre muchas más aventuras por el camino!',
    items: [['✦', 'Mundos extraordinarios inspirados en <i>Frozen</i>, MARVEL y Pixar'], ['🎢', 'Aventuras inmersivas con atracciones temáticas para todas las edades'], ['🎵', 'Increíbles espectáculos y un espectáculo nocturno único en el lago'], ['🐭', 'Encuentros con Personajes inolvidables y apariciones sorpresa']],
    enlace: ['Ver los horarios de apertura', '/horarios'],
  },
  tierraTitulo: '¡Explora nuestros mundos extraordinarios... y mucho más!',
  // Cada mundo es un trozo del mapa que se levanta al pasar el ratón. poly = recorte (% del mapa), pin = posición del pin (%)
  // Si algún recorte no encaja con tu mapa, ajusta los puntos de 'poly'.
  zonas: [
    { n: 'World of Frozen', c: '#38bdf8', pin: [49.4, 5.7], poly: 'polygon(40.6% 7.6%, 43.9% 2.5%, 46.7% 0.0%, 49.4% 1.3%, 53.3% 2.8%, 57.8% 4.4%, 63.3% 5.7%, 70.0% 6.4%, 73.9% 8.9%, 71.1% 12.7%, 66.7% 14.2%, 60.0% 13.3%, 54.4% 14.2%, 48.9% 13.3%, 42.8% 12.1%)' },
    { n: 'Avengers Campus', c: '#e11d1d', pin: [23.3, 38.1], poly: 'polygon(1.3% 38.1%, 3.3% 32.4%, 11.1% 29.9%, 18.3% 27.3%, 23.9% 27.3%, 26.7% 26.0%, 33.3% 26.0%, 37.2% 29.9%, 38.9% 34.3%, 38.3% 39.4%, 36.7% 44.5%, 38.3% 49.6%, 35.6% 53.4%, 32.2% 54.6%, 32.2% 59.7%, 31.1% 64.2%, 23.3% 64.8%, 18.3% 61.0%, 14.4% 55.9%, 12.2% 50.8%, 8.3% 45.7%, 2.8% 43.8%)' },
    { n: 'Adventure Way', c: '#3a5a7a', pin: [53.3, 38.1], poly: 'polygon(37.2% 31.8%, 42.2% 33.7%, 48.9% 33.3%, 53.3% 32.4%, 58.9% 33.7%, 62.2% 38.1%, 61.7% 44.5%, 65.6% 48.9%, 66.7% 53.4%, 63.3% 57.2%, 57.8% 59.7%, 52.2% 58.4%, 47.8% 55.9%, 43.9% 57.8%, 41.1% 53.4%, 38.3% 48.3%, 37.8% 40.7%)' },
    { n: 'Worlds of Pixar', c: '#f59a23', pin: [78.3, 38.1], poly: 'polygon(63.9% 38.1%, 66.7% 33.0%, 71.1% 29.9%, 76.7% 28.6%, 81.1% 27.3%, 88.3% 28.2%, 94.4% 28.6%, 98.3% 31.8%, 99.4% 40.7%, 97.8% 50.8%, 94.4% 59.7%, 88.9% 66.1%, 82.8% 70.5%, 77.8% 69.3%, 74.4% 63.5%, 76.7% 57.2%, 80.0% 53.4%, 76.7% 50.8%, 72.2% 50.8%, 67.8% 48.3%, 65.0% 43.2%)' },
    { n: 'World Premiere Plaza', c: '#1e4fe0', pin: [54.1, 69.3], poly: 'polygon(35.6% 62.3%, 40.0% 60.7%, 48.9% 61.6%, 55.6% 62.9%, 64.4% 62.9%, 71.1% 63.5%, 71.7% 71.2%, 66.7% 74.3%, 67.2% 82.6%, 63.3% 88.9%, 60.0% 94.0%, 54.4% 99.1%, 48.9% 98.5%, 46.7% 91.5%, 43.9% 83.9%, 42.8% 76.2%, 37.2% 71.2%)' }
  ],
  atracciones: { titulo: 'Sumérgete en la aventura con atracciones inmersivas', enlace: 'Descubre esta atracción', boton: 'Ver todas las atracciones', items: [
    ['<i>Frozen Ever After</i>', 'Navega hacia el corazón de una aventura de <i>Frozen</i> en este cautivador paseo en barco musical.'],
    ['Ratatouille : L’Aventure Totalement Toquée de Rémy', 'Hazte tan pequeñito como Rémy y agáchate, zambúllete, esquiva y corre a ponerte a salvo en una espectacular persecución por una cocina gigante.'],
    ['Avengers Assemble: Flight Force', 'Forma equipo con Iron Man y Capitana Marvel y ayúdalos a salvar el mundo de una amenaza intergaláctica. ¡La Tierra cuenta contigo!'],
    ['Raiponce Tangled Spin', 'Gira y ríe a bordo de una tetera en el colorido mundo de Rapunzel. (Texto de ejemplo)'],
    [`Crush’s Coaster`, 'Atrapa la corriente con Crush y vive una aventura submarina a toda velocidad. (Texto de ejemplo)'],
    ['Cars Road Trip', 'Una divertida vuelta en coche por la Ruta 66 con Rayo McQueen. (Texto de ejemplo)'],
  ] },
  espectaculos: { titulo: 'Sumérgete en experiencias increíbles con nuestros espectáculos<sup>(1)</sup>', carrusel: true, items: [
    ['Disney Cascade of Lights', 'Termina el día con un espectáculo nocturno único e impresionante con deslumbrantes fuegos artificiales, proyecciones en pantallas de agua, exhibiciones de drones y una panorámica única del lago.', 'Descubre este espectáculo'],
    ['¡Nuevo! Disney Princess Cavalcade', '¡Únete a Moana, Tiana, Rapunzel y Raya en su nueva cabalgata en Disney Adventure World!', 'Descubre este espectáculo'],
    ['Mickey and the Magician', 'Acompaña a Mickey mientras aprende los «trucos» del oficio de otros mágicos Personajes Disney como el Genio de Aladdín, Lumière de La Bella y la Bestia y Rafiki de El Rey León.<br><br>Hasta el 10 de enero de 2027', 'Descubre este espectáculo'],
  ], boton: 'Ver todos los espectáculos' },
  personajes: { titulo: 'Comparte momentos inolvidables con tus Personajes favoritos', sub: 'Te esperan encuentros heroicos, reales y entrañables en los mundos de Frozen, MARVEL y Pixar, que cobran vida ante tus ojos<sup>(2)</sup>.', items: [['Hero Training Center', 'Cola virtual - Necesita reserva*'], ['Encuentro de la Realeza', 'Cola virtual - Necesita reserva*'], ['Encuentro con Woody', '']], boton: 'Ver todos los Encuentros con Personajes',
    nota: '*Para disfrutar de esta experiencia, debes unirte a la cola virtual, disponible principalmente a través de la app móvil de Disneyland Paris o con un Cast Member en la entrada del Encuentro con Personajes. Para más información, visita nuestra sección de preguntas frecuentes <a href="#">aquí</a>.', nota2: 'Disponibilidad limitada.' },
  restaurantes: { titulo: 'Experiencias de restaurantes para todo aventurero', texto: 'Disfruta de sabores inspirados en las historias de Frozen, MARVEL y Pixar, con opciones gastronómicas para todos los gustos. Comparte una comida mágica en compañía de las Princesas Disney, saborea la cocina francesa clásica en un bistró parisino, para en un food truck para un delicioso descanso entre aventuras, y mucho más. Tanto si recargas energías entre emociones como si terminas el día relajándote, ¡la aventura continúa en Disney Adventure World!', boton: 'Ver todos los restaurantes', img: A.restaurantes },
  tiendas: { titulo: 'Llévate a casa un recuerdo de tu aventura', texto: 'Llévate la aventura a casa con las colecciones temáticas de nuestras tiendas, inspiradas en World of Frozen y en los mundos de MARVEL y Pixar. Llévate a casa figuras de Toy Story, juguetes tradicionales del Reino de Arendelle o accesorios de Superhéroes.', boton: 'Ver todas las tiendas', img: A.tiendas },
  calendario: { titulo: 'Planifica tu estancia con nuestro calendario de precios estimados', texto: '¡Compara diferentes fechas* y utiliza nuestro calendario para encontrar el momento ideal para visitar el corazón de la magia! ¿Cambio de planes? ¡Modifica o cancela tu estancia sin cargos hasta 7 días antes de la llegada!',
    notas: [['📅', 'El precio del paquete se basa en la fecha de llegada.'], ['🔄', 'Estimaciones de precios basadas en los precios registrados cada mañana a las 8 a.m. y actualizados una vez al día.']],
    pie: '*Los precios pueden variar según el momento de la reserva. Los precios indicados en el calendario son estimaciones basadas en los precios registrados cada mañana y se actualizan una vez al día. Los precios están sujetos a cambios según el momento de la reserva. El calendario es únicamente informativo y no contractual. Todos los precios están indicados en Euros redondeado a más.' },
  entradas: { titulo: 'Entradas con Fecha (1-4 días) o Entradas sin Fecha (1 día)', lineas: ['- 1 día: disfruta de lo mejor de uno o de los dos Parques Disney', '- De 2 a 4 días: sumérgete en los dos Parques Disney y no te pierdas ni un momento de magia', '- Cancela hasta 3 días antes de la llegada*', '', '*Excepto Entradas con Fecha Basic y Entradas sin Fecha de 1 día'], boton: 'Descubre nuestras Entradas', enlace: '/entradas', img: P.entradas },
  dias: { titulo: '¿Cuántos días necesitas para visitar Disneyland Paris?', texto: 'Descubre lo que puedes hacer en 1, 2, 3 o 4 días y elige la duración que mejor se ajuste a tus tiempos, tu presupuesto y tus preferencias de visita.', boton: 'Descubre más', enlace: '/entradas', img: P.dias },
  faqTitulo: '¿Tienes dudas...? ¡Las resolvemos!',
  faq: [
    ['¿Qué es Disney Adventure World?', 'Disney Adventure World es el segundo parque de Disneyland Paris, con mundos extraordinarios inspirados en <i>Frozen</i>, MARVEL y Pixar. (Texto de ejemplo)'],
    ['¿Cuándo abrirá Disney Adventure World?', 'Consulta los <a href="/horarios">Horarios de los Parques</a> para ver la apertura del día de tu visita. (Texto de ejemplo)'],
    ['¿Qué nuevas atracciones abrirán con Disney Adventure World?', 'Entre las novedades están <i>Frozen Ever After</i>, <i>Raiponce Tangled Spin</i> y otras experiencias inspiradas en <i>Frozen</i>, MARVEL y Pixar. (Texto de ejemplo)'],
    ['¿Cuáles son los diferentes mundos de Disney Adventure World?', 'World Premiere Plaza, Adventure Way, World of Frozen, Avengers Campus y Worlds of Pixar. Puedes verlos en el mapa de esta página.'],
    ['¿Dónde se encuentra Disney Adventure World?', 'En Disneyland Paris, en Marne-la-Vallée, a unos 32 km al este de París, junto al Parque Disneyland.'],
    ['¿Puedo conocer a Personajes Disney en World of Frozen o en Adventure Way?', 'Sí, hay encuentros con Personajes en distintos puntos del parque; algunos requieren cola virtual. (Texto de ejemplo)'],
    ['¿Habrá nuevas experiencias de restaurantes?', 'Sí: opciones inspiradas en <i>Frozen</i>, MARVEL y Pixar, desde food trucks hasta servicio de mesa. (Texto de ejemplo)'],
    ['¿Habrá nuevas tiendas?', 'Sí, con colecciones temáticas de World of Frozen y de los mundos de MARVEL y Pixar. (Texto de ejemplo)'],
    ['¿Para quiénes son adecuadas las atracciones de Disney Adventure World?', 'Hay atracciones para toda la familia y otras con restricciones de altura o de salud. Consulta la información de cada atracción.'],
    ['¿Son las nuevas atracciones adecuadas para todas las edades?', 'Muchas sí, pero algunas tienen altura mínima. Consulta las condiciones de acceso de cada una antes de subir.'],
    ['¿Cuáles serán las condiciones de acceso a Disney Adventure World?', 'Necesitas una entrada con fecha, una entrada sin fecha con fechas registradas, un pase anual o un Disneyland Pass.'],
    ['¿Puedo ver a Anna y Elsa en otros lugares de los Parques Disney?', 'Consulta la sección de Encuentros con Personajes para ver dónde y cuándo aparecen. (Texto de ejemplo)'],
    ['¿Cuáles son las condiciones de acceso a la atracción Raiponce Tangled Spin (altura mínima, visitantes con discapacidad, etc.)?', 'Consulta la ficha de la atracción para ver la altura mínima y las condiciones de acceso. (Texto de ejemplo)'],
    ['¿Cuáles son las condiciones de acceso para Frozen Ever After (altura mínima, visitantes con discapacidad, etc.)?', 'Consulta la ficha de la atracción para ver la altura mínima y las condiciones de acceso. (Texto de ejemplo)'],
    ['¿Habrá un espectáculo nocturno?', 'Sí: <i>Disney Cascade of Lights</i>, con fuegos artificiales, proyecciones en pantallas de agua y drones sobre el lago.'],
    ['¿A qué hora tendrá lugar el espectáculo Disney Cascade of Lights?', 'Suele celebrarse al caer la noche, pero la hora depende del día. Consulta la app o los horarios de espectáculos.'],
    ['¿El espectáculo Disney Cascade of Lights será gratuito?', 'Está incluido con tu entrada al parque. (Texto de ejemplo)'],
    ['¿Se aceptarán descuentos en las tiendas? ¿Habrá algún límite? (Disneyland Pass, Cast Members, miembros del Euro Disney Club)', 'Consulta las condiciones de cada descuento en la sección de ayuda. (Texto de ejemplo)'],
    ['¿Se aceptarán descuentos en los restaurantes? (Disneyland Pass, Cast Members, miembros del Euro Disney Club)', 'Consulta las condiciones de cada descuento en la sección de ayuda. (Texto de ejemplo)'],
    ['¿Podré añadir la opción de comida en The Regal View Restaurant & Lounge en el momento de la reserva de mi estancia?', 'Consulta la sección Dónde comer para ver los planes de comidas disponibles. (Texto de ejemplo)'],
    ['¿Cuándo podré reservar en The Regal View Restaurant & Lounge a través de la plataforma de reservas de restaurantes?', 'Las reservas se abren con antelación en la plataforma de reservas de restaurantes. (Texto de ejemplo)'],
    ['Ya había comprado el Plan de Comidas Extra Plus o Premium para ese periodo. ¿Podré acceder a The Regal View Restaurant & Lounge y en qué condiciones?', 'Consulta las condiciones de tu plan de comidas en la sección Dónde comer. (Texto de ejemplo)'],
    ['¿Cuántos días debo planificar para mi visita a Disneyland Paris?', 'Te recomendamos entre 2 y 4 días para disfrutar de los dos parques sin prisas.'],
    ['¿Seguirá evolucionando Disney Adventure World?', 'Disney sigue ampliando y renovando sus parques; consulta las novedades en la web oficial. (Texto de ejemplo)']
  ],
  condiciones: ['(1) Ten en cuenta que algunos espectáculos y cabalgatas de los Parques Disney pueden sufrir modificaciones, retrasos o cancelaciones sin previo aviso. Esto puede deberse a motivos de Salud y Seguridad, condiciones meteorológicas adversas, trabajos de mantenimiento importantes, cambios en el horario de apertura o cierre de atracciones.', '(2) Los Personajes Disney pueden variar. Algunas experiencias están sujetas a cambios, aplazamientos o cancelaciones sin previo aviso.'],
}
