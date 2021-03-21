/**
 * https://leetcode-cn.com/problems/climbing-stairs/
 * 70. 爬楼梯
 */

// DP
const climbStairs = function(n) {
  if (n < 4) return n
  let f1 = 2, f2 = 3, f3
  for(let i = 4; i <= n; ++i) {
    f3 = f1 + f2
    f1 = f2
    f2 = f3
  }
  return f3
}

// ---- test case ----
new Array(20)
  .fill(0)
  .map((_, idx) => {
    console.log(climbStairs(idx + 1))
  })
