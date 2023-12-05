/*
 * https://leetcode-cn.com/problems/move-zeroes/
 * 思路： 用一个标记记录非0的位置
 */

const moveZeroes1 = function(nums) {
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

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 解法二：nums[pos++] = nums[i]
 */
const moveZeroes = function(nums) {
  if (!Array.isArray(nums) || nums.length < 1) return
  let insertPos = 0
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== 0) {
      nums[insertPos++] = nums[i]
    }
  }
  while (insertPos < nums.length) {
    nums[insertPos++] = 0
  }
}
// ---- test case ----
var nums = [0,1,0,3,12]
moveZeroes(nums)
console.log(nums)
