import Link from 'next/link';
import FaqAccordion from '@/components/FaqAccordion';

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="section hero-section" id="hero">
        {/* 3D Checkered Perspective Grid Plane (Avanço no Fundo) */}
        <div className="grid-3d-scene" aria-hidden="true">
          <div className="grid-3d-horizon" />
          <div className="grid-3d-plane" />
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="badge-outline">
              <span className="status-dot"></span>
              <span className="mono">v3.0 // NEXT.JS + REACT 19 + TYPESCRIPT</span>
            </div>

            <h1 className="heading-xl">
              Estrutura precisa. Linhas puras. <br />Performance absoluta.
            </h1>

            <p className="lead-text">
              Construímos interfaces digitais de alta conversão sem excessos. Uma abordagem focada em contornos limpos, código leve e experiência do usuário impecável.
            </p>

            <div className="btn-group">
              <Link href="/contato" className="btn btn-solid btn-lg">
                Iniciar Projeto
              </Link>
              <Link href="/servicos" className="btn btn-outline btn-lg">
                Explorar Serviços
              </Link>
            </div>
          </div>

          {/* Technical Mockup / Outline Showcase */}
          <div className="mockup-frame">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="mockup-dot"></span>
                <span className="mockup-dot"></span>
                <span className="mockup-dot"></span>
              </div>
              <span className="mockup-title mono">system.overview // monitor de performance</span>
              <span className="mockup-tag mono">status: normal</span>
            </div>

            <div className="mockup-body">
              <div className="mockup-panel">
                <div className="mockup-panel-header">
                  <span className="mockup-panel-title">Velocidade de Carga</span>
                  <span className="subtext mono">LCP</span>
                </div>
                <div className="mockup-metric mono">0.3s</div>
                <p className="subtext">Renderização SSR ultra-rápida via Next.js</p>
                <div className="mockup-bar">
                  <div className="mockup-bar-fill" style={{ width: '98%' }}></div>
                </div>
              </div>

              <div className="mockup-panel">
                <div className="mockup-panel-header">
                  <span className="mockup-panel-title">Score Lighthouse</span>
                  <span className="subtext mono">100/100</span>
                </div>
                <div className="mockup-metric mono">100%</div>
                <p className="subtext">Otimização máxima de SEO e Acessibilidade</p>
                <div className="mockup-bar">
                  <div className="mockup-bar-fill" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="mockup-panel">
                <div className="mockup-panel-header">
                  <span className="mockup-panel-title">Arquitetura</span>
                  <span className="subtext mono">App Router</span>
                </div>
                <div className="mockup-metric mono">Zero Bloat</div>
                <p className="subtext">Code-splitting e subpáginas instantâneas</p>
                <div className="mockup-bar">
                  <div className="mockup-bar-fill" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK TICKER */}
      <section className="partners-section">
        <div className="container">
          <div className="partners-inner">
            <span className="partners-label mono">Fundamentado em tecnologias modernas:</span>

            <div className="partner-logo-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              Next.js 15
            </div>

            <div className="partner-logo-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              React 19
            </div>

            <div className="partner-logo-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              TypeScript
            </div>

            <div className="partner-logo-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              Segurança & SEO
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="section" id="recursos">
        <div className="container">
          <div className="section-header">
            <div className="badge-outline">
              <span className="mono">// 01. DIFERENCIAIS</span>
            </div>
            <h2 className="heading-lg">Projetado com rigor milimétrico</h2>
            <p className="lead-text">
              Eliminamos bibliotecas pesadas para entregar código eficiente, visual arrojado e navegação responsiva de ponta a ponta.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="card-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3 className="heading-md">Velocidade Crítica</h3>
              <p>Otimização de ponta que carrega páginas em milissegundos, reduzindo taxa de rejeição e elevando sua conversão.</p>
              <div className="feature-meta mono">
                <span>99+ Score</span>
                <span>Core Web Vitals</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="card-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="heading-md">Responsividade Nativa</h3>
              <p>Layouts elásticos que se adaptam com perfeição em telas ultralargas, desktops, tablets e celulares sem distorções.</p>
              <div className="feature-meta mono">
                <span>Adaptive UI</span>
                <span>100% Mobile Ready</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="card-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <h3 className="heading-md">Design Tokens & Temas</h3>
              <p>Arquitetura baseada em variáveis CSS customizáveis para alternar entre Dark e Light Mode em tempo real.</p>
              <div className="feature-meta mono">
                <span>Dark / Light</span>
                <span>Custom Variables</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="card-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <h3 className="heading-md">SEO Técnico Estruturado</h3>
              <p>Marcação semântica com suporte a Open Graph e dados estruturados para máxima autoridade no Google.</p>
              <div className="feature-meta mono">
                <span>Open Graph</span>
                <span>Semantic HTML</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="card-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="heading-md">Código Limpo & Zero Bloat</h3>
              <p>Construção modular e tipada em TypeScript para escalabilidade sem dívida técnica.</p>
              <div className="feature-meta mono">
                <span>Modular React</span>
                <span>Type-Safe</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="card-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3 className="heading-md">Formulários & Conversão</h3>
              <p>Fluxos diretos e pontos de contato claros que guiam o visitante de forma natural até o fechamento de negócio.</p>
              <div className="feature-meta mono">
                <span>High Conversion</span>
                <span>Fast Leads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="section" id="como-funciona">
        <div className="container">
          <div className="section-header">
            <div className="badge-outline">
              <span className="mono">// 02. PROCESSO</span>
            </div>
            <h2 className="heading-lg">Como damos vida ao seu projeto</h2>
            <p className="lead-text">
              Um fluxo transparente e metódico desde o primeiro traço até o lançamento no servidor de produção.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <span className="step-number mono">PASSO 01</span>
              <h3>Briefing & Wireframe</h3>
              <p>Mapeamos a identidade da sua marca, público-alvo e definimos a arquitetura de conteúdo estruturada em linhas simples.</p>
            </div>

            <div className="step-card">
              <span className="step-number mono">PASSO 02</span>
              <h3>Design & Construção</h3>
              <p>Codificação em Next.js com estética outline e polimento das microinterações de cada componente da aplicação.</p>
            </div>

            <div className="step-card">
              <span className="step-number mono">PASSO 03</span>
              <h3>Testes & Publicação</h3>
              <p>Auditorias rigorosas de performance, testes de responsividade em múltiplos dispositivos e deploy contínuo em nuvem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section className="section" id="precos">
        <div className="container">
          <div className="section-header">
            <div className="badge-outline">
              <span className="mono">// 03. INVESTIMENTO</span>
            </div>
            <h2 className="heading-lg">Planos claros, sem surpresas</h2>
            <p className="lead-text">
              Escolha o modelo ideal para o momento do seu negócio ou produto digital.
            </p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-tier">Landing Essencial</div>
              <div className="pricing-desc">Perfeito para validação rápida de produtos ou serviços.</div>
              <div className="pricing-price">
                <span className="price-currency">R$</span>
                <span className="price-amount mono">950</span>
                <span className="price-period">/único</span>
              </div>
              <ul className="pricing-features">
                <li className="pricing-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Página única de alta conversão
                </li>
                <li className="pricing-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Design outline minimalista responsivo
                </li>
                <li className="pricing-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Integração WhatsApp & Formulário
                </li>
                <li className="pricing-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Deploy contínuo configurado (Vercel)
                </li>
              </ul>
              <Link href="/contato" className="btn btn-outline">Escolher Essencial</Link>
            </div>

            <div className="pricing-card featured">
              <div className="pricing-badge">Mais Popular</div>
              <div className="pricing-tier">Estrutura Profissional Next.js</div>
              <div className="pricing-desc">A solução completa com tema dinâmico e subpáginas integradas.</div>
              <div className="pricing-price">
                <span className="price-currency">R$</span>
                <span className="price-amount mono">1.850</span>
                <span className="price-period">/único</span>
              </div>
              <ul className="pricing-features">
                <li className="pricing-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Arquitetura Next.js com App Router & Subpáginas
                </li>
                <li className="pricing-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Suporte nativo Dark / Light Mode
                </li>
                <li className="pricing-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  SEO avançado & Schema.org integrado
                </li>
                <li className="pricing-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Análise de Performance 95+ garantida
                </li>
                <li className="pricing-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Componentes tipados em TypeScript
                </li>
              </ul>
              <Link href="/contato" className="btn btn-solid">Iniciar Profissional</Link>
            </div>

            <div className="pricing-card">
              <div className="pricing-tier">Sob Medida / Studio</div>
              <div className="pricing-desc">Para marcas que demandam ecossistemas e aplicações dedicadas.</div>
              <div className="pricing-price">
                <span className="price-currency">R$</span>
                <span className="price-amount mono">3.400+</span>
                <span className="price-period">/projeto</span>
              </div>
              <ul className="pricing-features">
                <li className="pricing-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Múltiplas páginas ou Web App completo
                </li>
                <li className="pricing-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Painel administrativo ou CMS headless
                </li>
                <li className="pricing-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Animações interativas personalizadas
                </li>
                <li className="pricing-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Suporte e evolução prioritários
                </li>
              </ul>
              <Link href="/contato" className="btn btn-outline">Consultar Projeto</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-header">
            <div className="badge-outline">
              <span className="mono">// 04. DÚVIDAS COMUNS</span>
            </div>
            <h2 className="heading-lg">Perguntas Frequentes</h2>
            <p className="lead-text">
              Tudo o que você precisa saber sobre o desenvolvimento e entrega da estrutura.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section" id="contato">
        <div className="container">
          <div className="cta-box">
            <div className="badge-outline">
              <span className="status-dot"></span>
              <span className="mono">DISPONÍVEL PARA NOVOS PROJETOS</span>
            </div>

            <h2 className="heading-lg">Pronto para transformar sua presença digital?</h2>
            <p className="lead-text">
              Conecte-se conosco e descubra como uma página limpa e rápida pode elevar o posicionamento da sua marca.
            </p>

            <div className="btn-group">
              <Link href="/contato" className="btn btn-solid btn-lg">
                Iniciar Orçamento
              </Link>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
              >
                Conversar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
