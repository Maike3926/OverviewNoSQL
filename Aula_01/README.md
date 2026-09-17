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
