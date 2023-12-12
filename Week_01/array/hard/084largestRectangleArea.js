/**
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
 * 84. 柱状图中最大的矩形 | hard
 *
 * 思路：单调栈存idx，直到遇到右边界才出栈
 */

// stack O(n)
var largestRectangleArea = function(heights) {
    let max = 0;
    const stack = [-1];
    const A = [...heights, 0];
    for (let i = 0; i < A.length; ++i) {
        while (stack.length > 1 && A[stack[stack.length - 1]] > A[i]) {
            const curIdx = stack.pop();
            const left = stack[stack.length - 1] + 1;
            const right = i - 1;
            const curArea = A[curIdx] * (right - left + 1);
            max = Math.max(max, curArea);
        }
        stack.push(i);
    }
    return max;
};

// ---- test case ----
console.log(largestRectangleArea([2,1,5,6,2,3]))
console.log(largestRectangleArea([2,4]))
