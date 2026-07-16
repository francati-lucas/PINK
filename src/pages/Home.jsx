import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../styles/Home.css'
import '../styles/Series.css'
import HeroOne from '../assets/5.JPEG'
import HomeTwo from '../assets/6.JPEG'
import HomeThree from '../assets/HomeTrhee.png'
import imgCampinas from '../assets/campinas.jpg'
import imgGurupi from '../assets/gurupi.jpg'
import imgParaupebas from '../assets/recife.jpg'
import imgSerra from '../assets/serra.jpg'
import imgQuemE from '../assets/QuemE.png'
import imgJessica from '../assets/mentoria_jessica.png'
import imgPinkMais from '../assets/pink+.JPG'
import imgCardAmor from '../assets/card_amor.jpg'
import imgLiderCampinas from '../assets/9.JPEG'
import { getSeries } from '../data/seriesData'
import { getMeetings } from '../data/meetingsData'
import videoPastores from '../assets/VideoComprimido.mp4'

const backgroundImages = [HeroOne, HomeTwo, HomeThree]

const cityExtraData = {
  campinas: {
    leaderName: 'Jordania, Nadja, Marta e Eidy',
    leaderPhoto: imgLiderCampinas,
    meetingPhotos: [imgCampinas, imgPinkMais, imgCardAmor]
  },
  gurupi: {
    leaderName: 'Líder Gurupi',
    leaderPhoto: imgJessica,
    meetingPhotos: [imgGurupi, imgPinkMais, imgCardAmor]
  },
  paraupebas: {
    leaderName: 'Líder Paraupebas',
    leaderPhoto: imgJessica,
    meetingPhotos: [imgParaupebas, imgPinkMais, imgCardAmor]
  },
  serra: {
    leaderName: 'Líder Serra',
    leaderPhoto: imgJessica,
    meetingPhotos: [imgSerra, imgPinkMais, imgCardAmor]
  }
}

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedSerie, setSelectedSerie] = useState(null)
  const [selectedMeeting, setSelectedMeeting] = useState(null)
  const [activePhoto, setActivePhoto] = useState(null)
  const [homeSeries, setHomeSeries] = useState([])
  const [meetingsList, setMeetingsList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    getSeries()
      .then((data) => setHomeSeries(data.filter((s) => s.destaque).slice(0, 3)))
      .catch(() => { })
  }, [])

  useEffect(() => {
    getMeetings()
      .then((data) => setMeetingsList(data))
      .catch(() => { })
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        setSelectedSerie(null)
        setSelectedMeeting(null)
        setActivePhoto(null)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const getPosition = (index) => {
    if (index === currentIndex) return 'current'
    if (index === (currentIndex - 1 + backgroundImages.length) % backgroundImages.length) return 'prev'
    if (index === (currentIndex + 1) % backgroundImages.length) return 'next'
    return 'hidden'
  }

  const getImageByKey = (key) => {
    switch (key) {
      case 'campinas': return imgCampinas
      case 'gurupi': return imgGurupi
      case 'paraupebas': return imgParaupebas
      case 'serra': return imgSerra
      default: return imgCampinas
    }
  }

  return (
    <>
      <main>
        <section id="home" className="hero">
          <div
            className="hero-bg"
            style={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }}
          />

          <div className="hero-carousel">
            {backgroundImages.map((image, index) => {
              const position = getPosition(index)
              return (
                <div
                  key={index}
                  className={`hero-slide ${position}`}
                  style={{ backgroundImage: `url(${image})` }}
                  onClick={() => {
                    if (position === 'prev') {
                      setCurrentIndex((currentIndex - 1 + backgroundImages.length) % backgroundImages.length)
                    } else if (position === 'next') {
                      setCurrentIndex((currentIndex + 1) % backgroundImages.length)
                    }
                  }}
                />
              )
            })}
          </div>

          <div className="hero-overlay" />

          <div className="container">
            <div className="hero-content">
              <h1>Bem vinda ao PINK</h1>
              <h2>Aqui, você não está sozinha</h2>
              <p>
                Mulheres caminhando juntas para viver o propósito de Deus.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={() => document.getElementById('meetings')?.scrollIntoView({ behavior: 'smooth' })}>Nossos Encontros</button>
                <button className="btn btn-secondary" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>Conhecer o PINK</button>
              </div>
            </div>
          </div>

          <div className="hero-dots">
            {backgroundImages.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <div className="about-content">
              <div className="about-card">
                <h3>Quem é o PINK?</h3>
                <p>
                  Fundado em 2012 pela pastora Jordania Nargiz, em Campinas-SP, o PINK é um movimento cristão
                  que tem como missão ajudar moças e mulheres, independentemente da idade, a descobrirem o seu
                  propósito e identidade.
                </p>
                <p>
                  Com extensões em outros estados do Brasil, o PINK tem levantado uma comunidade de mulheres que não
                  roubam a coroa uma das outras, mas que protegem a coroa da outra.
                </p>
                <p>
                  Sabemos o que você está pensando: <em>“Amizade feminina é complicada. Já me decepcionei muito. Por isso não tenho amigas de verdade.”</em>
                </p>
                <p>
                  Nós estamos quebrando e mudando isso. <strong>É possível, sim, ter amizades saudáveis e sem falsidade!</strong> Venha conhecer nossa comunidade e descubra por você mesma essa verdade.
                </p>
                <div className="about-buttons">
                  <button className="btn-outline-pink" onClick={() => window.open('https://wa.me/5519995516247?text=Olá! Gostaria de falar com a PINK.', '_blank')}>Fale com o Pink</button>
                  <button className="about-button" onClick={() => navigate('/pink-home')}>Conheça o PINK mais perto</button>
                </div>
              </div>

              <div className="about-image">
                <div
                  className="image-frame"
                  style={{ backgroundImage: `url(${imgQuemE})` }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="history" className="history">
          <div className="container">
            <div className="section-header">
              <h2>Nossos pastores</h2>
              <p className="history-subtitle">
                Garo e Jordania Nargiz são os pastores fundadores do PINK.
              </p>
            </div>

            <p className="history-intro">
              Ordenados pastores e líderes da igreja Assembleia de Deus nos Estados Unidos, eles têm como paixão mentoriar e formar líderes com propósito.
              O PINK nasceu com o desejo de aproximar mulheres a Deus com propósito. Saiba mais no vídeo abaixo:
            </p>

            <div className="history-video">
              <video
                src={videoPastores}
                controls
                playsInline
                preload="metadata"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </section>

        <section id="meetings" className="meetings">
          <div className="container">
            <div className="section-header">
              <h2>Nossos encontros</h2>
              <p className="meetings-subtitle">
                Os encontros do PINK ocorrem 1 vez por mês. Saiba mais a respeito da sua cidade ou região abaixo ou entre em contato conosco.
                <br /><a href="#" onClick={(e) => { e.preventDefault(); navigate('/pink-home'); }}>Sua cidade pode ser a próxima, saiba mais.</a>
              </p>
            </div>

            <div className="meetings-grid">
              {meetingsList.map((item) => (
                <div key={item.id} className="meeting-card">
                  <div
                    className="meeting-card-bg"
                    style={{ backgroundImage: `url(${getImageByKey(item.key)})` }}
                  />
                  <div className="meeting-card-content">
                    {item.badge && <span className="meeting-badge">{item.badge}</span>}
                    <h3>{item.city}</h3>
                    <button className="btn-small" onClick={() => setSelectedMeeting(item)}>Saiba mais</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="meetings-cta">
              <button className="btn btn-primary" onClick={() => window.open('https://wa.me/5519995516247?text=Olá! Gostaria de mais informações sobre os Encontros do PINK.', '_blank')}>
                Entre em contato
              </button>
            </div>
          </div>
        </section>

        <section id="series" className="series">
          <div className="container">
            <div className="series-header">
              <h2>Nossas séries em destaque</h2>
              <button className="btn-small-pink" onClick={() => navigate('/series')}>Ver todas as séries</button>
            </div>

            <div className="series-grid">
              {homeSeries.map((serie) => (
                <div key={serie.id} className="series-card" style={{ cursor: 'pointer' }} onClick={() => setSelectedSerie(serie)}>
                  <div
                    className="series-card-bg"
                    style={serie.imagem ? { backgroundImage: `url(${serie.imagem})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                  />
                  <div className="series-card-content">
                    <h3>{serie.titulo}</h3>
                    <button className="btn-small" onClick={(e) => { e.stopPropagation(); setSelectedSerie(serie) }}>Ver série</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── Modal ── */}
      {selectedSerie && (
        <div
          className="serie-modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedSerie(null) }}
        >
          <div className="serie-modal">
            <div
              className="serie-modal-cover"
              style={{ backgroundImage: `url(${selectedSerie.imagem})` }}
            >
              {selectedSerie.tag && <span className="serie-card-tag">{selectedSerie.tag}</span>}
              <button
                className="serie-modal-close"
                onClick={() => setSelectedSerie(null)}
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>
            <div className="serie-modal-info">
              <p className="serie-modal-title">{selectedSerie.titulo}</p>
              <p className="serie-modal-desc">{selectedSerie.descricao}</p>
            </div>
          </div>
        </div>
      )}
      {/* ── City Modal ── */}
      {selectedMeeting && (
        <div
          className="city-modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedMeeting(null) }}
        >
          <div className="city-modal">
            <button
              className="city-modal-close"
              onClick={() => setSelectedMeeting(null)}
              aria-label="Fechar"
            >
              ✕
            </button>
            <div
              className="city-modal-banner"
              style={{ backgroundImage: `url(${getImageByKey(selectedMeeting.key)})` }}
            >
              {selectedMeeting.badge && <span className="city-modal-badge">{selectedMeeting.badge}</span>}
            </div>
            <div className="city-modal-body">
              <span className="city-modal-tag">Encontro Mensal</span>
              <h2>{selectedMeeting.city}</h2>
              <div className="city-modal-details">
                <div className="city-detail-item">
                  <strong>Agenda:</strong>
                  <span>{selectedMeeting.schedule}</span>
                </div>
              </div>

              {/* Liderança Local */}
              {cityExtraData[selectedMeeting.key] && (
                <div className="city-modal-leader">
                  <div
                    className="city-modal-leader-img"
                    style={{ backgroundImage: `url(${cityExtraData[selectedMeeting.key].leaderPhoto})` }}
                  />
                  <div className="city-modal-leader-info">
                    <span className="city-modal-leader-label">Liderança Local</span>
                    <span className="city-modal-leader-name">{cityExtraData[selectedMeeting.key].leaderName}</span>
                  </div>
                </div>
              )}

              {/* Fotos dos Encontros */}
              {cityExtraData[selectedMeeting.key] && (
                <div className="city-modal-gallery">
                  <h4 className="city-modal-gallery-title">Registros dos Encontros</h4>
                  <div className="city-modal-gallery-grid">
                    {cityExtraData[selectedMeeting.key].meetingPhotos.map((photo, i) => (
                      <div
                        key={i}
                        className="city-modal-gallery-img"
                        style={{ backgroundImage: `url(${photo})` }}
                        onClick={() => setActivePhoto(photo)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Photo Lightbox Modal ── */}
      {activePhoto && (
        <div
          className="photo-lightbox-overlay"
          onClick={() => setActivePhoto(null)}
        >
          <button
            className="photo-lightbox-close"
            onClick={() => setActivePhoto(null)}
            aria-label="Fechar Foto"
          >
            ✕
          </button>
          <img src={activePhoto} alt="Encontro Ampliado" className="photo-lightbox-img" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  )
}

export default Home