/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/submissions/
 * easy ｜ 350. 两个数组的交集 II ｜ hashmap
 */
var intersect = function(nums1, nums2) {
  if(nums1.length > nums2.length) {
      return intersect(nums2, nums1)
  }
  let cntMap = {}, res = []
  for(var i = 0; i < nums1.length; ++i) {
      if (cntMap[nums1[i]] === void(0)) {
          cntMap[nums1[i]] = 1
      } else {
          ++cntMap[nums1[i]]
      }
  }
  for(var i = 0; i < nums2.length; ++i) {
      if (cntMap[nums2[i]] > 0) {
          --cntMap[nums2[i]]
          res.push(nums2[i])
      }
  }
  return res
};
