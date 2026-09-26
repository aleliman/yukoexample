'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'Por que escolher a arquitetura Next.js com estética outline?',
    answer: 'Next.js com React 19 oferece renderização de ponta no servidor (SSR), transições instantâneas entre subpáginas sem recarregar o navegador e excelente indexação no Google. A estética outline adiciona precisão geométrica, refinamento e clareza absoluta à proposta da marca.'
  },
  {
    question: 'Como funciona a navegação entre as subpáginas?',
    answer: 'Utilizamos o roteador nativo do Next.js (App Router). Quando o usuário clica em links como Serviços, Sobre ou Contato, a troca de página ocorre instantaneamente em milissegundos sem tela em branco.'
  },
  {
    question: 'O site continua rápido mesmo com React e Next.js?',
    answer: 'Sim! O Next.js realiza divisão automática de código (code-splitting) e pré-carregamento inteligente das páginas. Nossos componentes e o CSS outline foram construídos sob medida, garantindo scores acima de 95 nos Core Web Vitals.'
  },
  {
    question: 'Como funciona a alternância entre modo claro e escuro?',
    answer: 'O sistema detecta a preferência do sistema operacional do visitante automaticamente e disponibiliza um botão no topo. A escolha fica salva no navegador via localStorage para visitas futuras.'
  },
  {
    question: 'Como publicar este projeto Next.js na internet?',
    answer: 'É muito simples: basta conectar seu repositório na Vercel (os criadores do Next.js) para obter deploy contínuo gratuito, certificado SSL automático e CDN global de alta velocidade.'
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`faq-item ${isOpen ? 'active' : ''}`}>
            <button
              className="faq-question"
              onClick={() => toggleFaq(index)}
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <svg
                className="faq-icon"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
