/**
 * https://leetcode-cn.com/problems/longest-common-subsequence/
 * 1143. 最长公共子序列 ｜ medium
 */

/*
 * s1[-1]  = s2[-1]:  f(i, j) = f(i - 1, j - 1) + 1
 * s1[-1] != s2[-1]:  f(i, j) = max(f(i - 1, j), f(i, j - 1))
 * tip: 声明dp数组，空首行和首列，便于迭代。
*/

const longestCommonSubsequence = function(s1, s2) {
  const m = s1.length, n = s2.length
  if (m === 0 || n === 0 || typeof s1 !== 'string' || typeof s2 !== 'string') return 0
  const dp = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0))
  for(let i = 1; i <= m; ++i) {
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
console.time('longestCommonSubsequence')
console.log(longestCommonSubsequence('abcde', 'ace'))
console.log(longestCommonSubsequence('abc', 'abc'))
console.log(longestCommonSubsequence('abc', 'def'))
console.timeEnd('longestCommonSubsequence')
