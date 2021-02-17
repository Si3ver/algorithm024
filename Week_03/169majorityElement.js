/**
 * https://leetcode-cn.com/problems/majority-element/
 * 思路： 计数法
 * 
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (Object.prototype.toString.call(nums) !== '[object Array]' || nums.length < 1) return 0
  let res = nums[0], cnt = 1
  for(let i = 1; i < nums.length; ++i) {
    if (nums[i] === res) {
      ++cnt
    } else {
      --cnt
      if (cnt < 0) {
        res = nums[i]
        cnt = 1
      }
    }
  }
  return res
};
