/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/
 * https://leetcode-cn.com/problems/sliding-window-maximum/
 * 思路1: 暴力求解
 */
var maxSlidingWindow = function(nums, k) {
  if (nums.length < 1 || k < 1) return []
  var res = [], start = 0;
  for(var start = 0; start <= nums.length - k; ++start) {
      var maxNum = nums[start]
      for(var i = start + 1; i <= start + k - 1; ++i) {
          maxNum = Math.max(maxNum, nums[i])
      }
      res.push(maxNum)
  }
  return res
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 思路2: 用 window 记录当前窗口，如果当前窗口左边有小值，pop掉
 */
var maxSlidingWindow = function(nums, k) {
  if (nums.length < 1 || k < 1) return []
  var res = [], window = []
  nums.forEach((item, idx) => {
      if (idx >= k + window[0]) { // 维护窗口
          window.shift()
      }
      while(window.length > 0 && item > nums[window[window.length - 1]]) { // pop掉“无出头之日”的小值
          window.pop()
      }
      window.push(idx) // 加入当前值
      if (idx >= k - 1) { // 有效窗口中最左边的值就是最大值
          res.push(nums[window[0]])
      }
  })
  return res
};
