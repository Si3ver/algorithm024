# 作业
## 一、BloomFilter 和 LRU Cache

### LRU 缓存机制（亚马逊、字节跳动、Facebook、微软在半年内面试中常考）

+ [代码](./146LRUCache.js)




## 二、排序

### 用自己熟悉的编程语言，手写各种初级排序代码，提交到学习总结中。

1. [冒泡排序、插入排序、选择排序](./sort-basic.js)
2. [快速排序](./sort-quick.js)
3. [归并排序](./sort-merge.js)
4. [堆排序](./sort-heap.js) 

### 数组的相对排序（谷歌在半年内面试中考过）

+ [代码](./1112relativeSortArray.js)

### 有效的字母异位词（Facebook、亚马逊、谷歌在半年内面试中考过）

+ [代码](./242isAnagram.js)

### 合并区间（Facebook、字节跳动、亚马逊在半年内面试中常考）

+ [代码](./056merge.js)

### 翻转对（字节跳动在半年内面试中考过）

+ [代码](./493reversePairs.js)





## 三、高级动态规划

### 不同路径 2 道题目的状态转移方程

```js
// 不同路径 I
f(i, j) = f(i-1, j) + f(i, j-1)
// 不同路径 II
if 障碍物处:
  f(i, j) = 0
else
  f(i, j) = f(i+1, j) + f(i, j+1)
```

+ [不同路径 I](./062uniquePaths.js)
+ [不同路径 II](./063uniquePathsWithObstacles.js)

### 最长上升子序列（字节跳动、亚马逊、微软在半年内面试中考过）

+ [代码](./300lengthOfLIS.js)

### 解码方法（字节跳动、亚马逊、Facebook 在半年内面试中考过）

+ [代码](./091numDecodings.js)

### 最长有效括号（亚马逊、字节跳动、华为在半年内面试中考过）

+ [代码](./032longestValidParentheses.js)

TODO ### 最大矩形（谷歌、微软、字节跳动在半年内面试中考过）

+ [代码](./085maximalRectangle.js)

TODO ### 不同的子序列（MathWorks 在半年内面试中考过）

+ [代码](./115numDistinct.js)


TODO ### 赛车（谷歌在半年内面试中考过）

+ [代码](./818racecar.js)
