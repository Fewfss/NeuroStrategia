import { useState } from 'react';
import '../styles/Pilares.css';

const servicos = [
  {
    num: '01',
    titulo: 'Consultoria estratégica',
    subtitulo: 'Planejamento com foco em inclusão e resultados',
    descricao: 'Apoiamos organizações a desenvolverem práticas e processos que reconheçam a diversidade cognitiva como fator de performance e inovação.',
    tags: ['Estratégia organizacional', 'Diagnóstico de necessidades', 'Planejamento de ações', 'Acompanhamento contínuo'],
  },
  {
    num: '02',
    titulo: 'Acolhimento e suporte neurodiversificado',
    subtitulo: 'Ambientes mais seguros e preparados',
    descricao: 'Criamos condições para que pessoas com diferentes perfis neurológicos se sintam compreendidas, respeitadas e capazes de desenvolver todo o seu potencial.',
    tags: ['Adaptações de processo', 'Orientação para equipes', 'Apoio à comunicação', 'Melhoria do bem-estar'],
  },
  {
    num: '03',
    titulo: 'Capacitação e educação',
    subtitulo: 'Formação para transformar cultura',
    descricao: 'Oferecemos conteúdos e treinamentos que ajudam pessoas e organizações a compreenderem melhor a neurodiversidade e a aplicar esse conhecimento no dia a dia.',
    tags: ['Treinamentos', 'Palestras', 'Material educativo', 'Mentoria'],
  },
];

export default function Pilares() {
  const [aberto, setAberto] = useState(0);

  function toggle(i) {
    setAberto(aberto === i ? null : i);
  }

  return (
    <section className="section pilares-section" id="servicos">
      <div className="container">
        <p className="section-label">03 — Serviços</p>
        <h2 className="section-title">
          Nossos <span className="gradient-text">serviços</span>
        </h2>
        <p className="section-sub">
          Soluções práticas para organizações que desejam crescer com inclusão,
          estratégia e respeito às diferenças.
        </p>

        <div className="accordion">
          {servicos.map((p, i) => (
            <div
              key={p.num}
              className={`pilar-item ${aberto === i ? 'aberto' : ''}`}
            >
              <button className="pilar-header" onClick={() => toggle(i)}>
                <span className="pilar-num gradient-text">{p.num}</span>
                <div className="pilar-texto">
                  <h3>{p.titulo}</h3>
                  <span>{p.subtitulo}</span>
                </div>
                <span className="pilar-arrow">▼</span>
              </button>

              <div className="pilar-body">
                <div className="pilar-body-inner">
                  <p>{p.descricao}</p>
                  <div className="pilar-tags">
                    {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}