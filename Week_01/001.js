/**
 * 思路：类似去婚姻登记所找另一半，如果没找到匹配对象，就利用哈希表登记下；找到了就ok。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var hashMap = {}
  for(var i = 0; i < nums.length; ++i) {
      if (hashMap[nums[i]] === undefined) {
          hashMap[target - nums[i]] = i
      } else {
          return [hashMap[nums[i]], i]
      }
  }
  return []
};
