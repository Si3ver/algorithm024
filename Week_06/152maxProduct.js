/**
 * https://leetcode-cn.com/problems/maximum-product-subarray/
 * 152. 乘积最大子数组 | medium
 * 
 */

// 保持最大值和最小值
const maxProduct = function(A) {
  if (!Array.isArray(A) || A.length < 1) return
  const n = A.length
  let min = max = res = A[0]
  for (let i = 1; i < n; ++i) {
    if (A[i] < 0) [min, max] = [max, min] // 交换
    max = Math.max(max * A[i], A[i])
    min = Math.min(min * A[i], A[i])
    res = Math.max(res, max)
  }
  return res
}

// ---- test case ----
console.log(maxProduct([2 , 3, -2, 4]))
console.log(maxProduct([2 , 3, -2, 4, -4]))
console.log(maxProduct([-2, 0, -1]))
