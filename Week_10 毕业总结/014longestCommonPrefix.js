/**
 * https://leetcode-cn.com/problems/longest-common-prefix/
 * 14. 最长公共前缀
 */

// O(n * minStrLen)
function longestCommonPrefix(strs) {
  const minStrLen = Math.min(...strs.map(str => str.length))
  const n = strs.length
  if (minStrLen < 1 || n < 1) return ''
  if (n < 2) return strs[0]

  for (let i = 0; i < minStrLen; ++i) {
    for (let j = 1; j < n; ++j) {
      if (strs[j][i] !== strs[0][i]) {
        return strs[j].slice(0, i)
      }
    }
  }
  return strs[0].slice(0, minStrLen)
}

// ---- test case ----
console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["ab","a"]))
