# 学习笔记

## 第5课：哈希表、映射、集合

### 哈希表总结

1. 写一个关于HashMap的小总结

> 资料：https://time.geekbang.org/column/article/64233

+ 衡量散列表负载：装载因子 = 已载入元素 / 散列表容量
+ 动态扩容/缩容：（根据 load factor，重新计算，迁移）
+ 优化：一次性扩容 -> 均摊扩容

**解决散列冲突：**
1. 开放寻址法（线性探测）
   - eg: Java 的 ThreadLocalMap
   - 线性探测
   - 二次探测
   - 双重散列
   - (优点：1、因为数据都存储在数组中，可以有效利用CPU cache加快查询速度；2、序列化更简单)
   - (缺点：1、删除需要标记；2、对load factor更敏感、内存利用率更低；)
   - (适合：数据量较小、load factor小)
2. 拉链法
   - eg: Java 的 LinkedHashMap
   - (优点：1、对load factor容忍度更高、内存利用率更高；2、更灵活地支持优化策略，例如红黑树代替链表)
   - (适合：大对象、大数据量)

> 一种攻击手段：散列碰撞攻击

### [JS中，Set、Map、WeakSet 和 WeakMap 的区别](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/6)

**Set**

1. 成员不能重复
2. 只有健值，没有健名，有点类似数组
3. 可以遍历，方法有add, delete, has

**weakSet**

1. 成员都是对象
2. 成员都是弱引用，随时可以消失。 可以用来保存DOM节点，不容易造成内存泄漏
3. 不能遍历，方法有add, delete, has

**Map**

1. 本质上是健值对的集合，类似集合
2. 可以遍历，方法很多，可以干跟各种数据格式转换

**weakMap**

1. 直接受对象作为健名（null除外），不接受其他类型的值作为健名
2. 健名所指向的对象，不计入垃圾回收机制
3. 不能遍历，方法同 get, set, delete, has

+ [JavaScript 实现 PriorityQueue](./priorityQueue.js)

## 第6课：树、二叉树、二叉搜索树

## 第6课：堆和二叉堆、图

**[heap](https://www.geeksforgeeks.org/heap-sort/)**

+ 时间复杂度 O(nlogn), 稳定的原地排序
+ https://time.geekbang.org/column/article/69913
+ Step1: 建堆
+ Step2: 排序
