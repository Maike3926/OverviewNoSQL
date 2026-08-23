# Introdução ao NoSQL e MongoDB

## 1. O que é NoSQL?
NoSQL é um paradigma de banco de dados que engloba diversos tipos de bancos não relacionais. Eles são projetados para oferecer **flexibilidade**, **escalabilidade** e **alto desempenho**.

Os quatro principais paradigmas de bancos de dados NoSQL são:
- **Orientados a documentos:** ex. MongoDB
- **Chave-valor:** ex. Redis
- **Famílias de colunas (Wide-column):** ex. Cassandra
- **Orientados a grafos:** ex. Neo4j

---

## 2. O que é MongoDB?
O termo "Mongo" deriva de *Humongous* (Gigante), pois o banco foi projetado para armazenar e gerenciar grandes volumes de dados de forma eficiente. 
É um banco de dados NoSQL de código aberto, orientado a documentos. Diferente dos bancos relacionais tradicionais, ele armazena dados em documentos em vez de linhas e tabelas.

### Estrutura e Hierarquia
Um servidor MongoDB hospeda múltiplos bancos de dados, que por sua vez contêm coleções, que armazenam os documentos.
- **Database** > **Collections** > **Documents**
- *Nota:* Bancos de dados e coleções podem ser criados implicitamente ao inserir o primeiro documento na estrutura.

---

## 3. Formato de Dados (JSON / BSON)
Todo registro no MongoDB é um documento, armazenado em um formato semelhante ao JSON chamado **BSON** (Binary JSON).

- **Schemaless:** Não há um esquema rígido. Documentos na mesma coleção não precisam ter a mesma estrutura exata.
- **Campos (Fields):** Compostos por uma **chave** (nome) e um **valor**, separados por dois-pontos (`:`). Múltiplos campos são delimitados por chaves `{}` e separados por vírgulas (`,`).
- **Valores suportados:** Strings (`"Texto"`), números (`35`), booleanos (`true`/`false`), arrays (`[ ... ]`) e outros objetos/documentos embutidos (`{ ... }`).

### Relacionamentos
O MongoDB minimiza o uso de relacionamentos tradicionais (como *JOINs*). Em vez de dividir dados em várias tabelas, ele geralmente armazena dados relacionados no mesmo registro, utilizando **documentos incorporados** (embedded documents).

---

## 4. Operações CRUD
O MongoDB fornece métodos específicos para manipulação de dados (Create, Read, Update, Delete):

- **Create (Criar):** `insertOne(data, options)`
- **Read (Ler):** `find(filter, options)`, `findOne(filter, options)`
- **Update (Atualizar):** `updateOne(filter, data, options)`, `updateMany(filter, data, options)`, `replaceOne(filter, data, options)`
- **Delete (Deletar):** `deleteOne(filter, options)`, `deleteMany(filter, options)`

---

## 5. Comandos Principais no Shell (mongosh)
Lista dos principais comandos utilizados no terminal do MongoDB:

```bash
# Iniciar o shell do MongoDB
mongosh

# Listar todos os bancos de dados
show databases
# ou
show dbs

# Selecionar (ou criar implicitamente) um banco de dados
use nome_do_banco

# Listar coleções do banco de dados atual
show collections

# Criar uma coleção explicitamente
db.createCollection("nome_da_colecao")

# Inserir um documento em uma coleção
db.nome_da_colecao.insertOne({ "chave": "valor" })

# Listar documentos de uma coleção
db.nome_da_colecao.find()
```





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

// Buscar filtrando por um campo específico
db.cliente.find({ "nome": "José" });

// Buscar pelo identificador único (ObjectId)
db.cliente.find({ _id: ObjectId('6a7bbab007ff2cf8649f68a9') });
```
