// Contenido de la página del Parque Disneyland. La página de Disney Adventure World usará la misma plantilla (Parque.jsx)
// con otro archivo de datos igual que este (textos, tierras, atracciones...). Las imágenes se definen en src/config/images.js
import { IMG } from '../../config/images.js'
const P = IMG.parqueDisneyland

export default {
  id: 'disneyland',
  nombre: 'Parque Disneyland',
  hero: P.hero, mapa: P.mapa, banner: P.banner,
  intro: {
    titulo: 'Parque Disneyland: ¡Bienvenidos a un mundo donde los sueños se hacen realidad!',
    texto: 'Escápate a cinco tierras encantadas con el majestuoso <i>Castillo de la Bella Durmiente</i> como elemento central, donde las icónicas historias de princesas, piratas, exploradores y viajeros espaciales cobran vida.',
    items: [['👑', '5 tierras con Princesas Disney, <i>Star Wars</i>, el lejano Oeste y tierras lejanas'], ['🎢', 'Cautivadores viajes en atracciones temáticas para los más pequeños y los que lo son de corazón'], ['🎵', 'Una cabalgata de fama mundial, un deslumbrante espectáculo nocturno y temporadas espectaculares'], ['🐭', 'Mágicos encuentros con los Personajes Disney por todo el Parque']],
    enlace: ['Ver todos los horarios de apertura', '/horarios'],
  },
  // pos = posición del pin sobre el mapa (% izquierda, % arriba)
  tierraTitulo: 'Explora nuestras 5 tierras encantadas',
  tierras: [
    { n: 'Adventureland', c: '#4caf2a', pos: [19, 29], t: 'Piratas, templos perdidos y casas en los árboles: explora la selva y el Caribe.' },
    { n: 'Fantasyland', c: '#e83e8c', pos: [74, 20], t: 'El mundo de los cuentos de hadas, con el Castillo de la Bella Durmiente.' },
    { n: 'Discoveryland', c: '#1e90d8', pos: [87, 47], t: 'Viajes espaciales, droides y el futuro imaginado por Julio Verne.' },
    { n: 'Frontierland', c: '#f08a24', pos: [15, 60], t: 'El Salvaje Oeste: minas encantadas, ríos y trenes a toda velocidad.' },
    { n: 'Main Street, U.S.A.', c: '#d83a4a', pos: [51, 62], t: 'La entrada al parque: tiendas, restaurantes y la cabalgata diaria.' },
  ],
  atracciones: { titulo: 'Déjate llevar por la magia Disney en atracciones emblemáticas', enlace: 'Descubre esta atracción', items: [
    ['Pirates of the Caribbean', 'Embárcate en esta aventura pirata de saqueo y diversión, ahora en compañía del Capitán Jack Sparrow y su infame tripulación a bordo.'],
    [`“it’s a small world”`, '¡Pon viento en popa a toda vela y embárcate en una mágica vuelta al mundo con esta atracción icónica que no te puedes perder y que maravillará tanto a adultos como a niños!'],
    ['Big Thunder Mountain', 'Agarraos fuerte, porque esta carretilla minera desbocada os llevará a toda la familia dando tumbos por una montaña encantada...'],
    ['Phantom Manor', 'Atrévete a entrar en una mansión encantada donde los fantasmas te esperan en cada rincón.'],
    [`Peter Pan’s Flight`, 'Vuela sobre Londres y el País de Nunca Jamás a bordo de un galeón volador.'],
    ['Star Wars Hyperspace Mountain', 'Salta al hiperespacio en una montaña rusa a toda velocidad en plena batalla galáctica.'],
  ] },
  espectaculos: { titulo: 'Sumérgete en un mundo de maravillas con espectaculares espectáculos y cabalgatas<sup>(1)</sup>', items: [
    ['Disney Tales of Magic', 'Prepárate para acabar el día con un colofón final de deslumbrante belleza, con impresionantes fuegos artificiales, fuentes y mágicos efectos especiales en el <i>Castillo de la Bella Durmiente</i>.', 'Descubre este espectáculo'],
    ['Disney Stars on Parade', 'Admira a los Personajes Disney en sus coloridas carrozas con una encantadora música de fondo y sumérgete en las historias de Disney como nunca antes.', 'Descubre la cabalgata'],
    ['The Lion King: Rhythms of the Pride Lands', '¡Revive los momentos más emblemáticos de la película <i>El Rey León</i> en este exclusivo espectáculo en Frontierland Theater, que ya ha conquistado a miles de espectadores!', 'Descubre este espectáculo'],
  ], boton: 'Ver todos los espectáculos' },
  personajes: { titulo: 'Encuentros con Personajes Disney en escenarios únicos', sub: '¡Comparte momentos especiales con los icónicos Personajes de Disney, Pixar y <i>Star Wars</i><sup>(2)</sup>!', items: [['Encuentro con Mickey', 'Cola virtual - Necesita reserva*'], ['Princess Pavilion', 'Cola virtual - Necesita reserva*'], ['Starport', 'Cola virtual - Necesita reserva*']], boton: 'Ver todos los Encuentros con Personajes',
    nota: '*Para disfrutar de esta experiencia, debes unirte a la cola virtual, disponible principalmente a través de la app móvil de Disneyland Paris o con un Cast Member en la entrada del Encuentro con Personajes. Para más información, visita nuestra sección de preguntas frecuentes <a href="#">aquí</a>.', nota2: 'Disponibilidad limitada.' },
  restaurantes: { titulo: 'Deleita tu paladar en nuestros restaurantes', texto: '¡Disfruta de deliciosas comidas en nuestros restaurantes temáticos e incluso cena en compañía de los Personajes Disney! Desde servicio en mostrador hasta buffet libre o servicio de mesa... cada restaurante te invita a sumergirte en su propia historia, donde la magia no solo está en los sabores, sino en los momentos que compartís juntos.', boton: 'Ver todos los restaurantes', img: P.restaurantes },
  tiendas: { titulo: 'Encuentra el recuerdo perfecto en nuestras tiendas', texto: 'Desde ropa y pins coleccionables hasta disfraces de tus personajes favoritos, sables de luz personalizados y nuestras famosas Orejas Disney... cada artículo está diseñado para que vivas la magia a tope. Para llevar, para usar, para llevarte a casa: mucho más que souvenirs, son invitaciones a continuar la historia en nuestros Parques Disney... y más allá.', boton: 'Ver todas las tiendas', img: P.tiendas },
  temporadas: { titulo: 'Momentos inolvidables para cada temporada', texto: 'El Parque Disneyland se transforma con cada temporada, convirtiéndose en un mundo de travesuras otoñales en Halloween, maravillas de invierno en Navidad y un encanto sin fin durante todo el año.', boton: 'Saber más', img: P.temporadas },
  calendario: { titulo: 'Planifica tu estancia con nuestro calendario de precios estimados', texto: '¡Compara diferentes fechas* y utiliza nuestro calendario para encontrar el momento ideal para tu viaje al corazón de la magia! ¿Cambio de planes? ¡Modifica o cancela tu estancia sin cargos hasta 7 días antes de la llegada!',
    notas: [['📅', 'El precio del paquete se basa en tu fecha de llegada.'], ['🔄', 'Precios estimados basados en los precios registrados cada mañana a las 8h y actualizados una vez al día.']],
    pie: '*Los precios pueden variar según el momento de la reserva. Los precios indicados en el calendario son estimaciones basadas en los precios registrados cada mañana y se actualizan una vez al día. Los precios están sujetos a cambios según el momento de la reserva. El calendario es únicamente informativo y no contractual. Todos los precios están indicados en Euros redondeado a más.' },
  entradas: { titulo: 'Entradas con Fecha (1-4 días) o Entradas sin Fecha (1 día)', lineas: ['- 1 día: disfruta de lo mejor de uno o de los dos Parques Disney', '- De 2 a 4 días: sumérgete en los dos Parques Disney y no te pierdas ni un momento de magia', '- Cancela hasta 3 días antes de tu llegada*', '', '*Excepto las Entradas con Fecha Basic y las Entradas sin Fecha de 1 día'], boton: 'Descubre las Entradas a los Parques Disney', enlace: '/entradas', img: P.entradas },
  dias: { titulo: '¿Cuántos días necesitas para visitar Disneyland Paris?', texto: 'Descubre lo que puedes hacer en 1, 2, 3 o 4 días y elige la duración que mejor se ajuste a tus tiempos, tu presupuesto y tus preferencias de visita.', boton: 'Descubre más', enlace: '/entradas', img: P.dias },
  faqTitulo: '¿Tienes dudas...? ¡Las resolvemos!',
  faq: [
    ['¿Qué es el Parque Disneyland?', 'Es el parque temático original de Disneyland Paris, con cinco tierras encantadas (Main Street, U.S.A., Frontierland, Adventureland, Fantasyland y Discoveryland) y el <i>Castillo de la Bella Durmiente</i> como corazón del parque.'],
    ['¿Cuál es el horario de apertura del Parque Disneyland?', 'El horario cambia según la fecha. Consulta el calendario de <a href="/horarios">Horarios de los Parques</a> para ver la apertura del día de tu visita.'],
    ['¿Cuáles son las diferentes tierras del Parque Disneyland?', 'Main Street, U.S.A., Frontierland, Adventureland, Fantasyland y Discoveryland. Puedes verlas en el mapa de esta página.'],
    ['¿Dónde se encuentra el Parque Disneyland?', 'En Disneyland Paris, en Marne-la-Vallée, a unos 32 km al este de París.'],
    ['¿A partir de qué edad puede mi hijo disfrutar del Parque Disneyland?', 'El parque está pensado para todas las edades. Los menores de 3 años entran gratis y hay atracciones y espectáculos para los más pequeños.'],
    ['¿Las atracciones del Parque Disneyland son adecuadas para todas las edades?', 'Hay atracciones para toda la familia y otras con restricciones de altura o de salud. Consulta la información de cada atracción antes de subir.'],
    ['¿Puedo conocer a Personajes Disney en el Parque Disneyland?', 'Sí. Hay encuentros con Personajes Disney, Pixar y <i>Star Wars</i> por todo el parque; algunos requieren cola virtual.'],
    ['¿Hay un espectáculo nocturno en el Parque Disneyland?', 'Sí, <i>Disney Tales of Magic</i> cierra el día con fuegos artificiales, fuentes y efectos especiales en el Castillo.'],
    ['¿A qué hora tiene lugar el espectáculo nocturno en el Parque Disneyland?', 'Suele celebrarse al cierre del parque, pero la hora depende del día. Consulta la app o los horarios de espectáculos.'],
    ['¿Hay opciones de restaurantes en el Parque Disneyland?', 'Sí: servicio en mostrador, buffet y servicio de mesa, incluidas comidas con Personajes Disney.'],
    ['¿Qué eventos de temporada tienen lugar en el Parque Disneyland?', 'Halloween en otoño y la Navidad Encantada Disney en invierno, entre otras temporadas.'],
    ['¿Cuánto tiempo debo planificar para visitar el Parque Disneyland?', 'Para recorrer lo esencial, un día; para disfrutarlo con calma y ver los dos parques, de 2 a 4 días.'],
    ['¿Hay un hotel dentro del Parque Disneyland?', 'El <b>Disneyland Hotel</b> está justo a la entrada del Parque Disneyland.'],
    ['¿Cuáles son las condiciones de acceso al Parque Disneyland?', 'Necesitas una entrada con fecha, una entrada sin fecha con fechas registradas, un pase anual o un Disneyland Pass.'],
    ['¿Es accesible el Parque Disneyland para visitantes con discapacidad?', 'Sí. Hay servicios y tarifas especiales para visitantes con discapacidad; consulta la sección de accesibilidad.'],
    ['¿Cuánto tiempo debo planificar para visitar Disneyland Paris?', 'Te recomendamos entre 2 y 4 días para disfrutar de los dos parques sin prisas.'],
  ],
  condiciones: ['(1) Ten en cuenta que algunos espectáculos y cabalgatas de los Parques Disney pueden sufrir modificaciones, retrasos o cancelaciones sin previo aviso. Esto puede deberse a motivos de salud y seguridad, condiciones meteorológicas adversas, trabajos de mantenimiento importantes, cambios en el horario de apertura o cierre de atracciones.', '(2) Los Personajes Disney pueden variar. Algunas experiencias están sujetas a cambios, aplazamientos o cancelaciones sin previo aviso.'],
}
