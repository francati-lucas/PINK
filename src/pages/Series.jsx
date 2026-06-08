import { useState, useEffect } from 'react'
import '../styles/Series.css'
import { getSeries } from '../data/seriesData'

const Series = () => {
  const [series, setSeries] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(true)
  const [visibleCount, setVisibleCount] = useState(6)

  useEffect(() => {
    getSeries().then((data) => {
      setSeries(data)
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  // Close modal on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // Reset pagination when search query changes
  useEffect(() => {
    setVisibleCount(6)
  }, [searchQuery])

  // Filter series based on search query
  const filteredSeries = series.filter((serie) =>
    serie.titulo.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const displayedSeries = filteredSeries.slice(0, visibleCount)

  return (
    <main className="series-page">

      {/* ── Hero ── */}
      <section className="series-page-hero">
        <span className="series-page-hero-tag">Conteúdo PINK</span>
        <h1>Séries que transformam vidas</h1>
        <p>Mensagens poderosas compartilhadas nos nossos encontros. Assista, reflita e cresça.</p>
      </section>

      {/* ── Intro Editorial ── */}
      <section className="series-page-intro-section">
        <div className="series-intro-container">
          <p className="series-intro-text">
            As nossas Séries abordam os desafios do dia a dia e são ferramentas poderosas para o crescimento pessoal e transformação.
            Quando paramos para refletir sobre nossos pensamentos, comportamentos e emoções em situações cotidianas — seja lidando com o estresse no trabalho, navegando sobre conflitos nos relacionamentos ou gerenciando o tempo — começamos a nos entender em um nível mais profundo.
          </p>
          <p className="series-intro-text">
            Essa consciência nos ajuda a responder de forma mais intencional, em vez de reagir impulsivamente, nos levando a escolhas melhores e a uma vida mais satisfatória.
            Com o tempo, a autorreflexão constante pode transformar a maneira como nos vemos e como enxergamos o mundo ao nosso redor.
          </p>
          <blockquote className="series-intro-quote">
            “Até você tornar o inconsciente consciente, ele dirigirá sua vida e você o chamará de destino.”
            <cite>— Carl Jung</cite>
          </blockquote>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="series-page-grid-section">
        <div className="series-page-controls">
          <p className="series-page-count">
            <span>{filteredSeries.length}</span> {filteredSeries.length === 1 ? 'série encontrada' : 'séries encontradas'}
          </p>

          {/* Premium Search Input Field */}
          <div className="series-page-search-wrapper">
            <svg className="series-page-search-icon" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <input
              type="text"
              className="series-page-search-input"
              placeholder="Buscar por título..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                className="series-page-search-clear" 
                onClick={() => setSearchQuery('')}
                aria-label="Limpar busca"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {loading ? (
          <div className="series-empty"><p>Carregando séries...</p></div>
        ) : series.length === 0 ? (
          <div className="series-empty">
            <h3>Nenhuma série cadastrada ainda.</h3>
            <p>Em breve novos conteúdos estarão disponíveis aqui.</p>
          </div>
        ) : filteredSeries.length === 0 ? (
          <div className="series-empty">
            <h3>Nenhuma série encontrada para "{searchQuery}".</h3>
            <p>Tente buscar por outro termo ou limpe a busca.</p>
            <button className="serie-card-btn" onClick={() => setSearchQuery('')} style={{ marginTop: '20px', alignSelf: 'center' }}>
              Limpar Busca
            </button>
          </div>
        ) : (
          <>
            <div className="series-grid-cards">
              {displayedSeries.map((serie) => (
                <div key={serie.id} className="serie-card" onClick={() => setSelected(serie)}>
                  <div
                    className="serie-card-bg"
                    style={{ backgroundImage: `url(${serie.imagem})` }}
                  />
                  <div className="serie-card-content">
                    {serie.tag && <span className="serie-card-tag">{serie.tag}</span>}
                    <h3 className="serie-card-title">{serie.titulo}</h3>
                    <button className="serie-card-btn">Ver série</button>
                  </div>
                </div>
              ))}
            </div>

            {filteredSeries.length > visibleCount && (
              <div className="series-page-load-more-wrapper">
                <button 
                  className="series-page-load-more-btn"
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                >
                  Carregar Mais
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {selected && (
        <div
          className="serie-modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setSelected(null) }}
        >
          <div className="serie-modal">
            <div
              className="serie-modal-cover"
              style={{ backgroundImage: `url(${selected.imagem})` }}
            >
              {selected.tag && <span className="serie-card-tag">{selected.tag}</span>}
              <button
                className="serie-modal-close"
                onClick={() => setSelected(null)}
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>
            <div className="serie-modal-info">
              <p className="serie-modal-title">{selected.titulo}</p>
              <p className="serie-modal-desc">{selected.descricao}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Series
