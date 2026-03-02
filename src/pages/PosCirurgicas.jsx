import React from 'react';
import ProductCard from '../components/ProductCard';
import { produtosPosCirurgicas } from '../data/dados';

export default function PosCirurgicas() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <section style={{ background: 'var(--color-surface2)', padding: '60px 0' }}>
        <div className="container">
          <span className="badge" style={{ marginBottom: '16px' }}>PÓS-CIRÚRGICA</span>
          <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Roupas <span className="highlight">Pós-Cirúrgicas</span></h1>
          <p className="text-muted" style={{ fontSize: '18px', maxWidth: '700px' }}>
            Proteção ideal para recuperação pós-operatória com conforto e dignidade. Desenvolvidas com tecido antimicrobiano de alta tecnologia.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid-products">
            {produtosPosCirurgicas.map(produto => (
              <ProductCard
                key={produto.id}
                nome={produto.nome}
                categoria={produto.categoria}
                badge={produto.badge}
                slogan={produto.slogan}
                cores={produto.cores}
                tabelaPreco={produto.tabelaPreco}
                imagem={produto.imagem}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
