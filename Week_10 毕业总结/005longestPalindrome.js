/**
 * https://leetcode-cn.com/problems/longest-palindromic-substring/
 * 5. 最长回文子串 ｜ medium
 */

// 中心扩散法，共 2n - 1 个中心
function longestPalindrome (s) {
  const n = s.length
  if (n < 1) return ''
  let start = 0, end = 0
  for (let i = 0; i < n; ++i) {
    const len1 = expand(s, i, i)      // 奇数长度
    const len2 = expand(s, i, i + 1)  // 偶数长度
    const len = Math.max(len1, len2)
    if (len > end - start + 1) {      // 找到了更长的
      console.log(len1, len2, i)
      start = i - ((len - 1) >> 1)
      end   = i + (      len >> 1)
    }
  }
  return s.slice(start, end + 1)
}

function expand(s, lo, hi) {
  while (lo >= 0 && hi < s.length && s.charAt(lo) === s.charAt(hi)) {
    --lo
    ++hi
  }
  return hi - lo - 1
}

// ---- test case ----
console.log(longestPalindrome('babad')) // bab
console.log(longestPalindrome('cbbd'))  // bb
console.log(longestPalindrome('a'))     // a
console.log(longestPalindrome('ac'))    // a
console.log(longestPalindrome('cbbd'))  // bb
