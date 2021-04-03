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
  - [堆排序](./sort-heap.js)
+ 归并排序
  - [二路归并排序](./sort-merge.js)
  - 多路归并排序

![](./sort.png)

**非比较类排序**

+ O(n)
+ 只能排整型数据
+ [计数排序]  Counting Sort
+ [桶排序] Bucket Sort
+ [基数排序] Radix Sort

## 第 19 课 | 高级动态规划

1. 划分子问题
2. 分治 + 最优子结构
3. 顺推公式：动态递推

**常见问题**


1. 爬楼梯问题 f(n) = f(n-1) + f(n-2)
2. 不同路径 f(i, j) = f(i-1, j) + f(i, j-1)
3. 打家劫舍
  + 方法一：f(i) = max(f(i-2) + A[i], f(i-1))
  + 方法二：f(i, 0) = max(f(i-1, 0), f(i-1, 1)), f(i, 1) = f(i-1, 0) + A[i]
4. 最小路径和 f(i, j) = min(f(i-1, j), f(i, j-1)) + A[i][j]
5. 股票买卖 第i天，交易了k次，是否持有股票
  + f(i, k, 0) = max(f(i-1, k, 0), f(i-1,   k, 1) + A[i])
  + f(i, k, 1) = max(f(i-1, k, 1), f(i-1, k-1, 0) - A[i])

**高级DP**

复杂度来源

1. 状态拥有更多维度（太多需要考虑压缩）
2. 状态方程更加复杂
