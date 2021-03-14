/**
 * https://leetcode-cn.com/problems/palindromic-substrings/
 * 647. 回文子串 | medium
 * 
 */

const countSubstrings = function(s) {
  if (!s.length) return 0
  let cnt = 0, n = s.length

  const help = (l, r) => {
    while (l >= 0 && r < n && s[l--] === s[r++]) {
      ++cnt
    }
  }
  
  for (let i = 0; i < n; ++i) {
    help(i, i)
    help(i, i + 1)
  }
  return cnt
}

// ---- test case ----
console.log(countSubstrings('abc'))
console.log(countSubstrings('aaa'))
