/**
 * 4. 旋转数组（微软、亚马逊、PayPal 在半年内面试中考过）
 * medium | leetcode-189 | array
 * https://leetcode-cn.com/problems/rotate-array/
 * 思路：反转三次，时间复杂度O(n), 空间复杂度O(1)
 */
// var rotate = function(nums, k) {
//     var gap = nums.length - k
//     nums = nums.slice(gap).concat(nums.slice(0, gap))
//     return nums
// };
// O(1)空间复杂度解法： 反转3次
var rotate = function(nums, k) {
  var reverse = function(nums, start, end) {
      while(start < end) {
          var tmp = nums[start]
          nums[start++] = nums[end]
          nums[end--] = tmp
      }
  }
  k %= nums.length
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
};
