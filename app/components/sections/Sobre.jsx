import '../../styles/Sobre.css';

const stats = [
  { number: '15–20%', label: 'da população é neurodivergente' },
  { number: '+30%', label: 'mais inovação em equipes diversas' },
  { number: 'Lei 8.213', label: 'cotas para PcD no Brasil' },
];

export default function Sobre() {
  return (
    <section className="section sobre-section" id="sobre">
      <div className="container">
        <div className="sobre-grid">
          <div className="sobre-text">
            <p className="section-label">01 — Quem nós somos</p>
            <h2 className="section-title">
              Somos a{' '}
              <span className="gradient-text">NeuroStratégia</span>
            </h2>
            <p>
              A NeuroStratégia é um projeto que conecta estratégia, inclusão e
              neurodiversidade para criar ambientes mais humanos, produtivos e
              acolhedores.
            </p>
            <p>
              Nosso objetivo é apoiar pessoas, empresas e instituições a
              reconhecerem o potencial de cada perfil cognitivo e a desenvolverem
              práticas que valorizem pertencimento, autonomia e aprendizagem.
            </p>
            <div className="stat-row">
              {stats.map((s) => (
                <div className="stat-card" key={s.number}>
                  <div className="stat-number gradient-text">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="sobre-visual" aria-hidden="true">
            <div className="circle-group">
              <div className="big-circle">
                <div className="inner-text">
                  <span className="inner-emoji">🤝</span>
                  <p>Inclusão<br />estratégica</p>
                </div>
              </div>
              <div className="orbit orbit-1"><div className="orbit-dot dot-teal" /></div>
              <div className="orbit orbit-2"><div className="orbit-dot dot-purple" /></div>
              <div className="orbit orbit-3"><div className="orbit-dot dot-gold" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}