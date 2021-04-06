/**
 * https://leetcode-cn.com/problems/triangle/
 * 120. 三角形最小路径和 | medium
 * f(i, j) = min(f(i+1, j), f(i+1, j+1)) + A[i, j]
 */

// O(mn) O(n)
function minimumTotal(A) {
  const m = A.length, n = A[m - 1].length
  const dp = A[m - 1].slice()
  for (let i = m - 2; i >= 0; --i) {
    for (let j = 0; j <= i; ++j) {
      dp[j] = A[i][j] + Math.min(dp[j], dp[j + 1])
    }
  }
  return dp[0]
}

// ～等边三角形
function minimumTotal(triangle) {
  const n = triangle.length
  const dp = triangle[n - 1].slice()
  for(let i = n - 2; i >= 0; --i) {
    for (let j = 0; j <= i; ++j) {
      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1])
    }
  }
  return dp[0]
}

// ---- test case ----
console.log(minimumTotal([
  [      2      ],
  [    3,  4    ],
  [  6,  5,  7  ],
  [4,  1,  8,  3]
]))

console.log(minimumTotal([
  [-10]
]))
