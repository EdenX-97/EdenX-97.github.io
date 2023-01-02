---
title: SQL vs NoSQL
icon: article
article: true
index: false
---
## SQL - Relational

- Structured and need to predefined the schema of data
- MySQL, Oracle, Postgres, MS SQL Server, SQLite, MariaDB
- Use SQL language

## NoSQL - NonRelational

- Key-Value store
  - All data stores in key-value pairs
  - DynamoDB, Redis
- Document Database
  - Data stores in documents and documents are grouped in collections, documents can have different structure
  - MongoDB
- Wide-Column Database
  - Data stores in column families
  - HBase, Cassandra
- Graph Database
  - Data stores in graph structures with nodes, properties and lines (connections)
  - Neo4J, InfiniteGraph

## Differences

- Storage
  - SQL stores data in tables, each row represents an entity, and each column represents an attribute
  - NoSQL have different data storage models, they are key-value, document, wide-column, graph
- Schema
  - SQL have a fixed schema of data, we need to confirm all attributes when we insert a data. We can modify the schema, but it need some downtime
  - NoSQL have a dynamic schema, we do not need to make sure every attributes exist when we insert a data, and we can also add more attributes dynamically when we need
- Query
  - SQL use structured query language to define or process data
  - NoSQL do not use structured query language, and different type of NoSQL database have different kind of method to query
- Scalability
  - SQL can vertical scale, by improve the hardware
  - NoSQL can horizontal scale, by add mroe machines
- Reliability - [ACID Compliancy](./ACID-compliancy.md)
  - Most SQL database are ACID compliancy
  - Most NoSQL database are not ACID compliancy to improve performance and scalability

## Which one to use

### Why SQL

1. When we need to ensure ACID compliance, it will be better to use SQL database, it can reduces the exceptions and protects the integrity of database
2. We can predesign the structure of data, and do not want to often scale the database
3. Suitable for e-commerce and financial system

### Why NoSQL

1. We need to store large number of data and do not need strict structure, therefore we can add any new attribute if we want
2. We can easily scale the database by add more machines, it has higher scalability
3. Suitable for rapid development, because the data structure can be updated frequently, and the quick iteration will not bring much downtime
