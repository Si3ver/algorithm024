/**
 * https://leetcode-cn.com/problems/decode-ways/
 * 91. 解码方法
 */

/*
转移方程
if 1 <= A[i-1] <= 9
  f(i) += f(i-1)
if 10 <= A[i-2..i-1] <= 26
  f(i) += f(i-2)

复杂度 O(n)
*/
function numDecodings(s) {
  const n = s.length
  const dp = Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = s[0] === '0' ? 0 : 1
  for (let i = 2; i <= n; ++i) {
    const curr = +s[i - 1]
    const prev = +s.substr(i - 2, 2)
    if (curr >= 1  && curr <= 9 ) dp[i] += dp[i - 1]  // 第一种方式：当前位自成一个字符
    if (prev >= 10 && prev <= 26) dp[i] += dp[i - 2]  // 第二种方式：与前一个字符组成一个字符
  }
  return dp[n]
}

// ---- test case ----
// console.log(numDecodings('0'))    // 0
// console.log(numDecodings('1'))    // 1  A
// console.log(numDecodings('12'))   // 2  AB L
console.log(numDecodings('226'))  // 3  BZ VF BBF
console.log(numDecodings('222312'))  // 3  BZ VF BBF
