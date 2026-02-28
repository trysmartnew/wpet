import React from 'react';

export default function ProductModal({ produto, isOpen, onClose, onAddToCart }) {
  if (!isOpen) return null;

  return (
    <div 
      onClick={onClose}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)',
        zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div 
        onClick={e => e.stopPropagation()}
        className="fade-slide-up"
        style={{
          background: 'var(--color-surface)', border: '1px solid var(--color-border)',
          borderRadius: '24px', width: '100%', maxWidth: '600px', padding: '32px',
          maxHeight: '90vh', overflowY: 'auto'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
          <div>
            <span className="badge" style={{ marginBottom: '8px' }}>{produto.categoria}</span>
            <h2 style={{ fontSize: '28px' }}>{produto.nome}</h2>
          </div>
          <button onClick={onClose} style={{ background: 'none', color: 'white', fontSize: '24px' }}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
          <div style={{ background: 'var(--color-surface2)', borderRadius: '16px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="fas fa-microscope" style={{ fontSize: '48px', color: 'var(--color-accent)' }}></i>
          </div>
          <div>
            <h4 className="all-caps" style={{ color: 'var(--color-accent)', marginBottom: '12px' }}>Especificações</h4>
            <p style={{ fontSize: '14px', marginBottom: '8px' }}><strong>Composição:</strong> 82,5% PES + 17,5% PUE</p>
            <p style={{ fontSize: '14px' }}><strong>Tecnologia:</strong> Antimicrobiano Integrado</p>
          </div>
        </div>

        <h4 className="all-caps" style={{ color: 'var(--color-accent)', marginBottom: '16px' }}>Benefícios Clínicos</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
          {[
            { icon: 'fa-feather', text: 'Material leve e resistente' },
            { icon: 'fa-expand-arrows-alt', text: 'Elasticidade anatômica' },
            { icon: 'fa-leaf', text: 'Toque suave e hipoalergênico' },
            { icon: 'fa-hospital', text: 'Alta durabilidade clínica' },
            { icon: 'fa-soap', text: 'Fácil higienização' },
            { icon: 'fa-wind', text: 'Respirabilidade superior' }
          ].map((b, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <i className={`fas ${b.icon}`} style={{ color: 'var(--color-accent)', width: '20px' }}></i>
              <span style={{ fontSize: '13px' }}>{b.text}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <button onClick={onClose} className="btn-outlined" style={{ flex: 1, justifyContent: 'center' }}>Fechar</button>
          <button 
            className="btn-primary" 
            style={{ flex: 1, justifyContent: 'center' }}
            disabled={!produto.tamanho || !produto.cor}
            onClick={() => {
              onAddToCart();
              onClose();
            }}
          >Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
}
