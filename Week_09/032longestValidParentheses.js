/**
 * https://leetcode-cn.com/problems/longest-valid-parentheses/
 * 32. 最长有效括号
 * 
 * !!! 格式正确且连续
 */

// 解法一：用栈记录下标 O(n) O(n)
function longestValidParentheses(s) {
  if (s.length < 2) return 0
  const stack = [-1]  // 栈最左边位置用来存最后一个无法匹配的')'的下标，无则存 -1
  let res = 0
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '(') { // 左括号先入栈等待匹配
      stack.push(i)
    } else {
      stack.pop()
      if (stack.length > 0) {
        res = Math.max(res, i - stack[stack.length - 1])
      } else {
        stack.push(i) // 更新最左元素
      }
    }
    // console.log(stack, res, i)
  }
  return res
}

/**
 * i 0 1 2 3 4 5
 * s ( ) ( ( ) )
 *dp 0 2 0 0 2 6
 */
// DP O(n) O(n)
function longestValidParentheses(s) {
  const n = s.length
  if (n < 2) return 0
  const dp = Array(n).fill(0)
  let leftCnt = 0
  for (let i = 0; i < n; ++i) {
    if (s[i] === '(') {
      ++leftCnt
    } else if (leftCnt > 0) {
      --leftCnt
      dp[i]  = dp[i - 1] + 2
      // if (i - dp[i] >= 0) {
      //   const prev = dp[i - dp[i]] // 之前有效的部分
      //   dp[i] += prev
      // }
      dp[i] += i - dp[i] >= 0 ? dp[i - dp[i]] : 0
    }
  }
  // console.log(dp)
  return Math.max(...dp)
}

// ---- test case ----
console.log(longestValidParentheses('(()'))     // 2
console.log(longestValidParentheses('))))()())'))  // 4
console.log(longestValidParentheses(''))        // 0
console.log(longestValidParentheses('()()'))    // 4
console.log(longestValidParentheses('()(()'))   // 2
