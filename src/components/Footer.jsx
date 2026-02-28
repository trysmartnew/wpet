import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-surface2)', padding: '60px 0 30px', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div>
            <h3 style={{ color: 'var(--color-accent)', marginBottom: '20px' }}>WPET</h3>
            <p className="text-muted">Cuidado Clínico com Carinho. Especialistas em roupas pós-cirúrgicas e ortopédicas de alta performance.</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '20px' }}>Navegação</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/" className="text-muted">Início</Link></li>
              <li><Link to="/pos-cirurgicas" className="text-muted">Pós-Cirúrgicas</Link></li>
              <li><Link to="/ortopedicas" className="text-muted">Ortopédicas</Link></li>
              <li><Link to="/sobre" className="text-muted">Sobre Nós</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '20px' }}>Contato</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li className="text-muted"><i className="fas fa-map-marker-alt" style={{ color: 'var(--color-accent)', marginRight: '10px' }}></i> Aparecida, RJ — Brasil</li>
              <li className="text-muted"><i className="fab fa-whatsapp" style={{ color: 'var(--color-accent)', marginRight: '10px' }}></i> +55 24 99261-8871</li>
              <li className="text-muted"><i className="fas fa-envelope" style={{ color: 'var(--color-accent)', marginRight: '10px' }}></i> contatowpet@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-institucional">
          <div className="footer-inst-item">
            <i className="fas fa-id-card" />
            <span>CNPJ: <strong>45.252.777/0001-81</strong></span>
          </div>
          <div className="footer-inst-item">
            <i className="fas fa-envelope" />
            <a href="mailto:contatowpet@gmail.com">contatowpet@gmail.com</a>
          </div>
          <div className="footer-inst-item">
            <i className="fab fa-whatsapp" />
            <a href="https://wa.me/5524992618871" target="_blank">(24) 99261-8871</a>
          </div>
          <div className="footer-inst-item">
            <i className="fas fa-map-marker-alt" />
            <span>Aparecida, RJ — Brasil</span>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px', textAlign: 'center' }}>
          <p className="text-muted" style={{ fontSize: '14px' }}>&copy; {new Date().getFullYear()} WPet. Todos os direitos reservados. Tecnologia Veterinária de Ponta.</p>
        </div>
      </div>
    </footer>
  );
}
