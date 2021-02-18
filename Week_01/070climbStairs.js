/**
 * https://leetcode-cn.com/problems/climbing-stairs/
 * 思路：fibnacci数列
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  if (n <= 3) return n
  let a = 2, b = 3, c
  for(let i = 4; i <= n; ++i) {
    c = a + b
    a = b
    b = c
  }
  return c
}
