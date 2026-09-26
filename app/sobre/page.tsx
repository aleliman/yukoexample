import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre a Yuko | Manifesto & Filosofia de Desenvolvimento',
  description: 'Conheça o propósito, a equipe e os princípios técnicos que guiam o desenvolvimento de sites da Yuko.',
};

export default function SobrePage() {
  const pilares = [
    {
      title: 'Menos ruído, mais substância',
      desc: 'Rejeitamos o visual poluído e animações exageradas que prejudicam a leitura. Criamos interfaces onde cada pixel e contorno têm uma função clara.',
    },
    {
      title: 'Obsessão por Performance',
      desc: 'Um atraso de 1 segundo custa clientes. Nossas soluções são desenvolvidas para responder instantaneamente, com pontuações máximas no Lighthouse.',
    },
    {
      title: 'Arquitetura Moderna & Escalável',
      desc: 'Utilizamos Next.js e TypeScript para entregar bases de código robustas, tipadas e fáceis de evoluir à medida que o seu negócio cresce.',
    },
    {
      title: 'Autonomia Total do Cliente',
      desc: 'Entregamos projetos sem amarras técnicas obscuras, documentados de ponta a ponta para que você tenha controle integral da sua presença digital.',
    },
  ];

  return (
    <div className="section" style={{ paddingTop: '5rem' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge-outline">
            <span className="mono">// NOSSA HISTÓRIA & PRINCÍPIOS</span>
          </div>
          <h1 className="heading-xl">Acreditamos na força da simplicidade precisa</h1>
          <p className="lead-text">
            A Yuko nasceu com um objetivo claro: resgatar a elegância do design minimalista combinada à velocidade máxima da moderna engenharia web.
          </p>
        </div>

        {/* Manifesto Box */}
        <div
          id="manifesto"
          style={{
            border: 'var(--border-width) solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '3.5rem 3rem',
            backgroundColor: 'var(--bg-card)',
            marginBottom: '5rem',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div className="badge-outline" style={{ marginBottom: '1rem' }}>
            <span className="mono">MANIFESTO // O ESTILO OUTLINE</span>
          </div>
          <h2 className="heading-lg" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
            Linhas finas que delimitam o que realmente importa.
          </h2>
          <div style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>
              Em um mundo digital saturado de sombras pesadas, pop-ups invasivos e scripts que sobrecarregam conexões, escolhemos seguir pelo caminho oposto: <strong>a precisão técnica dos contornos de 1px</strong>.
            </p>
            <p>
              O estilo outline não é apenas uma escolha visual; é uma declaração de confiança na arquitetura da informação. Quando o código é limpo e a tipografia é exata, a proposta de valor da sua marca brilha sem distrações.
            </p>
            <p>
              Cada projeto que sai do estúdio da Yuko é construído com React, Next.js e TypeScript, garantindo que a beleza do contorno seja acompanhada pela solidez da engenharia de software de ponta.
            </p>
          </div>
        </div>

        {/* Pilares Grid */}
        <div style={{ marginBottom: '5rem' }}>
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <div className="badge-outline">
              <span className="mono">// NOSSOS PILARES</span>
            </div>
            <h2 className="heading-lg">Como pensamos e executamos</h2>
          </div>

          <div className="steps-grid">
            {pilares.map((pilar, index) => (
              <div key={index} className="step-card">
                <span className="step-number mono">PILAR 0{index + 1}</span>
                <h3>{pilar.title}</h3>
                <p>{pilar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Specs */}
        <div
          style={{
            border: 'var(--border-width) solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem',
            backgroundColor: 'var(--bg-secondary)',
            marginBottom: '5rem',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
            <div>
              <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Stack de Engenharia
              </span>
              <h3 className="heading-md" style={{ marginTop: '0.25rem' }}>Ferramentas & Tecnologias que Utilizamos</h3>
            </div>
            <span className="status-badge mono">
              <span className="status-dot"></span>
              ECOSSISTEMA 2026
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            <div className="partner-logo-item" style={{ justifyContent: 'center', padding: '1rem' }}>
              Next.js 15 (App Router)
            </div>
            <div className="partner-logo-item" style={{ justifyContent: 'center', padding: '1rem' }}>
              React 19 Server Components
            </div>
            <div className="partner-logo-item" style={{ justifyContent: 'center', padding: '1rem' }}>
              TypeScript Strict Mode
            </div>
            <div className="partner-logo-item" style={{ justifyContent: 'center', padding: '1rem' }}>
              CSS Custom Properties
            </div>
            <div className="partner-logo-item" style={{ justifyContent: 'center', padding: '1rem' }}>
              Vercel Edge Network
            </div>
            <div className="partner-logo-item" style={{ justifyContent: 'center', padding: '1rem' }}>
              Lighthouse 100/100
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-box">
          <h2 className="heading-lg">Quer trabalhar conosco?</h2>
          <p className="lead-text">
            Vamos discutir como podemos construir a estrutura ideal para sua marca.
          </p>
          <div className="btn-group">
            <Link href="/contato" className="btn btn-solid btn-lg">
              Entrar em Contato
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
