/**
 * https://leetcode-cn.com/problems/climbing-stairs/
 * 70. 爬楼梯 | easy
 * dp
 * f(n) = f(n - 1) + f(n - 2)
 */

// 思路：fibnacci数列
const climbStairs = function(n) {
  if (typeof n !== 'number') return 0
  if (n < 3) return n
  let f1 = 1, f2 = 2, f3
  for (let i = 3; i <= n; ++i) {
    f3 = f1 + f2
    f1 = f2
    f2 = f3
  }
  return f3
}
