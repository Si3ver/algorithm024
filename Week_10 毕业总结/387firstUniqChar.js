/**
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * 387. 字符串中的第一个唯一字符
 */

// O(n^2) O(1)
function firstUniqChar1(s) {
  for (let i = 0; i < s.length; ++i) {
    if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) {
      return i
    }
  }
  return -1
}

function firstUniqChar(s) {
  const UPPER = s.length
  const positions = Array(26).fill(UPPER) // 默认为 empty
  const pos0 = 'a'.codePointAt(0)
  for (let i = 0; i < s.length; ++i) {
    const chIdx = s.codePointAt(i) - pos0
    if (positions[chIdx] < UPPER) { // 已经出现过 & 未标记过
      positions[chIdx] = UPPER + 1
    } else if (positions[chIdx] === UPPER) { // 第一次出现
      positions[chIdx] = i
    } else {  // 已经出现过 & 已标记过
      continue
    }
  }
  const minPos = Math.min(...positions)
  return minPos >= UPPER ? -1 : minPos
}


// ---- test case ----
console.log(firstUniqChar('aadadaad'))    // -1
console.log(firstUniqChar('aabb'))        // -1
console.log(firstUniqChar('leetcode'))    // 0
console.log(firstUniqChar('loveleetcode'))// 2
