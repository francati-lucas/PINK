import { useEffect } from 'react';
import '../styles/Mentoria.css';

// Importing the gorgeous local images from assets folder
import mentoriaBanner from '../assets/pink+.jpg';
import mentoriaJessica from '../assets/mentoria_jessica.png';
import HomeTrhee from '../assets/HomeTrhee.png';
import HomeOne from '../assets/HomeOne.png';
import QuemE from '../assets/QuemE.png';
import imgLivro from '../assets/livro.png';

const PinkMaisPerto = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pmp-main-container">
      {/* Decorative concentric sand arches in the background */}
      <div className="pmp-bg-arch pmp-bg-arch-top-left"></div>
      <div className="pmp-bg-arch pmp-bg-arch-bottom-right"></div>

      {/* SECTION 1: HERO & CONCEPT (Slides 1 & 2) */}
      <section className="pmp-hero-section">
        <div className="pmp-container pmp-hero-grid">
          {/* Left Hero Column */}
          <div className="pmp-hero-content">
            <span className="pmp-badge">PROGRAMA DE MENTORIA</span>
            <h1 className="pmp-hero-title">
              PINK<span className="pmp-plus-sign">+</span> <span className="pmp-cursive-title">Perto</span>
            </h1>
            <p className="pmp-hero-subtitle">
              Um espaço de crescimento profundo, conexões reais e amadurecimento espiritual.
            </p>
            <div className="pmp-hero-buttons">
              <a href="#cta" className="pmp-btn-primary">Quero ser Mentoriada</a>
              <a href="#estrutura" className="pmp-btn-secondary">Conhecer o Programa</a>
            </div>
            <div className="pmp-brand-association">
              <span>UM PROGRAMA:</span>
              <span className="pmp-brand-logo">PINK</span>
            </div>
          </div>

          {/* Right Hero Column - Semicircular Photo Arc */}
          <div className="pmp-hero-image-container">
            <div className="pmp-photo-arc" style={{ backgroundImage: `url(${mentoriaJessica})` }}></div>
          </div>
        </div>
      </section>

      {/* INTRO BLOCK: O que é o PINK+ Perto? */}
      <section className="pmp-intro-section">
        <div className="pmp-container pmp-intro-grid">
          {/* Left Text Box */}
          <div className="pmp-intro-text-box">
            <h2 className="pmp-section-title">
              <span className="pmp-cursive">O que é o</span>
              <span className="pmp-bold-title">PINK + PERTO?</span>
            </h2>
            <div className="pmp-text-paragraphs">
              <p>
                É um programa do Movimento PINK de mentoria voltado para mulheres que desejam crescer em maturidade,
                liberdade, liderança e autoconhecimento, por meio de encontros presenciais ou on-line,
                acompanhamento, oração, leitura, relacionamentos e vida cristã, dentro e fora da igreja.
              </p>
              <p>
                Seu objetivo é fazer com que cada mulher cresça e amadureça na sua jornada de fé, cultive uma vida em
                Comunidade, faça amizades sinceras, descubra sua verdadeira identidade e viva seu propósito em plenitude.
              </p>
            </div>
          </div>

          {/* Right Collage Box */}
          <div className="pmp-intro-collage">
            <div className="pmp-collage-photo pmp-photo-main" style={{ backgroundImage: `url(${HomeOne})` }}></div>
            <div className="pmp-collage-photo pmp-photo-secondary" style={{ backgroundImage: `url(${QuemE})` }}></div>
            {/* The circular pink ring photo exactly matching Slide 2 */}
            <div className="pmp-collage-photo-wrapper">
              <div className="pmp-collage-photo pmp-photo-ringed" style={{ backgroundImage: `url(${mentoriaBanner})` }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: METODOLOGIA, LIVRO & ESTRUTURA (Slides 4, 5 & 6) */}
      <section id="estrutura" className="pmp-method-section">
        <div className="pmp-container">
          <h2 className="pmp-centered-title">
            <span className="pmp-cursive">Como crescemos</span>
            <span className="pmp-bold-title">ESTRUTURA & MÉTODO</span>
          </h2>

          <div className="pmp-method-grid">
            {/* Left Column: Book & D.I.V.E. */}
            <div className="pmp-book-card">
              <div className="pmp-book-mockup-wrapper">
                <img src={imgLivro} alt="Livro Você Não Está Sozinha" className="pmp-book-img-element" />
              </div>

              <div className="pmp-book-info">
                <h3 className="pmp-book-section-title">
                  <span className="pmp-cursive-small">Falamos</span>
                  <span className="pmp-bold-small">SOBRE O QUE?</span>
                </h3>
                <p className="pmp-book-desc">
                  Além da Bíblia, que é nosso maior guia, teremos ensinos profundos e transformadores baseados no Livro Você não está sozinha e no Manual do Método D.I.V.E., escritos pela fundadora do Movimento PINK - Jordania Nargiz:
                </p>

                <ul className="pmp-dive-list">
                  <li>
                    <span className="pmp-dive-letter">D</span>
                    <span className="pmp-dive-word"><strong>Descobrir</strong> – O que está acontecendo?</span>
                  </li>
                  <li>
                    <span className="pmp-dive-letter">I</span>
                    <span className="pmp-dive-word"><strong>Identificar</strong> – O que está por trás?</span>
                  </li>
                  <li>
                    <span className="pmp-dive-letter">V</span>
                    <span className="pmp-dive-word"><strong>Verificar</strong> – O que é verdade?</span>
                  </li>
                  <li>
                    <span className="pmp-dive-letter">E</span>
                    <span className="pmp-dive-word"><strong>Executar</strong> – Qual é o meu próximo passo?</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Editorial Program Table/Grid */}
            <div className="pmp-structure-card">
              <h3 className="pmp-structure-title">
                <span className="pmp-cursive-small">Estrutura</span>
                <span className="pmp-bold-small">DO PROGRAMA</span>
              </h3>

              <div className="pmp-structure-table">
                <div className="pmp-table-row">
                  <div className="pmp-table-header">MATERIAL</div>
                  <div className="pmp-table-content">A Bíblia, o livro "Você não está sozinha", e o Manual do Método D.I.V.E.</div>
                </div>
                <div className="pmp-table-row">
                  <div className="pmp-table-header">FORMATO</div>
                  <div className="pmp-table-content">Encontros presenciais, on-line ou híbrido.</div>
                </div>
                <div className="pmp-table-row">
                  <div className="pmp-table-header">FREQUÊNCIA</div>
                  <div className="pmp-table-content">Semanal ou quinzenal, com duração de 1h30 por encontro.</div>
                </div>
                <div className="pmp-table-row">
                  <div className="pmp-table-header">PRA QUEM</div>
                  <div className="pmp-table-content">Adolescentes, moças e mulheres de todas as idades.</div>
                </div>
                <div className="pmp-table-row">
                  <div className="pmp-table-header">QUANTIDADE</div>
                  <div className="pmp-table-content">Grupos dinâmicos e íntimos de 03 a 15 mulheres.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FILOSOFIA, OBJETIVO & CRESCIMENTO (Slides 3 & 7) */}
      <section className="pmp-philosophy-section">
        <div className="pmp-container">
          {/* Top Landscape Photo Banner */}
          <div className="pmp-landscape-banner" style={{ backgroundImage: `url(${HomeTrhee})` }}>
            <div className="pmp-landscape-overlay">
              <span className="pmp-landscape-tag">CONEXÕES VERDADEIRAS</span>
            </div>
          </div>

          <h2 className="pmp-centered-title" style={{ marginTop: '50px' }}>
            <span className="pmp-cursive">Objetivos &</span>
            <span className="pmp-bold-title">COMO CRESCEMOS JUNTAS</span>
          </h2>

          <div className="pmp-cards-grid">
            {/* Card 1: Mentoria */}
            <div className="pmp-philosophy-card">
              <div className="pmp-card-badge">01</div>
              <h4>Mentoria</h4>
              <p>
                O IDE não acaba no IDE! Se quisermos fazer um trabalho completo, teremos que nos envolver na caminhada.
                Precisamos estar na vida dessas pessoas, assim como Jesus está conosco todos os dias.
              </p>
            </div>

            {/* Card 2: Crescimento */}
            <div className="pmp-philosophy-card">
              <div className="pmp-card-badge">02</div>
              <h4>Crescimento</h4>
              <p>
                Com exercícios guiados e práticos que vão mudar a sua forma de pensar e agir, gerando uma vida emocional
                e espiritual saudável e equilibrada, da qual você poderá desfrutar diariamente.
              </p>
            </div>

            {/* Card 3: Comunidade */}
            <div className="pmp-philosophy-card">
              <div className="pmp-card-badge">03</div>
              <h4>Comunidade</h4>
              <p>
                Uma grande oportunidade de ajudar e ser ajudada. Fazer amizades profundas e sinceras, e estar em um
                ambiente totalmente seguro para expressar e acolher quem você é.
              </p>
            </div>

            {/* Card 4: Caminhada Única */}
            <div className="pmp-philosophy-card">
              <div className="pmp-card-badge">04</div>
              <h4>Caminhada Única</h4>
              <p>
                Cada pessoa está em um estágio diferente na jornada. Respeitamos a velocidade de cada uma, sem
                comparações desnecessárias, afinal, cada processo e história são únicos.
              </p>
            </div>

            {/* Card 5: Sem Barreiras de Idade */}
            <div className="pmp-philosophy-card">
              <div className="pmp-card-badge">05</div>
              <h4>Diversidade</h4>
              <p>
                Não se trata de idade! Jesus aos 12 anos já debatia com os mestres. A mentoria é uma troca baseada na
                caminhada e experiência cristã. Todas temos o que ensinar e o que aprender juntas.
              </p>
            </div>

            {/* Card 6: Livre Escolha */}
            <div className="pmp-philosophy-card">
              <div className="pmp-card-badge">06</div>
              <h4>Livre Escolha</h4>
              <p>
                Você é totalmente livre para decidir, escolher e crer. Não tomaremos nenhuma decisão por você, mas
                a instruiremos com base na verdade bíblica. A decisão de seguir a caminhada sempre será sua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: LIDERANÇA & CHAMADO (Slides 8 & 9) */}
      <section className="pmp-leadership-section">
        <div className="pmp-container">
          <h2 className="pmp-centered-title">
            <span className="pmp-cursive">Liderança do</span>
            <span className="pmp-bold-title">PROGRAMA & COMPROMISSO</span>
          </h2>

          {/* Interactive CSS Leadership Tree */}
          <div className="pmp-tree-diagram">
            <div className="pmp-tree-root">
              <div className="pmp-root-box">Liderança do PINK+ Perto</div>
            </div>

            <div className="pmp-tree-arrow-down"></div>

            <div className="pmp-tree-parent">
              <div className="pmp-parent-box">Jordania + Host de Grupo</div>
            </div>

            <div className="pmp-tree-connectors">
              <div className="pmp-connector-line"></div>
            </div>

            <div className="pmp-tree-leaves">
              <div className="pmp-leaf-box">HOST PMP<br /><span>GRUPO 01</span></div>
              <div className="pmp-leaf-box">HOST PMP<br /><span>GRUPO 02</span></div>
              <div className="pmp-leaf-box">HOST PMP<br /><span>GRUPO 03</span></div>
              <div className="pmp-leaf-box">HOST PMP<br /><span>GRUPO 04</span></div>
            </div>

            <div className="pmp-tree-co-leader">
              <p>O Host dos Grupos pode ser estruturada também com uma <strong>HOST E CO-HOST</strong></p>
            </div>
          </div>

          {/* Dual Autonomy / Commitment columns */}
          <div className="pmp-leadership-roles-grid">
            <div className="pmp-role-column">
              <h3>CADA HOST TERÁ AUTONOMIA PARA:</h3>
              <ul>
                <li>Marcar encontros presenciais e momentos de comunhão íntima com o seu grupo.</li>
                <li>Definir o dia, horário e periodicidade ideal dos encontros.</li>
                <li>Escolher o formato de reunião que preferir (on-line, presencial ou híbrido).</li>
              </ul>
            </div>

            <div className="pmp-role-column pmp-role-column-accent">
              <h3>O COMPROMISSO DA HOST:</h3>
              <ul>
                <li>Formar e zelar pelo grupo com suas discipuladas.</li>
                <li>Estudar a Bíblia e o livro base para ministrar o discipulado.</li>
                <li>Estudar profundamente o manual do Método D.I.V.E.</li>
              </ul>
            </div>
          </div>

          {/* Motivation Block */}
          <div className="pmp-motivation-block">
            <h3 className="pmp-motivation-title">
              <span className="pmp-cursive-small">Porque assumir a missão</span>
              <span className="pmp-bold-small">DE SER UMA HOST PMP?</span>
            </h3>

            <div className="pmp-motivation-grid">
              <div className="pmp-motivation-pill">
                <p>PORQUE É MELHOR DAR DO QUE RECEBER</p>
              </div>
              <div className="pmp-motivation-pill">
                <p>PORQUE QUANTO MAIS EU DOU, MAIS EU RECEBO</p>
              </div>
              <div className="pmp-motivation-pill">
                <p>PORQUE ESSA É A MINHA OFERTA PARA O SENHOR</p>
              </div>
              <div className="pmp-motivation-pill">
                <p>PORQUE SEMPRE TERÁ ALGUÉM QUE PRECISA DAQUILO QUE EU JÁ TENHO EM DEUS</p>
              </div>
              <div className="pmp-motivation-pill">
                <p>ME DESAFIA A APRENDER PARA ENSINAR</p>
              </div>
              <div className="pmp-motivation-pill">
                <p>PRECISO APRENDER A COMPARTILHAR COM OS OUTROS AQUILO QUE TENHO RECEBIDO DE DEUS</p>
              </div>
            </div>
          </div>

          {/* Final Call to Action Block */}
          <div id="cta" className="pmp-final-cta">
            <h2>Pronta para viver este novo tempo?</h2>
            <p>Seja participando de um grupo de mentoria ou assumindo o chamado de caminhar com outras mulheres.</p>

            <div className="pmp-cta-buttons-container">
              <a
                href="https://wa.me/5519995516247?text=Ol%C3%A1%21+Gostaria+de+participar+da+Mentoria+Pink+Mais+Perto%21"
                target="_blank"
                rel="noopener noreferrer"
                className="pmp-cta-btn pmp-cta-btn-main"
              >
                Quero ser Mentoriada
              </a>
              <a
                href="https://wa.me/5519995516247?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+como+ser+uma+l%C3%ADder+na+Mentoria+Pink+Mais+Perto%21"
                target="_blank"
                rel="noopener noreferrer"
                className="pmp-cta-btn pmp-cta-btn-outline"
              >
                Quero ser uma HOST PMP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Slide footer strip exactly matching visual PDF */}
      <footer className="pmp-strip-footer">
        <p>PINK MOVIMENTO • PINK + PERTO</p>
      </footer>
    </main>
  );
};

export default PinkMaisPerto;
