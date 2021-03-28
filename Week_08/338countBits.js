/**
 * https://leetcode-cn.com/problems/counting-bits/
 * 338. 比特位计数 | medium
 */

function countBits(n) {
  const bits = Array(n + 1).fill(0)
  for (let i = 1; i <= n; ++i) {
    bits[i] = bits[i >> 1] + (i & 1)
  }
  return bits
}

// ---- test case ----
console.log(countBits(2))
console.log(countBits(5))
