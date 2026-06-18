import { useState } from 'react';
import '../../styles/Contato.css';

const EMAIL_DESTINO = 'contato@neurostrategia.com';

export default function Contato() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleReset() {
    setFormData({ name: '', email: '', message: '' });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const body = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      message: formData.message,
      _subject: 'Mensagem enviada pelo site NeuroStratégia',
    });
    window.location.href = `https://formsubmit.co/${EMAIL_DESTINO}?${body.toString()}`;
  }

  return (
    <section className="section contato-section" id="contato">
      <div className="container">
        <div className="contato-grid">
          <div>
            <p className="section-label">05 — Contato</p>
            <h2 className="section-title">
              Vamos conversar sobre <span className="gradient-text">seu projeto</span>
            </h2>
            <p className="section-sub">
              Entre em contato para falar sobre inclusão, estratégia e desenvolvimento de soluções para sua organização.
            </p>
            <div className="contato-card">
              <span className="contato-icon"></span>
              <a href={`mailto:${EMAIL_DESTINO}`}>{EMAIL_DESTINO}</a>
            </div>
            <div className="contato-card">
              <span className="contato-icon"></span>
              <span>São Paulo · Brasil</span>
            </div>
          </div>

          <form className="contato-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nome</label>
              <input name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>E-mail</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Mensagem</label>
              <textarea name="message" rows="6" value={formData.message} onChange={handleChange} required />
            </div>
            <div className="form-acoes">
              <button type="button" className="btn-limpar" onClick={handleReset}>Limpar</button>
              <button type="submit" className="btn-primary">Enviar mensagem</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}