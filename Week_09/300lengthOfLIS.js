/**
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/
 * 300. 最长递增子序列
 * 
 */

// 解法一：O(n^2)
// f(i) 要遍历前面小于 dp
function lengthOfLIS(arr) {
  if(arr.length < 1) return 0
  const dp = []
  for (let i = 0; i < arr.length; ++i) {
    dp.push(1)
    for (let j = 0; j < i; ++j) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp)
}

// ---- test case ----
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])) // 4
console.log(lengthOfLIS([0,1,0,3,2,3])) // 4
console.log(lengthOfLIS([7,7,7,7,7,7,7])) // 1
