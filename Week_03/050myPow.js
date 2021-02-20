/**
 * medium
 * https://leetcode-cn.com/problems/powx-n/
 */

// 思路1：分治（分解为子问题，再合并结果）
const myPow1 = function(x, n) {
  const fastPow = (x, n) => {
    if (n === 0) return 1.0
    const half = fastPow(x, Math.floor(n / 2))
    return n % 2 === 0 ? half * half : half * half * x
  }
  return n >= 0 ? fastPow(x, n) : 1.0 / fastPow(x, -n)
}

// 思路2：【快速幂】
// 自底向上迭代，遇到奇数扩大为 x * x ^ 2, 遇到偶数扩大为 x ^ 2
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
console.log(myPow1(2.0, 10))
console.log(myPow1(2.1, 3))
console.log(myPow1(2.0, -2))

console.log(myPow(2.0, 10))
console.log(myPow(2.1, 3))
console.log(myPow(2.0, -2))
