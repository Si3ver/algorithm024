/**
 * https://leetcode.cn/problems/longest-consecutive-sequence
 * 每日温度
 *
 * 单调递减栈：遍历整个数组，如果栈不空，且当前数字大于栈顶元素，那么如果直接入栈的话就不是 递减栈 ，所以需要取出栈顶元素，由于当前数字大于栈顶元素的数字，而且一定是第一个大于栈顶元素的数，直接求出下标差就是二者的距离。
 *
 * 思路：
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(A) {
    const stack = [], res = Array(A.length).fill(0);
    for (let i = 0; i < A.length; ++i) {
        while(stack.length && A[i] > A[stack[stack.length - 1]]) {
            const topIndex = stack.pop();
            res[topIndex] = i - topIndex;
        }
        stack.push(i);
    }
    return res;
};

// ---- test ----
