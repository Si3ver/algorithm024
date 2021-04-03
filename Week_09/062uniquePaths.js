/**
 * https://leetcode-cn.com/problems/unique-paths/
 * 62. 不同路径 | medium
 */

// dp  f(i, j) = f(i - 1, j) + f(i, j-1)

// O(mn) O(n)
function uniquePaths(m, n) {
  const dp = Array(n).fill(1)
  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      dp[j] += dp[j - 1]
    }
  }
  return dp[n - 1]
}

// ---- test case ----
console.log(uniquePaths(3, 7))
