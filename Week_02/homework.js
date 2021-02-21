/**
 * 10. 丑数（字节跳动在半年内面试中考过）
 * https://leetcode-cn.com/problems/ugly-number/
 * easy | leetcode-263
 * 思路： 两重循环，一直判断是否整除2、3、5无余数。最后判断是否得到1
 */
var isUgly = function(num) {
  for(var p of [2, 3, 5]) {
    while(num && num % p === 0) {
      num /= p
    }
  }
  return num === 1
};

/**
 * 11. 前 K 个高频元素（亚马逊在半年内面试中常考）
 * https://leetcode-cn.com/problems/top-k-frequent-elements/
 * medium ｜ leetcode-347
 * 思路1:
 * Step1: map统计 O(n)
 * Step2: 放入数组
 * Step3: 按照 v 排序 O(nlogn)
 * Step4: 取出前k个
 */
var topKFrequent = function(nums, k) {
  var map = {}
  nums.forEach(num => {
    if (map[num] === void(0)) {
      map[num] = 1
    } else {
      ++map[num]
    }
  })
  var arr = []
  for(var key in map) {
    arr.push([key, map[key]])
  }
  arr.sort(function(a, b) {
    return b[1] - a[1]
  })
  var res = []
  for(var i = 0; i < k; ++i) {
    res.push(arr[i][0])
  }
  return res
};
