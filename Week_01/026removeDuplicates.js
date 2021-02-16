/**
 * 3. 删除排序数组中的重复项（Facebook、字节跳动、微软在半年内面试中考过）
 * easy | leetcode-026 | array
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * 思路：利用数组是有序的特性，重复元素必相邻。遍历一轮，用cnt记录重复项数量，用第i个元素覆盖i-cnt个元素
 */
var removeDuplicates = function (nums) {
  var cnt = 0;
  for (var i = 1; i < nums.length; ++i) {
    if (nums[i] === nums[i - 1]) {
      cnt++
    } else {
      nums[i - cnt] = nums[i]
    }
  }
  return nums.length - cnt
};
