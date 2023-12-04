/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 * 【stack】
 * 
 */

const isValid = function(s) {
  const stack = [],
        m = new Map([
          [')', '('],
          [']', '['],
          ['}', '{']
        ])

  let res = true
  for(let i = 0; i < s.length; ++i) {
    const ch = s[i]
    if (!m.has(ch)) {
      stack.push(ch)
    } else {
      if (stack.length > 0 && stack[stack.length - 1] === m.get(ch)) {
        stack.pop()
      } else {
        res = false
        break
      }
    }
  }
  
  return stack.length ? false : res
}
