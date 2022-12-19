---
title: ACID Complicancy
icon: article
article: true
index: false
category:
  - System Design Concept
tag:
  - Database
---
ACID complicancy is a principle for database.

## Atomicity

* All operations in a statement should be all executed or none of them are executed
* If there are fails when execute transaction, it will be rollback to original state

## Consistancy

- The transaction can only modify the tables under a predefined way
- If we input some wrong data, it will not affect the whole etable

## Isolation

- Allow concurrent operations on a table
- These operations will not affect others

## Durability

- After the transaction finish modify of data, the change should be permanently
- Even system fails, database will not lose data
