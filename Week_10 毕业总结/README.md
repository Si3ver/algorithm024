# 学习笔记

## 第 20 课 | 字符串算法

string immutable

**字符串访问**
1. [String.prototype.charAt()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
2. StringName[index]
3. [区别](https://stackoverflow.com/questions/5943726/string-charatx-or-stringx)
  - charAt 兼容性更好

**字符串拷贝**
1. [String.prototype.slice()]
2. [String.prototype.substr()]
3. [String.prototype.substring()]

**字符串DP**
1. 最长回文串
  1. 暴力 O(n^3)
  2. 中间向两边扩张 O(n^2)
  3. 动态规划 O(n^2)
