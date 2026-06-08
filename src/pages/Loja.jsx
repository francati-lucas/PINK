import imgLoja from '../assets/Loja.jpg'
import '../styles/Loja.css'

const Loja = () => {
  // Array of 3 high-quality products representing the PINK movement catalog
  const products = [
    {
      id: 1,
      title: 'Camiseta Oficial PINK',
      tag: 'Vestuário',
      price: 'R$ 89,90',
      description: 'Vista a nossa identidade! Camiseta confeccionada em material premium para você vestir o propósito no dia a dia.',
      image: imgLoja
    },
    {
      id: 2,
      title: 'Livro "Você Não Está Sozinha"',
      tag: 'Literatura',
      price: 'R$ 59,90',
      description: 'O livro oficial escrito pela fundadora Jordania Nargiz. Uma leitura transformadora sobre cura e conexões reais.',
      image: imgLoja
    },
    {
      id: 3,
      title: 'Copo Térmico Personalizado',
      tag: 'Acessórios',
      price: 'R$ 45,00',
      description: 'Lindo copo personalizado do Movimento PINK para te acompanhar nos momentos de oração, estudo e rotina.',
      image: imgLoja
    }
  ];

  return (
    <main className="loja-page">
      <div className="loja-container">
        {/* Header Section */}
        <header className="loja-header">
          <h1>Loja PINK</h1>
          <p>Vista o propósito de pertencer, crescer e florescer na fé. Vista a nossa identidade.</p>
          <div className="loja-payments-info">
            <svg className="payment-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', flexShrink: 0, color: 'var(--accent-rose-mauve)' }}>
              <rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="2" y1="10" x2="22" y2="10"></line>
            </svg>
            <span>Aceitamos pagamento à vista (transferência bancária), cartões de débito e crédito (consulte condições)</span>
          </div>
        </header>

        {/* Product Grid */}
        <section className="loja-grid">
          {products.map((product) => (
            <article key={product.id} className="loja-card">
              {/* Image Container matching cohesive site style */}
              <div className="loja-card-img-wrapper">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="loja-card-img" 
                />
                {product.tag && <span className="loja-card-tag">{product.tag}</span>}
              </div>

              {/* Cohesive Site Body Design */}
              <div className="loja-card-body">
                <h3 className="loja-card-title">{product.title}</h3>
                <span className="loja-card-price">{product.price}</span>
                <p className="loja-card-desc">{product.description}</p>
                <button 
                  className="loja-card-btn"
                  onClick={() => window.open(`https://wa.me/5519995516247?text=Olá! Gostaria de comprar o produto: ${encodeURIComponent(product.title)}`, '_blank', 'noopener,noreferrer')}
                >
                  Comprar pelo WhatsApp
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}

export default Loja
