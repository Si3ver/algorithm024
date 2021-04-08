/**
 * https://leetcode-cn.com/problems/valid-palindrome-ii/
 * 680. 验证回文字符串 Ⅱ
 */

// 分治，判断首尾是否相同来缩短问题规模
function validPalindrome(s) {
  if (s.length < 3) return true
  const n = s.length
  if (s[0] === s[n - 1]) {
    return validPalindrome(s.slice(1, n - 1))
  }
  return isPalinDrome(s.slice(1)) || isPalinDrome(s.slice(0, n - 1))
}

function isPalinDrome(s) {
  if (s.length < 2) return true
  const n = s.length
  const halfLen = s.length >> 1
  for (let i = 0; i < halfLen; ++i) {
    if (s.charAt(i) !== s.charAt(n - i - 1)) {
      return false
    }
  }
  return true
}

// ---- test case ----
console.log(validPalindrome('aba'))
console.log(validPalindrome('abca'))
