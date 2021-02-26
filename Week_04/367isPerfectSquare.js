
/**
 * https://leetcode-cn.com/problems/valid-perfect-square/
 * 
 * 367. 有效的完全平方数
 */

// 解法一：binarySearch
const isPerfectSquare = function(n) {
  if (n === 0 || n === 1) return true
  let l = 1, r = n
  while (l <= r) {
    const mid = r + ((l - r) >> 1)
    if (mid * mid > n) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return r * r === n
}

// 解法二： 找规律，递推
/**
 *  1
 *  4 = 1 + 3
 *  9 = 1 + 3 + 5
 * 16 = 1 + 3 + 5 + 7
 * 25 = 1 + 3 + 5 + 7 + 9
 * ...
 */
const isPerfectSquare2 = function(n) {
  let x = 1
  while (n > 0) {
    n -= x
    x += 2
  }
  return n == 0
}

// ---- test case ----
console.log(isPerfectSquare(14))
console.log(isPerfectSquare(16))
console.log(isPerfectSquare2(14))
console.log(isPerfectSquare2(16))

