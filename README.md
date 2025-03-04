# DevMotors

DevMotors é um projeto de uma oficina especializada em manutenção de carros, localizada em São Paulo. Este projeto foi desenvolvido utilizando o framework Next.js e outras tecnologias modernas para criar uma aplicação web responsiva e otimizada.

## Funcionalidades

- **Página Inicial**: Exibe um banner com informações principais e um botão de chamada para ação.
- **Serviços**: Seção que descreve os serviços oferecidos pela oficina, com imagens ilustrativas.
- **Contatos**: Informações de contato, incluindo email, telefone, endereço e horário de funcionamento.
- **Submenu**: Menu de navegação para acessar diferentes páginas do site.
- **Página de Post**: Exibe detalhes de um post específico baseado no slug da URL.
- **Erro 404**: Página de erro personalizada para quando uma página não é encontrada.

## Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento de aplicações web.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Sass**: Pré-processador CSS para estilização.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **Lucide React**: Biblioteca de ícones React.
- **Cosmic JS**: CMS utilizado para gerenciar o conteúdo do site.
- **Vercel**: Plataforma de deploy para aplicações Next.js.

## Estrutura do Projeto

- **src/app**: Contém as páginas da aplicação.
  - **page.tsx**: Página inicial.
  - **post/[slug]**: Página de post dinâmico.
  - **layout.tsx**: Layout principal da aplicação.
  - **globals.scss**: Estilos globais.
- **src/components**: Componentes reutilizáveis.
  - **Hero**: Componente de banner principal.
  - **Container**: Componente de contêiner para centralizar conteúdo.
  - **Header**: Cabeçalho da aplicação.
  - **home**: Componentes específicos da página inicial (submenu, serviços, footer).
- **src/utils**: Funções utilitárias e tipos.
  - **actions/get-data.ts**: Funções para buscar dados da API.
  - **post.types.ts**: Tipos TypeScript para posts.
  - **home.types.ts**: Tipos TypeScript para a página inicial.
  - **menu.types.ts**: Tipos TypeScript para o menu.
- **public**: Arquivos públicos, como imagens e ícones.
- **.next**: Diretório gerado pelo Next.js durante o build.
- **.env.local**: Arquivo de variáveis de ambiente.
- **tailwind.config.ts**: Configuração do Tailwind CSS.
- **tsconfig.json**: Configuração do TypeScript.
- **eslint.config.mjs**: Configuração do ESLint.
- **postcss.config.mjs**: Configuração do PostCSS.


## Variáveis de Ambiente

- **NEXT_PUBLIC_API_URL**: URL da API pública do Cosmic JS utilizada para buscar dados do site.
- **READ_KEY**: Chave de leitura utilizada para autenticar as requisições à API do Cosmic JS.


## Como Executar o Projeto

Primeiro, instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```
Em seguida, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn run dev
# ou
pnpm run dev
```

Abra http://localhost:3000 no seu navegador para ver o resultado.
