/**
 * https://leetcode-cn.com/problems/valid-parenthesis-string/
 * 678. 有效的括号字符串 | medium
 */

// 贪心法，双向遍历，检查是否有不匹配括号
function checkValidString(s) {
  let left = 0, right = 0, n = s.length
  for (let i = 0; i < n; ++i) {
    left += s[i] === ')' ? -1 : 1
    right += s[n - i - 1] === '(' ? -1 : 1
    if (left < 0 || right < 0) return false
  }
  return true
}

// ---- test case ----
console.log(checkValidString('(*))'))
console.log(checkValidString('('))
