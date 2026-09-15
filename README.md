# Portfólio — Miguel Alves

Portfólio pessoal de Miguel Alves, desenvolvido com React, TypeScript e Vite.

[Visitar o site](https://dev-macb.github.io)

## Tecnologias

- React 18
- TypeScript
- React Router
- Vite
- ESLint

## Pré-requisitos

- Node.js 20 ou superior
- npm 10 ou superior

## Como executar

```bash
git clone https://github.com/dev-macb/dev-macb.github.io.git
cd dev-macb.github.io
npm ci
npm run dev
```

## Comandos disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento. |
| `npm run lint` | Verifica problemas de qualidade no código. |
| `npm run build` | Verifica os tipos e gera a versão de produção em `dist`. |
| `npm run check` | Executa lint e build. |
| `npm run preview` | Abre localmente a versão de produção. |
| `npm run deploy` | Gera a versão de produção e a publica com GitHub Pages. |

## Estrutura do projeto

```text
src/
├── app/          # configuração global, rotas, provedores e layouts
├── assets/       # imagens e documentos importados pela aplicação
├── pages/        # telas organizadas por rota
└── shared/ui/    # componentes visuais reutilizáveis
```

Para criar uma página, adicione uma pasta em `src/pages` e registre a rota em `src/app/routes.tsx`. Componentes reutilizados por duas ou mais páginas pertencem a `src/shared/ui`; componentes específicos permanecem junto à própria página.
