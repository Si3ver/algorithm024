/**
 * @param {number[][]} grid
 * @return {number}
 * F(i, j) = A(i, j) + min(F(i-1, j) + F(i, j-1))
 */

// 无副作用 O(mn) O(n)
const minPathSum1 = function(A) {
  if (!Array.isArray(A) || 
      A.length < 1 ||
      !Array.isArray(A[0]) ||
      A[0].length < 1) return -1

  const m = A.length, n = A[0].length
  const dp = new Array(n).fill(0)
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i === 0 && j === 0) {
        dp[j] = A[i][j]
      } else if (i === 0) {
        dp[j] = dp[j - 1] + A[i][j]
      } else if (j === 0) {
        dp[j] += A[i][j]
      } else {
        dp[j] =  Math.min(dp[j], dp[j - 1]) + A[i][j]
      }
    }
  }
  return dp[n - 1]
}

// 有副作用, 会修改入参矩阵
const minPathSum2 = function (A) {
  if (!Array.isArray(A) ||
      A.length < 1 || 
      !Array.isArray(A[0]) || 
      A[0].length < 1) return -1

  const m = A.length, n = A[0].length
  for(let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i === 0 && j === 0) {
        continue
      } else if (i === 0) {
        A[i][j] += A[i][j - 1]
      } else if (j === 0) {
        A[i][j] += A[i - 1][j]
      } else {
        A[i][j] += Math.min(A[i - 1][j], A[i][j - 1])
      }
    }
  }
  return A[m - 1][n - 1]
}
// ---- test case ----
console.time('minPathSum1')
console.log(minPathSum1([[1,3,1],[1,5,1],[4,2,1]]))
console.log(minPathSum1([[1,2,3],[4,5,6]]))
console.timeEnd('minPathSum1')
console.time('minPathSum2')
console.log(minPathSum2([[1,3,1],[1,5,1],[4,2,1]]))
console.log(minPathSum2([[1,2,3],[4,5,6]]))
console.timeEnd('minPathSum2')
