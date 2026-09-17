# MongoDB: Operações CRUD e Comandos Práticos

Este documento apresenta exemplos práticos de como interagir com o MongoDB, desde o gerenciamento de bancos de dados até a execução das operações fundamentais de CRUD (Create, Read, Update, Delete).

## Visão Geral das Operações CRUD

Abaixo estão os principais métodos do MongoDB organizados para cada operação CRUD:

- **Create (Criar):**
  - `insertOne(data, options)`: Insere um único documento na coleção.
  - `insertMany(data, options)`: Insere múltiplos documentos de uma vez.

- **Read (Ler):**
  - `find(filter, options)`: Retorna os documentos que correspondem aos critérios de busca.
  - `findOne(filter, options)`: Retorna o primeiro documento que corresponde aos critérios de busca.

- **Update (Atualizar):**
  - `updateOne(filter, data, options)`: Atualiza o primeiro documento que corresponde ao filtro.
  - `updateMany(filter, data, options)`: Atualiza todos os documentos que correspondem ao filtro.
  - `replaceOne(filter, data, options)`: Substitui integralmente um documento existente.

- **Delete (Deletar):**
  - `deleteOne(filter, options)`: Remove um único documento que corresponde ao filtro.
  - `deleteMany(filter, options)`: Remove múltiplos documentos que correspondem ao filtro.

---

## 1. Gerenciamento de Bancos de Dados e Coleções

Comandos essenciais para navegar e estruturar o banco de dados:

```javascript
// Exibir todos os bancos de dados
show databases;

// Criar (implicitamente) ou acessar um banco de dados
use loja_informatica;

// Criar uma nova collection (tabela) explicitamente
db.createCollection("cliente");

// Mostrar todas as collections do banco de dados atual
show collections;
```

---

## 2. Operações CRUD na Prática

### 🟢 Create (Inserir Dados)

Para adicionar novos documentos às collections, insira um por vez ou vários simultaneamente usando arrays.

```javascript
// Inserir apenas 1 document (objeto)
db.cliente.insertOne({
  "nome": "jefté",
  "idade": 35,
  "pets": ["dora", "sabrina"],
  "endereco": {
    "logradouro": "Sossego"
  }
});

// Inserir muitos documents de uma vez (Array de objetos)
db.cliente.insertMany([
  { "nome": "Brenno" },
  { "nome": "João" },
  { "nome": "Maria" },
  { "nome": "José" },
  { "nome": "Noé" }
]);
```

### 🔵 Read (Ler/Buscar Dados)

Formas de consultar e filtrar os dados armazenados na base:

```javascript
// Mostrar todos os documentos/objetos de uma collection
db.cliente.find();
