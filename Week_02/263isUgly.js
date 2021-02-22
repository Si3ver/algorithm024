/**
 * https://leetcode-cn.com/problems/ugly-number/
 * 思路： 判断不断整除2、3、5后是否等于1
 */

const isUgly = function(num) {
  for(let factor of [2, 3, 5]) {
    while(num && num % factor === 0) num /= factor
  }
  return num === 1
}

// ---- test case ----
void [6, 8, 14].forEach(num => {
  console.log(isUgly(num))
})
