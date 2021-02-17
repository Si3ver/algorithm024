/**
 * medium
 * https://leetcode-cn.com/problems/generate-parentheses/
 * @param {number} n
 * @return {string[]}
 * 思路：递归、辅助函数、剪枝
 */
const generateParenthesis = function(n) {
  /**
   * 辅助函数
   * @param {Number} left 当前左括号的个数
   * @param {Number} right 当前右括号的个数
   * @param {Number} n 括号配额
   * @param {String} s 当前子问题的生成结果
   */
  const _generate = function(left, right, n, s) {
    // terminator
    if (left === n && right === n) {
      res.push(s)
      return null
    }
    // process
    // drill down
    if (left < n) {
      _generate(left + 1, right, n, s + '(')
    }
    if (right < left) {
      _generate(left, right + 1, n, s + ')')
    }
    // reverse states
  }

  const res = []
  _generate(0, 0, n, '')
  return res
};

// ---- test case ----
console.log(generateParenthesis(3))
