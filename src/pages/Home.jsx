import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import '../styles/Home.css'
import '../styles/Series.css'
import HeroOne from '../assets/5.JPEG'
import HomeTwo from '../assets/6.JPEG'
import HomeThree from '../assets/HomeTrhee.jpg'
import imgCampinas from '../assets/campinas.jpg'
import imgGurupi from '../assets/gurupi.jpg'
import imgParaupebas from '../assets/recife.jpg'
import imgSerra from '../assets/serra.jpg'
import imgQuemE from '../assets/9.JPEG'
import imgCampinasE1 from '../assets/campinas_encontro1.jpg'
import imgCampinasE2 from '../assets/campinas_encontro2.jpg'
import imgCampinasE3 from '../assets/campinas_encontro3.jpg'
import imgLiderCampinas from '../assets/9.JPEG'
import imgSerraE from '../assets/SerraE.jpg'
import imgSerraE2 from '../assets/SerraE2.jpg'
import imgSerraE3 from '../assets/SerraE3.jpg'
import imgParauapebasL from '../assets/ParauapebasL.jpg'
import imgParauapebasE from '../assets/ParauapebasE.jpg'
import imgParauapebasE2 from '../assets/ParauapebasE2.jpg'
import imgParauapebasE3 from '../assets/ParauapebasE3.jpg'
import imgGurupiL from '../assets/GurupiL.jpeg'
import imgGurupiJ from '../assets/GurupiJ.jpeg'
import imgSerraL from '../assets/SerraL.jpeg'
import { getSeries } from '../data/seriesData'
import { getMeetings } from '../data/meetingsData'
import videoPastores from '../assets/VideoComprimido.mp4'

const backgroundImages = [HeroOne, HomeTwo, HomeThree]

const whatsappLink = (text) => `https://wa.me/5519995516247?text=${encodeURIComponent(text)}`

const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

// Aceita "@perfil", "perfil" ou o link completo do Instagram
const instagramHandle = (value) =>
  value.trim().replace(/^https?:\/\/(www\.)?instagram\.com\//i, '').replace(/^@/, '').replace(/[/?].*$/, '')

const MONTHS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
const MONTH_NAMES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

// Transforma a agenda do admin ("28/Fev, 19 e 20/Jun - Pink Love (20h)") em cards por mês.
// Se algum trecho não seguir o formato "dia/Mês", retorna null e o modal mostra o texto como está.
// As datas não têm ano: considera o ano atual para achar o próximo encontro.
const parseSchedule = (text) => {
  if (!text) return null
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const agenda = text.split(',').map((s) => s.trim()).filter(Boolean).map((item) => {
    const match = item.match(/^(\d{1,2}(?:\s*(?:e|a|-)\s*\d{1,2})?)\s*\/\s*([a-zç]+)\.?(.*)$/i)
    if (!match) return null
    const monthIndex = MONTHS.indexOf(match[2].slice(0, 3).toLowerCase())
    if (monthIndex === -1) return null

    const days = match[1].replace(/\s+/g, ' ')
    const lastDay = Number(days.match(/\d+/g).pop())
    const extras = [...match[3].matchAll(/\(([^)]*)\)/g)].map((m) => m[1].trim())
    const label = match[3].replace(/\([^)]*\)/g, '').replace(/^[\s–-]+|[\s–-]+$/g, '').trim()
    const multi = /\D/.test(days)

    return {
      month: MONTH_NAMES[monthIndex],
      days,
      multi,
      note: [label, ...extras].filter(Boolean).join(' · '),
      // Datas de dois dias ou com evento (Pink Love, Aniversário...) ganham destaque; horário sozinho não
      special: multi || Boolean(label) || extras.some((e) => !/^\d{1,2}h(\d{2})?$/i.test(e)),
      past: new Date(today.getFullYear(), monthIndex, lastDay) < today,
    }
  })

  return agenda.length && agenda.every(Boolean) ? agenda : null
}

const cityExtraData = {
  campinas: {
    leaderName: 'Jordania, Nadja, Marta e Eidy',
    leaderPhoto: imgLiderCampinas,
    // { src, position } ajusta o enquadramento da miniatura (ex.: rosto no alto da foto)
    meetingPhotos: [{ src: imgCampinasE1, position: 'center 25%' }, imgCampinasE2, imgCampinasE3],
    instagram: 'pinkmovimento'
  },
  gurupi: {
    leaderName: 'Pra Jane Melo',
    leaderPhoto: imgGurupiL,
    meetingPhotos: [imgGurupiJ],
    instagram: 'pinkmovimentogurupi'
  },
  paraupebas: {
    leaderName: 'Fabrine',
    leaderPhoto: imgParauapebasL,
    meetingPhotos: [imgParauapebasE, imgParauapebasE2, imgParauapebasE3],
    instagram: 'pinkparauapebas'
  },
  serra: {
    leaderName: 'Rana',
    leaderPhoto: imgSerraL,
    meetingPhotos: [imgSerraE, imgSerraE2, imgSerraE3],
    instagram: 'pinkmovimentoserra'
  }
}

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedSerie, setSelectedSerie] = useState(null)
  const [selectedMeeting, setSelectedMeeting] = useState(null)
  const [activePhoto, setActivePhoto] = useState(null)
  const [homeSeries, setHomeSeries] = useState([])
  const [meetingsList, setMeetingsList] = useState([])
  const [newCity, setNewCity] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  // Link "Encontros" do header (/#encontros): rola até a seção, vindo de qualquer página
  useEffect(() => {
    if (location.hash === '#encontros') scrollToSection('encontros')
  }, [location])

  const handleNewCity = (e) => {
    e.preventDefault()
    const city = newCity.trim()
    const text = city
      ? `Olá! Gostaria de levar o PINK para a minha cidade: ${city}.`
      : 'Olá! Gostaria de levar o PINK para a minha cidade.'
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
  }

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

  // O Instagram cadastrado no admin tem prioridade sobre o padrão da cidade
  const cityInstagram = selectedMeeting
    ? instagramHandle(selectedMeeting.instagram || cityExtraData[selectedMeeting.key]?.instagram || '')
    : ''

  const cityAgenda = selectedMeeting ? parseSchedule(selectedMeeting.schedule) : null
  const nextMeetingIndex = cityAgenda ? cityAgenda.findIndex((item) => !item.past) : -1

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
              <h1>Bem-vinda ao PINK!</h1>
              <h2>Aqui, você não está sozinha.</h2>
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={() => scrollToSection('about')}>Conhecer o PINK</button>
                <button className="btn btn-secondary" onClick={() => scrollToSection('encontros')}>Nossos Encontros</button>
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

          <button
            className="hero-scroll"
            onClick={() => scrollToSection('about')}
            aria-label="Rolar para Quem é o PINK"
          />
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
              </div>

              <div className="about-image">
                <div
                  className="image-frame"
                  style={{ backgroundImage: `url(${imgQuemE})` }}
                />
              </div>
            </div>

            <div className="formats">
              <h3 className="formats-title">Como o PINK funciona hoje</h3>
              <p className="formats-subtitle">Você pode viver o PINK em dois formatos:</p>

              <div className="formats-grid">
                <div className="format-card">
                  <span className="format-number">01</span>
                  <h4>Encontros mensais</h4>
                  <p>
                    Uma vez por mês, as mulheres de cada cidade se reúnem para um encontro com louvor, palavra,
                    oração e comunhão, preparado com carinho pelas equipes do PINK Apoio.
                  </p>
                  <button className="btn-outline-pink" onClick={() => scrollToSection('encontros')}>Ver encontros</button>
                </div>

                <div className="format-card">
                  <span className="format-number">02</span>
                  <h4>PINK Home</h4>
                  <p>
                    Você abre a sua casa e convida amigas, vizinhas e familiares. Uma líder do PINK vai até vocês
                    para conduzir um encontro especial, num ambiente íntimo e acolhedor.
                  </p>
                  <button className="about-button" onClick={() => navigate('/pink-home')}>Conhecer o PINK Home</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="history" className="history">
          <div className="container">
            <div className="section-header">
              <h2>Nossos pastores</h2>
              <p className="history-subtitle">
                Garo e Jordania Nargiz são os pastores do PINK.
              </p>
            </div>

            <p className="history-intro">
              Ordenados pastores e líderes da igreja Assembleia de Deus nos Estados Unidos, eles têm como paixão mentorear e formar líderes com propósito.
              Fundado pela pastora Jordania, o PINK nasceu com o desejo de aproximar mulheres a Deus com propósito. Saiba mais no vídeo abaixo:
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

        <section id="encontros" className="meetings">
          <div className="container">
            <div className="section-header">
              <h2>Nossos encontros</h2>
              <p className="meetings-subtitle">
                Os encontros do PINK ocorrem 1 vez por mês nas cidades abaixo. Entre em contato para participar!
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

            <div className="new-city">
              <h3>Quer o PINK na sua cidade?</h3>
              <p>
                Conte pra gente onde você mora e vamos conversar sobre como levar os encontros do PINK até aí.
              </p>
              <form className="new-city-form" onSubmit={handleNewCity}>
                <input
                  type="text"
                  value={newCity}
                  onChange={(e) => setNewCity(e.target.value)}
                  placeholder="Sua cidade / estado"
                  aria-label="Sua cidade"
                />
                <button type="submit" className="about-button">Quero o PINK aqui</button>
              </form>
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
                {cityAgenda ? (
                  <>
                    <strong className="city-agenda-title">Agenda dos encontros</strong>
                    <div className="city-agenda-grid">
                      {cityAgenda.map((item, i) => (
                        <div
                          key={i}
                          className={[
                            'city-agenda-card',
                            item.special && 'is-special',
                            i === nextMeetingIndex && 'is-next',
                          ].filter(Boolean).join(' ')}
                        >
                          {i === nextMeetingIndex && <span className="city-agenda-next">Próximo</span>}
                          <span className="city-agenda-month">{item.month}</span>
                          <span className={`city-agenda-day${item.multi ? ' is-multi' : ''}`}>{item.days}</span>
                          {item.note && <span className="city-agenda-note">{item.note}</span>}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="city-detail-item">
                    <strong>Agenda:</strong>
                    <span>{selectedMeeting.schedule}</span>
                  </div>
                )}
              </div>

              <div className="city-modal-contact">
                <a
                  className="city-modal-btn"
                  href={whatsappLink(`Olá! Gostaria de participar do encontro do PINK em ${selectedMeeting.city}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quero participar
                </a>
                {cityInstagram && (
                  <a
                    className="city-modal-btn city-modal-btn--outline"
                    href={`https://www.instagram.com/${cityInstagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @{cityInstagram}
                  </a>
                )}
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
                    {cityExtraData[selectedMeeting.key].meetingPhotos.map((photo, i) => {
                      const src = photo.src || photo
                      return (
                        <div
                          key={i}
                          className="city-modal-gallery-img"
                          style={{ backgroundImage: `url(${src})`, backgroundPosition: photo.position }}
                          onClick={() => setActivePhoto(src)}
                        />
                      )
                    })}
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