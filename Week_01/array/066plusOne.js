/**
 * https://leetcode-cn.com/problems/plus-one/
 * 9. 加一（谷歌、字节跳动、Facebook 在半年内面试中考过）
 * easy | leetcode-066 | array
 */

// 思路：从右往左遍历，遇9进位
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (!Array.isArray(digits) || !digits.length) return [1];

  for (let i = digits.length - 1; i >= 0; --i) {
      if (digits[i] < 9) {
          digits[i] += 1;
          break;
      } else {
          digits[i] = 0;
      }
  }
  if (digits[0] === 0) {
      digits.unshift(1);
  }
  return digits;
};

console.time('plusOne')
console.log(plusOne([1, 2, 3]))
console.log(plusOne([8, 9, 9]))
console.log(plusOne([9, 9, 9]))
console.timeEnd('plusOne')
