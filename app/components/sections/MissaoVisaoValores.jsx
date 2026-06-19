import '../../styles/MissaoVisaoValores.css';

const valores = [
  { titulo: 'Inclusão consciente', desc: 'Inclusão baseada em conhecimento, não apenas em discurso' },
  { titulo: 'Respeito às diferenças', desc: 'Valorização das singularidades cognitivas e comportamentais' },
  { titulo: 'Ética profissional', desc: 'Atuação responsável, técnica e comprometida' },
  { titulo: 'Educação contínua', desc: 'Formação constante de líderes e equipes' },
  { titulo: 'Humanização da gestão', desc: 'Pessoas no centro das decisões organizacionais' },
  { titulo: 'Responsabilidade social', desc: 'Compromisso com impacto positivo na sociedade' },
];

export default function MissaoVisaoValores() {
  return (
    <section className="section mvv-section" id="missao-visao-valores">
      <div className="container">
        <p className="section-label">02 — Missão, visão e valores</p>
        <h2 className="section-title">
          Nossa <span className="gradient-text">proposta</span>
        </h2>

        <div className="mvv-grid mvv-grid-top">
          <article className="mvv-card">
            <h3>Missão</h3>
            <p>Capacitar organizações e líderes para gerir pessoas neurodivergentes de forma estratégica, ética e humanizada, promovendo inclusão real, desenvolvimento humano e melhores resultados organizacionais.</p>
          </article>
          <article className="mvv-card">
            <h3>Visão</h3>
            <p>Ser referência nacional em consultoria organizacional especializada em neurodiversidade, contribuindo para a transformação da cultura corporativa e para a valorização da diversidade cognitiva no mercado de trabalho.</p>
          </article>
        </div>

        <h3 className="mvv-valores-titulo">Valores</h3>
        <div className="mvv-grid mvv-grid-valores">
          {valores.map((v) => (
            <article className="mvv-card" key={v.titulo}>
              <h4>{v.titulo}</h4>
              <p>{v.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}