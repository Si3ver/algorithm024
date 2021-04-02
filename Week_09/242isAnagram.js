/**
 * https://leetcode-cn.com/problems/valid-anagram/
 * 242. 有效的字母异位词
 */

// 解法一：词频统计 O(n) O(n)
// 思想即计数排序
function isAnagram(s, t) {
  const m = s.length, n = t.length
  if (m !== n) return false
  const startIdx = 'a'.codePointAt(0)
  const cnt = Array(26).fill(0)
  for (let i = 0; i < m; ++i) {
    const idx = s.codePointAt(i) - startIdx
    ++cnt[idx]
  }
  for (let i = 0; i < n; ++i) {
    const idx = t.codePointAt(i) - startIdx
    --cnt[idx]
  }
  // return cnt.join('') === '0'.repeat(26)
  return cnt.filter(item => item != 0).length === 0
}

// ---- test case ----
console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))
