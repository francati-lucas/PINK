import React, { useState, useEffect } from 'react';
import '../styles/Semei.css';

const PIX_CNPJ = '24.197.388/0001-20';
const PIX_DESTINATARIO = 'Conexão U M Estudantil';
const WHATSAPP_URL = `https://wa.me/5519995516247?text=${encodeURIComponent('Olá! Tenho uma dúvida sobre a parceria do PINK.')}`;
const INSTAGRAM_URL = 'https://www.instagram.com/pinkmovimento';
// Imagem servida pelo site antigo; se ele sair do ar, a imagem é escondida
const IMG_PALAVRAS = 'https://soupink.com/wp-content/uploads/2025/10/palavras-pink-parceria-768x512.png';

const Semei = () => {
  const [copied, setCopied] = useState(false);
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopy = () => {
    // Chave PIX do tipo CNPJ: copia só os números
    navigator.clipboard.writeText(PIX_CNPJ.replace(/\D/g, '')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <main className="semei-page">
      {/* ── Hero ── */}
      <section className="semei-hero">
        <span className="semei-hero-tag">Parceria</span>
        <h1>SEMEI</h1>
        <p>
          A parceria é uma forma de você poder contribuir tanto durante os nossos{' '}
          <strong>Encontros Presenciais</strong> quanto <strong>Online</strong>.
        </p>
        <div className="semei-hero-line"></div>
      </section>

      {/* ── Como Contribuir ── */}
      <section className="semei-contribution">
        <div className="semei-container">
          <div className="semei-card">
            <h2>Como Contribuir</h2>
            <p className="semei-card-desc">
              Faça sua doação via <strong>PIX</strong> usando o CNPJ abaixo:
            </p>

            <div className="semei-pix-box">
              <div className="pix-row">
                <span className="pix-label">CNPJ (chave PIX)</span>
                <div className="pix-key-wrapper">
                  <span className="pix-key-text">{PIX_CNPJ}</span>
                  <button
                    type="button"
                    className={`pix-copy-btn ${copied ? 'copied' : ''}`}
                    onClick={handleCopy}
                  >
                    {copied ? 'Copiado!' : 'Copiar CNPJ'}
                  </button>
                </div>
              </div>
              <p className="pix-recipient">
                <strong>Destinatário:</strong> {PIX_DESTINATARIO}
              </p>
            </div>

            <p className="semei-help">Dúvidas ou esclarecimentos? Fale com a gente pelo WhatsApp.</p>

            <div className="semei-actions">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="semei-btn-primary">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                Envie um WhatsApp
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="semei-btn-outline">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Siga-nos no Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Versículo ── */}
      <section className="semei-verse">
        <div className="semei-container">
          <blockquote>
            “O generoso prosperará; quem dá alívio aos outros, alívio receberá.”
            <cite>Provérbios 11.25</cite>
          </blockquote>

          {showImage && (
            <img
              src={IMG_PALAVRAS}
              alt="Montagem do logotipo PINK com palavras escolhidas por mulheres do movimento"
              className="semei-verse-img"
              loading="lazy"
              onError={() => setShowImage(false)}
            />
          )}
        </div>
      </section>
    </main>
  );
};

export default Semei;
