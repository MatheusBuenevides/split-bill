
# Divisor de Contas

Este projeto é um aplicativo para divisão de contas entre duas pessoas, onde as despesas são divididas por mês e associadas a perfis de usuários. O aplicativo permite a criação de perfis, adição de contas e visualização das despesas de cada perfil.

## Funcionalidades

- **Criação de perfis**: Adicione perfis de usuários para associar despesas.
- **Adição de contas**: Insira contas/despesas e associe-as aos perfis.
- **Divisão de despesas**: Visualize a divisão das despesas de cada perfil.
- **Navegação entre páginas**: Utilize uma sidebar para navegar entre as páginas da aplicação.
- **Visualização de gastos por perfil**: Cada perfil tem sua página com detalhes sobre as despesas associadas.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código.
- **Tailwind CSS**: Framework CSS para estilização rápida e eficiente.
- **React Router**: Biblioteca para gerenciar navegação de páginas no React.

## Estrutura do Projeto

```
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── BillInput.tsx
│   │   ├── BillList.tsx
│   │   ├── Sidebar.tsx
│   ├── pages/
│   │   ├── CreateProfilePage.tsx
│   │   ├── ProfilePage.tsx
│   │   ├── ProfileListPage.tsx
│   ├── App.tsx
│   ├── index.tsx
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes do Node.js) ou **yarn**

## Instalação

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/split-bill-app.git
   cd split-bill-app
   ```

2. **Instale as dependências**:

   Se estiver usando `npm`:

   ```bash
   npm install
   ```

   Ou se estiver usando `yarn`:

   ```bash
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**:

   Com `npm`:

   ```bash
   npm start
   ```

   Ou com `yarn`:

   ```bash
   yarn start
   ```

   O projeto será iniciado em `http://localhost:3000`.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start` ou `yarn start`

Executa o app no modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para ver o projeto no navegador.

### `npm run build` ou `yarn build`

Compila a aplicação para produção na pasta `build`. Ele otimiza o React para melhor desempenho.

## Estrutura dos Componentes

### 1. **`App.tsx`**

Componente principal que gerencia o estado global da aplicação, como perfis, contas e o perfil ativo. Configura as rotas para as diferentes páginas.

### 2. **`BillInput.tsx`**

Componente para adicionar novas despesas, onde o usuário pode inserir uma descrição, valor e associar a um perfil.

### 3. **`BillList.tsx`**

Componente que exibe a lista de despesas divididas, mostrando a descrição, o perfil associado e o valor.

### 4. **`Sidebar.tsx`**

Componente de menu lateral que permite a navegação entre as páginas da aplicação.

### 5. **Páginas**

- **`CreateProfilePage.tsx`**: Página para criar novos perfis e gerenciar perfis existentes.
- **`ProfilePage.tsx`**: Exibe as despesas associadas a um perfil específico.
- **`ProfileListPage.tsx`**: Página para listar todos os perfis criados.

## Estilização

O projeto usa **Tailwind CSS** para estilização. A paleta de cores utilizada é a seguinte:

- **#F5F5F5** (Fundo claro)
- **#48CFCB** (Cor primária)
- **#229799** (Cor secundária)
- **#424242** (Texto)

Essas cores são aplicadas no layout geral e nos componentes da aplicação para manter uma interface limpa e moderna.

## Melhorias Futuras

- Implementar autenticação para perfis.
- Adicionar suporte para múltiplos usuários e perfis.
- Melhorar o design responsivo para dispositivos móveis.

## Contribuindo

Se você quiser contribuir com o projeto, sinta-se à vontade para abrir pull requests ou relatar problemas no [repositório do GitHub](https://github.com/seu-usuario/split-bill-app).

## Licença

Este projeto está sob a licença MIT.
