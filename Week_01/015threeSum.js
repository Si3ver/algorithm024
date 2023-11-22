/**
 * https://leetcode-cn.com/problems/3sum/
 * 015 三数之和 medium
 * 
 * 思路：
 * 1. 暴力，三重循环（O(n^3)超时）
 * 2. hash，两重暴力 + hash
 * 3. 夹逼，因为不需要给下标，先排序后夹逼
 */

// 解法2 O(n^2)
// trick: 用set 和 JSON.stringify 去重
var threeSum2 = function(nums) {
  if (!Array.isArray(nums) || nums.length < 3) return []
  nums.sort((x, y) => x - y)
  const resSet = new Set(), res = []
  for (let k = 0; k < nums.length - 2 && nums[k] <= 0; ++k) {
      const target = -nums[k], map = new Map()
      for (let i = k + 1; i < nums.length; ++i) {
          if (!map.has(nums[i])) {
              map.set(target - nums[i], i)
          } else {
              const resItem = [k, map.get(nums[i]), i].map(x => nums[x])
              const strItem = resItem.join(',')
              if (!resSet.has(strItem)) {
                  resSet.add(strItem)
                  res.push(resItem)
              }
          }
      }
  }
  return res
};

console.log('solution 1: ', threeSum2([-1, 0, 1, 2, -1, -4]))

/**
 * 解法3 O(n^2)
 * 思路： 
 * 1. 先排序
 * 2. 外层循环k，左右双指针夹逼。挪动去重
 */

function threeSum(nums) {
  if (!Array.isArray(nums) || nums.length < 3) return []
  nums.sort((x, y) => x - y)
  const res = []
  for (let k = 0; k < nums.length - 2 && nums[k] <= 0; ++k) {
      if (k > 0 && nums[k] === nums[k - 1]) continue
      for (let l = k + 1, r = nums.length - 1; l < r; ) {
          const sum = nums[k] + nums[l] + nums[r]
          if (sum === 0) {
              res.push([k, l, r].map(x => nums[x]))
              while(l < r && nums[l] === nums[++l]) {}
              while(l < r && nums[r] === nums[--r]) {}
          } else if (sum < 0) {
              while(l < r && nums[l] === nums[++l]) {}
          } else {
              while(l < r && nums[r] === nums[--r]) {}
          }
      }

  }
  return res
}

console.log('solution 2: ', threeSum([-1, 0, 1, 2, -1]))
console.log('solution 2: ', threeSum([-2, 0, 0, 2, 2]))
