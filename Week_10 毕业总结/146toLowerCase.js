/**
 * https://leetcode-cn.com/problems/to-lower-case/
 * 709. 转换成小写字母
 * 
 * 扩展知识：ascii码点
 * + 数字零为 48
 * + 大写字母A 为 65
 * + 小写字母a 为 97
 */

// 解法一、调用语言内置API
function toLowerCase(str) {
  return str.toLowerCase()
}

// 解法二、利用正则匹配 + 码点API
function toLowerCase(str) {
  return str.replace(/[A-Z]/g, ch => {
    return String.fromCharCode(ch.charCodeAt() + 32)
  })
}

// ---- test case ----
console.log(toLowerCase('Hello'))
console.log(toLowerCase('here'))
console.log(toLowerCase('LOVELY'))
