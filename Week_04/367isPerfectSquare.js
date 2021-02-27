
/**
 * https://leetcode-cn.csom/problems/valid-perfect-square/
 * 
 * 367. 有效的完全平方数
 */

// 解法一：binarySearch  O(logn)  效果优于解法二
const isPerfectSquare = function(n) {
  let l = 0, r = n
  while (l <= r) {
    const mid = l + ((r - l) >> 1), val = mid * mid
    if (val === n) {
      return true
    } else if (val > n) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return false
} 

// 解法二： 找规律，循环减去一个奇数  O(sqrt(n))
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
  return n === 0
}

// ---- test case ----
console.log(isPerfectSquare(0))
console.log(isPerfectSquare(1))
console.log(isPerfectSquare(14))
console.log(isPerfectSquare(16))
console.log(isPerfectSquare2(0))
console.log(isPerfectSquare2(1))
console.log(isPerfectSquare2(14))
console.log(isPerfectSquare2(16))
