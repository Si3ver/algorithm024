/**
 * https://leetcode-cn.com/problems/unique-paths-ii/
 * 63. 不同路径 II | medium
 * 
 * dp[i][j] = dp[i + 1][j] + dp[i][j + 1]
 * 
 */

// 障碍物处 dp[j] = 0
const uniquePathsWithObstacles = function(A) {
  if (!Array.isArray(A) || A.length < 1 ||
      !Array.isArray(A[0]) || A[0].length < 1) return 0

  const m = A.length
  const n = A[0].length
  const lastObsIdx = A[m - 1].lastIndexOf(1)
  const dp = Array(lastObsIdx + 1).fill(0)
     .concat(Array(n - lastObsIdx - 1).fill(1))  // 初始化最下行（最后一个障碍物前全是零，后面是1）

  for (let i = m - 2; i >= 0; --i) {
    for (let j = n - 1; j >= 0; --j) {
      if (A[i][j] === 1) {  // 障碍物
        dp[j] = 0
      } else if (j === n - 1) { // 最右列（如果该列下面有障碍物，则为零）
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
