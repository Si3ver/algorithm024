/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 思路：保证insertPos指针之前的元素是全非零
 */
var moveZeroes = function (nums) {
  var insertPos = 0
  for (var i = 0; i < nums.length; ++i) {
    if (nums[i] !== 0) {
      nums[insertPos++] = nums[i]
    }
  }
  while (insertPos < nums.length) {
    nums[insertPos++] = 0
  }
};
