store>  db.createCollection("costumers")
{ ok: 1 }
store> show collections
costumers
store>  db.costumers.insertMany([
|   {
|     "name": "Ana",
|     "age": 25,
|     "city": "Salvador",
|     "active": true,
|     "points": 120
|   },
store>  db.costumers.insertMany([
|   {
|     "name": "Ana",
|     "age": 25,
|     "city": "Salvador",
|     "active": true,
|     "points": 120
|   },
store>  db.costumers.insertMany([
|   {
|     "name": "Ana",
|     "age": 25,
|     "city": "Salvador",
|     "active": true,
|     "points": 120
|   },
store>  db.costumers.insertMany([
|   {
|     "name": "Ana",
|     "age": 25,
|     "city": "Salvador",
|     "active": true,
|     "points": 120
|   },
store>  db.costumers.insertMany([
|   {
|     "name": "Ana",
|     "age": 25,
|     "city": "Salvador",
|     "active": true,
|     "points": 120
|   },
store>  db.costumers.insertMany([
|   {
|     "name": "Ana",
|     "age": 25,
|     "city": "Salvador",
|     "active": true,
|     "points": 120
|   },
store>  db.costumers.insertMany([
|   {
|     "name": "Ana",
|     "age": 25,
|     "city": "Salvador",
|     "active": true,
|     "points": 120
|   },
store>  db.costumers.insertMany([
|   {
|     "name": "Ana",
|     "age": 25,
|     "city": "Salvador",
|     "active": true,
|     "points": 120
|   },
store>  db.costumers.insertMany([
|   {
|     "name": "Ana",
|     "age": 25,
|     "city": "Salvador",
|     "active": true,
|     "points": 120
|   },
store>  db.costumers.insertMany([
|   {
|     "name": "Ana",
|     "age": 25,
|     "city": "Salvador",
|     "active": true,
|     "points": 120
|   },
|   {
|     "name": "Bruno",
|     "age": 32,
|     "city": "Feira de Santana",
|     "active": true,
|     "points": 300
|   },
|   {
|     "name": "Carlos",
|     "age": 28,
|     "city": "Salvador",
|     "active": false,
|     "points": 80
|   },
|   {
|     "name": "Daniela",
|     "age": 40,
|     "city": "São Paulo",
|     "active": true,
|     "points": 500
|   },
|   {
|     "name": "Eduarda",
|     "age": 22,
|     "city": "Rio de Janeiro",
|     "active": false,
|     "points": 50
|   }
| ])
|
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6a976a07461f092b25bf4746'),
    '1': ObjectId('6a976a07461f092b25bf4747'),
    '2': ObjectId('6a976a07461f092b25bf4748'),
    '3': ObjectId('6a976a07461f092b25bf4749'),
    '4': ObjectId('6a976a07461f092b25bf474a')
  }
}
store> db.co
db.constructor   db.commandHelp   db.copyDatabase  db.costumers

store> db.costumers.find()
[
  {
    _id: ObjectId('6a976a07461f092b25bf4746'),
    name: 'Ana',
    age: 25,
    city: 'Salvador',
    active: true,
    points: 120
  },
  {
    _id: ObjectId('6a976a07461f092b25bf4747'),
    name: 'Bruno',
    age: 32,
    city: 'Feira de Santana',
    active: true,
    points: 300
  },
  {
    _id: ObjectId('6a976a07461f092b25bf4748'),
    name: 'Carlos',
    age: 28,
    city: 'Salvador',
    active: false,
    points: 80
  },
  {
    _id: ObjectId('6a976a07461f092b25bf4749'),
    name: 'Daniela',
    age: 40,
    city: 'São Paulo',
    active: true,
    points: 500
  },
  {
    _id: ObjectId('6a976a07461f092b25bf474a'),
    name: 'Eduarda',
    age: 22,
    city: 'Rio de Janeiro',
    active: false,
    points: 50
  }
]
store> db.costumers.find({"city" : "salvador" })

store> db.costumers.find({"city" :"Salvador"})
[
  {
    _id: ObjectId('6a976a07461f092b25bf4746'),
    name: 'Ana',
    age: 25,
    city: 'Salvador',
    active: true,
    points: 120
  },
  {
    _id: ObjectId('6a976a07461f092b25bf4748'),
    name: 'Carlos',
    age: 28,
    city: 'Salvador',
    active: false,
    points: 80
  }
]
store> db.costumers.updateOne({"name": "Carlos"}, {$set:{"active": "true"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
store> db.costumers.find({"name" :"Carlos"})
[
  {
    _id: ObjectId('6a976a07461f092b25bf4748'),
    name: 'Carlos',
    age: 28,
    city: 'Salvador',
    active: 'true',
    points: 80
  }
]
store> db.costumers.updateOne({"name": "Carlos"}, {$set:{"active": true}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
store> db.costumers.find({"name" :"Carlos"})
[
  {
    _id: ObjectId('6a976a07461f092b25bf4748'),
    name: 'Carlos',
    age: 28,
    city: 'Salvador',
    active: true,
    points: 80
  }
]
store> db.costumers.updateMany({"city": "Salvador"}, {$set:{"state": "BA"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
store> db.costumers.find({"city" :"Salvador"})
[
  {
    _id: ObjectId('6a976a07461f092b25bf4746'),
    name: 'Ana',
    age: 25,
    city: 'Salvador',
    active: true,
    points: 120,
    state: 'BA'
  },
  {
    _id: ObjectId('6a976a07461f092b25bf4748'),
    name: 'Carlos',
    age: 28,
    city: 'Salvador',
    active: true,
    points: 80,
    state: 'BA'
  }
]
store> db.costumers.updateOne({"name" : "Ana"} {$set:{"points" : 170}})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:40)

> 1 | db.costumers.updateOne({"name" : "Ana"} {$set:{"points" : 170}})
    |                                         ^
  2 |

store> db.costumers.updateOne({"name" : "Ana"}, {$set:{"points" : 170}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
store> db.costumers.find({"city" :"Salvador"})
[
  {
    _id: ObjectId('6a976a07461f092b25bf4746'),
    name: 'Ana',
    age: 25,
    city: 'Salvador',
    active: true,
    points: 170,
    state: 'BA'
  },
  {
    _id: ObjectId('6a976a07461f092b25bf4748'),
    name: 'Carlos',
    age: 28,
    city: 'Salvador',
    active: true,
    points: 80,
    state: 'BA'
  }
]
store> db.costumers
db.costumers

store> db.costumers.insertOne({
|   "name": "Fernando",
|   "age": 29,
|   "city": "Recife",
|   "active": true,
|   "points": 90
| })
{
  acknowledged: true,
  insertedId: ObjectId('6a976fe6461f092b25bf474b')
}
store> db.costumers.find(6a976fe6461f092b25bf474b)
Uncaught:
SyntaxError: Identifier directly after number. (1:19)

> 1 | db.costumers.find(6a976fe6461f092b25bf474b)
    |                    ^
  2 |

store> db.costumers.find('6a976fe6461f092b25bf474b')
MongoInvalidArgumentError: Query filter must be a plain object or ObjectId
store> db.costumers.find("Fernando")
MongoInvalidArgumentError: Query filter must be a plain object or ObjectId
store> db.costumers.find("name":"Fernando")
Uncaught:
SyntaxError: Unexpected token, expected "," (1:24)

> 1 | db.costumers.find("name":"Fernando")
    |                         ^
  2 |

store> db.costumers.find("name" : "Fernando")
Uncaught:
SyntaxError: Unexpected token, expected "," (1:25)

> 1 | db.costumers.find("name" : "Fernando")
    |                          ^
  2 |

store> db.costumers.find({"name" : "Fernando"})
[
  {
    _id: ObjectId('6a976fe6461f092b25bf474b'),
    name: 'Fernando',
    age: 29,
    city: 'Recife',
    active: true,
    points: 90
  }
]
store> db.costumers.deleteOne({"name": "Eduarda"})
{ acknowledged: true, deletedCount: 1 }
store> db.costumers.updateOne({"name" : "Daniela"}, {$set:{"vip" : true}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
store> db.costumers.find({"name" : "Daniela"})
[
  {
    _id: ObjectId('6a976a07461f092b25bf4749'),
    name: 'Daniela',
    age: 40,
    city: 'São Paulo',
    active: true,
    points: 500,
    vip: true
  }
]
store> db.costumers.updateOne({"name":"Bruno"}, {$unset: points: ""}})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:56)

> 1 | db.costumers.updateOne({"name":"Bruno"}, {$unset: points: ""}})
    |                                                         ^
  2 |

store> db.costumers.updateOne({"name":"Bruno"}, {$unset: {points: ""}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
store> db.costumers.find("name" : "Bruno")
Uncaught:
SyntaxError: Unexpected token, expected "," (1:25)

> 1 | db.costumers.find("name" : "Bruno")
    |                          ^
  2 |

store> db.costumers.deleteOne({"name": "Bruno"})
{ acknowledged: true, deletedCount: 1 }
store> db.costumers.insertOne(  {
|     _id: ObjectId('6a976a07461f092b25bf4747'),
|     name: 'Bruno',
|     age: 32,
|     city: 'Feira de Santana',
|     active: true,
|   )
Uncaught:
SyntaxError: Unexpected token (7:2)

  5 |     city: 'Feira de Santana',
  6 |     active: true,
> 7 |   )
    |   ^
  8 |

store> db.costumers.insertOne( {
|     "name": "Bruno",
|     "age": 32,
|     "city": "Feira de Santana",
|     "active": true,
|     "points": 300
|   })
{
  acknowledged: true,
  insertedId: ObjectId('6a9772c8461f092b25bf474c')
}
store> db.costumers.find({"name" : "Bruno"})
[
  {
    _id: ObjectId('6a9772c8461f092b25bf474c'),
    name: 'Bruno',
    age: 32,
    city: 'Feira de Santana',
    active: true,
    points: 300
  }
]
store> db.costumers.updateOne({"name":"Bruno"}, {$unset: {points: ""}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
store> db.costumers.find({"name" : "Bruno"})
[
  {
    _id: ObjectId('6a9772c8461f092b25bf474c'),
    name: 'Bruno',
    age: 32,
    city: 'Feira de Santana',
    active: true
  }
]
store> db.costumers.find(
|   { active: true, age: { $gt: 30 } },
|   { name: 1, _id: 0 }
| )
[ { name: 'Daniela' }, { name: 'Bruno' } ]
store>
