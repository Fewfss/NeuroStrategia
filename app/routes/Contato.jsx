import '../styles/Contato.css';

// -------------------------------------------------------
// Troque o e-mail aqui — é o único lugar que precisa mudar
// -------------------------------------------------------
const EMAIL_DESTINO = 'neurostrategia@email.com';

const opcoes = [
  'Sou uma pessoa neurodivergente',
  'Trabalho com/para neurodivergentes',
  'Gestor/a de pessoas',
  'Pesquisador/a ou estudante',
  'Familiar de neurodivergente',
  'Outro',
];

const infos = [
  { emoji: '📧', titulo: 'E-mail',      texto: EMAIL_DESTINO },
  { emoji: '🎓', titulo: 'Instituição', texto: 'Trabalho de Conclusão de Curso · Psicologia Organizacional' },
  { emoji: '♾️', titulo: 'Tema central', texto: 'Neurodiversidade & Estratégia Organizacional' },
];

export default function Contato() {
  return (
    <section className="section contato-section" id="contato">
      <div className="container">
        <p className="section-label">05 — Contato</p>
        <h2 className="section-title">
          Compartilhe suas <span className="gradient-text">perspectivas</span>
        </h2>
        <p className="section-sub">
          Este trabalho é construído com e para pessoas. Sua experiência com
          neurodiversidade no ambiente de trabalho é valiosa para esta pesquisa.
        </p>

        <div className="contato-grid">
          {/* Informações */}
          <div className="contato-infos">
            {infos.map((i) => (
              <div className="contato-info-card" key={i.titulo}>
                <span className="contato-emoji">{i.emoji}</span>
                <div>
                  <strong>{i.titulo}</strong>
                  <p>{i.texto}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Formulário */}
          <form
            className="contato-form"
            action={`https://formsubmit.co/${EMAIL_DESTINO}`}
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Mensagem do site NeuroStratégia" />

            <div className="form-group">
              <label htmlFor="nome">Nome *</label>
              <input type="text" id="nome" name="Nome" required placeholder="Seu nome completo" />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail *</label>
              <input type="email" id="email" name="Email" required placeholder="seu@email.com" />
            </div>

            <div className="form-group">
              <label htmlFor="relacao">Sua relação com neurodiversidade</label>
              <select id="relacao" name="Relacao">
                <option value="">Selecione...</option>
                {opcoes.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Mensagem *</label>
              <textarea
                id="mensagem"
                name="Mensagem"
                required
                placeholder="Compartilhe sua perspectiva, experiência ou dúvida..."
              />
            </div>

            <div className="form-acoes">
              <button type="reset"  className="btn-limpar">Limpar</button>
              <button type="submit" className="btn-primary">Enviar mensagem</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}