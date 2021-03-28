/**
 * https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/
 * 718. 最长重复子数组 | easy
 * 
 * dp
 * if (A[i] === B[j]) {
 *   f(i, j) = f(i-1, j-1) + 1
 * } else {
 *   f(i, j) = 0
 * }
 */

function findLength(A, B) {
  if (A.length < 1 || B.length < 1) return 0
  const m = A.length, n = B.length
  const dp =  Array(m).fill(0).map(
                _ => Array(n).fill(0)
              )
  let max = 0

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (A[i] === B[j]) {
        if (i === 0 || j === 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] = dp[i - 1][j - 1] + 1
        }
        max = Math.max(max, dp[i][j])
      }
    }
  }
  // console.log(dp)
  return max
}

// ---- test case ----
console.log(findLength([1,2,3,2,1], [3,2,1,4,7]))
