/*
 * https://leetcode-cn.com/problems/move-zeroes/
 * 思路： 用一个标记记录非0的位置
 */

const moveZeroes = function(nums) {
  if (Object.prototype.toString.call(nums) !== '[object Array]' || nums.length <= 0) return nums

  const swap = function(nums, i, j) {
    if (i !== j) {
      const tmp = nums[i]
      nums[i] = nums[j]
      nums[j] = tmp
    }
  }

  for(let i = 0, j = 0; i < nums.length; ++i) {
    if (nums[i] !== 0) {
      swap(nums, i, j++)
    }
  }
}
