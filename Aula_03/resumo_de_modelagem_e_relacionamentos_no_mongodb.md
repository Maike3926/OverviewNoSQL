# 🍃 MongoDB: Modelagem, Schemas e Relacionamentos

Resumo prático sobre modelagem de dados no MongoDB, abordando identificadores únicos, tipos de dados, projeções e padrões de relacionamento estruturais (1:1, 1:N e N:M).

---

## 📌 1. Conceitos Fundamentais

### IDs Únicos (`_id`)
- Todo documento no MongoDB **DEVE** possuir um campo `_id` obrigatoriamente.
- O MongoDB gera automaticamente um `ObjectId()` de 12 bytes por padrão.
- Você pode definir valores customizados para o `_id` se preferir.

### Flexibilidade de Schema (Schema-less)
- O MongoDB não impõe um schema rígido a nível de banco de dados. Documentos na mesma *collection* podem ter estruturas diferentes.
- Isso permite uma evolução rápida do modelo, sem necessidade de rotinas pesadas de migração.
- *Nota:* Apesar da flexibilidade, a aplicação pode (e geralmente deve) impor validações usando JSON Schema.

### Projeção (Projection)
- Define quais campos devem ser retornados em uma consulta de busca.
- Evita carregar documentos gigantes pela rede, selecionando apenas o estritamente necessário.
- Economiza largura de banda e memória.

---

## 🏗️ 2. Estratégias de Arquitetura: Leitura vs. Escrita

Antes de modelar, pergunte-se: *Quais dados são necessários? Onde são consumidos? Qual a frequência de leitura/escrita?*

*   **Read-Heavy (Muitas Consultas):** Prioriza **Documentos Embarcados**. O objetivo é armazenar o dado pronto no formato exigido pelo Frontend, evitando agregações complexas. Ideal para catálogos.
*   **Write-Heavy (Muitas Gravações):** Prioriza **Referências**. O objetivo é armazenar sem duplicações, garantindo atualizações rápidas num único local. Ideal para logs e registros financeiros.

---

## 🔗 3. Padrões de Relacionamentos

No MongoDB, temos duas abordagens principais para relacionar dados: **Embarcado (Embedded)** e **Por Referência (References)**.

### 📍 Relacionamentos 1:1 (Um para Um)

**Embarcado (Embedded):** Ideal quando os dados pertencem exclusivamente à entidade principal e são lidos juntos (ex: Paciente e seu histórico de doenças).
```javascript
db.patients.insertOne({
  name: "Jefté", 
  age: 35, 
  diseaseSummary: {
    diseases: ["cold", "broken leg"]
  }
})
```

**Por Referência (References):** Ideal quando as entidades possuem vida independente na aplicação (ex: Pessoa e Carro).
```javascript
// Criando a Pessoa
db.persons.insertOne({ name: "Jefté", age: 35, salary: 3000 })

// Criando o Carro e referenciando o ObjectId da Pessoa
db.cars.insertOne({ 
  model: "BMW", 
  price: 40000, 
  owner: ObjectId('6aa9e2cee9c288ce1241317e') 
})
```

### 📍 Relacionamentos 1:N (Um para Muitos)

**Embarcado (Embedded):** Ideal para dados contidos na entidade principal e que não crescem infinitamente (ex: Tópico de fórum e suas respostas).
*Limite: Lembre-se que um documento pode ter no máximo 16MB e 100 níveis de aninhamento.*
```javascript
db.questionThreads.insertOne({
  creator: "Jefté", 
  question: "How does that work?", 
  answers: [
    { text: "Like that." }, 
    { text: "Thanks!" }
  ]
})
```

**Por Referência (References):** Evita estourar o limite de 16MB caso haja milhares ou milhões de itens relacionados (ex: Cidade e seus Cidadãos).
```javascript
// Criando a Cidade
db.cities.insertOne({ name: "New York City", coordinates: {lat: 21, lng: 55} })

// Criando os Cidadãos com referência à Cidade
db.citizens.insertMany([
  { name: "Jefté Goes", cityId: ObjectId("5b98d6b44d01c52e1637a99f") }, 
  { name: "Brenno Salvador", cityId: ObjectId("5b98d6b44d01c52e1637a99f") }
])
```

### 📍 Relacionamentos N:M (Muitos para Muitos)

**Embarcado (Embedded - Histórico/Snapshots):** Ideal para "congelar" dados pontuais, como um histórico de pedidos dentro do cliente.
```javascript
db.customers.insertOne({ name: "Jefté", age: 35 })

// Atualizando o cliente com os dados do pedido embarcados
db.customers.updateOne({}, {
  $set: {
    orders: [
      { title: "A Book", price: 12.99, quantity: 2 }
    ]
  }
})
```

**Por Referência (Array de Referências):** Usado quando as duas entidades possuem relacionamentos cruzados e vida independente (ex: Livros e Autores).
```javascript
// Criando os Autores
db.authors.insertMany([
  { name: "Jorge Amado", age: 78, address: {street: "Bahia"} }, 
  { name: "Graciliano Ramos", age: 55, address: {street: "Rio de Janeiro"} }
])

// Atualizando o Livro com o Array de ObjectIds dos Autores
db.books.updateOne({}, {
  $set: {
    authors: [
      ObjectId("5b98d9e44d01c52e1637a9a6"), 
      ObjectId("5b98d9e44d01c52e1637a9a7")
    ]
  }
}) 
```

---

## ⚖️ 4. Resumo: Embedded vs. References

| Característica | Documentos Embarcados (Embedded) | Referências (References) |
| :--- | :--- | :--- |
| **Organização** | Agrupa os dados logicamente no mesmo doc. | Divide os dados entre coleções distintas. |
| **Desempenho** | Excelente para leitura (consulta única sem joins). | Otimiza atualizações e evita duplicação de escrita. |
| **Limitações / Atenção** | Limite máximo de **16MB** por documento. | Exige consultas adicionais ou o uso do estágio `$lookup`. |
| **Quando usar?** | Dados acessados juntos, forte relação de pertencimento, tamanho previsível. | Dados compartilhados, vida independente, crescimento ilimitado (arrays gigantes). |