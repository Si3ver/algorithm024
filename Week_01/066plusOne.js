/**
 * https://leetcode-cn.com/problems/plus-one/
 * 9. 加一（谷歌、字节跳动、Facebook 在半年内面试中考过）
 * easy | leetcode-066 | array
 */

// 思路：从右往左遍历，遇9进位
const plusOne = function(digits) {
  if (Object.prototype.toString.call(digits) !== '[object Array]' || digits.length < 1) return [1]

  for(let i = digits.length - 1; i >= 0; --i) {
    if (digits[i] < 9) {
      ++digits[i]
      break
    } else {
      digits[i] = 0
    }
  }
  if (digits[0] === 0) {
    digits.unshift(1)
  }
  return digits
}
