---
title: Queue
icon: article
article: true
index: false
---
- Message queue can receive, hold and deliver messages.
- Producer send message/job to queue, notify the user
- Consumer pick up message/job from the queue, and process it
- Normally first-in-first-out
- Mainly used for decoupling applications, asynchronous messaging, traffic shaping
- Common use:
  - Redis: simple but messages can be lost
  - RabbitMQ: popular, use AMQP
  - Amazon SQS: sometimes high latency, and send message twice
