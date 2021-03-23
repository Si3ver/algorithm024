/**
 * https://leetcode-cn.com/problems/add-strings/
 * 415. 字符串相加 | easy
 * 
 */

function addStrings(s1, s2) {
  const res = []
  let i = s1.length - 1, j = s2.length - 1, carry = 0
  while (i >= 0 || j >= 0 || carry > 0) {
    const x = i >= 0 ? Number(s1[i--]) : 0
    const y = j >= 0 ? Number(s2[j--]) : 0
    res.push((x + y + carry) % 10)
    carry = Math.floor((x + y + carry) / 10)
  }
  return res.reverse().join('')
}

// ---- test case ----
console.log(addStrings('234', '8498'))
console.log(addStrings('1', '9'))
