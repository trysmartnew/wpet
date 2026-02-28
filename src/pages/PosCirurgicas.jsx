import React from 'react';
import ProductCard from '../components/ProductCard';

const coresPosCirurgicas = [
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

const precoPosCirurgicaCaes = {
  0: 29.00,  1: 29.00,  2: 30.00,  3: 32.00,
  4: 32.00,  5: 32.00,  6: 38.00,  7: 38.00,
  8: 40.00,  9: 42.00, 10: 49.00, 11: 49.00,
 12: 52.00, 13: 56.00, 14: 59.00, 15: 65.00,
}

const precoPosCirurgicaGatos = {
  '00': 31.00, 0: 31.00, 1: 31.00, 2: 31.00, 3: 31.00,
}

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
            <ProductCard 
              nome="Roupa Pós-Cirúrgica Canina" 
              categoria="Pós-Cirúrgica" 
              badge="PÓS-CIRÚRGICA" 
              slogan="Proteção anatômica para cães de todos os portes."
              cores={coresPosCirurgicas}
              tabelaPreco={precoPosCirurgicaCaes}
            />
            <ProductCard 
              nome="Roupa Pós-Cirúrgica Felina" 
              categoria="Pós-Cirúrgica" 
              badge="PÓS-CIRÚRGICA" 
              slogan="Design exclusivo que respeita a agilidade dos gatos."
              cores={coresPosCirurgicas}
              tabelaPreco={precoPosCirurgicaGatos}
            />
            <ProductCard 
              nome="Macacão Pós-Cirúrgico Total" 
              categoria="Pós-Cirúrgica" 
              badge="PÓS-CIRÚRGICA" 
              slogan="Cobertura máxima para procedimentos complexos."
              cores={coresPosCirurgicas}
              tabelaPreco={precoPosCirurgicaCaes}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
