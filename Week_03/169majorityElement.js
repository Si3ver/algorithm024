/**
 * https://leetcode-cn.com/problems/majority-element/
 * 169. 多数元素 (easy)
 * 摩尔投票法 O(n) 【Majority Voting Algorithm】
 * 
 * 难度升级 -> [./229majorityElement.js]
 */

const majorityElement = function(nums) {
  if (Object.prototype.toString.call(nums) !== '[object Array]') return null

  let res = null, cnt = 0
  for(let i = 0; i < nums.length; ++i) {
    // 写法一
    // if (cnt > 0 && nums[i] !== res) {
    //   --cnt
    // } else {
    //   res = nums[i]
    //   ++cnt
    // }
    // 写法二：更好理解一些
    if (nums[i] === res) {
      ++cnt
    } else {
      --cnt
      if (cnt < 0) {
        res = nums[i]
        cnt = 1
      }
    }
  }
  return res
}

// ---- test case ----
console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([3, 2, 2]))
