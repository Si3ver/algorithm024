/**
 * https://leetcode-cn.com/problems/power-of-two/
 * 231. 2的幂
 * 
 */

// 清除末位零 n & (n - 1)
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0
}

// ---- test case ----
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(1024))
console.log(isPowerOfTwo(294))
