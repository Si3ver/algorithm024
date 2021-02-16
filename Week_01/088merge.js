/**
 * 6. 合并两个有序数组（Facebook 在半年内面试常考）
 * easy | leetcode-088 | array
 * https://leetcode-cn.com/problems/merge-sorted-array/
 */
var merge = function(nums1, m, nums2, n) {
  var i = m - 1, j = n - 1, k = m + n - 1
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--]
    } else {
      nums1[k--] = nums2[j--]
    }
  }
  while(j >= 0) {
    nums1[k--] = nums2[j--]
  }
  return nums1
};
