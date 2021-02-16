/**
 * 9. 加一（谷歌、字节跳动、Facebook 在半年内面试中考过）
 * easy | leetcode-066 | array
 * https://leetcode-cn.com/problems/plus-one/
 */
/**
 * 思路：从右往左遍历，遇9进位
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for(var i = digits.length - 1; i >= 0; --i) {
    if (digits[i] < 9){
      digits[i]++
      break
    } else {
      digits[i] = 0
      if(i === 0) {
          digits.unshift(1)
      }
    }
  }
  return digits
};
