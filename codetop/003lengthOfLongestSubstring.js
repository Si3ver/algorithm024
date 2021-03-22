/**
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/
 * 3. 无重复字符的最长子串 | medium
 * 
 * hashmap + 双指针
 */

const lengthOfLongestSubstring = function(s) {
  const m = new Map()     // 记录字母上一次出现的位置
  let left = 0, max = 0   // left 记录左边界
  for (let i = 0; i < s.length; ++i) {
    const ch = s[i]
    if (m.has(ch) && m.get(ch) >= left) { // 出现重复，更新 left
      left = m.get(ch) + 1
    }
    m.set(ch, i)
    max = Math.max(max, i - left + 1)
  }
  return max
}

// ---- test case ----
console.log(lengthOfLongestSubstring('abcabcbb')) // 3
console.log(lengthOfLongestSubstring('bbbbb'))    // 1
console.log(lengthOfLongestSubstring('pwwkew'))   // 3
console.log(lengthOfLongestSubstring(''))         // 0
