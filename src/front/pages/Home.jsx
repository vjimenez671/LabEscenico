import React, { useState } from "react";
import "../styles/Home.css";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hola Director. Estoy conectado al ecosistema de la Sala. ¿Qué deseas gestionar hoy? Puedes pedirme actualizar montajes, revisar correos de Outlook o cambiar estados de checklist."
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Agregar mensaje del usuario
    const userMessage = { sender: "user", text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulación de respuesta del Agente de Sala
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: `Entendido, Director. Procesando tu instrucción de control: "${userMessage.text}". Conectando con los servicios de la sala...`
        }
      ]);
    }, 1000);
  };

  return (
    <div className="home-unique-context">
      <div className="home-container">
        
        {/* ENCABEZADO */}
        <header className="home-premium-header">
          <div>
            <span className="home-tag-premium">Sala Laboratorio Escénico</span>
            <h1 className="home-display-h1">Panel de <span>Control Operacional.</span></h1>
          </div>
          <div className="ai-live-indicator">
            <div className="pulse-dot"></div>
            <p>Agente de Sala: <span className="status-highlight">Activo</span></p>
          </div>
        </header>

        {/* COPILOTO DE VOZ */}
        <section className="home-card-premium voice-copilot-section">
          <div className="voice-layout">
            <div className="voice-info">
              <h3>Copiloto de Voz Directo</h3>
              <p>Presiona el micrófono para dictar cambios rápidos en la iluminación, bitácoras de sala o alertas técnicas sin usar el teclado.</p>
              <div className="speech-transcription-preview">
                <span>[Escuchando...] "Javi, deja registro de que la compañía entregó las llaves hoy a las 11:30"</span>
              </div>
            </div>
            <button className="mic-trigger-btn listening">
              <i className="fas fa-microphone"></i>
            </button>
          </div>
        </section>

        {/* WORKSPACE LAYOUT COMPLETAMENTE CENTRADO */}
        <div className="home-workspace-layout">
          
          {/* COLUMNA IZQUIERDA: OPERACIONES */}
          <div className="operations-column">
            
            {/* CARTELERA ACTUAL */}
            <article className="home-card-premium live-show-card">
              <span className="card-badge live">En Cartelera</span>
              <span className="company-subtitle">Cía. Teatro del Mañana</span>
              <h2>El Gesto Infinito</h2>
              
              <div className="operational-checklist">
                <div className="check-item done">
                  <i className="fas fa-check-circle"></i>
                  <p>Ficha técnica de iluminación y audio cargada PostgreSQL</p>
                </div>
                <div className="check-item done">
                  <i className="fas fa-check-circle"></i>
                  <p>Llaves de la sala entregadas a dirección de compañía</p>
                </div>
                <div className="check-item">
                  <i className="far fa-circle"></i>
                  <p>Validación de bitácora de cierre inteligente del espacio</p>
                </div>
              </div>
              <footer className="show-dates-footer">
                <p><i className="far fa-calendar-alt"></i> Temporada: 05 de Julio - 18 de Julio, 2026</p>
              </footer>
            </article>

            {/* PRÓXIMOS MONTAJES */}
            <main className="home-card-premium upcoming-shows-card">
              <h3>Próximas Temporadas de Sala</h3>
              <div className="upcoming-list-stack">
                <div className="upcoming-show-item">
                  <div className="show-meta">
                    <h4>Cuerpo Resonante</h4>
                    <span>Cía. Danza Sur • 22 Jul - 02 Ago</span>
                  </div>
                  <div className="status-badges-group">
                    <span className="badge-tag approved">Aprobada</span>
                  </div>
                </div>
                <div className="upcoming-show-item">
                  <div className="show-meta">
                    <h4>Sombras en la Red</h4>
                    <span>Colectivo Intermedia • 05 Ago - 15 Ago</span>
                  </div>
                  <div className="status-badges-group">
                    <span className="badge-tag pending">Pendiente Docs</span>
                  </div>
                </div>
              </div>
            </main>
          </div>

          {/* COLUMNA DERECHA: CRONOLOGÍA */}
          <aside className="home-card-premium logs-card">
            <div className="logs-card-header">
              <h3>Historial del Ecosistema</h3>
              <i className="fas fa-robot ai-card-icon"></i>
            </div>
            <p className="section-description">Últimas acciones tomadas de forma autónoma o asistida por la IA en la sala.</p>
            
            <div className="logs-timeline-stack">
              <div className="timeline-log-item voice">
                <div className="log-icon-wrapper"><i className="fas fa-comment-alt"></i></div>
                <div className="log-content-area">
                  <p><strong>Llaves Entregadas:</strong> Javi procesó nota de voz e interactuó con el checklist operacional.</p>
                  <span className="log-time-stamp">Hoy, 11:32 AM</span>
                </div>
              </div>
              <div className="timeline-log-item outlook">
                <div className="log-icon-wrapper"><i className="fas fa-envelope"></i></div>
                <div className="log-content-area">
                  <p><strong>Outlook Sincronizado:</strong> Leídos 4 correos nuevos de solicitudes de reserva para Septiembre.</p>
                  <span className="log-time-stamp">Hoy, 09:15 AM</span>
                </div>
              </div>
            </div>
          </aside>

        </div>

        {/* FOOTER */}
        <footer className="home-premium-footer">
          <div className="footer-line"></div>
          <p>Sistema de Gestión de Espacios Escénicos • Universidad</p>
        </footer>

        {/* --- BOTÓN FLOTANTE DEL AGENTE --- */}
        <button 
          className={`agent-floating-trigger ${isChatOpen ? "active" : ""}`}
          onClick={() => setIsChatOpen(!isChatOpen)}
          title="Abrir Asistente de Dirección"
        >
          {isChatOpen ? <i className="fas fa-times"></i> : <i className="fas fa-robot"></i>}
        </button>

        {/* --- SIDEBAR CHAT (ASISTENTE SLIDE-OUT) --- */}
        <div className={`agent-sidebar-chat ${isChatOpen ? "open-chat" : ""}`}>
          <div className="chat-header">
            <div className="chat-header-title">
              <i className="fas fa-robot"></i>
              <div>
                <h4>Copiloto de Dirección</h4>
                <span>Agente de Sala Virtual</span>
              </div>
            </div>
          </div>

          <div className="chat-messages-container">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-bubble-row ${msg.sender}`}>
                <div className="chat-bubble">
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          <form className="chat-input-area" onSubmit={handleSendMessage}>
            <input 
              type="text" 
              placeholder="Pídele un update de correos, agregar obras..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}