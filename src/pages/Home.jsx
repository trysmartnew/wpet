import React from 'react';
import { Link } from 'react-router-dom';
import SizeCalculator from '../components/SizeCalculator';

export default function Home() {
  return (
    <main>
      {/* ① SEÇÃO HERO */}
      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0E2235 0%, #0A1A2A 100%)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '100px'
      }}>
        <div style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'radial-gradient(circle at 70% 50%, rgba(0,196,212,0.05), transparent 60%)',
          pointerEvents: 'none'
        }}></div>

        <div className="container">
          <div style={{ maxWidth: '800px', position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div className="pulse-glow" style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-accent)' }}></div>
              <span className="all-caps" style={{ color: 'var(--color-accent)', fontSize: '12px' }}>TECNOLOGIA VETERINÁRIA · CÃES E GATOS</span>
            </div>

            <h1 style={{ fontSize: 'clamp(40px, 8vw, 72px)', marginBottom: '24px' }}>
              A recuperação começa com o{' '}
              <span className="highlight">cuidado certo.</span>
            </h1>
            
            <p className="text-muted" style={{ fontSize: 'clamp(18px, 3vw, 22px)', marginBottom: '40px', maxWidth: '600px' }}>
              Roupas pós-cirúrgicas e ortopédicas desenvolvidas para resultados clínicos reais em cães e gatos.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
              <Link to="/pos-cirurgicas" className="btn-primary">🐾 Ver Pós-Cirúrgicas</Link>
              <Link to="/ortopedicas" className="btn-outlined">🦴 Ver Ortopédicas</Link>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {["✓ Antimicrobiano", "✓ Hipoalergênico", "✓ Cães e Gatos", "✓ Alternativa ao Colar"].map(t => (
                <div key={t} className="badge" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}>{t}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Badge flutuante glassmorphism */}
        <div className="glass" style={{ 
          position: 'absolute', bottom: '15%', right: '8%', padding: '24px', 
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
          zIndex: 3
        }} id="hero-floating-badge">
          <span style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-accent)' }}>98%</span>
          <span className="all-caps" style={{ fontSize: '11px', color: 'var(--color-text-muted)', textAlign: 'center' }}>Eficácia Clínica</span>
        </div>
      </section>

      {/* ② SEÇÃO NÚMEROS DE CONFIANÇA */}
      <section style={{ background: 'var(--color-surface2)', padding: '32px 0' }}>
        <div className="container">
          <div className="numero-confianca">
            <div className="numero-item">
              <span style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-accent)' }}>16</span>
              <span className="all-caps" style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Tamanhos disponíveis</span>
            </div>
            <div className="numero-item">
              <span style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-accent)' }}>8</span>
              <span className="all-caps" style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Cores e estampas</span>
            </div>
            <div className="numero-item">
              <span style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-accent)' }}>98%</span>
              <span className="all-caps" style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Eficácia clínica</span>
            </div>
            <div className="numero-item">
              <span style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-accent)' }}>24h</span>
              <span className="all-caps" style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Atendimento via WhatsApp</span>
            </div>
          </div>
        </div>
      </section>

      {/* ③ SEÇÃO DESTAQUE PÓS-CIRÚRGICAS */}
      <section style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div className="secao-destaque">
            <div style={{ flex: 1, maxWidth: '480px' }}>
              <span className="badge" style={{ marginBottom: '16px' }}>PÓS-CIRÚRGICA</span>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800, marginBottom: '20px' }}>
                Proteção ideal para{' '}
                <span className="highlight">recuperação pós-operatória</span>
              </h2>
              <p className="text-muted" style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '24px' }}>
                Desenvolvida para cães e gatos, a roupa pós-cirúrgica WPet substitui com vantagem o colar elizabetano. Tecido antimicrobiano de alta elasticidade que protege a incisão e garante conforto total durante toda a recuperação.
              </p>
              <ul className="lista-beneficios">
                <li><i className="fas fa-check-circle"></i> Protege suturas e drenos sem restringir movimentos</li>
                <li><i className="fas fa-check-circle"></i> Tecido antimicrobiano inibe proliferação bacteriana</li>
                <li><i className="fas fa-check-circle"></i> Disponível para cães (Nº 0 ao 15) e gatos (Nº 00 ao 3)</li>
                <li><i className="fas fa-check-circle"></i> Preços a partir de R$ 29,00</li>
              </ul>
              <Link to="/pos-cirurgicas" className="btn-primary" style={{ width: 'fit-content' }}>
                Ver Roupas Pós-Cirúrgicas →
              </Link>
            </div>

            <div style={{ flex: '0 0 320px' }}>
              <div className="card" style={{ padding: '28px', border: '1px solid rgba(0,196,212,0.2)', borderRadius: '24px', boxShadow: '0 24px 64px rgba(0,196,212,0.08)' }}>
                <div style={{ aspectRatio: '4/3', background: 'var(--color-surface2)', borderRadius: '16px', overflow: 'hidden' }}>
                  <img src="/images/pos-cirurgica-canina-1.png" alt="Roupa Pós-Cirúrgica Canina" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '16px' }}>
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#00C4D4' }}></div>
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#FF6B9D' }}></div>
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#2E8B57' }}></div>
                  <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginLeft: '4px' }}>+ 5 cores e estampas</span>
                </div>
                <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>A partir de</span>
                  <span style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-accent)' }}>R$ 29,00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ④ SEÇÃO DESTAQUE ORTOPÉDICAS (ESPELHADA) */}
      <section style={{ background: 'var(--color-surface2)' }}>
        <div className="container">
          <div className="secao-destaque espelhado">
            <div style={{ flex: 1, maxWidth: '480px' }}>
              <span className="badge" style={{ marginBottom: '16px' }}>ORTOPÉDICA</span>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800, marginBottom: '20px' }}>
                Suporte técnico para{' '}
                <span className="highlight">reabilitação e movimento</span>
              </h2>
              <p className="text-muted" style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '24px' }}>
                A roupa ortopédica WPet oferece sustentação precisa para pets em reabilitação de membros posteriores e condições osteoarticulares. Elasticidade anatômica que acompanha cada movimento sem comprimir.
              </p>
              <ul className="lista-beneficios">
                <li><i className="fas fa-check-circle"></i> Sustentação para membros posteriores sem imobilização</li>
                <li><i className="fas fa-check-circle"></i> Elasticidade que acompanha o movimento natural do pet</li>
                <li><i className="fas fa-check-circle"></i> Tamanhos Nº 1 ao 16 para todas as raças</li>
                <li><i className="fas fa-check-circle"></i> Preços a partir de R$ 34,00</li>
              </ul>
              <Link to="/ortopedicas" className="btn-primary" style={{ width: 'fit-content' }}>
                Ver Roupas Ortopédicas →
              </Link>
            </div>

            <div style={{ flex: '0 0 320px' }}>
              <div className="card" style={{ padding: '28px', border: '1px solid rgba(0,196,212,0.2)', borderRadius: '24px', boxShadow: '0 24px 64px rgba(0,196,212,0.08)' }}>
                <div style={{ aspectRatio: '4/3', background: 'var(--color-surface2)', borderRadius: '16px', overflow: 'hidden' }}>
                  <img src="/images/pos-cirurgica-canina-2.jpg" alt="Roupa Ortopédica Canina" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '16px' }}>
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#00C4D4' }}></div>
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#FF6B9D' }}></div>
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#2E8B57' }}></div>
                  <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginLeft: '4px' }}>+ 5 cores e estampas</span>
                </div>
                <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>A partir de</span>
                  <span style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-accent)' }}>R$ 34,00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⑤ SEÇÃO DIFERENCIAIS CLÍNICOS */}
      <section style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
            <span className="all-caps" style={{ fontSize: '11px', color: 'var(--color-text-muted)', letterSpacing: '0.12em', display: 'block', marginBottom: '12px' }}>
              POR QUE PROFISSIONAIS ESCOLHEM A WPET
            </span>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800 }}>
              Desenvolvida para{' '}
              <span className="highlight">resultados clínicos reais</span>
            </h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '16px' 
          }}>
            {[
              { icon: 'fa-shield-alt', title: 'Compressão controlada', desc: 'Proteção da incisão sem restringir movimento' },
              { icon: 'fa-bacterium', title: 'Tecnologia antimicrobiana', desc: 'Tecido inibe proliferação bacteriana na ferida' },
              { icon: 'fa-wind', title: 'Respirável e hipoalergênico', desc: 'Conforto prolongado sem irritação cutânea' },
              { icon: 'fa-paw', title: 'Anatomia anti-lambedura', desc: 'Reduz tração na sutura sem colar elizabetano' },
              { icon: 'fa-ban', title: 'Substitui o colar', desc: 'Alternativa superior com mais dignidade ao pet' }
            ].map((d, i) => (
              <div key={i} className="card" style={{ 
                padding: '24px', 
                borderRadius: '16px',
                transition: 'all 0.3s ease'
              }}>
                <i className={`fas ${d.icon}`} style={{ fontSize: '28px', color: 'var(--color-accent)', marginBottom: '14px', display: 'block' }}></i>
                <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>{d.title}</h3>
                <p className="text-muted" style={{ fontSize: '13px', lineHeight: 1.6 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑥ SEÇÃO CALCULADORA DE TAMANHO */}
      <section style={{ background: 'var(--color-surface2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '480px', margin: '0 auto 40px' }}>
            <span className="all-caps" style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '8px' }}>FERRAMENTA GRATUITA</span>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 32px)', fontWeight: 800, marginBottom: '12px' }}>
              Descubra o tamanho ideal{' '}
              <span className="highlight">em segundos</span>
            </h2>
            <p className="text-muted" style={{ fontSize: '14px' }}>
              Informe o peso e o sexo do pet — o número correto aparece automaticamente.
            </p>
          </div>
          <div style={{ maxWidth: '480px', margin: '0 auto' }}>
            <SizeCalculator />
          </div>
        </div>
      </section>

      {/* ⑦ SEÇÃO CTA FINAL WHATSAPP */}
      <section style={{ background: 'var(--color-surface2)', textAlign: 'center' }}>
        <div className="container">
          <i className="fas fa-comment-dots" style={{ fontSize: '40px', color: 'var(--color-accent)', marginBottom: '20px' }}></i>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginBottom: '16px' }}>
            Pronto para fazer{' '}
            <span className="highlight">seu pedido?</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '16px', maxWidth: '420px', margin: '0 auto 32px' }}>
            Atendimento personalizado para clínicas, hospitais e profissionais. Rápido, simples e seguro via WhatsApp.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div className="badge" style={{ background: 'rgba(255,255,255,0.05)', color: 'white' }}>🔒 Pedido seguro</div>
            <div className="badge" style={{ background: 'rgba(255,255,255,0.05)', color: 'white' }}>⚡ Resposta rápida</div>
            <div className="badge" style={{ background: 'rgba(255,255,255,0.05)', color: 'white' }}>🐾 Especialistas em pets</div>
          </div>

          <a 
            href="https://wa.me/5524992618871" 
            target="_blank" 
            className="btn-whatsapp"
            style={{ 
              marginTop: '28px', 
              padding: '16px 40px', 
              fontSize: '16px', 
              boxShadow: '0 4px 24px rgba(37,211,102,0.3)' 
            }}
          >
            <i className="fab fa-whatsapp"></i> Iniciar Pedido no WhatsApp
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          #hero-floating-badge { display: none !important; }
        }
      `}</style>
    </main>
  );
}
