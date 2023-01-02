---
title: Data Partitioning
icon: article
article: true
index: false
---
- Split table or database to improve the performance

## Methods

- How we divide data

### Horizontal Patitioning

- Divide the table into multiple same structure tables

### Vertical Partitioning

- Divide the table into different tables according to some logic

### Directory-Based Partitioning

- Create a search service, and alow to add more database services
- Add a new single point of failure

## Criteria

- How we actually divide and insert data

### Key or Hash-based Partitioning

- Divide the rows in table according to a hash function, like we have 100 rows and we need to divide them into 10 tables, we can calculate 100 modulo 10 and the result should be the partition we need to save the data
- If we add node or remove a node, we need to modify the hash function and re-assign the data, but it can be resolve by using consistent hashing
- We can use vertual nodes to implement the consistent hashing, like a ring, we assingn these vertual nodes to different machines and make sure any vertual node appears more than once. It can be considered as a replication. When we remove a server, we only need to assign the virtual nodes to other machines and will not affect the access of data
  - ![data-partitioning](/assets/notes/images/data-partitioning.png)

### List Partitioning

- Each partition have a list of values, if the data contains value in list, it will be assign to the corresponding partition

### Round-robin Partitioning

- With n number of partitions, we insert i data into partition i mod n

### Composite Partitioning

- Combination of other functions
- Consisten hasing can be considered as a composite of hash and list partitioning

## Common Problems

### Joins and Denormalization

- We cannot join tables cross partitions, so we need to complie data from different machines and its not efficient
- We can denormalize the database to resolve Join problem, then we will have redundancy of the table and can be easily join
- However, denormalization may lead to data inconsistency

### Referential Integrity

- We cannot enforce data integrity constraints like foreign keys in partitions
- Solution is to implement the logic in application code, and use SQL jobs to clean up dangling references

### Rebalancing

- If the data distribution is not balance or a partition reach to avery high load
- We should add more partitions or rebalancing the exist data
- To solve hotspot problem
