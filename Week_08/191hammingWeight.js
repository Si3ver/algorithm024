/**
 * https://leetcode-cn.com/problems/number-of-1-bits/
 * 191. 位1的个数
 * 
 */

// 清除末位零 n & (n - 1)
function hammingWeight(n) {
  let cnt = 0
  while (n !== 0) {
    // console.log("🚀", (n >>> 0).toString(2))
    n = n & (n - 1)
    ++cnt
  }
  return cnt
}

// ---- test case ----
console.log(hammingWeight(
  parseInt('00000000000000000000000000001011', 2)
))  // 3
console.log(hammingWeight(
  parseInt('00000000000000000000000010000000', 2)
))  // 1
console.log(hammingWeight(
  parseInt('11111111111111111111111111111101', 2)
))  // 31
