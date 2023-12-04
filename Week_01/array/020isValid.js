/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 * 【stack】
 *
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const m = new Map([
      ['(', ')'],
      ['[', ']'],
      ['{', '}'],
  ]);
  const stack = [];
  let isMatch = true;
  for (let i = 0; i < s.length; ++i) {
      const ch = s[i];
      if (m.has(ch)) {
          stack.push(m.get(ch));
      } else if (stack.length && stack[stack.length - 1] === ch) {
          stack.pop();
      } else {
          isMatch = false;
      }
  }
  return isMatch && stack.length === 0;
};
