import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/CartContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import PosCirurgicas from './pages/PosCirurgicas'
import Ortopedicas from './pages/Ortopedicas'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Carrinho from './pages/Carrinho'

export default function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/pos-cirurgicas" element={<PosCirurgicas />} />
        <Route path="/ortopedicas"    element={<Ortopedicas />} />
        <Route path="/sobre"          element={<Sobre />} />
        <Route path="/contato"        element={<Contato />} />
        <Route path="/carrinho"       element={<Carrinho />} />
      </Routes>
      <Footer />
      
      {/* Botão flutuante WhatsApp/Chatbot */}
      <a 
        href="https://wa.me/5524992618871" 
        target="_blank" 
        className="btn-whatsapp pulse-glow"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 9999,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          boxShadow: '0 8px 32px rgba(37,211,102,0.4)'
        }}
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </CartProvider>
  )
}
