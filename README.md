# dev-macb.github.io

Portfólio estático de Miguel Alves, desenvolvido com React, TypeScript e Vite. A aplicação é publicada no GitHub Pages: [dev-macb.github.io](https://dev-macb.github.io).

## Stack

| Camada | Tecnologia |
| --- | --- |
| Interface | React 18 |
| Linguagem | TypeScript |
| Roteamento | React Router 6 |
| Build | Vite 5 |
| Qualidade | ESLint 9 |
| Hospedagem | GitHub Pages |

## Requisitos

- Node.js 20 ou superior
- npm 10 ou superior

## Ambiente local

```bash
git clone https://github.com/dev-macb/dev-macb.github.io.git
cd dev-macb.github.io
npm ci
npm run dev
```

O Vite inicia o servidor de desenvolvimento em `http://localhost:5173`.

## Scripts

| Comando | Efeito |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run lint` | Executa o ESLint. |
| `npm run build` | Executa a checagem de tipos e gera `dist/`. |
| `npm run check` | Executa `lint` e `build`; é o comando de validação padrão. |
| `npm run preview` | Serve localmente a versão gerada em `dist/`. |
| `npm run deploy` | Publica manualmente os arquivos de `dist/` na branch `gh-pages`. |

## Organização do código

```text
src/
├── app/                 # composição da aplicação, rotas, tema, layouts e estilos globais
├── assets/              # recursos versionados importados pela aplicação
├── pages/               # páginas por rota e seus estilos/recursos locais
└── shared/ui/           # componentes reutilizáveis e independentes de página
```

- Registre rotas em `src/app/routes.tsx`.
- Mantenha código específico em `src/pages/<pagina>/`.
- Promova um componente para `src/shared/ui/` somente quando for reutilizado por mais de uma página.
- Use `src/app/` para dependências de escopo global, como providers, layouts e configuração de rotas.

### Rotas públicas

| Rota | Página |
| --- | --- |
| `/` | Início |
| `/sobre` | Sobre |
| `/habilidades` | Habilidades |
| `/portifolio` | Portfólio |
| `/contato` | Contato |

## Validação

Antes de abrir um Pull Request, execute:

```bash
npm run check
```

Ainda não há uma suíte de testes automatizados configurada. A pipeline executa `npm run test --if-present`; ao adicionar um script `test` ao `package.json`, ele será executado automaticamente no CI.

## CI/CD

O workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) é acionado por Pull Requests direcionados à `main`.

- Em abertura, reabertura ou atualização do PR, instala dependências com `npm ci` e executa validação e testes disponíveis.
- Em um PR fechado com merge, recompila a versão integrada da `main` e publica os arquivos gerados na branch `gh-pages`.
- O job de validação tem permissão apenas de leitura. A permissão de escrita em conteúdo é concedida exclusivamente ao job de publicação após o merge.
- As actions são fixadas em commits imutáveis para reduzir o risco de alterações não revisadas em tags.

No repositório do GitHub, mantenha **Settings → Pages → Build and deployment → Source** configurado para servir a branch `gh-pages` a partir do diretório `/ (root)`.
