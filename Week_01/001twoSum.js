/**
 * https://leetcode-cn.com/problems/two-sum/
 * 两数之和（亚马逊、字节跳动、谷歌、Facebook、苹果、微软在半年内面试中高频常考）
 * 
 */

const twoSum = function(nums, target) {
  if (Object.prototype.toString.call(nums) !== '[object Array]' || nums.length < 2) return []
  const m = new Map()
  for(let i = 0; i < nums.length; ++i) {
    if (m.has(nums[i])) {
      return [m.get(nums[i]), i]
    } else {
      m.set(target - nums[i], i)
    }
  }
  return []
}
