/**
 * https://leetcode-cn.com/problems/distinct-subsequences/
 * 115. 不同的子序列 | hard
 * 
 * dp
 * if s[i] === t[j]
 *    f(i, j) = f(i-1, j) + f(i-1, j-1) // s去掉末尾 + s、t都去掉末尾
 * else
 *    f(i, j) = f(i-1, j)               // s去掉末尾
 * 
 *    '  b  a  g
 * b  1  1  0  0
 * a  1  1  1  0
 * b  1  2  1  0
 * g  1  2  1  1
 * b  1  3  1  1
 * a  1  3  4  1
 * g  1  3  4  5
 * 
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
    console.log(i, dp)
  }
  return dp[n]
}

// ---- test case ----
console.log(numDistinct('rabbbit', 'rabbit')) // 3
console.log(numDistinct('babgbag', 'bag'))    // 5
