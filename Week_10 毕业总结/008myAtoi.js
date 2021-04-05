/**
 * https://leetcode-cn.com/problems/string-to-integer-atoi/
 * 8. 字符串转换整数 (atoi) | medium
 */

// 解法一：使用API
function myAtoi(str) {
  return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648)
}

// 解法二：手写一趟遍历 O(n)
function myAtoi(str) {
  const n = str.length
  if (n < 1) return 0
  
  let idx = 0, sign = 1, total = 0

  // 去除左边空格
  while (str.charAt(idx) === ' ' && idx < n) ++idx 

  // 处理正负号
  const ch = str.charAt(idx)
  if (ch === '+' || ch === '-') {
    sign = ch === '-' ? -1 : 1
    ++idx
  }

  const startIdx = '0'.codePointAt(0)
  for (; idx < n; ++idx) {
    const digit = str.codePointAt(idx) - startIdx
    if (digit < 0 || digit > 9) { // 遇到非数字，结束循环
      break
    }
    total = 10 * total + digit
  }

  const MAX = 2147483647, MIN = -2147483648
  let ret = total * sign
  ret = ret > MAX ? MAX : ret
  ret = ret < MIN ? MIN : ret
  return ret
}

// ---- test case ----
console.log(myAtoi('42'))             // 42
console.log(myAtoi('   -42'))         // -42
console.log(myAtoi('4139 with words'))// 4139
console.log(myAtoi('words and 987'))  // 0
console.log(myAtoi('-91283472332'))   // -2147483648
