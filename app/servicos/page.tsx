import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Serviços | Yuko - Soluções Web de Alta Performance',
  description: 'Conheça nossos serviços de desenvolvimento em Next.js, criação de landing pages outline, design systems e otimização Core Web Vitals.',
};

export default function ServicosPage() {
  const servicos = [
    {
      num: '01',
      title: 'Landing Pages de Alta Conversão',
      desc: 'Páginas comerciais construídas para transformar visitantes em clientes qualificados através de narrativa persuasiva e estética sofisticada.',
      deliverables: [
        'Arquitetura em Next.js com carregamento em milissegundos',
        'Design outline minimalista focado na proposta de valor',
        'Integração direta com WhatsApp, CRM e ferramentas de analytics',
        'Testes de responsividade em mais de 15 resoluções de tela',
      ],
      tag: 'Mais Solicitado',
    },
    {
      num: '02',
      title: 'Aplicações Web & Portais Dedicados',
      desc: 'Sistemas escaláveis com painéis administrativos, áreas de membros e integrações de APIs seguras.',
      deliverables: [
        'Roteamento avançado via Next.js App Router',
        'Arquitetura modular em TypeScript com tipagem estrita',
        'Integração com bancos de dados (Supabase, PostgreSQL) e autenticação',
        'Painéis de gestão intuitivos e componentes reutilizáveis',
      ],
      tag: 'Escalabilidade',
    },
    {
      num: '03',
      title: 'Design System & Identidade Outline',
      desc: 'Criação de ecossistemas visuais completos para empresas que desejam padronizar sua interface com rigor técnico.',
      deliverables: [
        'Tokens de design CSS para cores, espaçamentos e bordas de 1px',
        'Biblioteca de componentes em React prontos para uso',
        'Alternador dinâmico de temas Dark e Light integrado',
        'Diretrizes de tipografia e microinterações de interface',
      ],
      tag: 'Branding & UI',
    },
    {
      num: '04',
      title: 'Auditoria & Otimização Core Web Vitals',
      desc: 'Resgate de sites lentos e com baixa taxa de conversão através da eliminação de scripts pesados e reestruturação de código.',
      deliverables: [
        'Diagnóstico profundo de métricas LCP, FID e CLS',
        'Eliminação de bibliotecas desnecessárias e otimização de assets',
        'Reestruturação semântica para visibilidade máxima no Google',
        'Garantia contratual de pontuação superior a 95 no Lighthouse',
      ],
      tag: 'Performance',
    },
  ];

  return (
    <div className="section" style={{ paddingTop: '5rem' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge-outline">
            <span className="mono">// CATÁLOGO DE SERVIÇOS</span>
          </div>
          <h1 className="heading-xl">Soluções digitais com engenharia de precisão</h1>
          <p className="lead-text">
            Construímos estruturas sob medida para elevar a percepção de valor do seu produto e acelerar o crescimento do seu negócio.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
          {servicos.map((servico) => (
            <div key={servico.num} className="feature-card" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span className="step-number mono" style={{ margin: 0 }}>
                  {servico.num}
                </span>
                <span className="mockup-tag mono">{servico.tag}</span>
              </div>

              <h2 className="heading-md" style={{ fontSize: '1.45rem', marginBottom: '0.75rem' }}>
                {servico.title}
              </h2>
              <p style={{ marginBottom: '1.75rem' }}>{servico.desc}</p>

              <div style={{ borderTop: 'var(--border-dashed)', paddingTop: '1.5rem', marginTop: 'auto' }}>
                <h3 className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                  Entregáveis Inclusos:
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {servico.deliverables.map((item, idx) => (
                    <li key={idx} className="pricing-feature-item" style={{ fontSize: '0.875rem' }}>
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Link href="/contato" className="btn btn-outline" style={{ width: '100%' }}>
                  Solicitar este Serviço
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="cta-box">
          <h2 className="heading-lg">Precisa de um projeto sob medida?</h2>
          <p className="lead-text">
            Nossa equipe analisa seus objetivos de negócio e desenha a solução técnica exata para sua necessidade.
          </p>
          <div className="btn-group">
            <Link href="/contato" className="btn btn-solid btn-lg">
              Conversar com um Especialista
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
