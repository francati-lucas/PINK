import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Missoes from './pages/Missoes.jsx'
import PinkMaisPerto from './pages/PinkMaisPerto.jsx'
import PinkApoio from './pages/PinkApoio.jsx'
import Series from './pages/Series.jsx'
import Loja from './pages/Loja.jsx'
import Admin from './pages/Admin.jsx'
import Contato from './pages/Contato.jsx'
import Semei from './pages/Semei.jsx'
import PinkHome from './pages/PinkHome.jsx'
import PinkLove from './pages/PinkLove.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/missoes" element={<Missoes />} />
        <Route path="/pink-mais-perto" element={<PinkMaisPerto />} />
        <Route path="/pink-apoio" element={<PinkApoio />} />
        <Route path="/series" element={<Series />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/semei" element={<Semei />} />
        <Route path="/pink-home" element={<PinkHome />} />
        <Route path="/pink-love" element={<PinkLove />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App