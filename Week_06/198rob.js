/**
 * https://leetcode-cn.com/problems/house-robber/
 * 198. 打家劫舍 | medium
 * 
 * f(i) = max(f(i-1), f(i-2) + A[i])
 */

const rob1 = function(A) {
  if (!Array.isArray(A) || A.length < 1) return 0
  if (A.length < 3) return Math.max(...A)
  const n = A.length, dp = new Array(n).fill(0)
  dp[0] = A[0], dp[1] = Math.max(A[0], A[1])
  for (let i = 2; i < n; ++i) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + A[i])
  }
  return dp[n - 1]
}

// 优化空间复杂度为 O(1)
const rob = function(A) {
  if (!Array.isArray(A) || A.length < 1) return 0
  let pre = 0, now = 0
  for (const a of A) {
    ;[pre, now] = [now, Math.max(pre + a, now)]
  }
  return now
}

// ---- test case ----
console.log(rob1([1,2,3,1]))
console.log(rob1([2,7,9,3,1]))
console.log(rob([1,2,3,1]))
console.log(rob([2,7,9,3,1]))
