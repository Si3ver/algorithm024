/**
 * @param {number} num
 * @return {number}
 * https://leetcode-cn.com/problems/add-digits/
 * 思路1: 强制转换
 */
var addDigits = function(num) {
  while(num > 9) {
      var sum = 0
      num = String(num).split('').forEach(item => sum += Number(item))
      num = sum
  }
  return num
};


/**
 * @param {number} num
 * @return {number}
 * 思路2: while
 */
var addDigits = function(num) {
  while(num > 9) {
      var sum = 0
      while(num > 9) {
        sum += num % 10
        num /= 10
      }
      num = sum
  }
  return num
};
