import React, { useState, useEffect } from 'react';
import '../styles/Semei.css';

const Semei = () => {
  const [copied, setCopied] = useState(false);
  const pixKey = 'semei@pinkmovimento.com.br'; // Placeholder key that they can customize

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <main className="semei-page">
      {/* ── Hero ── */}
      <section className="semei-hero">
        <span className="semei-hero-tag">Projeto Social & Missionário</span>
        <h1>Projeto SEMEI</h1>
        <p>Semeando amor, esperança e apoio prático. O seu compromisso gera impacto real em dezenas de vidas e famílias.</p>
        <div className="semei-hero-line"></div>
      </section>

      {/* ── About the project ── */}
      <section className="semei-intro">
        <div className="semei-container semei-intro-grid">
          <div className="semei-intro-text">
            <h2>O que é o SEMEI?</h2>
            <p>
              O projeto SEMEI é o braço social e de missões do Movimento PINK. Acreditamos que a fé se expressa através do amor prático. Por meio do SEMEI, levamos alimentação, suporte psicológico, acolhimento e estrutura para comunidades vulneráveis e projetos missionários parceiros.
            </p>
            <p>
              Ao apoiar o SEMEI, você se torna parte ativa de um movimento de transformação que ultrapassa as paredes físicas da igreja, levando alívio e a mensagem do Evangelho a quem mais precisa.
            </p>
          </div>
          <div className="semei-intro-stats">
            <div className="semei-stat-card">
              <h4>+1000</h4>
              <p>Cestas básicas e refeições distribuídas</p>
            </div>
            <div className="semei-stat-card">
              <h4>4</h4>
              <p>Cidades e regiões impactadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contribution Options ── */}
      <section className="semei-contribution">
        <div className="semei-container">
          <h2 className="semei-centered-title">Como Apoiar o Projeto</h2>
          <p className="semei-centered-subtitle">Escolha a melhor forma de se conectar a essa corrente de generosidade.</p>

          <div className="semei-contribution-grid">
            {/* Monthly Partner */}
            <div className="semei-card monthly-card">
              <div className="semei-card-badge">Contínuo</div>
              <h3>Parceira Mensal</h3>
              <p className="semei-card-desc">
                Seja uma mantenedora fiel. O seu apoio mensal nos ajuda a planejar e manter de forma consistente a compra de insumos, cestas básicas e apoio a missionários de campo.
              </p>
              <div className="semei-monthly-tiers">
                <div className="tier-box">
                  <span className="tier-value">R$ 30</span>
                  <span className="tier-period">/ mês</span>
                </div>
                <div className="tier-box">
                  <span className="tier-value">R$ 50</span>
                  <span className="tier-period">/ mês</span>
                </div>
                <div className="tier-box">
                  <span className="tier-value">R$ 100</span>
                  <span className="tier-period">/ mês</span>
                </div>
              </div>
              <a 
                href="https://wa.me/5519995516247?text=Olá! Gostaria de me tornar uma parceira mensal do projeto SEMEI e saber as instruções." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="semei-btn-primary"
              >
                Cadastrar Parceria Mensal
              </a>
            </div>

            {/* One-time Donation */}
            <div className="semei-card one-time-card">
              <div className="semei-card-badge">Pontual</div>
              <h3>Doação Pontual</h3>
              <p className="semei-card-desc">
                Faça uma contribuição voluntária de qualquer valor a qualquer momento via PIX. Todo valor é integralmente revertido em ajuda social imediata.
              </p>
              
              <div className="semei-pix-section">
                {/* SVG mock QR Code representation */}
                <div className="semei-qr-wrapper">
                  <svg viewBox="0 0 100 100" className="semei-qr-mock">
                    <rect x="5" y="5" width="25" height="25" fill="#8C633C" />
                    <rect x="10" y="10" width="15" height="15" fill="#fff" />
                    <rect x="70" y="5" width="25" height="25" fill="#8C633C" />
                    <rect x="75" y="10" width="15" height="15" fill="#fff" />
                    <rect x="5" y="70" width="25" height="25" fill="#8C633C" />
                    <rect x="10" y="75" width="15" height="15" fill="#fff" />
                    {/* Random QR code pixels */}
                    <rect x="40" y="20" width="10" height="10" fill="#c27a9b" />
                    <rect x="50" y="45" width="15" height="15" fill="#8C633C" />
                    <rect x="35" y="65" width="20" height="10" fill="#c27a9b" />
                    <rect x="75" y="75" width="10" height="10" fill="#8C633C" />
                    <rect x="45" y="80" width="10" height="10" fill="#8C633C" />
                    <rect x="80" y="40" width="10" height="20" fill="#c27a9b" />
                    <circle cx="50" cy="50" r="6" fill="#8C633C" />
                  </svg>
                  <span className="qr-caption">QR Code PIX</span>
                </div>

                <div className="semei-pix-action-box">
                  <span className="pix-label">Chave PIX (CNPJ/E-mail):</span>
                  <div className="pix-key-wrapper">
                    <span className="pix-key-text">{pixKey}</span>
                    <button 
                      type="button" 
                      className={`pix-copy-btn ${copied ? 'copied' : ''}`}
                      onClick={handleCopy}
                    >
                      {copied ? 'Copiado!' : 'Copiar Chave'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Semei;
