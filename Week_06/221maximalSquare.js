/**
 * https://leetcode-cn.com/problems/maximal-square/
 * 221. 最大正方形 | medium
 * 
 * f(i, j) 表示当前节点可往左上角扩散的正方形边长
 * f(i, j) = min{ f(i-1, j - 1), f(i, j -1), f(i - 1, j)} + 1
 */

const maximalSquare = function(A) {
  if (!Array.isArray(A) || A.length < 1 ||
      !Array.isArray(A[0]) || A[0].length < 1) return 0

  const m = A.length, n = A[0].length
  const dp = Array(m + 1).fill(0)
    .map(_ => Array(n + 1).fill(0))
  let max = 0
  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      if (A[i - 1][j - 1] != 0) {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1
        max = Math.max(dp[i][j], max)
      }
    }
  }
  return max * max
}

// ---- test case ----
const m1 = [
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
console.log(maximalSquare(m1))
const m2 = [
  ["0","1"],
  ["1","0"]
]
console.log(maximalSquare(m2))
const m3 = [["0"]]
console.log(maximalSquare(m3))
