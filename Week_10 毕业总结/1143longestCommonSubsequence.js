/**
 * https://leetcode-cn.com/problems/longest-common-subsequence/
 * 1143. 最长公共子序列 | medium
 */

// 因为要用到dp[i-1][j-1]的值，所以dp开二维数组
const longestCommonSubsequence = function(s1, s2) {
  if (typeof s1 !== 'string' || typeof s2 !== 'string' || !s1.length || !s2.length) return 0
  const m = s1.length, n = s2.length
  const dp = Array(m + 1).fill(0).map(
        _ => Array(n + 1).fill(0))
  
  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[m][n]
}

// ---- test case ----
console.log(longestCommonSubsequence('abcde', 'ace'))
console.log(longestCommonSubsequence('abc', 'abc'))
console.log(longestCommonSubsequence('abc', 'def'))
console.log(longestCommonSubsequence("abcba", "abcbcba"))
