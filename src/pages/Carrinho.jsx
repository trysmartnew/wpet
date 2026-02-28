import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';

export default function Carrinho() {
  const { cartItems, removeItem, updateQty, cartCount } = useCart();

  const handleFinalizar = () => {
    const linhas = cartItems.map((item, i) =>
      `${i + 1}. ${item.nome} — ${item.cor} — ${item.sexo} — ${item.tamanho} — Qtd: ${item.quantidade}`
    ).join('\n');
    const msg = encodeURIComponent(
      `Olá WPet! Meu pedido:\n\n${linhas}\n\nAguardo valores.`
    );
    window.open(`https://wa.me/5524992618871?text=${msg}`, '_blank');
  };

  if (cartCount === 0) {
    return (
      <main style={{ paddingTop: '80px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <i className="fas fa-shopping-cart" style={{ fontSize: '80px', color: 'var(--color-accent)', opacity: 0.3, marginBottom: '24px' }}></i>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Seu carrinho está vazio</h2>
          <p className="text-muted" style={{ marginBottom: '32px' }}>Adicione produtos para solicitar um orçamento via WhatsApp.</p>
          <Link to="/pos-cirurgicas" className="btn-primary">Ver Produtos</Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <div className="container">
        <h1 style={{ fontSize: '36px', marginBottom: '40px' }}>Seu <span className="highlight">Carrinho</span></h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', lg: '2fr 1fr', gap: '40px' }} className="cart-layout">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {cartItems.map((item) => (
              <div key={item.id} className="card" style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ width: '80px', height: '80px', background: 'var(--color-surface2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fas fa-paw" style={{ color: 'var(--color-accent)', opacity: 0.3 }}></i>
                </div>
                
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <div className="badge" style={{ marginBottom: '4px' }}>{item.categoria}</div>
                  <h3 style={{ fontSize: '18px' }}>{item.nome}</h3>
                  <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
                    <span className="text-muted" style={{ fontSize: '13px' }}>Cor: <strong>{item.cor}</strong></span>
                    <span className="text-muted" style={{ fontSize: '13px' }}>Sexo: <strong>{item.sexo}</strong></span>
                    <span className="text-muted" style={{ fontSize: '13px' }}>Tam: <strong>{item.tamanho}</strong></span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button onClick={() => updateQty(item.id, -1)} className="btn-outlined" style={{ padding: '4px 12px', minWidth: 'auto' }}>−</button>
                  <span style={{ fontWeight: 700, minWidth: '20px', textAlign: 'center' }}>{item.quantidade}</span>
                  <button onClick={() => updateQty(item.id, 1)} className="btn-outlined" style={{ padding: '4px 12px', minWidth: 'auto' }}>+</button>
                </div>

                <div style={{ textAlign: 'right', minWidth: '100px' }}>
                  <p style={{ color: 'var(--color-accent)', fontWeight: 700 }}>Consultar</p>
                  <button onClick={() => removeItem(item.id)} style={{ background: 'none', color: 'var(--color-alert)', fontSize: '12px', marginTop: '4px' }}>Remover</button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
            <div className="card" style={{ background: 'var(--color-surface2)' }}>
              <h3 style={{ marginBottom: '24px' }}>Resumo do Pedido</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span className="text-muted">Total de itens:</span>
                <span>{cartCount}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', borderTop: '1px solid var(--color-border)', paddingTop: '12px' }}>
                <span style={{ fontWeight: 700 }}>Total:</span>
                <span style={{ color: 'var(--color-accent)', fontWeight: 800 }}>Consultar WPet</span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button onClick={handleFinalizar} className="btn-whatsapp" style={{ width: '100%', justifyContent: 'center' }}>
                  <i className="fab fa-whatsapp"></i> Finalizar via WhatsApp
                </button>
                <Link to="/pos-cirurgicas" className="btn-outlined" style={{ width: '100%', justifyContent: 'center' }}>
                  Adicionar mais produtos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 1024px) {
          .cart-layout { grid-template-columns: 2fr 1fr !important; }
        }
      `}</style>
    </main>
  );
}
