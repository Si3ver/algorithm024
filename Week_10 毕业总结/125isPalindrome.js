/**
 * https://leetcode-cn.com/problems/valid-palindrome/
 * 125. 验证回文串
 */

// 解法一：先用正则处理 O(n), O(n)
function isPalindrome(s) {
  const t = s.replace(/[^\da-zA-Z]/g, '').toLowerCase()
  const n = t.length
  // console.log(t, n)
  if (n < 2) return true
  let lo = 0, hi = n - 1
  while (lo < hi && t[lo] === t[hi]) {
    ++lo
    --hi
  }
  return t[lo] === t[hi]
}

// 解法二： 码点 + 双指针收缩 O(n) O(1)
function isPalindrome(s) {
  const n = s.length
  if (n < 2) return true
  const s1 = 'A'.codePointAt(0)
  const d1 = 'Z'.codePointAt(0)
  const s2 = 'a'.codePointAt(0)
  const d2 = 'z'.codePointAt(0)
  const s3 = '0'.codePointAt(0)
  const d3 = '9'.codePointAt(0)
  const isAlpha = (ch) => {
    const cp = ch.codePointAt(0)
    return (cp >= s1 && cp <= d1 || cp >= s2 && cp <= d2)
  }
  const isDigital = (ch) => {
    const cp = ch.codePointAt(0)
    return (cp >= s3 && cp <= d3)
  }
  const isSameChar = (ch1, ch2) => {
    const cp1 = ch1.codePointAt(0)
    const cp2 = ch2.codePointAt(0)
    return cp1 === cp2
  }
  const isSameAlpha = (ch1, ch2) => {
    if (!isAlpha(ch1) || !isAlpha(ch2)) return false // 要先保证两个字符都是字母
    const cp1 = ch1.codePointAt(0)
    const cp2 = ch2.codePointAt(0)
    const gap = Math.abs(cp1 - cp2)
    return gap === s2 - s1
  }

  let lo = 0, hi = n - 1
  while (lo < hi) {
    // filter
    while (lo < hi && !isAlpha(s.charAt(lo)) && !isDigital(s.charAt(lo))) { ++lo }
    while (lo < hi && !isAlpha(s.charAt(hi)) && !isDigital(s.charAt(hi))) { --hi }
    // console.log(lo, hi, s[lo], s[hi])
    if (lo >= hi) {
      break
    } else if (
      isSameChar( s.charAt(lo), s.charAt(hi)) ||
      isSameAlpha(s.charAt(lo), s.charAt(hi))
    ) {
      ++lo
      --hi
    } else {
      return false
    }
  }
  return true
}

// ---- test case ----
console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('race a car'))
console.log(isPalindrome('.,'))
console.log(isPalindrome('OP'))
console.log(isPalindrome('0P'))
console.log(isPalindrome('ab_a'))
