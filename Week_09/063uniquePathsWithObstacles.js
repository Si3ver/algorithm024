/**
 * https://leetcode-cn.com/problems/unique-paths-ii/
 * 63. 不同路径 II
 */

/*
if 障碍物处:
  f(i, j) = 0
else
  f(i, j) = f(i+1, j) + f(i, j+1)
*/
function uniquePathsWithObstacles(A) {
  const m = A.length, n = A[0].length
  if (m < 1 || n < 1 || A[m-1][n-1] === 1) return 0
  const lastObsIdx = A[m - 1].lastIndexOf(1)
  const dp = Array(lastObsIdx + 1).fill(0)
    .concat(Array(n - lastObsIdx - 1).fill(1))
  for (let i = m - 2; i >= 0; --i) {
    for (let j = n - 1; j >= 0; --j) {
      if (A[i][j] === 1) { // 障碍物
        dp[j] = 0
      } else if (j === n - 1) { // 最右边一列
        dp[j] = dp[j] === 0 ? 0 : 1
      } else {
        dp[j] += dp[j + 1]
      }
    }
  }
  return dp[0]
}

// ---- test case ----
console.time('uniquePathsWithObstacles')
console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))
console.log(uniquePathsWithObstacles([[0,1],[0,0]]))
console.log(uniquePathsWithObstacles([[0,0],[0,1]]))
console.log(uniquePathsWithObstacles([[0,0],[1,1],[0,0]]))
console.timeEnd('uniquePathsWithObstacles')
