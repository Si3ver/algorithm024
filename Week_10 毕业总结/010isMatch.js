/**
 * https://leetcode-cn.com/problems/regular-expression-matching/
 * 10. 正则表达式匹配 | hard
 */

function isMatch(s, p) {

}

// ---- test case ----
console.log(isMatch('aa', 'a'))         // false
console.log(isMatch('aa', 'a*'))        // true
console.log(isMatch('ab', '.*'))        // true
console.log(isMatch('aab', 'c*a*b'))    // true
console.log(isMatch('mississippi', 'mis*is*p*.'))// false
