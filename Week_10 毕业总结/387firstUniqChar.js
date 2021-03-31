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

// array存字母位置
// O(n) O(26)
function firstUniqChar(s) {
  const positions = Array(26) // 默认为 empty
  const pos0 = 'a'.codePointAt(0)
  for (let i = 0; i < s.length; ++i) {
    const chIdx = s.codePointAt(i) - pos0
    if (positions[chIdx] >= 0) {  // 该字符出现过
      positions[chIdx] = -1       // 标记为-1
    } else if (positions[chIdx] !== -1) { // 字符没出现过
      positions[chIdx] = i
    }
  }
  let minPos = s.length
  for (let i = 0; i < positions.length; ++i) {
    if (positions[i] >= 0 && minPos > positions[i]) {
      minPos = positions[i]
    }
  }
  return minPos === s.length ? -1 : minPos
}



// ---- test case ----
console.log(firstUniqChar('aadadaad'))    // -1
console.log(firstUniqChar('aabb'))        // -1
console.log(firstUniqChar('leetcode'))    // 0
console.log(firstUniqChar('loveleetcode'))// 2
