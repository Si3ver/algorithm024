/**
 * https://leetcode-cn.com/problems/minimum-size-subarray-sum/
 * 209. 长度最小的子数组 ｜ medium
 * 
 * 双指针
 */

const minSubArrayLen = function(target, nums) {
  let distance = Infinity
  let left = 0, sum = 0
  for (let right = 0; right < nums.length; ++right) {
    sum += nums[right]
    while (sum >= target) { // 缩短
      distance = Math.min(distance, right - left + 1)
      sum -= nums[left]
      ++left
    }
  }
  return distance === Infinity ? 0 : distance
}

// ---- test case ----
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))    // 2
console.log(minSubArrayLen(4, [1, 4, 4]))             // 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])) // 0
