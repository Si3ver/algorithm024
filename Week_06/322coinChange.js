/**
 * https://leetcode-cn.com/problems/coin-change/
 * 322. 零钱兑换 | medium
 *
 * f(amount) = min((f(amount - coin) + 1) for coin in coins)
 * O(mn) O(n)
 *
 * 11 -> [1, 2, 5]
 * amount 0 1 2 3 4 5 6 7 8 9 10 11
 *        0 1 1 2 2 1 2 2 3 3  2  2
 */

const coinChange = function(coins, amount) {
  if (!Array.isArray(coins) || coins.length < 1 || amount < 0) return -1
  if (amount === 0) return 0
  const UPBOUND = amount + 1
  const dp = Array(amount + 1).fill(UPBOUND)
  dp[0] = 0
  for (let i = 1; i <= amount; ++i) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }
  return dp[amount] === UPBOUND ? -1 : dp[amount]
}

// ---- test case ----
console.log(coinChange([1,2,5], 11))
console.log(coinChange([2], 3))
console.log(coinChange([1], 0))
console.log(coinChange([1], 1))
console.log(coinChange([1], 2))
console.log(coinChange([186,419,83,408], 6249))
