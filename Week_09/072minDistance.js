/**
 * https://leetcode-cn.com/problems/edit-distance/
 * 72. 编辑距离 | hard
 */

/*
定义：f(i, j)

if (w1,w2末尾字符相同)
---> f(i, j) = f(i-1, j-1)
else (w1,w2末尾字符相同)
--->  f(i, j) = min(
        f(i-1, j-1) + 1,  // 修改w1，把最后一个x修改为y，然后相同末尾可以去掉
        f(i-1, j) + 1,    // 删除w1末尾字符
        f(i, j-1) + 1,    // 删除w2末尾字符
      )
*/
function minDistance(word1, word2) {
  const m = word1.length, n = word2.length
  if (m === 0 || n === 0) return Math.max(m, n)
  const dp = Array.from(Array(m + 1)).map(_ => Array(n + 1).fill(0))
  for (let i = 1; i <= m; ++i) dp[i][0] = i
  for (let j = 1; j <= n; ++j) dp[0][j] = j
  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      if (word1[i-1] === word2[j-1]) {  // tip: 注意下标，是 wordl1[i-1] 与 word2[j-1]
        dp[i][j] = dp[i-1][j-1]
      } else {
        dp[i][j] = Math.min(
          dp[i-1][j-1] + 1, // 修改word1的末尾字符
          dp[i-1][j] + 1,   // 删word1
          dp[i][j-1] + 1,   // 删word2
        )
      }
    }
  }
  return dp[m][n]
}

// ---- test case ----
console.log(minDistance('horse', 'ros'))            // 3
console.log(minDistance('intention', 'execution'))  // 5
