/**
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
 * 
 * 153. 寻找旋转排序数组中的最小值
 * binarySearch
 */

const findMin = function(nums) {
  if (Object.prototype.toString.call(nums) !== '[object Array]' || nums.length < 1) return null

  let l = 0, r = nums.length - 1
  while (l < r) {
    if (nums[l] < nums[r]) return nums[l]
    const mid = l + ((r - l) >> 1)
    if (nums[mid] >= nums[l]) {
      l = mid + 1
    } else {
      r = mid
    }
  }
  
  return nums[l]
}

// ---- test case ----
console.log(findMin([3, 4, 5, 1, 2]))
console.log(findMin([4, 5, 6, 7, 0, 1, 2]))
console.log(findMin([1]))
