import React, { useState } from 'react';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!nome || !mensagem) return;
    const msg = encodeURIComponent(`Olá WPet! Me chamo ${nome}.\n\n${mensagem}`);
    window.open(`https://wa.me/5524992618871?text=${msg}`, '_blank');
  };

  return (
    <main style={{ paddingTop: '80px' }}>
      <section style={{ background: 'var(--color-surface2)', padding: '60px 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Fale <span className="highlight">Conosco</span></h1>
          <p className="text-muted" style={{ fontSize: '18px', maxWidth: '700px' }}>
            Estamos prontos para atender sua clínica ou hospital veterinário.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div>
              <h2 style={{ marginBottom: '24px' }}>Informações de Contato</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-accent-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fas fa-map-marker-alt" style={{ color: 'var(--color-accent)' }}></i>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600 }}>Localização</p>
                    <p className="text-muted" style={{ fontSize: '14px' }}>Aparecida, RJ — Brasil</p>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-accent-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fab fa-whatsapp" style={{ color: 'var(--color-accent)' }}></i>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600 }}>WhatsApp Business</p>
                    <a href="https://wa.me/5524992618871" target="_blank" className="text-muted" style={{ fontSize: '14px' }}>+55 (24) 99261-8871</a>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-accent-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fas fa-envelope" style={{ color: 'var(--color-accent)' }}></i>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600 }}>E-mail Oficial</p>
                    <a href="mailto:contatowpet@gmail.com" className="text-muted" style={{ fontSize: '14px' }}>contatowpet@gmail.com</a>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-accent-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fas fa-id-card" style={{ color: 'var(--color-accent)' }}></i>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600 }}>Dados Legais</p>
                    <p className="text-muted" style={{ fontSize: '14px' }}>CNPJ: 45.252.777/0001-81</p>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-accent-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fas fa-clock" style={{ color: 'var(--color-accent)' }}></i>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600 }}>Horário de Atendimento</p>
                    <p className="text-muted" style={{ fontSize: '14px' }}>Segunda a Sexta: 08h às 18h</p>
                  </div>
                </li>
              </ul>
            </div>

            <form onSubmit={handleWhatsApp} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="all-caps" style={{ fontSize: '12px', color: 'var(--color-accent)' }}>Seu Nome</label>
                <input 
                  type="text" 
                  placeholder="Seu nome completo" 
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  style={{
                    width: '100%', padding: '14px 20px', borderRadius: '50px', background: 'var(--color-surface2)',
                    border: '1px solid var(--color-border)', color: 'white'
                  }}
                  required
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label className="all-caps" style={{ fontSize: '12px', color: 'var(--color-accent)' }}>Mensagem</label>
                <textarea 
                  placeholder="Como posso ajudar?" 
                  rows="4"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  style={{
                    width: '100%', padding: '14px 20px', borderRadius: '20px', background: 'var(--color-surface2)',
                    border: '1px solid var(--color-border)', color: 'white', resize: 'none'
                  }}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn-primary" 
                disabled={!nome || !mensagem}
                style={{ width: '100%', justifyContent: 'center', opacity: (!nome || !mensagem) ? 0.5 : 1 }}
              >
                <i className="fab fa-whatsapp"></i> Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
