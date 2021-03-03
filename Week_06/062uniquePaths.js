/**
 * https://leetcode-cn.com/problems/unique-paths/
 * 62. 不同路径 | medium
 * 
 * dp
 * a. 重复性 problem(i, j) = problem(i + 1, j) + problem(i, j + 1)
 * b. 定义状态数组
 * c. DP方程
 */

// dp1: O(mn) O(mn)
const uniquePaths = function(m, n) {
  const dp = new Array(m).fill(new Array(n).fill(1))
  for (let i = m - 2; i >= 0; --i) {
    for (let j = n - 2; j >= 0; --j) {
      dp[i][j] = dp[i + 1][j] + dp[i][j + 1]
    }
  }
  return dp[0][0]
}

// dp2 优化空间复杂度
// O(mn) O(n)
const uniquePaths2 = function(m, n) {
  const dp = new Array(n).fill(1)
  for (let i = m - 2; i >= 0; --i) {
    for (let j = n - 2; j >= 0; --j) {
      dp[j] = dp[j] + dp[j + 1]
    }
  }
  return dp[0]
}

// ---- test case ----
console.time('uniquePaths')
console.log(uniquePaths(3,7))
console.log(uniquePaths(3,2))
console.log(uniquePaths(7,3))
console.log(uniquePaths(3,3))
console.timeEnd('uniquePaths')

console.time('uniquePaths2')
console.log(uniquePaths2(3,7))
console.log(uniquePaths2(3,2))
console.log(uniquePaths2(7,3))
console.log(uniquePaths2(3,3))
console.timeEnd('uniquePaths2')
