import React from 'react';
import ProductCard from '../components/ProductCard';
import { produtosOrtopedicas } from '../data/dados';

export default function Ortopedicas() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <section style={{ background: 'var(--color-surface2)', padding: '60px 0' }}>
        <div className="container">
          <span className="badge" style={{ marginBottom: '16px' }}>ORTOPÉDICA</span>
          <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Roupas <span className="highlight">Ortopédicas</span></h1>
          <p className="text-muted" style={{ fontSize: '18px', maxWidth: '700px' }}>
            Suporte técnico para reabilitação e condições osteoarticulares. Sustentação e estabilidade com compressão controlada.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid-products">
            {produtosOrtopedicas.map(produto => (
              <ProductCard
                key={produto.id}
                nome={produto.nome}
                categoria={produto.categoria}
                badge={produto.badge}
                slogan={produto.slogan}
                cores={produto.cores}
                tabelaPreco={produto.tabelaPreco}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
