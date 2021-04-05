/**
 * https://leetcode-cn.com/problems/reverse-words-in-a-string/
 * 151. 翻转字符串里的单词
 */

// 解法一：调用api
function reverseWords(s) {
  return s.split(' ')
          .filter(str => !!str)
          .reverse()
          .join(' ')
}

// ---- test case ----
console.log(reverseWords('the sky is blue'))
console.log(reverseWords('  hello world!  '))
console.log(reverseWords('a good   example'))
console.log(reverseWords('  Bob    Loves  Alice   '))
console.log(reverseWords('Alice does not even like bob'))
