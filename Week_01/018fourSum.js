/**
 * https://leetcode-cn.com/problems/4sum/
 * 18. 四数之和 ｜ medium
 */

// O(n^3)
const fourSum = function (nums, target) {
  if (!Array.isArray(nums) || nums.length < 4) return []
  nums.sort((x, y) => x - y)
  const res = []
  for (let i = 0; i < nums.length - 3; ++i) {
    if (i > 0 && nums[i] === nums[i - 1]) continue  // unique
    for (let j = i + 1; j < nums.length - 2; ++j) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue //unique
      let l = j + 1, r = nums.length - 1
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r]
        if (sum < target) {
          while (l < r && nums[l] === nums[++l]) { }
        } else if (sum > target) {
          while (l < r && nums[r] === nums[--r]) { }
        } else {
          res.push([nums[i], nums[j], nums[l], nums[r]])
          while (l < r && nums[l] === nums[++l]) { }
          while (l < r && nums[r] === nums[--r]) { }
        }
      }
    }
  }
  return res
}


// test case
console.time('fourSum')
console.log(fourSum([], 0))
console.log(fourSum([1,0,-1,0,-2,2], 0))
console.log(fourSum([1,0,-1,0,-2,2], 2))
console.log(fourSum([1,-2,-5,-4,-3,3,3,5], -11))
console.timeEnd('fourSum')
