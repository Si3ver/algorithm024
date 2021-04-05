/**
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
 * 557. 反转字符串中的单词 III
 */

// 调api
function reverseWords(s) {
  return s.split(' ').map(
      str => str.split('').reverse().join('')
    ).join(' ')
}

// ---- test case ----
console.log(reverseWords("Let's take LeetCode contest"))
