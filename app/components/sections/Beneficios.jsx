import '../../styles/Beneficios.css';

const beneficios = [
  {
    icon: '🧭',
    title: 'Clareza estratégica',
    text: 'Soluções pensadas para alinhar objetivos, processos e acolhimento.',
  },
  {
    icon: '💬',
    title: 'Comunicação mais eficaz',
    text: 'Práticas para reduzir ruídos, aumentar compreensão e fortalecer a colaboração.',
  },
  {
    icon: '⚡',
    title: 'Mais autonomia',
    text: 'Estruturas que ajudam cada pessoa a agir com mais segurança e confiança.',
  },
  {
    icon: '🌍',
    title: 'Impacto social',
    text: 'Contribuímos para ambientes mais éticos, humanos e inclusivos.',
  },
];

export default function Beneficios() {
  return (
    <section className="section beneficios-section" id="beneficios">
      <div className="container">
        <p className="section-label">04 — Benefícios</p>
        <h2 className="section-title">
          O que a <span className="gradient-text">NeuroStratégia</span> entrega
        </h2>
        <div className="beneficios-grid">
          {beneficios.map((item) => (
            <article className="beneficio-card" key={item.title}>
              <span className="beneficio-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}