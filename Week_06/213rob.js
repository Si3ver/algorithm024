/**
 * https://leetcode-cn.com/problems/house-robber-ii/
 * 213. 打家劫舍 II | medium
 * 
 * 环形～
 * 
 * 1. 不偷第一个
 * 2. 偷第一个 -> 不能偷最后一个
 * 3. 取max
 */

// O(n)
const rob = function(A) {
  if (!Array.isArray(A) || A.length < 1) return 0
  if (A.length < 4) return Math.max(...A)
  
  const myRob = (A) => {
    const n = A.length
    const dp = new Array(n).fill(0)
    dp[0] = A[0]
    dp[1] = Math.max(A[0], A[1])
    for (let i = 2; i < n; ++i) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + A[i])
    }
    return dp[n - 1]
  }

  return Math.max(myRob(A.slice(0, A.length - 1)), myRob(A.slice(1)))
}

// ---- test case ----
console.log(rob([2,3,2]))
console.log(rob([1,2,3,1]))
console.log(rob([0]))
