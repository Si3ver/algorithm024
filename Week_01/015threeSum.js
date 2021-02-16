/**
 * 015 三数之和 medium
 * https://leetcode.com/problems/3sum/
 * 思路：
 * 1. 暴力，三重循环（O(n^3)超时）
 * 2. hash，两重暴力 + hash
 * 3. 夹逼，因为不需要给下标，先排序后夹逼
 */
// 解法2 O(n^2)
// trick: 用set 和 JSON.stringify 去重
let threeSum2 = function (nums) {
  if (Object.prototype.toString.apply(nums) !== '[object Array]' || nums.length < 3) return []
  nums.sort((a, b) => a - b)
  let resSet = new Set(),
    res = []
  for (let i = 0; i < nums.length - 2; ++i) {
    let target = -nums[i],
      hashmap = {}
    for (let j = i + 1; j < nums.length; ++j) {
      if (hashmap[nums[j]] === void(0)) {
        hashmap[target - nums[j]] = j
      } else {
        let curItem = [-target, nums[hashmap[nums[j]]], nums[j]]
        let sCurItem = JSON.stringify(curItem)
        if (!resSet.has(sCurItem)) {
          resSet.add(sCurItem)
          res.push(curItem)
        }
      }
    }
  }
  return res
};

console.log('solution 1: ', threeSum2([-1, 0, 1, 2, -1, -4]))

// 解法3 O(n^2)
const threeSum = function (nums) {
  if (Object.prototype.toString.apply(nums) !== '[object Array]' || nums.length < 3) return []
  nums.sort((a, b) => a - b)
  const res = []
  for (let k = 0; k < nums.length - 2; ++k) {
    if (nums[k] > 0) break
    if (k > 0 && nums[k] === nums[k - 1]) continue
    let i = k + 1,
      j = nums.length - 1
    while (i < j) {
      const sum = nums[k] + nums[i] + nums[j]
      if (sum < 0) {
        while (i < j && nums[i] === nums[++i]) {}
      } else if (sum > 0) {
        while (i < j && nums[j] === nums[--j]) {}
      } else {
        res.push([nums[k], nums[i], nums[j]])
        while (i < j && nums[i] === nums[++i]) {} // 指针移动顺便去重
        while (i < j && nums[j] === nums[--j]) {} // 指针移动顺便去重
      }
    }
  }
  return res
}

console.log('solution 2: ', threeSum([-1, 0, 1, 2, -1, -4]))
console.log('solution 2: ', threeSum([-2, 0, 0, 2, 2]))
