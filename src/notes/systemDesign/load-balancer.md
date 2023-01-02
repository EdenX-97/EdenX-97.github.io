---
title: Load Balancer
icon: article
article: true
index: false
---
- Sits between clients and servers, accepting incoming traffics and distributing them to different servers
- Horizontal scaling
- Can check if every servers are healthy, if one is unhealthy, LB will not send traffict to it
- Usually be added at 3 places
  - Between user and web server
  - Between web servers and application servers
  - Between application servers and databses
  - ![load-balancer](/assets/notes/images/load-balancer.png)

## Benetits

- Improve availability, like even some of the servers are down or fail, it will not affect user's experience and the whole system, because load balancer will not send many requests to unhealthy server
- Reduce the latency because load balancer can send traffic to a server that have lower load

## Cluster

- Load balancer can be single point of failure
- To deal with the problem, we can have cluster of load balances
- Each load balancer will monitor the health of others
