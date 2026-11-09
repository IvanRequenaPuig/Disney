import { useState } from 'react'
import { DRAWER } from './drawerData.js'
import { IMG } from '../config/images.js'

// Imágenes editoriales para que todas las categorías tengan tarjetas visuales.
const IMAGE_POOL = [
  'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1440404653325-ab127d49adece?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1518709594023-6eab9ec7aefb?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=85',
]

export default function Drawer() {
  const [activeId, setActiveId] = useState(DRAWER[0]?.id || '')
  const activeCategory = DRAWER.find(category => category.id === activeId) || DRAWER[0]

  return (
    <>
      <button className="dr-ov" aria-label="Cerrar menú" type="button" />
      <aside className="dr" aria-label="Menú Mundo Disney">
        <div className="dr-head">
          <img src={IMG.comun.castillo} alt="Mundo Disney" />
          <span className="dr-head-line" aria-hidden="true" />
          <div className="dr-head-caption"><strong>Explora el universo Disney</strong><small>Parques, historias y personajes</small></div>
          <button className="dr-x" aria-label="Cerrar menú" type="button"><span>×</span></button>
        </div>
        <div className="dr-layout">
          <nav className="dr-list" aria-label="Categorías Disney">
            <div className="dr-list-title">EXPLORAR</div>
            {DRAWER.map(category => (
              <button
                className={`dr-btn${activeId === category.id ? ' on' : ''}`}
                key={category.id}
                type="button"
                aria-expanded={activeId === category.id}
                onClick={() => setActiveId(category.id)}
              >
                <span className="dr-ic" aria-hidden="true">{category.icon}</span>
                <span className="dr-lb">{category.label}</span>
                <span className="dr-count">{category.items.length}</span>
                <span className="dr-chevron" aria-hidden="true">›</span>
              </button>
            ))}
          </nav>
          <section className="dr-content" aria-live="polite">
            {activeCategory && <>
              <div className="dr-content-head">
                <div className="dr-content-icon" aria-hidden="true">{activeCategory.icon}</div>
                <div><span className="dr-eyebrow">DESCUBRE EL UNIVERSO DISNEY</span><h2>{activeCategory.label}</h2></div>
                <span className="dr-content-count">{activeCategory.items.length} experiencias</span>
              </div>
              <div className="dr-content-grid">
                {activeCategory.items.map((item, itemIndex) => {
                  const image = item[3] || IMAGE_POOL[(itemIndex + DRAWER.findIndex(c => c.id === activeCategory.id) * 3) % IMAGE_POOL.length]
                  return <a className="dr-feature-card" href={item[2] || '#'} key={`${activeCategory.id}-${item[0]}`}>
                    <span className="dr-feature-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(13,18,42,0) 20%, rgba(13,18,42,.82) 100%), url("${image}")` }} aria-hidden="true" />
                    <span className="dr-feature-copy"><b>{item[0]}</b>{item[1] && <small>{item[1]}</small>}</span>
                    <span className="dr-feature-arrow" aria-hidden="true">↗</span>
                  </a>
                })}
              </div>
            </>}
          </section>
        </div>
        <div className="dr-foot"><a href="/">← <span>Volver al inicio</span></a><small>UN MUNDO DE MAGIA TE ESPERA</small></div>
      </aside>
    </>
  )
}
