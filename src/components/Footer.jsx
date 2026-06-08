import '../styles/Footer.css'
import LogoFooter from '../assets/LogoFooter.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__pink-bar">
        <div className="footer__inner">
          <img
            className="footer__logo"
            src={LogoFooter}
            alt="PINK"
          />
          <p className="footer__copyright">
            © 2012 - {currentYear} PINK - Mulher com Propósito. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer