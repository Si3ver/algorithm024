/**
 * https://leetcode-cn.com/problems/lemonade-change/
 * 
 * 860. 柠檬水找零
 * greedy algorithm
 */

const lemonadeChange = function(bills) {
  if (Object.prototype.toString.call(bills) !== '[object Array]' || bills.length < 1) return true
  let five = 0, ten = 0
  for (const bill of bills) {
    if (bill === 5) {
      ++five
    } else if (bill === 10) {
      if (five === 0) {
        return false
      }
      --five
      ++ten
    } else {
      if (five > 0 && ten > 0) {
        --five
        --ten
      } else if (five >= 3) {
        five -= 3
      } else {
        return false
      }
    }
  }
  return true
}
