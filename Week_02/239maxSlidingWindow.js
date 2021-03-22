/**
 * https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/
 * https://leetcode-cn.com/problems/sliding-window-maximum/
 * 239. 滑动窗口最大值
 * 
 * 用 window 记录窗口下标值
 * 
 */

const maxSlidingWindow = function (nums, k) {
  if (!Array.isArray(nums) || nums.length < 1 || k < 1) return []
  const res = [], win = []
  for (let i = 0; i < nums.length; ++i) {
    if (i >= k && i >= k + win[0]) {  // window size
      win.shift()
    }
    while (nums[i] >= nums[win[win.length - 1]]) { // override left elements
      win.pop()
    }
    win.push(i)
    if (i >= k - 1) {
      res.push(nums[win[0]])
    }
  }
  return res
}


// ---- test case ----
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))
console.log(maxSlidingWindow([1], 1))
console.log(maxSlidingWindow([1,-1], 1))
console.log(maxSlidingWindow([9,11], 2))
console.log(maxSlidingWindow([4,-2], 2))
console.log(maxSlidingWindow([1,3,1,2,0,5], 3))
