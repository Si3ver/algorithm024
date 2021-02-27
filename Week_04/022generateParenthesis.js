/**
 * https://leetcode-cn.com/problems/generate-parentheses/
 * 22. 括号生成
 * medium
 */

// 解法一：递归 + 剪枝
const generateParenthesis1 = function(n) {
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

// 解法二：非递归（自己维护栈） + 剪枝
const generateParenthesis2 = function(n) {
  const res = [], stack = [['(', 1, 0]]
  while (stack.length) {
    const [curStr, cntL, cntR] = stack.pop()
    if (cntL === n && cntR === n) res.push(curStr)
    if (cntR < cntL) stack.push([curStr + ')', cntL, cntR + 1])
    if (cntL < n)    stack.push([curStr + '(', cntL + 1, cntR])
  }
  return res
}


console.log(generateParenthesis1(3))
console.log(generateParenthesis2(3))
