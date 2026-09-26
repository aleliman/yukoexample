# Yuko - Desenvolvimento de Sites (Next.js 15 + React 19 + TypeScript)

Estrutura web moderna, escalável e de altíssima performance construída com **Next.js 15 (App Router)**, **React 19** e **TypeScript**, fundamentada na estética **Outline** (linhas nítidas de 1px, tipografia técnica, cards geométricos e alternância de temas Dark/Light).

---

## 📁 Estrutura do Projeto Next.js

```text
e:/Yuko - Desenvolvimento de sites/
├── app/
│   ├── layout.tsx             # Root layout com Header, Footer e fontes Google
│   ├── page.tsx               # Página Inicial (Landing Page completa)
│   ├── globals.css            # Variáveis de design outline, grid técnico e animações
│   ├── sobre/
│   │   └── page.tsx           # Subpágina: Sobre Nós & Manifesto Outline
│   ├── servicos/
│   │   └── page.tsx           # Subpágina: Catálogo completo de Serviços & Entregáveis
│   └── contato/
│       └── page.tsx           # Subpágina: Formulário interativo de briefing e canais diretos
├── components/
│   ├── Header.tsx             # Barra de navegação com rota ativa, menu mobile e brand-jump
│   ├── Footer.tsx             # Rodapé padronizado com status operacional dinâmico
│   ├── ThemeToggle.tsx        # Alternador Dark / Light Mode com persistência
│   └── FaqAccordion.tsx       # Acordeão interativo para dúvidas frequentes
├── package.json               # Dependências do Next.js e TypeScript
├── tsconfig.json              # Configurações do compilador TypeScript
└── next.config.mjs            # Configuração do Next.js
```

---

## ⚡ Como Rodar em Localhost

Como o **Node.js** já foi instalado e configurado na máquina, você pode rodar o servidor de desenvolvimento em **localhost** a qualquer momento:

### 1. Iniciar o Servidor de Desenvolvimento:
Abra o terminal (PowerShell ou terminal integrado do VS Code) na pasta do projeto e execute:
```bash
npm run dev
```

### 2. Acessar no Navegador:
Abra seu navegador em:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🌐 Rotas e Subpáginas Disponíveis

- **Início (`/`)**: Landing page com Hero interativo, monitor de performance em tempo real, grid de diferenciais, fluxo de desenvolvimento, planos e FAQ.
- **Serviços (`/servicos`)**: Especificação técnica dos serviços de desenvolvimento, SEO e design system.
- **Sobre (`/sobre`)**: Filosofia do estúdio, manifesto da estética outline e stack técnica utilizada.
- **Contato (`/contato`)**: Formulário interativo com escolha de escopo de projeto e orçamento estimado.

---

## 🎨 Personalização de Design & Cores

Todas as variáveis visuais estão centralizadas em [`app/globals.css`](file:///e:/Yuko%20-%20Desenvolvimento%20de%20sites/app/globals.css):
- `--border-color`, `--border-hover`, `--border-accent`: Controle preciso de contornos.
- `--bg-primary`, `--bg-card`: Cores de fundo nos temas escuro e claro.
- `@keyframes brand-jump`: Animação elástica do ícone do logotipo no hover.

---

## 🚀 Como Publicar em Produção (Deploy)

Para publicar o projeto em alta performance:
1. Suba o código para o GitHub.
2. Acesse [Vercel](https://vercel.com) e importe o repositório.
3. O build e a CDN global serão configurados automaticamente sem nenhum custo inicial.
