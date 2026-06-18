import '../styles/Beneficios.css';

const beneficios = [
  { emoji: '🚀', titulo: 'Inovação acelerada',        texto: 'Equipes com perfis cognitivos diversos geram mais ideias e chegam a soluções que grupos homogêneos nunca enxergariam.' },
  { emoji: '🎯', titulo: 'Retenção de talentos',       texto: 'Pessoas neurodivergentes que se sentem valorizadas demonstram lealdade acima da média. Menor rotatividade, maior expertise acumulada.' },
  { emoji: '📊', titulo: 'Performance superior',       texto: 'Em tarefas que exigem atenção a detalhes, reconhecimento de padrões ou criatividade intensa, neurodivergentes frequentemente superam a média.' },
  { emoji: '🌍', titulo: 'ESG & Marca empregadora',    texto: 'Empresas reconhecidas por inclusão genuína atraem melhores candidatos e clientes que se identificam com valores humanizados.' },
  { emoji: '⚖️', titulo: 'Conformidade legal',         texto: 'Atendimento às cotas da Lei 8.213 e alinhamento com normas de acessibilidade, evitando riscos jurídicos e financeiros.' },
  { emoji: '💬', titulo: 'Cultura psicologicamente segura', texto: 'Ambientes inclusivos para neurodivergentes beneficiam toda a equipe — mais comunicação aberta, menos ansiedade, mais colaboração.' },
];

export default function Beneficios() {
  return (
    <section className="section beneficios-section" id="beneficios">
      <div className="container">
        <p className="section-label light">04 — Benefícios</p>
        <h2 className="section-title light">
          Por que a empresa{' '}
          <span style={{ color: 'var(--gold)' }}>ganha?</span>
        </h2>
        <p className="section-sub light">
          Inclusão não é só ética — é inteligência estratégica. Organizações
          neurodiversas têm vantagens mensuráveis.
        </p>

        <div className="beneficios-grid">
          {beneficios.map((b) => (
            <div className="beneficio-card" key={b.titulo}>
              <span className="beneficio-emoji">{b.emoji}</span>
              <h3>{b.titulo}</h3>
              <p>{b.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}