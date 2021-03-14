/**
 * @param {number[][]} grid
 * @return {number}
 * F(i, j) = A(i, j) + min(F(i-1, j) + F(i, j-1))
 */

// O(mn) O(n)
const minPathSum = function(A) {
  if (!Array.isArray(A) || A.length < 1 ||
      !Array.isArray(A[0]) || A[0].length < 1) return 0

  const m = A.length, n = A[0].length
  const dp = A[0].slice()
  for (let j = 1; j < n; ++j) {
    dp[j] += dp[j - 1]  // 首行（从左到右累加）
  }
  for (let i = 1; i < m; ++i) {
    dp[0] += A[i][0]  // 最左列
    for (let j = 1; j < n; ++j) {
      dp[j] = A[i][j] + Math.min(dp[j], dp[j - 1])
    }
  }
  return dp[n - 1]
}

// ---- test case ----
console.time('minPathSum')
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))
console.log(minPathSum([[1,2,3],[4,5,6]]))
console.timeEnd('minPathSum')
