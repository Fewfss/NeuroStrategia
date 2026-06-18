import '../../styles/MissaoVisaoValores.css';

const itens = [
  {
    title: 'Missão',
    text: 'Promover ambientes de trabalho mais inclusivos, humanos e estratégicos para pessoas neurodivergentes.',
  },
  {
    title: 'Visão',
    text: 'Construir uma sociedade e organizações que reconheçam o valor da diversidade cognitiva como diferencial de inovação e pertencimento.',
  },
  {
    title: 'Valores',
    text: 'Empatia, respeito, transparência, acessibilidade, aprendizagem contínua e valorização das diferenças.',
  },
];

export default function MissaoVisaoValores() {
  return (
    <section className="section mvv-section" id="missao-visao-valores">
      <div className="container">
        <p className="section-label">02 — Missão, visão e valores</p>
        <h2 className="section-title">
          Nossa <span className="gradient-text">proposta</span>
        </h2>
        <p className="section-sub">
          Uma abordagem que une estratégia organizacional, inclusão e respeito às diferenças.
        </p>

        <div className="mvv-grid">
          {itens.map((item) => (
            <article className="mvv-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}