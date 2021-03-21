/**
 * https://leetcode-cn.com/problems/generate-parentheses/
 * 22. 括号生成 | medium
 * 
 */

// DFS + prun
const generateParenthesis = function(n) {
  const res = []
  const stack = [['(', 1, 0]]
  while (stack.length > 0) {
    const [curStr, cntL, cntR] = stack.pop()
    if (cntL === n && cntR === n) res.push(curStr)
    if (cntR < cntL) stack.push([curStr + ')', cntL, cntR + 1])
    if (cntL < n)    stack.push([curStr + '(', cntL + 1, cntR])
  }
  return res
}

// ---- test case ----
new Array(5)
  .fill(0)
  .map((_, idx) => {
    console.log(idx, generateParenthesis(idx))
  })
