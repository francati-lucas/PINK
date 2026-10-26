import React, { useEffect } from 'react';
import '../styles/PinkLove.css';
import imgPinkL1 from '../assets/PinkL.jpg';
import imgPinkL3 from '../assets/PinkL3.jpg';
import imgPinkL4 from '../assets/PinkL4.jpg';

const alvos = [
  {
    title: 'Ouvir de Deus',
    desc: 'Mensagens inspiradoras e momentos de adoração profunda focados na voz do Pai.'
  },
  {
    title: 'Crescer',
    desc: 'Palestras e painéis práticos para o seu desenvolvimento espiritual e emocional.'
  },
  {
    title: 'Experimentar comunidade',
    desc: 'Conectar-se com outras mulheres na mesma jornada, fortalecendo laços de fé.'
  },
  {
    title: 'Rir e chorar juntas',
    desc: 'Espaço seguro para compartilhar fraquezas, celebrar vitórias e se emocionar.'
  },
  {
    title: 'Fazer memórias',
    desc: 'Momentos divertidos, painéis interativos de fotos e momentos inesquecíveis.'
  }
];

const PinkLove = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pink-love-page">
      {/* ── Hero ── */}
      <section className="pink-love-hero">
        
        <h1>Conferência PINK LOVE</h1>
        <p>Nossa conferência anual. Dois dias especiais dedicados a inspirar, curar e conectar mulheres ao seu propósito eterno.</p>
        <div className="pink-love-hero-line"></div>
      </section>

      {/* ── Target Alvos ── */}
      <section className="pink-love-alvos">
        <div className="pink-love-container">
          <div className="pink-love-intro-text">
            <h2>Por que participar?</h2>
            <p>
              A Conferência PINK LOVE é muito mais que um evento, é um marco anual. São dois dias preparados para você estar no mesmo ambiente com centenas de mulheres buscando os mesmos alvos:
            </p>
          </div>

          <div className="pink-love-alvos-grid">
            {alvos.map((alvo, idx) => (
              <div key={idx} className="alvo-card">
                <div className="alvo-number">0{idx + 1}</div>
                <h3>{alvo.title}</h3>
                <p>{alvo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Media Gallery Placeholders ── */}
      <section className="pink-love-gallery">
        <div className="pink-love-container">
          <h2 className="gallery-title">Como foi nossa última edição</h2>
          <p className="gallery-subtitle">Um gostinho de tudo o que Deus já fez e continuará fazendo na Conferência PINK LOVE.</p>

          <div className="gallery-grid">
            <div className="gallery-item photo-item">
              <div className="gallery-photo" style={{ backgroundImage: `url(${imgPinkL1})` }} />
            </div>
            <div className="gallery-item photo-item">
              <div className="gallery-photo" style={{ backgroundImage: `url(${imgPinkL3})` }} />
            </div>
            <div className="gallery-item photo-item">
              <div className="gallery-photo" style={{ backgroundImage: `url(${imgPinkL4})` }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Bottom ── */}
      <section className="pink-love-cta-bottom">
        <h2>Garanta o seu lugar na próxima edição</h2>
        <p>As vagas para a Conferência PINK LOVE de Junho são limitadas. Fale conosco no WhatsApp para informações sobre inscrições e lotes.</p>
        <a 
          href="https://wa.me/5519995516247?text=Olá! Gostaria de mais informações e inscrições para a próxima Conferência PINK LOVE." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="pink-love-cta-btn"
        >
          Quero me Inscrever
        </a>
      </section>
    </main>
  );
};

export default PinkLove;
