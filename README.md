
# Divisor de Contas

Este projeto é um aplicativo para divisão de contas entre duas pessoas, onde as despesas são divididas por mês e associadas a perfis de usuários.

## Funcionalidades

- **Criação de perfis**: Adicione perfis de usuários para associar despesas.
- **Adição de contas**: Insira contas/despesas e associe-as aos perfis.
- **Divisão de despesas**: Visualize a divisão das despesas de cada perfil.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código.
- **Tailwind CSS**: Framework CSS para estilização rápida e eficiente.

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
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Instalação e Execução

**Pré-requisitos**:
- Node.js (versão 18 ou superior)

### Iniciando a Aplicação

1. **Instale as dependências**:

   ```bash
   npm install
   ```

2. **Inicie a aplicação**:

   ```bash
   npm start
   ```

   A aplicação estará rodando na porta 3000 por padrão. Abra [http://localhost:3000](http://localhost:3000) para ver o projeto no navegador.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa o app no modo de desenvolvimento.

### `npm run build`

Compila a aplicação para produção na pasta `build`.

### `npm run test`

Executa os testes.

## Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues ou submeter pull requests.

## Licença

Este projeto está sob a licença MIT.
