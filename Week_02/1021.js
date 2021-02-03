/**
 * @param {string} S
 * @return {string}
 * https://leetcode-cn.com/problems/remove-outermost-parentheses/
 * 思路： 一轮遍历，把非最外层的括号放入 res
 */
var removeOuterParentheses = function(S) {
  var res = [], cnt = 0
  for(var i = 0; i < S.length; ++i) {
      S[i] === ')' && --cnt
      cnt > 0 && res.push(S[i])
      S[i] === '(' && ++cnt
  }
  return res.join('')
};
