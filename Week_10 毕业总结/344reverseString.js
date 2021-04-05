/**
 * https://leetcode-cn.com/problems/reverse-string/
 * 344. 反转字符串
 */

function reverseString(s) {
  const loops = s.length >> 1
  for (let i = 0; i < loops; ++i) {
    const tmp = s[i]
    s[i] = s[s.length - i - 1]
    s[s.length - i - 1] = tmp
  }
}

// ---- test case ----
const arr = ["h","e","l","l","o"]
reverseString(arr)
console.log(arr)
