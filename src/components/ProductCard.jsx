import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import ProductModal from './ProductModal';

const tabelaFemea = [
  {num:0,  min:1.0,  max:1.5},  {num:1,  min:1.5,  max:2.5},
  {num:2,  min:2.5,  max:3.5},  {num:3,  min:3.5,  max:4.5},
  {num:4,  min:4.5,  max:6.0},  {num:5,  min:6.0,  max:8.0},
  {num:6,  min:8.0,  max:10.0}, {num:7,  min:10.0, max:13.0},
  {num:8,  min:13.0, max:17.0}, {num:9,  min:17.0, max:21.0},
  {num:10, min:21.0, max:27.0}, {num:11, min:27.0, max:33.0},
  {num:12, min:33.0, max:40.0}, {num:13, min:40.0, max:48.0},
  {num:14, min:48.0, max:56.0}, {num:15, min:56.0, max:64.0},
]

const tabelaMacho = [
  {num:1,  min:1.0,  max:1.5},  {num:2,  min:1.5,  max:2.5},
  {num:3,  min:2.5,  max:3.5},  {num:4,  min:3.5,  max:5.0},
  {num:5,  min:5.0,  max:6.0},  {num:6,  min:6.0,  max:8.0},
  {num:7,  min:8.0,  max:10.0}, {num:8,  min:10.0, max:13.0},
  {num:9,  min:13.0, max:17.0}, {num:10, min:17.0, max:21.0},
  {num:11, min:21.0, max:32.0}, {num:12, min:32.0, max:38.0},
]

function calcularTamanho(sexo, peso) {
  const tabela = sexo === 'Fêmea' ? tabelaFemea : tabelaMacho
  const faixa  = tabela.find(t => peso >= t.min && peso < t.max)
  return faixa ? faixa.num : null
}

function getPreco(tabelaPreco, tamanhoSelecionado) {
  if (!tabelaPreco || !tamanhoSelecionado) return null
  const num = tamanhoSelecionado.replace('Nº ', '').trim()
  const chave = isNaN(num) ? num : Number(num)
  return tabelaPreco?.[chave] ?? null
}

export default function ProductCard({ nome, categoria, badge, slogan, cores, tabelaPreco }) {
  const { addItem } = useCart();
  const [sexo, setSexo] = useState('Fêmea');
  const [tamanho, setTamanho] = useState(null);
  const [cor, setCor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pesoPet, setPesoPet] = useState('');
  const [tamanhoCalc, setTamanhoCalc] = useState(null);
  const [isColorsOpen, setIsColorsOpen] = useState(false);

  useEffect(() => {
    const peso = parseFloat(pesoPet)
    if (!isNaN(peso) && peso > 0 && sexo) {
      const num = calcularTamanho(sexo, peso)
      setTamanhoCalc(num)
      if (num !== null) setTamanho(`Nº ${num}`)
    } else {
      setTamanhoCalc(null)
    }
  }, [pesoPet, sexo])

  const handleSexoChange = (s) => {
    setSexo(s);
    setTamanho(null);
  };

  const handleAddToCart = () => {
    if (!tamanho || !cor) return;
    const item = {
      id: `${nome}-${cor.nome}-${sexo}-${tamanho}`,
      nome,
      categoria,
      cor: cor.nome,
      corHex: cor.hex,
      sexo,
      tamanho,
      quantidade: 1
    };
    addItem(item);
  };

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* ① Imagem placeholder */}
      <div style={{ background: 'var(--color-surface2)', borderRadius: 16, aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <i className="fas fa-paw" style={{ fontSize: 48, color: 'var(--color-accent)', opacity: 0.3 }} />
        {cor && (
           <div style={{ position: 'absolute', bottom: 12, right: 12, width: 32, height: 32, borderRadius: '50%', background: cor.hex, border: '2px solid var(--color-text)' }} />
        )}
      </div>

      {/* ② Faixa de badges */}
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <div className="badge">{badge}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 600, color: '#2ecc71' }}>
          <span className="pulse-glow" style={{ width: '8px', height: '8px', background: '#2ecc71', borderRadius: '50%' }}></span>
          Disponível
        </div>
      </div>
      
      {/* ③ Nome do produto */}
      <h3 style={{ fontSize: '20px', marginBottom: '4px' }}>{nome}</h3>

      {/* ④ Slogan em itálico */}
      <p className="text-muted" style={{ fontSize: '14px', fontStyle: 'italic' }}>{slogan}</p>

      {/* ⑤ Selos de confiança */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--color-text-muted)' }}>
          <i className="fas fa-shield-alt" style={{ fontSize: '13px', color: 'var(--color-accent)' }}></i>
          <span>Tecido antimicrobiano</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--color-text-muted)' }}>
          <i className="fas fa-recycle" style={{ fontSize: '13px', color: 'var(--color-accent)' }}></i>
          <span>Longa durabilidade</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--color-text-muted)' }}>
          <i className="fas fa-pump-medical" style={{ fontSize: '13px', color: 'var(--color-accent)' }}></i>
          <span>Uso clínico aprovado</span>
        </div>
      </div>

      {/* ⑥ Divisor hr sutil ciano */}
      <hr style={{ border: 'none', height: '1px', background: 'rgba(0, 196, 212, 0.1)', margin: '4px 0' }} />

      {/* ⑦ Acordeão cores/estampas */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <button 
          onClick={() => setIsColorsOpen(!isColorsOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            background: 'var(--color-surface2)',
            border: '1px solid var(--color-border)',
            borderRadius: '50px',
            padding: '10px 20px',
            color: 'var(--color-text)',
            fontSize: '13px',
            fontWeight: 600
          }}
        >
          <span className="all-caps">Cores e Estampas</span>
          <i className={`fas fa-chevron-${isColorsOpen ? 'up' : 'down'}`} style={{ color: 'var(--color-accent)' }}></i>
        </button>

        {isColorsOpen && (
          <div className="fade-slide-up" style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '10px', 
            padding: '12px',
            background: 'rgba(255,255,255,0.02)',
            borderRadius: '16px',
            border: '1px dashed var(--color-border)'
          }}>
            {cores.map(c => (
              <button 
                key={c.nome}
                onClick={() => setCor(c)}
                title={c.nome}
                style={{
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '50%', 
                  background: c.hex, 
                  border: cor?.nome === c.nome ? '3px solid var(--color-accent)' : '2px solid rgba(255,255,255,0.1)',
                  flexShrink: 0,
                  transition: 'transform 0.2s',
                  transform: cor?.nome === c.nome ? 'scale(1.1)' : 'scale(1)'
                }}
              />
            ))}
            {cor && (
              <div style={{ width: '100%', marginTop: '4px', fontSize: '11px', color: 'var(--color-accent)', fontWeight: 600 }}>
                Selecionado: {cor.nome}
              </div>
            )}
            {cor?.descricao && (
              <div className="cor-desc-bloco">
                <p className="cor-desc-slogan">{cor.slogan}</p>
                <p className="cor-desc-texto">{cor.descricao}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ⑧ Calculadora de tamanho */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <button 
          onClick={() => handleSexoChange('Fêmea')}
          style={{ 
            flex: 1, padding: '8px', borderRadius: '50px', fontSize: '12px', fontWeight: 600,
            background: sexo === 'Fêmea' ? 'var(--color-accent)' : 'var(--color-surface2)',
            color: sexo === 'Fêmea' ? 'var(--color-bg)' : 'var(--color-text)'
          }}
        >Fêmea</button>
        <button 
          onClick={() => handleSexoChange('Macho')}
          style={{ 
            flex: 1, padding: '8px', borderRadius: '50px', fontSize: '12px', fontWeight: 600,
            background: sexo === 'Macho' ? 'var(--color-accent)' : 'var(--color-surface2)',
            color: sexo === 'Macho' ? 'var(--color-bg)' : 'var(--color-text)'
          }}
        >Macho</button>
      </div>

      <div className="size-calc-block">
        <label className="all-caps" style={{ fontSize: '12px', color: 'var(--color-accent)' }}>Tamanho da Roupa</label>

        <input
          type="number"
          min="0.1" max="100" step="0.1"
          placeholder="Peso do pet (kg)"
          value={pesoPet}
          onChange={e => setPesoPet(e.target.value)}
          className="input-peso-pet"
        />

        {tamanhoCalc !== null && (
          <span className="tamanho-resultado">
            Tamanho Nº {tamanhoCalc}
          </span>
        )}

        {pesoPet && tamanhoCalc === null && (
          <span className="tamanho-fora">
            Peso fora da tabela — consulte a WPet
          </span>
        )}
      </div>

      {/* ⑨ Seletor de tamanho (exibindo o resultado calculado) */}
      {tamanho && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', background: 'var(--color-surface2)', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
          <span className="all-caps" style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>Selecionado:</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-accent)' }}>{tamanho}</span>
        </div>
      )}

      {/* ⑩ Bloco de preço (dinâmico por tamanho) */}
      {(() => {
        const preco = getPreco(tabelaPreco, tamanho)
        return (
          <div className="preco-bloco">
            {preco !== null ? (
              <>
                <span className="preco-label">Valor unitário</span>
                <span className="preco-valor">
                  R$ {preco.toFixed(2).replace('.', ',')}
                </span>
              </>
            ) : (
              <span className="preco-hint">
                <i className="fas fa-tag" /> Selecione um tamanho para ver o valor
              </span>
            )}
          </div>
        )
      })()}

      {/* ⑪ Bloco de composição (Placeholder conforme hierarquia) */}
      <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'flex', gap: '4px' }}>
        <span style={{ fontWeight: 600 }}>Composição:</span>
        <span>90% Poliamida, 10% Elastano</span>
      </div>

      {/* ⑫ Aviso de pedido WhatsApp + cadeado */}
      <div className="aviso-pedido">
        <i className="fas fa-lock" />
        <span>Pedido confirmado com segurança via WhatsApp</span>
      </div>

      {/* ⑬ Botões de ação */}
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button 
          className="btn-primary" 
          disabled={!tamanho || !cor}
          onClick={handleAddToCart}
          style={{ 
            width: '100%', justifyContent: 'center',
            opacity: (!tamanho || !cor) ? 0.5 : 1,
            cursor: (!tamanho || !cor) ? 'not-allowed' : 'pointer'
          }}
        >
          <i className="fas fa-shopping-cart"></i> Adicionar ao Carrinho
        </button>

        <button 
          onClick={() => setIsModalOpen(true)} 
          className="btn-outlined"
          style={{ 
            width: '100%', justifyContent: 'center', fontSize: '14px', padding: '10px'
          }}
        >
          <i className="fas fa-file-alt"></i> Ver Descrição
        </button>
      </div>

      <ProductModal 
        produto={{ nome, categoria, slogan, cor, sexo, tamanho }}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
