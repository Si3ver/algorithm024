/**
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/
 * 300. 最长递增子序列
 */

/*
[解法一]    动态规划
[定义f(i)]  以 arr[i] 结尾的最长递增子序列长度，(arr[i]必选)
[状态方程]   f(i) = max(f(j) + 1) 
                  for (j at [0,i-1] && arr[j] < arr[i])
[复杂度]     O(n^2) O(n)
*/
function lengthOfLIS(arr) {
  const n = arr.length
  if (n < 2) return n
  const dp = Array(n).fill(1)
  for (let i = 1; i < n; ++i) {
    for (let j = 0; j < i; ++j) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp)
}


// 解法二：贪心 + 二分查找  O(nlogn) O(n)
function lengthOfLIS(nums) {
  const n = nums.length
  if (n < 2) return n

  const search = (dp, target, hi) => {
    let lo = 0
    while (lo <= hi) {
      let mid = lo + ((hi - lo) >> 1)
      if (target === dp[mid]) {
        return mid
      } else if (target < dp[mid]) {
        hi = mid - 1
      } else {
        lo = mid + 1
      }
    }
    return lo
  }

  const UPBOUND = Math.max(...nums) + 1 // 上界
  const dp = Array(n).fill(UPBOUND)
  for (let i = 0; i < n; i++) {
    let pos = search(dp, nums[i], i)  // 找到位置
    dp[pos] = nums[i]                 // 取而代之
    // console.log(dp)
  }
  for (let i = dp.length - 1; i >= 0; i--) {
    if (dp[i] !== UPBOUND) return i + 1
  }
  return 0
}

// ---- test case ----
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])) // 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])) // 4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])) // 1
