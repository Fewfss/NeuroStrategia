import { useState } from 'react';
import './FAQ.css';

const perguntas = [
  {
    q: 'O que é neurodiversidade?',
    a: 'Neurodiversidade é um conceito que reconhece a variação natural no funcionamento neurológico humano. Refere-se a pessoas cujos cérebros funcionam de maneiras diferentes da maioria, incluindo TEA, TDAH, dislexia, disgrafia, dispraxia, altas habilidades e outros perfis. O termo foi cunhado pela socióloga autista Judy Singer na década de 1990.',
  },
  {
    q: 'Neurodivergente e PcD são a mesma coisa?',
    a: 'Não necessariamente. Pessoa com Deficiência (PcD) é um termo legal-administrativo que pode incluir algumas condições neurodivergentes, mas nem todo neurodivergente se enquadra na definição legal de PcD. Depende do diagnóstico, do grau de comprometimento funcional e do reconhecimento pela legislação vigente.',
  },
  {
    q: 'Como uma empresa pode começar a ser mais inclusiva?',
    a: 'O primeiro passo é educar líderes e equipes sobre neurodiversidade. Em seguida, revisar processos seletivos para remover barreiras desnecessárias, criar canais de comunicação seguros e definir políticas claras de acomodações razoáveis. A inclusão é uma jornada contínua, não um evento pontual.',
  },
  {
    q: 'Empresas são obrigadas a contratar neurodivergentes?',
    a: 'No Brasil, a Lei de Cotas (Lei 8.213/1991) exige que empresas com 100 ou mais empregados reservem de 2% a 5% das vagas para pessoas com deficiência ou reabilitadas. Algumas condições neurodivergentes se qualificam para essa lei. Mas além da obrigação legal, há um forte argumento estratégico para a inclusão voluntária e genuína.',
  },
  {
    q: 'Este TCC está disponível para leitura?',
    a: 'Após a defesa e aprovação, o trabalho completo será disponibilizado. Entre em contato pelo formulário para receber notificação quando for publicado, ou para conversar sobre o tema da pesquisa.',
  },
];

export default function FAQ() {
  const [aberto, setAberto] = useState(null);

  return (
    <section className="section faq-section">
      <div className="container">
        <h2 className="section-title center">
          Perguntas <span className="gradient-text">frequentes</span>
        </h2>

        <div className="faq-lista">
          {perguntas.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${aberto === i ? 'aberto' : ''}`}
            >
              <button className="faq-pergunta" onClick={() => setAberto(aberto === i ? null : i)}>
                <span>{item.q}</span>
                <span className="faq-arrow">▼</span>
              </button>
              <div className="faq-resposta">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}