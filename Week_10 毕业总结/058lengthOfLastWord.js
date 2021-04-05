/**
 * https://leetcode-cn.com/problems/length-of-last-word/
 * 58. 最后一个单词的长度
 */

// 从后往前遍历
function lengthOfLastWord(str) {
  let cnt = 0, i = str.length - 1
  while (str.charAt(i) === ' ') --i // 去掉末尾空格
  for (; i >= 0; --i, ++cnt) {
    if (str.charAt(i) === ' ') {
      break
    }
  }
  return cnt
}

// ---- test case ----
console.log(lengthOfLastWord('Hello World'))
console.log(lengthOfLastWord('a'))
console.log(lengthOfLastWord('a '))
console.log(lengthOfLastWord(''))
