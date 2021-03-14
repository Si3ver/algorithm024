/**
 * https://leetcode-cn.com/problems/maximum-subarray/
 * 53. 最大子序和 | easy
 * 
 * a. 分治（子问题） maxSum(i) = max(maxSum(i-1), 0) + A[i]
 * b. 状态数组定义 f[i]
 * c. DP方程 f[i] = max(f(i-1), 0) + A[i]
 */

// dp 空间可以压缩到单个变量
// O(n) O(1)
const maxSubArray = function(A) {
  if (!Array.isArray(A) || A.length < 1) return
  let max = dp = A[0]
  for (let i = 1; i < A.length; ++i) {
    dp = Math.max(0, dp) + A[i]
    max = Math.max(max, dp)
  }
  return max
}

// ---- test case ----
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([1]))
console.log(maxSubArray([0]))
console.log(maxSubArray([-1000]))
