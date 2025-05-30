# eSIM Travel Global Landing Page

Landing page desenvolvida com Next.js, TypeScript e ferramentas modernas para garantir qualidade de código e experiência do desenvolvedor.

---

## 👣 Como começar

1. **Clone o repositório**

   ```bash
   git clone <url-do-repo>
   cd esim-facil-lp
   ```

2. **Instale as dependências**

   ```bash
   pnpm install
   ```

3. **Configure as variáveis de ambiente**

   - Copie o arquivo `.env.example` para `.env`:

     ```bash
     cp .env.example .env
     ```

   - Preencha os valores necessários no `.env` conforme sua necessidade. O arquivo `.env.example` serve como modelo e lista todas as variáveis obrigatórias para o funcionamento do projeto. O arquivo `.env` não deve ser versionado e pode conter informações sensíveis, como tokens e chaves de API.

4. **Rode o projeto em modo desenvolvimento**

   ```bash
   pnpm dev
   ```

   O site estará disponível em `http://localhost:3000`.

---

## 📦 Visualização e documentação de componentes com Ladle

O [Ladle](https://ladle.dev/) é utilizado neste projeto para desenvolvimento, documentação e testes visuais de componentes React, de forma similar ao Storybook, porém mais rápido e simples.

### O que é o Ladle?

O Ladle permite criar e visualizar "stories" (exemplos isolados) para cada componente, facilitando o desenvolvimento visual, testes manuais e documentação interativa.

### Como rodar o Ladle

1. **Instale as dependências** (se ainda não fez):
   ```bash
   pnpm install
   ```
2. **Inicie o Ladle em modo desenvolvimento:**
   ```bash
   pnpm dev:ladle
   ```
   - O Ladle abrirá uma interface web (geralmente em `http://localhost:61000`).
   - Você verá uma lista dos seus componentes e pode interagir com eles isoladamente.
3. **Build estática dos stories:**
   ```bash
   pnpm build:ladle
   ```
   - Gera uma versão estática dos stories para deploy ou documentação.

### Estrutura dos stories

- Cada arquivo `.stories.tsx` exporta um objeto default com o título do agrupamento.
- Cada story é uma função que recebe `args` (props) e renderiza o componente.
- Os mocks são usados para fornecer dados de exemplo.
- Sempre utilize as interfaces concretas das props dos componentes nos stories para garantir tipagem forte.

Exemplo:

```tsx
import type { StoryDefault, Story } from '@ladle/react';
import type { RefundPolicyCardProps } from '../../RefundPolicy.interface';

export default {
  title: 'RefundPolicy/RefundPolicyCard',
} satisfies StoryDefault<typeof RefundPolicyCard>;

export const Padrao: Story<RefundPolicyCardProps> = (args: RefundPolicyCardProps) => (
  <RefundPolicyCard {...args} />
);
Padrao.args = refundPolicyCardMocks.padrao;
```

### Boas práticas

- Centralize os dados de exemplo em arquivos `.mock.ts` para facilitar manutenção e reuso.
- Documente todos os estados e variações dos componentes.
- Use o Ladle para validar visualmente correções de bugs e facilitar testes manuais de UI.

---

## 🐞 Debugando o Projeto

Para facilitar o desenvolvimento e encontrar problemas rapidamente, você pode usar o debug com breakpoints no VS Code. Siga os passos abaixo:

### 1. Coloque breakpoints

Abra o arquivo desejado e clique à esquerda do número da linha para adicionar um breakpoint (bolinha vermelha).

### 2. Inicie o debug

No VS Code, basta apertar `F5` ou clicar em "Run and Debug" (ícone de play com inseto na barra lateral). O VS Code irá usar automaticamente a configuração já presente em `.vscode/launch.json` e iniciar o Next.js em modo debug, parando nos breakpoints definidos.

### 3. Depure normalmente

- Use os controles do VS Code para avançar, inspecionar variáveis, ver o call stack, etc.
- Você pode editar o código, salvar e o Next.js irá recarregar mantendo o debug ativo.

---

**Dica:**

- Se usar outro gerenciador de pacotes (npm ou yarn), ajuste o campo `runtimeExecutable` no `launch.json` para `npm` ou `yarn`.
- Para debug em produção, utilize ferramentas como o Vercel Inspector ou logs detalhados.

---

## 🚀 Tecnologias Principais

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- React Query

---

## 📁 Estrutura do Projeto

```
├── public/assets/
├── src/
│   ├── analytics/
│   ├── app/
│   ├── constants/
│   ├── factories/
│   ├── libs/
│   ├── shared/
│   ├── styles/
│   └── types/
├── .husky/
├── generateAssets.js
└── package.json
```

---

## 🔎 Organização e Convenções

### Estrutura da pasta `src`

- **analytics/**: Scripts de análise e métricas
- **app/**: Rotas, páginas e layouts (Next.js App Router)
- **constants/**: Valores constantes globais
- **factories/**: Funções/classes para criação padronizada de objetos/componentes
- **libs/**: Funções utilitárias para SSR
- **shared/**: Componentes e assets globais (assets gerados por script)
- **styles/**: Estilos globais e Tailwind
- **types/**: Tipos TypeScript globais

> Arquivos fora de `app/` e diretamente sob `src/` são de uso global (configurações, provedores, utilitários, temas, middlewares, inicialização).

### Organização de Páginas e Componentes (`src/app`)

- Cada subpasta representa uma rota
- Arquivos de layout: estrutura base (cabeçalho, rodapé)
- Arquivos de página: conteúdo da rota
- CSS Modules para estilos locais

#### Componentização e Organização Interna

Para garantir padronização e facilitar a manutenção, siga rigorosamente a estrutura abaixo para componentes e páginas:

- Subcomponentes/seções em subpastas (`sub-components/`)
- Arquivos de índice (`index.ts` ou `index.tsx`) centralizam exportações
- Sufixos obrigatórios para arquivos:
  - `.container`: lógica, estado, API, regras de negócio
  - `.presentation`: apresentação visual
  - `.interfaces`: interfaces e tipos TS
  - `.constants`: valores constantes
  - `.hooks`: hooks customizados
- Cada componente deve estar em arquivo próprio, com `export default` obrigatório
- Limite de 300 linhas por arquivo sempre que possível

##### Exemplo de Estrutura de um Componente

```
ComponenteExemplo/
├── ComponenteExemplo.container.tsx
├── ComponenteExemplo.tsx
├── ComponenteExemplo.interfaces.ts
├── ComponenteExemplo.constants.ts
├── ComponenteExemplo.hooks.ts
├── index.tsx
└── sub-components/
```

#### Observações Específicas

- **(home)**: Exceção para centralizar componentes/seções da home
- **Nomenclatura**: Rotas/páginas em kebab-case, componentes em camelCase
- **Sufixos**: camelCase + sufixo autoexplicativo

---

## 🎨 Padrões de Código e Estilo

### ESLint

- Garante qualidade e padronização do código JavaScript/TypeScript
- Baseado em `next/core-web-vitals`, `next/typescript` e `plugin:prettier/recommended`
- Ignora: `node_modules`, `dist`, `build`, `public`, `generateAssets.js`
- Integrado ao Prettier

### Prettier

- Formatação automática de código
- Configuração:
  - Ponto e vírgula sempre (`semi: true`)
  - Aspas simples (`singleQuote: true`)
  - Vírgula no final (`trailingComma: 'all'`)
  - Largura máxima: 100 caracteres (`printWidth: 100`)
  - Tab: 2 espaços (`tabWidth: 2`)
- Executado via lint-staged e manualmente

### Tailwind CSS

- Framework utilitário para estilização rápida e responsiva
- Configuração customizada:
  - Cores: `primary`, `secondary`, `accent`
  - Largura máxima: `1512px`
  - Fonte: `Inter var`
  - Breakpoints customizados
  - Plugin: `@tailwindcss/line-clamp`
- Estilos aplicados via classes utilitárias nos componentes

---

## 🛠️ Ferramentas e Configuração

- **Git Hooks (Husky):**
  - `pre-commit`: Lint-staged (ESLint + Prettier nos arquivos alterados)
  - `pre-push`: Build do projeto
- **Lint-staged:** Garante verificação e formatação apenas dos arquivos alterados
- **Geração Automática de Assets:** Script `generateAssets.js` para tipos, importações e interfaces de assets (ícones, imagens, perfis)
- **ESLint/Prettier:** Configurados para TypeScript, React e Next.js
- **TypeScript:** Configuração estrita, tipos automáticos para assets
- **Aliases (tsconfig.json):**
  - `@/*` → `src/`
  - `@public/*` → `public/`
  - `@shared/*` → `src/shared/`
  - `@constants/*` → `src/constants/`
  - `@app/*` → `src/app/`

---

## 🧩 Design Patterns Aplicados

- **Atomic Design**: Hierarquia e modularidade de componentes
- **Container-Presentation**: Separação de lógica e apresentação
- **Single Responsibility**: Um componente por arquivo, `export default` obrigatório
- **Limite de 300 linhas por arquivo**: Para manter legibilidade

---

## 📝 Notas para Desenvolvedores Júniores

- Git hooks automatizam verificações e builds
- Assets são gerados automaticamente e tipados
- Sempre use tipos/interfaces TS
- Siga os padrões de componentização e nomenclatura

---

## 🧩 SEO e Schemas Estruturados

### Estrutura dos Schemas (`src/SEO/`)

O diretório `src/SEO/` centraliza componentes React responsáveis por injetar dados estruturados (schemas) no HTML da aplicação, seguindo o padrão [schema.org](https://schema.org/). Esses schemas ajudam buscadores (Google, Bing, etc.) a entender melhor o conteúdo do site, melhorando SEO e a exibição de rich snippets.

#### Componentes disponíveis

- **SchemaPlans.tsx**: Schema do tipo `Product`/`Offer` para os planos de eSIM.
- **SchemaFAQ.tsx**: Schema do tipo `FAQPage` para perguntas frequentes.
- **SchemaBreadcrumb.tsx**: Schema do tipo `BreadcrumbList` para navegação estruturada.

Todos os schemas são injetados via `<Script type="application/ld+json" />` e podem ser importados e usados em qualquer página/layout.

#### Como estruturar um novo schema

1. Crie um novo arquivo em `src/SEO/` (ex: `SchemaNome.tsx`).
2. Importe `Script` do `next/script`.
3. Monte o objeto JSON seguindo o padrão do schema.org desejado.
4. Renderize o `<Script type="application/ld+json" ... />` com o JSON serializado.
5. Exporte o componente.

**Exemplo básico:**

```tsx
import Script from 'next/script';

export default function SchemaExemplo() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Minha Empresa',
    url: 'https://meusite.com',
  };

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

---

### Como e onde aplicar schemas e metadados

#### 1. **Layouts globais**

No arquivo de layout principal (ex: `src/app/layout.tsx`), importe e utilize os schemas que devem estar presentes em todas as páginas daquela seção:

```tsx
import { SchemaFAQ, SchemaPlans, SchemaBreadcrumb } from '@/SEO';

<head>
  {/* ...outros scripts/metadados... */}
  <SchemaPlans />
  <SchemaFAQ />
  <SchemaBreadcrumb />
</head>;
```

#### 2. **Páginas específicas**

Se um schema só faz sentido em uma página específica (ex: FAQ extra, política de reembolso, etc.), importe e use o componente do schema apenas naquela página:

```tsx
// Exemplo em src/app/more-questions/page.tsx
import { SchemaFAQ } from '@/SEO';

export default function MoreQuestionsPage() {
  return (
    <>
      <SchemaFAQ />
      {/* ...restante da página... */}
    </>
  );
}
```

#### 3. **Metadados**

Os metadados (title, description, openGraph, etc.) devem ser definidos:

- No layout global (`layout.tsx`) para valores padrão.
- Em cada página (`page.tsx`) para valores específicos daquela rota, sobrescrevendo os padrões se necessário.

**Exemplo de metadados em uma página:**

```tsx
export const metadata = {
  title: 'Perguntas Frequentes | eSIM Travel Global',
  description: 'Tire suas dúvidas sobre eSIM, planos, ativação e mais.',
  openGraph: {
    title: 'Perguntas Frequentes | eSIM Travel Global',
    description: 'Tire suas dúvidas sobre eSIM, planos, ativação e mais.',
    images: [
      {
        url: '/assets/icons/official-marca.webp',
        width: 800,
        height: 600,
        alt: 'eSIM Travel Global Logo',
      },
    ],
  },
};
```

---

### **Quando aplicar schemas e metadados**

- **Schemas:** Sempre que a página tiver conteúdo relevante para buscadores (produtos, perguntas frequentes, navegação, eventos, etc.), adicione o schema correspondente.
- **Metadados:** Sempre defina pelo menos `title` e `description` em cada página importante para SEO. Use campos Open Graph para garantir boas prévias em redes sociais.

---

### **Resumo prático**

- Estruture schemas em `src/SEO/` como componentes React.
- Importe e use os schemas no layout global ou em páginas específicas conforme a necessidade.
- Defina metadados no layout global e sobrescreva em páginas específicas quando necessário.
- Use sempre caminhos públicos para imagens nos metadados.

---

## 📄 Licença

Projeto privado e proprietário. Todo o código e documentação são confidenciais e não devem ser compartilhados fora da organização.
