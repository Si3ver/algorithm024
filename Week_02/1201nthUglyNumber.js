/**
 * https://leetcode-cn.com/problems/ugly-number-iii/
 * 
 * 解法： 
 * 1. 二分
 * 2. 容斥原理，计算个数
 */

// 最大公约数(greatest common divisor)
const gcd = (x, y) => x % y ? gcd(y, x % y) : y
// 最小公倍数(least common multiple)
const lcm = (x, y) => x * y / gcd(x, y)

// 解法一
const nthUglyNumber1 = function(n, a, b, c) {
  const ab = lcm(a, b),
        ac = lcm(a, c),
        bc = lcm(b, c),
        abc = lcm(ab, c)
  let left = 0, right = n * Math.min(a, b, c)
  while(left <= right) {
    const mid = Math.floor((left + right) / 2)
    const num = Math.floor(mid / a)
              + Math.floor(mid / b)
              + Math.floor(mid / c)
              - Math.floor(mid / ab)
              - Math.floor(mid / ac)
              - Math.floor(mid / bc)
              + Math.floor(mid / abc)
    if (num >= n) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
}

// 解法二：【优化】位运算提速(但需要用bigInt类型，防止越界)
const nthUglyNumber = function(n, a, b, c) {
  let left = 0n,
      right = BigInt(n) * BigInt(Math.min(a, b, c))
  a = BigInt(a)
  b = BigInt(b)
  c = BigInt(c)
  const ab = lcm(a, b),
        ac = lcm(a, c),
        bc = lcm(b, c),
        abc = lcm(ab, c)
  while(left <= right) {
    const mid = (left + right) >> 1n
    const cnt = ((mid / a  ) >> 0n)
              + ((mid / b  ) >> 0n)
              + ((mid / c  ) >> 0n)
              - ((mid / ab ) >> 0n)
              - ((mid / ac ) >> 0n)
              - ((mid / bc ) >> 0n)
              + ((mid / abc) >> 0n)

    if (cnt >= n) {
      right = mid - 1n
    } else {
      left = mid + 1n
    }
  }
  return left
}

// ---- test case ----
console.log(nthUglyNumber1(3, 2, 3, 5))
console.log(nthUglyNumber1(4, 2, 3, 4))
console.log(nthUglyNumber1(5, 2, 11, 13))
console.log(nthUglyNumber1(5, 2, 3, 3))
console.log(nthUglyNumber1(1000000000, 2, 217983653, 336916467))

console.log(nthUglyNumber(3, 2, 3, 5))
console.log(nthUglyNumber(4, 2, 3, 4))
console.log(nthUglyNumber(5, 2, 11, 13))
console.log(nthUglyNumber(5, 2, 3, 3))
console.log(nthUglyNumber(1000000000, 2, 217983653, 336916467))



