# disney-web

Clon de la web de **Disneyland Paris** (página de inicio) hecho con **React + Vite**, **Bootstrap 5**, **Tailwind CSS 3** y **jQuery**. Es la base de una futura web Disney completa (hoteles, parques, películas, series...).

## Comandos

```bash
cd disney-web
npm install        # instala dependencias
npm run dev        # arranca en http://localhost:5173
npm run build      # compila a /dist
npm run preview    # prueba la versión compilada
```

## Estructura

```
disney-web/
├─ index.html              # entrada de Vite (monta React)
├─ public/img/             # IMÁGENES por página: comun/, inicio/, HotelEntradas/, Entradas/
├─ src/
│  ├─ main.jsx             # arranque React + Bootstrap + Tailwind
│  ├─ tailwind.css
│  └─ pages/index/         # cada página tiene su carpeta con CSS y JS propios
│     ├─ Home.jsx          # estructura (HTML en JSX)
│     ├─ index.css         # estilos de la página
│     └─ index.js          # funcionalidad con jQuery
```
Las páginas nuevas seguirán el mismo patrón: `src/pages/<pagina>/{Pagina.jsx, pagina.css, pagina.js}`.

## Qué hace cada tecnología
- **React**: componentes, datos en arrays y render de tarjetas.
- **Bootstrap**: rejilla (`row`/`col`), formularios, utilidades.
- **Tailwind**: utilidades (con `preflight` desactivado para no chocar con Bootstrap).
- **jQuery** (`index.js`): toda la interactividad, con limpieza al desmontar.

## Funcionalidades de la página de inicio
- Cabecera fija con menú, idioma, registro y botones *Entradas* / *Hotel + Entradas*; sombra al hacer scroll.
- Hero navideño con buscador: pestañas *Hotel + Entradas* / *Entradas*, fechas (con validación), hoteles, habitaciones y huéspedes.
- Secciones: Planifica tu viaje, La experiencia, Hoteles Disney, Por qué comprar con Disneyland Paris, Planifica tu día perfecto, Mundos mágicos, Información importante, App y Newsletter.
- **Carrusel de hoteles**: se desliza solo cada 3,5 s, flechas, puntos, pausa al pasar el ratón, adaptable a móvil.
- **Botón "Comentarios"** (lateral derecho): ventana con 3 opciones (sección, web en general, reserva), formulario y mensaje de agradecimiento; se cierra con ×, clic fuera o Esc.
- Animaciones de aparición al hacer scroll, hover en tarjetas y botones, `prefers-reduced-motion` respetado.

## Submenú de la cabecera
Los 5 menús (Los 2 Parques, Alojamientos, Restaurantes, Reserva tu viaje, Antes de venir) se definen en el objeto `MENUS` de `Home.jsx`. Se abren al pasar el ratón o con clic, y se cierran al salir o con Esc (lógica en `index.js`, estilos `.mega-*` en `index.css`). Visibles solo en pantallas ≥ 992 px.

## Imágenes
Todas en `public/img/` (subcarpetas `comun`, `inicio`, `HotelEntradas`, `Entradas`). Las rutas se definen **solo** en `src/config/images.js`; `RUTAS-IMAGENES.md` lista cada imagen, su carpeta y dónde se ve. Cada carpeta tiene un `LEEME.txt` con los nombres esperados.

## Próximos pasos
Páginas de hoteles, parques, películas y series, cada una con su `.css` y `.js` independientes.


---
## Página 2: Hotel + Entradas (`/hoteles`)
Carpeta `src/pages/hoteles/` (`Hoteles.jsx`, `hoteles.css`, `hoteles.js`). Se llega desde el botón *Hotel + Entradas* de la cabecera, *Ver todos los hoteles* o el buscador de inicio (pasa las fechas por la URL). Ahora hay rutas con `react-router-dom` (ver `src/main.jsx`).

**Funcionalidades**
- Cabecera con pasos (Hotel · Extras · Contacto · Resumen) y barra de fechas/huéspedes con **Modificar/Cerrar**: cambia fechas, hotel y habitaciones y pulsa **Buscar**.
- Tarjetas de los 6 Hoteles Disney con carrusel de fotos, estrellas, distancia, **Mostrar más**, precio por noches (**Más detalles** abre *Información de precios* con pestañas Resumen / Condiciones) y botón *Ver las habitaciones*.
- Si el hotel no tiene disponibilidad: "No es posible realizar una reserva en esta fecha". *(Disponibilidad y precios son simulados: `Hoteles.jsx`, array `HOTELS`; sustitúyelos por datos reales.)*
- **Compara todo**: ventana a pantalla completa con la tabla de 9 alojamientos (tema, distancia, autobús, Extra Magic Time, encuentros, MagicPass) con scroll horizontal.
- **Ver mapa**: mapa de alojamientos con pines; al pasar el ratón por cada pin aparece el hotel con foto y datos.
- Alojamientos Asociados, métodos de pago, pie de página con 4 pestañas (Información legal, Ayuda, Más sobre Disneyland Paris, Sitios web relacionados), contacto y botón lateral **Comentarios**.
- Todo se cierra con ✕ o Esc.



---
## Página 3: Entradas (`/entradas`)
Carpeta `src/pages/entradas/` (`Entradas.jsx`, `entradas.css`, `entradas.js`). Se abre desde el botón *Entradas* de la cabecera.
- Cabecera con submenú + **imagen header** (`IMG.entradas.header`) + pestañas (Entradas Flexibles, Otras Entradas, Extras mágicos, Entradas con tarifas especiales).
- **Al bajar pasadas las pestañas, la cabecera se sustituye por una barra fija con esas pestañas**; resalta la sección en la que estás (scroll-spy) y al pulsar hace scroll suave.
- ¿Cuántos días dura tu visita? (1 día / 2 a 4 días) cambia los paquetes; **Ver precios** abre una ventana (precios de ejemplo).
- Entradas sin fecha, ventajas, Otras Entradas, banner de Parques con pestañas (Disneyland / 2 Parques / Adventure World, con animación), Extras mágicos, Antes de venir, tarifas especiales, hoteles temáticos, preguntas frecuentes y condiciones (acordeón), métodos de pago, pie de página y **Comentarios**.
- `Header.jsx` y `Footer.jsx` están en `src/components/` para reutilizarlos en las siguientes páginas.


---
## Cabecera común (todas las páginas excepto Hotel + Entradas e Idioma)
`src/components/Header.jsx` (+ `header.js` con jQuery y `menus.jsx` con los datos del submenú). Se edita **una sola vez** y cambia en todas las páginas.
- El **logo** vuelve a la página de inicio. El **menú** está centrado bajo el logo.
- A la derecha: **Horarios de los Parques** (a la izquierda de la lupa) · 🔍 · idioma · Registrarse.
- **Lupa**: abre un buscador; al enviar lleva a `/buscar?q=...`.

## Página 4: Horarios de los Parques (`/horarios`)
`src/pages/horarios/`. Imagen header, **calendario** (cambia de mes y de día; el día elegido actualiza los horarios y el Extra Magic Time; los días pasados están desactivados), aviso de entradas, selector **Parque Disneyland / Disney Adventure World**, pestañas **Atracciones / Personajes / Entretenimiento**, filtros (abiertas, intereses, ordenar por nombre o zona) y **carrusel** con flechas y puntos. Al final, enlaces a Hoteles y Entradas. *(Horarios y tarjetas de ejemplo, array `CARDS`.)*

## Página 5: Buscar resultados (`/buscar`)
`src/pages/buscar/`. Muestra "N resultados encontrados para "texto"" con atracciones, tiendas y restaurantes (datos de ejemplo en `DATA`, búsqueda sin distinguir mayúsculas ni tildes) y los resultados aparecen con animación.

## Página 6: Idioma (`/idioma`)
`src/pages/idioma/`. "Choose one of our websites": España vuelve a esta web; el resto abre la web oficial de Disneyland Paris (ajusta los enlaces en `Idioma.jsx`). Recuerda la elección.

## Página 7: Registrarse (`/registro`)
`src/pages/registro/`. Imagen header y tarjeta "¡Deja que la magia fluya!". **Crear cuenta** y **Registrarse** abren la misma ventana **MyDisney** (correo + Continuar, con validación; es una demo, no envía datos). Se cierra con ✕ o Esc.

Todas llevan el botón lateral **Comentarios** (`components/Feedback.jsx` + `feedback.js`). Las imágenes nuevas están en `public/img/Horarios`, `Buscar` y `Registro` (ver `RUTAS-IMAGENES.md`).


---
## Menú lateral "Mundo Disney" (castillo)
El **castillo** (`IMG.comun.castillo`) está a la izquierda de la cabecera común. Al pulsarlo se abre desde la izquierda un menú con la misma estética (cabecera degradada, botones redondeados, azul Disney) que se cierra con ✕, clic fuera o Esc.
- **Parques** (París, Orlando, Anaheim, Tokio, Hong Kong, Shanghái, Aulani, cruceros), **Películas** y **Series** (por géneros), **Productoras** (Disney, Pixar, Marvel, Lucasfilm/Star Wars, 20th Century/Fox, Searchlight, ABC, ESPN, Hulu, National Geographic…), **Videojuegos** (PlayStation, Xbox, Nintendo, PC, móvil, LEGO…), **Personajes**, **Historia de Disney** (Walt y Roy, 1923, Mickey, Blancanieves, Disneyland…) y **Más del mundo Disney**.
- Categorías en acordeón (una abierta a la vez) y **buscador** dentro del menú.
- Todo el contenido está en `src/components/drawerData.js` (añadir categorías o elementos es editar ese archivo); el HTML en `Drawer.jsx`, la lógica jQuery en `header.js` y los estilos `.dr-*` en `index.css`.


---
## Página 8: Parque Disneyland (`/parque-disneyland`)
Carpeta `src/pages/parque/` (`Parque.jsx` = plantilla, `parqueDisneylandData.js` = contenido, `parque.css`, `parque.js`, calendario en `src/components/PriceCalendar.jsx`). Se abre desde *Los 2 Parques → Parque Disneyland* del menú, desde el menú lateral (Disneyland Paris) y desde el pill "Parque Disneyland".
- **Barra fija:** al bajar más allá del selector *Parque Disneyland | Disney Adventure World*, la cabecera se sustituye por una barra fija con ese selector.
- Imagen header, tarjeta de bienvenida con 4 destacados, **mapa** con 5 pines (al pasar el ratón sale la tierra y su descripción) y botón **Ver el mapa** (ventana grande).
- **Carrusel** de atracciones emblemáticas, banner nocturno, espectáculos y cabalgatas, encuentros con Personajes (fotos redondas), restaurantes, tiendas, temporadas.
- **Calendario de precios estimados** (2 meses): duración, hotel, habitaciones/huéspedes, precio por persona o coste total, filtro de precio con deslizadores, selección de fecha y *Continuar con la selección* (lleva a `/hoteles` con las fechas). Precios de ejemplo calculados con una fórmula.
- Entradas, días necesarios, **16 preguntas frecuentes** (acordeón), condiciones y el mismo pie de página.
- (Disney Adventure World ya tiene su página, ver abajo): usará la misma plantilla `Parque.jsx` con su propio archivo de datos y su mapa (`mapadisneyworld.jpg`).
- Imágenes en `public/img/ParqueDisneyland/` (rutas en `src/config/images.js`, lista en `RUTAS-IMAGENES.md`). `mapa.jpg` es una copia de tu mapa de prueba.


---
## Página 9: Entradas con fecha y Paquetes (`/entradas-y-paquetes`)
Carpeta `src/pages/reserva/` (`Reserva.jsx`, `reserva.css`, `reserva.js`). Se abre desde *Reserva tu viaje → Entradas con fecha y Paquetes de Hotel para Disneyland Paris* (y *Reservar un Paquete…* / *Comprar Entradas…* llevan a Hoteles y Entradas).
- Cabecera con la torre de Adventure World y el castillo, y dos tarjetas (**Entradas con fecha** → `/entradas`, **Paquete Hotel + Entradas** → `/hoteles`) con **Compara todas las ventajas** (ventana comparativa).
- Separadores con estrellas, **opciones mágicas** (Extras y Planes de Comidas) y el **calendario de precios estimados** (el mismo componente compartido que usa el Parque Disneyland).
- 5 tarjetas con cinta de "¿Por qué comprar directamente con Disneyland Paris?" y ventana de condiciones de reserva, "¿Cuántos días necesitas?", preguntas frecuentes (acordeón) y pie de página.
- Imágenes en `public/img/Reserva/` (rutas en `src/config/images.js`). Los PNG de la torre y el castillo deben tener fondo transparente.


---
## Página 10: Dónde comer en Disneyland Paris (`/donde-comer`)
Carpeta `src/pages/comer/` (`Comer.jsx`, `comer.css`, `comer.js`). Se abre desde *Restaurantes → Dónde comer en Disneyland Paris* (y *Nuestros Planes de Comidas* lleva a `/donde-comer#planes`).
- Imagen header con base curva y tarjeta de 4 pestañas (Restaurantes temáticos, Cocina, Comidas con Personajes, Planes de comidas); al bajar se convierte en barra fija con scroll-spy.
- Opciones para comer (mesa, buffet, servicio rápido, para llevar), app móvil, Disney Village y Hoteles, valores, menús, sección de niños, Personajes, Planes de comidas y valoración de la página.
- Imágenes en `public/img/Comer/` (rutas en `src/config/images.js`).


---
## Página: Disney Adventure World (`/disney-adventure-world`)
Usa la misma plantilla que el Parque Disneyland (`src/pages/parque/Parque.jsx`) con su archivo de datos `parqueAdventureData.js`. El tema oscuro (`.adv`) está en `parque.css`.
- **Header oscuro** con el logo (`IMG.parqueAdventure.logo`), vídeo opcional de fondo con **botón de pausa** y el selector *Parque Disneyland | Disney Adventure World*. Al bajar, la cabecera se sustituye por la barra fija (el otro botón lleva a `/parque-disneyland`).
- Tarjeta morada de bienvenida con 4 destacados y **Ver los horarios de apertura**.
- **Mapa por mundos:** World of Frozen, Avengers Campus, Adventure Way, Worlds of Pixar y World Premiere Plaza. **Cada mundo se levanta con sombra al pasar el ratón** y muestra su nombre (en táctil, al pulsar). Se recortan sobre un único PNG transparente (`mapa.png`, que ya está en la carpeta); si algún recorte no encaja, ajusta los puntos `poly` de `parqueAdventureData.js`. **Ver el mapa** abre la versión grande.
- Carrusel de atracciones inmersivas, banner, espectáculos (carrusel), personajes con aro degradado, restaurantes y tiendas, calendario de precios, entradas, días, **24 preguntas frecuentes**, condiciones y pie de página.
- Imágenes en `public/img/ParqueAdventureWorld/` (las de entradas y días se comparten con el Parque Disneyland).


---
## Página: Explorar Disneyland Paris (`/explorar`)
Carpeta `src/pages/explorar/` (`Explorar.jsx`, `explorar.css`, `explorar.js`, `explorarData.js`). Es la página a la que llevan **todos los botones "Ver todos…"** del sitio, igual que en la web original:
- Arriba: **Lista / Mapa**, desplegable de **ubicación** (Parque Disneyland, Disney Adventure World, Disney Village y hoteles; se pueden marcar varios; lo que no tiene resultados para el tipo elegido sale en gris) y desplegable de **tipo** (Todas las actividades, Atracciones, Restaurantes, Entretenimiento, Eventos, Servicios para visitantes, Hoteles, Parques y Destinos, Tiendas, Spas, Deportes y Ocio, Tours) con buscador.
- **Filtrar por**: Intereses, Altura, Edades y Accesibilidad y Consejos (en Atracciones); Intereses en Restaurantes, Entretenimiento y Hoteles. **Ordenar por**: Selecciones de Disney / A-Z / Z-A.
- La URL manda qué se ve y se actualiza sola al cambiar filtros: `/explorar?tipo=atracciones&parque=disneyland` · `tipo=restaurantes&parque=hoteles` · `tipo=entretenimiento&interes=personajes`.
- Dónde están enlazados los botones: Parque Disneyland y Disney Adventure World (atracciones, espectáculos, Encuentros con Personajes, restaurantes, tiendas) · Horarios de los Parques (botón bajo el carrusel, cambia según pestaña y parque) · Dónde comer · Hoteles Disney · Inicio (hoteles) · submenú de la cabecera (Ver todos los Hoteles / restaurantes).
- Elementos de la lista y textos → `explorarData.js`. Imágenes → `public/img/Explorar/<tipo>/<nombre-del-elemento>.jpg` (ruta en `IMG.explorar`, `src/config/images.js`). Si falta una imagen se ve un degradado.


---
## Cabecera: Marvel y Star Wars, castillo y botones
- En el centro: logo de **Marvel** (izquierda) · logo de **Disneyland Paris** · logo de **Star Wars** (derecha). Enlazan a `https://marvelwebfan.netlify.app/` y `https://ivanrequenapuig.github.io/StarWars/` (se abren en pestaña nueva). Los enlaces están al principio de `src/components/Header.jsx` (`WEB_MARVEL`, `WEB_STARWARS`).
- Imágenes: `public/img/comun/marvel.png` y `starwars.png` (recortes de `public/img/Webs/`); rutas en `IMG.comun` (`src/config/images.js`).
- A la derecha: **castillo + Horarios de los Parques + lupa + idioma + Registrarse**. A la izquierda: botones **Entradas** y **Hotel + Entradas**, en la misma fila que los logos (se ajusta el margen en `index.css`, `.dl-top > .dl-cta`).
- En pantallas medianas (< 1300 px) las herramientas pasan debajo del logo; en móvil se ocultan Marvel y Star Wars.
