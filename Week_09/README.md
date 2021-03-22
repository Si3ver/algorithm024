# 学习笔记

## 第 17 课 | 布隆过滤器 & LRU 缓存

### Bloom Filter

案例

1. 比特币网络
2. 分布式系统（Map-Reduce）—— Hadoop，search engine
3. Redis缓存
4. 垃圾邮件、评论等的过滤

> https://www.cnblogs.com/cpselvis/p/6265825.html
> https://blog.csdn.net/tianyaleixiaowu/article/details/74721877

### LRU cache

+ Least recently used
+ 实现：HashMap + 双向链表
+ O(1) 查询
+ O(1) 修改、更新

## 第 18 课 | 排序算法

**比较类排序**

+ 交换排序
  - [冒泡排序](./sort-basic.js)
  - [快速排序](./sort-quick.js)
+ 插入排序
  - [简单插入排序](./sort-basic.js)
  - 希尔排序
+ 选择排序
  - [简单选择排序](./sort-basic.js)
  - 堆排序
+ 归并排序
  - [二路归并排序](./sort-merge.js)
  - 多路归并排序

![](./sort.png)

**非比较类排序**

+ 计数排序
+ 桶排序
+ 基数排序

## 第 19 课 | 高级动态规划


## 第 20 课 | 字符串算法

