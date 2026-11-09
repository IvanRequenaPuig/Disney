import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './tailwind.css'
import Home from './pages/index/Home.jsx'
import Hoteles from './pages/hoteles/Hoteles.jsx'
import HotelesDisney from './pages/hotelesDisney/HotelesDisney.jsx'
import Entradas from './pages/entradas/Entradas.jsx'
import Horarios from './pages/horarios/Horarios.jsx'
import Buscar from './pages/buscar/Buscar.jsx'
import Idioma from './pages/idioma/Idioma.jsx'
import Registro from './pages/registro/Registro.jsx'
import Parque from './pages/parque/Parque.jsx'
import Reserva from './pages/reserva/Reserva.jsx'
import Comer from './pages/comer/Comer.jsx'
import parqueDisneyland from './pages/parque/parqueDisneylandData.js'
import parqueAdventure from './pages/parque/parqueAdventureData.js'
import Explorar from './pages/explorar/Explorar.jsx'
import Categoria from './pages/categoria/Categoria.jsx'
import { CATEGORIAS, ORDEN } from './pages/categoria/categoriaData.js'
import { initTranslate } from './components/translate.js'

// Si se eligió otro idioma en /idioma, traduce toda la web
initTranslate()

// Una ruta por página. Cada página tiene su carpeta con su .jsx, .css y .js
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hoteles" element={<Hoteles />} />
      <Route path="/hoteles-disney" element={<HotelesDisney />} />
      <Route path="/entradas" element={<Entradas />} />
      <Route path="/horarios" element={<Horarios />} />
      <Route path="/buscar" element={<Buscar />} />
      <Route path="/idioma" element={<Idioma />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/parque-disneyland" element={<Parque data={parqueDisneyland} />} />
      <Route path="/disney-adventure-world" element={<Parque data={parqueAdventure} />} />
      <Route path="/entradas-y-paquetes" element={<Reserva />} />
      <Route path="/donde-comer" element={<Comer />} />
      {/* Página Explorar: todos los botones "Ver todos…" llevan aquí → /explorar?tipo=atracciones&parque=disneyland */}
      <Route path="/explorar" element={<Explorar />} />
      {/* Páginas del menú lateral: una por categoría, todas con la misma plantilla (src/pages/categoria/) */}
      {ORDEN.map(k => <Route key={k} path={'/' + CATEGORIAS[k].ruta} element={<Categoria cat={k} />} />)}
    </Routes>
  </BrowserRouter>
)
