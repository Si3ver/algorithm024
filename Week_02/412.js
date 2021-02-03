/**
 * @param {number} n
 * @return {string[]}
 * https://leetcode-cn.com/problems/fizz-buzz/submissions/
 * 思路1: 暴力
 */
var fizzBuzz = function(n) {
  var res = []
  for(var i = 1; i <= n; ++i) {
      if (i % 3 === 0 && i % 5 === 0) {
          res.push('FizzBuzz')
      } else if (i % 3 === 0) {
          res.push('Fizz')
      } else if (i % 5 === 0) {
          res.push('Buzz')
      } else {
          res.push(String(i))
      }
  }
  return res
};


/**
 * @param {number} n
 * @return {string[]}
 * 思路2: 对照表
 */
var fizzBuzz = function(n) {
  var arr = ['FizzBuzz', '', '', 'Fizz', '', 'Buzz', 'Fizz', '', '', 'Fizz', 'Buzz', '', 'Fizz', '', ''], res = []
  for(var i = 1; i <= n; ++i) {
      if (!arr[i % 15]) {
          res.push(String(i))
      } else {
          res.push(arr[i % 15])
      }
  }
  return res
};
