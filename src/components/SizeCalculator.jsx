import React, { useState } from 'react';

const tabelaFemea = [
  {num:0, min:1.0, max:1.5}, {num:1, min:1.5, max:2.5}, {num:2, min:2.5, max:3.5},
  {num:3, min:3.5, max:4.5}, {num:4, min:4.5, max:6.0}, {num:5, min:6.0, max:8.0},
  {num:6, min:8.0, max:10},  {num:7, min:10, max:13},   {num:8, min:13, max:17},
  {num:9, min:17, max:21},   {num:10,min:21, max:27},   {num:11,min:27, max:33},
  {num:12,min:33, max:40},   {num:13,min:40, max:48},   {num:14,min:48, max:56},
  {num:15,min:56, max:64}
];
const tabelaMacho = [
  {num:1, min:1.0, max:1.5}, {num:2, min:1.5, max:2.5}, {num:3, min:2.5, max:3.5},
  {num:4, min:3.5, max:5.0}, {num:5, min:5.0, max:6.0}, {num:6, min:6.0, max:8.0},
  {num:7, min:8.0, max:10},  {num:8, min:10, max:13},   {num:9, min:13, max:17},
  {num:10,min:17, max:21},   {num:11,min:21, max:32},   {num:12,min:32, max:38}
];

function calcular(sexo, peso) {
  const tabela = sexo === 'Fêmea' ? tabelaFemea : tabelaMacho;
  const faixa = tabela.find(t => peso >= t.min && peso < t.max);
  if (!faixa) return null;
  const limiar = faixa.min + (faixa.max - faixa.min) * 0.80;
  const sugerirMaior = peso >= limiar;
  return { numero: faixa.num, faixa: `${faixa.min}–${faixa.max} kg`, sugerirMaior };
}

export default function SizeCalculator() {
  const [sexo, setSexo] = useState('Fêmea');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleCalcular = (e) => {
    e.preventDefault();
    const res = calcular(sexo, parseFloat(peso));
    setResultado(res);
  };

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>Calculadora de Tamanho</h2>
        <p className="text-muted">Encontre o ajuste perfeito baseado no peso do seu pet</p>
      </div>

      <form onSubmit={handleCalcular} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            type="button"
            onClick={() => setSexo('Fêmea')}
            style={{ 
              flex: 1, padding: '12px', borderRadius: '50px', fontWeight: 600,
              background: sexo === 'Fêmea' ? 'var(--color-accent)' : 'var(--color-surface2)',
              color: sexo === 'Fêmea' ? 'var(--color-bg)' : 'var(--color-text)'
            }}
          >Fêmea</button>
          <button 
            type="button"
            onClick={() => setSexo('Macho')}
            style={{ 
              flex: 1, padding: '12px', borderRadius: '50px', fontWeight: 600,
              background: sexo === 'Macho' ? 'var(--color-accent)' : 'var(--color-surface2)',
              color: sexo === 'Macho' ? 'var(--color-bg)' : 'var(--color-text)'
            }}
          >Macho</button>
        </div>

        <div style={{ position: 'relative' }}>
          <input 
            type="number" 
            step="0.1"
            placeholder="Peso do pet (kg)" 
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            style={{
              width: '100%', padding: '14px 20px', borderRadius: '50px', background: 'var(--color-surface2)',
              border: '1px solid var(--color-border)', color: 'var(--color-text)', fontSize: '16px'
            }}
            required
          />
          <span style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }}>kg</span>
        </div>

        <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
          <i className="fas fa-calculator"></i> Calcular Tamanho
        </button>
      </form>

      {resultado && (
        <div className="glass fade-slide-up" style={{ marginTop: '32px', padding: '24px', textAlign: 'center' }}>
          <p className="all-caps" style={{ color: 'var(--color-accent)', marginBottom: '8px' }}>Tamanho Recomendado</p>
          <h3 style={{ fontSize: '48px', color: 'var(--color-text)' }}>Nº {resultado.numero}</h3>
          <p className="text-muted" style={{ fontSize: '14px' }}>Faixa de peso: {resultado.faixa}</p>
          
          {resultado.sugerirMaior && (
            <div style={{ marginTop: '16px', padding: '12px', borderRadius: '12px', background: 'rgba(0,196,212,0.1)', border: '1px solid var(--color-accent)' }}>
              <p style={{ color: 'var(--color-accent)', fontSize: '13px', fontWeight: 600 }}>
                ⚠️ Seu pet está nos 20% superiores desta faixa. Considere o Nº {resultado.numero + 1} para maior conforto.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
