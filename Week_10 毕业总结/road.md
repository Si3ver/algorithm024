# 毕业刷题路线

```js
function getQuestionsArr () {
  const list = document.querySelectorAll('.article-typo li')
  return [...list].map((li, idx) => {
    const href = li.childNodes[0].href  // 题目地址
    const title = li.childNodes[0].innerText  // 题目
    const level = li?.childNodes[1]?.nodeValue?.split(/[（）()]/g)[1] || ''
    console.log(idx, ':', href, title, level)  // 难度级别
    return {
      level,
      title,
      href,
    }
  })
}
function getPrintTxt(quesArr) {
  const map = { '简单':'😊', '中等':'🤔', '困难':'🤯' }
  var txt = ''
  for (let i = 0; i < quesArr.length; ++i) {
    txt += `+ ${map[quesArr[i].level]} [${quesArr[i].title}](${quesArr[i].href})\n`
  }
  return txt
}
var quesArr = getQuestionsArr()
var txt = getPrintTxt(quesArr)
console.log(txt)
```

## 77题（“左耳朵耗子”陈皓老师和超哥分享的毕业刷题路线）

### 一、 基础

+ 😊 [两数之和](http://leetcode-cn.com/problems/two-sum)
+ 😊 [有效的括号](http://leetcode-cn.com/problems/valid-parentheses/)
+ 🤔 [字符串解码](http://leetcode-cn.com/problems/decode-string/)
+ 🤯 [ LRU 缓存机制](http://leetcode-cn.com/problems/lru-cache/submissions/)
+ 🤔 [实现 Trie（前缀树）](http://leetcode-cn.com/problems/implement-trie-prefix-tree/)
+ 🤔 [添加与搜索单词 - 数据结构设计](http://leetcode-cn.com/problems/add-and-search-word-data-structure-design/)
+ 🤯 [单词搜索 II ](http://leetcode-cn.com/problems/word-search-ii/)
+ 😊 [找不同](http://leetcode-cn.com/problems/find-the-difference/)
+ 😊 [单词规律](http://leetcode-cn.com/problems/word-pattern/)
+ 😊 [字符串中的第一个唯一字符](http://leetcode-cn.com/problems/first-unique-character-in-a-string)
+ 🤔 [无重复字符的最长子串](http://leetcode-cn.com/problems/longest-substring-without-repeating-characters)
+ 🤯 [最小覆盖子串](http://leetcode-cn.com/problems/minimum-window-substring/)
+ 😊 [合并两个有序链表](http://leetcode-cn.com/problems/merge-two-sorted-lists)
+ 😊 [环形链表](http://leetcode-cn.com/problems/linked-list-cycle)
+ 🤔 [环形链表 II ](http://leetcode-cn.com/problems/linked-list-cycle-ii)
+ 😊 [反转链表](http://leetcode-cn.com/problems/reverse-linked-list)
+ 🤔 [反转链表 II ](http://leetcode-cn.com/problems/reverse-linked-list-ii)
+ 🤔 [旋转链表](http://leetcode-cn.com/problems/rotate-list)
+ 🤔 [排序链表](http://leetcode-cn.com/problems/sort-list/)
+ 😊 [链表中倒数第 k 个节点](http://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/)
+ 🤔 [两两交换链表中的节点](http://leetcode-cn.com/problems/swap-nodes-in-pairs)
+ 😊 [按奇偶排序数组](http://leetcode-cn.com/problems/sort-array-by-parity/)
+ 😊 [按奇偶排序数组 II ](http://leetcode-cn.com/problems/sort-array-by-parity-ii/)
+ 😊 [有序数组的平方](http://leetcode-cn.com/problems/squares-of-a-sorted-array/)
+ 😊 [山脉数组的峰顶索引](http://leetcode-cn.com/problems/peak-index-in-a-mountain-array)
+ 🤯 [搜索旋转排序数组](http://leetcode-cn.com/problems/search-in-rotated-sorted-array)
+ 🤔 [搜索旋转排序数组 II ](http://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/)
+ 🤔 [寻找旋转排序数组中的最小值](http://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/)
+ 🤯 [寻找旋转排序数组中的最小值 II ](http://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/)
+ 🤔 [搜索二维矩阵](http://leetcode-cn.com/problems/search-a-2d-matrix)
+ 🤔 [等式方程的可满足性](http://leetcode-cn.com/problems/satisfiability-of-equality-equations/)
+ 🤔 [朋友圈](http://leetcode-cn.com/problems/friend-circles/)
+ 🤔 [账户合并](http://leetcode-cn.com/problems/accounts-merge/)

### 二、DFS

+ 😊 [二叉树的最大深度](http://leetcode-cn.com/problems/maximum-depth-of-binary-tree)
+ 😊 [路径总和](http://leetcode-cn.com/problems/path-sum/)
+ 🤔 [路径总和 II ](http://leetcode-cn.com/problems/path-sum-ii/)
+ 🤔 [被围绕的区域](http://leetcode-cn.com/problems/surrounded-regions/)
+ 🤔 [岛屿数量](http://leetcode-cn.com/problems/number-of-islands/)
+ 🤔 [岛屿的最大面积](http://leetcode-cn.com/problems/max-area-of-island/)
+ 🤔 [在二叉树中分配硬币](http://leetcode-cn.com/problems/distribute-coins-in-binary-tree/)

### 三、回溯

+ 🤔 [括号生成](http://leetcode-cn.com/problems/generate-parentheses/)
+ 🤯 [ N 皇后](http://leetcode-cn.com/problems/n-queens/)
+ 🤯 [ N 皇后 II ](http://leetcode-cn.com/problems/n-queens-ii/)
+ 🤔 [解数独](http://leetcode-cn.com/problems/sudoku-solver/)
+ 🤯 [不同路径 III ](http://leetcode-cn.com/problems/unique-paths-iii/)
+ 🤔 [单词搜索](http://leetcode-cn.com/problems/word-search/)

### 四、分治

+ 🤔 [搜索二维矩阵 II ](http://leetcode-cn.com/problems/search-a-2d-matrix-ii/)
+ 🤔 [合并 K 个排序链表](http://leetcode-cn.com/problems/merge-k-sorted-lists)
+ 🤔 [为运算表达式设计优先级](http://leetcode-cn.com/problems/different-ways-to-add-parentheses)
+ 🤯 [给表达式添加运算符](http://leetcode-cn.com/problems/expression-add-operators)
+ 🤔 [数组中的第 K 个最大元素](http://leetcode-cn.com/problems/kth-largest-element-in-an-array)
+ 🤔 [最接近原点的 K 个点](http://leetcode-cn.com/problems/k-closest-points-to-origin/)
+ 🤯 [鸡蛋掉落](http://leetcode-cn.com/problems/super-egg-drop/)

### 五、动态规划

+ 😊 [使用最小花费爬楼梯](http://leetcode-cn.com/problems/min-cost-climbing-stairs)
+ 😊 [爬楼梯](http://leetcode-cn.com/problems/climbing-stairs)
+ 😊 [不同路径](http://leetcode-cn.com/problems/unique-paths/)
+ 🤔 [最小路径和](http://leetcode-cn.com/problems/minimum-path-sum/)
+ 😊 [最大子序和](http://leetcode-cn.com/problems/maximum-subarray/)
+ 🤔 [乘积最大子数组](http://leetcode-cn.com/problems/maximum-product-subarray/)
+ 😊 [买卖股票的最佳时机](http://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock)
+ 😊 [买卖股票的最佳时机 II ](http://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)
+ 🤯 [买卖股票的最佳时机 III ](http://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/)
+ 🤯 [买卖股票的最佳时机 IV ](http://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/)
+ 🤔 [最佳买卖股票时机含冷冻期](http://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)
+ 🤔 [买卖股票的最佳时机含手续费](http://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee)
+ 🤔 [零钱兑换](http://leetcode-cn.com/problems/coin-change)
+ 🤔 [零钱兑换 II ](http://leetcode-cn.com/problems/coin-change-2)
+ 🤯 [编辑距离](http://leetcode-cn.com/problems/edit-distance)
+ 🤯 [不同的子序列](http://leetcode-cn.com/problems/distinct-subsequences/)
+ 🤯 [柱状图中最大的矩形](http://leetcode-cn.com/problems/largest-rectangle-in-histogram/)
+ 🤯 [最大矩形](http://leetcode-cn.com/problems/maximal-rectangle/)
+ 🤔 [最大正方形](http://leetcode-cn.com/problems/maximal-square/)
+ 🤔 [最低票价](http://leetcode-cn.com/problems/minimum-cost-for-tickets/)
+ 😊 [区域和检索 - 数组不可变](http://leetcode-cn.com/problems/range-sum-query-immutable/)
+ 🤔 [二维区域和检索 - 矩阵不可变](http://leetcode-cn.com/problems/range-sum-query-2d-immutable/)
+ 🤔 [最长上升子序列](http://leetcode-cn.com/problems/longest-increasing-subsequence)
+ 🤯 [鸡蛋掉落](http://leetcode-cn.com/problems/super-egg-drop/)
