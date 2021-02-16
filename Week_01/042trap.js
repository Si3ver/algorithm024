/**
 * 11. 接雨水（亚马逊、字节跳动、高盛集团、Facebook 在半年内面试常考）
 * hard ｜ leetcode-042 | array
 * https://leetcode.com/problems/trapping-rain-water/
 * 思路： maxLeft、maxRight 记录左右最高柱子
 */
var trap = function (A) {
  var left = 0, right = A.length - 1
  var res = 0, maxLeft = 0, maxRight = 0
  while (left < right) {
    if (A[left] <= A[right]) {
      if (A[left] >= maxLeft) {
        maxLeft = A[left]
      } else {
        res += maxLeft - A[left]
      }
      ++left
    } else {
      if (A[right] >= maxRight) {
        maxRight = A[right]
      } else {
        res += maxRight - A[right]
      }
      --right
    }
  }
  return res
};
