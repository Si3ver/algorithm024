/**
 * https://leetcode-cn.com/problems/jump-game/
 * 
 * 55. 跳跃游戏
 * 
 * 思路： 从后往前贪心，依次判断第i个元素是否能到标记节点，能则记录更新 endReachable
 */

const canJump = function(nums) {
  if (!Array.isArray(nums)) return false
  let endReachable = nums.length - 1
  for (let i = nums.length - 2; i >= 0; --i) {
    if (nums[i] + i >= endReachable) endReachable = i
  }
  return endReachable === 0
}

// ---- test case ----
console.log(canJump([]))
console.log(canJump([0]))
