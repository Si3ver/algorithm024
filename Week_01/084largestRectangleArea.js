/**
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
 * 84. 柱状图中最大的矩形 | hard
 */

// stack O(n)
function largestRectangleArea(A) {
  let maxArea = 0
  const stack = []
  A = [0, ...A, 0]
  for (let i = 0; i < A.length; ++i) {
    while (stack.length > 1 && A[stack[stack.length - 1]] > A[i]) {
      const j = stack.pop()
      maxArea = Math.max((i - stack[stack.length - 1] - 1) * A[j], maxArea)
    }
    stack.push(i)
  }
  return maxArea
}

// ---- test case ----
console.log(largestRectangleArea([2,1,5,6,2,3]))
