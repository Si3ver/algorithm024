/**
 * https://leetcode.cn/problems/longest-consecutive-sequence
 * 128. 最长连续序列
 *
 * 【map】
 *
 */
// /**
//  * @param {number[]} nums
//  * @return {number}
//  * 思路一：排序后，检查连续性 O(nlogn)
//  */
// var longestConsecutive = function(nums) {
//   if (!Array.isArray(nums) || nums.length < 1) return 0;

//   nums.sort((x, y) => x - y);

//   let count = 1, max = 1;
//   for (let i = 1; i < nums.length; ++i) {
//     if (nums[i] === nums[i - 1]) {
//       continue;
//     } else if (nums[i] === nums[i - 1] + 1) {
//       count++;
//       max = Math.max(max, count);
//     } else {
//       count = 1;
//     }
//   }
//   return max;
// };


/**
 * @param {number[]} nums
 * @return {number}
 * 思路二：set 去重，遍历set，判断是起点则往后找， O(n)
 */
var longestConsecutive = function(nums) {
  if (!Array.isArray(nums) || nums.length < 1) return 0;

  const set = new Set(nums);
  let maxCount = 0;
  for (const num of set) {
      if (!set.has(num - 1)) {
          let currentNum = num;
          let count = 1;
          while (set.has(currentNum + 1)) {
              currentNum += 1;
              count += 1;
          }
          maxCount = Math.max(maxCount, count);
      }
  }
  return maxCount;
};

// ---- test case ----
console.log(longestConsecutive([100,4,200,1,3,2])) // 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])) // 9
console.log(longestConsecutive([1, 2, 0, 1])) // 3
