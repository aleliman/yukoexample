'use client';

import { useState } from 'react';

export default function ContatoPage() {
  const [formState, setFormState] = useState({
    nome: '',
    email: '',
    tipo: 'landing-page',
    orcamento: '1k-3k',
    mensagem: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulação de envio com feedback imediato
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="section" style={{ paddingTop: '5rem' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge-outline">
            <span className="mono">// CANAL DIRETO</span>
          </div>
          <h1 className="heading-xl">Vamos construir algo memorável juntos</h1>
          <p className="lead-text">
            Preencha o formulário abaixo ou nos chame diretamente nos canais de atendimento para receber uma proposta detalhada.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start', maxWidth: '1080px', marginInline: 'auto' }}>
          {/* Formulário Interativo */}
          <div>
            {submitted ? (
              <div
                className="form-outline"
                style={{ textAlign: 'center', padding: '3.5rem 2rem' }}
              >
                <div
                  className="card-icon-box"
                  style={{ margin: '0 auto 1.5rem', borderColor: 'var(--status-active)', color: 'var(--status-active)' }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="heading-md" style={{ fontSize: '1.5rem' }}>Mensagem Recebida com Sucesso!</h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', marginBottom: '2rem' }}>
                  Agradecemos pelo contato, <strong>{formState.nome}</strong>. Analisaremos sua proposta e responderemos em até 24 horas úteis.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-outline"
                  style={{ margin: '0 auto' }}
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="form-outline">
                <h2 className="heading-md" style={{ marginBottom: '0.5rem' }}>Briefing do Projeto</h2>
                <p className="subtext" style={{ marginBottom: '1.5rem' }}>
                  Conte-nos brevemente sobre o seu objetivo.
                </p>

                <div className="form-group">
                  <label className="form-label" htmlFor="nome">Seu Nome / Empresa</label>
                  <input
                    id="nome"
                    type="text"
                    required
                    placeholder="Ex: Ana Silva ou Startup X"
                    className="form-input"
                    value={formState.nome}
                    onChange={(e) => setFormState({ ...formState, nome: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">E-mail Profissional</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="nome@empresa.com"
                    className="form-input"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="tipo">Tipo de Projeto</label>
                  <select
                    id="tipo"
                    className="form-select"
                    value={formState.tipo}
                    onChange={(e) => setFormState({ ...formState, tipo: e.target.value })}
                  >
                    <option value="landing-page">Landing Page de Alta Conversão</option>
                    <option value="web-app">Aplicação Web / Portal Next.js</option>
                    <option value="design-system">Design System & Identidade Outline</option>
                    <option value="otimizacao">Otimização Core Web Vitals</option>
                    <option value="outro">Outro / Consultoria Sob Medida</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="orcamento">Faixa de Investimento</label>
                  <select
                    id="orcamento"
                    className="form-select"
                    value={formState.orcamento}
                    onChange={(e) => setFormState({ ...formState, orcamento: e.target.value })}
                  >
                    <option value="1k-2k">R$ 950 a R$ 2.000</option>
                    <option value="2k-5k">R$ 2.000 a R$ 5.000</option>
                    <option value="5k+">Acima de R$ 5.000</option>
                    <option value="definir">A definir em conjunto</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="mensagem">Descreva o que você precisa</label>
                  <textarea
                    id="mensagem"
                    required
                    placeholder="Compartilhe referências, prazos esperados e detalhes do produto..."
                    className="form-textarea"
                    value={formState.mensagem}
                    onChange={(e) => setFormState({ ...formState, mensagem: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-solid btn-lg"
                  style={{ width: '100%', marginTop: '0.75rem' }}
                >
                  {loading ? 'Transmitindo dados...' : 'Enviar Solicitação de Orçamento'}
                </button>
              </form>
            )}
          </div>

          {/* Informações de Contato Direto */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="feature-card" style={{ padding: '2rem' }}>
              <div className="card-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h3 className="heading-md">Atendimento WhatsApp</h3>
              <p style={{ marginBottom: '1.25rem' }}>
                Converse em tempo real para tirar dúvidas e receber uma estimativa rápida.
              </p>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                Abrir WhatsApp Oficial
              </a>
            </div>

            <div className="feature-card" style={{ padding: '2rem' }}>
              <div className="card-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3 className="heading-md">E-mail Corporativo</h3>
              <p style={{ marginBottom: '1.25rem' }}>
                Para envio de documentações, RFPs e arquivos de briefing completos.
              </p>
              <a
                href="mailto:contato@yuko.dev"
                className="btn btn-outline btn-sm"
              >
                contato@yuko.dev
              </a>
            </div>

            <div className="feature-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span className="status-dot"></span>
                <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  DISPONIBILIDADE
                </span>
              </div>
              <h3 className="heading-md">Prazo de Resposta</h3>
              <p>Segunda a Sexta, das 09h às 18h. Retorno garantido em até 24 horas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
