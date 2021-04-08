/**
 * https://leetcode-cn.com/problems/wildcard-matching/
 * 44. 通配符匹配 | hard
 */

function isMatch(s, p) {

}

// ---- test case ----
console.log(isMatch('aa', 'a'))       // false
console.log(isMatch('aa', '*'))       // true
console.log(isMatch('cb', '?a'))      // false
console.log(isMatch('adceb', '*a*b')) // true
console.log(isMatch('acdcb', 'a*c?b'))// false
