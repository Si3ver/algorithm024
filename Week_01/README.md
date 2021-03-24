# 学习笔记

## 第3课：数组、链表、跳表

> [Java.util.ArrayList](http://developer.classpath.org/doc/java/util/ArrayList-source.html)
> [Java.util.LinkedList](http://developer.classpath.org/doc/java/util/LinkedList-source.html)

**手撕代码**

+ [JavaScript版实现单向链表](../linkedlist/LinkedList.js)

**时间复杂度**

备注：skiplist 是有序的，实现简单，维护成本较高，空间复杂度O(n)。

array | linkedlist | skiplist
prepend O(1) O(1) O(1)
append O(1) O(1) O(1)
lookup O(1) O(n) O(logn)
insert O(n) O(1) O(logn)
delete O(n) O(1) O(logn)

## 第4课：栈、队列、优先队列、双端队列

+ stack FILO
+ queue FIFO
+ priorityQueue （heap）
+ deque
