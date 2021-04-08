/**
 * https://leetcode-cn.com/problems/distinct-subsequences/
 * 115. 不同的子序列 | hard
 * 
 * dp
 * if s[i] === t[j]
 *    f(i, j) = f(i-1, j) + f(i-1, j-1) // s去掉末尾 + s、t都去掉末尾
 * else
 *    f(i, j) = f(i-1, j)               // s去掉末尾
 */

// O(mn) O(n)
function numDistinct (s, t) {

}

// ---- test case ----
console.log(numDistinct('rabbbit', 'rabbit')) // 3
console.log(numDistinct('babgbag', 'bag'))    // 5
