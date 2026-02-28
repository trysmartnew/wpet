import React from 'react';

export default function Sobre() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <section style={{ background: 'var(--color-surface2)', padding: '60px 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Sobre a <span className="highlight">WPet</span></h1>
          <p className="text-muted" style={{ fontSize: '18px', maxWidth: '700px' }}>
            Referência nacional em roupa veterinária técnica, unindo ciência e carinho.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div className="card">
              <h2 style={{ marginBottom: '20px', color: 'var(--color-accent)' }}>Nossa História</h2>
              <p>A WPet nasceu da necessidade real que clínicas e tutores enfrentam no pós-operatório. Percebemos que o colar elizabetano, embora funcional, causava estresse e desconforto extremo aos animais. Decidimos então desenvolver uma solução que aliasse a proteção clínica necessária com o bem-estar que todo pet merece.</p>
            </div>

            <div className="card">
              <h2 style={{ marginBottom: '20px', color: 'var(--color-accent)' }}>Nossa Missão</h2>
              <p>Oferecer soluções têxteis clínicas para pets com dignidade e conforto, auxiliando profissionais da veterinária a entregarem resultados de recuperação superiores através de tecnologia e design anatômico.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              {[
                { icon: 'fa-heart', title: 'Cuidado', desc: 'O bem-estar animal é nossa prioridade absoluta.' },
                { icon: 'fa-lightbulb', title: 'Inovação', desc: 'Busca constante por novos materiais e tecnologias.' },
                { icon: 'fa-check-circle', title: 'Qualidade', desc: 'Rigor clínico em cada costura e acabamento.' },
                { icon: 'fa-handshake', title: 'Parceria', desc: 'Caminhamos lado a lado com médicos veterinários.' }
              ].map((v, i) => (
                <div key={i} className="card" style={{ textAlign: 'center' }}>
                  <i className={`fas ${v.icon}`} style={{ fontSize: '32px', color: 'var(--color-accent)', marginBottom: '16px' }}></i>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{v.title}</h3>
                  <p className="text-muted" style={{ fontSize: '13px' }}>{v.desc}</p>
                </div>
              ))}
            </div>

            <div className="card" style={{ textAlign: 'center', background: 'var(--color-accent-dim)', border: '1px solid var(--color-accent)' }}>
              <h2 style={{ marginBottom: '16px' }}>Posicionamento</h2>
              <p style={{ fontSize: '20px', fontWeight: 600, color: 'white' }}>"Referência nacional em roupa veterinária técnica"</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ textAlign: 'center' }}>
        <div className="container">
          <a href="https://wa.me/5524992618871" className="btn-whatsapp">
            <i className="fab fa-whatsapp"></i> Fale com um Especialista
          </a>
        </div>
      </section>
    </main>
  );
}
