/*
 * leetcode-283 |
 * https://leetcode-cn.com/problems/move-zeroes/
 * 思路： 用一个标记记录非0的位置
 */

var moveZeroes = function (nums) {
  var swap = function (nums, i, j) {
    var tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
  }

  for (var i = 0, j = 0; i < nums.length; ++i) {
    if (nums[i] !== 0) {
      swap(nums, i, j++)
    }
  }
  return nums
};
