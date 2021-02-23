/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 * 
 * 122. 买卖股票的最佳时机 II
 * 
 * 买入卖出无限制，可以用贪心法
 */

const maxProfit = function(prices) {
  let res = 0
  for(let i = 0; i < prices.length - 1; ++i) {
    const profit = prices[i + 1] - prices[i]
    if (profit > 0) {
      res += profit
    }
  }
  return res
}
