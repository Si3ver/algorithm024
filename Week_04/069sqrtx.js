/**
 * https://leetcode-cn.com/problems/sqrtx/
 * 
 * 069 x的平方根
 * 
 */

// 方法1. 二分查找
// y = x ^ 2, (x > 0): 是单调递增的抛物线
const mySqrt = function(x) {
  if (x === 0 || x === 1) return x
  let l = 1, r = x
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (mid * mid > x) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return r
}

// 方法2: 牛顿迭代法
// r = (r + x / r) / 2
const mySqrt2 = function(x) {
  let r = x
  while (r * r > x) {
    r = Math.floor(x / r + (r - x / r) / 2)
  }
  return r
}


// ---- test case ----
console.log(mySqrt(0))
console.log(mySqrt(1))
console.log(mySqrt(4))
console.log(mySqrt(8))
console.log(mySqrt(9))
console.log(mySqrt(2147483647))
console.log(mySqrt(2147395600))


console.log(mySqrt2(4))
console.log(mySqrt2(8))
console.log(mySqrt2(9))
console.log(mySqrt2(2147483647))
console.log(mySqrt2(2147395600))
