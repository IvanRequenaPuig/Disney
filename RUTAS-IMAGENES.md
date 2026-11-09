# Dónde cambiar las imágenes

Todas las imágenes están en **`public/img/`**, organizadas por página. Las rutas también están separadas en archivos independientes dentro de `src/config/images/`:

| Carpeta | Contenido |
|---|---|
| `public/img/comun/` | logo y tarjetas del submenú (varias páginas) |
| `public/img/inicio/` | página de inicio |
| `public/img/HotelEntradas/` | página Hotel + Entradas |
| `public/img/Entradas/` | página Entradas |
| `public/img/Horarios/` | página Horarios de los Parques |
| `public/img/Buscar/` | página de resultados del buscador |
| `public/img/Registro/` | página Registrarse |

## Cómo cambiar una imagen
1. **Misma ruta:** guarda tu foto en la carpeta con el nombre exacto de la tabla (si falta se ve un degradado).
2. **Otro nombre o carpeta:** abre el archivo de esa página dentro de **`src/config/images/`** (por ejemplo, `reserva.js` para Entradas con fecha y Paquetes) y cambia el nombre ahí. No hay que tocar nada más.

Los comentarios 🖼️ del código indican qué bloque de imágenes consultar. `src/config/images.js` es solo el índice que reúne los bloques; no hace falta modificarlo.

## Qué archivo abrir según la página

| Página o sección | Archivo donde cambiar las rutas |
|---|---|
| Cabecera, logos y menú compartido | `src/config/images/comun.js` |
| Inicio | `src/config/images/inicio.js` |
| Hotel + Entradas | `src/config/images/hotelEntradas.js` |
| Entradas | `src/config/images/entradas.js` |
| Horarios | `src/config/images/horarios.js` |
| Buscador y resultados | `src/config/images/buscar.js` |
| Registro | `src/config/images/registro.js` |
| Parque Disneyland | `src/config/images/parqueDisneyland.js` |
| Entradas con fecha y Paquetes (torre, castillo, etc.) | `src/config/images/reserva.js` |
| Restaurantes | `src/config/images/comer.js` |
| Hoteles Disney | `src/config/images/hotelesDisney.js` |
| Disney Adventure World | `src/config/images/parqueAdventure.js` |
| Explorar | `src/config/images/explorar.js` |
| Categorías del menú lateral | `src/config/images/categorias.js` |

## comun

| Clave en images.js | Archivo | Dónde se ve |
|---|---|---|
| `IMG.comun.logo` | `public/img/comun/logo.png` | Logo (cabecera de todas las páginas y ventana de Comentarios) |
| `IMG.comun.logoNegro` | `public/img/comun/logo-negro-original.png` | Logo original en negro (guardado, no se usa en el código) |
| `IMG.comun.castillo` | `public/img/comun/castillo.png` | Castillo a la izquierda de la cabecera (abre el menú lateral Mundo Disney) y cabecera del menú |
| `IMG.comun.menu.adventure` | `public/img/comun/menu-adventure.jpg` | Tarjetas del submenú desplegable (Los 2 Parques, Alojamientos, Restaurantes, Reserva tu viaje, Antes de venir) |
| `IMG.comun.menu.frozen` | `public/img/comun/menu-frozen.jpg` | Tarjetas del submenú desplegable (Los 2 Parques, Alojamientos, Restaurantes, Reserva tu viaje, Antes de venir) |
| `IMG.comun.menu.hotel` | `public/img/comun/menu-hotel.jpg` | Tarjetas del submenú desplegable (Los 2 Parques, Alojamientos, Restaurantes, Reserva tu viaje, Antes de venir) |
| `IMG.comun.menu.tranquilidad` | `public/img/comun/menu-tranquilidad.jpg` | Tarjetas del submenú desplegable (Los 2 Parques, Alojamientos, Restaurantes, Reserva tu viaje, Antes de venir) |
| `IMG.comun.menu.regal` | `public/img/comun/menu-regal.jpg` | Tarjetas del submenú desplegable (Los 2 Parques, Alojamientos, Restaurantes, Reserva tu viaje, Antes de venir) |
| `IMG.comun.menu.personajes` | `public/img/comun/menu-personajes.jpg` | Tarjetas del submenú desplegable (Los 2 Parques, Alojamientos, Restaurantes, Reserva tu viaje, Antes de venir) |
| `IMG.comun.menu.paris` | `public/img/comun/menu-paris.jpg` | Tarjetas del submenú desplegable (Los 2 Parques, Alojamientos, Restaurantes, Reserva tu viaje, Antes de venir) |
| `IMG.comun.menu.premier` | `public/img/comun/menu-premier.jpg` | Tarjetas del submenú desplegable (Los 2 Parques, Alojamientos, Restaurantes, Reserva tu viaje, Antes de venir) |
| `IMG.comun.menu.iberia` | `public/img/comun/menu-iberia.jpg` | Tarjetas del submenú desplegable (Los 2 Parques, Alojamientos, Restaurantes, Reserva tu viaje, Antes de venir) |
| `IMG.comun.menu.dory` | `public/img/comun/menu-dory.jpg` | Tarjetas del submenú desplegable (Los 2 Parques, Alojamientos, Restaurantes, Reserva tu viaje, Antes de venir) |

## inicio

| Clave en images.js | Archivo | Dónde se ve |
|---|---|---|
| `IMG.inicio.hero` | `public/img/inicio/hero.jpg` | Inicio: imagen principal (Navidad Encantada) |
| `IMG.inicio.plan[0]` | `public/img/inicio/plan1.jpg` | Inicio: tarjetas "Planifica tu viaje" (3) |
| `IMG.inicio.plan[1]` | `public/img/inicio/plan2.jpg` | Inicio: tarjetas "Planifica tu viaje" (3) |
| `IMG.inicio.plan[2]` | `public/img/inicio/plan3.jpg` | Inicio: tarjetas "Planifica tu viaje" (3) |
| `IMG.inicio.exp[0]` | `public/img/inicio/exp1.jpg` | Inicio: tarjetas "La experiencia de Disneyland Paris" (3) |
| `IMG.inicio.exp[1]` | `public/img/inicio/exp2.jpg` | Inicio: tarjetas "La experiencia de Disneyland Paris" (3) |
| `IMG.inicio.exp[2]` | `public/img/inicio/exp3.jpg` | Inicio: tarjetas "La experiencia de Disneyland Paris" (3) |
| `IMG.inicio.hotel[0]` | `public/img/inicio/hotel1.jpg` | Inicio: carrusel de hoteles (6) |
| `IMG.inicio.hotel[1]` | `public/img/inicio/hotel2.jpg` | Inicio: carrusel de hoteles (6) |
| `IMG.inicio.hotel[2]` | `public/img/inicio/hotel3.jpg` | Inicio: carrusel de hoteles (6) |
| `IMG.inicio.hotel[3]` | `public/img/inicio/hotel4.jpg` | Inicio: carrusel de hoteles (6) |
| `IMG.inicio.hotel[4]` | `public/img/inicio/hotel5.jpg` | Inicio: carrusel de hoteles (6) |
| `IMG.inicio.hotel[5]` | `public/img/inicio/hotel6.jpg` | Inicio: carrusel de hoteles (6) |
| `IMG.inicio.day[0]` | `public/img/inicio/day1.jpg` | Inicio: "Planifica tu día perfecto" (4) |
| `IMG.inicio.day[1]` | `public/img/inicio/day2.jpg` | Inicio: "Planifica tu día perfecto" (4) |
| `IMG.inicio.day[2]` | `public/img/inicio/day3.jpg` | Inicio: "Planifica tu día perfecto" (4) |
| `IMG.inicio.day[3]` | `public/img/inicio/day4.jpg` | Inicio: "Planifica tu día perfecto" (4) |
| `IMG.inicio.mundo[0]` | `public/img/inicio/w1.jpg` | Inicio: "Explora nuestros mágicos mundos" (7) |
| `IMG.inicio.mundo[1]` | `public/img/inicio/w2.jpg` | Inicio: "Explora nuestros mágicos mundos" (7) |
| `IMG.inicio.mundo[2]` | `public/img/inicio/w3.jpg` | Inicio: "Explora nuestros mágicos mundos" (7) |
| `IMG.inicio.mundo[3]` | `public/img/inicio/w4.jpg` | Inicio: "Explora nuestros mágicos mundos" (7) |
| `IMG.inicio.mundo[4]` | `public/img/inicio/w5.jpg` | Inicio: "Explora nuestros mágicos mundos" (7) |
| `IMG.inicio.mundo[5]` | `public/img/inicio/w6.jpg` | Inicio: "Explora nuestros mágicos mundos" (7) |
| `IMG.inicio.mundo[6]` | `public/img/inicio/w7.jpg` | Inicio: "Explora nuestros mágicos mundos" (7) |
| `IMG.inicio.access` | `public/img/inicio/access.jpg` | Inicio: entradas con tarifa reducida (accesibilidad) |
| `IMG.inicio.app` | `public/img/inicio/app.jpg` | Inicio: tarjeta de la app móvil |
| `IMG.inicio.news` | `public/img/inicio/news.jpg` | Inicio: tarjeta de la newsletter |

## HotelEntradas

| Clave en images.js | Archivo | Dónde se ve |
|---|---|---|
| `IMG.hotelEntradas.map` | `public/img/HotelEntradas/map.jpg` | Hotel + Entradas: mapa del parque (miniatura "Ver mapa" y mapa grande) |
| `IMG.hotelEntradas.hotels[1][0]` | `public/img/HotelEntradas/hotel1.jpg` | Hotel + Entradas: 3 fotos por hotel (carrusel de la tarjeta; la 1ª sale también en el mapa). 1 Disneyland Hotel, 2 New York, 3 Newport Bay, 4 Sequoia, 5 Cheyenne, 6 Santa Fe |
| `IMG.hotelEntradas.hotels[1][1]` | `public/img/HotelEntradas/hotel1-2.jpg` | Hotel + Entradas: 3 fotos por hotel (carrusel de la tarjeta; la 1ª sale también en el mapa). 1 Disneyland Hotel, 2 New York, 3 Newport Bay, 4 Sequoia, 5 Cheyenne, 6 Santa Fe |
| `IMG.hotelEntradas.hotels[1][2]` | `public/img/HotelEntradas/hotel1-3.jpg` | Hotel + Entradas: 3 fotos por hotel (carrusel de la tarjeta; la 1ª sale también en el mapa). 1 Disneyland Hotel, 2 New York, 3 Newport Bay, 4 Sequoia, 5 Cheyenne, 6 Santa Fe |
| `IMG.hotelEntradas.hotels[2][0]` | `public/img/HotelEntradas/hotel2.jpg` | Hotel + Entradas: 3 fotos por hotel (carrusel de la tarjeta; la 1ª sale también en el mapa). 1 Disneyland Hotel, 2 New York, 3 Newport Bay, 4 Sequoia, 5 Cheyenne, 6 Santa Fe |
| `IMG.hotelEntradas.hotels[2][1]` | `public/img/HotelEntradas/hotel2-2.jpg` | Hotel + Entradas: 3 fotos por hotel (carrusel de la tarjeta; la 1ª sale también en el mapa). 1 Disneyland Hotel, 2 New York, 3 Newport Bay, 4 Sequoia, 5 Cheyenne, 6 Santa Fe |
| `IMG.hotelEntradas.hotels[2][2]` | `public/img/HotelEntradas/hotel2-3.jpg` | Hotel + Entradas: 3 fotos por hotel (carrusel de la tarjeta; la 1ª sale también en el mapa). 1 Disneyland Hotel, 2 New York, 3 Newport Bay, 4 Sequoia, 5 Cheyenne, 6 Santa Fe |
| `IMG.hotelEntradas.hotels[3][0]` | `public/img/HotelEntradas/hotel3.jpg` | Hotel + Entradas: 3 fotos por hotel (carrusel de la tarjeta; la 1ª sale también en el mapa). 1 Disneyland Hotel, 2 New York, 3 Newport Bay, 4 Sequoia, 5 Cheyenne, 6 Santa Fe |
| `IMG.hotelEntradas.hotels[3][1]` | `public/img/HotelEntradas/hotel3-2.jpg` | Hotel + Entradas: 3 fotos por hotel (carrusel de la tarjeta; la 1ª sale también en el mapa). 1 Disneyland Hotel, 2 New York, 3 Newport Bay, 4 Sequoia, 5 Cheyenne, 6 Santa Fe |
| `IMG.hotelEntradas.hotels[3][2]` | `public/img/HotelEntradas/hotel3-3.jpg` | Hotel + Entradas: 3 fotos por hotel (carrusel de la tarjeta; la 1ª sale también en el mapa). 1 Disneyland Hotel, 2 New York, 3 Newport Bay, 4 Sequoia, 5 Cheyenne, 6 Santa Fe |
| `IMG.hotelEntradas.hotels[4][0]` | `public/img/HotelEntradas/hotel4.jpg` | Hotel + Entradas: 3 fotos por hotel (carrusel de la tarjeta; la 1ª sale también en el mapa). 1 Disneyland Hotel, 2 New York, 3 Newport Bay, 4 Sequoia, 5 Cheyenne, 6 Santa Fe |
| `IMG.hotelEntradas.hotels[4][1]` | `public/img/HotelEntradas/hotel4-2.jpg` | Hotel + Entradas: 3 fotos por hotel (carrusel de la tarjeta; la 1ª sale también en el mapa). 1 Disneyland Hotel, 2 New York, 3 Newport Bay, 4 Sequoia, 5 Cheyenne, 6 Santa Fe |
| `IMG.hotelEntradas.hotels[4][2]` | `public/img/HotelEntradas/hotel4-3.jpg` | Hotel + Entradas: 3 fotos por hotel (carrusel de la tarjeta; la 1ª sale también en el mapa). 1 Disneyland Hotel, 2 New York, 3 Newport Bay, 4 Sequoia, 5 Cheyenne, 6 Santa Fe |
| `IMG.hotelEntradas.hotels[5][0]` | `public/img/HotelEntradas/hotel5.jpg` | Hotel + Entradas: 3 fotos por hotel (carrusel de la tarjeta; la 1ª sale también en el mapa). 1 Disneyland Hotel, 2 New York, 3 Newport Bay, 4 Sequoia, 5 Cheyenne, 6 Santa Fe |
| `IMG.hotelEntradas.hotels[5][1]` | `public/img/HotelEntradas/hotel5-2.jpg` | Hotel + Entradas: 3 fotos por hotel (carrusel de la tarjeta; la 1ª sale también en el mapa). 1 Disneyland Hotel, 2 New York, 3 Newport Bay, 4 Sequoia, 5 Cheyenne, 6 Santa Fe |
| `IMG.hotelEntradas.hotels[5][2]` | `public/img/HotelEntradas/hotel5-3.jpg` | Hotel + Entradas: 3 fotos por hotel (carrusel de la tarjeta; la 1ª sale también en el mapa). 1 Disneyland Hotel, 2 New York, 3 Newport Bay, 4 Sequoia, 5 Cheyenne, 6 Santa Fe |
| `IMG.hotelEntradas.hotels[6][0]` | `public/img/HotelEntradas/hotel6.jpg` | Hotel + Entradas: 3 fotos por hotel (carrusel de la tarjeta; la 1ª sale también en el mapa). 1 Disneyland Hotel, 2 New York, 3 Newport Bay, 4 Sequoia, 5 Cheyenne, 6 Santa Fe |
| `IMG.hotelEntradas.hotels[6][1]` | `public/img/HotelEntradas/hotel6-2.jpg` | Hotel + Entradas: 3 fotos por hotel (carrusel de la tarjeta; la 1ª sale también en el mapa). 1 Disneyland Hotel, 2 New York, 3 Newport Bay, 4 Sequoia, 5 Cheyenne, 6 Santa Fe |
| `IMG.hotelEntradas.hotels[6][2]` | `public/img/HotelEntradas/hotel6-3.jpg` | Hotel + Entradas: 3 fotos por hotel (carrusel de la tarjeta; la 1ª sale también en el mapa). 1 Disneyland Hotel, 2 New York, 3 Newport Bay, 4 Sequoia, 5 Cheyenne, 6 Santa Fe |

## Entradas

| Clave en images.js | Archivo | Dónde se ve |
|---|---|---|
| `IMG.entradas.header` | `public/img/Entradas/header.jpg` | Entradas: imagen del HEADER (hueco entre el menú y las pestañas) |
| `IMG.entradas.calendario` | `public/img/Entradas/calendario-dory.jpg` | Entradas: imagen "Importante: Entradas sin fecha" (Dory con calendario) |
| `IMG.entradas.basica` | `public/img/Entradas/entrada-basica.jpg` | Entradas: "Entrada Básica con Fecha" |
| `IMG.entradas.parques.disneyland` | `public/img/Entradas/parque-disneyland.jpg` | Entradas: banner partido (izquierda Parque Disneyland, derecha Disney Adventure World) |
| `IMG.entradas.parques.adventure` | `public/img/Entradas/parque-adventure.jpg` | Entradas: banner partido (izquierda Parque Disneyland, derecha Disney Adventure World) |
| `IMG.entradas.exp.dos[0]` | `public/img/Entradas/parque-2-1.jpg` | Entradas: 4 tarjetas bajo el banner, una serie por pestaña (2 Parques / Disneyland / Adventure World) |
| `IMG.entradas.exp.dos[1]` | `public/img/Entradas/parque-2-2.jpg` | Entradas: 4 tarjetas bajo el banner, una serie por pestaña (2 Parques / Disneyland / Adventure World) |
| `IMG.entradas.exp.dos[2]` | `public/img/Entradas/parque-2-3.jpg` | Entradas: 4 tarjetas bajo el banner, una serie por pestaña (2 Parques / Disneyland / Adventure World) |
| `IMG.entradas.exp.dos[3]` | `public/img/Entradas/parque-2-4.jpg` | Entradas: 4 tarjetas bajo el banner, una serie por pestaña (2 Parques / Disneyland / Adventure World) |
| `IMG.entradas.exp.disneyland[0]` | `public/img/Entradas/parque-d-1.jpg` | Entradas: 4 tarjetas bajo el banner, una serie por pestaña (2 Parques / Disneyland / Adventure World) |
| `IMG.entradas.exp.disneyland[1]` | `public/img/Entradas/parque-d-2.jpg` | Entradas: 4 tarjetas bajo el banner, una serie por pestaña (2 Parques / Disneyland / Adventure World) |
| `IMG.entradas.exp.disneyland[2]` | `public/img/Entradas/parque-d-3.jpg` | Entradas: 4 tarjetas bajo el banner, una serie por pestaña (2 Parques / Disneyland / Adventure World) |
| `IMG.entradas.exp.disneyland[3]` | `public/img/Entradas/parque-d-4.jpg` | Entradas: 4 tarjetas bajo el banner, una serie por pestaña (2 Parques / Disneyland / Adventure World) |
| `IMG.entradas.exp.adventure[0]` | `public/img/Entradas/parque-a-1.jpg` | Entradas: 4 tarjetas bajo el banner, una serie por pestaña (2 Parques / Disneyland / Adventure World) |
| `IMG.entradas.exp.adventure[1]` | `public/img/Entradas/parque-a-2.jpg` | Entradas: 4 tarjetas bajo el banner, una serie por pestaña (2 Parques / Disneyland / Adventure World) |
| `IMG.entradas.exp.adventure[2]` | `public/img/Entradas/parque-a-3.jpg` | Entradas: 4 tarjetas bajo el banner, una serie por pestaña (2 Parques / Disneyland / Adventure World) |
| `IMG.entradas.exp.adventure[3]` | `public/img/Entradas/parque-a-4.jpg` | Entradas: 4 tarjetas bajo el banner, una serie por pestaña (2 Parques / Disneyland / Adventure World) |
| `IMG.entradas.extras[0]` | `public/img/Entradas/extra-1.jpg` | Entradas: Extras mágicos (Premier Access Ultimate, Zona reservada, Acceso garantizado) |
| `IMG.entradas.extras[1]` | `public/img/Entradas/extra-2.jpg` | Entradas: Extras mágicos (Premier Access Ultimate, Zona reservada, Acceso garantizado) |
| `IMG.entradas.extras[2]` | `public/img/Entradas/extra-3.jpg` | Entradas: Extras mágicos (Premier Access Ultimate, Zona reservada, Acceso garantizado) |
| `IMG.entradas.discapacidad` | `public/img/Entradas/tarifa-discapacidad.jpg` | Entradas: tarifa especial visitantes con discapacidad |
| `IMG.entradas.dias` | `public/img/Entradas/dias-visita.jpg` | Entradas: "¿Cuántos días necesitas para visitar Disneyland Paris?" |
| `IMG.entradas.hotelesTematicos` | `public/img/Entradas/hoteles-tematicos.jpg` | Entradas: "Descubre nuestros Hoteles Disney temáticos" |

## Horarios

| Clave en images.js | Archivo | Dónde se ve |
|---|---|---|
| `IMG.horarios.header` | `public/img/Horarios/header.jpg` | Horarios de los Parques: imagen del HEADER (reloj de Mickey) |
| `IMG.horarios.cards.disneyland.atracciones[0]` | `public/img/Horarios/d-atr-1.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.disneyland.atracciones[1]` | `public/img/Horarios/d-atr-2.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.disneyland.atracciones[2]` | `public/img/Horarios/d-atr-3.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.disneyland.atracciones[3]` | `public/img/Horarios/d-atr-4.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.disneyland.atracciones[4]` | `public/img/Horarios/d-atr-5.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.disneyland.atracciones[5]` | `public/img/Horarios/d-atr-6.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.disneyland.personajes[0]` | `public/img/Horarios/d-per-1.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.disneyland.personajes[1]` | `public/img/Horarios/d-per-2.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.disneyland.personajes[2]` | `public/img/Horarios/d-per-3.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.disneyland.personajes[3]` | `public/img/Horarios/d-per-4.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.disneyland.shows[0]` | `public/img/Horarios/d-show-1.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.disneyland.shows[1]` | `public/img/Horarios/d-show-2.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.disneyland.shows[2]` | `public/img/Horarios/d-show-3.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.disneyland.shows[3]` | `public/img/Horarios/d-show-4.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.adventure.atracciones[0]` | `public/img/Horarios/a-atr-1.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.adventure.atracciones[1]` | `public/img/Horarios/a-atr-2.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.adventure.atracciones[2]` | `public/img/Horarios/a-atr-3.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.adventure.atracciones[3]` | `public/img/Horarios/a-atr-4.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.adventure.atracciones[4]` | `public/img/Horarios/a-atr-5.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.adventure.atracciones[5]` | `public/img/Horarios/a-atr-6.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.adventure.personajes[0]` | `public/img/Horarios/a-per-1.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.adventure.personajes[1]` | `public/img/Horarios/a-per-2.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.adventure.personajes[2]` | `public/img/Horarios/a-per-3.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.adventure.personajes[3]` | `public/img/Horarios/a-per-4.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.adventure.shows[0]` | `public/img/Horarios/a-show-1.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.adventure.shows[1]` | `public/img/Horarios/a-show-2.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.adventure.shows[2]` | `public/img/Horarios/a-show-3.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.cards.adventure.shows[3]` | `public/img/Horarios/a-show-4.jpg` | Horarios: tarjetas del carrusel (por parque y por pestaña Atracciones / Personajes / Entretenimiento) |
| `IMG.horarios.reservas[0]` | `public/img/Horarios/reserva-paquetes.jpg` | Horarios: iconos "Reserva tu estancia o tu visita" (paquetes y entradas) |
| `IMG.horarios.reservas[1]` | `public/img/Horarios/reserva-entradas.jpg` | Horarios: iconos "Reserva tu estancia o tu visita" (paquetes y entradas) |

## Buscar

| Clave en images.js | Archivo | Dónde se ve |
|---|---|---|
| `IMG.buscar.header` | `public/img/Buscar/header.jpg` | Buscar: imagen del HEADER (cabecera grande con el buscador encima) |
| `IMG.buscar.fotos[0]` | `public/img/Buscar/resultado-1.jpg` | Buscar resultados: fotos de las atracciones de la lista (la 1ª es La Cabane des Robinson) |
| `IMG.buscar.fotos[1]` | `public/img/Buscar/resultado-2.jpg` | Buscar resultados: fotos de las atracciones de la lista (la 1ª es La Cabane des Robinson) |
| `IMG.buscar.fotos[2]` | `public/img/Buscar/resultado-3.jpg` | Buscar resultados: fotos de las atracciones de la lista (la 1ª es La Cabane des Robinson) |

## Registro

| Clave en images.js | Archivo | Dónde se ve |
|---|---|---|
| `IMG.registro.header` | `public/img/Registro/header.jpg` | Registrarse: imagen del HEADER (fondo morado con Mickey) |
| `IMG.registro.fondoLogin` | `public/img/Registro/fondo-login.jpg` | Registrarse: fondo estrellado de la ventana de inicio de sesión (opcional) |

## ParqueDisneyland

| Clave en images.js | Archivo | Dónde se ve |
|---|---|---|
| `IMG.parqueDisneyland.hero` | `public/img/ParqueDisneyland/hero.jpg` | HEADER grande de la página (castillo con fuegos artificiales) |
| `IMG.parqueDisneyland.mapa` | `public/img/ParqueDisneyland/mapa.jpg` | Mapa del parque (ahora hay uno de prueba; sustitúyelo por el tuyo) |
| `IMG.parqueDisneyland.banner` | `public/img/ParqueDisneyland/banner-noche.jpg` | Banner ancho de la calle principal de noche (cabalgata nocturna) |
| `IMG.parqueDisneyland.restaurantes` | `public/img/ParqueDisneyland/restaurantes.jpg` | "Deleita tu paladar": restaurantes |
| `IMG.parqueDisneyland.tiendas` | `public/img/ParqueDisneyland/tiendas.jpg` | "Encuentra el recuerdo perfecto": tiendas |
| `IMG.parqueDisneyland.temporadas` | `public/img/ParqueDisneyland/temporadas.jpg` | "Momentos inolvidables para cada temporada" |
| `IMG.parqueDisneyland.entradas` | `public/img/ParqueDisneyland/entradas.jpg` | "Entradas con Fecha o sin Fecha" (abanico de entradas) |
| `IMG.parqueDisneyland.dias` | `public/img/ParqueDisneyland/dias-visita.jpg` | "¿Cuántos días necesitas?" (castillo con Mickey y Minnie) |
| `IMG.parqueDisneyland.atracciones[0]` | `public/img/ParqueDisneyland/atraccion-1.jpg` | Carrusel "Atracciones emblemáticas" (6): Pirates of the Caribbean, it's a small world, Big Thunder Mountain, Phantom Manor, Peter Pan's Flight, Star Wars Hyperspace Mountain |
| `IMG.parqueDisneyland.atracciones[1]` | `public/img/ParqueDisneyland/atraccion-2.jpg` | Carrusel "Atracciones emblemáticas" (6): Pirates of the Caribbean, it's a small world, Big Thunder Mountain, Phantom Manor, Peter Pan's Flight, Star Wars Hyperspace Mountain |
| `IMG.parqueDisneyland.atracciones[2]` | `public/img/ParqueDisneyland/atraccion-3.jpg` | Carrusel "Atracciones emblemáticas" (6): Pirates of the Caribbean, it's a small world, Big Thunder Mountain, Phantom Manor, Peter Pan's Flight, Star Wars Hyperspace Mountain |
| `IMG.parqueDisneyland.atracciones[3]` | `public/img/ParqueDisneyland/atraccion-4.jpg` | Carrusel "Atracciones emblemáticas" (6): Pirates of the Caribbean, it's a small world, Big Thunder Mountain, Phantom Manor, Peter Pan's Flight, Star Wars Hyperspace Mountain |
| `IMG.parqueDisneyland.atracciones[4]` | `public/img/ParqueDisneyland/atraccion-5.jpg` | Carrusel "Atracciones emblemáticas" (6): Pirates of the Caribbean, it's a small world, Big Thunder Mountain, Phantom Manor, Peter Pan's Flight, Star Wars Hyperspace Mountain |
| `IMG.parqueDisneyland.atracciones[5]` | `public/img/ParqueDisneyland/atraccion-6.jpg` | Carrusel "Atracciones emblemáticas" (6): Pirates of the Caribbean, it's a small world, Big Thunder Mountain, Phantom Manor, Peter Pan's Flight, Star Wars Hyperspace Mountain |
| `IMG.parqueDisneyland.espectaculos[0]` | `public/img/ParqueDisneyland/espectaculo-1.jpg` | Espectáculos y cabalgatas (3): Disney Tales of Magic, Disney Stars on Parade, The Lion King |
| `IMG.parqueDisneyland.espectaculos[1]` | `public/img/ParqueDisneyland/espectaculo-2.jpg` | Espectáculos y cabalgatas (3): Disney Tales of Magic, Disney Stars on Parade, The Lion King |
| `IMG.parqueDisneyland.espectaculos[2]` | `public/img/ParqueDisneyland/espectaculo-3.jpg` | Espectáculos y cabalgatas (3): Disney Tales of Magic, Disney Stars on Parade, The Lion King |
| `IMG.parqueDisneyland.personajes[0]` | `public/img/ParqueDisneyland/personaje-1.jpg` | Encuentros con Personajes (3, redondas): Mickey, Princess Pavilion, Starport |
| `IMG.parqueDisneyland.personajes[1]` | `public/img/ParqueDisneyland/personaje-2.jpg` | Encuentros con Personajes (3, redondas): Mickey, Princess Pavilion, Starport |
| `IMG.parqueDisneyland.personajes[2]` | `public/img/ParqueDisneyland/personaje-3.jpg` | Encuentros con Personajes (3, redondas): Mickey, Princess Pavilion, Starport |

## Reserva

| Clave en images.js | Archivo | Dónde se ve |
|---|---|---|
| `IMG.reserva.header` | `public/img/Reserva/header.jpg` | Entradas y Paquetes: imagen de FONDO de la cabecera (detrás del título y las tarjetas) |
| `IMG.reserva.extras` | `public/img/Reserva/extras.jpg` | "Mejora tu visita con nuestros mágicos Extras" |
| `IMG.reserva.comidas` | `public/img/Reserva/planes-comidas.jpg` | "Nuestros Planes de Comidas" |
| `IMG.reserva.dias` | `public/img/Reserva/dias-visita.jpg` | "¿Cuántos días necesitas?" (castillo con Mickey y Minnie) |

## Comer (Dónde comer en Disneyland Paris)

| Clave en images.js | Archivo | Dónde se ve |
|---|---|---|
| `IMG.comer.hero` | `public/img/Comer/header.jpg` | HEADER de la página |
| `IMG.comer.tematicos[0..2]` | `tematico-1..3.jpg` | "¡Dale sabor a tu visita...!" (3 fotos) |
| `IMG.comer.opciones[0..3]` | `opcion-mesa / buffet / rapido / llevar.jpg` | Tarjetas "Descubre las diferentes opciones" |
| `IMG.comer.reservaIcono` | `reserva-icono.jpg` | Tarjeta "¡Reserva ya tu mesa!" |
| `IMG.comer.sinEntrada[0..2]` | `village.jpg`, `hoteles-restaurantes.jpg`, `hoteles-bares.jpg` | "Disfruta de una comida Disneyliciosa..." |
| `IMG.comer.cocina[0..2]` | `cocina-1..3.jpg` | "Explora nuestra cocina y nuestra filosofía" |
| `IMG.comer.gustos` | `gustos.jpg` | "¡Para todos los gustos!" |
| `IMG.comer.audio` | `audiodescripcion.png` | Tarjeta "¡NUEVO! ... audiodescripción" |
| `IMG.comer.encontraras[0..3]` | `encontraras-1..4.jpg` | "En Disneyland Paris, encontrarás..." |
| `IMG.comer.ninos[0..5]` | `ninos-1..6.jpg` | "¡Tus niños se chuparán los dedos!" ([1] = alta del centro) |
| `IMG.comer.personajes` | `personajes.jpg` | Comida con Personajes Disney |
| `IMG.comer.planes[0..2]` | `plan-1..3.jpg` | "¿Te alojas en un Hotel Disney?" |

## ParqueAdventureWorld

| Clave en images.js | Archivo | Dónde se ve |
|---|---|---|
| `IMG.parqueAdventure.logo` | `public/img/ParqueAdventureWorld/logo-adventure-world.png` | Logo "Disney Adventure World" del header (PNG transparente, centrado) |
| `IMG.parqueAdventure.video` | `public/img/ParqueAdventureWorld/hero.mp4` | Vídeo del header (opcional; si falta se ve la imagen). Botón de pausa incluido |
| `IMG.parqueAdventure.hero` | `public/img/ParqueAdventureWorld/hero.jpg` | Imagen del HEADER (fondo oscuro; también es el póster del vídeo) |
| `IMG.parqueAdventure.mapa` | `public/img/ParqueAdventureWorld/mapa.png` | Mapa del parque con FONDO TRANSPARENTE (cada mundo se levanta al pasar el ratón) |
| `IMG.parqueAdventure.banner` | `public/img/ParqueAdventureWorld/banner-mulan.jpg` | Banner ancho tras las atracciones (espectáculo de agua) |
| `IMG.parqueAdventure.restaurantes` | `public/img/ParqueAdventureWorld/restaurantes.jpg` | "Experiencias de restaurantes para todo aventurero" |
| `IMG.parqueAdventure.tiendas` | `public/img/ParqueAdventureWorld/tiendas.jpg` | "Llévate a casa un recuerdo de tu aventura" |
| `IMG.parqueAdventure.atracciones[0]` | `public/img/ParqueAdventureWorld/atraccion-1.jpg` | Carrusel de atracciones (6): Frozen Ever After, Ratatouille, Avengers Assemble: Flight Force, Raiponce Tangled Spin, Crush's Coaster, Cars Road Trip |
| `IMG.parqueAdventure.atracciones[1]` | `public/img/ParqueAdventureWorld/atraccion-2.jpg` | Carrusel de atracciones (6): Frozen Ever After, Ratatouille, Avengers Assemble: Flight Force, Raiponce Tangled Spin, Crush's Coaster, Cars Road Trip |
| `IMG.parqueAdventure.atracciones[2]` | `public/img/ParqueAdventureWorld/atraccion-3.jpg` | Carrusel de atracciones (6): Frozen Ever After, Ratatouille, Avengers Assemble: Flight Force, Raiponce Tangled Spin, Crush's Coaster, Cars Road Trip |
| `IMG.parqueAdventure.atracciones[3]` | `public/img/ParqueAdventureWorld/atraccion-4.jpg` | Carrusel de atracciones (6): Frozen Ever After, Ratatouille, Avengers Assemble: Flight Force, Raiponce Tangled Spin, Crush's Coaster, Cars Road Trip |
| `IMG.parqueAdventure.atracciones[4]` | `public/img/ParqueAdventureWorld/atraccion-5.jpg` | Carrusel de atracciones (6): Frozen Ever After, Ratatouille, Avengers Assemble: Flight Force, Raiponce Tangled Spin, Crush's Coaster, Cars Road Trip |
| `IMG.parqueAdventure.atracciones[5]` | `public/img/ParqueAdventureWorld/atraccion-6.jpg` | Carrusel de atracciones (6): Frozen Ever After, Ratatouille, Avengers Assemble: Flight Force, Raiponce Tangled Spin, Crush's Coaster, Cars Road Trip |
| `IMG.parqueAdventure.espectaculos[0]` | `public/img/ParqueAdventureWorld/espectaculo-1.jpg` | Espectáculos (3): Disney Cascade of Lights, Disney Princess Cavalcade, Mickey and the Magician |
| `IMG.parqueAdventure.espectaculos[1]` | `public/img/ParqueAdventureWorld/espectaculo-2.jpg` | Espectáculos (3): Disney Cascade of Lights, Disney Princess Cavalcade, Mickey and the Magician |
| `IMG.parqueAdventure.espectaculos[2]` | `public/img/ParqueAdventureWorld/espectaculo-3.jpg` | Espectáculos (3): Disney Cascade of Lights, Disney Princess Cavalcade, Mickey and the Magician |
| `IMG.parqueAdventure.personajes[0]` | `public/img/ParqueAdventureWorld/personaje-1.jpg` | Encuentros con Personajes (3, redondas): Hero Training Center, Encuentro de la Realeza, Encuentro con Woody |
| `IMG.parqueAdventure.personajes[1]` | `public/img/ParqueAdventureWorld/personaje-2.jpg` | Encuentros con Personajes (3, redondas): Hero Training Center, Encuentro de la Realeza, Encuentro con Woody |
| `IMG.parqueAdventure.personajes[2]` | `public/img/ParqueAdventureWorld/personaje-3.jpg` | Encuentros con Personajes (3, redondas): Hero Training Center, Encuentro de la Realeza, Encuentro con Woody |

## Categorias (páginas del menú lateral)

Las 8 categorías del menú del castillo (Parques, Películas, Series, Productoras, Videojuegos, Personajes, Historia de Disney y Más del mundo Disney) tienen cada una su página, todas con la misma plantilla (`src/pages/categoria/`).

Cada categoría tiene su carpeta `public/img/Categorias/<id>/` con un **LEEME.txt que lista los nombres exactos** de las imágenes:

| Carpeta | Página |
|---|---|
| `public/img/Categorias/parques/` | `/parques` |
| `public/img/Categorias/peliculas/` | `/peliculas` |
| `public/img/Categorias/series/` | `/series` |
| `public/img/Categorias/productoras/` | `/productoras` |
| `public/img/Categorias/videojuegos/` | `/videojuegos` |
| `public/img/Categorias/personajes/` | `/personajes` |
| `public/img/Categorias/historia/` | `/historia-de-disney` |
| `public/img/Categorias/mas/` | `/mas-del-mundo-disney` |

En cada carpeta: `hero.jpg` (header), `banner.jpg` (banner final) y una imagen por tarjeta (`<nombre-del-elemento>.jpg`). Si falta una, se ve un degradado.
Rutas definidas en `IMG.categorias` (`src/config/images.js`). Textos en `src/pages/categoria/categoriaData.js`; nombres de los elementos en `src/components/drawerData.js`.

## Página Explorar (`/explorar`)
| Carpeta | Contenido |
|---|---|
| `public/img/Explorar/atracciones/` | una foto por atracción: `adventure-isle.jpg`, `big-thunder-mountain.jpg`… |
| `public/img/Explorar/restaurantes/`, `entretenimiento/`, `eventos/`, `servicios/`, `hoteles/`, `parques/`, `tiendas/`, `spas/`, `deportes/`, `tours/` | igual: `<nombre-del-elemento>.jpg` |

El nombre del archivo es el nombre del elemento en minúsculas y con guiones (mira `slug` en `src/pages/explorar/explorarData.js`). Si falta una imagen se ve un degradado. Ruta definida en `IMG.explorar` (`src/config/images.js`).
