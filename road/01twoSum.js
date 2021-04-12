/**
 * https://leetcode-cn.com/problems/two-sum/
 * 1. 两数之和 | easy
 */

// 解法：哈希表 O(n)
function twoSum(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i]
    if (map.has(num)) {
      return [map.get(num), i]
    } else {
      map.set(target - num, i)
    }
  }
  return []
}

// ---- test case ----
console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
