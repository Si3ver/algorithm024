/**
 * https://leetcode-cn.com/problems/reverse-bits/
 * 190. 颠倒二进制位
 */
function reverseBits(n) {
  let res = 0, loops = 32
  while (--loops >= 0) {
    res = (res << 1) + (n & 1)
    n = n >> 1
  }
  return res >>> 0  // 无符号右移
}

// ---- test case ----
let str1 = '00000010100101000001111010011100'
let str2 = '11111111111111111111111111111101'
let ret1 = reverseBits(parseInt(str1, 2))
let ret2 = reverseBits(parseInt(str2, 2))

console.log(str1)
console.log(ret1.toString(2).padStart(32, '0'))


console.log(str2)
console.log(ret2.toString(2))
