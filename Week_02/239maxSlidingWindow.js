/**
 * https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/
 * https://leetcode-cn.com/problems/sliding-window-maximum/
 * 239. 滑动窗口最大值
 *
 * 用 window 记录窗口下标值
 *
 */

// 思路，win 必须存下标，每次遍历，从右往左清理掉又老又小的数
var maxSlidingWindow = function(nums, k) {
    const res = [], win = [];
    for (let i = 0; i < nums.length; ++i) {
        if (i > 0 && i - win[0] >= k) {
            win.shift();
        }
        while (win.length > 0 && nums[win[win.length - 1]] <= nums[i]) {
            win.pop();
        }
        win.push(i);
        if (i >= k - 1) {
            res.push(nums[win[0]]);
        }
    }
    return res;
};

// ---- test case ----
// console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))
// console.log(maxSlidingWindow([1], 1))
// console.log(maxSlidingWindow([1,-1], 1))
// console.log(maxSlidingWindow([9,11], 2))
// console.log(maxSlidingWindow([4,-2], 2))
console.log(maxSlidingWindow([1,3,1,2,0,5], 3))
