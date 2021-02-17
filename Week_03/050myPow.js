/**
 * medium
 * https://leetcode-cn.com/problems/powx-n/
 * @param {number} x
 * @param {number} n
 * @return {number}
 * 思路：自顶向下迭代，遇到奇数扩大为 x * x ^ 2, 遇到偶数扩大为 x ^ 2
 */
const myPow = function(x, n) {
  if (n < 0) return 1.0 / myPow(x, -n)
  let res = 1.0
  for(let i = n; i != 0; i = Math.floor(i / 2)) {
    if (i % 2 !== 0) {
      res *= x
    }
    x *= x
  }
  return res
}

// ---- test case ----
console.log(myPow(2.0, 10))
console.log(myPow(2.1, 3))
console.log(myPow(2.0, -2))
