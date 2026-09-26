import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <div className="brand-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <span>
                Yuko<span style={{ color: 'var(--accent-primary-light)' }}>.</span>
              </span>
            </Link>
            <p>
              Desenvolvimento web artesanal, arquitetura Next.js, estética outline minimalista e desempenho absoluto.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navegação</h4>
            <div className="footer-links">
              <Link href="/" className="footer-link">Início</Link>
              <Link href="/servicos" className="footer-link">Serviços</Link>
              <Link href="/sobre" className="footer-link">Sobre Nós</Link>
              <Link href="/contato" className="footer-link">Contato</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4>Recursos</h4>
            <div className="footer-links">
              <Link href="/#faq" className="footer-link">Perguntas Frequentes</Link>
              <Link href="/#precos" className="footer-link">Tabela de Preços</Link>
              <Link href="/sobre#manifesto" className="footer-link">Manifesto Técnico</Link>
              <Link href="/contato" className="footer-link">Solicitar Orçamento</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4>Conexão</h4>
            <div className="footer-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter / X</a>
              <Link href="/contato" className="footer-link">Suporte Direto</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {currentYear} Yuko. Todos os direitos reservados.
          </div>
          <div className="status-badge mono">
            <span className="status-dot"></span>
            <span>SISTEMA 100% OPERACIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
