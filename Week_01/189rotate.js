/**
 * https://leetcode-cn.com/problems/rotate-array/
 * 4. 旋转数组（微软、亚马逊、PayPal 在半年内面试中考过）
 * medium | leetcode-189 | array
 * 思路：反转三次，时间复杂度O(n), 空间复杂度O(1)
 */

// O(1)空间复杂度解法： 反转3次
const rotate = function(nums, k) {
  if (Object.prototype.toString.call(nums) !== '[object Array]' || nums.length < 2) return

  const reverse = (nums, start, end) => {
    while(start < end) {
      const tmp = nums[start]
      nums[start++] = nums[end]
      nums[end--] = tmp
    }
  }

  k %= nums.length
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
}
