/**
 * 思路：fibnacci数列
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 3) return n
  var p1 = 1, p2 = 2, p3 = 3
  while(n-- > 3) {
    p1 = p2
    p2 = p3
    p3 = p1 + p2
  }
  return p3
};
