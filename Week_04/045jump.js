/**
 * https://leetcode-cn.com/problems/jump-game-ii/
 * 
 * 45. 跳跃游戏 II
 * hard
 */

/*
    [2, 3, 1, 1, 4]
  l 0 2
  r 2 4
*/

const jump = function(nums) {
  if (!Array.isArray(nums) || nums.length <= 1) return 0
  let l = 0, r = nums[0], times = 1
  while (r < nums.length - 1) {
    ++times
    let next = -Infinity
    for(let i = l; i <= r; ++i) {
      next = Math.max(next, nums[i] + i)
    }
    if (next <= r) return -1 // 没增加最远距离，则无法更远
    l = r
    r = next
  }
  return times
}

// ---- test case ----
console.log(jump([]))
console.log(jump([2,3,1,1,4]))
console.log(jump([2,1,1,1,1,4]))
console.log(jump([2,1,1,0,1,4]))
