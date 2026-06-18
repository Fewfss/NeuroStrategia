import Navbar from "../components/Navbar.jsx";
import Sobre from "../components/sections/Sobre.jsx";
import MissaoVisaoValores from "../components/sections/MissaoVisaoValores.jsx";
import Pilares from "../components/sections/Pilares.jsx";
import Beneficios from "../components/sections/Beneficios.jsx";
import Contato from "../components/sections/Contato.jsx";
import WaveDivider from "../components/WaveDivider.jsx";
import "../styles/Hero.css";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <section className="hero" id="topo">
        <div className="hero-blobs" aria-hidden="true">
          <span className="blob blob-1" />
          <span className="blob blob-2" />
          <span className="blob blob-3" />
        </div>

        <div className="hero-content">
       
          <h1 className="hero-title">
            Neuro<span className="hero-gradient">Strategia</span>
          </h1>
          <p className="hero-subtitle">
            Estratégias práticas para construir ambientes mais inclusivos,
            produtivos e humanos para pessoas neurodivergentes.
          </p>
          <div className="hero-ctas">
            <a href="#sobre" className="btn-primary">
              Conheça o projeto
            </a>
            <a href="#contato" className="btn-ghost">
              Fale com a equipe
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="brain-wheel">
            <div className="wheel-center">
              <span className="wheel-symbol">∞</span>
            </div>
            <div className="wheel-segment seg-top">
              <span className="seg-emoji">🧠</span>
              <small>Neurodiversidade</small>
            </div>
            <div className="wheel-segment seg-top-right">
              <span className="seg-emoji">🤝</span>
              <small>Inclusão</small>
            </div>
            <div className="wheel-segment seg-bottom-right">
              <span className="seg-emoji">📈</span>
              <small>Performance</small>
            </div>
            <div className="wheel-segment seg-bottom">
              <span className="seg-emoji">🌱</span>
              <small>Crescimento</small>
            </div>
            <div className="wheel-segment seg-bottom-left">
              <span className="seg-emoji">💬</span>
              <small>Comunicação</small>
            </div>
            <div className="wheel-segment seg-top-left">
              <span className="seg-emoji">⚙️</span>
              <small>Estratégia</small>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider direction="down" fill="var(--white)" />
      <Sobre />
      <MissaoVisaoValores />
      <Pilares />
      <Beneficios />
      <Contato />
    </>
  );
}