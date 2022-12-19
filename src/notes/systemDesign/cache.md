---
title: Cache
icon: article
article: true
index: false
category:
  - System Design Component
tag:
  - Cache
---
- For some frequently accessed resources, we can use cache to speed up the response time because usually cache will store data in memory which is much more faster than database with storage
- We can put the cache between the application server and database, when application access the data, if the data exist in cache (cache hit), we just get it and return; if it not exist (cache miss), we can get it from the databse

## Cache Write methods

### Write-through

* Cons: latency
* Pros: complete consistancy

![write-throught](/assets/notes/images/cache.png)

### Write-around

- Cons: cache miss, more latency, less consistancy
- Pros: less write latency

![write-around](/assets/notes/images/cache1.png)

### Write-back

- Cons: lose data
- Pros: low latency

![img]()
