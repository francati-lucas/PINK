import React, { useEffect } from 'react';
import '../styles/PinkHome.css';
import HomeTrhee from '../assets/HomeTrhee.png';
import QuemE from '../assets/QuemE.png';

const depoimentos = [
  {
    name: 'Ana Carolina',
    city: 'Campinas - SP',
    text: 'Abrir a minha casa para o PINK HOME foi uma experiência incrível. Minhas amigas e vizinhas que não costumavam ir à igreja se sentiram super acolhidas na minha sala. Foi uma noite de cura, risos e de Deus nos visitando de forma muito íntima.'
  },
  {
    name: 'Mariana Costa',
    city: 'Gurupi - TO',
    text: 'O formato do PINK HOME quebra barreiras. A equipe veio com muito carinho, trouxe a palavra e pudemos compartilhar nossos desafios comendo um bolo juntas. Três amigas começaram a caminhar firme na fé depois desse dia!'
  },
  {
    name: 'Larissa Santos',
    city: 'Serra - ES',
    text: 'Uma oportunidade única de trazer o propósito para perto. Minha casa virou um lugar de paz e conexões reais para minhas amigas de trabalho. Todo mundo amou a leveza e a profundidade do encontro.'
  }
];

const PinkHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pink-home-page">
      {/* ── Hero ── */}
      <section className="pink-home-hero">
        <span className="pink-home-hero-tag">PINK na sua casa</span>
        <h1>Nós levamos o PINK até você</h1>
        <p>Você abre a sua casa, e nós trazemos o Encontro PINK para você e suas amigas.</p>
        <a 
          href="https://wa.me/5519995516247?text=Olá! Quero levar o PINK HOME para a minha casa e gostaria de saber como funciona." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="pink-home-btn"
        >
          Quero Saber Mais
        </a>
      </section>

      {/* ── Como funciona ── */}
      <section className="pink-home-about">
        <div className="pink-home-container pink-home-grid">
          <div className="pink-home-content">
            <h2>Como funciona o PINK HOME?</h2>
            <p>
              O PINK HOME nasceu com o desejo de criar conexões seguras e íntimas. Muitas vezes, uma amiga ou familiar hesita em entrar em um templo religioso, mas aceitaria com alegria um convite para tomar um café na sua sala.
            </p>
            <p>
              O processo é muito simples:
            </p>
            <ul className="pink-home-steps">
              <li>
                <strong>1. Você abre o espaço:</strong> Organiza a sua sala ou área social e prepara um café simples para receber as convidadas.
              </li>
              <li>
                <strong>2. Você convida as amigas:</strong> Reúne de 3, 10 OU MAIS amigas, vizinhas ou familiares.
              </li>
              <li>
                <strong>3. Nós levamos o Encontro:</strong> Uma líder do PINK vai até a sua casa para conduzir um momento especial com louvor, palavra, oração e dinâmica.
              </li>
            </ul>
          </div>

          <div className="pink-home-image-collage">
            <div className="pink-home-main-image" style={{ backgroundImage: `url(${HomeTrhee})` }} />
            <div className="pink-home-sub-image" style={{ backgroundImage: `url(${QuemE})` }} />
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="pink-home-testimonials">
        <div className="pink-home-container">
          <h2 className="pink-home-centered-title">Depoimentos de quem já recebeu</h2>
          <p className="pink-home-centered-subtitle">Veja a experiência de mulheres que abriram suas portas para o PINK HOME.</p>

          <div className="pink-home-testimonials-grid">
            {depoimentos.map((d, index) => (
              <div key={index} className="pink-home-test-card">
                <div className="quote-mark">“</div>
                <p className="test-text">{d.text}</p>
                <div className="test-author">
                  <h5>{d.name}</h5>
                  <span>{d.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="pink-home-cta-bottom">
        <h2>Pronta para abrir as portas para o novo?</h2>
        <p>Clique abaixo para falar conosco no WhatsApp e agendar um PINK HOME na sua casa.</p>
        <a 
          href="https://wa.me/5519995516247?text=Olá! Quero levar o PINK HOME para a minha casa e gostaria de saber como funciona." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="pink-home-btn"
        >
          Quero Agendar Encontro
        </a>
      </section>
    </main>
  );
};

export default PinkHome;
