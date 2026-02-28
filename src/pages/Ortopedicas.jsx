import React from 'react';
import ProductCard from '../components/ProductCard';

const coresOrtopedicas = [
  { 
    nome: 'Azul Turquesa',      
    hex: '#00C4D4', 
    slogan: 'A serenidade que transmite confiança clínica',
    descricao: 'Tom ciano vibrante que remete à precisão dos equipamentos médicos. Transmite calma, higiene e modernidade — a escolha natural de clínicas que comunicam excelência.'
  },
  { 
    nome: 'Verde Jade',         
    hex: '#2E8B57', 
    slogan: 'A sofisticação que protege',
    descricao: 'Verde profundo inspirado em jardins medicinais. Alia elegância discreta à sensação de cuidado natural, ideal para pets de temperamento sereno.'
  },
  { 
    nome: 'Verde Oceânico',     
    hex: '#1B8A72', 
    slogan: 'Energia vibrante para recuperação segura',
    descricao: 'Tom esmeralda que evoca vitalidade e renovação. Perfeito para transmitir que a recuperação está em curso com força e equilíbrio.'
  },
  { 
    nome: 'Rosa Candy',         
    hex: '#FF6B9D', 
    slogan: 'Doçura que conforta',
    descricao: 'Rosa vibrante e afetuoso, escolhido para expressar cuidado com leveza. Ideal para fêmeas que merecem recuperar-se com estilo e carinho.'
  },
  { 
    nome: 'Estampa Love',       
    hex: '#FF8FAB', 
    slogan: 'Carinho em cada detalhe',
    descricao: 'Estampa com elementos de coração em tons rosados. Comunica afeto genuíno e é a escolha favorita de tutores que querem demonstrar amor na recuperação do pet.'
  },
  { 
    nome: 'Estampa Zoo Fun',    
    hex: '#FFB347', 
    slogan: 'Alegria que acolhe',
    descricao: 'Estampa divertida com ilustrações de animais em tons quentes. Reduz o estresse do ambiente clínico e torna a recuperação mais leve para o pet e para a família.'
  },
  { 
    nome: 'Estampa Yellow Happy', 
    hex: '#FFD700', 
    slogan: 'O otimismo que inspira',
    descricao: 'Amarelo solar que estimula bom humor e esperança. Cientificamente associado à sensação de energia e disposição — exatamente o que seu pet precisa na recuperação.'
  },
  { 
    nome: 'Estampa Marine Care',  
    hex: '#4FC3F7', 
    slogan: 'Proteção com frescor marinho',
    descricao: 'Azul aquático com elementos marinhos que remetem à leveza e à liberdade. Transmite frescor, limpeza e a sensação de cuidado profundo com cada detalhe.'
  }
];

const precoOrtopedicaMembros = {
  1: 34.00,  2: 36.00,  3: 38.00,  4: 40.00,
  5: 43.00,  6: 47.00,  7: 48.00,  8: 50.00,
  9: 52.00, 10: 54.00, 11: 56.00, 12: 59.00,
 13: 61.00, 14: 64.00, 15: 67.00, 16: 70.00,
}

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
            <ProductCard 
              nome="Roupa Ortopédica Canina" 
              categoria="Ortopédica" 
              badge="ORTOPÉDICA" 
              slogan="Sustentação muscular e articular para cães."
              cores={coresOrtopedicas}
              tabelaPreco={precoOrtopedicaMembros}
            />
            <ProductCard 
              nome="Roupa Ortopédica Felina" 
              categoria="Ortopédica" 
              badge="ORTOPÉDICA" 
              slogan="Estabilidade com total liberdade de movimento."
              cores={coresOrtopedicas}
              tabelaPreco={precoOrtopedicaMembros}
            />
            <ProductCard 
              nome="Colete Ortopédico Lombar" 
              categoria="Ortopédica" 
              badge="ORTOPÉDICA" 
              slogan="Suporte focado na coluna e região lombar."
              cores={coresOrtopedicas}
              tabelaPreco={precoOrtopedicaMembros}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
