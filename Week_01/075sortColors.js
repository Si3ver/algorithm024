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
  const swap = function(arr, i, j) {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
  let l = 0, r = nums.length - 1, i = 0
  while(i <= r) {
    if (nums[i] === 0) {
      swap(nums, i++, l++)
    } else if (nums[i] === 2) {
      swap(nums, i, r--)
    } else {
      ++i
    }
  }
}
