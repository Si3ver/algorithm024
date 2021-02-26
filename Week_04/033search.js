/**
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * 
 * 33. 搜索旋转排序数组
 * 
 * binarySearch
 */
const search = function(nums, target) {
  let l = 0, r = nums.length - 1
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] === target) return mid
    if (nums[l] <= nums[mid]) { // 逆序在右边
      if (nums[l] <= target && target < nums[mid]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {  // 逆序在左边
      if (nums[mid] < target && target <= nums[r]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }
  return -1
}


// ---- test case ----
console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
console.log(search([4, 5, 6, 7, 0, 1, 2], 3))
console.log(search([1], 0))
