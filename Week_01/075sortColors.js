/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * medium
 * https://leetcode-cn.com/problems/sort-colors/
 * 思路：双指针夹逼，维护l指针左边全是0，r指针右边全是2
 */

const sortColors = function(nums) {
  if (Object.prototype.toString.call(nums) !== '[object Array]') return

  const swap = (nums, l, r) => {
    if (l !== r) {
      const tmp = nums[l]
      nums[l] = nums[r]
      nums[r] = tmp
    }
  }

  for (let i = 0, l = 0, r = nums.length - 1; i < nums.length; ++i) {
    while(i < r && nums[i] === 2) swap(nums, i, r--)
    while(i > l && nums[i] === 0) swap(nums, i, l++)
  }
}
