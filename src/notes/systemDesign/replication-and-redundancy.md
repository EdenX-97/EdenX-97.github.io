---
title: replication
icon: article
article: true
index: false
---
## Replication

- Copy data to have some replicas, to improve [reliability](./scalability-availability-reliability.md)
- In DBMS, usually we have a primary-replica relationship, when the original server updates, it will send messages to all replica servers, and then these replicas will be updated
- Cons:
  - Data loose may happen when master node fail to write data to other nodes
  - Need more machines and costs

### Master-slave Replication

- Master provide reads and writes
- Slave provide only reads
- Writes will be replicate to slaves
- If master down or fail, can still provide reads, and then one slave will be set to master
- Cons:
  - Need additional logic to promote a slave to a master
  - More slaves will takes more latency to write data

### Master-master Replication

- More than one master provides reads and writes
- If one master down or fail, other masters can provide services
- Cons:
  - Need a load balancer
  - Not consistent, or have more write latency
  - When there are many write nodes, need to deal with the conflict

## Redundancy

- Replication of key components or functinos of the system
- Usually means backup to improve the [reliability](./scalability-availability-reliability.md)
- Key method to remove the single point of failure
