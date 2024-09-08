
# Divisor de Contas

Este projeto é um aplicativo para divisão de contas entre duas pessoas, onde as despesas são divididas por mês e associadas a perfis de usuários. A aplicação agora inclui uma API back-end para armazenar e gerenciar as contas usando MongoDB.

## Funcionalidades

- **Criação de perfis**: Adicione perfis de usuários para associar despesas.
- **Adição de contas**: Insira contas/despesas e associe-as aos perfis.
- **Divisão de despesas**: Visualize a divisão das despesas de cada perfil.
- **API para gerenciamento de contas**: Interaja com o back-end para persistência de dados.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código.
- **Tailwind CSS**: Framework CSS para estilização rápida e eficiente.
- **Express**: Framework para aplicação do servidor.
- **MongoDB**: Banco de dados para armazenamento de contas.
- **Node.js**: Ambiente de execução JavaScript no lado do servidor.

## Estrutura do Projeto

```
split-bill-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   ├── index.tsx
├── server/
│   ├── server.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Instalação e Execução

**Pré-requisitos**:
- Node.js (versão 14 ou superior)
- MongoDB (local ou na nuvem)

### Iniciando o Back-end

1. **Instale as dependências**:

   ```bash
   npm install
   ```

2. **Inicie o servidor**:

   ```bash
   node server/server.js
   ```

   O servidor estará rodando na porta 5000 por padrão.

### Utilizando a API

- **Adicionar uma conta**:

  ```bash
  curl -X POST http://localhost:5000/api/bills -H 'Content-Type: application/json' -d '{"description": "Café", "amount": 5, "profile": "Perfil 1", "month": "Setembro"}'
  ```

- **Obter todas as contas**:

  ```bash
  curl http://localhost:5000/api/bills
  ```

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa o app no modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para ver o projeto no navegador.

### `npm run build`

Compila a aplicação para produção na pasta `build`.

### `npm run test`

Executa os testes.

## Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues ou submeter pull requests.

## Licença

Este projeto está sob a licença MIT.
