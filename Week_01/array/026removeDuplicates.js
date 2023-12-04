/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * 删除排序数组中的重复项（Facebook、字节跳动、微软在半年内面试中考过）
 * 
 * 思路：利用数组是有序的特性，重复元素必相邻。遍历一轮，用cnt记录重复项数量，用第i个元素覆盖i-cnt个元素
 * 
 */

const removeDuplicates = function(nums) {
  if (Object.prototype.toString.call(nums) !== '[object Array]' || nums.length < 1) return 0
  let cnt = 0
  for(let i = 1; i < nums.length; ++i) {
    if (nums[i] === nums[i - 1]) {
      ++cnt
    } else {
      nums[i - cnt] = nums[i]
    }
  }
  return nums.length - cnt
}
