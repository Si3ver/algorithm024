/**
 * https://leetcode.cn/problems/perfect-squares
 * 完全平方数
 *
 * dp[i] = min( i, f(i-j*j)+1 )
 * O(n ^ 3/2)
 */

var numSquares = function(n) {
    const dp = Array(n + 1).fill(0);
    for (let i = 1; i <= n; ++i) {
        dp[i] = i;
        for (let j = 1; i - j * j >= 0; ++j) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    // console.log(n, dp);
    return dp[n];
}

// ---- test case ----
console.log(numSquares(12));
console.log(numSquares(13));
