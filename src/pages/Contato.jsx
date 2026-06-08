import React from 'react';
import '../styles/Contato.css';

const Contato = () => {
  const contacts = [
    {
      name: 'WhatsApp',
      value: '(19) 99551-6247',
      description: 'Fale diretamente com nossa equipe para tirar dúvidas ou receber apoio.',
      link: 'https://wa.me/5519995516247?text=Olá! Gostaria de entrar em contato com o PINK.',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      ),
      colorClass: 'whatsapp'
    },
    {
      name: 'Instagram',
      value: '@pinkmovimento',
      description: 'Acompanhe nosso dia a dia, fotos dos encontros e novidades em tempo real.',
      link: 'https://www.instagram.com/pinkmovimento',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
      colorClass: 'instagram'
    },
    {
      name: 'Facebook',
      value: 'PINK - Mulher Com Propósito',
      description: 'Conecte-se com nossa comunidade no Facebook e acompanhe nossas publicações.',
      link: 'https://www.facebook.com/MovimentoPINK',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
      colorClass: 'facebook'
    },
    {
      name: 'YouTube',
      value: 'MovimentoPink',
      description: 'Inscreva-se no nosso canal para assistir às séries, pregações e vídeos de viagens.',
      link: 'https://www.youtube.com/channel/UCbaMw8NC0kdSB2wKiNcpDjQ',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
        </svg>
      ),
      colorClass: 'youtube'
    }
  ];

  return (
    <main className="contato-page">
      {/* Hero Section */}
      <section className="contato-hero">
        <span className="contato-hero-tag">Conecte-se conosco</span>
        <h1>Fale com o PINK</h1>
        <p>Estamos aqui para acolher, responder suas dúvidas e caminhar junto com você. Escolha o canal de sua preferência.</p>
      </section>

      {/* Cards Section */}
      <section className="contato-grid-section">
        <div className="contato-grid">
          {contacts.map((contact, index) => (
            <a 
              key={index} 
              href={contact.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`contato-card ${contact.colorClass}`}
            >
              <div className="contato-card-icon-wrapper">
                {contact.icon}
              </div>
              <div className="contato-card-info">
                <h3>{contact.name}</h3>
                <span className="contato-card-value">{contact.value}</span>
                <p className="contato-card-desc">{contact.description}</p>
                <div className="contato-card-action">
                  <span>Acessar Canal</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Contato;
