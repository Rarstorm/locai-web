import React, { useState, useEffect } from 'react'

/* ===== NAV ===== */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' nav--solid' : ''}`}>
      <div className="container nav-inner">
        <a href="#" className="nav-logo">
          <img src="/logo.png" alt="LocAI" />
        </a>
        <div className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#para-quien">Para quién</a>
          <a href="#contacto" className="nav-cta">Contacto</a>
        </div>
      </div>
    </nav>
  )
}

/* ===== DATA ===== */
const services = [
  {
    icon: '🤖',
    title: 'Asistente Inteligente WhatsApp',
    desc: 'Agente con IA montado en n8n que conoce los datos reales de tu negocio — horarios, precios, servicios, inventario. Captura leads automáticamente.',
  },
  {
    icon: '🎬',
    title: 'Video Profesional',
    desc: 'Video promocional de 30–60 segundos, guión con IA, editado en DaVinci Resolve. Listo para Instagram, TikTok y YouTube Shorts.',
  },
  {
    icon: '📹',
    title: 'Capacitación y Soporte',
    desc: 'Video de capacitación + 2 semanas de soporte por WhatsApp. Opcional: mantenimiento mensual con 1 video nuevo al mes.',
  },
]

const pains = [
  { icon: '⏰', text: 'Pierdes horas contestando lo mismo en WhatsApp' },
  { icon: '📱', text: 'No tienes contenido profesional para redes' },
  { icon: '⚙️', text: 'Quieres automatizar sin saber programar' },
  { icon: '💰', text: 'Sabes que la IA existe pero no sabes por dónde empezar' },
]

/* ===== APP ===== */
export default function App() {
  return (
    <div className="app">
      <Nav />

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-left">
            <div className="hero-tag">LOCAI · AUTOMATIZACIÓN E IA</div>
            <h1 className="hero-title">
              Automatiza lo que te quita tiempo.
              <br />
              <span className="accent">Crea contenido que atrae clientes.</span>
            </h1>
            <p className="hero-desc">
              Ayudo a negocios locales de Querétaro a usar IA sin complicaciones
              — automatización de WhatsApp, video profesional y soporte real.
              Sin saber programar.
            </p>
            <div className="hero-actions">
              <a href="#contacto" className="btn btn-primary">
                Cuéntame tu proyecto
              </a>
              <a href="#servicios" className="btn btn-outline">
                Ver servicios →
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card">
              {/* Abstract dashboard-like visual */}
              <div className="hc-header">
                <span className="hc-dot hc-dot--g" />
                <span className="hc-dot hc-dot--y" />
                <span className="hc-dot hc-dot--b" />
              </div>
              <div className="hc-body">
                <div className="hc-row">
                  <div className="hc-label">Consultas</div>
                  <div className="hc-value">+47%</div>
                </div>
                <div className="hc-bar">
                  <div className="hc-bar-fill" style={{ width: '78%' }} />
                </div>
                <div className="hc-row">
                  <div className="hc-label">Leads capturados</div>
                  <div className="hc-value">124</div>
                </div>
                <div className="hc-bar">
                  <div className="hc-bar-fill" style={{ width: '62%' }} />
                </div>
                <div className="hc-row">
                  <div className="hc-label">Tiempo ahorrado/sem</div>
                  <div className="hc-value">~8h</div>
                </div>
                <div className="hc-bar">
                  <div className="hc-bar-fill" style={{ width: '90%' }} />
                </div>
              </div>
              <div className="hc-footer">
                <span className="hc-badge">✓ Automatizado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICIOS ===== */}
      <section className="servicios" id="servicios">
        <div className="container">
          <div className="section-label">SERVICIOS</div>
          <h2 className="section-title">Todo lo que necesitas en un solo lugar</h2>
          <p className="section-desc">
            De la automatización al contenido visual. Un ecosistema pensado para
            negocios locales que quieren resultados reales.
          </p>
          <div className="cards">
            {services.map((s, i) => (
              <div className="card" key={i}>
                <div className="card-icon">{s.icon}</div>
                <h3 className="card-title">{s.title}</h3>
                <p className="card-text">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARA QUIÉN ===== */}
      <section className="para-quien" id="para-quien">
        <div className="container">
          <div className="section-label">PARA QUIÉN</div>
          <h2 className="section-title">
            Dueños de negocios en <span className="accent">Querétaro</span>
          </h2>
          <p className="section-desc">
            Si esto te suena familiar, podemos trabajar juntos.
          </p>
          <div className="pains">
            {pains.map((p, i) => (
              <div className="pain-item" key={i}>
                <span className="pain-icon">{p.icon}</span>
                <span className="pain-text">{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta" id="contacto">
        <div className="container">
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>
            CONTACTO
          </div>
          <h2 className="cta-title">¿Listo para empezar?</h2>
          <p className="cta-desc">
            Hablemos de lo que tu negocio necesita. Sin compromiso.
          </p>
          <a href="#" className="btn btn-cta">Contáctame por WhatsApp</a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/logo.png" alt="LocAI" className="footer-logo" />
            <p className="footer-claim">IA para negocios locales.</p>
          </div>
          <div className="footer-links">
            <a href="#servicios">Servicios</a>
            <a href="#para-quien">Para quién</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div className="footer-bottom">
            <p>LocAI — Querétaro, México</p>
          </div>
        </div>
      </footer>
    </div>
  )
}