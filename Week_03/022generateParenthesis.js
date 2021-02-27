/**
 * medium
 * https://leetcode-cn.com/problems/generate-parentheses/
 * 
 * 思路：递归、辅助函数、剪枝
 */

// 解法一：递归
const generateParenthesis = function(n) {
  const _generate = (cntL, cntR, curStr) => {
    if (cntL === n && cntR === n) {
      res.push(curStr)
      return
    }
    if (cntL < n)    _generate(cntL + 1, cntR, curStr + '(')
    if (cntR < cntL) _generate(cntL, cntR + 1, curStr + ')')
  }

  const res = []
  _generate(0, 0, '')
  return res
}

// ---- test case ----
console.log(generateParenthesis(3))
