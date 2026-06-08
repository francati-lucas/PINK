import { useState } from 'react';
import '../styles/Missoes.css';
import cardAmorImage from '../assets/card_amor.jpg';
import cardPontesImage from '../assets/card_pontes.jpg';
import cardLuzImage from '../assets/card_luz.jpg';

const Missoes = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleSaibaMais = () => {
    if (!selectedCity) return;
    const messages = {
      campinas: 'Olá! Gostaria de saber mais sobre o departamento de missões do PINK em Campinas.',
      gurupi: 'Olá! Gostaria de saber mais sobre o departamento de missões do PINK em Gurupi.',
      paraupebas: 'Olá! Gostaria de saber mais sobre o departamento de missões do PINK em Paraupebas.',
      serra: 'Olá! Gostaria de saber mais sobre o departamento de missões do PINK em Serra.'
    };
    const text = encodeURIComponent(messages[selectedCity] || 'Olá! Gostaria de saber mais sobre as missões do PINK.');
    window.open(`https://wa.me/5519995516247?text=${text}`, '_blank');
  };
  return (
    <main className="missoes-container">
      {/* Hero Section */}
      <section className="missoes-hero">
        <div className="missoes-hero-content">
          <h1 className="missoes-hero-title">
            Missões - <span className="missoes-hero-subtitle">"Ela ouviu o chamado e disse: Eis-me aqui, Senhor!"</span>
          </h1>
          <p className="missoes-hero-text">
            O Movimento PINK nasceu como um projeto missionário e na sua essência pulsa o chamado para missões perto e longe, pois acreditamos que todos precisam da oportunidade de ouvir do amor extravagante de Jesus.
          </p>
          <p className="missoes-hero-text">
            Se o seu coração arde com o desejo de cumprir o IDE de Jesus a uma comunidade e povo novo, sinta-se convidado a se inscrever para participar conosco dessa experiência que vai mudar a sua vida para sempre!
          </p>
          <p className="missoes-hero-text">
            Veja como foi nossa <a href="https://youtu.be/hJdos80o1Ow?si=261hl3k0E9ryY2rN" target="_blank" rel="noopener noreferrer" className="missoes-hero-link">viagem missionária à Índia e o Nepal.</a>
          </p>
        </div>
        <div className="missoes-hero-video-wrapper">
          <iframe
            className="missoes-hero-video"
            src="https://www.youtube.com/embed/P9Pti1YdXVg"
            title="Vídeo de Missões PINK"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Modern Features Section */}
      <section className="missoes-features">
        <div className="missoes-features-header">
          <h2 className="missoes-features-title">Por Que Missões?</h2>
          <div className="missoes-features-line"></div>
          <p className="missoes-features-subtitle">Descubra o impacto de ser a resposta para o mundo e transformar vidas.</p>
        </div>

        <div className="missoes-features-grid">
          <div className="missoes-image-card" style={{ backgroundImage: `url(${cardAmorImage})` }}>
            <div className="missoes-image-card-overlay"></div>
            <div className="missoes-image-card-content">
              <h3 className="missoes-image-card-title">Levar amor e dignidade</h3>
              <p className="missoes-image-card-desc">a quem mais precisa</p>
            </div>
          </div>
          <div className="missoes-image-card" style={{ backgroundImage: `url(${cardPontesImage})` }}>
            <div className="missoes-image-card-overlay"></div>
            <div className="missoes-image-card-content">
              <h3 className="missoes-image-card-title">Construir pontes</h3>
              <p className="missoes-image-card-desc">de esperança e fé</p>
            </div>
          </div>
          <div className="missoes-image-card" style={{ backgroundImage: `url(${cardLuzImage})` }}>
            <div className="missoes-image-card-overlay"></div>
            <div className="missoes-image-card-content">
              <h3 className="missoes-image-card-title">Ser luz</h3>
              <p className="missoes-image-card-desc">em meio à escuridão</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="missoes-info-section">
        <div className="missoes-info-card">
          <div className="missoes-info-content">
            <div className="missoes-info-text">
              <p>Missões são o coração do Evangelho em ação um chamado que Cristo deixou para todos os seus seguidores. Ao dizer "Ide por todo o mundo e pregai o evangelho a toda criatura"<br />(Marcos 16:15)</p>
              <p>Ele nos lembrou que cada cristão é enviado como testemunha de sua graça e amor.</p>
              <p>Seja em terras distantes ou na comunidade local, o propósito é o mesmo: levar a mensagem de esperança, vida eterna e amor de Deus.</p>
              <p>Missões não são apenas um ato de ir, mas de amar, servir e transformar vidas para a glória de Deus.</p>
              <p><strong>Descubra o propósito que Deus tem para a sua vida! Venha conhecer mais sobre missões e como você pode ser instrumento do amor de Cristo!</strong></p>
            </div>
            <div className="missoes-info-contact">
              <p>Deseja saber mais sobre nossas próximas ações missionárias?<br />Entre em contato com o Departamento de Missões PINK.</p>
              <div className="missoes-form">
                <select
                  className="missoes-select"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="" disabled>Selecione uma cidade</option>
                  <option value="campinas">Campinas / SP</option>
                  <option value="gurupi">Gurupi / TO</option>
                  <option value="paraupebas">Paraupebas / PA</option>
                  <option value="serra">Serra / ES</option>
                </select>
                <button
                  className="missoes-button"
                  onClick={handleSaibaMais}
                  disabled={!selectedCity}
                  style={{ opacity: selectedCity ? 1 : 0.6, cursor: selectedCity ? 'pointer' : 'not-allowed' }}
                >
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
          <div className="missoes-info-pink">
            <span>P†NK</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Missoes;
