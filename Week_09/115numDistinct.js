/**
 * https://leetcode-cn.com/problems/distinct-subsequences/
 * 115. 不同的子序列 | hard
 * 
 * dp
 * if s[i] === s[j]
 *    f(i, j) = f(i-1, j-1) + f(i, j-1)
 * else
 *    f(i, j) = f(i, j-1)
 */

// O(mn) O(n)
function numDistinct (s, t) {
  const m = s.length, n = t.length
  if (m < n) return 0
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1
  for(let i = 0; i < m; ++i) {
    for(let j = n; j > 0; --j) {
      if(s[i] === t[j - 1]) {
        dp[j] += dp[j - 1]
      }
    }
  }
  return dp[n]
}

// ---- test case ----
console.log(numDistinct('rabbbit', 'rabbit')) // 3
console.log(numDistinct('babgbag', 'bag'))    // 5
