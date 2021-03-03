/**
 * https://leetcode-cn.com/problems/unique-paths-ii/
 * 63. 不同路径 II | medium
 * 
 * dp[i][j] = dp[i + 1][j] + dp[i][j + 1]
 * 
 */

// 障碍物处 dp[x] = 0
const uniquePathsWithObstacles = function(obstacleGrid) {
  if (!Array.isArray(obstacleGrid) || 
      obstacleGrid.length < 1 ||
      !Array.isArray(obstacleGrid[0]) ||
      obstacleGrid[0].length < 1) return 0

  const m = obstacleGrid.length,
        n = obstacleGrid[0].length,
        dp = new Array(n).fill(-1)
  
  for(let i = m - 1; i >= 0; --i) {
    for (let j = n - 1; j >= 0; --j) {
      if (obstacleGrid[i][j] === 1) {
        dp[j] = 0
      } else if (i === m - 1 || j === n - 1) {
        if (dp[j] === 0 || (j + 1 < n && dp[j + 1] === 0)) {  // 障碍节点
          dp[j] = 0
        } else {
          dp[j] = 1
        }
      } else {
        dp[j] = dp[j] + dp[j + 1]
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
