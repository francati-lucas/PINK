import React, { useEffect } from 'react';
import '../styles/PinkApoio.css';
import minRecepcao from '../assets/min_recepcao.jpg';
import minMidias from '../assets/min_midias.jpg';
import minIntercessao from '../assets/min_intercessao.jpg';

const equipes = [
  {
    img: minRecepcao,
    title: 'Encontros',
    desc: 'A primeira impressão importa. A equipe de recepção acolhe cada mulher que chega com amor genuíno, criando um ambiente seguro, acolhedor e cheio da presença de Deus desde o primeiro momento.',
    link: 'https://wa.me/5519995516247?text=Olá! Gostaria de saber mais sobre a equipe de Recepção no PINK APOIO!'
  },
  {
    img: minMidias,
    title: 'Mídias Sociais',
    desc: 'Usamos a criatividade e a tecnologia como ferramentas do Reino. A equipe de mídias cuida da comunicação, do design e da mensagem que levamos ao mundo por meio das plataformas digitais.',
    link: 'https://wa.me/5519995516247?text=Olá! Gostaria de saber mais sobre a equipe de Mídias Sociais no PINK APOIO!'
  },
  {
    img: minIntercessao,
    title: 'Intercessão',
    desc: 'A oração é o alicerce de tudo o que fazemos. A equipe de intercessão sustenta o movimento PINK com uma cobertura espiritual constante, crendo que Deus ouve e responde.',
    link: 'https://wa.me/5519995516247?text=Olá! Gostaria de saber mais sobre a equipe de Intercessão no PINK APOIO!'
  }
];

const PinkApoio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pink-apoio-container">
      {/* ── Hero ── */}
      <section className="pink-apoio-hero">
        <span className="pink-apoio-hero-tag">Desenvolvimento de Líderes</span>
        <h1>Cada dom tem um <span>lugar</span> aqui.</h1>
        <p className="pink-apoio-hero-desc">
        Venha servir conosco em diversar equipes que preparam tudo para os encontros mensais. Desde a recepção, decoração, loja, PINK Café, Banda/Louvor e Muito mais. Coloque o seu dom de servir para abençoar mulheres no país inteiro.  
        </p>
        <div className="pink-apoio-hero-line"></div>
      </section>

      {/* ── Cards ── */}
      <section className="pink-apoio-grid-section">
        <span className="pink-apoio-section-label">Venha Fazer Vida Com a gente servindo:</span>
        <div className="pink-apoio-cards">
          {equipes.map((e) => (
            <div key={e.title} className="pink-apoio-card">
              <div className="pink-apoio-card-img" style={{ backgroundImage: `url(${e.img})` }} />
              <div className="pink-apoio-card-body">
                <h3 className="pink-apoio-card-title">{e.title}</h3>
                <p className="pink-apoio-card-desc">{e.desc}</p>
                <a href={e.link} target="_blank" rel="noopener noreferrer" className="pink-apoio-card-link">Saiba mais</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Values strip ── */}
      <section className="pink-apoio-values">
        <h2>Impacto que transforma vidas</h2>
        <div className="pink-apoio-values-grid">
          <div className="pink-apoio-value-item">
            <span className="pink-apoio-value-number">20+</span>
            <span className="pink-apoio-value-label">Equipes ativas</span>
          </div>
          <div className="pink-apoio-value-item">
            <span className="pink-apoio-value-number">100+</span>
            <span className="pink-apoio-value-label">Mulheres servindo</span>
          </div>
          <div className="pink-apoio-value-item pink-apoio-value-item-cross">
            <span className="pink-apoio-value-number">†</span>
            <span className="pink-apoio-value-label">Propósito eterno</span>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pink-apoio-cta">
        <h2>Pronta para fazer parte?</h2>
        <p>
          Não importa onde você está na sua jornada — há um lugar esperando pelo
          seu sim. Dê o primeiro passo e venha CRESCER com a gente.
        </p>
        <a 
          href="https://wa.me/5519995516247?text=Olá! Gostaria de fazer parte do Staff do PINK APOIO!" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="pink-apoio-cta-btn"
        >
          Quero Fazer Parte
        </a>
      </section>
    </main>
  );
};

export default PinkApoio;
