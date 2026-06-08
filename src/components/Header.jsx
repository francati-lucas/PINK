import { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoPink from '../assets/LogoPink.svg'
import '../styles/Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo-wrapper">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img
              src={LogoPink}
              alt="PINK MulherPropósito"
              className="header__logo"
            />
          </Link>
        </div>

        {/* Hamburger Menu Toggle Button */}
        <button
          className={`header__hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`header__nav ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="header__nav-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/missoes" className="header__nav-link" onClick={() => setIsOpen(false)}>
            Missões
          </Link>
          <Link to="/pink-mais-perto" className="header__nav-link" onClick={() => setIsOpen(false)}>
            Mentoria PMP
          </Link>
          <Link to="/pink-apoio" className="header__nav-link" onClick={() => setIsOpen(false)}>
            PINK Apoio
          </Link>
          <Link to="/pink-home" className="header__nav-link" onClick={() => setIsOpen(false)}>
            PINK Home
          </Link>
          <Link to="/pink-love" className="header__nav-link" onClick={() => setIsOpen(false)}>
            PINK Love
          </Link>
          <Link to="/series" className="header__nav-link" onClick={() => setIsOpen(false)}>
            Séries
          </Link>
          <Link to="/loja" className="header__nav-link" onClick={() => setIsOpen(false)}>
            Loja
          </Link>
          <Link to="/contato" className="header__nav-link" onClick={() => setIsOpen(false)}>
            Contato
          </Link>

          <Link
            to="/semei"
            className="header__semei-button"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setIsOpen(false)}
          >
            SEMEI
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header