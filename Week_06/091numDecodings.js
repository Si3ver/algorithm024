/**
 * https://leetcode-cn.com/problems/decode-ways/
 * 91. 解码方法 | medium
 * 
 */

// O(n) 向前回头看一步 & 回头看两步
const numDecodings = function(s) {
  if (typeof s !== 'string' || !/^\d*$/.test(s)) return 0
  const n = s.length, dp = Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = s[0] === '0' ? 0 : 1
  for (let i = 2; i <= n; ++i) {
    const first = Number(s[i - 1])
    const second = Number(s[i - 2] + s[i - 1])
    if (first >= 1 && first <= 9) {
      dp[i] += dp[i - 1]
    }
    if (second >= 10 && second <= 26) {
      dp[i] += dp[i - 2]
    }
  }
  return dp[n]
}

// ---- test case ----
console.log(numDecodings('12'))
console.log(numDecodings('226'))
console.log(numDecodings('0'))
console.log(numDecodings('06'))
console.log(numDecodings('11111'))
console.log(numDecodings('10011'))
