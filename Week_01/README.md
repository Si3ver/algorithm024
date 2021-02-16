# 学习笔记

## 听课笔记

> [Java.util.ArrayList](http://developer.classpath.org/doc/java/util/ArrayList-source.html)
> [Java.util.LinkedList](http://developer.classpath.org/doc/java/util/LinkedList-source.html)

**时间复杂度**

备注：skiplist 是有序的，实现简单，维护成本较高，空间复杂度O(n)。

array | linkedlist | skiplist
prepend O(1) O(1) O(1)
append O(1) O(1) O(1)
lookup O(1) O(n) O(logn)
insert O(n) O(1) O(logn)
delete O(n) O(1) O(logn)

## 作业

**easy**

+ 用 add first 或 add last 这套新的 API 改写 Deque 的代码
+ 分析 Queue 和 Priority Queue 的源码

大致过了一下 API，平时主要用JavaScript，不太熟悉Java。

+ 删除排序数组中的重复项（Facebook、字节跳动、微软在半年内面试中考过）
+ 旋转数组（微软、亚马逊、PayPal 在半年内面试中考过）
+ 合并两个有序链表（亚马逊、字节跳动在半年内面试常考）
+ 合并两个有序数组（Facebook 在半年内面试常考）
+ 两数之和（亚马逊、字节跳动、谷歌、Facebook、苹果、微软在半年内面试中高频常考）
+ 移动零（Facebook、亚马逊、苹果在半年内面试中考过）
+ 加一（谷歌、字节跳动、Facebook 在半年内面试中考过）

**medium**

+ 设计循环双端队列（Facebook 在 1 年内面试中考过）

**hard**

+ 接雨水（亚马逊、字节跳动、高盛集团、Facebook 在半年内面试常考）
